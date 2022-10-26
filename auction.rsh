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
  ['link', Bytes(50)],
  ['title', Bytes(15)],
  ['description', Bytes(80)]
 ])

 const endResponse = Struct([
  ['didEnd', Bool],
  ['price', UInt]
 ])

 const Bidder = API('Bidder', {
  bid: Fun([UInt], Tuple(Address, UInt)),
  stopAuction: Fun([], endResponse),
  created: Fun([objectRep], Null),
  madeBid: Fun([UInt, UInt], Null),
  timedOut: Fun([UInt, UInt], Null),
  stoppedAuction: Fun([UInt], Null),
  checkTime: Fun([], UInt),
  auctionDown: Fun([UInt], Null),
 }); 

 const Auctions = Events({
  create: [UInt, Contract, UInt, Bytes(50), Bytes(15), Bytes(80)],
  that: [state, UInt, UInt],
  log: [state, UInt, UInt],
  created: [UInt, Contract, UInt, Bytes(50), Bytes(15), Bytes(80)]
 })
 init();

 Seller.only(() => {
  const auctionInfo = declassify(interact.getAuction);
 });
 Seller.publish(auctionInfo);
 const amt = 1;
 if (auctionInfo.isAuction) {
   commit();
   Seller.pay([[amt, auctionInfo.tokenId]]);
   assert(balance(auctionInfo.tokenId) == amt, "Balance of the Nft is incorrect");

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
   .invariant(balance(auctionInfo.tokenId) == amt)
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
     return [true, who, bid, false];
    }]; 
   })
   .api(Bidder.stopAuction, (notify) => {
    check(this == auctionInfo.owner, "You are not the Seller");
    if (this == auctionInfo.owner) {
     Auctions.log(state.pad('endSucces'), auctionInfo.id, lastPrice)
     const response = endResponse.fromObject({
      didEnd: true,
      price: lastPrice,
     })
     Auctions.log(state.pad('down'), auctionInfo.id, 1)
     notify(response);
    } else {
     Auctions.log(state.pad('endfailed'), auctionInfo.id, 0)
     const response = endResponse.fromObject({
      didEnd: false,
      price: lastPrice,
     })
     notify(response);
    }
    return [false, highestBidder, lastPrice, true]
   })
   .timeout(timeRemaining(), () => {
    Seller.publish()
    return [keepBidding, highestBidder, lastPrice, isFirstBid]
   })
   transfer(amt, auctionInfo.tokenId).to(highestBidder);
   Auctions.log(state.pad('sold'), auctionInfo.id, lastPrice)
   if (!isFirstBid){
    transfer(lastPrice).to(auctionInfo.owner);
    Auctions.log(state.pad('notsold'), auctionInfo.id, 0)
   }

  } else 
  {
   const KeepGoing = parallelReduce(true)
   .invariant(balance() == 0)
   .while(KeepGoing)
   .api(Bidder.created, (obj, notify) => {
    notify(null)
    const auctionStruct = objectRep.fromObject(obj)
    const auctionObject = objectRep.toObject(auctionStruct)
    Auctions.create(
    auctionInfo.id,
     getContract(),
     thisConsensusTime(),
     auctionInfo.link,
     auctionInfo.title,
     auctionInfo.description
    )
    return KeepGoing
   })
   .api(Bidder.madeBid, (fNum, sNum, notify) => {
    notify(null)
    const num1 = fNum
    const num2 = sNum
    Auctions.that(state.pad('bidmade'), num1, num2)

    return KeepGoing
   })
   .api(Bidder.stoppedAuction, (fNum, notify) => {
    notify(null)
    const num1 = fNum
    Auctions.that(state.pad('stopped'), num1, 0)

    return KeepGoing
   })
   .api(Bidder.timedOut, (fNum, sNum, notify) => {
    notify(null)
    const num1 = fNum
    const num2 = sNum
    Auctions.that(state.pad('timedOut'), num1, num2)

    return KeepGoing
   })
   .api(Bidder.auctionDown, (num1, notify) => {
    notify(null)
    const num = num1
    Auctions.that(state.pad('auctionDown'), num, 0)

    return KeepGoing
   })
   .api(Bidder.checkTime, (notify) => {
    notify(thisConsensusTime())
    
    return KeepGoing
   })
  }
  commit()
  exit()
 })