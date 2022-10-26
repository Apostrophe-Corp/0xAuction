/* eslint-disable no-array-constructor */
/* eslint-disable no-use-before-define */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'reach 0.1';

const state = Bytes(20);

export const main = Reach.App(() => {
 const Seller = Participant('Seller', {
  getAuction: Object({
   id: UInt,
   tokenId: Token,
   deadline: UInt,
   price: UInt,
   owner: Address,
   isAuction: Bool,
   link: Bytes(50),
   title: Bytes(15),
   description: Bytes(80),
  }),
 });

 const objectRep = Struct([
  ['id', UInt],
  ['contractInfo', Contract],
  ['bolckCreated', UInt],
  ['owner', Address],
  ['link', Bytes(50)],
  ['title', Bytes(15)],
  ['description', Bytes(80)]
 ])

 const endResponse = Struct([
  ['id', UInt],
  ['blockEnded', UInt], 
  ['lastBid', UInt],
 ])

 const Bidder = API('Bidder', {
  bid: Fun([UInt], Tuple(Address, UInt)),
  stopAuction: Fun([], endResponse),
 }); 

 const Auctions = Events({
  log: [state, UInt, UInt],
  created: [UInt, Contract, UInt, Bytes(50), Bytes(15), Bytes(80)]
 })
 init();

 Seller.only(() => {
  const {tokenId, ...auctionInfo} = declassify(interact.getAuction);
 });
 Seller.publish(tokenId, auctionInfo);
 const amt = 1;
 
  commit();
  Seller.pay([[amt, tokenId]]);
  assert(balance(tokenId) == amt, "Balance of the Nft is incorrect");

  Auctions.created(
  auctionInfo.id,
  getContract(),
  thisConsensusTime(),
  auctionInfo.link,
  auctionInfo.title,
  auctionInfo.description
  )

  const [timeRemaining, KeepGoing] = makeDeadline(auctionInfo.deadline)

  const [
  keepBidding, 
  highestBidder, 
  lastPrice, 
  isFirstBid,
  ] = parallelReduce([true, auctionInfo.owner, 0, true])
  .invariant(balance(tokenId) == amt)
  .invariant(balance() == (isFirstBid ? 0 : lastPrice))
  .while(KeepGoing() && keepBidding)
  .api_(Bidder.bid, (bid) => {
  check(bid > lastPrice, "Your bid is too low, please try again")
  return[bid, (notify) => {
    notify([highestBidder, lastPrice ]);
    if(!isFirstBid){
    transfer(lastPrice).to(highestBidder);
    }
    const who = this;
    if (bid > lastPrice) {
    Auctions.log(state.pad('bidSucess'), auctionInfo.id, bid)
    } else {
    Auctions.log(state.pad('bidFailed'), auctionInfo.id, lastPrice)
    }
    return [keepBidding, who, bid, false];
  }]; 
  })
  .api(Bidder.stopAuction, (notify) => {
  check(this == auctionInfo.owner, "You are not the Seller");
  if (this == auctionInfo.owner) {
    Auctions.log(state.pad('endSucces'), auctionInfo.id, lastPrice)
    const response = endResponse.fromObject({
    id: auctionInfo.id,
    blockEnded: thisConsensusTime(),
    lastBid: lastPrice,
    })
    Auctions.log(state.pad('down'), auctionInfo.id, 1)
    notify(response);
  } 
  return [false, highestBidder, lastPrice, true]
  })
  .timeout(timeRemaining(), () => {
  Seller.publish()
  return [keepBidding, highestBidder, lastPrice, isFirstBid]
  })
  transfer(amt, tokenId).to(highestBidder);
  Auctions.log(state.pad('sold'), auctionInfo.id, lastPrice)
  if (!isFirstBid){
  transfer(lastPrice).to(auctionInfo.owner);
  Auctions.log(state.pad('notsold'), auctionInfo.id, 0)
  }

 
  commit()
  exit()
 })