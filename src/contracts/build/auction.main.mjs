// Automatically generated with Reach 0.1.13 (f79282c4)
/* eslint-disable */
export const _version = '0.1.13';
export const _versionHash = '0.1.13 (f79282c4)';
export const _backendVersion = 27;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Contract;
  return {
    accepted: [ctc0, ctc1, ctc2, ctc2, ctc3],
    bidSuccess: [ctc1, ctc1, ctc2, ctc0],
    created: [ctc1, ctc2],
    down: [ctc1, ctc1, ctc2, ctc4, ctc1, ctc0],
    optInSuccess: [ctc1, ctc2],
    rejected: [ctc0, ctc1, ctc2, ctc2, ctc3]
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Object({
    deadline: ctc2,
    description: ctc3,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  
  const _hasEnded = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v778, v779, v780, v781, v786] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v778, v779, v780, v781, v796] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v779, v798, v842, v1627, v1628] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
      const [v779, v798, v842, v1711, v1712] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'))) {
      const [v779, v798, v842, v1794, v1795] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
      const [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _highestPrice = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v778, v779, v780, v781, v786] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v778, v779, v780, v781, v796] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v779, v798, v842, v1627, v1628] = svs;
      return (await ((async () => {
        
        
        return v842;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
      const [v779, v798, v842, v1711, v1712] = svs;
      return (await ((async () => {
        
        
        return v842;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394] = svs;
      return (await ((async () => {
        
        
        return v842;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'))) {
      const [v779, v798, v842, v1794, v1795] = svs;
      return (await ((async () => {
        
        
        return v842;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
      const [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const _live = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v778, v779, v780, v781, v786] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v778, v779, v780, v781, v796] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v779, v798, v842, v1627, v1628] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'))) {
      const [v779, v798, v842, v1711, v1712] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'))) {
      const [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'))) {
      const [v779, v798, v842, v1794, v1795] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'))) {
      const [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      hasEnded: {
        decode: _hasEnded,
        dom: [],
        rng: ctc7
        },
      highestPrice: {
        decode: _highestPrice,
        dom: [],
        rng: ctc2
        },
      live: {
        decode: _live,
        dom: [],
        rng: ctc7
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc6, ctc9],
      2: [ctc0, ctc1, ctc5, ctc6, ctc9],
      7: [ctc1, ctc0, ctc2, ctc9, ctc2],
      10: [ctc1, ctc0, ctc2, ctc9, ctc2],
      11: [ctc0, ctc1, ctc6, ctc0, ctc10, ctc4, ctc11, ctc0, ctc2, ctc2, ctc7, ctc7, ctc9, ctc2],
      14: [ctc1, ctc0, ctc2, ctc9, ctc2],
      15: [ctc0, ctc1, ctc6, ctc0, ctc10, ctc2, ctc2, ctc6, ctc4, ctc2, ctc11, ctc0, ctc7, ctc7, ctc2, ctc9, ctc2]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Object({
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc8 = stdlib.T_Null;
  const ctc9 = stdlib.T_Tuple([ctc1, ctc8]);
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc1]);
  const ctc12 = stdlib.T_Data({
    Auctioneer_stopAuction0_114: ctc10,
    Bidder_bid0_114: ctc11,
    Bidder_optIn0_114: ctc10
    });
  const ctc13 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc14 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc15 = stdlib.T_Bool;
  const ctc16 = stdlib.T_Data({
    Auctioneer_acceptSale0_419: ctc10,
    Auctioneer_rejectSale0_419: ctc10,
    Bidder_updateState0_419: ctc10
    });
  const ctc17 = stdlib.T_Tuple([ctc1, ctc1, ctc15]);
  const ctc18 = stdlib.T_Array(ctc17, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v755 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v756 = [v755];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc5, ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v779, v780, v781], secs: v783, time: v782, didSend: v44, from: v778 } = txn1;
  const v784 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0')];
  const v785 = stdlib.Array_set(v784, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0'));
  const v786 = stdlib.Array_set(v756, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0'), v785);
  ;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v790, time: v789, didSend: v51, from: v788 } = txn2;
  ;
  const v791 = v786[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0')];
  const v792 = v791[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0')];
  const v793 = stdlib.add(v792, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v795 = stdlib.Array_set(v791, '0', v793);
  const v796 = stdlib.Array_set(v786, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0'), v795);
  ;
  const v797 = stdlib.addressEq(v778, v788);
  stdlib.assert(v797, {
    at: './src/contracts/auction.rsh:85:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v778, v779, v780, v781, v796],
    evt_cnt: 0,
    funcNum: 2,
    lct: v789,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:87:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v800, time: v799, didSend: v55, from: v798 } = txn3;
      
      ;
      const v803 = [];
      const v804 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v781,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v805 = await txn3.getOutput('internal', 'v804', ctc7, v804);
      const v807 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '0')];
      const v808 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '1')];
      const v814 = v799;
      const v815 = await ctc.getContractInfo();
      const v816 = v780.title;
      const v817 = v780.description;
      const v818 = v780.price;
      const v822 = {
        blockCreated: v799,
        contractInfo: v815,
        description: v817,
        id: v808,
        owner: v778,
        price: v818,
        title: v816,
        tokenId: v779
        };
      const v823 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v781,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:116:39:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:116:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
      const v824 = await txn3.getOutput('internal', 'v823', ctc9, v823);
      const v826 = v824[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:116:39:application', stdlib.UInt_max, '0')];
      const v831 = stdlib.add(v807, v826);
      const v835 = v780.deadline;
      const v836 = stdlib.safeAdd(v799, v835);
      null;
      const v837 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: v808,
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v838 = v837;
      const v839 = v778;
      const v840 = true;
      const v841 = true;
      const v842 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:126:25:decimal', stdlib.UInt_max, '0');
      const v843 = v799;
      const v849 = v796;
      const v850 = v831;
      
      if (await (async () => {
        const v859 = stdlib.lt(v843, v836);
        const v860 = v859 ? v841 : false;
        
        return v860;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1369 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v781,
            remote: ({
              accs: [],
              apps: [],
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
              boxes: [],
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
        const v1370 = await txn4.getOutput('internal', 'v1369', ctc9, v1369);
        const v1372 = v1370[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
        const v1377 = stdlib.add(v850, v1372);
        null;
        const v1382 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
        if (v1382) {
          const v1384 = stdlib.safeAdd(v843, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v1385 = true;
          const v1386 = true;
          const v1387 = v843;
          const v1393 = v849;
          const v1394 = v1377;
          
          if (await (async () => {
            const v1401 = stdlib.lt(v1387, v1384);
            const v1402 = v1401 ? v1386 : false;
            
            return v1402;})()) {
            sim_r.isHalt = false;
            }
          else {
            if (v1385) {
              const v1587 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v1588 = v1587[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v1594 = stdlib.sub(v1588, v1588);
              const v1596 = stdlib.Array_set(v1587, '0', v1594);
              const v1597 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v1596);
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: v779
                });
              const v1602 = stdlib.sub(v1394, v1394);
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: undefined /* Nothing */
                });
              null;
              const v1610 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
              const v1611 = await txn5.getOutput('internal', 'v1610', ctc9, v1610);
              const v1613 = v1611[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v1618 = stdlib.add(v1602, v1613);
              const v1620 = true;
              const v1621 = v1387;
              const v1627 = v1597;
              const v1628 = v1618;
              
              if (await (async () => {
                
                return v1620;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1650 = v1627[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
                const v1651 = v1650[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v798,
                  tok: v779
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v798,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v779
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v1671 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
              const v1672 = v1671[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
              const v1678 = stdlib.sub(v1672, v1672);
              const v1680 = stdlib.Array_set(v1671, '0', v1678);
              const v1681 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v1680);
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: v779
                });
              const v1686 = stdlib.sub(v1394, v1394);
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: undefined /* Nothing */
                });
              null;
              const v1694 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
              const v1695 = await txn5.getOutput('internal', 'v1694', ctc9, v1694);
              const v1697 = v1695[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v1702 = stdlib.add(v1686, v1697);
              const v1704 = true;
              const v1705 = v1387;
              const v1711 = v1681;
              const v1712 = v1702;
              
              if (await (async () => {
                
                return v1704;})()) {
                sim_r.isHalt = false;
                }
              else {
                const v1734 = v1711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
                const v1735 = v1734[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v798,
                  tok: v779
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v798,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v779
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}}
        else {
          const v1755 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
          const v1756 = v1755[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
          const v1762 = stdlib.sub(v1756, v1756);
          const v1764 = stdlib.Array_set(v1755, '0', v1762);
          const v1765 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v1764);
          sim_r.txns.push({
            kind: 'from',
            to: v778,
            tok: v779
            });
          const v1770 = stdlib.sub(v1377, v1377);
          sim_r.txns.push({
            kind: 'from',
            to: v839,
            tok: undefined /* Nothing */
            });
          const v1777 = await (async () => {
            sim_r.txns.push({
              kind: 'remote',
              obj: v781,
              remote: ({
                accs: [],
                apps: [],
                bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                boxes: [],
                fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                toks: []
                })
              })
            return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
          const v1778 = await txn4.getOutput('internal', 'v1777', ctc9, v1777);
          const v1780 = v1778[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
          const v1785 = stdlib.add(v1770, v1780);
          const v1787 = true;
          const v1788 = v843;
          const v1794 = v1765;
          const v1795 = v1785;
          
          if (await (async () => {
            
            return v1787;})()) {
            sim_r.isHalt = false;
            }
          else {
            const v1817 = v1794[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
            const v1818 = v1817[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v798,
              tok: v779
              });
            sim_r.txns.push({
              kind: 'from',
              to: v798,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: v779
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }}}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc5, ctc6, ctc18],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v800, time: v799, didSend: v55, from: v798 } = txn3;
  ;
  const v803 = [];
  const v804 = undefined /* Remote */;
  const v805 = await txn3.getOutput('internal', 'v804', ctc7, v804);
  const v807 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '0')];
  const v808 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '1')];
  const v813 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v807);
  stdlib.assert(v813, {
    at: './src/contracts/auction.rsh:99:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v814 = v799;
  const v815 = await ctc.getContractInfo();
  const v816 = v780.title;
  const v817 = v780.description;
  const v818 = v780.price;
  const v822 = {
    blockCreated: v799,
    contractInfo: v815,
    description: v817,
    id: v808,
    owner: v778,
    price: v818,
    title: v816,
    tokenId: v779
    };
  const v823 = undefined /* Remote */;
  const v824 = await txn3.getOutput('internal', 'v823', ctc9, v823);
  const v826 = v824[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:116:39:application', stdlib.UInt_max, '0')];
  const v831 = stdlib.add(v807, v826);
  const v832 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v826);
  stdlib.assert(v832, {
    at: './src/contracts/auction.rsh:116:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v835 = v780.deadline;
  const v836 = stdlib.safeAdd(v799, v835);
  null;
  const v837 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: v808,
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v838 = v837;
  let v839 = v778;
  let v840 = true;
  let v841 = true;
  let v842 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:126:25:decimal', stdlib.UInt_max, '0');
  let v843 = v799;
  let v849 = v796;
  let v850 = v831;
  
  let txn4 = txn3;
  while (await (async () => {
    const v859 = stdlib.lt(v843, v836);
    const v860 = v859 ? v841 : false;
    
    return v860;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 12,
      out_tys: [ctc12],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn5;
    switch (v898[0]) {
      case 'Auctioneer_stopAuction0_114': {
        const v901 = v898[1];
        undefined /* setApiDetails */;
        ;
        const v914 = stdlib.addressEq(v897, v778);
        const v915 = stdlib.addressEq(v897, v798);
        const v916 = v914 ? true : v915;
        if (v916) {
          const v918 = {
            blockEnded: v899,
            id: v808,
            lastBid: v842
            };
          await txn5.getOutput('Auctioneer_stopAuction', 'v918', ctc13, v918);
          const cv838 = v918;
          const cv839 = v839;
          const cv840 = v840;
          const cv841 = false;
          const cv842 = v842;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v850;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        else {
          const v935 = {
            blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await txn5.getOutput('Auctioneer_stopAuction', 'v935', ctc13, v935);
          const cv838 = v838;
          const cv839 = v839;
          const cv840 = v840;
          const cv841 = v841;
          const cv842 = v842;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v850;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        break;
        }
      case 'Bidder_bid0_114': {
        const v1056 = v898[1];
        undefined /* setApiDetails */;
        const v1062 = v1056[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:30:spread', stdlib.UInt_max, '0')];
        const v1063 = stdlib.gt(v1062, v842);
        stdlib.assert(v1063, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:141:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:140:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Admin'
          });
        const v1067 = stdlib.add(v850, v1062);
        ;
        if (v840) {
          const v1143 = undefined /* Remote */;
          const v1144 = await txn5.getOutput('internal', 'v1143', ctc9, v1143);
          const v1146 = v1144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
          const v1151 = stdlib.add(v1067, v1146);
          const v1152 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1146);
          stdlib.assert(v1152, {
            at: './src/contracts/auction.rsh:147:91:application',
            fs: ['at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
            msg: 'remote bill check',
            who: 'Admin'
            });
          null;
          const v1154 = [v897, v842];
          await txn5.getOutput('Bidder_bid', 'v1154', ctc14, v1154);
          const cv838 = v838;
          const cv839 = v897;
          const cv840 = false;
          const cv841 = v841;
          const cv842 = v1062;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v1151;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        else {
          const v1115 = stdlib.sub(v1067, v842);
          ;
          const v1119 = undefined /* Remote */;
          const v1120 = await txn5.getOutput('internal', 'v1119', ctc9, v1119);
          const v1122 = v1120[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
          const v1127 = stdlib.add(v1115, v1122);
          const v1128 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1122);
          stdlib.assert(v1128, {
            at: './src/contracts/auction.rsh:147:91:application',
            fs: ['at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
            msg: 'remote bill check',
            who: 'Admin'
            });
          null;
          const v1130 = [v897, v842];
          await txn5.getOutput('Bidder_bid', 'v1130', ctc14, v1130);
          const cv838 = v838;
          const cv839 = v897;
          const cv840 = false;
          const cv841 = v841;
          const cv842 = v1062;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v1127;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        break;
        }
      case 'Bidder_optIn0_114': {
        const v1211 = v898[1];
        undefined /* setApiDetails */;
        const v1222 = stdlib.add(v850, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1321 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
        if (v1321) {
          const v1325 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1327 = stdlib.ge(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
          if (v1327) {
            const v1331 = stdlib.sub(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
            ;
            null;
            const v1332 = true;
            await txn5.getOutput('Bidder_optIn', 'v1332', ctc15, v1332);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1331;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}
          else {
            null;
            const v1339 = true;
            await txn5.getOutput('Bidder_optIn', 'v1339', ctc15, v1339);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1325;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}}
        else {
          const v1347 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
          if (v1347) {
            const v1351 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
            ;
            null;
            const v1352 = true;
            await txn5.getOutput('Bidder_optIn', 'v1352', ctc15, v1352);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1351;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}
          else {
            null;
            const v1359 = true;
            await txn5.getOutput('Bidder_optIn', 'v1359', ctc15, v1359);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1222;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}}
        break;
        }
      }
    
    }
  const v1369 = undefined /* Remote */;
  const v1370 = await txn4.getOutput('internal', 'v1369', ctc9, v1369);
  const v1372 = v1370[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
  const v1377 = stdlib.add(v850, v1372);
  const v1378 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1372);
  stdlib.assert(v1378, {
    at: './src/contracts/auction.rsh:188:42:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  null;
  const v1382 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
  if (v1382) {
    const v1384 = stdlib.safeAdd(v843, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    let v1385 = true;
    let v1386 = true;
    let v1387 = v843;
    let v1393 = v849;
    let v1394 = v1377;
    
    let txn5 = txn4;
    while (await (async () => {
      const v1401 = stdlib.lt(v1387, v1384);
      const v1402 = v1401 ? v1386 : false;
      
      return v1402;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc16],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn6;
      switch (v1431[0]) {
        case 'Auctioneer_acceptSale0_419': {
          const v1434 = v1431[1];
          undefined /* setApiDetails */;
          ;
          const v1442 = true;
          await txn6.getOutput('Auctioneer_acceptSale', 'v1442', ctc15, v1442);
          const v1448 = stdlib.addressEq(v1430, v778);
          const v1449 = stdlib.addressEq(v1430, v798);
          const v1450 = v1448 ? true : v1449;
          if (v1450) {
            const cv1385 = true;
            const cv1386 = false;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          else {
            const cv1385 = v1385;
            const cv1386 = v1386;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          break;
          }
        case 'Auctioneer_rejectSale0_419': {
          const v1485 = v1431[1];
          undefined /* setApiDetails */;
          ;
          const v1511 = false;
          await txn6.getOutput('Auctioneer_rejectSale', 'v1511', ctc15, v1511);
          const v1517 = stdlib.addressEq(v1430, v778);
          const v1518 = stdlib.addressEq(v1430, v798);
          const v1519 = v1517 ? true : v1518;
          if (v1519) {
            const cv1385 = false;
            const cv1386 = false;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          else {
            const cv1385 = v1385;
            const cv1386 = v1386;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          break;
          }
        case 'Bidder_updateState0_419': {
          const v1536 = v1431[1];
          undefined /* setApiDetails */;
          ;
          const v1580 = null;
          await txn6.getOutput('Bidder_updateState', 'v1580', ctc8, v1580);
          const cv1385 = v1385;
          const cv1386 = v1386;
          const cv1387 = v1432;
          const cv1393 = v1393;
          const cv1394 = v1394;
          
          v1385 = cv1385;
          v1386 = cv1386;
          v1387 = cv1387;
          v1393 = cv1393;
          v1394 = cv1394;
          
          txn5 = txn6;
          continue;
          break;
          }
        }
      
      }
    if (v1385) {
      const v1587 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
      const v1588 = v1587[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
      const v1594 = stdlib.sub(v1588, v1588);
      const v1596 = stdlib.Array_set(v1587, '0', v1594);
      const v1597 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v1596);
      ;
      const v1602 = stdlib.sub(v1394, v1394);
      ;
      null;
      const v1610 = undefined /* Remote */;
      const v1611 = await txn5.getOutput('internal', 'v1610', ctc9, v1610);
      const v1613 = v1611[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
      const v1618 = stdlib.add(v1602, v1613);
      const v1619 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1613);
      stdlib.assert(v1619, {
        at: './src/contracts/auction.rsh:250:37:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Admin'
        });
      let v1620 = true;
      let v1621 = v1387;
      let v1627 = v1597;
      let v1628 = v1618;
      
      let txn6 = txn5;
      while (await (async () => {
        
        return v1620;})()) {
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc10],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1640], secs: v1642, time: v1641, didSend: v632, from: v1639 } = txn7;
        undefined /* setApiDetails */;
        ;
        const v1644 = null;
        await txn7.getOutput('AdminCall_adminCall', 'v1644', ctc8, v1644);
        const cv1620 = true;
        const cv1621 = v1641;
        const cv1627 = v1627;
        const cv1628 = v1628;
        
        v1620 = cv1620;
        v1621 = cv1621;
        v1627 = cv1627;
        v1628 = cv1628;
        
        txn6 = txn7;
        continue;
        
        }
      const v1650 = v1627[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      const v1651 = v1650[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      }
    else {
      const v1671 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
      const v1672 = v1671[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
      const v1678 = stdlib.sub(v1672, v1672);
      const v1680 = stdlib.Array_set(v1671, '0', v1678);
      const v1681 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v1680);
      ;
      const v1686 = stdlib.sub(v1394, v1394);
      ;
      null;
      const v1694 = undefined /* Remote */;
      const v1695 = await txn5.getOutput('internal', 'v1694', ctc9, v1694);
      const v1697 = v1695[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
      const v1702 = stdlib.add(v1686, v1697);
      const v1703 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1697);
      stdlib.assert(v1703, {
        at: './src/contracts/auction.rsh:250:37:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Admin'
        });
      let v1704 = true;
      let v1705 = v1387;
      let v1711 = v1681;
      let v1712 = v1702;
      
      let txn6 = txn5;
      while (await (async () => {
        
        return v1704;})()) {
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc10],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1724], secs: v1726, time: v1725, didSend: v632, from: v1723 } = txn7;
        undefined /* setApiDetails */;
        ;
        const v1728 = null;
        await txn7.getOutput('AdminCall_adminCall', 'v1728', ctc8, v1728);
        const cv1704 = true;
        const cv1705 = v1725;
        const cv1711 = v1711;
        const cv1712 = v1712;
        
        v1704 = cv1704;
        v1705 = cv1705;
        v1711 = cv1711;
        v1712 = cv1712;
        
        txn6 = txn7;
        continue;
        
        }
      const v1734 = v1711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      const v1735 = v1734[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      }}
  else {
    const v1755 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
    const v1756 = v1755[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
    const v1762 = stdlib.sub(v1756, v1756);
    const v1764 = stdlib.Array_set(v1755, '0', v1762);
    const v1765 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v1764);
    ;
    const v1770 = stdlib.sub(v1377, v1377);
    ;
    const v1777 = undefined /* Remote */;
    const v1778 = await txn4.getOutput('internal', 'v1777', ctc9, v1777);
    const v1780 = v1778[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
    const v1785 = stdlib.add(v1770, v1780);
    const v1786 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1780);
    stdlib.assert(v1786, {
      at: './src/contracts/auction.rsh:250:37:application',
      fs: [],
      msg: 'remote bill check',
      who: 'Admin'
      });
    let v1787 = true;
    let v1788 = v843;
    let v1794 = v1765;
    let v1795 = v1785;
    
    let txn5 = txn4;
    while (await (async () => {
      
      return v1787;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 11,
        out_tys: [ctc10],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1807], secs: v1809, time: v1808, didSend: v632, from: v1806 } = txn6;
      undefined /* setApiDetails */;
      ;
      const v1811 = null;
      await txn6.getOutput('AdminCall_adminCall', 'v1811', ctc8, v1811);
      const cv1787 = true;
      const cv1788 = v1808;
      const cv1794 = v1794;
      const cv1795 = v1795;
      
      v1787 = cv1787;
      v1788 = cv1788;
      v1794 = cv1794;
      v1795 = cv1795;
      
      txn5 = txn6;
      continue;
      
      }
    const v1817 = v1794[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
    const v1818 = v1817[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  
  
  
  };
export async function _AdminCall_adminCall7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminCall_adminCall7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminCall_adminCall7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v779, v798, v842, v1627, v1628] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc2, ctc5, ctc2]);
  const v1636 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:255:21:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:21:function exp)', 'at ./src/contracts/auction.rsh:255:21:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:21:function exp)'],
    msg: 'in',
    who: 'AdminCall_adminCall'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v779, v798, v842, v1627, v1628, v1636],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:255:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1640], secs: v1642, time: v1641, didSend: v632, from: v1639 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "AdminCall_adminCall"
        });
      ;
      const v1644 = null;
      const v1645 = await txn1.getOutput('AdminCall_adminCall', 'v1644', ctc7, v1644);
      
      const v4660 = v1627;
      const v4661 = v1628;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc5, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1640], secs: v1642, time: v1641, didSend: v632, from: v1639 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1644 = null;
  const v1645 = await txn1.getOutput('AdminCall_adminCall', 'v1644', ctc7, v1644);
  if (v632) {
    stdlib.protect(ctc7, await interact.out(v1640, v1645), {
      at: './src/contracts/auction.rsh:255:22:application',
      fs: ['at ./src/contracts/auction.rsh:255:22:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:22:function exp)', 'at ./src/contracts/auction.rsh:256:28:application call to "ret" (defined at: ./src/contracts/auction.rsh:255:49:function exp)', 'at ./src/contracts/auction.rsh:255:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:49:function exp)'],
      msg: 'out',
      who: 'AdminCall_adminCall'
      });
    }
  else {
    }
  
  const v4660 = v1627;
  const v4661 = v1628;
  return;
  
  
  
  };
export async function _AdminCall_adminCall10(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminCall_adminCall10 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminCall_adminCall10 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v779, v798, v842, v1711, v1712] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), [ctc0, ctc1, ctc2, ctc5, ctc2]);
  const v1720 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:255:21:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:21:function exp)', 'at ./src/contracts/auction.rsh:255:21:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:21:function exp)'],
    msg: 'in',
    who: 'AdminCall_adminCall'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v779, v798, v842, v1711, v1712, v1720],
    evt_cnt: 1,
    funcNum: 8,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:255:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1724], secs: v1726, time: v1725, didSend: v632, from: v1723 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "AdminCall_adminCall"
        });
      ;
      const v1728 = null;
      const v1729 = await txn1.getOutput('AdminCall_adminCall', 'v1728', ctc7, v1728);
      
      const v4666 = v1711;
      const v4667 = v1712;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc5, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1724], secs: v1726, time: v1725, didSend: v632, from: v1723 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1728 = null;
  const v1729 = await txn1.getOutput('AdminCall_adminCall', 'v1728', ctc7, v1728);
  if (v632) {
    stdlib.protect(ctc7, await interact.out(v1724, v1729), {
      at: './src/contracts/auction.rsh:255:22:application',
      fs: ['at ./src/contracts/auction.rsh:255:22:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:22:function exp)', 'at ./src/contracts/auction.rsh:256:28:application call to "ret" (defined at: ./src/contracts/auction.rsh:255:49:function exp)', 'at ./src/contracts/auction.rsh:255:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:49:function exp)'],
      msg: 'out',
      who: 'AdminCall_adminCall'
      });
    }
  else {
    }
  
  const v4666 = v1711;
  const v4667 = v1712;
  return;
  
  
  
  };
export async function _AdminCall_adminCall14(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _AdminCall_adminCall14 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _AdminCall_adminCall14 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Token;
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bool;
  const ctc4 = stdlib.T_Tuple([ctc2, ctc2, ctc3]);
  const ctc5 = stdlib.T_Array(ctc4, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc6 = stdlib.T_Tuple([]);
  const ctc7 = stdlib.T_Null;
  
  
  const [v779, v798, v842, v1794, v1795] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14'), [ctc0, ctc1, ctc2, ctc5, ctc2]);
  const v1803 = stdlib.protect(ctc6, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:255:21:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:21:function exp)', 'at ./src/contracts/auction.rsh:255:21:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:21:function exp)'],
    msg: 'in',
    who: 'AdminCall_adminCall'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v779, v798, v842, v1794, v1795, v1803],
    evt_cnt: 1,
    funcNum: 11,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:255:21:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1807], secs: v1809, time: v1808, didSend: v632, from: v1806 } = txn1;
      
      sim_r.txns.push({
        kind: 'api',
        who: "AdminCall_adminCall"
        });
      ;
      const v1811 = null;
      const v1812 = await txn1.getOutput('AdminCall_adminCall', 'v1811', ctc7, v1811);
      
      const v4672 = v1794;
      const v4673 = v1795;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc5, ctc2, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v1807], secs: v1809, time: v1808, didSend: v632, from: v1806 } = txn1;
  undefined /* setApiDetails */;
  ;
  const v1811 = null;
  const v1812 = await txn1.getOutput('AdminCall_adminCall', 'v1811', ctc7, v1811);
  if (v632) {
    stdlib.protect(ctc7, await interact.out(v1807, v1812), {
      at: './src/contracts/auction.rsh:255:22:application',
      fs: ['at ./src/contracts/auction.rsh:255:22:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:22:function exp)', 'at ./src/contracts/auction.rsh:256:28:application call to "ret" (defined at: ./src/contracts/auction.rsh:255:49:function exp)', 'at ./src/contracts/auction.rsh:255:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:255:49:function exp)'],
      msg: 'out',
      who: 'AdminCall_adminCall'
      });
    }
  else {
    }
  
  const v4672 = v1794;
  const v4673 = v1795;
  return;
  
  
  
  };
export async function _Auctioneer_acceptSale11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Struct([['id', ctc5], ['blockEnded', ctc5], ['lastBid', ctc5]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Data({
    Auctioneer_acceptSale0_419: ctc3,
    Auctioneer_rejectSale0_419: ctc3,
    Bidder_updateState0_419: ctc3
    });
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Tuple([ctc5, ctc11]);
  
  
  const [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc0, ctc5, ctc5, ctc7, ctc7, ctc9, ctc5]);
  const v1405 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:208:29:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:208:29:function exp)', 'at ./src/contracts/auction.rsh:204:66:application call to "runAuctioneer_acceptSale0_419" (defined at: ./src/contracts/auction.rsh:208:29:function exp)', 'at ./src/contracts/auction.rsh:204:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:204:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1409 = ['Auctioneer_acceptSale0_419', v1405];
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394, v1409],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:208:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn1;
      
      switch (v1431[0]) {
        case 'Auctioneer_acceptSale0_419': {
          const v1434 = v1431[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1442 = true;
          const v1443 = await txn1.getOutput('Auctioneer_acceptSale', 'v1442', ctc7, v1442);
          
          const v1448 = stdlib.addressEq(v1430, v778);
          const v1449 = stdlib.addressEq(v1430, v798);
          const v1450 = v1448 ? true : v1449;
          if (v1450) {
            const v4676 = true;
            const v4677 = false;
            const v4679 = v1393;
            const v4680 = v1394;
            const v4681 = stdlib.lt(v1432, v1384);
            const v4682 = v4681 ? false : false;
            if (v4682) {
              sim_r.isHalt = false;
              }
            else {
              const v4683 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v4684 = v4683[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v4685 = stdlib.sub(v4684, v4684);
              const v4686 = stdlib.Array_set(v4683, '0', v4685);
              const v4687 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v4686);
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: v779
                });
              const v4688 = stdlib.sub(v1394, v1394);
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: undefined /* Nothing */
                });
              null;
              const v4689 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
              const v4690 = await txn1.getOutput('internal', 'v4689', ctc12, v4689);
              const v4691 = v4690[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v4692 = stdlib.add(v4688, v4691);
              const v4733 = v4687;
              const v4734 = v4692;
              sim_r.isHalt = false;
              }}
          else {
            const v4743 = v1385;
            const v4744 = v1386;
            const v4746 = v1393;
            const v4747 = v1394;
            const v4748 = stdlib.lt(v1432, v1384);
            const v4749 = v4748 ? v1386 : false;
            if (v4749) {
              sim_r.isHalt = false;
              }
            else {
              if (v1385) {
                const v4750 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v4751 = v4750[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v4752 = stdlib.sub(v4751, v4751);
                const v4753 = stdlib.Array_set(v4750, '0', v4752);
                const v4754 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v4753);
                sim_r.txns.push({
                  kind: 'from',
                  to: v839,
                  tok: v779
                  });
                const v4755 = stdlib.sub(v1394, v1394);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: undefined /* Nothing */
                  });
                null;
                const v4756 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
                const v4757 = await txn1.getOutput('internal', 'v4756', ctc12, v4756);
                const v4758 = v4757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v4759 = stdlib.add(v4755, v4758);
                const v4800 = v4754;
                const v4801 = v4759;
                sim_r.isHalt = false;
                }
              else {
                const v4774 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
                const v4775 = v4774[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
                const v4776 = stdlib.sub(v4775, v4775);
                const v4777 = stdlib.Array_set(v4774, '0', v4776);
                const v4778 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v4777);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: v779
                  });
                const v4779 = stdlib.sub(v1394, v1394);
                sim_r.txns.push({
                  kind: 'from',
                  to: v839,
                  tok: undefined /* Nothing */
                  });
                null;
                const v4780 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
                const v4781 = await txn1.getOutput('internal', 'v4780', ctc12, v4780);
                const v4782 = v4781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v4783 = stdlib.add(v4779, v4782);
                const v4806 = v4778;
                const v4807 = v4783;
                sim_r.isHalt = false;
                }}}
          break;
          }
        case 'Auctioneer_rejectSale0_419': {
          const v1485 = v1431[1];
          
          break;
          }
        case 'Bidder_updateState0_419': {
          const v1536 = v1431[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc0, ctc5, ctc5, ctc7, ctc7, ctc9, ctc5, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn1;
  switch (v1431[0]) {
    case 'Auctioneer_acceptSale0_419': {
      const v1434 = v1431[1];
      undefined /* setApiDetails */;
      ;
      const v1442 = true;
      const v1443 = await txn1.getOutput('Auctioneer_acceptSale', 'v1442', ctc7, v1442);
      if (v506) {
        stdlib.protect(ctc11, await interact.out(v1434, v1443), {
          at: './src/contracts/auction.rsh:208:30:application',
          fs: ['at ./src/contracts/auction.rsh:208:30:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:208:30:function exp)', 'at ./src/contracts/auction.rsh:209:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:208:62:function exp)', 'at ./src/contracts/auction.rsh:208:62:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:208:62:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v1448 = stdlib.addressEq(v1430, v778);
      const v1449 = stdlib.addressEq(v1430, v798);
      const v1450 = v1448 ? true : v1449;
      if (v1450) {
        const v4676 = true;
        const v4677 = false;
        const v4679 = v1393;
        const v4680 = v1394;
        const v4681 = stdlib.lt(v1432, v1384);
        const v4682 = v4681 ? false : false;
        if (v4682) {
          return;
          }
        else {
          const v4683 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
          const v4684 = v4683[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
          const v4685 = stdlib.sub(v4684, v4684);
          const v4686 = stdlib.Array_set(v4683, '0', v4685);
          const v4687 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v4686);
          ;
          const v4688 = stdlib.sub(v1394, v1394);
          ;
          null;
          const v4689 = undefined /* Remote */;
          const v4690 = await txn1.getOutput('internal', 'v4689', ctc12, v4689);
          const v4691 = v4690[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
          const v4692 = stdlib.add(v4688, v4691);
          const v4693 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4691);
          stdlib.assert(v4693, {
            at: './src/contracts/auction.rsh:250:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Auctioneer_acceptSale'
            });
          const v4733 = v4687;
          const v4734 = v4692;
          return;
          }}
      else {
        const v4743 = v1385;
        const v4744 = v1386;
        const v4746 = v1393;
        const v4747 = v1394;
        const v4748 = stdlib.lt(v1432, v1384);
        const v4749 = v4748 ? v1386 : false;
        if (v4749) {
          return;
          }
        else {
          if (v1385) {
            const v4750 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
            const v4751 = v4750[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
            const v4752 = stdlib.sub(v4751, v4751);
            const v4753 = stdlib.Array_set(v4750, '0', v4752);
            const v4754 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v4753);
            ;
            const v4755 = stdlib.sub(v1394, v1394);
            ;
            null;
            const v4756 = undefined /* Remote */;
            const v4757 = await txn1.getOutput('internal', 'v4756', ctc12, v4756);
            const v4758 = v4757[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v4759 = stdlib.add(v4755, v4758);
            const v4760 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4758);
            stdlib.assert(v4760, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Auctioneer_acceptSale'
              });
            const v4800 = v4754;
            const v4801 = v4759;
            return;
            }
          else {
            const v4774 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
            const v4775 = v4774[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
            const v4776 = stdlib.sub(v4775, v4775);
            const v4777 = stdlib.Array_set(v4774, '0', v4776);
            const v4778 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v4777);
            ;
            const v4779 = stdlib.sub(v1394, v1394);
            ;
            null;
            const v4780 = undefined /* Remote */;
            const v4781 = await txn1.getOutput('internal', 'v4780', ctc12, v4780);
            const v4782 = v4781[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v4783 = stdlib.add(v4779, v4782);
            const v4784 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4782);
            stdlib.assert(v4784, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Auctioneer_acceptSale'
              });
            const v4806 = v4778;
            const v4807 = v4783;
            return;
            }}}
      break;
      }
    case 'Auctioneer_rejectSale0_419': {
      const v1485 = v1431[1];
      return;
      break;
      }
    case 'Bidder_updateState0_419': {
      const v1536 = v1431[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Struct([['id', ctc5], ['blockEnded', ctc5], ['lastBid', ctc5]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Data({
    Auctioneer_acceptSale0_419: ctc3,
    Auctioneer_rejectSale0_419: ctc3,
    Bidder_updateState0_419: ctc3
    });
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Tuple([ctc5, ctc11]);
  
  
  const [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc0, ctc5, ctc5, ctc7, ctc7, ctc9, ctc5]);
  const v1413 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:213:29:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:213:29:function exp)', 'at ./src/contracts/auction.rsh:204:66:application call to "runAuctioneer_rejectSale0_419" (defined at: ./src/contracts/auction.rsh:213:29:function exp)', 'at ./src/contracts/auction.rsh:204:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:204:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1417 = ['Auctioneer_rejectSale0_419', v1413];
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394, v1417],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:213:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn1;
      
      switch (v1431[0]) {
        case 'Auctioneer_acceptSale0_419': {
          const v1434 = v1431[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_419': {
          const v1485 = v1431[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1511 = false;
          const v1512 = await txn1.getOutput('Auctioneer_rejectSale', 'v1511', ctc7, v1511);
          
          const v1517 = stdlib.addressEq(v1430, v778);
          const v1518 = stdlib.addressEq(v1430, v798);
          const v1519 = v1517 ? true : v1518;
          if (v1519) {
            const v5145 = false;
            const v5146 = false;
            const v5148 = v1393;
            const v5149 = v1394;
            const v5150 = stdlib.lt(v1432, v1384);
            const v5151 = v5150 ? false : false;
            if (v5151) {
              sim_r.isHalt = false;
              }
            else {
              const v5176 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
              const v5177 = v5176[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
              const v5178 = stdlib.sub(v5177, v5177);
              const v5179 = stdlib.Array_set(v5176, '0', v5178);
              const v5180 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v5179);
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: v779
                });
              const v5181 = stdlib.sub(v1394, v1394);
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: undefined /* Nothing */
                });
              null;
              const v5182 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
              const v5183 = await txn1.getOutput('internal', 'v5182', ctc12, v5182);
              const v5184 = v5183[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v5185 = stdlib.add(v5181, v5184);
              const v5208 = v5180;
              const v5209 = v5185;
              sim_r.isHalt = false;
              }}
          else {
            const v5212 = v1385;
            const v5213 = v1386;
            const v5215 = v1393;
            const v5216 = v1394;
            const v5217 = stdlib.lt(v1432, v1384);
            const v5218 = v5217 ? v1386 : false;
            if (v5218) {
              sim_r.isHalt = false;
              }
            else {
              if (v1385) {
                const v5219 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v5220 = v5219[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v5221 = stdlib.sub(v5220, v5220);
                const v5222 = stdlib.Array_set(v5219, '0', v5221);
                const v5223 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v5222);
                sim_r.txns.push({
                  kind: 'from',
                  to: v839,
                  tok: v779
                  });
                const v5224 = stdlib.sub(v1394, v1394);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: undefined /* Nothing */
                  });
                null;
                const v5225 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
                const v5226 = await txn1.getOutput('internal', 'v5225', ctc12, v5225);
                const v5227 = v5226[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v5228 = stdlib.add(v5224, v5227);
                const v5269 = v5223;
                const v5270 = v5228;
                sim_r.isHalt = false;
                }
              else {
                const v5243 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
                const v5244 = v5243[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
                const v5245 = stdlib.sub(v5244, v5244);
                const v5246 = stdlib.Array_set(v5243, '0', v5245);
                const v5247 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v5246);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: v779
                  });
                const v5248 = stdlib.sub(v1394, v1394);
                sim_r.txns.push({
                  kind: 'from',
                  to: v839,
                  tok: undefined /* Nothing */
                  });
                null;
                const v5249 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
                const v5250 = await txn1.getOutput('internal', 'v5249', ctc12, v5249);
                const v5251 = v5250[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v5252 = stdlib.add(v5248, v5251);
                const v5275 = v5247;
                const v5276 = v5252;
                sim_r.isHalt = false;
                }}}
          break;
          }
        case 'Bidder_updateState0_419': {
          const v1536 = v1431[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc0, ctc5, ctc5, ctc7, ctc7, ctc9, ctc5, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn1;
  switch (v1431[0]) {
    case 'Auctioneer_acceptSale0_419': {
      const v1434 = v1431[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_419': {
      const v1485 = v1431[1];
      undefined /* setApiDetails */;
      ;
      const v1511 = false;
      const v1512 = await txn1.getOutput('Auctioneer_rejectSale', 'v1511', ctc7, v1511);
      if (v506) {
        stdlib.protect(ctc11, await interact.out(v1485, v1512), {
          at: './src/contracts/auction.rsh:213:30:application',
          fs: ['at ./src/contracts/auction.rsh:213:30:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:213:30:function exp)', 'at ./src/contracts/auction.rsh:214:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:213:62:function exp)', 'at ./src/contracts/auction.rsh:213:62:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:213:62:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v1517 = stdlib.addressEq(v1430, v778);
      const v1518 = stdlib.addressEq(v1430, v798);
      const v1519 = v1517 ? true : v1518;
      if (v1519) {
        const v5145 = false;
        const v5146 = false;
        const v5148 = v1393;
        const v5149 = v1394;
        const v5150 = stdlib.lt(v1432, v1384);
        const v5151 = v5150 ? false : false;
        if (v5151) {
          return;
          }
        else {
          const v5176 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
          const v5177 = v5176[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
          const v5178 = stdlib.sub(v5177, v5177);
          const v5179 = stdlib.Array_set(v5176, '0', v5178);
          const v5180 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v5179);
          ;
          const v5181 = stdlib.sub(v1394, v1394);
          ;
          null;
          const v5182 = undefined /* Remote */;
          const v5183 = await txn1.getOutput('internal', 'v5182', ctc12, v5182);
          const v5184 = v5183[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
          const v5185 = stdlib.add(v5181, v5184);
          const v5186 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5184);
          stdlib.assert(v5186, {
            at: './src/contracts/auction.rsh:250:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Auctioneer_rejectSale'
            });
          const v5208 = v5180;
          const v5209 = v5185;
          return;
          }}
      else {
        const v5212 = v1385;
        const v5213 = v1386;
        const v5215 = v1393;
        const v5216 = v1394;
        const v5217 = stdlib.lt(v1432, v1384);
        const v5218 = v5217 ? v1386 : false;
        if (v5218) {
          return;
          }
        else {
          if (v1385) {
            const v5219 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
            const v5220 = v5219[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
            const v5221 = stdlib.sub(v5220, v5220);
            const v5222 = stdlib.Array_set(v5219, '0', v5221);
            const v5223 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v5222);
            ;
            const v5224 = stdlib.sub(v1394, v1394);
            ;
            null;
            const v5225 = undefined /* Remote */;
            const v5226 = await txn1.getOutput('internal', 'v5225', ctc12, v5225);
            const v5227 = v5226[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v5228 = stdlib.add(v5224, v5227);
            const v5229 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5227);
            stdlib.assert(v5229, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Auctioneer_rejectSale'
              });
            const v5269 = v5223;
            const v5270 = v5228;
            return;
            }
          else {
            const v5243 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
            const v5244 = v5243[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
            const v5245 = stdlib.sub(v5244, v5244);
            const v5246 = stdlib.Array_set(v5243, '0', v5245);
            const v5247 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v5246);
            ;
            const v5248 = stdlib.sub(v1394, v1394);
            ;
            null;
            const v5249 = undefined /* Remote */;
            const v5250 = await txn1.getOutput('internal', 'v5249', ctc12, v5249);
            const v5251 = v5250[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v5252 = stdlib.add(v5248, v5251);
            const v5253 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5251);
            stdlib.assert(v5253, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Auctioneer_rejectSale'
              });
            const v5275 = v5247;
            const v5276 = v5252;
            return;
            }}}
      break;
      }
    case 'Bidder_updateState0_419': {
      const v1536 = v1431[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction15(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction15 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction15 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_114: ctc3,
    Bidder_bid0_114: ctc10,
    Bidder_optIn0_114: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v863 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:168:29:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:168:29:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to "runAuctioneer_stopAuction0_114" (defined at: ./src/contracts/auction.rsh:168:29:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v867 = ['Auctioneer_stopAuction0_114', v863];
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850, v867],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn1;
      
      switch (v898[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v901 = v898[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          const v914 = stdlib.addressEq(v897, v778);
          const v915 = stdlib.addressEq(v897, v798);
          const v916 = v914 ? true : v915;
          if (v916) {
            const v918 = {
              blockEnded: v899,
              id: v808,
              lastBid: v842
              };
            const v919 = await txn1.getOutput('Auctioneer_stopAuction', 'v918', ctc6, v918);
            
            const v5346 = v918;
            const v5347 = v839;
            const v5348 = v840;
            const v5349 = false;
            const v5350 = v842;
            const v5352 = v849;
            const v5353 = v850;
            const v5354 = stdlib.lt(v899, v836);
            const v5355 = v5354 ? false : false;
            if (v5355) {
              sim_r.isHalt = false;
              }
            else {
              const v5356 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v5357 = await txn1.getOutput('internal', 'v5356', ctc13, v5356);
              const v5358 = v5357[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
              const v5359 = stdlib.add(v850, v5358);
              null;
              const v5361 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
              if (v5361) {
                const v5362 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v5462 = true;
                const v5463 = true;
                const v5465 = v849;
                const v5466 = v5359;
                const v5467 = stdlib.lt(v899, v5362);
                if (v5467) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v5469 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v5470 = v5469[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v5471 = stdlib.sub(v5470, v5470);
                  const v5472 = stdlib.Array_set(v5469, '0', v5471);
                  const v5473 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v5472);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v839,
                    tok: v779
                    });
                  const v5474 = stdlib.sub(v5359, v5359);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: undefined /* Nothing */
                    });
                  null;
                  const v5475 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v5476 = await txn1.getOutput('internal', 'v5475', ctc13, v5475);
                  const v5477 = v5476[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v5478 = stdlib.add(v5474, v5477);
                  const v5519 = v5473;
                  const v5520 = v5478;
                  sim_r.isHalt = false;
                  }}
              else {
                const v5438 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v5439 = v5438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v5440 = stdlib.sub(v5439, v5439);
                const v5441 = stdlib.Array_set(v5438, '0', v5440);
                const v5442 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v5441);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: v779
                  });
                const v5443 = stdlib.sub(v5359, v5359);
                sim_r.txns.push({
                  kind: 'from',
                  to: v839,
                  tok: undefined /* Nothing */
                  });
                const v5444 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v5445 = await txn1.getOutput('internal', 'v5444', ctc13, v5444);
                const v5446 = v5445[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v5447 = stdlib.add(v5443, v5446);
                const v5531 = v5442;
                const v5532 = v5447;
                sim_r.isHalt = false;
                }}}
          else {
            const v935 = {
              blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
              };
            const v936 = await txn1.getOutput('Auctioneer_stopAuction', 'v935', ctc6, v935);
            
            const v5535 = v838;
            const v5536 = v839;
            const v5537 = v840;
            const v5538 = v841;
            const v5539 = v842;
            const v5541 = v849;
            const v5542 = v850;
            const v5543 = stdlib.lt(v899, v836);
            const v5544 = v5543 ? v841 : false;
            if (v5544) {
              sim_r.isHalt = false;
              }
            else {
              const v5545 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v5546 = await txn1.getOutput('internal', 'v5545', ctc13, v5545);
              const v5547 = v5546[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
              const v5548 = stdlib.add(v850, v5547);
              null;
              const v5550 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
              if (v5550) {
                const v5551 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v5651 = true;
                const v5652 = true;
                const v5654 = v849;
                const v5655 = v5548;
                const v5656 = stdlib.lt(v899, v5551);
                if (v5656) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v5658 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v5659 = v5658[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v5660 = stdlib.sub(v5659, v5659);
                  const v5661 = stdlib.Array_set(v5658, '0', v5660);
                  const v5662 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v5661);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v839,
                    tok: v779
                    });
                  const v5663 = stdlib.sub(v5548, v5548);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: undefined /* Nothing */
                    });
                  null;
                  const v5664 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v5665 = await txn1.getOutput('internal', 'v5664', ctc13, v5664);
                  const v5666 = v5665[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v5667 = stdlib.add(v5663, v5666);
                  const v5708 = v5662;
                  const v5709 = v5667;
                  sim_r.isHalt = false;
                  }}
              else {
                const v5627 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v5628 = v5627[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v5629 = stdlib.sub(v5628, v5628);
                const v5630 = stdlib.Array_set(v5627, '0', v5629);
                const v5631 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v5630);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: v779
                  });
                const v5632 = stdlib.sub(v5548, v5548);
                sim_r.txns.push({
                  kind: 'from',
                  to: v839,
                  tok: undefined /* Nothing */
                  });
                const v5633 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v5634 = await txn1.getOutput('internal', 'v5633', ctc13, v5633);
                const v5635 = v5634[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v5636 = stdlib.add(v5632, v5635);
                const v5720 = v5631;
                const v5721 = v5636;
                sim_r.isHalt = false;
                }}}
          break;
          }
        case 'Bidder_bid0_114': {
          const v1056 = v898[1];
          
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1211 = v898[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn1;
  switch (v898[0]) {
    case 'Auctioneer_stopAuction0_114': {
      const v901 = v898[1];
      undefined /* setApiDetails */;
      ;
      const v914 = stdlib.addressEq(v897, v778);
      const v915 = stdlib.addressEq(v897, v798);
      const v916 = v914 ? true : v915;
      if (v916) {
        const v918 = {
          blockEnded: v899,
          id: v808,
          lastBid: v842
          };
        const v919 = await txn1.getOutput('Auctioneer_stopAuction', 'v918', ctc6, v918);
        if (v276) {
          stdlib.protect(ctc12, await interact.out(v901, v919), {
            at: './src/contracts/auction.rsh:168:30:application',
            fs: ['at ./src/contracts/auction.rsh:168:30:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:168:30:function exp)', 'at ./src/contracts/auction.rsh:175:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:168:63:function exp)', 'at ./src/contracts/auction.rsh:168:63:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:168:63:function exp)'],
            msg: 'out',
            who: 'Auctioneer_stopAuction'
            });
          }
        else {
          }
        
        const v5346 = v918;
        const v5347 = v839;
        const v5348 = v840;
        const v5349 = false;
        const v5350 = v842;
        const v5352 = v849;
        const v5353 = v850;
        const v5354 = stdlib.lt(v899, v836);
        const v5355 = v5354 ? false : false;
        if (v5355) {
          return;
          }
        else {
          const v5356 = undefined /* Remote */;
          const v5357 = await txn1.getOutput('internal', 'v5356', ctc13, v5356);
          const v5358 = v5357[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
          const v5359 = stdlib.add(v850, v5358);
          const v5360 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5358);
          stdlib.assert(v5360, {
            at: './src/contracts/auction.rsh:188:42:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Auctioneer_stopAuction'
            });
          null;
          const v5361 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
          if (v5361) {
            const v5362 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v5462 = true;
            const v5463 = true;
            const v5465 = v849;
            const v5466 = v5359;
            const v5467 = stdlib.lt(v899, v5362);
            if (v5467) {
              return;
              }
            else {
              const v5469 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v5470 = v5469[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v5471 = stdlib.sub(v5470, v5470);
              const v5472 = stdlib.Array_set(v5469, '0', v5471);
              const v5473 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v5472);
              ;
              const v5474 = stdlib.sub(v5359, v5359);
              ;
              null;
              const v5475 = undefined /* Remote */;
              const v5476 = await txn1.getOutput('internal', 'v5475', ctc13, v5475);
              const v5477 = v5476[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v5478 = stdlib.add(v5474, v5477);
              const v5479 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5477);
              stdlib.assert(v5479, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Auctioneer_stopAuction'
                });
              const v5519 = v5473;
              const v5520 = v5478;
              return;
              }}
          else {
            const v5438 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v5439 = v5438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v5440 = stdlib.sub(v5439, v5439);
            const v5441 = stdlib.Array_set(v5438, '0', v5440);
            const v5442 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v5441);
            ;
            const v5443 = stdlib.sub(v5359, v5359);
            ;
            const v5444 = undefined /* Remote */;
            const v5445 = await txn1.getOutput('internal', 'v5444', ctc13, v5444);
            const v5446 = v5445[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v5447 = stdlib.add(v5443, v5446);
            const v5448 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5446);
            stdlib.assert(v5448, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Auctioneer_stopAuction'
              });
            const v5531 = v5442;
            const v5532 = v5447;
            return;
            }}}
      else {
        const v935 = {
          blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
          lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
          };
        const v936 = await txn1.getOutput('Auctioneer_stopAuction', 'v935', ctc6, v935);
        if (v276) {
          stdlib.protect(ctc12, await interact.out(v901, v936), {
            at: './src/contracts/auction.rsh:168:30:application',
            fs: ['at ./src/contracts/auction.rsh:168:30:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:168:30:function exp)', 'at ./src/contracts/auction.rsh:183:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:168:63:function exp)', 'at ./src/contracts/auction.rsh:168:63:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:168:63:function exp)'],
            msg: 'out',
            who: 'Auctioneer_stopAuction'
            });
          }
        else {
          }
        
        const v5535 = v838;
        const v5536 = v839;
        const v5537 = v840;
        const v5538 = v841;
        const v5539 = v842;
        const v5541 = v849;
        const v5542 = v850;
        const v5543 = stdlib.lt(v899, v836);
        const v5544 = v5543 ? v841 : false;
        if (v5544) {
          return;
          }
        else {
          const v5545 = undefined /* Remote */;
          const v5546 = await txn1.getOutput('internal', 'v5545', ctc13, v5545);
          const v5547 = v5546[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
          const v5548 = stdlib.add(v850, v5547);
          const v5549 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5547);
          stdlib.assert(v5549, {
            at: './src/contracts/auction.rsh:188:42:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Auctioneer_stopAuction'
            });
          null;
          const v5550 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
          if (v5550) {
            const v5551 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v5651 = true;
            const v5652 = true;
            const v5654 = v849;
            const v5655 = v5548;
            const v5656 = stdlib.lt(v899, v5551);
            if (v5656) {
              return;
              }
            else {
              const v5658 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v5659 = v5658[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v5660 = stdlib.sub(v5659, v5659);
              const v5661 = stdlib.Array_set(v5658, '0', v5660);
              const v5662 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v5661);
              ;
              const v5663 = stdlib.sub(v5548, v5548);
              ;
              null;
              const v5664 = undefined /* Remote */;
              const v5665 = await txn1.getOutput('internal', 'v5664', ctc13, v5664);
              const v5666 = v5665[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v5667 = stdlib.add(v5663, v5666);
              const v5668 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5666);
              stdlib.assert(v5668, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Auctioneer_stopAuction'
                });
              const v5708 = v5662;
              const v5709 = v5667;
              return;
              }}
          else {
            const v5627 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v5628 = v5627[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v5629 = stdlib.sub(v5628, v5628);
            const v5630 = stdlib.Array_set(v5627, '0', v5629);
            const v5631 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v5630);
            ;
            const v5632 = stdlib.sub(v5548, v5548);
            ;
            const v5633 = undefined /* Remote */;
            const v5634 = await txn1.getOutput('internal', 'v5633', ctc13, v5633);
            const v5635 = v5634[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v5636 = stdlib.add(v5632, v5635);
            const v5637 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v5635);
            stdlib.assert(v5637, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Auctioneer_stopAuction'
              });
            const v5720 = v5631;
            const v5721 = v5636;
            return;
            }}}
      break;
      }
    case 'Bidder_bid0_114': {
      const v1056 = v898[1];
      return;
      break;
      }
    case 'Bidder_optIn0_114': {
      const v1211 = v898[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid15(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid15 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid15 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_114: ctc3,
    Bidder_bid0_114: ctc10,
    Bidder_optIn0_114: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  const ctc14 = stdlib.T_Tuple([ctc0, ctc4]);
  
  
  const [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v871 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:140:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to "runBidder_bid0_114" (defined at: ./src/contracts/auction.rsh:140:30:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v872 = v871[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v874 = stdlib.gt(v872, v842);
  stdlib.assert(v874, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:141:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:140:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to "runBidder_bid0_114" (defined at: ./src/contracts/auction.rsh:140:30:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v881 = ['Bidder_bid0_114', v871];
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850, v881],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v872, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn1;
      
      switch (v898[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v901 = v898[1];
          
          break;
          }
        case 'Bidder_bid0_114': {
          const v1056 = v898[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v1062 = v1056[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:30:spread', stdlib.UInt_max, '0')];
          const v1067 = stdlib.add(v850, v1062);
          sim_r.txns.push({
            amt: v1062,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          if (v840) {
            const v1143 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v781,
                remote: ({
                  accs: [v897],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1144 = await txn1.getOutput('internal', 'v1143', ctc13, v1143);
            const v1146 = v1144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
            const v1151 = stdlib.add(v1067, v1146);
            null;
            const v1154 = [v897, v842];
            const v1155 = await txn1.getOutput('Bidder_bid', 'v1154', ctc14, v1154);
            
            const v7236 = v838;
            const v7237 = v897;
            const v7238 = false;
            const v7239 = v841;
            const v7240 = v1062;
            const v7242 = v849;
            const v7243 = v1151;
            const v7244 = stdlib.lt(v899, v836);
            const v7245 = v7244 ? v841 : false;
            if (v7245) {
              sim_r.isHalt = false;
              }
            else {
              const v7246 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v7247 = await txn1.getOutput('internal', 'v7246', ctc13, v7246);
              const v7248 = v7247[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
              const v7249 = stdlib.add(v1151, v7248);
              null;
              const v7251 = stdlib.gt(v1062, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
              if (v7251) {
                const v7252 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v7352 = true;
                const v7353 = true;
                const v7355 = v849;
                const v7356 = v7249;
                const v7357 = stdlib.lt(v899, v7252);
                if (v7357) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v7359 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v7360 = v7359[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v7361 = stdlib.sub(v7360, v7360);
                  const v7362 = stdlib.Array_set(v7359, '0', v7361);
                  const v7363 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v7362);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v897,
                    tok: v779
                    });
                  const v7364 = stdlib.sub(v7249, v7249);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: undefined /* Nothing */
                    });
                  null;
                  const v7365 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v7366 = await txn1.getOutput('internal', 'v7365', ctc13, v7365);
                  const v7367 = v7366[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v7368 = stdlib.add(v7364, v7367);
                  const v7409 = v7363;
                  const v7410 = v7368;
                  sim_r.isHalt = false;
                  }}
              else {
                const v7328 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v7329 = v7328[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v7330 = stdlib.sub(v7329, v7329);
                const v7331 = stdlib.Array_set(v7328, '0', v7330);
                const v7332 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v7331);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: v779
                  });
                const v7333 = stdlib.sub(v7249, v7249);
                sim_r.txns.push({
                  kind: 'from',
                  to: v897,
                  tok: undefined /* Nothing */
                  });
                const v7334 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v7335 = await txn1.getOutput('internal', 'v7334', ctc13, v7334);
                const v7336 = v7335[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v7337 = stdlib.add(v7333, v7336);
                const v7421 = v7332;
                const v7422 = v7337;
                sim_r.isHalt = false;
                }}}
          else {
            const v1115 = stdlib.sub(v1067, v842);
            sim_r.txns.push({
              kind: 'from',
              to: v839,
              tok: undefined /* Nothing */
              });
            const v1119 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v781,
                remote: ({
                  accs: [v897],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1120 = await txn1.getOutput('internal', 'v1119', ctc13, v1119);
            const v1122 = v1120[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
            const v1127 = stdlib.add(v1115, v1122);
            null;
            const v1130 = [v897, v842];
            const v1131 = await txn1.getOutput('Bidder_bid', 'v1130', ctc14, v1130);
            
            const v7425 = v838;
            const v7426 = v897;
            const v7427 = false;
            const v7428 = v841;
            const v7429 = v1062;
            const v7431 = v849;
            const v7432 = v1127;
            const v7433 = stdlib.lt(v899, v836);
            const v7434 = v7433 ? v841 : false;
            if (v7434) {
              sim_r.isHalt = false;
              }
            else {
              const v7435 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v7436 = await txn1.getOutput('internal', 'v7435', ctc13, v7435);
              const v7437 = v7436[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
              const v7438 = stdlib.add(v1127, v7437);
              null;
              const v7440 = stdlib.gt(v1062, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
              if (v7440) {
                const v7441 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v7541 = true;
                const v7542 = true;
                const v7544 = v849;
                const v7545 = v7438;
                const v7546 = stdlib.lt(v899, v7441);
                if (v7546) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v7548 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v7549 = v7548[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                  const v7550 = stdlib.sub(v7549, v7549);
                  const v7551 = stdlib.Array_set(v7548, '0', v7550);
                  const v7552 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v7551);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v897,
                    tok: v779
                    });
                  const v7553 = stdlib.sub(v7438, v7438);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: undefined /* Nothing */
                    });
                  null;
                  const v7554 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v7555 = await txn1.getOutput('internal', 'v7554', ctc13, v7554);
                  const v7556 = v7555[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v7557 = stdlib.add(v7553, v7556);
                  const v7598 = v7552;
                  const v7599 = v7557;
                  sim_r.isHalt = false;
                  }}
              else {
                const v7517 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v7518 = v7517[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                const v7519 = stdlib.sub(v7518, v7518);
                const v7520 = stdlib.Array_set(v7517, '0', v7519);
                const v7521 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v7520);
                sim_r.txns.push({
                  kind: 'from',
                  to: v778,
                  tok: v779
                  });
                const v7522 = stdlib.sub(v7438, v7438);
                sim_r.txns.push({
                  kind: 'from',
                  to: v897,
                  tok: undefined /* Nothing */
                  });
                const v7523 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v7524 = await txn1.getOutput('internal', 'v7523', ctc13, v7523);
                const v7525 = v7524[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v7526 = stdlib.add(v7522, v7525);
                const v7610 = v7521;
                const v7611 = v7526;
                sim_r.isHalt = false;
                }}}
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1211 = v898[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn1;
  switch (v898[0]) {
    case 'Auctioneer_stopAuction0_114': {
      const v901 = v898[1];
      return;
      break;
      }
    case 'Bidder_bid0_114': {
      const v1056 = v898[1];
      undefined /* setApiDetails */;
      const v1062 = v1056[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:30:spread', stdlib.UInt_max, '0')];
      const v1063 = stdlib.gt(v1062, v842);
      stdlib.assert(v1063, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:141:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:140:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v1067 = stdlib.add(v850, v1062);
      ;
      if (v840) {
        const v1143 = undefined /* Remote */;
        const v1144 = await txn1.getOutput('internal', 'v1143', ctc13, v1143);
        const v1146 = v1144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
        const v1151 = stdlib.add(v1067, v1146);
        const v1152 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1146);
        stdlib.assert(v1152, {
          at: './src/contracts/auction.rsh:147:91:application',
          fs: ['at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1154 = [v897, v842];
        const v1155 = await txn1.getOutput('Bidder_bid', 'v1154', ctc14, v1154);
        if (v276) {
          stdlib.protect(ctc12, await interact.out(v1056, v1155), {
            at: './src/contracts/auction.rsh:140:31:application',
            fs: ['at ./src/contracts/auction.rsh:140:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:31:function exp)', 'at ./src/contracts/auction.rsh:149:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:144:50:function exp)', 'at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v7236 = v838;
        const v7237 = v897;
        const v7238 = false;
        const v7239 = v841;
        const v7240 = v1062;
        const v7242 = v849;
        const v7243 = v1151;
        const v7244 = stdlib.lt(v899, v836);
        const v7245 = v7244 ? v841 : false;
        if (v7245) {
          return;
          }
        else {
          const v7246 = undefined /* Remote */;
          const v7247 = await txn1.getOutput('internal', 'v7246', ctc13, v7246);
          const v7248 = v7247[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
          const v7249 = stdlib.add(v1151, v7248);
          const v7250 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7248);
          stdlib.assert(v7250, {
            at: './src/contracts/auction.rsh:188:42:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v7251 = stdlib.gt(v1062, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
          if (v7251) {
            const v7252 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v7352 = true;
            const v7353 = true;
            const v7355 = v849;
            const v7356 = v7249;
            const v7357 = stdlib.lt(v899, v7252);
            if (v7357) {
              return;
              }
            else {
              const v7359 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v7360 = v7359[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v7361 = stdlib.sub(v7360, v7360);
              const v7362 = stdlib.Array_set(v7359, '0', v7361);
              const v7363 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v7362);
              ;
              const v7364 = stdlib.sub(v7249, v7249);
              ;
              null;
              const v7365 = undefined /* Remote */;
              const v7366 = await txn1.getOutput('internal', 'v7365', ctc13, v7365);
              const v7367 = v7366[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v7368 = stdlib.add(v7364, v7367);
              const v7369 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7367);
              stdlib.assert(v7369, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Bidder_bid'
                });
              const v7409 = v7363;
              const v7410 = v7368;
              return;
              }}
          else {
            const v7328 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v7329 = v7328[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v7330 = stdlib.sub(v7329, v7329);
            const v7331 = stdlib.Array_set(v7328, '0', v7330);
            const v7332 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v7331);
            ;
            const v7333 = stdlib.sub(v7249, v7249);
            ;
            const v7334 = undefined /* Remote */;
            const v7335 = await txn1.getOutput('internal', 'v7334', ctc13, v7334);
            const v7336 = v7335[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v7337 = stdlib.add(v7333, v7336);
            const v7338 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7336);
            stdlib.assert(v7338, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_bid'
              });
            const v7421 = v7332;
            const v7422 = v7337;
            return;
            }}}
      else {
        const v1115 = stdlib.sub(v1067, v842);
        ;
        const v1119 = undefined /* Remote */;
        const v1120 = await txn1.getOutput('internal', 'v1119', ctc13, v1119);
        const v1122 = v1120[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
        const v1127 = stdlib.add(v1115, v1122);
        const v1128 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1122);
        stdlib.assert(v1128, {
          at: './src/contracts/auction.rsh:147:91:application',
          fs: ['at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1130 = [v897, v842];
        const v1131 = await txn1.getOutput('Bidder_bid', 'v1130', ctc14, v1130);
        if (v276) {
          stdlib.protect(ctc12, await interact.out(v1056, v1131), {
            at: './src/contracts/auction.rsh:140:31:application',
            fs: ['at ./src/contracts/auction.rsh:140:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:31:function exp)', 'at ./src/contracts/auction.rsh:149:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:144:50:function exp)', 'at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v7425 = v838;
        const v7426 = v897;
        const v7427 = false;
        const v7428 = v841;
        const v7429 = v1062;
        const v7431 = v849;
        const v7432 = v1127;
        const v7433 = stdlib.lt(v899, v836);
        const v7434 = v7433 ? v841 : false;
        if (v7434) {
          return;
          }
        else {
          const v7435 = undefined /* Remote */;
          const v7436 = await txn1.getOutput('internal', 'v7435', ctc13, v7435);
          const v7437 = v7436[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
          const v7438 = stdlib.add(v1127, v7437);
          const v7439 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7437);
          stdlib.assert(v7439, {
            at: './src/contracts/auction.rsh:188:42:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v7440 = stdlib.gt(v1062, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
          if (v7440) {
            const v7441 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v7541 = true;
            const v7542 = true;
            const v7544 = v849;
            const v7545 = v7438;
            const v7546 = stdlib.lt(v899, v7441);
            if (v7546) {
              return;
              }
            else {
              const v7548 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v7549 = v7548[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v7550 = stdlib.sub(v7549, v7549);
              const v7551 = stdlib.Array_set(v7548, '0', v7550);
              const v7552 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v7551);
              ;
              const v7553 = stdlib.sub(v7438, v7438);
              ;
              null;
              const v7554 = undefined /* Remote */;
              const v7555 = await txn1.getOutput('internal', 'v7554', ctc13, v7554);
              const v7556 = v7555[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v7557 = stdlib.add(v7553, v7556);
              const v7558 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7556);
              stdlib.assert(v7558, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Bidder_bid'
                });
              const v7598 = v7552;
              const v7599 = v7557;
              return;
              }}
          else {
            const v7517 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v7518 = v7517[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
            const v7519 = stdlib.sub(v7518, v7518);
            const v7520 = stdlib.Array_set(v7517, '0', v7519);
            const v7521 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v7520);
            ;
            const v7522 = stdlib.sub(v7438, v7438);
            ;
            const v7523 = undefined /* Remote */;
            const v7524 = await txn1.getOutput('internal', 'v7523', ctc13, v7523);
            const v7525 = v7524[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
            const v7526 = stdlib.add(v7522, v7525);
            const v7527 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v7525);
            stdlib.assert(v7527, {
              at: './src/contracts/auction.rsh:250:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_bid'
              });
            const v7610 = v7521;
            const v7611 = v7526;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_114': {
      const v1211 = v898[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn15(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn15 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn15 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc6 = stdlib.T_Struct([['id', ctc4], ['blockEnded', ctc4], ['lastBid', ctc4]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc4, ctc4, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc4]);
  const ctc11 = stdlib.T_Data({
    Auctioneer_stopAuction0_114: ctc3,
    Bidder_bid0_114: ctc10,
    Bidder_optIn0_114: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v885 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:154:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:48:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to "runBidder_optIn0_114" (defined at: ./src/contracts/auction.rsh:154:30:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v889 = ['Bidder_optIn0_114', v885];
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v779, v781, v798, v803, v808, v814, v815, v816, v836, v838, v839, v840, v841, v842, v849, v850, v889],
    evt_cnt: 1,
    funcNum: 12,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn1;
      
      switch (v898[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v901 = v898[1];
          
          break;
          }
        case 'Bidder_bid0_114': {
          const v1056 = v898[1];
          
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1211 = v898[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1222 = stdlib.add(v850, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1321 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
          if (v1321) {
            const v1325 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v798,
              tok: undefined /* Nothing */
              });
            const v1327 = stdlib.ge(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
            if (v1327) {
              const v1331 = stdlib.sub(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: undefined /* Nothing */
                });
              null;
              const v1332 = true;
              const v1333 = await txn1.getOutput('Bidder_optIn', 'v1332', ctc7, v1332);
              
              const v9126 = v838;
              const v9127 = v839;
              const v9128 = v840;
              const v9129 = v841;
              const v9130 = v842;
              const v9132 = v849;
              const v9133 = v1331;
              const v9134 = stdlib.lt(v899, v836);
              const v9135 = v9134 ? v841 : false;
              if (v9135) {
                sim_r.isHalt = false;
                }
              else {
                const v9136 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v9137 = await txn1.getOutput('internal', 'v9136', ctc13, v9136);
                const v9138 = v9137[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
                const v9139 = stdlib.add(v1331, v9138);
                null;
                const v9141 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
                if (v9141) {
                  const v9142 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v9242 = true;
                  const v9243 = true;
                  const v9245 = v849;
                  const v9246 = v9139;
                  const v9247 = stdlib.lt(v899, v9142);
                  if (v9247) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v9249 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9250 = v9249[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9251 = stdlib.sub(v9250, v9250);
                    const v9252 = stdlib.Array_set(v9249, '0', v9251);
                    const v9253 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9252);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v839,
                      tok: v779
                      });
                    const v9254 = stdlib.sub(v9139, v9139);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v778,
                      tok: undefined /* Nothing */
                      });
                    null;
                    const v9255 = await (async () => {
                      sim_r.txns.push({
                        kind: 'remote',
                        obj: v781,
                        remote: ({
                          accs: [],
                          apps: [],
                          bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          boxes: [],
                          fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                          pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          toks: []
                          })
                        })
                      return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                    const v9256 = await txn1.getOutput('internal', 'v9255', ctc13, v9255);
                    const v9257 = v9256[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                    const v9258 = stdlib.add(v9254, v9257);
                    const v9299 = v9253;
                    const v9300 = v9258;
                    sim_r.isHalt = false;
                    }}
                else {
                  const v9218 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9219 = v9218[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9220 = stdlib.sub(v9219, v9219);
                  const v9221 = stdlib.Array_set(v9218, '0', v9220);
                  const v9222 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9221);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: v779
                    });
                  const v9223 = stdlib.sub(v9139, v9139);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v839,
                    tok: undefined /* Nothing */
                    });
                  const v9224 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v9225 = await txn1.getOutput('internal', 'v9224', ctc13, v9224);
                  const v9226 = v9225[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v9227 = stdlib.add(v9223, v9226);
                  const v9311 = v9222;
                  const v9312 = v9227;
                  sim_r.isHalt = false;
                  }}}
            else {
              null;
              const v1339 = true;
              const v1340 = await txn1.getOutput('Bidder_optIn', 'v1339', ctc7, v1339);
              
              const v9315 = v838;
              const v9316 = v839;
              const v9317 = v840;
              const v9318 = v841;
              const v9319 = v842;
              const v9321 = v849;
              const v9322 = v1325;
              const v9323 = stdlib.lt(v899, v836);
              const v9324 = v9323 ? v841 : false;
              if (v9324) {
                sim_r.isHalt = false;
                }
              else {
                const v9325 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v9326 = await txn1.getOutput('internal', 'v9325', ctc13, v9325);
                const v9327 = v9326[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
                const v9328 = stdlib.add(v1325, v9327);
                null;
                const v9330 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
                if (v9330) {
                  const v9331 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v9431 = true;
                  const v9432 = true;
                  const v9434 = v849;
                  const v9435 = v9328;
                  const v9436 = stdlib.lt(v899, v9331);
                  if (v9436) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v9438 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9439 = v9438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9440 = stdlib.sub(v9439, v9439);
                    const v9441 = stdlib.Array_set(v9438, '0', v9440);
                    const v9442 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9441);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v839,
                      tok: v779
                      });
                    const v9443 = stdlib.sub(v9328, v9328);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v778,
                      tok: undefined /* Nothing */
                      });
                    null;
                    const v9444 = await (async () => {
                      sim_r.txns.push({
                        kind: 'remote',
                        obj: v781,
                        remote: ({
                          accs: [],
                          apps: [],
                          bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          boxes: [],
                          fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                          pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          toks: []
                          })
                        })
                      return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                    const v9445 = await txn1.getOutput('internal', 'v9444', ctc13, v9444);
                    const v9446 = v9445[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                    const v9447 = stdlib.add(v9443, v9446);
                    const v9488 = v9442;
                    const v9489 = v9447;
                    sim_r.isHalt = false;
                    }}
                else {
                  const v9407 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9408 = v9407[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9409 = stdlib.sub(v9408, v9408);
                  const v9410 = stdlib.Array_set(v9407, '0', v9409);
                  const v9411 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9410);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: v779
                    });
                  const v9412 = stdlib.sub(v9328, v9328);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v839,
                    tok: undefined /* Nothing */
                    });
                  const v9413 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v9414 = await txn1.getOutput('internal', 'v9413', ctc13, v9413);
                  const v9415 = v9414[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v9416 = stdlib.add(v9412, v9415);
                  const v9500 = v9411;
                  const v9501 = v9416;
                  sim_r.isHalt = false;
                  }}}}
          else {
            const v1347 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
            if (v1347) {
              const v1351 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: undefined /* Nothing */
                });
              null;
              const v1352 = true;
              const v1353 = await txn1.getOutput('Bidder_optIn', 'v1352', ctc7, v1352);
              
              const v9504 = v838;
              const v9505 = v839;
              const v9506 = v840;
              const v9507 = v841;
              const v9508 = v842;
              const v9510 = v849;
              const v9511 = v1351;
              const v9512 = stdlib.lt(v899, v836);
              const v9513 = v9512 ? v841 : false;
              if (v9513) {
                sim_r.isHalt = false;
                }
              else {
                const v9514 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v9515 = await txn1.getOutput('internal', 'v9514', ctc13, v9514);
                const v9516 = v9515[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
                const v9517 = stdlib.add(v1351, v9516);
                null;
                const v9519 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
                if (v9519) {
                  const v9520 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v9620 = true;
                  const v9621 = true;
                  const v9623 = v849;
                  const v9624 = v9517;
                  const v9625 = stdlib.lt(v899, v9520);
                  if (v9625) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v9627 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9628 = v9627[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9629 = stdlib.sub(v9628, v9628);
                    const v9630 = stdlib.Array_set(v9627, '0', v9629);
                    const v9631 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9630);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v839,
                      tok: v779
                      });
                    const v9632 = stdlib.sub(v9517, v9517);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v778,
                      tok: undefined /* Nothing */
                      });
                    null;
                    const v9633 = await (async () => {
                      sim_r.txns.push({
                        kind: 'remote',
                        obj: v781,
                        remote: ({
                          accs: [],
                          apps: [],
                          bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          boxes: [],
                          fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                          pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          toks: []
                          })
                        })
                      return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                    const v9634 = await txn1.getOutput('internal', 'v9633', ctc13, v9633);
                    const v9635 = v9634[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                    const v9636 = stdlib.add(v9632, v9635);
                    const v9677 = v9631;
                    const v9678 = v9636;
                    sim_r.isHalt = false;
                    }}
                else {
                  const v9596 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9597 = v9596[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9598 = stdlib.sub(v9597, v9597);
                  const v9599 = stdlib.Array_set(v9596, '0', v9598);
                  const v9600 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9599);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: v779
                    });
                  const v9601 = stdlib.sub(v9517, v9517);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v839,
                    tok: undefined /* Nothing */
                    });
                  const v9602 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v9603 = await txn1.getOutput('internal', 'v9602', ctc13, v9602);
                  const v9604 = v9603[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v9605 = stdlib.add(v9601, v9604);
                  const v9689 = v9600;
                  const v9690 = v9605;
                  sim_r.isHalt = false;
                  }}}
            else {
              null;
              const v1359 = true;
              const v1360 = await txn1.getOutput('Bidder_optIn', 'v1359', ctc7, v1359);
              
              const v9693 = v838;
              const v9694 = v839;
              const v9695 = v840;
              const v9696 = v841;
              const v9697 = v842;
              const v9699 = v849;
              const v9700 = v1222;
              const v9701 = stdlib.lt(v899, v836);
              const v9702 = v9701 ? v841 : false;
              if (v9702) {
                sim_r.isHalt = false;
                }
              else {
                const v9703 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v781,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v9704 = await txn1.getOutput('internal', 'v9703', ctc13, v9703);
                const v9705 = v9704[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
                const v9706 = stdlib.add(v1222, v9705);
                null;
                const v9708 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
                if (v9708) {
                  const v9709 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v9809 = true;
                  const v9810 = true;
                  const v9812 = v849;
                  const v9813 = v9706;
                  const v9814 = stdlib.lt(v899, v9709);
                  if (v9814) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v9816 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9817 = v9816[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                    const v9818 = stdlib.sub(v9817, v9817);
                    const v9819 = stdlib.Array_set(v9816, '0', v9818);
                    const v9820 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9819);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v839,
                      tok: v779
                      });
                    const v9821 = stdlib.sub(v9706, v9706);
                    sim_r.txns.push({
                      kind: 'from',
                      to: v778,
                      tok: undefined /* Nothing */
                      });
                    null;
                    const v9822 = await (async () => {
                      sim_r.txns.push({
                        kind: 'remote',
                        obj: v781,
                        remote: ({
                          accs: [],
                          apps: [],
                          bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          boxes: [],
                          fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                          pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                          toks: []
                          })
                        })
                      return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                    const v9823 = await txn1.getOutput('internal', 'v9822', ctc13, v9822);
                    const v9824 = v9823[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                    const v9825 = stdlib.add(v9821, v9824);
                    const v9866 = v9820;
                    const v9867 = v9825;
                    sim_r.isHalt = false;
                    }}
                else {
                  const v9785 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9786 = v9785[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
                  const v9787 = stdlib.sub(v9786, v9786);
                  const v9788 = stdlib.Array_set(v9785, '0', v9787);
                  const v9789 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9788);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v778,
                    tok: v779
                    });
                  const v9790 = stdlib.sub(v9706, v9706);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v839,
                    tok: undefined /* Nothing */
                    });
                  const v9791 = await (async () => {
                    sim_r.txns.push({
                      kind: 'remote',
                      obj: v781,
                      remote: ({
                        accs: [],
                        apps: [],
                        bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        boxes: [],
                        fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                        pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                        toks: []
                        })
                      })
                    return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                  const v9792 = await txn1.getOutput('internal', 'v9791', ctc13, v9791);
                  const v9793 = v9792[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                  const v9794 = stdlib.add(v9790, v9793);
                  const v9878 = v9789;
                  const v9879 = v9794;
                  sim_r.isHalt = false;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn1;
  switch (v898[0]) {
    case 'Auctioneer_stopAuction0_114': {
      const v901 = v898[1];
      return;
      break;
      }
    case 'Bidder_bid0_114': {
      const v1056 = v898[1];
      return;
      break;
      }
    case 'Bidder_optIn0_114': {
      const v1211 = v898[1];
      undefined /* setApiDetails */;
      const v1222 = stdlib.add(v850, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1321 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
      if (v1321) {
        const v1325 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1327 = stdlib.ge(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
        if (v1327) {
          const v1331 = stdlib.sub(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
          ;
          null;
          const v1332 = true;
          const v1333 = await txn1.getOutput('Bidder_optIn', 'v1332', ctc7, v1332);
          if (v276) {
            stdlib.protect(ctc12, await interact.out(v1211, v1333), {
              at: './src/contracts/auction.rsh:154:31:application',
              fs: ['at ./src/contracts/auction.rsh:154:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:31:function exp)', 'at ./src/contracts/auction.rsh:163:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:157:50:function exp)', 'at ./src/contracts/auction.rsh:157:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:157:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v9126 = v838;
          const v9127 = v839;
          const v9128 = v840;
          const v9129 = v841;
          const v9130 = v842;
          const v9132 = v849;
          const v9133 = v1331;
          const v9134 = stdlib.lt(v899, v836);
          const v9135 = v9134 ? v841 : false;
          if (v9135) {
            return;
            }
          else {
            const v9136 = undefined /* Remote */;
            const v9137 = await txn1.getOutput('internal', 'v9136', ctc13, v9136);
            const v9138 = v9137[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
            const v9139 = stdlib.add(v1331, v9138);
            const v9140 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9138);
            stdlib.assert(v9140, {
              at: './src/contracts/auction.rsh:188:42:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v9141 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
            if (v9141) {
              const v9142 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v9242 = true;
              const v9243 = true;
              const v9245 = v849;
              const v9246 = v9139;
              const v9247 = stdlib.lt(v899, v9142);
              if (v9247) {
                return;
                }
              else {
                const v9249 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9250 = v9249[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9251 = stdlib.sub(v9250, v9250);
                const v9252 = stdlib.Array_set(v9249, '0', v9251);
                const v9253 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9252);
                ;
                const v9254 = stdlib.sub(v9139, v9139);
                ;
                null;
                const v9255 = undefined /* Remote */;
                const v9256 = await txn1.getOutput('internal', 'v9255', ctc13, v9255);
                const v9257 = v9256[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v9258 = stdlib.add(v9254, v9257);
                const v9259 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9257);
                stdlib.assert(v9259, {
                  at: './src/contracts/auction.rsh:250:37:application',
                  fs: [],
                  msg: 'remote bill check',
                  who: 'Bidder_optIn'
                  });
                const v9299 = v9253;
                const v9300 = v9258;
                return;
                }}
            else {
              const v9218 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9219 = v9218[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9220 = stdlib.sub(v9219, v9219);
              const v9221 = stdlib.Array_set(v9218, '0', v9220);
              const v9222 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9221);
              ;
              const v9223 = stdlib.sub(v9139, v9139);
              ;
              const v9224 = undefined /* Remote */;
              const v9225 = await txn1.getOutput('internal', 'v9224', ctc13, v9224);
              const v9226 = v9225[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v9227 = stdlib.add(v9223, v9226);
              const v9228 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9226);
              stdlib.assert(v9228, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Bidder_optIn'
                });
              const v9311 = v9222;
              const v9312 = v9227;
              return;
              }}}
        else {
          null;
          const v1339 = true;
          const v1340 = await txn1.getOutput('Bidder_optIn', 'v1339', ctc7, v1339);
          if (v276) {
            stdlib.protect(ctc12, await interact.out(v1211, v1340), {
              at: './src/contracts/auction.rsh:154:31:application',
              fs: ['at ./src/contracts/auction.rsh:154:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:31:function exp)', 'at ./src/contracts/auction.rsh:163:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:157:50:function exp)', 'at ./src/contracts/auction.rsh:157:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:157:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v9315 = v838;
          const v9316 = v839;
          const v9317 = v840;
          const v9318 = v841;
          const v9319 = v842;
          const v9321 = v849;
          const v9322 = v1325;
          const v9323 = stdlib.lt(v899, v836);
          const v9324 = v9323 ? v841 : false;
          if (v9324) {
            return;
            }
          else {
            const v9325 = undefined /* Remote */;
            const v9326 = await txn1.getOutput('internal', 'v9325', ctc13, v9325);
            const v9327 = v9326[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
            const v9328 = stdlib.add(v1325, v9327);
            const v9329 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9327);
            stdlib.assert(v9329, {
              at: './src/contracts/auction.rsh:188:42:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v9330 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
            if (v9330) {
              const v9331 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v9431 = true;
              const v9432 = true;
              const v9434 = v849;
              const v9435 = v9328;
              const v9436 = stdlib.lt(v899, v9331);
              if (v9436) {
                return;
                }
              else {
                const v9438 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9439 = v9438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9440 = stdlib.sub(v9439, v9439);
                const v9441 = stdlib.Array_set(v9438, '0', v9440);
                const v9442 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9441);
                ;
                const v9443 = stdlib.sub(v9328, v9328);
                ;
                null;
                const v9444 = undefined /* Remote */;
                const v9445 = await txn1.getOutput('internal', 'v9444', ctc13, v9444);
                const v9446 = v9445[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v9447 = stdlib.add(v9443, v9446);
                const v9448 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9446);
                stdlib.assert(v9448, {
                  at: './src/contracts/auction.rsh:250:37:application',
                  fs: [],
                  msg: 'remote bill check',
                  who: 'Bidder_optIn'
                  });
                const v9488 = v9442;
                const v9489 = v9447;
                return;
                }}
            else {
              const v9407 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9408 = v9407[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9409 = stdlib.sub(v9408, v9408);
              const v9410 = stdlib.Array_set(v9407, '0', v9409);
              const v9411 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9410);
              ;
              const v9412 = stdlib.sub(v9328, v9328);
              ;
              const v9413 = undefined /* Remote */;
              const v9414 = await txn1.getOutput('internal', 'v9413', ctc13, v9413);
              const v9415 = v9414[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v9416 = stdlib.add(v9412, v9415);
              const v9417 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9415);
              stdlib.assert(v9417, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Bidder_optIn'
                });
              const v9500 = v9411;
              const v9501 = v9416;
              return;
              }}}}
      else {
        const v1347 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
        if (v1347) {
          const v1351 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
          ;
          null;
          const v1352 = true;
          const v1353 = await txn1.getOutput('Bidder_optIn', 'v1352', ctc7, v1352);
          if (v276) {
            stdlib.protect(ctc12, await interact.out(v1211, v1353), {
              at: './src/contracts/auction.rsh:154:31:application',
              fs: ['at ./src/contracts/auction.rsh:154:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:31:function exp)', 'at ./src/contracts/auction.rsh:163:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:157:50:function exp)', 'at ./src/contracts/auction.rsh:157:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:157:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v9504 = v838;
          const v9505 = v839;
          const v9506 = v840;
          const v9507 = v841;
          const v9508 = v842;
          const v9510 = v849;
          const v9511 = v1351;
          const v9512 = stdlib.lt(v899, v836);
          const v9513 = v9512 ? v841 : false;
          if (v9513) {
            return;
            }
          else {
            const v9514 = undefined /* Remote */;
            const v9515 = await txn1.getOutput('internal', 'v9514', ctc13, v9514);
            const v9516 = v9515[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
            const v9517 = stdlib.add(v1351, v9516);
            const v9518 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9516);
            stdlib.assert(v9518, {
              at: './src/contracts/auction.rsh:188:42:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v9519 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
            if (v9519) {
              const v9520 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v9620 = true;
              const v9621 = true;
              const v9623 = v849;
              const v9624 = v9517;
              const v9625 = stdlib.lt(v899, v9520);
              if (v9625) {
                return;
                }
              else {
                const v9627 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9628 = v9627[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9629 = stdlib.sub(v9628, v9628);
                const v9630 = stdlib.Array_set(v9627, '0', v9629);
                const v9631 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9630);
                ;
                const v9632 = stdlib.sub(v9517, v9517);
                ;
                null;
                const v9633 = undefined /* Remote */;
                const v9634 = await txn1.getOutput('internal', 'v9633', ctc13, v9633);
                const v9635 = v9634[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v9636 = stdlib.add(v9632, v9635);
                const v9637 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9635);
                stdlib.assert(v9637, {
                  at: './src/contracts/auction.rsh:250:37:application',
                  fs: [],
                  msg: 'remote bill check',
                  who: 'Bidder_optIn'
                  });
                const v9677 = v9631;
                const v9678 = v9636;
                return;
                }}
            else {
              const v9596 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9597 = v9596[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9598 = stdlib.sub(v9597, v9597);
              const v9599 = stdlib.Array_set(v9596, '0', v9598);
              const v9600 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9599);
              ;
              const v9601 = stdlib.sub(v9517, v9517);
              ;
              const v9602 = undefined /* Remote */;
              const v9603 = await txn1.getOutput('internal', 'v9602', ctc13, v9602);
              const v9604 = v9603[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v9605 = stdlib.add(v9601, v9604);
              const v9606 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9604);
              stdlib.assert(v9606, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Bidder_optIn'
                });
              const v9689 = v9600;
              const v9690 = v9605;
              return;
              }}}
        else {
          null;
          const v1359 = true;
          const v1360 = await txn1.getOutput('Bidder_optIn', 'v1359', ctc7, v1359);
          if (v276) {
            stdlib.protect(ctc12, await interact.out(v1211, v1360), {
              at: './src/contracts/auction.rsh:154:31:application',
              fs: ['at ./src/contracts/auction.rsh:154:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:154:31:function exp)', 'at ./src/contracts/auction.rsh:163:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:157:50:function exp)', 'at ./src/contracts/auction.rsh:157:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:157:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v9693 = v838;
          const v9694 = v839;
          const v9695 = v840;
          const v9696 = v841;
          const v9697 = v842;
          const v9699 = v849;
          const v9700 = v1222;
          const v9701 = stdlib.lt(v899, v836);
          const v9702 = v9701 ? v841 : false;
          if (v9702) {
            return;
            }
          else {
            const v9703 = undefined /* Remote */;
            const v9704 = await txn1.getOutput('internal', 'v9703', ctc13, v9703);
            const v9705 = v9704[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
            const v9706 = stdlib.add(v1222, v9705);
            const v9707 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9705);
            stdlib.assert(v9707, {
              at: './src/contracts/auction.rsh:188:42:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v9708 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
            if (v9708) {
              const v9709 = stdlib.safeAdd(v899, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v9809 = true;
              const v9810 = true;
              const v9812 = v849;
              const v9813 = v9706;
              const v9814 = stdlib.lt(v899, v9709);
              if (v9814) {
                return;
                }
              else {
                const v9816 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9817 = v9816[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
                const v9818 = stdlib.sub(v9817, v9817);
                const v9819 = stdlib.Array_set(v9816, '0', v9818);
                const v9820 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v9819);
                ;
                const v9821 = stdlib.sub(v9706, v9706);
                ;
                null;
                const v9822 = undefined /* Remote */;
                const v9823 = await txn1.getOutput('internal', 'v9822', ctc13, v9822);
                const v9824 = v9823[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
                const v9825 = stdlib.add(v9821, v9824);
                const v9826 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9824);
                stdlib.assert(v9826, {
                  at: './src/contracts/auction.rsh:250:37:application',
                  fs: [],
                  msg: 'remote bill check',
                  who: 'Bidder_optIn'
                  });
                const v9866 = v9820;
                const v9867 = v9825;
                return;
                }}
            else {
              const v9785 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9786 = v9785[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
              const v9787 = stdlib.sub(v9786, v9786);
              const v9788 = stdlib.Array_set(v9785, '0', v9787);
              const v9789 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v9788);
              ;
              const v9790 = stdlib.sub(v9706, v9706);
              ;
              const v9791 = undefined /* Remote */;
              const v9792 = await txn1.getOutput('internal', 'v9791', ctc13, v9791);
              const v9793 = v9792[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v9794 = stdlib.add(v9790, v9793);
              const v9795 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v9793);
              stdlib.assert(v9795, {
                at: './src/contracts/auction.rsh:250:37:application',
                fs: [],
                msg: 'remote bill check',
                who: 'Bidder_optIn'
                });
              const v9878 = v9789;
              const v9879 = v9794;
              return;
              }}}}
      break;
      }
    }
  
  
  };
export async function _Bidder_updateState11(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_updateState11 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_updateState11 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_UInt;
  const ctc6 = stdlib.T_Struct([['id', ctc5], ['blockEnded', ctc5], ['lastBid', ctc5]]);
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc5, ctc5, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Data({
    Auctioneer_acceptSale0_419: ctc3,
    Auctioneer_rejectSale0_419: ctc3,
    Bidder_updateState0_419: ctc3
    });
  const ctc11 = stdlib.T_Null;
  const ctc12 = stdlib.T_Tuple([ctc5, ctc11]);
  
  
  const [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc0, ctc5, ctc5, ctc7, ctc7, ctc9, ctc5]);
  const v1421 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:218:29:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:218:29:function exp)', 'at ./src/contracts/auction.rsh:204:66:application call to "runBidder_updateState0_419" (defined at: ./src/contracts/auction.rsh:218:29:function exp)', 'at ./src/contracts/auction.rsh:204:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:204:66:function exp)'],
    msg: 'in',
    who: 'Bidder_updateState'
    });
  const v1425 = ['Bidder_updateState0_419', v1421];
  
  const txn1 = await (ctc.sendrecv({
    args: [v778, v779, v781, v798, v803, v816, v838, v839, v842, v1384, v1385, v1386, v1393, v1394, v1425],
    evt_cnt: 1,
    funcNum: 9,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc10],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:218:29:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn1;
      
      switch (v1431[0]) {
        case 'Auctioneer_acceptSale0_419': {
          const v1434 = v1431[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_419': {
          const v1485 = v1431[1];
          
          break;
          }
        case 'Bidder_updateState0_419': {
          const v1536 = v1431[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_updateState"
            });
          ;
          const v1580 = null;
          const v1581 = await txn1.getOutput('Bidder_updateState', 'v1580', ctc11, v1580);
          
          const v10150 = v1385;
          const v10151 = v1386;
          const v10153 = v1393;
          const v10154 = v1394;
          const v10155 = stdlib.lt(v1432, v1384);
          const v10156 = v10155 ? v1386 : false;
          if (v10156) {
            sim_r.isHalt = false;
            }
          else {
            if (v1385) {
              const v10157 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v10158 = v10157[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
              const v10159 = stdlib.sub(v10158, v10158);
              const v10160 = stdlib.Array_set(v10157, '0', v10159);
              const v10161 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v10160);
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: v779
                });
              const v10162 = stdlib.sub(v1394, v1394);
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: undefined /* Nothing */
                });
              null;
              const v10163 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
              const v10164 = await txn1.getOutput('internal', 'v10163', ctc12, v10163);
              const v10165 = v10164[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v10166 = stdlib.add(v10162, v10165);
              const v10207 = v10161;
              const v10208 = v10166;
              sim_r.isHalt = false;
              }
            else {
              const v10181 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
              const v10182 = v10181[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
              const v10183 = stdlib.sub(v10182, v10182);
              const v10184 = stdlib.Array_set(v10181, '0', v10183);
              const v10185 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v10184);
              sim_r.txns.push({
                kind: 'from',
                to: v778,
                tok: v779
                });
              const v10186 = stdlib.sub(v1394, v1394);
              sim_r.txns.push({
                kind: 'from',
                to: v839,
                tok: undefined /* Nothing */
                });
              null;
              const v10187 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v781,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc11.defaultValue /* simReturnVal */];})();
              const v10188 = await txn1.getOutput('internal', 'v10187', ctc12, v10187);
              const v10189 = v10188[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
              const v10190 = stdlib.add(v10186, v10189);
              const v10213 = v10185;
              const v10214 = v10190;
              sim_r.isHalt = false;
              }}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc0, ctc5, ctc5, ctc7, ctc7, ctc9, ctc5, ctc10],
    waitIfNotPresent: false
    }));
  const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn1;
  switch (v1431[0]) {
    case 'Auctioneer_acceptSale0_419': {
      const v1434 = v1431[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_419': {
      const v1485 = v1431[1];
      return;
      break;
      }
    case 'Bidder_updateState0_419': {
      const v1536 = v1431[1];
      undefined /* setApiDetails */;
      ;
      const v1580 = null;
      const v1581 = await txn1.getOutput('Bidder_updateState', 'v1580', ctc11, v1580);
      if (v506) {
        stdlib.protect(ctc11, await interact.out(v1536, v1581), {
          at: './src/contracts/auction.rsh:218:30:application',
          fs: ['at ./src/contracts/auction.rsh:218:30:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:218:30:function exp)', 'at ./src/contracts/auction.rsh:219:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:218:59:function exp)', 'at ./src/contracts/auction.rsh:218:59:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:218:59:function exp)'],
          msg: 'out',
          who: 'Bidder_updateState'
          });
        }
      else {
        }
      
      const v10150 = v1385;
      const v10151 = v1386;
      const v10153 = v1393;
      const v10154 = v1394;
      const v10155 = stdlib.lt(v1432, v1384);
      const v10156 = v10155 ? v1386 : false;
      if (v10156) {
        return;
        }
      else {
        if (v1385) {
          const v10157 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
          const v10158 = v10157[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
          const v10159 = stdlib.sub(v10158, v10158);
          const v10160 = stdlib.Array_set(v10157, '0', v10159);
          const v10161 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v10160);
          ;
          const v10162 = stdlib.sub(v1394, v1394);
          ;
          null;
          const v10163 = undefined /* Remote */;
          const v10164 = await txn1.getOutput('internal', 'v10163', ctc12, v10163);
          const v10165 = v10164[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
          const v10166 = stdlib.add(v10162, v10165);
          const v10167 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10165);
          stdlib.assert(v10167, {
            at: './src/contracts/auction.rsh:250:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_updateState'
            });
          const v10207 = v10161;
          const v10208 = v10166;
          return;
          }
        else {
          const v10181 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
          const v10182 = v10181[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
          const v10183 = stdlib.sub(v10182, v10182);
          const v10184 = stdlib.Array_set(v10181, '0', v10183);
          const v10185 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v10184);
          ;
          const v10186 = stdlib.sub(v1394, v1394);
          ;
          null;
          const v10187 = undefined /* Remote */;
          const v10188 = await txn1.getOutput('internal', 'v10187', ctc12, v10187);
          const v10189 = v10188[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
          const v10190 = stdlib.add(v10186, v10189);
          const v10191 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v10189);
          stdlib.assert(v10191, {
            at: './src/contracts/auction.rsh:250:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_updateState'
            });
          const v10213 = v10185;
          const v10214 = v10190;
          return;
          }}
      break;
      }
    }
  
  
  };
export async function Seller(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Seller expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Seller expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Contract;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Address;
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '32'));
  const ctc5 = stdlib.T_Token;
  const ctc6 = stdlib.T_Object({
    adminContract: ctc0,
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4,
    tokenId: ctc5
    });
  const ctc7 = stdlib.T_Object({
    deadline: ctc1,
    description: ctc2,
    owner: ctc3,
    price: ctc1,
    title: ctc4
    });
  const ctc8 = stdlib.T_Tuple([ctc1, ctc1]);
  const ctc9 = stdlib.T_Null;
  const ctc10 = stdlib.T_Tuple([ctc1, ctc9]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Tuple([ctc1]);
  const ctc13 = stdlib.T_Data({
    Auctioneer_stopAuction0_114: ctc11,
    Bidder_bid0_114: ctc12,
    Bidder_optIn0_114: ctc11
    });
  const ctc14 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc15 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc16 = stdlib.T_Bool;
  const ctc17 = stdlib.T_Data({
    Auctioneer_acceptSale0_419: ctc11,
    Auctioneer_rejectSale0_419: ctc11,
    Bidder_updateState0_419: ctc11
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1, ctc16]);
  const ctc19 = stdlib.T_Array(ctc18, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v755 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v756 = [v755];
  const v760 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v761 = v760.adminContract;
  const v762 = v760.deadline;
  const v763 = v760.description;
  const v764 = v760.owner;
  const v765 = v760.price;
  const v766 = v760.title;
  const v767 = v760.tokenId;
  
  const v777 = {
    deadline: v762,
    description: v763,
    owner: v764,
    price: v765,
    title: v766
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v767, v777, v761],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v779, v780, v781], secs: v783, time: v782, didSend: v44, from: v778 } = txn1;
      
      const v784 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0')];
      const v785 = stdlib.Array_set(v784, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0'));
      const v786 = stdlib.Array_set(v756, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0'), v785);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v779
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc5, ctc7, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v779, v780, v781], secs: v783, time: v782, didSend: v44, from: v778 } = txn1;
  const v784 = v756[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0')];
  const v785 = stdlib.Array_set(v784, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0'));
  const v786 = stdlib.Array_set(v756, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:16:dot', stdlib.UInt_max, '0'), v785);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v778, v779, v780, v781, v786],
    evt_cnt: 0,
    funcNum: 1,
    lct: v782,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v779]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v790, time: v789, didSend: v51, from: v788 } = txn2;
      
      ;
      const v791 = v786[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0')];
      const v792 = v791[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0')];
      const v793 = stdlib.add(v792, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v795 = stdlib.Array_set(v791, '0', v793);
      const v796 = stdlib.Array_set(v786, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0'), v795);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v779
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc7, ctc0, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v790, time: v789, didSend: v51, from: v788 } = txn2;
  ;
  const v791 = v786[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0')];
  const v792 = v791[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0')];
  const v793 = stdlib.add(v792, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v795 = stdlib.Array_set(v791, '0', v793);
  const v796 = stdlib.Array_set(v786, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:16:dot', stdlib.UInt_max, '0'), v795);
  ;
  const v797 = stdlib.addressEq(v778, v788);
  stdlib.assert(v797, {
    at: './src/contracts/auction.rsh:85:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 2,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v800, time: v799, didSend: v55, from: v798 } = txn3;
  ;
  const v803 = [];
  const v804 = undefined /* Remote */;
  const v805 = await txn3.getOutput('internal', 'v804', ctc8, v804);
  const v807 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '0')];
  const v808 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:99:48:application', stdlib.UInt_max, '1')];
  const v813 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v807);
  stdlib.assert(v813, {
    at: './src/contracts/auction.rsh:99:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v814 = v799;
  const v815 = await ctc.getContractInfo();
  const v816 = v780.title;
  const v817 = v780.description;
  const v818 = v780.price;
  const v822 = {
    blockCreated: v799,
    contractInfo: v815,
    description: v817,
    id: v808,
    owner: v778,
    price: v818,
    title: v816,
    tokenId: v779
    };
  const v823 = undefined /* Remote */;
  const v824 = await txn3.getOutput('internal', 'v823', ctc10, v823);
  const v826 = v824[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:116:39:application', stdlib.UInt_max, '0')];
  const v831 = stdlib.add(v807, v826);
  const v832 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v826);
  stdlib.assert(v832, {
    at: './src/contracts/auction.rsh:116:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v835 = v780.deadline;
  const v836 = stdlib.safeAdd(v799, v835);
  null;
  const v837 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: v808,
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v838 = v837;
  let v839 = v778;
  let v840 = true;
  let v841 = true;
  let v842 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:126:25:decimal', stdlib.UInt_max, '0');
  let v843 = v799;
  let v849 = v796;
  let v850 = v831;
  
  let txn4 = txn3;
  while (await (async () => {
    const v859 = stdlib.lt(v843, v836);
    const v860 = v859 ? v841 : false;
    
    return v860;})()) {
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 12,
      out_tys: [ctc13],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v898], secs: v900, time: v899, didSend: v276, from: v897 } = txn5;
    switch (v898[0]) {
      case 'Auctioneer_stopAuction0_114': {
        const v901 = v898[1];
        undefined /* setApiDetails */;
        ;
        const v914 = stdlib.addressEq(v897, v778);
        const v915 = stdlib.addressEq(v897, v798);
        const v916 = v914 ? true : v915;
        if (v916) {
          const v918 = {
            blockEnded: v899,
            id: v808,
            lastBid: v842
            };
          await txn5.getOutput('Auctioneer_stopAuction', 'v918', ctc14, v918);
          const cv838 = v918;
          const cv839 = v839;
          const cv840 = v840;
          const cv841 = false;
          const cv842 = v842;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v850;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        else {
          const v935 = {
            blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
            };
          await txn5.getOutput('Auctioneer_stopAuction', 'v935', ctc14, v935);
          const cv838 = v838;
          const cv839 = v839;
          const cv840 = v840;
          const cv841 = v841;
          const cv842 = v842;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v850;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        break;
        }
      case 'Bidder_bid0_114': {
        const v1056 = v898[1];
        undefined /* setApiDetails */;
        const v1062 = v1056[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:30:spread', stdlib.UInt_max, '0')];
        const v1063 = stdlib.gt(v1062, v842);
        stdlib.assert(v1063, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:141:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:140:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp)', 'at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v1067 = stdlib.add(v850, v1062);
        ;
        if (v840) {
          const v1143 = undefined /* Remote */;
          const v1144 = await txn5.getOutput('internal', 'v1143', ctc10, v1143);
          const v1146 = v1144[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
          const v1151 = stdlib.add(v1067, v1146);
          const v1152 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1146);
          stdlib.assert(v1152, {
            at: './src/contracts/auction.rsh:147:91:application',
            fs: ['at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
            msg: 'remote bill check',
            who: 'Seller'
            });
          null;
          const v1154 = [v897, v842];
          await txn5.getOutput('Bidder_bid', 'v1154', ctc15, v1154);
          const cv838 = v838;
          const cv839 = v897;
          const cv840 = false;
          const cv841 = v841;
          const cv842 = v1062;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v1151;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        else {
          const v1115 = stdlib.sub(v1067, v842);
          ;
          const v1119 = undefined /* Remote */;
          const v1120 = await txn5.getOutput('internal', 'v1119', ctc10, v1119);
          const v1122 = v1120[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:147:91:application', stdlib.UInt_max, '0')];
          const v1127 = stdlib.add(v1115, v1122);
          const v1128 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1122);
          stdlib.assert(v1128, {
            at: './src/contracts/auction.rsh:147:91:application',
            fs: ['at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)'],
            msg: 'remote bill check',
            who: 'Seller'
            });
          null;
          const v1130 = [v897, v842];
          await txn5.getOutput('Bidder_bid', 'v1130', ctc15, v1130);
          const cv838 = v838;
          const cv839 = v897;
          const cv840 = false;
          const cv841 = v841;
          const cv842 = v1062;
          const cv843 = v899;
          const cv849 = v849;
          const cv850 = v1127;
          
          v838 = cv838;
          v839 = cv839;
          v840 = cv840;
          v841 = cv841;
          v842 = cv842;
          v843 = cv843;
          v849 = cv849;
          v850 = cv850;
          
          txn4 = txn5;
          continue;}
        break;
        }
      case 'Bidder_optIn0_114': {
        const v1211 = v898[1];
        undefined /* setApiDetails */;
        const v1222 = stdlib.add(v850, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1321 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
        if (v1321) {
          const v1325 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:158:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1327 = stdlib.ge(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
          if (v1327) {
            const v1331 = stdlib.sub(v1325, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
            ;
            null;
            const v1332 = true;
            await txn5.getOutput('Bidder_optIn', 'v1332', ctc16, v1332);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1331;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}
          else {
            null;
            const v1339 = true;
            await txn5.getOutput('Bidder_optIn', 'v1339', ctc16, v1339);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1325;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}}
        else {
          const v1347 = stdlib.ge(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
          if (v1347) {
            const v1351 = stdlib.sub(v1222, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:159:84:application', stdlib.UInt_max, '100000'));
            ;
            null;
            const v1352 = true;
            await txn5.getOutput('Bidder_optIn', 'v1352', ctc16, v1352);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1351;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}
          else {
            null;
            const v1359 = true;
            await txn5.getOutput('Bidder_optIn', 'v1359', ctc16, v1359);
            const cv838 = v838;
            const cv839 = v839;
            const cv840 = v840;
            const cv841 = v841;
            const cv842 = v842;
            const cv843 = v899;
            const cv849 = v849;
            const cv850 = v1222;
            
            v838 = cv838;
            v839 = cv839;
            v840 = cv840;
            v841 = cv841;
            v842 = cv842;
            v843 = cv843;
            v849 = cv849;
            v850 = cv850;
            
            txn4 = txn5;
            continue;}}
        break;
        }
      }
    
    }
  const v1369 = undefined /* Remote */;
  const v1370 = await txn4.getOutput('internal', 'v1369', ctc10, v1369);
  const v1372 = v1370[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:188:42:application', stdlib.UInt_max, '0')];
  const v1377 = stdlib.add(v850, v1372);
  const v1378 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1372);
  stdlib.assert(v1378, {
    at: './src/contracts/auction.rsh:188:42:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1382 = stdlib.gt(v842, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:202:25:decimal', stdlib.UInt_max, '0'));
  if (v1382) {
    const v1384 = stdlib.safeAdd(v843, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    let v1385 = true;
    let v1386 = true;
    let v1387 = v843;
    let v1393 = v849;
    let v1394 = v1377;
    
    let txn5 = txn4;
    while (await (async () => {
      const v1401 = stdlib.lt(v1387, v1384);
      const v1402 = v1401 ? v1386 : false;
      
      return v1402;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 9,
        out_tys: [ctc17],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1431], secs: v1433, time: v1432, didSend: v506, from: v1430 } = txn6;
      switch (v1431[0]) {
        case 'Auctioneer_acceptSale0_419': {
          const v1434 = v1431[1];
          undefined /* setApiDetails */;
          ;
          const v1442 = true;
          await txn6.getOutput('Auctioneer_acceptSale', 'v1442', ctc16, v1442);
          const v1448 = stdlib.addressEq(v1430, v778);
          const v1449 = stdlib.addressEq(v1430, v798);
          const v1450 = v1448 ? true : v1449;
          if (v1450) {
            const cv1385 = true;
            const cv1386 = false;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          else {
            const cv1385 = v1385;
            const cv1386 = v1386;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          break;
          }
        case 'Auctioneer_rejectSale0_419': {
          const v1485 = v1431[1];
          undefined /* setApiDetails */;
          ;
          const v1511 = false;
          await txn6.getOutput('Auctioneer_rejectSale', 'v1511', ctc16, v1511);
          const v1517 = stdlib.addressEq(v1430, v778);
          const v1518 = stdlib.addressEq(v1430, v798);
          const v1519 = v1517 ? true : v1518;
          if (v1519) {
            const cv1385 = false;
            const cv1386 = false;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          else {
            const cv1385 = v1385;
            const cv1386 = v1386;
            const cv1387 = v1432;
            const cv1393 = v1393;
            const cv1394 = v1394;
            
            v1385 = cv1385;
            v1386 = cv1386;
            v1387 = cv1387;
            v1393 = cv1393;
            v1394 = cv1394;
            
            txn5 = txn6;
            continue;}
          break;
          }
        case 'Bidder_updateState0_419': {
          const v1536 = v1431[1];
          undefined /* setApiDetails */;
          ;
          const v1580 = null;
          await txn6.getOutput('Bidder_updateState', 'v1580', ctc9, v1580);
          const cv1385 = v1385;
          const cv1386 = v1386;
          const cv1387 = v1432;
          const cv1393 = v1393;
          const cv1394 = v1394;
          
          v1385 = cv1385;
          v1386 = cv1386;
          v1387 = cv1387;
          v1393 = cv1393;
          v1394 = cv1394;
          
          txn5 = txn6;
          continue;
          break;
          }
        }
      
      }
    if (v1385) {
      const v1587 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
      const v1588 = v1587[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:41:application', stdlib.UInt_max, '0')];
      const v1594 = stdlib.sub(v1588, v1588);
      const v1596 = stdlib.Array_set(v1587, '0', v1594);
      const v1597 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:224:63:application', stdlib.UInt_max, '0'), v1596);
      ;
      const v1602 = stdlib.sub(v1394, v1394);
      ;
      null;
      const v1610 = undefined /* Remote */;
      const v1611 = await txn5.getOutput('internal', 'v1610', ctc10, v1610);
      const v1613 = v1611[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
      const v1618 = stdlib.add(v1602, v1613);
      const v1619 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1613);
      stdlib.assert(v1619, {
        at: './src/contracts/auction.rsh:250:37:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Seller'
        });
      let v1620 = true;
      let v1621 = v1387;
      let v1627 = v1597;
      let v1628 = v1618;
      
      let txn6 = txn5;
      while (await (async () => {
        
        return v1620;})()) {
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 6,
          out_tys: [ctc11],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1640], secs: v1642, time: v1641, didSend: v632, from: v1639 } = txn7;
        undefined /* setApiDetails */;
        ;
        const v1644 = null;
        await txn7.getOutput('AdminCall_adminCall', 'v1644', ctc9, v1644);
        const cv1620 = true;
        const cv1621 = v1641;
        const cv1627 = v1627;
        const cv1628 = v1628;
        
        v1620 = cv1620;
        v1621 = cv1621;
        v1627 = cv1627;
        v1628 = cv1628;
        
        txn6 = txn7;
        continue;
        
        }
      const v1650 = v1627[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      const v1651 = v1650[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      }
    else {
      const v1671 = v1393[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
      const v1672 = v1671[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:41:application', stdlib.UInt_max, '0')];
      const v1678 = stdlib.sub(v1672, v1672);
      const v1680 = stdlib.Array_set(v1671, '0', v1678);
      const v1681 = stdlib.Array_set(v1393, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:234:63:application', stdlib.UInt_max, '0'), v1680);
      ;
      const v1686 = stdlib.sub(v1394, v1394);
      ;
      null;
      const v1694 = undefined /* Remote */;
      const v1695 = await txn5.getOutput('internal', 'v1694', ctc10, v1694);
      const v1697 = v1695[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
      const v1702 = stdlib.add(v1686, v1697);
      const v1703 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1697);
      stdlib.assert(v1703, {
        at: './src/contracts/auction.rsh:250:37:application',
        fs: [],
        msg: 'remote bill check',
        who: 'Seller'
        });
      let v1704 = true;
      let v1705 = v1387;
      let v1711 = v1681;
      let v1712 = v1702;
      
      let txn6 = txn5;
      while (await (async () => {
        
        return v1704;})()) {
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 1,
          funcNum: 8,
          out_tys: [ctc11],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [v1724], secs: v1726, time: v1725, didSend: v632, from: v1723 } = txn7;
        undefined /* setApiDetails */;
        ;
        const v1728 = null;
        await txn7.getOutput('AdminCall_adminCall', 'v1728', ctc9, v1728);
        const cv1704 = true;
        const cv1705 = v1725;
        const cv1711 = v1711;
        const cv1712 = v1712;
        
        v1704 = cv1704;
        v1705 = cv1705;
        v1711 = cv1711;
        v1712 = cv1712;
        
        txn6 = txn7;
        continue;
        
        }
      const v1734 = v1711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      const v1735 = v1734[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      }}
  else {
    const v1755 = v849[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
    const v1756 = v1755[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:33:application', stdlib.UInt_max, '0')];
    const v1762 = stdlib.sub(v1756, v1756);
    const v1764 = stdlib.Array_set(v1755, '0', v1762);
    const v1765 = stdlib.Array_set(v849, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:245:55:application', stdlib.UInt_max, '0'), v1764);
    ;
    const v1770 = stdlib.sub(v1377, v1377);
    ;
    const v1777 = undefined /* Remote */;
    const v1778 = await txn4.getOutput('internal', 'v1777', ctc10, v1777);
    const v1780 = v1778[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:250:37:application', stdlib.UInt_max, '0')];
    const v1785 = stdlib.add(v1770, v1780);
    const v1786 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1780);
    stdlib.assert(v1786, {
      at: './src/contracts/auction.rsh:250:37:application',
      fs: [],
      msg: 'remote bill check',
      who: 'Seller'
      });
    let v1787 = true;
    let v1788 = v843;
    let v1794 = v1765;
    let v1795 = v1785;
    
    let txn5 = txn4;
    while (await (async () => {
      
      return v1787;})()) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 11,
        out_tys: [ctc11],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1807], secs: v1809, time: v1808, didSend: v632, from: v1806 } = txn6;
      undefined /* setApiDetails */;
      ;
      const v1811 = null;
      await txn6.getOutput('AdminCall_adminCall', 'v1811', ctc9, v1811);
      const cv1787 = true;
      const cv1788 = v1808;
      const cv1794 = v1794;
      const cv1795 = v1795;
      
      v1787 = cv1787;
      v1788 = cv1788;
      v1794 = cv1794;
      v1795 = cv1795;
      
      txn5 = txn6;
      continue;
      
      }
    const v1817 = v1794[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
    const v1818 = v1817[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:259:25:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  
  
  
  };
export async function AdminCall_adminCall(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for AdminCall_adminCall expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for AdminCall_adminCall expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _AdminCall_adminCall7(ctcTop, interact);}
  if (step == 10) {return _AdminCall_adminCall10(ctcTop, interact);}
  if (step == 14) {return _AdminCall_adminCall14(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '10'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '14')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Auctioneer_acceptSale11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Auctioneer_rejectSale11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 15) {return _Auctioneer_stopAuction15(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 15) {return _Bidder_bid15(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 15) {return _Bidder_optIn15(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '15')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_updateState(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_updateState expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_updateState expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 11) {return _Bidder_updateState11(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '11')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`AdminCall_adminCall()void`, `Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`, `Bidder_updateState()void`, `_reachp_0((uint64,uint64,(uint64,byte[80],address,uint64,byte[32]),uint64))void`, `_reachp_1((uint64))void`, `_reachp_11((uint64,()))void`, `_reachp_12((uint64,(byte,byte[8])))void`, `_reachp_2((uint64))void`, `_reachp_6((uint64,()))void`, `_reachp_8((uint64,()))void`, `_reachp_9((uint64,(byte,byte[0])))void`],
    pure: [`hasEnded()byte`, `highestPrice()uint64`, `live()byte`],
    sigs: [`AdminCall_adminCall()void`, `Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`, `Bidder_updateState()void`, `_reachp_0((uint64,uint64,(uint64,byte[80],address,uint64,byte[32]),uint64))void`, `_reachp_1((uint64))void`, `_reachp_11((uint64,()))void`, `_reachp_12((uint64,(byte,byte[8])))void`, `_reachp_2((uint64))void`, `_reachp_6((uint64,()))void`, `_reachp_8((uint64,()))void`, `_reachp_9((uint64,(byte,byte[0])))void`, `hasEnded()byte`, `highestPrice()uint64`, `live()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCAXAAEKBggOC6CNBg8HKCCiAaD3NkERGMCEPbAByAEEAgUmCAABAAVhcHBJRAEBBMRrkBMEFIl4rgQHQF89BP2ytI0xGEEIoyhkSSJbNQFJIQRbNQKBEFs1BSlkK2RQghIECZqFoAQQLw2gBBVSA5YEMm+L0wQynF+pBDhnDSQEZYYprQRpk5hiBG0vvI8EdQ7kBgSBE9szBJStfWEExpggrATf2SMoBOOGeokE5Rm1VATndFxSBPE66oo2GgCOEgDqAScBOwguB/EAAQeKAVMHzQfYANoH5gfCB7cIKwf8AJ0N/QA0ASQMQQpDIQSvNQshCTQBEkSIDjY0CyJbNQyABLI84Kk0DBZQsDQMiA31KDULgAgAAAAAAAAGbDQLULA0CzUEIzIGNRI1EzQTQQ0VNB4WNBxQNBEWUDQQUDQPFlAhDK9QIQkyBjUCNQEpSwFXAH9nK0xXf2xnKDQBFjQCFlA0BRZQZzEZIhJEiA7dNANAAAqABBUffHU0BFCwI0OBCa81DyEGNAESRIgN2zQPIls1EDQPVwgBNRKABO9DPXA0EBZQNBJQsDQQiA1WNBIiVY0DCW4JcQmEQv8mgAkAAAAAAAAAAAE1D0L/uCEPrzULIQg0ARJEiA4HNAsiWzUMNAtXCAk1DYAEGwbIizQMFlA0DVCwNAyIDQk0DSJVjQMHoQekB6dC/tk2GgEXNQshBK8rNAsWUFA1C0L/tIARAAAAAAAAAAACAAAAAAAAAAA1C0L/nIAJAAAAAAAAAAACNQ9C/z8oNQ6ACAAAAAAAAAcTNA5QsDQONQQjMgY1DTUgNCBBCOg0HhY0HFA0ERZQNAxQNAsWUCEMr1AhBTIGQv7GKDULgAgAAAAAAAAGwDQLULA0CzUEIzIGNRI1EzQTQQvDNB4WNBxQNBEWUDQQUDQPFlAhDK9QJDIGQv6KIzUPgAgAAAAAAAAFojQPFlEHCFCwNA8WUQcINQQxADQfEjEANBwSEUEIVyMiMgY1DTUgNSE0DTQODDQgEEEJ2SM1IDQfNB4WUDQdFlA0HFA0G1A0F1A0FVA0FFA0ERZQNA4WUDQhFlEHCFA0IBZRBwhQNAxQNAsWUCEQr1AhBjIGQv4GIjUPgAgAAAAAAAAF5zQPFlEHCFCwNA8WUQcINQQxADQfEjEANBwSEUEH2iIiMgY1DTUgNSFC/3kxADQfEjEANBwSEUEGKDQaFjIGFlA0ERZQNQuACAAAAAAAAAOWNAtQsDQLNQQ0CyIyBjUQNRI1FTQQNBYMNBIQQQfbIzUSNB80HhZQNB0WUDQcUDQbUDQaFlA0GRZQNBgWUDQXUDQWFlA0FVA0FFA0ExZRBwhQNBIWUQcIUDQRFlA0D1A0DhZQIQgyBkL9P4gMSzQNI1tJNSA0EQ1ENA40IAg1DTQgiAuiNBNBBaYqNB0WUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0HbIYJwayGjQaFrIaMQBJshyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAABHc0DFCwNAxJNQsiWzUMIjQMEkQnBzQaFlA0IBZQMQBQNBdQsDEANBEWUDULgAgAAAAAAAAEgjQLULA0CzUEMQAiNCAyBjQNNAwINQ41EDURNRM1FEL+4zQOIREINQwhEYgK6jQMIQ0PQQWcNAwhDQk1CyENNByICgo0CyEHD0EFyiEHNB+ICfsnBDQaFlAxAFCwIzUMgAgAAAAAAAAFNDQMFlEHCFCwNAwWUQcINQQyBjQLIQcJNQ41EEL+fSg1D4AIAAAAAAAABiw0D1CwNA81BDIGNQ1C/aI0ASEGDEEJOzQBJAxBCVo0ASEJEkSICcUrNQQxGSISREL7/zQBIQYMQQOmNAEkDEEDuDQBIQkSRIgJojQRFjUEQv/YNAEhBgxBA8A0ASQMQQPQNAEhCRJEiAmCKTUEQv+6MQA1HzQLIls1DDQLIQRbNR40C1cQoDUgNAshEls1HYAEHH9xvzQMFlA0HhZQNCBQNB0WULA0DIgJFyEPr0k1C0lXABEhBK9cAFwANQwhB4gKYCI0HjIKiAkBNB80HhZQNCBQNB0WUDQMUCSvUCMyBkL7IyM0ARJESVcAIDUfSSELWzUeSVcooDUgSSETWzUdV9ARNQw0Cxc1DYAE1RUZFDQNFlCwNA2ICKc0DFcAETULNAw0C0kiWyMIFlwAXAA1DSM0HjEWNAAjCEk1AAlHAzgUMgoSRDgQIRQSRDgRTwISRDgSEkQ0HzEAEkQ0HzQeFlA0IFA0HRZQNA1QJK9QIRUyBkL6kCEFNAESRIgIijQOIls1D4AEAV3ZATQPFlCwNA+ICCxC+2sxADUcIRU0ARJESVcAIDUfSSELWzUeSVcooDUgSSETWzUdV9ARNQ00Cxc1DIAEl073FzQMFlCwNAyIB+0oNRsqNB0WUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0HbIYgARt7b2AshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAAMkNAxQsDQMSTULIls1DDQLIQRbNRoiNAwSRDIGNRkxGDUYNCBXgCA1Fyo0HRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQdshiABLcueMKyGjQaFjQYFlAyBhZQNB9QNBdQNCBXCFBQNCBXeAhQNB4WULIaszIKYDQJCTQKFwkWtwA+VwQAUDULgAgAAAAAAAADNzQLULA0C0k1FiJbNQsiNAsSRDIGNCAiWwg1FoAEjw81BjQaFlA0H1CwNBoWIQSvUCEEr1A0HyMjIjIGNA00DDQLCDUONQ81EDURNRI1EzUUNRVC+2ckNAESRIgGvjQLIls1DIAEryhksDQMFlCwNAyIBppC+haIBpCBwJoMiAfusSKyASWyEIAGCDEAMgkSsh6AAQiyH7O0PTUFNhoBNQtC/RmIBmM2GgE1C0L9gYgGWDYaATUOQv4JiAZNNhoBNQtC+ReIBkKIB5c2GgE1C0L+EogGNDYaATULQvgciAYpNhoBNQtC/22IBh42GgE1D0L4myIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1BYgF+4HrAa8iIkL4O0L8QUL8YTQBIQgSRIgGxSk1BEL8SjQBIQUMQQAhNAEhBhJEiAY1NBEWNQRC/DE0ASQSRIgFzjQRFjUEQvwhNAEhBRJEiAX3NBEWNQRC/BA0ASEFDEEAHTQBIQYSRIgF+yk1BEL7+TQBJBJEiAWWKTUEQvvrNAEhCAxBAA80ASEFEkSIBbkpNQRC+9Q0ASEIEkSIBkArNQRC+8VC+dBC+lxC+x8hEK81C4AIAAAAAAAAA6c0C1CwNAs1BDIGNRBC+eQ0ETQUiAUmKjQdFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNB2yGCcGsho0GhayGjEASbIcshqzMgpgNAkJNAoXCRa3AD5XBABQNQyACAAAAAAAAARfNAxQsDQMSTULIls1DCI0DBJEJwc0GhZQNCAWUDEAUDQXULAxADQRFlA1C4AIAAAAAAAABGo0C1CwNAs1BDEAIjQgMgY0DTQRCTQMCDUONRA1ETUTNRRC+TM0DCEHD0EAbiEHNB+IBG0nBDQaFlAxAFCwIzULgAgAAAAAAAAFSDQLFlEHCFCwNAsWUQcINQQyBjQMIQcJNQ41EEL47ycENBoWUDEAULAjNQyACAAAAAAAAAU7NAwWUQcIULA0DBZRBwg1BDIGNAs1DjUQQvi9JwQ0GhZQMQBQsCM1C4AIAAAAAAAABU80CxZRBwhQsDQLFlEHCDUEMgY0DDUONRBC+ItC95RC+BU0ASEFDEECVyEErzULQv0OQvn1MgY1DUL3rDIGNQ1C96U0DFcAESJbNB40HIgDsTQLNByIA5giNB4yCjIJiARSMRkhFhJEsSKyASWyEDQFshghFrIZsyEHNAcINQeIBL4iMgoyCYgE1UL11io0HRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQdshiABEnVULKyGjQaFrIaszIKYDQJCTQKFwkWtwA+VwQAUDUTgAgAAAAAAAAFWTQTULA0E0k1EiJbNRM0DjQTCDUSIjQTEkSABJdBHo00GhZQNBEWUDQfUDQYFlA0GRZQNBdQsDQRIg1BABw0EIEyCDUOIyM0EDQPNBI1CzUMNQ01IDUhQva0NA9XABFJNRMiW0k1DjQeNB+IAro0EjQUiAKhKjQdFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBJbIQNB2yGCcFsho0FbIaszIKYDQJCTQKFwkWtwA+VwQAUDUUgAgAAAAAAAAG8TQUULA0FEk1FSJbNRQiNBQSRCM0EDQPNBM0DkkJFlwAXAA0EkkJNBQINQs1DDUNNSBC9Yo0IUEAuDQMVwARSTUWIltJNQ40HjQUiAIdNAs0H4gCBIAEYjcdxDQXUDQRFlA0H1A0FFA0HhZQsCo0HRZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASWyEDQdshgnBbIaNBWyGrMyCmA0CQk0ChcJFrcAPlcEAFA1FIAIAAAAAAAABko0FFCwNBRJNRUiWzUUIjQUEkQjNA00DDQWNA5JCRZcAFwANAtJCTQUCDUPNRA1EjUTQvOeIQSvNQ5C+SQ0DFcAEUk1FiJbSTUONB40H4gBZTQLNBSIAUyABO5DEPU0F1A0ERZQNB9QNBRQNB4WULAqNB0WUAM1CDIKeDUJKDIKYDQJCRY1CrEisgElshA0HbIYJwWyGjQVshqzMgpgNAkJNAoXCRa3AD5XBABQNRSACAAAAAAAAAaeNBRQsDQUSTUVIls1FCI0FBJEIzQNNAw0FjQOSQkWXABcADQLSQk0FAg1DzUQNRI1E0L0WjQQVwARIls0HjQciAC7NA80HIgAoiI0HjIKMgmIAVxC/Qc0EFcAESJbNB40HIgAmTQPNByIAIAiNB4yCjIJiAE6QvzlIrIBI7IQsgeyCLOJNAEhBQxBACw0ASEGEkSIAMMpNQRC9sEisgEhFLIQshSyEbISs4k0ASQSRIgATys1BEL2pDQBIQgMQfpDNAEhBRJEiAByKzUEQvaNQvaySIlMCUk1BjIJiAANiQlJQf/uSTUGiADLibFC/4kjNQOJSSISTDQCEhFEibFC/5pJIls1HklXCCA1HEkhCls1EUlXMBE1ECEOWzUPiUkiWzUeSVcIIDUcSSEKWzURSVcwETUQIQ5bNQ+JSSJbNR5JVwggNRxJIQpbNRFJVzARNQwhDls1C4lJVwAgNR9JIQtbNR5JIQpbNR1JVzAgNRxJSCg1G0lXUCA1F0lXcBg1FUlXiCA1FEmBqAFbNRFJIRJbNQ5JV7gBFzUhSVe5ARc1IElXuhE1DIHLAVs1C4mxshVC/uYxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJSVcAIDUfSSELWzUeSSEKWzUdSVcwIDUcSUgoNRtJgVBbNRpJgVhbNRlJgWBbNRhJV2ggNRdJgYgBWzUWSVeQGDUVSVeoIDUUSVfIARc1E0lXyQEXNRJJgcoBWzURSVfSETUPgeMBWzUOiTQGNAdKD0H+kEL+mLEisgElshA0BbIYs4k0Bgg1BomxsglC/hg=`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `25`,
    1000: `495`,
    1001: `496`,
    1002: `496`,
    1003: `497`,
    1004: `498`,
    1005: `498`,
    1006: `499`,
    1007: `500`,
    1008: `500`,
    1009: `500`,
    101: `25`,
    1010: `501`,
    1011: `502`,
    1012: `502`,
    1013: `503`,
    1014: `504`,
    1015: `504`,
    1016: `504`,
    1017: `505`,
    1018: `506`,
    1019: `506`,
    102: `25`,
    1020: `507`,
    1021: `508`,
    1022: `509`,
    1023: `509`,
    1024: `510`,
    1025: `511`,
    1026: `511`,
    1027: `512`,
    1028: `513`,
    1029: `514`,
    103: `25`,
    1030: `514`,
    1031: `515`,
    1032: `515`,
    1033: `516`,
    1034: `516`,
    1035: `516`,
    1036: `519`,
    1037: `519`,
    1038: `519`,
    1039: `521`,
    104: `25`,
    1040: `521`,
    1041: `522`,
    1042: `523`,
    1043: `524`,
    1044: `525`,
    1045: `525`,
    1046: `526`,
    1047: `526`,
    1048: `527`,
    1049: `528`,
    105: `25`,
    1050: `535`,
    1051: `535`,
    1052: `536`,
    1053: `536`,
    1054: `537`,
    1055: `538`,
    1056: `538`,
    1057: `539`,
    1058: `539`,
    1059: `540`,
    106: `25`,
    1060: `540`,
    1061: `540`,
    1062: `543`,
    1063: `543`,
    1064: `544`,
    1065: `544`,
    1066: `544`,
    1067: `545`,
    1068: `546`,
    1069: `546`,
    107: `25`,
    1070: `547`,
    1071: `548`,
    1072: `549`,
    1073: `550`,
    1074: `550`,
    1075: `551`,
    1076: `551`,
    1077: `552`,
    1078: `553`,
    1079: `553`,
    108: `25`,
    1080: `554`,
    1081: `555`,
    1082: `555`,
    1083: `556`,
    1084: `557`,
    1085: `557`,
    1086: `558`,
    1087: `559`,
    1088: `560`,
    1089: `560`,
    109: `25`,
    1090: `561`,
    1091: `562`,
    1092: `563`,
    1093: `563`,
    1094: `564`,
    1095: `565`,
    1096: `565`,
    1097: `566`,
    1098: `566`,
    1099: `568`,
    11: `2`,
    110: `25`,
    1100: `568`,
    1101: `569`,
    1102: `569`,
    1103: `570`,
    1104: `570`,
    1105: `571`,
    1106: `571`,
    1107: `572`,
    1108: `573`,
    1109: `573`,
    111: `25`,
    1110: `574`,
    1111: `574`,
    1112: `575`,
    1113: `576`,
    1114: `576`,
    1115: `577`,
    1116: `577`,
    1117: `578`,
    1118: `582`,
    1119: `582`,
    112: `25`,
    1120: `583`,
    1121: `584`,
    1122: `584`,
    1123: `585`,
    1124: `586`,
    1125: `586`,
    1126: `587`,
    1127: `588`,
    1128: `589`,
    1129: `590`,
    113: `25`,
    1130: `590`,
    1131: `590`,
    1132: `591`,
    1133: `591`,
    1134: `591`,
    1135: `592`,
    1136: `593`,
    1137: `593`,
    1138: `594`,
    1139: `594`,
    114: `25`,
    1140: `594`,
    1141: `594`,
    1142: `594`,
    1143: `594`,
    1144: `594`,
    1145: `594`,
    1146: `594`,
    1147: `594`,
    1148: `595`,
    1149: `595`,
    115: `25`,
    1150: `596`,
    1151: `597`,
    1152: `598`,
    1153: `598`,
    1154: `599`,
    1155: `600`,
    1156: `600`,
    1157: `601`,
    1158: `602`,
    1159: `603`,
    116: `25`,
    1160: `603`,
    1161: `604`,
    1162: `605`,
    1163: `605`,
    1164: `606`,
    1165: `607`,
    1166: `611`,
    1167: `611`,
    1168: `612`,
    1169: `612`,
    117: `25`,
    1170: `613`,
    1171: `614`,
    1172: `615`,
    1173: `615`,
    1174: `616`,
    1175: `617`,
    1176: `618`,
    1177: `618`,
    1178: `619`,
    1179: `620`,
    118: `25`,
    1180: `620`,
    1181: `621`,
    1182: `622`,
    1183: `624`,
    1184: `624`,
    1185: `625`,
    1186: `625`,
    1187: `626`,
    1188: `627`,
    1189: `628`,
    119: `25`,
    1190: `628`,
    1191: `629`,
    1192: `629`,
    1193: `629`,
    1194: `629`,
    1195: `629`,
    1196: `629`,
    1197: `629`,
    1198: `629`,
    1199: `629`,
    12: `2`,
    120: `25`,
    1200: `629`,
    1201: `630`,
    1202: `630`,
    1203: `631`,
    1204: `632`,
    1205: `633`,
    1206: `633`,
    1207: `634`,
    1208: `634`,
    1209: `635`,
    121: `25`,
    1210: `635`,
    1211: `636`,
    1212: `637`,
    1213: `637`,
    1214: `638`,
    1215: `638`,
    1216: `639`,
    1217: `639`,
    1218: `640`,
    1219: `640`,
    122: `25`,
    1220: `641`,
    1221: `642`,
    1222: `642`,
    1223: `643`,
    1224: `643`,
    1225: `644`,
    1226: `644`,
    1227: `645`,
    1228: `645`,
    1229: `646`,
    123: `25`,
    1230: `646`,
    1231: `647`,
    1232: `647`,
    1233: `647`,
    1234: `650`,
    1235: `650`,
    1236: `651`,
    1237: `651`,
    1238: `652`,
    1239: `653`,
    124: `25`,
    1240: `653`,
    1241: `654`,
    1242: `654`,
    1243: `655`,
    1244: `655`,
    1245: `655`,
    1246: `658`,
    1247: `658`,
    1248: `659`,
    1249: `659`,
    125: `25`,
    1250: `660`,
    1251: `661`,
    1252: `661`,
    1253: `661`,
    1254: `662`,
    1255: `662`,
    1256: `663`,
    1257: `663`,
    1258: `664`,
    1259: `665`,
    126: `25`,
    1260: `665`,
    1261: `666`,
    1262: `666`,
    1263: `668`,
    1264: `668`,
    1265: `669`,
    1266: `669`,
    1267: `669`,
    1268: `670`,
    1269: `670`,
    127: `25`,
    1270: `671`,
    1271: `671`,
    1272: `672`,
    1273: `673`,
    1274: `673`,
    1275: `673`,
    1276: `674`,
    1277: `674`,
    1278: `676`,
    1279: `676`,
    128: `25`,
    1280: `677`,
    1281: `677`,
    1282: `677`,
    1283: `678`,
    1284: `678`,
    1285: `679`,
    1286: `679`,
    1287: `680`,
    1288: `681`,
    1289: `682`,
    129: `25`,
    1290: `682`,
    1291: `683`,
    1292: `684`,
    1293: `686`,
    1294: `687`,
    1295: `687`,
    1296: `688`,
    1297: `688`,
    1298: `688`,
    1299: `688`,
    13: `2`,
    130: `25`,
    1300: `688`,
    1301: `688`,
    1302: `688`,
    1303: `688`,
    1304: `688`,
    1305: `688`,
    1306: `689`,
    1307: `689`,
    1308: `690`,
    1309: `691`,
    131: `25`,
    1310: `691`,
    1311: `691`,
    1312: `692`,
    1313: `693`,
    1314: `694`,
    1315: `694`,
    1316: `695`,
    1317: `696`,
    1318: `696`,
    1319: `696`,
    132: `25`,
    1320: `697`,
    1321: `697`,
    1322: `698`,
    1323: `698`,
    1324: `699`,
    1325: `699`,
    1326: `700`,
    1327: `700`,
    1328: `701`,
    1329: `702`,
    133: `25`,
    1330: `702`,
    1331: `703`,
    1332: `703`,
    1333: `704`,
    1334: `704`,
    1335: `704`,
    1336: `707`,
    1337: `708`,
    1338: `708`,
    1339: `709`,
    134: `25`,
    1340: `709`,
    1341: `709`,
    1342: `709`,
    1343: `709`,
    1344: `709`,
    1345: `709`,
    1346: `709`,
    1347: `709`,
    1348: `709`,
    1349: `710`,
    135: `25`,
    1350: `710`,
    1351: `711`,
    1352: `712`,
    1353: `713`,
    1354: `713`,
    1355: `714`,
    1356: `714`,
    1357: `715`,
    1358: `715`,
    1359: `716`,
    136: `25`,
    1360: `716`,
    1361: `717`,
    1362: `717`,
    1363: `717`,
    1364: `720`,
    1365: `720`,
    1366: `721`,
    1367: `721`,
    1368: `722`,
    1369: `723`,
    137: `25`,
    1370: `723`,
    1371: `723`,
    1372: `724`,
    1373: `724`,
    1374: `725`,
    1375: `726`,
    1376: `727`,
    1377: `727`,
    1378: `727`,
    1379: `728`,
    138: `25`,
    1380: `728`,
    1381: `729`,
    1382: `729`,
    1383: `730`,
    1384: `731`,
    1385: `734`,
    1386: `734`,
    1387: `734`,
    1388: `735`,
    1389: `736`,
    139: `25`,
    1390: `736`,
    1391: `738`,
    1392: `738`,
    1393: `739`,
    1394: `740`,
    1395: `741`,
    1396: `743`,
    1397: `743`,
    1398: `743`,
    1399: `746`,
    14: `2`,
    140: `25`,
    1400: `746`,
    1401: `747`,
    1402: `747`,
    1403: `748`,
    1404: `749`,
    1405: `749`,
    1406: `749`,
    1407: `750`,
    1408: `750`,
    1409: `751`,
    141: `25`,
    1410: `752`,
    1411: `753`,
    1412: `753`,
    1413: `753`,
    1414: `754`,
    1415: `754`,
    1416: `755`,
    1417: `755`,
    1418: `756`,
    1419: `757`,
    142: `25`,
    1420: `760`,
    1421: `760`,
    1422: `760`,
    1423: `761`,
    1424: `761`,
    1425: `762`,
    1426: `763`,
    1427: `763`,
    1428: `764`,
    1429: `764`,
    143: `25`,
    1430: `764`,
    1431: `767`,
    1432: `767`,
    1433: `768`,
    1434: `768`,
    1435: `769`,
    1436: `770`,
    1437: `770`,
    1438: `770`,
    1439: `771`,
    144: `25`,
    1440: `771`,
    1441: `772`,
    1442: `773`,
    1443: `774`,
    1444: `774`,
    1445: `774`,
    1446: `775`,
    1447: `775`,
    1448: `776`,
    1449: `776`,
    145: `25`,
    1450: `777`,
    1451: `778`,
    1452: `781`,
    1453: `781`,
    1454: `781`,
    1455: `782`,
    1456: `783`,
    1457: `783`,
    1458: `784`,
    1459: `784`,
    146: `25`,
    1460: `784`,
    1461: `787`,
    1462: `787`,
    1463: `788`,
    1464: `788`,
    1465: `789`,
    1466: `789`,
    1467: `790`,
    1468: `791`,
    1469: `792`,
    147: `25`,
    1470: `792`,
    1471: `793`,
    1472: `793`,
    1473: `794`,
    1474: `794`,
    1475: `795`,
    1476: `796`,
    1477: `796`,
    1478: `797`,
    1479: `797`,
    148: `25`,
    1480: `798`,
    1481: `798`,
    1482: `798`,
    1483: `799`,
    1484: `799`,
    1485: `800`,
    1486: `800`,
    1487: `801`,
    1488: `801`,
    1489: `802`,
    149: `25`,
    1490: `803`,
    1491: `803`,
    1492: `804`,
    1493: `804`,
    1494: `804`,
    1495: `804`,
    1496: `804`,
    1497: `804`,
    1498: `805`,
    1499: `805`,
    15: `2`,
    150: `25`,
    1500: `806`,
    1501: `807`,
    1502: `808`,
    1503: `808`,
    1504: `809`,
    1505: `810`,
    1506: `811`,
    1507: `811`,
    1508: `812`,
    1509: `813`,
    151: `25`,
    1510: `813`,
    1511: `814`,
    1512: `815`,
    1513: `816`,
    1514: `818`,
    1515: `818`,
    1516: `819`,
    1517: `819`,
    1518: `819`,
    1519: `820`,
    152: `25`,
    1520: `820`,
    1521: `821`,
    1522: `822`,
    1523: `823`,
    1524: `823`,
    1525: `824`,
    1526: `825`,
    1527: `825`,
    1528: `825`,
    1529: `826`,
    153: `25`,
    1530: `826`,
    1531: `827`,
    1532: `828`,
    1533: `828`,
    1534: `829`,
    1535: `829`,
    1536: `830`,
    1537: `830`,
    1538: `831`,
    1539: `831`,
    154: `25`,
    1540: `832`,
    1541: `832`,
    1542: `832`,
    1543: `833`,
    1544: `835`,
    1545: `835`,
    1546: `836`,
    1547: `836`,
    1548: `837`,
    1549: `837`,
    155: `25`,
    1550: `837`,
    1551: `839`,
    1552: `839`,
    1553: `840`,
    1554: `840`,
    1555: `841`,
    1556: `842`,
    1557: `843`,
    1558: `843`,
    1559: `844`,
    156: `25`,
    1560: `845`,
    1561: `845`,
    1562: `846`,
    1563: `847`,
    1564: `848`,
    1565: `848`,
    1566: `849`,
    1567: `850`,
    1568: `851`,
    1569: `852`,
    157: `25`,
    1570: `853`,
    1571: `854`,
    1572: `854`,
    1573: `855`,
    1574: `855`,
    1575: `855`,
    1576: `858`,
    1577: `859`,
    1578: `859`,
    1579: `860`,
    158: `25`,
    1580: `861`,
    1581: `863`,
    1582: `864`,
    1583: `864`,
    1584: `864`,
    1585: `865`,
    1586: `865`,
    1587: `866`,
    1588: `867`,
    1589: `867`,
    159: `25`,
    1590: `868`,
    1591: `869`,
    1592: `869`,
    1593: `870`,
    1594: `871`,
    1595: `871`,
    1596: `871`,
    1597: `872`,
    1598: `872`,
    1599: `873`,
    16: `2`,
    160: `25`,
    1600: `874`,
    1601: `874`,
    1602: `875`,
    1603: `876`,
    1604: `876`,
    1605: `877`,
    1606: `877`,
    1607: `877`,
    1608: `878`,
    1609: `878`,
    161: `25`,
    1610: `879`,
    1611: `879`,
    1612: `880`,
    1613: `881`,
    1614: `881`,
    1615: `882`,
    1616: `882`,
    1617: `882`,
    1618: `882`,
    1619: `882`,
    162: `25`,
    1620: `882`,
    1621: `883`,
    1622: `883`,
    1623: `884`,
    1624: `885`,
    1625: `886`,
    1626: `888`,
    1627: `888`,
    1628: `889`,
    1629: `889`,
    163: `25`,
    1630: `889`,
    1631: `890`,
    1632: `890`,
    1633: `891`,
    1634: `891`,
    1635: `891`,
    1636: `892`,
    1637: `892`,
    1638: `893`,
    1639: `893`,
    164: `25`,
    1640: `894`,
    1641: `894`,
    1642: `895`,
    1643: `896`,
    1644: `897`,
    1645: `898`,
    1646: `899`,
    1647: `900`,
    1648: `901`,
    1649: `901`,
    165: `25`,
    1650: `902`,
    1651: `902`,
    1652: `903`,
    1653: `903`,
    1654: `904`,
    1655: `905`,
    1656: `905`,
    1657: `908`,
    1658: `908`,
    1659: `909`,
    166: `25`,
    1660: `909`,
    1661: `910`,
    1662: `911`,
    1663: `912`,
    1664: `913`,
    1665: `913`,
    1666: `914`,
    1667: `915`,
    1668: `915`,
    1669: `916`,
    167: `25`,
    1670: `916`,
    1671: `917`,
    1672: `917`,
    1673: `918`,
    1674: `919`,
    1675: `920`,
    1676: `920`,
    1677: `921`,
    1678: `921`,
    1679: `922`,
    168: `25`,
    1680: `923`,
    1681: `924`,
    1682: `924`,
    1683: `925`,
    1684: `925`,
    1685: `926`,
    1686: `927`,
    1687: `928`,
    1688: `928`,
    1689: `929`,
    169: `25`,
    1690: `930`,
    1691: `933`,
    1692: `933`,
    1693: `934`,
    1694: `934`,
    1695: `935`,
    1696: `936`,
    1697: `940`,
    1698: `940`,
    1699: `941`,
    17: `2`,
    170: `25`,
    1700: `941`,
    1701: `942`,
    1702: `943`,
    1703: `944`,
    1704: `944`,
    1705: `945`,
    1706: `946`,
    1707: `946`,
    1708: `947`,
    1709: `948`,
    171: `25`,
    1710: `949`,
    1711: `949`,
    1712: `950`,
    1713: `951`,
    1714: `952`,
    1715: `953`,
    1716: `954`,
    1717: `954`,
    1718: `955`,
    1719: `955`,
    172: `25`,
    1720: `956`,
    1721: `956`,
    1722: `956`,
    1723: `959`,
    1724: `959`,
    1725: `960`,
    1726: `960`,
    1727: `961`,
    1728: `962`,
    1729: `963`,
    173: `25`,
    1730: `963`,
    1731: `963`,
    1732: `964`,
    1733: `964`,
    1734: `965`,
    1735: `966`,
    1736: `967`,
    1737: `967`,
    1738: `968`,
    1739: `968`,
    174: `25`,
    1740: `968`,
    1741: `968`,
    1742: `968`,
    1743: `968`,
    1744: `969`,
    1745: `969`,
    1746: `970`,
    1747: `971`,
    1748: `972`,
    1749: `974`,
    175: `25`,
    1750: `974`,
    1751: `975`,
    1752: `975`,
    1753: `975`,
    1754: `976`,
    1755: `976`,
    1756: `976`,
    1757: `979`,
    1758: `979`,
    1759: `980`,
    176: `25`,
    1760: `980`,
    1761: `981`,
    1762: `981`,
    1763: `982`,
    1764: `982`,
    1765: `983`,
    1766: `984`,
    1767: `986`,
    1768: `987`,
    1769: `987`,
    177: `25`,
    1770: `987`,
    1771: `988`,
    1772: `988`,
    1773: `989`,
    1774: `990`,
    1775: `990`,
    1776: `991`,
    1777: `992`,
    1778: `992`,
    1779: `993`,
    178: `25`,
    1780: `994`,
    1781: `994`,
    1782: `994`,
    1783: `995`,
    1784: `995`,
    1785: `996`,
    1786: `997`,
    1787: `997`,
    1788: `998`,
    1789: `999`,
    179: `25`,
    1790: `999`,
    1791: `1000`,
    1792: `1000`,
    1793: `1000`,
    1794: `1001`,
    1795: `1001`,
    1796: `1002`,
    1797: `1002`,
    1798: `1003`,
    1799: `1004`,
    18: `2`,
    180: `25`,
    1800: `1004`,
    1801: `1005`,
    1802: `1005`,
    1803: `1005`,
    1804: `1005`,
    1805: `1005`,
    1806: `1005`,
    1807: `1006`,
    1808: `1006`,
    1809: `1007`,
    181: `25`,
    1810: `1008`,
    1811: `1009`,
    1812: `1011`,
    1813: `1011`,
    1814: `1012`,
    1815: `1012`,
    1816: `1012`,
    1817: `1013`,
    1818: `1014`,
    1819: `1014`,
    182: `25`,
    1820: `1015`,
    1821: `1016`,
    1822: `1016`,
    1823: `1017`,
    1824: `1018`,
    1825: `1019`,
    1826: `1020`,
    1827: `1020`,
    1828: `1021`,
    1829: `1021`,
    183: `25`,
    1830: `1022`,
    1831: `1023`,
    1832: `1023`,
    1833: `1024`,
    1834: `1025`,
    1835: `1025`,
    1836: `1026`,
    1837: `1027`,
    1838: `1027`,
    1839: `1028`,
    184: `25`,
    1840: `1029`,
    1841: `1030`,
    1842: `1030`,
    1843: `1031`,
    1844: `1032`,
    1845: `1033`,
    1846: `1033`,
    1847: `1034`,
    1848: `1035`,
    1849: `1035`,
    185: `25`,
    1850: `1036`,
    1851: `1036`,
    1852: `1038`,
    1853: `1038`,
    1854: `1039`,
    1855: `1039`,
    1856: `1039`,
    1857: `1039`,
    1858: `1039`,
    1859: `1039`,
    186: `25`,
    1860: `1040`,
    1861: `1040`,
    1862: `1041`,
    1863: `1044`,
    1864: `1044`,
    1865: `1045`,
    1866: `1046`,
    1867: `1046`,
    1868: `1047`,
    1869: `1048`,
    187: `25`,
    1870: `1048`,
    1871: `1049`,
    1872: `1050`,
    1873: `1051`,
    1874: `1052`,
    1875: `1052`,
    1876: `1052`,
    1877: `1053`,
    1878: `1053`,
    1879: `1053`,
    188: `26`,
    1880: `1054`,
    1881: `1055`,
    1882: `1055`,
    1883: `1056`,
    1884: `1056`,
    1885: `1056`,
    1886: `1056`,
    1887: `1056`,
    1888: `1056`,
    1889: `1056`,
    189: `26`,
    1890: `1056`,
    1891: `1056`,
    1892: `1056`,
    1893: `1057`,
    1894: `1057`,
    1895: `1058`,
    1896: `1059`,
    1897: `1060`,
    1898: `1060`,
    1899: `1061`,
    19: `2`,
    190: `26`,
    1900: `1062`,
    1901: `1062`,
    1902: `1063`,
    1903: `1064`,
    1904: `1065`,
    1905: `1065`,
    1906: `1066`,
    1907: `1066`,
    1908: `1067`,
    1909: `1067`,
    191: `27`,
    1910: `1068`,
    1911: `1069`,
    1912: `1069`,
    1913: `1070`,
    1914: `1071`,
    1915: `1071`,
    1916: `1072`,
    1917: `1073`,
    1918: `1076`,
    1919: `1076`,
    192: `27`,
    1920: `1077`,
    1921: `1077`,
    1922: `1078`,
    1923: `1078`,
    1924: `1079`,
    1925: `1079`,
    1926: `1080`,
    1927: `1080`,
    1928: `1081`,
    1929: `1081`,
    193: `27`,
    1930: `1081`,
    1931: `1082`,
    1932: `1082`,
    1933: `1083`,
    1934: `1084`,
    1935: `1084`,
    1936: `1085`,
    1937: `1086`,
    1938: `1087`,
    1939: `1088`,
    194: `27`,
    1940: `1088`,
    1941: `1089`,
    1942: `1089`,
    1943: `1090`,
    1944: `1091`,
    1945: `1091`,
    1946: `1092`,
    1947: `1093`,
    1948: `1093`,
    1949: `1094`,
    195: `27`,
    1950: `1095`,
    1951: `1095`,
    1952: `1096`,
    1953: `1097`,
    1954: `1098`,
    1955: `1098`,
    1956: `1099`,
    1957: `1100`,
    1958: `1101`,
    1959: `1101`,
    196: `27`,
    1960: `1102`,
    1961: `1103`,
    1962: `1103`,
    1963: `1104`,
    1964: `1104`,
    1965: `1105`,
    1966: `1105`,
    1967: `1106`,
    1968: `1106`,
    1969: `1106`,
    197: `27`,
    1970: `1106`,
    1971: `1106`,
    1972: `1106`,
    1973: `1107`,
    1974: `1107`,
    1975: `1108`,
    1976: `1108`,
    1977: `1109`,
    1978: `1110`,
    1979: `1110`,
    198: `27`,
    1980: `1111`,
    1981: `1112`,
    1982: `1113`,
    1983: `1113`,
    1984: `1114`,
    1985: `1115`,
    1986: `1116`,
    1987: `1116`,
    1988: `1117`,
    1989: `1118`,
    199: `27`,
    1990: `1118`,
    1991: `1119`,
    1992: `1120`,
    1993: `1120`,
    1994: `1121`,
    1995: `1121`,
    1996: `1121`,
    1997: `1122`,
    1998: `1123`,
    1999: `1123`,
    2: `2`,
    20: `2`,
    200: `27`,
    2000: `1124`,
    2001: `1124`,
    2002: `1124`,
    2003: `1125`,
    2004: `1126`,
    2005: `1126`,
    2006: `1127`,
    2007: `1128`,
    2008: `1129`,
    2009: `1129`,
    201: `27`,
    2010: `1130`,
    2011: `1133`,
    2012: `1133`,
    2013: `1134`,
    2014: `1135`,
    2015: `1135`,
    2016: `1136`,
    2017: `1137`,
    2018: `1137`,
    2019: `1138`,
    202: `27`,
    2020: `1139`,
    2021: `1140`,
    2022: `1141`,
    2023: `1141`,
    2024: `1141`,
    2025: `1142`,
    2026: `1142`,
    2027: `1142`,
    2028: `1143`,
    2029: `1144`,
    203: `27`,
    2030: `1144`,
    2031: `1145`,
    2032: `1145`,
    2033: `1145`,
    2034: `1145`,
    2035: `1145`,
    2036: `1145`,
    2037: `1145`,
    2038: `1145`,
    2039: `1145`,
    204: `27`,
    2040: `1145`,
    2041: `1146`,
    2042: `1146`,
    2043: `1147`,
    2044: `1148`,
    2045: `1149`,
    2046: `1149`,
    2047: `1150`,
    2048: `1151`,
    2049: `1151`,
    205: `27`,
    2050: `1152`,
    2051: `1153`,
    2052: `1154`,
    2053: `1154`,
    2054: `1155`,
    2055: `1156`,
    2056: `1156`,
    2057: `1157`,
    2058: `1158`,
    2059: `1161`,
    206: `27`,
    2060: `1161`,
    2061: `1162`,
    2062: `1162`,
    2063: `1163`,
    2064: `1164`,
    2065: `1165`,
    2066: `1166`,
    2067: `1166`,
    2068: `1167`,
    2069: `1167`,
    207: `27`,
    2070: `1167`,
    2071: `1167`,
    2072: `1167`,
    2073: `1167`,
    2074: `1168`,
    2075: `1168`,
    2076: `1169`,
    2077: `1170`,
    2078: `1171`,
    2079: `1171`,
    208: `27`,
    2080: `1172`,
    2081: `1173`,
    2082: `1175`,
    2083: `1175`,
    2084: `1176`,
    2085: `1177`,
    2086: `1177`,
    2087: `1178`,
    2088: `1179`,
    2089: `1180`,
    209: `27`,
    2090: `1180`,
    2091: `1181`,
    2092: `1182`,
    2093: `1183`,
    2094: `1183`,
    2095: `1184`,
    2096: `1185`,
    2097: `1186`,
    2098: `1187`,
    2099: `1187`,
    21: `2`,
    210: `27`,
    2100: `1188`,
    2101: `1188`,
    2102: `1189`,
    2103: `1189`,
    2104: `1190`,
    2105: `1190`,
    2106: `1191`,
    2107: `1192`,
    2108: `1192`,
    2109: `1193`,
    211: `27`,
    2110: `1193`,
    2111: `1194`,
    2112: `1194`,
    2113: `1195`,
    2114: `1195`,
    2115: `1196`,
    2116: `1196`,
    2117: `1197`,
    2118: `1197`,
    2119: `1198`,
    212: `27`,
    2120: `1198`,
    2121: `1199`,
    2122: `1199`,
    2123: `1200`,
    2124: `1200`,
    2125: `1200`,
    2126: `1203`,
    2127: `1204`,
    2128: `1204`,
    2129: `1205`,
    213: `27`,
    2130: `1206`,
    2131: `1207`,
    2132: `1207`,
    2133: `1207`,
    2134: `1208`,
    2135: `1208`,
    2136: `1209`,
    2137: `1210`,
    2138: `1211`,
    2139: `1211`,
    214: `27`,
    2140: `1212`,
    2141: `1212`,
    2142: `1212`,
    2143: `1212`,
    2144: `1212`,
    2145: `1212`,
    2146: `1213`,
    2147: `1213`,
    2148: `1214`,
    2149: `1215`,
    215: `27`,
    2150: `1216`,
    2151: `1218`,
    2152: `1218`,
    2153: `1219`,
    2154: `1219`,
    2155: `1219`,
    2156: `1220`,
    2157: `1220`,
    2158: `1220`,
    2159: `1222`,
    216: `27`,
    2160: `1222`,
    2161: `1222`,
    2162: `1223`,
    2163: `1223`,
    2164: `1223`,
    2165: `1223`,
    2166: `1224`,
    2167: `1224`,
    2168: `1224`,
    2169: `1226`,
    217: `27`,
    2170: `1227`,
    2171: `1228`,
    2172: `1228`,
    2173: `1229`,
    2174: `1230`,
    2175: `1230`,
    2176: `1232`,
    2177: `1232`,
    2178: `1232`,
    2179: `1232`,
    218: `27`,
    2180: `1232`,
    2181: `1232`,
    2182: `1232`,
    2183: `1232`,
    2184: `1233`,
    2185: `1233`,
    2186: `1234`,
    2187: `1234`,
    2188: `1234`,
    2189: `1235`,
    219: `27`,
    2190: `1235`,
    2191: `1236`,
    2192: `1238`,
    2193: `1238`,
    2194: `1239`,
    2195: `1239`,
    2196: `1241`,
    2197: `1241`,
    2198: `1241`,
    2199: `1242`,
    22: `2`,
    220: `27`,
    2200: `1242`,
    2201: `1243`,
    2202: `1243`,
    2203: `1243`,
    2204: `1245`,
    2205: `1245`,
    2206: `1245`,
    2207: `1247`,
    2208: `1247`,
    2209: `1247`,
    221: `27`,
    2210: `1248`,
    2211: `1248`,
    2212: `1249`,
    2213: `1249`,
    2214: `1249`,
    2215: `1251`,
    2216: `1251`,
    2217: `1251`,
    2218: `1253`,
    2219: `1253`,
    222: `27`,
    2220: `1253`,
    2221: `1254`,
    2222: `1254`,
    2223: `1255`,
    2224: `1255`,
    2225: `1255`,
    2226: `1257`,
    2227: `1257`,
    2228: `1257`,
    2229: `1259`,
    223: `27`,
    2230: `1259`,
    2231: `1259`,
    2232: `1260`,
    2233: `1260`,
    2234: `1261`,
    2235: `1261`,
    2236: `1261`,
    2237: `1263`,
    2238: `1263`,
    2239: `1263`,
    224: `27`,
    2240: `1265`,
    2241: `1265`,
    2242: `1265`,
    2243: `1267`,
    2244: `1267`,
    2245: `1267`,
    2246: `1268`,
    2247: `1268`,
    2248: `1269`,
    2249: `1269`,
    225: `27`,
    2250: `1269`,
    2251: `1271`,
    2252: `1271`,
    2253: `1271`,
    2254: `1273`,
    2255: `1273`,
    2256: `1273`,
    2257: `1274`,
    2258: `1274`,
    2259: `1275`,
    226: `27`,
    2260: `1275`,
    2261: `1275`,
    2262: `1277`,
    2263: `1277`,
    2264: `1277`,
    2265: `1279`,
    2266: `1279`,
    2267: `1279`,
    2268: `1280`,
    2269: `1280`,
    227: `27`,
    2270: `1281`,
    2271: `1281`,
    2272: `1281`,
    2273: `1283`,
    2274: `1283`,
    2275: `1283`,
    2276: `1285`,
    2277: `1285`,
    2278: `1285`,
    2279: `1286`,
    228: `27`,
    2280: `1286`,
    2281: `1287`,
    2282: `1287`,
    2283: `1287`,
    2284: `1289`,
    2285: `1290`,
    2286: `1290`,
    2287: `1291`,
    2288: `1292`,
    2289: `1293`,
    229: `29`,
    2290: `1293`,
    2291: `1294`,
    2292: `1294`,
    2293: `1295`,
    2294: `1296`,
    2295: `1297`,
    2296: `1298`,
    2297: `1298`,
    2298: `1299`,
    2299: `1300`,
    23: `2`,
    230: `34`,
    2300: `1301`,
    2301: `1302`,
    2302: `1302`,
    2303: `1303`,
    2304: `1304`,
    2305: `1305`,
    2306: `1306`,
    2307: `1306`,
    2308: `1307`,
    2309: `1307`,
    231: `34`,
    2310: `1307`,
    2311: `1308`,
    2312: `1308`,
    2313: `1308`,
    2314: `1309`,
    2315: `1310`,
    2316: `1311`,
    2317: `1312`,
    2318: `1312`,
    2319: `1312`,
    232: `35`,
    2320: `1315`,
    2321: `1315`,
    2322: `1315`,
    2323: `1318`,
    2324: `1318`,
    2325: `1318`,
    2326: `1320`,
    2327: `1320`,
    2328: `1321`,
    2329: `1321`,
    233: `36`,
    2330: `1322`,
    2331: `1323`,
    2332: `1326`,
    2333: `1326`,
    2334: `1326`,
    2335: `1327`,
    2336: `1328`,
    2337: `1328`,
    2338: `1329`,
    2339: `1329`,
    234: `37`,
    2340: `1329`,
    2341: `1331`,
    2342: `1331`,
    2343: `1332`,
    2344: `1332`,
    2345: `1333`,
    2346: `1334`,
    2347: `1334`,
    2348: `1334`,
    2349: `1335`,
    235: `37`,
    2350: `1335`,
    2351: `1336`,
    2352: `1336`,
    2353: `1337`,
    2354: `1338`,
    2355: `1341`,
    2356: `1341`,
    2357: `1341`,
    2358: `1342`,
    2359: `1342`,
    236: `37`,
    2360: `1343`,
    2361: `1344`,
    2362: `1344`,
    2363: `1345`,
    2364: `1345`,
    2365: `1345`,
    2366: `1347`,
    2367: `1347`,
    2368: `1348`,
    2369: `1349`,
    237: `38`,
    2370: `1350`,
    2371: `1353`,
    2372: `1353`,
    2373: `1353`,
    2374: `1354`,
    2375: `1354`,
    2376: `1355`,
    2377: `1356`,
    2378: `1356`,
    2379: `1357`,
    238: `38`,
    2380: `1357`,
    2381: `1357`,
    2382: `1359`,
    2383: `1359`,
    2384: `1360`,
    2385: `1360`,
    2386: `1361`,
    2387: `1362`,
    2388: `1365`,
    2389: `1365`,
    239: `39`,
    2390: `1365`,
    2391: `1366`,
    2392: `1366`,
    2393: `1367`,
    2394: `1368`,
    2395: `1368`,
    2396: `1369`,
    2397: `1369`,
    2398: `1369`,
    2399: `1371`,
    24: `2`,
    240: `40`,
    2400: `1371`,
    2401: `1372`,
    2402: `1372`,
    2403: `1373`,
    2404: `1374`,
    2405: `1374`,
    2406: `1374`,
    2407: `1375`,
    2408: `1375`,
    2409: `1376`,
    241: `40`,
    2410: `1376`,
    2411: `1377`,
    2412: `1378`,
    2413: `1381`,
    2414: `1381`,
    2415: `1381`,
    2416: `1382`,
    2417: `1383`,
    2418: `1383`,
    2419: `1384`,
    242: `43`,
    2420: `1384`,
    2421: `1384`,
    2422: `1386`,
    2423: `1386`,
    2424: `1387`,
    2425: `1388`,
    2426: `1389`,
    2427: `1392`,
    2428: `1392`,
    2429: `1392`,
    243: `43`,
    2430: `1393`,
    2431: `1394`,
    2432: `1394`,
    2433: `1395`,
    2434: `1395`,
    2435: `1395`,
    2436: `1397`,
    2437: `1397`,
    2438: `1398`,
    2439: `1398`,
    244: `44`,
    2440: `1399`,
    2441: `1400`,
    2442: `1400`,
    2443: `1400`,
    2444: `1401`,
    2445: `1401`,
    2446: `1402`,
    2447: `1402`,
    2448: `1403`,
    2449: `1404`,
    245: `44`,
    2450: `1407`,
    2451: `1407`,
    2452: `1407`,
    2453: `1408`,
    2454: `1409`,
    2455: `1409`,
    2456: `1410`,
    2457: `1410`,
    2458: `1410`,
    2459: `1412`,
    246: `45`,
    2460: `1412`,
    2461: `1413`,
    2462: `1413`,
    2463: `1414`,
    2464: `1415`,
    2465: `1418`,
    2466: `1418`,
    2467: `1418`,
    2468: `1419`,
    2469: `1420`,
    247: `46`,
    2470: `1420`,
    2471: `1421`,
    2472: `1421`,
    2473: `1421`,
    2474: `1423`,
    2475: `1423`,
    2476: `1423`,
    2477: `1425`,
    2478: `1425`,
    2479: `1425`,
    248: `47`,
    2480: `1427`,
    2481: `1427`,
    2482: `1427`,
    2483: `1429`,
    2484: `1429`,
    2485: `1430`,
    2486: `1431`,
    2487: `1431`,
    2488: `1432`,
    2489: `1432`,
    249: `47`,
    2490: `1432`,
    2491: `1432`,
    2492: `1432`,
    2493: `1432`,
    2494: `1432`,
    2495: `1432`,
    2496: `1432`,
    2497: `1432`,
    2498: `1433`,
    2499: `1433`,
    25: `2`,
    250: `47`,
    2500: `1434`,
    2501: `1435`,
    2502: `1436`,
    2503: `1436`,
    2504: `1437`,
    2505: `1437`,
    2506: `1438`,
    2507: `1438`,
    2508: `1439`,
    2509: `1439`,
    251: `48`,
    2510: `1440`,
    2511: `1440`,
    2512: `1440`,
    2513: `1442`,
    2514: `1442`,
    2515: `1444`,
    2516: `1444`,
    2517: `1445`,
    2518: `1445`,
    2519: `1445`,
    252: `48`,
    2520: `1446`,
    2521: `1447`,
    2522: `1447`,
    2523: `1448`,
    2524: `1449`,
    2525: `1450`,
    2526: `1451`,
    2527: `1451`,
    2528: `1452`,
    2529: `1452`,
    253: `49`,
    2530: `1453`,
    2531: `1454`,
    2532: `1454`,
    2533: `1455`,
    2534: `1456`,
    2535: `1456`,
    2536: `1457`,
    2537: `1458`,
    2538: `1458`,
    2539: `1459`,
    254: `50`,
    2540: `1460`,
    2541: `1461`,
    2542: `1461`,
    2543: `1462`,
    2544: `1463`,
    2545: `1464`,
    2546: `1464`,
    2547: `1465`,
    2548: `1466`,
    2549: `1466`,
    255: `51`,
    2550: `1467`,
    2551: `1467`,
    2552: `1469`,
    2553: `1469`,
    2554: `1470`,
    2555: `1470`,
    2556: `1471`,
    2557: `1471`,
    2558: `1472`,
    2559: `1472`,
    256: `51`,
    2560: `1473`,
    2561: `1474`,
    2562: `1474`,
    2563: `1475`,
    2564: `1475`,
    2565: `1476`,
    2566: `1477`,
    2567: `1477`,
    2568: `1478`,
    2569: `1478`,
    257: `52`,
    2570: `1479`,
    2571: `1483`,
    2572: `1483`,
    2573: `1484`,
    2574: `1485`,
    2575: `1485`,
    2576: `1486`,
    2577: `1487`,
    2578: `1487`,
    2579: `1488`,
    258: `52`,
    2580: `1489`,
    2581: `1490`,
    2582: `1491`,
    2583: `1491`,
    2584: `1491`,
    2585: `1492`,
    2586: `1492`,
    2587: `1492`,
    2588: `1493`,
    2589: `1494`,
    259: `52`,
    2590: `1494`,
    2591: `1495`,
    2592: `1495`,
    2593: `1495`,
    2594: `1495`,
    2595: `1495`,
    2596: `1495`,
    2597: `1495`,
    2598: `1495`,
    2599: `1495`,
    26: `2`,
    260: `52`,
    2600: `1495`,
    2601: `1496`,
    2602: `1496`,
    2603: `1497`,
    2604: `1498`,
    2605: `1499`,
    2606: `1499`,
    2607: `1500`,
    2608: `1501`,
    2609: `1501`,
    261: `52`,
    2610: `1502`,
    2611: `1503`,
    2612: `1504`,
    2613: `1504`,
    2614: `1505`,
    2615: `1506`,
    2616: `1506`,
    2617: `1507`,
    2618: `1508`,
    2619: `1512`,
    262: `52`,
    2620: `1512`,
    2621: `1513`,
    2622: `1513`,
    2623: `1514`,
    2624: `1515`,
    2625: `1516`,
    2626: `1516`,
    2627: `1517`,
    2628: `1518`,
    2629: `1519`,
    263: `53`,
    2630: `1519`,
    2631: `1520`,
    2632: `1521`,
    2633: `1521`,
    2634: `1522`,
    2635: `1523`,
    2636: `1525`,
    2637: `1525`,
    2638: `1526`,
    2639: `1526`,
    264: `53`,
    2640: `1527`,
    2641: `1528`,
    2642: `1529`,
    2643: `1529`,
    2644: `1530`,
    2645: `1530`,
    2646: `1530`,
    2647: `1530`,
    2648: `1530`,
    2649: `1530`,
    265: `54`,
    2650: `1530`,
    2651: `1530`,
    2652: `1530`,
    2653: `1530`,
    2654: `1531`,
    2655: `1531`,
    2656: `1532`,
    2657: `1533`,
    2658: `1534`,
    2659: `1534`,
    266: `55`,
    2660: `1535`,
    2661: `1535`,
    2662: `1536`,
    2663: `1536`,
    2664: `1537`,
    2665: `1538`,
    2666: `1538`,
    2667: `1539`,
    2668: `1539`,
    2669: `1540`,
    267: `56`,
    2670: `1540`,
    2671: `1541`,
    2672: `1541`,
    2673: `1542`,
    2674: `1543`,
    2675: `1543`,
    2676: `1544`,
    2677: `1545`,
    2678: `1545`,
    2679: `1546`,
    268: `58`,
    2680: `1546`,
    2681: `1547`,
    2682: `1547`,
    2683: `1548`,
    2684: `1548`,
    2685: `1549`,
    2686: `1549`,
    2687: `1550`,
    2688: `1550`,
    2689: `1550`,
    269: `58`,
    2690: `1552`,
    2691: `1552`,
    2692: `1553`,
    2693: `1553`,
    2694: `1554`,
    2695: `1555`,
    2696: `1555`,
    2697: `1555`,
    2698: `1556`,
    2699: `1556`,
    27: `2`,
    270: `59`,
    2700: `1558`,
    2701: `1558`,
    2702: `1559`,
    2703: `1559`,
    2704: `1559`,
    2705: `1560`,
    2706: `1560`,
    2707: `1561`,
    2708: `1561`,
    2709: `1562`,
    271: `59`,
    2710: `1563`,
    2711: `1564`,
    2712: `1564`,
    2713: `1565`,
    2714: `1566`,
    2715: `1568`,
    2716: `1569`,
    2717: `1569`,
    2718: `1570`,
    2719: `1570`,
    272: `59`,
    2720: `1570`,
    2721: `1570`,
    2722: `1570`,
    2723: `1570`,
    2724: `1570`,
    2725: `1570`,
    2726: `1570`,
    2727: `1570`,
    2728: `1571`,
    2729: `1571`,
    273: `62`,
    2730: `1572`,
    2731: `1573`,
    2732: `1573`,
    2733: `1573`,
    2734: `1574`,
    2735: `1575`,
    2736: `1576`,
    2737: `1576`,
    2738: `1577`,
    2739: `1578`,
    274: `63`,
    2740: `1578`,
    2741: `1578`,
    2742: `1579`,
    2743: `1579`,
    2744: `1580`,
    2745: `1580`,
    2746: `1581`,
    2747: `1581`,
    2748: `1582`,
    2749: `1582`,
    275: `63`,
    2750: `1583`,
    2751: `1584`,
    2752: `1584`,
    2753: `1585`,
    2754: `1585`,
    2755: `1586`,
    2756: `1586`,
    2757: `1586`,
    2758: `1588`,
    2759: `1588`,
    276: `64`,
    2760: `1589`,
    2761: `1589`,
    2762: `1590`,
    2763: `1591`,
    2764: `1592`,
    2765: `1592`,
    2766: `1593`,
    2767: `1594`,
    2768: `1596`,
    2769: `1597`,
    277: `64`,
    2770: `1597`,
    2771: `1598`,
    2772: `1598`,
    2773: `1598`,
    2774: `1598`,
    2775: `1598`,
    2776: `1598`,
    2777: `1598`,
    2778: `1598`,
    2779: `1598`,
    278: `64`,
    2780: `1598`,
    2781: `1599`,
    2782: `1599`,
    2783: `1600`,
    2784: `1601`,
    2785: `1601`,
    2786: `1601`,
    2787: `1602`,
    2788: `1603`,
    2789: `1604`,
    279: `64`,
    2790: `1604`,
    2791: `1605`,
    2792: `1606`,
    2793: `1606`,
    2794: `1606`,
    2795: `1607`,
    2796: `1607`,
    2797: `1608`,
    2798: `1608`,
    2799: `1609`,
    28: `2`,
    280: `64`,
    2800: `1609`,
    2801: `1610`,
    2802: `1610`,
    2803: `1611`,
    2804: `1611`,
    2805: `1612`,
    2806: `1612`,
    2807: `1612`,
    2808: `1614`,
    2809: `1614`,
    281: `64`,
    2810: `1615`,
    2811: `1615`,
    2812: `1616`,
    2813: `1617`,
    2814: `1618`,
    2815: `1618`,
    2816: `1619`,
    2817: `1620`,
    2818: `1622`,
    2819: `1623`,
    282: `64`,
    2820: `1623`,
    2821: `1624`,
    2822: `1624`,
    2823: `1624`,
    2824: `1624`,
    2825: `1624`,
    2826: `1624`,
    2827: `1624`,
    2828: `1624`,
    2829: `1624`,
    283: `64`,
    2830: `1624`,
    2831: `1625`,
    2832: `1625`,
    2833: `1626`,
    2834: `1627`,
    2835: `1627`,
    2836: `1627`,
    2837: `1628`,
    2838: `1629`,
    2839: `1630`,
    284: `64`,
    2840: `1630`,
    2841: `1631`,
    2842: `1632`,
    2843: `1632`,
    2844: `1632`,
    2845: `1633`,
    2846: `1633`,
    2847: `1634`,
    2848: `1634`,
    2849: `1635`,
    285: `64`,
    2850: `1635`,
    2851: `1636`,
    2852: `1636`,
    2853: `1637`,
    2854: `1637`,
    2855: `1638`,
    2856: `1638`,
    2857: `1638`,
    2858: `1640`,
    2859: `1640`,
    286: `65`,
    2860: `1640`,
    2861: `1642`,
    2862: `1642`,
    2863: `1642`,
    2864: `1644`,
    2865: `1644`,
    2866: `1645`,
    2867: `1645`,
    2868: `1646`,
    2869: `1647`,
    287: `65`,
    2870: `1647`,
    2871: `1647`,
    2872: `1648`,
    2873: `1648`,
    2874: `1649`,
    2875: `1650`,
    2876: `1650`,
    2877: `1651`,
    2878: `1651`,
    2879: `1651`,
    288: `66`,
    2880: `1653`,
    2881: `1653`,
    2882: `1653`,
    2883: `1655`,
    2884: `1655`,
    2885: `1656`,
    2886: `1656`,
    2887: `1657`,
    2888: `1657`,
    2889: `1657`,
    289: `67`,
    2890: `1659`,
    2891: `1659`,
    2892: `1660`,
    2893: `1660`,
    2894: `1661`,
    2895: `1661`,
    2896: `1661`,
    2897: `1663`,
    2898: `1663`,
    2899: `1664`,
    29: `2`,
    290: `68`,
    2900: `1664`,
    2901: `1664`,
    2902: `1665`,
    2903: `1666`,
    2904: `1668`,
    2905: `1668`,
    2906: `1670`,
    2907: `1670`,
    2908: `1671`,
    2909: `1671`,
    291: `68`,
    2910: `1671`,
    2911: `1672`,
    2912: `1672`,
    2913: `1673`,
    2914: `1673`,
    2915: `1674`,
    2916: `1674`,
    2917: `1674`,
    2918: `1676`,
    2919: `1677`,
    292: `69`,
    2920: `1677`,
    2921: `1678`,
    2922: `1678`,
    2923: `1679`,
    2924: `1679`,
    2925: `1680`,
    2926: `1680`,
    2927: `1680`,
    2928: `1683`,
    2929: `1683`,
    293: `69`,
    2930: `1684`,
    2931: `1684`,
    2932: `1685`,
    2933: `1686`,
    2934: `1689`,
    2935: `1690`,
    2936: `1691`,
    2937: `1691`,
    2938: `1692`,
    2939: `1693`,
    294: `70`,
    2940: `1693`,
    2941: `1694`,
    2942: `1694`,
    2943: `1695`,
    2944: `1695`,
    2945: `1696`,
    2946: `1696`,
    2947: `1697`,
    2948: `1697`,
    2949: `1698`,
    295: `71`,
    2950: `1700`,
    2951: `1700`,
    2952: `1702`,
    2953: `1702`,
    2954: `1703`,
    2955: `1704`,
    2956: `1704`,
    2957: `1705`,
    2958: `1705`,
    2959: `1705`,
    296: `71`,
    2960: `1707`,
    2961: `1708`,
    2962: `1708`,
    2963: `1709`,
    2964: `1709`,
    2965: `1710`,
    2966: `1710`,
    2967: `1710`,
    2968: `1711`,
    2969: `1711`,
    297: `72`,
    2970: `1711`,
    2971: `1713`,
    2972: `1714`,
    2973: `1714`,
    2974: `1715`,
    2975: `1716`,
    2976: `1717`,
    2977: `1718`,
    2978: `1718`,
    2979: `1719`,
    298: `72`,
    2980: `1719`,
    2981: `1720`,
    2982: `1721`,
    2983: `1721`,
    2984: `1722`,
    2985: `1723`,
    2986: `1723`,
    2987: `1724`,
    2988: `1725`,
    2989: `1725`,
    299: `73`,
    2990: `1726`,
    2991: `1727`,
    2992: `1728`,
    2993: `1728`,
    2994: `1729`,
    2995: `1730`,
    2996: `1731`,
    2997: `1731`,
    2998: `1732`,
    2999: `1733`,
    3: `2`,
    30: `2`,
    300: `73`,
    3000: `1733`,
    3001: `1734`,
    3002: `1734`,
    3003: `1736`,
    3004: `1736`,
    3005: `1737`,
    3006: `1737`,
    3007: `1737`,
    3008: `1737`,
    3009: `1737`,
    301: `76`,
    3010: `1737`,
    3011: `1738`,
    3012: `1738`,
    3013: `1739`,
    3014: `1739`,
    3015: `1740`,
    3016: `1741`,
    3017: `1741`,
    3018: `1742`,
    3019: `1745`,
    302: `76`,
    3020: `1745`,
    3021: `1746`,
    3022: `1747`,
    3023: `1747`,
    3024: `1748`,
    3025: `1749`,
    3026: `1749`,
    3027: `1750`,
    3028: `1751`,
    3029: `1752`,
    303: `77`,
    3030: `1753`,
    3031: `1753`,
    3032: `1753`,
    3033: `1754`,
    3034: `1754`,
    3035: `1754`,
    3036: `1755`,
    3037: `1756`,
    3038: `1756`,
    3039: `1757`,
    304: `77`,
    3040: `1757`,
    3041: `1757`,
    3042: `1757`,
    3043: `1757`,
    3044: `1757`,
    3045: `1757`,
    3046: `1757`,
    3047: `1757`,
    3048: `1757`,
    3049: `1758`,
    305: `77`,
    3050: `1758`,
    3051: `1759`,
    3052: `1760`,
    3053: `1761`,
    3054: `1761`,
    3055: `1762`,
    3056: `1763`,
    3057: `1763`,
    3058: `1764`,
    3059: `1765`,
    306: `79`,
    3060: `1766`,
    3061: `1766`,
    3062: `1767`,
    3063: `1767`,
    3064: `1768`,
    3065: `1768`,
    3066: `1769`,
    3067: `1770`,
    3068: `1770`,
    3069: `1771`,
    307: `79`,
    3070: `1772`,
    3071: `1772`,
    3072: `1773`,
    3073: `1774`,
    3074: `1777`,
    3075: `1777`,
    3076: `1777`,
    3077: `1777`,
    3078: `1777`,
    3079: `1777`,
    308: `80`,
    3080: `1778`,
    3081: `1778`,
    3082: `1779`,
    3083: `1780`,
    3084: `1781`,
    3085: `1781`,
    3086: `1782`,
    3087: `1783`,
    3088: `1784`,
    3089: `1784`,
    309: `81`,
    3090: `1785`,
    3091: `1786`,
    3092: `1786`,
    3093: `1787`,
    3094: `1788`,
    3095: `1789`,
    3096: `1789`,
    3097: `1790`,
    3098: `1791`,
    3099: `1792`,
    31: `2`,
    310: `81`,
    3100: `1792`,
    3101: `1793`,
    3102: `1794`,
    3103: `1796`,
    3104: `1796`,
    3105: `1797`,
    3106: `1798`,
    3107: `1799`,
    3108: `1799`,
    3109: `1799`,
    311: `82`,
    3110: `1800`,
    3111: `1800`,
    3112: `1801`,
    3113: `1801`,
    3114: `1802`,
    3115: `1803`,
    3116: `1803`,
    3117: `1804`,
    3118: `1805`,
    3119: `1806`,
    312: `83`,
    3120: `1806`,
    3121: `1807`,
    3122: `1807`,
    3123: `1808`,
    3124: `1808`,
    3125: `1809`,
    3126: `1809`,
    3127: `1810`,
    3128: `1810`,
    3129: `1811`,
    313: `83`,
    3130: `1811`,
    3131: `1812`,
    3132: `1812`,
    3133: `1813`,
    3134: `1813`,
    3135: `1814`,
    3136: `1814`,
    3137: `1814`,
    3138: `1816`,
    3139: `1816`,
    314: `84`,
    3140: `1817`,
    3141: `1817`,
    3142: `1817`,
    3143: `1818`,
    3144: `1819`,
    3145: `1819`,
    3146: `1820`,
    3147: `1821`,
    3148: `1822`,
    3149: `1823`,
    315: `85`,
    3150: `1823`,
    3151: `1825`,
    3152: `1825`,
    3153: `1827`,
    3154: `1827`,
    3155: `1828`,
    3156: `1828`,
    3157: `1828`,
    3158: `1829`,
    3159: `1829`,
    316: `86`,
    3160: `1831`,
    3161: `1831`,
    3162: `1832`,
    3163: `1832`,
    3164: `1832`,
    3165: `1833`,
    3166: `1834`,
    3167: `1834`,
    3168: `1835`,
    3169: `1836`,
    317: `86`,
    3170: `1837`,
    3171: `1838`,
    3172: `1838`,
    3173: `1839`,
    3174: `1839`,
    3175: `1840`,
    3176: `1841`,
    3177: `1841`,
    3178: `1842`,
    3179: `1843`,
    318: `87`,
    3180: `1843`,
    3181: `1844`,
    3182: `1845`,
    3183: `1845`,
    3184: `1846`,
    3185: `1847`,
    3186: `1848`,
    3187: `1848`,
    3188: `1849`,
    3189: `1850`,
    319: `88`,
    3190: `1851`,
    3191: `1851`,
    3192: `1852`,
    3193: `1853`,
    3194: `1853`,
    3195: `1854`,
    3196: `1854`,
    3197: `1855`,
    3198: `1855`,
    3199: `1856`,
    32: `2`,
    320: `88`,
    3200: `1856`,
    3201: `1857`,
    3202: `1857`,
    3203: `1858`,
    3204: `1858`,
    3205: `1859`,
    3206: `1859`,
    3207: `1860`,
    3208: `1863`,
    3209: `1863`,
    321: `89`,
    3210: `1864`,
    3211: `1865`,
    3212: `1865`,
    3213: `1866`,
    3214: `1867`,
    3215: `1867`,
    3216: `1868`,
    3217: `1869`,
    3218: `1870`,
    3219: `1871`,
    322: `90`,
    3220: `1871`,
    3221: `1871`,
    3222: `1872`,
    3223: `1872`,
    3224: `1872`,
    3225: `1873`,
    3226: `1874`,
    3227: `1874`,
    3228: `1875`,
    3229: `1875`,
    323: `91`,
    3230: `1875`,
    3231: `1875`,
    3232: `1875`,
    3233: `1875`,
    3234: `1875`,
    3235: `1875`,
    3236: `1875`,
    3237: `1875`,
    3238: `1876`,
    3239: `1876`,
    324: `91`,
    3240: `1877`,
    3241: `1878`,
    3242: `1879`,
    3243: `1879`,
    3244: `1880`,
    3245: `1881`,
    3246: `1881`,
    3247: `1882`,
    3248: `1883`,
    3249: `1884`,
    325: `92`,
    3250: `1884`,
    3251: `1885`,
    3252: `1886`,
    3253: `1886`,
    3254: `1887`,
    3255: `1888`,
    3256: `1891`,
    3257: `1892`,
    3258: `1892`,
    3259: `1893`,
    326: `93`,
    3260: `1893`,
    3261: `1894`,
    3262: `1894`,
    3263: `1895`,
    3264: `1895`,
    3265: `1896`,
    3266: `1897`,
    3267: `1898`,
    3268: `1899`,
    3269: `1899`,
    327: `94`,
    3270: `1900`,
    3271: `1900`,
    3272: `1901`,
    3273: `1901`,
    3274: `1902`,
    3275: `1903`,
    3276: `1904`,
    3277: `1904`,
    3278: `1905`,
    3279: `1906`,
    328: `94`,
    3280: `1906`,
    3281: `1907`,
    3282: `1907`,
    3283: `1908`,
    3284: `1908`,
    3285: `1909`,
    3286: `1909`,
    3287: `1910`,
    3288: `1910`,
    3289: `1910`,
    329: `95`,
    3290: `1912`,
    3291: `1912`,
    3292: `1913`,
    3293: `1913`,
    3294: `1913`,
    3295: `1914`,
    3296: `1914`,
    3297: `1915`,
    3298: `1915`,
    3299: `1915`,
    33: `2`,
    330: `95`,
    3300: `1916`,
    3301: `1917`,
    3302: `1917`,
    3303: `1918`,
    3304: `1919`,
    3305: `1920`,
    3306: `1921`,
    3307: `1921`,
    3308: `1923`,
    3309: `1923`,
    331: `97`,
    3310: `1925`,
    3311: `1925`,
    3312: `1926`,
    3313: `1926`,
    3314: `1926`,
    3315: `1927`,
    3316: `1927`,
    3317: `1929`,
    3318: `1929`,
    3319: `1930`,
    332: `97`,
    3320: `1930`,
    3321: `1930`,
    3322: `1931`,
    3323: `1931`,
    3324: `1931`,
    3325: `1931`,
    3326: `1931`,
    3327: `1931`,
    3328: `1932`,
    3329: `1932`,
    333: `98`,
    3330: `1933`,
    3331: `1934`,
    3332: `1934`,
    3333: `1935`,
    3334: `1936`,
    3335: `1937`,
    3336: `1937`,
    3337: `1938`,
    3338: `1939`,
    3339: `1939`,
    334: `98`,
    3340: `1940`,
    3341: `1941`,
    3342: `1941`,
    3343: `1942`,
    3344: `1943`,
    3345: `1944`,
    3346: `1946`,
    3347: `1947`,
    3348: `1947`,
    3349: `1948`,
    335: `99`,
    3350: `1949`,
    3351: `1950`,
    3352: `1951`,
    3353: `1951`,
    3354: `1952`,
    3355: `1952`,
    3356: `1953`,
    3357: `1954`,
    3358: `1954`,
    3359: `1955`,
    336: `100`,
    3360: `1956`,
    3361: `1956`,
    3362: `1957`,
    3363: `1958`,
    3364: `1958`,
    3365: `1959`,
    3366: `1960`,
    3367: `1961`,
    3368: `1961`,
    3369: `1962`,
    337: `100`,
    3370: `1963`,
    3371: `1964`,
    3372: `1964`,
    3373: `1965`,
    3374: `1966`,
    3375: `1966`,
    3376: `1967`,
    3377: `1967`,
    3378: `1969`,
    3379: `1969`,
    338: `101`,
    3380: `1970`,
    3381: `1970`,
    3382: `1971`,
    3383: `1971`,
    3384: `1972`,
    3385: `1972`,
    3386: `1973`,
    3387: `1973`,
    3388: `1974`,
    3389: `1977`,
    339: `101`,
    3390: `1977`,
    3391: `1978`,
    3392: `1979`,
    3393: `1979`,
    3394: `1980`,
    3395: `1981`,
    3396: `1981`,
    3397: `1982`,
    3398: `1983`,
    3399: `1984`,
    34: `2`,
    340: `101`,
    3400: `1985`,
    3401: `1985`,
    3402: `1985`,
    3403: `1986`,
    3404: `1986`,
    3405: `1986`,
    3406: `1987`,
    3407: `1988`,
    3408: `1988`,
    3409: `1989`,
    341: `102`,
    3410: `1989`,
    3411: `1989`,
    3412: `1989`,
    3413: `1989`,
    3414: `1989`,
    3415: `1989`,
    3416: `1989`,
    3417: `1989`,
    3418: `1989`,
    3419: `1990`,
    342: `103`,
    3420: `1990`,
    3421: `1991`,
    3422: `1992`,
    3423: `1993`,
    3424: `1993`,
    3425: `1994`,
    3426: `1995`,
    3427: `1995`,
    3428: `1996`,
    3429: `1997`,
    343: `104`,
    3430: `1998`,
    3431: `1998`,
    3432: `1999`,
    3433: `2000`,
    3434: `2000`,
    3435: `2001`,
    3436: `2002`,
    3437: `2005`,
    3438: `2006`,
    3439: `2006`,
    344: `105`,
    3440: `2007`,
    3441: `2007`,
    3442: `2008`,
    3443: `2008`,
    3444: `2009`,
    3445: `2009`,
    3446: `2010`,
    3447: `2011`,
    3448: `2012`,
    3449: `2013`,
    345: `105`,
    3450: `2013`,
    3451: `2014`,
    3452: `2014`,
    3453: `2015`,
    3454: `2015`,
    3455: `2016`,
    3456: `2017`,
    3457: `2018`,
    3458: `2018`,
    3459: `2019`,
    346: `105`,
    3460: `2020`,
    3461: `2020`,
    3462: `2021`,
    3463: `2021`,
    3464: `2022`,
    3465: `2022`,
    3466: `2023`,
    3467: `2023`,
    3468: `2024`,
    3469: `2024`,
    347: `106`,
    3470: `2024`,
    3471: `2026`,
    3472: `2026`,
    3473: `2027`,
    3474: `2028`,
    3475: `2028`,
    3476: `2029`,
    3477: `2029`,
    3478: `2029`,
    3479: `2031`,
    348: `107`,
    3480: `2031`,
    3481: `2032`,
    3482: `2032`,
    3483: `2032`,
    3484: `2033`,
    3485: `2034`,
    3486: `2034`,
    3487: `2035`,
    3488: `2036`,
    3489: `2037`,
    349: `108`,
    3490: `2038`,
    3491: `2038`,
    3492: `2040`,
    3493: `2040`,
    3494: `2042`,
    3495: `2042`,
    3496: `2043`,
    3497: `2043`,
    3498: `2043`,
    3499: `2044`,
    35: `2`,
    350: `108`,
    3500: `2044`,
    3501: `2046`,
    3502: `2046`,
    3503: `2047`,
    3504: `2047`,
    3505: `2047`,
    3506: `2048`,
    3507: `2048`,
    3508: `2048`,
    3509: `2048`,
    351: `109`,
    3510: `2048`,
    3511: `2048`,
    3512: `2049`,
    3513: `2049`,
    3514: `2050`,
    3515: `2051`,
    3516: `2051`,
    3517: `2052`,
    3518: `2053`,
    3519: `2054`,
    352: `110`,
    3520: `2054`,
    3521: `2055`,
    3522: `2056`,
    3523: `2056`,
    3524: `2057`,
    3525: `2058`,
    3526: `2058`,
    3527: `2059`,
    3528: `2060`,
    3529: `2061`,
    353: `110`,
    3530: `2063`,
    3531: `2064`,
    3532: `2064`,
    3533: `2065`,
    3534: `2066`,
    3535: `2067`,
    3536: `2068`,
    3537: `2068`,
    3538: `2069`,
    3539: `2069`,
    354: `111`,
    3540: `2070`,
    3541: `2071`,
    3542: `2071`,
    3543: `2072`,
    3544: `2073`,
    3545: `2073`,
    3546: `2074`,
    3547: `2075`,
    3548: `2075`,
    3549: `2076`,
    355: `112`,
    3550: `2077`,
    3551: `2078`,
    3552: `2078`,
    3553: `2079`,
    3554: `2080`,
    3555: `2081`,
    3556: `2081`,
    3557: `2082`,
    3558: `2083`,
    3559: `2083`,
    356: `113`,
    3560: `2084`,
    3561: `2084`,
    3562: `2086`,
    3563: `2086`,
    3564: `2087`,
    3565: `2087`,
    3566: `2088`,
    3567: `2088`,
    3568: `2089`,
    3569: `2089`,
    357: `113`,
    3570: `2090`,
    3571: `2090`,
    3572: `2091`,
    3573: `2094`,
    3574: `2094`,
    3575: `2095`,
    3576: `2096`,
    3577: `2096`,
    3578: `2097`,
    3579: `2098`,
    358: `114`,
    3580: `2098`,
    3581: `2099`,
    3582: `2100`,
    3583: `2101`,
    3584: `2102`,
    3585: `2102`,
    3586: `2102`,
    3587: `2103`,
    3588: `2103`,
    3589: `2103`,
    359: `115`,
    3590: `2104`,
    3591: `2105`,
    3592: `2105`,
    3593: `2106`,
    3594: `2106`,
    3595: `2106`,
    3596: `2106`,
    3597: `2106`,
    3598: `2106`,
    3599: `2106`,
    36: `2`,
    360: `116`,
    3600: `2106`,
    3601: `2106`,
    3602: `2106`,
    3603: `2107`,
    3604: `2107`,
    3605: `2108`,
    3606: `2109`,
    3607: `2110`,
    3608: `2110`,
    3609: `2111`,
    361: `117`,
    3610: `2112`,
    3611: `2112`,
    3612: `2113`,
    3613: `2114`,
    3614: `2115`,
    3615: `2115`,
    3616: `2116`,
    3617: `2117`,
    3618: `2117`,
    3619: `2118`,
    362: `117`,
    3620: `2119`,
    3621: `2122`,
    3622: `2123`,
    3623: `2123`,
    3624: `2124`,
    3625: `2124`,
    3626: `2125`,
    3627: `2125`,
    3628: `2126`,
    3629: `2126`,
    363: `118`,
    3630: `2127`,
    3631: `2128`,
    3632: `2129`,
    3633: `2130`,
    3634: `2130`,
    3635: `2131`,
    3636: `2131`,
    3637: `2132`,
    3638: `2132`,
    3639: `2133`,
    364: `119`,
    3640: `2134`,
    3641: `2135`,
    3642: `2135`,
    3643: `2136`,
    3644: `2137`,
    3645: `2137`,
    3646: `2138`,
    3647: `2138`,
    3648: `2139`,
    3649: `2139`,
    365: `120`,
    3650: `2140`,
    3651: `2140`,
    3652: `2141`,
    3653: `2141`,
    3654: `2141`,
    3655: `2143`,
    3656: `2143`,
    3657: `2144`,
    3658: `2144`,
    3659: `2144`,
    366: `122`,
    3660: `2145`,
    3661: `2146`,
    3662: `2148`,
    3663: `2148`,
    3664: `2150`,
    3665: `2150`,
    3666: `2151`,
    3667: `2151`,
    3668: `2151`,
    3669: `2152`,
    367: `122`,
    3670: `2152`,
    3671: `2153`,
    3672: `2153`,
    3673: `2154`,
    3674: `2154`,
    3675: `2154`,
    3676: `2156`,
    3677: `2157`,
    3678: `2157`,
    3679: `2158`,
    368: `122`,
    3680: `2158`,
    3681: `2159`,
    3682: `2159`,
    3683: `2160`,
    3684: `2160`,
    3685: `2160`,
    3686: `2162`,
    3687: `2162`,
    3688: `2162`,
    3689: `2164`,
    369: `124`,
    3690: `2164`,
    3691: `2165`,
    3692: `2165`,
    3693: `2165`,
    3694: `2166`,
    3695: `2167`,
    3696: `2169`,
    3697: `2169`,
    3698: `2171`,
    3699: `2171`,
    37: `2`,
    370: `124`,
    3700: `2172`,
    3701: `2172`,
    3702: `2172`,
    3703: `2173`,
    3704: `2173`,
    3705: `2174`,
    3706: `2174`,
    3707: `2175`,
    3708: `2175`,
    3709: `2175`,
    371: `125`,
    3710: `2177`,
    3711: `2178`,
    3712: `2178`,
    3713: `2179`,
    3714: `2179`,
    3715: `2180`,
    3716: `2180`,
    3717: `2181`,
    3718: `2181`,
    3719: `2181`,
    372: `125`,
    3720: `2183`,
    3721: `2183`,
    3722: `2183`,
    3723: `2185`,
    3724: `2186`,
    3725: `2186`,
    3726: `2187`,
    3727: `2188`,
    3728: `2188`,
    3729: `2189`,
    373: `125`,
    3730: `2189`,
    3731: `2190`,
    3732: `2190`,
    3733: `2191`,
    3734: `2192`,
    3735: `2194`,
    3736: `2194`,
    3737: `2195`,
    3738: `2195`,
    3739: `2196`,
    374: `127`,
    3740: `2197`,
    3741: `2197`,
    3742: `2197`,
    3743: `2198`,
    3744: `2198`,
    3745: `2199`,
    3746: `2199`,
    3747: `2200`,
    3748: `2201`,
    3749: `2204`,
    375: `127`,
    3750: `2204`,
    3751: `2204`,
    3752: `2205`,
    3753: `2206`,
    3754: `2206`,
    3755: `2207`,
    3756: `2207`,
    3757: `2207`,
    3758: `2209`,
    3759: `2210`,
    376: `127`,
    3760: `2210`,
    3761: `2211`,
    3762: `2211`,
    3763: `2212`,
    3764: `2212`,
    3765: `2213`,
    3766: `2213`,
    3767: `2214`,
    3768: `2214`,
    3769: `2215`,
    377: `127`,
    3770: `2215`,
    3771: `2216`,
    3772: `2217`,
    3773: `2219`,
    3774: `2219`,
    3775: `2220`,
    3776: `2221`,
    3777: `2222`,
    3778: `2225`,
    3779: `2225`,
    378: `127`,
    3780: `2225`,
    3781: `2226`,
    3782: `2227`,
    3783: `2227`,
    3784: `2228`,
    3785: `2228`,
    3786: `2228`,
    3787: `2230`,
    3788: `2230`,
    3789: `2231`,
    379: `127`,
    3790: `2231`,
    3791: `2232`,
    3792: `2233`,
    3793: `2233`,
    3794: `2233`,
    3795: `2234`,
    3796: `2234`,
    3797: `2235`,
    3798: `2235`,
    3799: `2236`,
    38: `2`,
    380: `128`,
    3800: `2237`,
    3801: `2240`,
    3802: `2240`,
    3803: `2240`,
    3804: `2241`,
    3805: `2242`,
    3806: `2242`,
    3807: `2243`,
    3808: `2243`,
    3809: `2243`,
    381: `128`,
    3810: `2246`,
    3811: `2246`,
    3812: `2246`,
    3813: `2248`,
    3814: `2249`,
    3815: `2251`,
    3816: `2252`,
    3817: `2253`,
    3818: `2254`,
    3819: `2254`,
    382: `129`,
    3820: `2255`,
    3821: `2255`,
    3822: `2256`,
    3823: `2256`,
    3824: `2256`,
    3825: `2257`,
    3826: `2259`,
    3827: `2260`,
    3828: `2261`,
    3829: `2261`,
    383: `130`,
    3830: `2261`,
    3831: `2262`,
    3832: `2263`,
    3833: `2263`,
    3834: `2264`,
    3835: `2264`,
    3836: `2264`,
    3837: `2265`,
    3838: `2267`,
    3839: `2268`,
    384: `132`,
    3840: `2268`,
    3841: `2268`,
    3842: `2270`,
    3843: `2271`,
    3844: `2271`,
    3845: `2272`,
    3846: `2274`,
    3847: `2275`,
    3848: `2276`,
    3849: `2277`,
    385: `133`,
    3850: `2278`,
    3851: `2278`,
    3852: `2279`,
    3853: `2280`,
    3854: `2281`,
    3855: `2282`,
    3856: `2284`,
    3857: `2285`,
    3858: `2285`,
    3859: `2285`,
    386: `138`,
    3860: `2287`,
    3861: `2288`,
    3862: `2289`,
    3863: `2290`,
    3864: `2290`,
    3865: `2291`,
    3866: `2292`,
    3867: `2292`,
    3868: `2292`,
    3869: `2293`,
    387: `138`,
    3870: `2293`,
    3871: `2294`,
    3872: `2295`,
    3873: `2295`,
    3874: `2296`,
    3875: `2297`,
    3876: `2297`,
    3877: `2298`,
    3878: `2299`,
    3879: `2299`,
    388: `139`,
    3880: `2299`,
    3881: `2300`,
    3882: `2300`,
    3883: `2301`,
    3884: `2301`,
    3885: `2302`,
    3886: `2303`,
    3887: `2303`,
    3888: `2304`,
    3889: `2306`,
    389: `140`,
    3890: `2307`,
    3891: `2308`,
    3892: `2309`,
    3893: `2309`,
    3894: `2310`,
    3895: `2311`,
    3896: `2311`,
    3897: `2311`,
    3898: `2312`,
    3899: `2312`,
    39: `2`,
    390: `140`,
    3900: `2313`,
    3901: `2314`,
    3902: `2314`,
    3903: `2315`,
    3904: `2316`,
    3905: `2316`,
    3906: `2317`,
    3907: `2318`,
    3908: `2318`,
    3909: `2318`,
    391: `143`,
    3910: `2319`,
    3911: `2319`,
    3912: `2320`,
    3913: `2320`,
    3914: `2321`,
    3915: `2322`,
    3916: `2322`,
    3917: `2323`,
    3918: `2325`,
    3919: `2326`,
    392: `143`,
    3920: `2327`,
    3921: `2328`,
    3922: `2328`,
    3923: `2329`,
    3924: `2330`,
    3925: `2330`,
    3926: `2330`,
    3927: `2331`,
    3928: `2331`,
    3929: `2332`,
    393: `144`,
    3930: `2333`,
    3931: `2333`,
    3932: `2334`,
    3933: `2335`,
    3934: `2335`,
    3935: `2336`,
    3936: `2337`,
    3937: `2337`,
    3938: `2337`,
    3939: `2338`,
    394: `144`,
    3940: `2338`,
    3941: `2339`,
    3942: `2339`,
    3943: `2340`,
    3944: `2341`,
    3945: `2341`,
    3946: `2342`,
    3947: `2344`,
    3948: `2345`,
    3949: `2345`,
    395: `145`,
    3950: `2345`,
    3951: `2346`,
    3952: `2346`,
    3953: `2347`,
    3954: `2348`,
    3955: `2348`,
    3956: `2349`,
    3957: `2350`,
    3958: `2350`,
    3959: `2351`,
    396: `146`,
    3960: `2352`,
    3961: `2352`,
    3962: `2353`,
    3963: `2354`,
    3964: `2354`,
    3965: `2355`,
    3966: `2356`,
    3967: `2356`,
    3968: `2356`,
    3969: `2357`,
    397: `147`,
    3970: `2357`,
    3971: `2358`,
    3972: `2359`,
    3973: `2360`,
    3974: `2361`,
    3975: `2361`,
    3976: `2362`,
    3977: `2363`,
    3978: `2363`,
    3979: `2363`,
    398: `147`,
    3980: `2364`,
    3981: `2364`,
    3982: `2365`,
    3983: `2366`,
    3984: `2366`,
    3985: `2366`,
    3986: `2367`,
    3987: `2367`,
    3988: `2368`,
    3989: `2369`,
    399: `147`,
    3990: `2369`,
    3991: `2369`,
    3992: `2370`,
    3993: `2370`,
    3994: `2371`,
    3995: `2372`,
    3996: `2372`,
    3997: `2372`,
    3998: `2373`,
    3999: `2374`,
    4: `2`,
    40: `2`,
    400: `148`,
    4000: `2374`,
    4001: `2375`,
    4002: `2376`,
    4003: `2376`,
    4004: `2377`,
    4005: `2378`,
    4006: `2378`,
    4007: `2379`,
    4008: `2380`,
    4009: `2380`,
    401: `148`,
    4010: `2380`,
    4011: `2381`,
    4012: `2382`,
    4013: `2382`,
    4014: `2383`,
    4015: `2384`,
    4016: `2384`,
    4017: `2384`,
    4018: `2385`,
    4019: `2386`,
    402: `149`,
    4020: `2386`,
    4021: `2387`,
    4022: `2388`,
    4023: `2388`,
    4024: `2388`,
    4025: `2389`,
    4026: `2389`,
    4027: `2390`,
    4028: `2390`,
    4029: `2390`,
    403: `150`,
    4030: `2391`,
    4031: `2392`,
    4032: `2392`,
    4033: `2393`,
    4034: `2395`,
    4035: `2396`,
    4036: `2396`,
    4037: `2397`,
    4038: `2397`,
    4039: `2397`,
    404: `151`,
    4040: `2400`,
    4041: `2400`,
    4042: `2401`,
    4043: `2401`,
    4044: `2402`,
    4045: `2403`,
    4046: `2404`,
    4047: `2405`,
    4048: `2405`,
    4049: `2406`,
    405: `151`,
    4050: `2407`,
    4051: `2407`,
    4052: `2408`,
    4053: `2408`,
    4054: `2409`,
    4055: `2409`,
    4056: `2410`,
    4057: `2411`,
    4058: `2412`,
    4059: `2412`,
    406: `152`,
    4060: `2413`,
    4061: `2414`,
    4062: `2415`,
    4063: `2416`,
    4064: `2416`,
    4065: `2417`,
    4066: `2418`,
    4067: `2419`,
    4068: `2421`,
    4069: `2422`,
    407: `152`,
    4070: `2422`,
    4071: `2422`,
    4072: `2423`,
    4073: `2423`,
    4074: `2424`,
    4075: `2425`,
    4076: `2425`,
    4077: `2426`,
    4078: `2427`,
    4079: `2427`,
    408: `153`,
    4080: `2428`,
    4081: `2429`,
    4082: `2429`,
    4083: `2430`,
    4084: `2431`,
    4085: `2431`,
    4086: `2432`,
    4087: `2433`,
    4088: `2433`,
    4089: `2433`,
    409: `153`,
    4090: `2434`,
    4091: `2434`,
    4092: `2435`,
    4093: `2436`,
    4094: `2437`,
    4095: `2438`,
    4096: `2438`,
    4097: `2439`,
    4098: `2440`,
    4099: `2440`,
    41: `2`,
    410: `153`,
    4100: `2441`,
    4101: `2442`,
    4102: `2442`,
    4103: `2443`,
    4104: `2444`,
    4105: `2444`,
    4106: `2445`,
    4107: `2446`,
    4108: `2446`,
    4109: `2447`,
    411: `154`,
    4110: `2448`,
    4111: `2448`,
    4112: `2449`,
    4113: `2450`,
    4114: `2450`,
    4115: `2451`,
    4116: `2452`,
    4117: `2452`,
    4118: `2452`,
    4119: `2453`,
    412: `154`,
    4120: `2453`,
    4121: `2454`,
    4122: `2455`,
    4123: `2455`,
    4124: `2455`,
    4125: `2456`,
    4126: `2457`,
    4127: `2457`,
    4128: `2458`,
    4129: `2459`,
    413: `155`,
    4130: `2459`,
    4131: `2459`,
    4132: `2460`,
    4133: `2460`,
    4134: `2461`,
    4135: `2462`,
    4136: `2462`,
    4137: `2462`,
    4138: `2463`,
    4139: `2463`,
    414: `155`,
    4140: `2464`,
    4141: `2465`,
    4142: `2465`,
    4143: `2465`,
    4144: `2466`,
    4145: `2467`,
    4146: `2467`,
    4147: `2468`,
    4148: `2469`,
    4149: `2469`,
    415: `155`,
    4150: `2469`,
    4151: `2470`,
    4152: `2471`,
    4153: `2471`,
    4154: `2472`,
    4155: `2473`,
    4156: `2473`,
    4157: `2473`,
    4158: `2474`,
    4159: `2475`,
    416: `155`,
    4160: `2475`,
    4161: `2476`,
    4162: `2477`,
    4163: `2477`,
    4164: `2477`,
    4165: `2478`,
    4166: `2478`,
    4167: `2479`,
    4168: `2479`,
    4169: `2479`,
    417: `155`,
    4170: `2480`,
    4171: `2481`,
    4172: `2481`,
    4173: `2482`,
    4174: `2484`,
    4175: `2484`,
    4176: `2485`,
    4177: `2485`,
    4178: `2486`,
    4179: `2487`,
    418: `155`,
    4180: `2488`,
    4181: `2488`,
    4182: `2488`,
    4183: `2489`,
    4184: `2489`,
    4185: `2489`,
    4186: `2491`,
    4187: `2492`,
    4188: `2493`,
    4189: `2493`,
    419: `156`,
    4190: `2494`,
    4191: `2495`,
    4192: `2495`,
    4193: `2496`,
    4194: `2496`,
    4195: `2497`,
    4196: `2497`,
    4197: `2498`,
    4198: `2499`,
    4199: `2501`,
    42: `2`,
    420: `156`,
    4200: `2501`,
    4201: `2502`,
    4202: `2503`,
    4203: `2503`,
    4204: `2504`,
    4205: `2506`,
    4206: `2507`,
    4207: `2507`,
    4208: `2508`,
    421: `157`,
    422: `158`,
    423: `159`,
    424: `159`,
    425: `160`,
    426: `161`,
    427: `163`,
    428: `163`,
    429: `164`,
    43: `2`,
    430: `164`,
    431: `164`,
    432: `165`,
    433: `165`,
    434: `166`,
    435: `167`,
    436: `168`,
    437: `168`,
    438: `168`,
    439: `168`,
    44: `2`,
    440: `168`,
    441: `168`,
    442: `168`,
    443: `168`,
    444: `169`,
    445: `169`,
    446: `169`,
    447: `174`,
    448: `174`,
    449: `174`,
    45: `2`,
    450: `174`,
    451: `174`,
    452: `174`,
    453: `174`,
    454: `174`,
    455: `174`,
    456: `174`,
    457: `174`,
    458: `175`,
    459: `175`,
    46: `2`,
    460: `176`,
    461: `176`,
    462: `176`,
    463: `181`,
    464: `181`,
    465: `182`,
    466: `183`,
    467: `183`,
    468: `186`,
    469: `186`,
    47: `2`,
    470: `187`,
    471: `187`,
    472: `188`,
    473: `189`,
    474: `190`,
    475: `190`,
    476: `190`,
    477: `191`,
    478: `191`,
    479: `192`,
    48: `2`,
    480: `193`,
    481: `194`,
    482: `194`,
    483: `195`,
    484: `195`,
    485: `196`,
    486: `196`,
    487: `196`,
    488: `197`,
    489: `197`,
    49: `2`,
    490: `198`,
    491: `198`,
    492: `198`,
    493: `198`,
    494: `198`,
    495: `198`,
    496: `199`,
    497: `199`,
    498: `200`,
    499: `201`,
    5: `2`,
    50: `2`,
    500: `202`,
    501: `202`,
    502: `203`,
    503: `204`,
    504: `206`,
    505: `206`,
    506: `207`,
    507: `207`,
    508: `207`,
    509: `208`,
    51: `2`,
    510: `208`,
    511: `209`,
    512: `210`,
    513: `211`,
    514: `211`,
    515: `211`,
    516: `211`,
    517: `211`,
    518: `211`,
    519: `211`,
    52: `2`,
    520: `211`,
    521: `212`,
    522: `212`,
    523: `212`,
    524: `215`,
    525: `215`,
    526: `215`,
    527: `216`,
    528: `217`,
    529: `217`,
    53: `2`,
    530: `220`,
    531: `220`,
    532: `221`,
    533: `222`,
    534: `223`,
    535: `223`,
    536: `224`,
    537: `225`,
    538: `226`,
    539: `227`,
    54: `2`,
    540: `227`,
    541: `228`,
    542: `228`,
    543: `228`,
    544: `233`,
    545: `233`,
    546: `233`,
    547: `233`,
    548: `233`,
    549: `233`,
    55: `2`,
    550: `233`,
    551: `233`,
    552: `233`,
    553: `233`,
    554: `233`,
    555: `233`,
    556: `233`,
    557: `233`,
    558: `233`,
    559: `233`,
    56: `2`,
    560: `233`,
    561: `233`,
    562: `233`,
    563: `234`,
    564: `234`,
    565: `235`,
    566: `235`,
    567: `235`,
    568: `240`,
    569: `240`,
    57: `2`,
    570: `240`,
    571: `240`,
    572: `240`,
    573: `240`,
    574: `240`,
    575: `240`,
    576: `240`,
    577: `240`,
    578: `240`,
    579: `241`,
    58: `2`,
    580: `241`,
    581: `242`,
    582: `242`,
    583: `242`,
    584: `245`,
    585: `246`,
    586: `246`,
    587: `247`,
    588: `247`,
    589: `247`,
    59: `2`,
    590: `247`,
    591: `247`,
    592: `247`,
    593: `247`,
    594: `247`,
    595: `247`,
    596: `247`,
    597: `248`,
    598: `248`,
    599: `249`,
    6: `2`,
    60: `2`,
    600: `250`,
    601: `251`,
    602: `251`,
    603: `252`,
    604: `252`,
    605: `253`,
    606: `254`,
    607: `254`,
    608: `255`,
    609: `255`,
    61: `2`,
    610: `256`,
    611: `256`,
    612: `259`,
    613: `259`,
    614: `260`,
    615: `260`,
    616: `260`,
    617: `262`,
    618: `262`,
    619: `263`,
    62: `2`,
    620: `264`,
    621: `264`,
    622: `265`,
    623: `266`,
    624: `266`,
    625: `267`,
    626: `268`,
    627: `269`,
    628: `269`,
    629: `270`,
    63: `2`,
    630: `271`,
    631: `271`,
    632: `272`,
    633: `273`,
    634: `274`,
    635: `274`,
    636: `275`,
    637: `276`,
    638: `277`,
    639: `277`,
    64: `2`,
    640: `278`,
    641: `278`,
    642: `279`,
    643: `279`,
    644: `279`,
    645: `282`,
    646: `283`,
    647: `283`,
    648: `284`,
    649: `284`,
    65: `2`,
    650: `284`,
    651: `284`,
    652: `284`,
    653: `284`,
    654: `284`,
    655: `284`,
    656: `284`,
    657: `284`,
    658: `285`,
    659: `285`,
    66: `2`,
    660: `286`,
    661: `287`,
    662: `288`,
    663: `288`,
    664: `289`,
    665: `289`,
    666: `290`,
    667: `291`,
    668: `291`,
    669: `292`,
    67: `2`,
    670: `292`,
    671: `293`,
    672: `293`,
    673: `296`,
    674: `296`,
    675: `297`,
    676: `297`,
    677: `297`,
    678: `299`,
    679: `299`,
    68: `4`,
    680: `300`,
    681: `301`,
    682: `301`,
    683: `302`,
    684: `303`,
    685: `303`,
    686: `304`,
    687: `305`,
    688: `306`,
    689: `306`,
    69: `4`,
    690: `307`,
    691: `308`,
    692: `308`,
    693: `309`,
    694: `310`,
    695: `311`,
    696: `311`,
    697: `312`,
    698: `313`,
    699: `314`,
    7: `2`,
    70: `5`,
    700: `315`,
    701: `315`,
    702: `316`,
    703: `316`,
    704: `316`,
    705: `319`,
    706: `320`,
    707: `320`,
    708: `321`,
    709: `321`,
    71: `5`,
    710: `321`,
    711: `321`,
    712: `321`,
    713: `321`,
    714: `321`,
    715: `321`,
    716: `321`,
    717: `321`,
    718: `322`,
    719: `322`,
    72: `5`,
    720: `323`,
    721: `324`,
    722: `324`,
    723: `324`,
    724: `325`,
    725: `326`,
    726: `327`,
    727: `327`,
    728: `328`,
    729: `329`,
    73: `6`,
    730: `329`,
    731: `329`,
    732: `330`,
    733: `330`,
    734: `331`,
    735: `331`,
    736: `332`,
    737: `332`,
    738: `333`,
    739: `334`,
    74: `7`,
    740: `334`,
    741: `335`,
    742: `335`,
    743: `336`,
    744: `337`,
    745: `338`,
    746: `338`,
    747: `338`,
    748: `339`,
    749: `340`,
    75: `8`,
    750: `341`,
    751: `341`,
    752: `342`,
    753: `342`,
    754: `343`,
    755: `343`,
    756: `344`,
    757: `344`,
    758: `347`,
    759: `347`,
    76: `9`,
    760: `348`,
    761: `348`,
    762: `349`,
    763: `350`,
    764: `350`,
    765: `351`,
    766: `352`,
    767: `352`,
    768: `352`,
    769: `353`,
    77: `10`,
    770: `354`,
    771: `354`,
    772: `356`,
    773: `356`,
    774: `357`,
    775: `357`,
    776: `358`,
    777: `359`,
    778: `360`,
    779: `360`,
    78: `11`,
    780: `361`,
    781: `362`,
    782: `363`,
    783: `363`,
    784: `364`,
    785: `365`,
    786: `365`,
    787: `366`,
    788: `367`,
    789: `367`,
    79: `11`,
    790: `368`,
    791: `369`,
    792: `369`,
    793: `370`,
    794: `371`,
    795: `371`,
    796: `372`,
    797: `373`,
    798: `373`,
    799: `374`,
    8: `2`,
    80: `12`,
    800: `375`,
    801: `376`,
    802: `376`,
    803: `377`,
    804: `378`,
    805: `379`,
    806: `379`,
    807: `380`,
    808: `381`,
    809: `381`,
    81: `13`,
    810: `381`,
    811: `382`,
    812: `383`,
    813: `383`,
    814: `384`,
    815: `385`,
    816: `385`,
    817: `385`,
    818: `386`,
    819: `387`,
    82: `13`,
    820: `387`,
    821: `388`,
    822: `389`,
    823: `389`,
    824: `390`,
    825: `391`,
    826: `392`,
    827: `392`,
    828: `393`,
    829: `394`,
    83: `14`,
    830: `395`,
    831: `395`,
    832: `396`,
    833: `396`,
    834: `397`,
    835: `397`,
    836: `397`,
    837: `400`,
    838: `401`,
    839: `401`,
    84: `15`,
    840: `402`,
    841: `402`,
    842: `402`,
    843: `402`,
    844: `402`,
    845: `402`,
    846: `402`,
    847: `402`,
    848: `402`,
    849: `402`,
    85: `15`,
    850: `403`,
    851: `403`,
    852: `404`,
    853: `405`,
    854: `405`,
    855: `405`,
    856: `406`,
    857: `407`,
    858: `408`,
    859: `408`,
    86: `16`,
    860: `409`,
    861: `410`,
    862: `410`,
    863: `410`,
    864: `411`,
    865: `411`,
    866: `412`,
    867: `412`,
    868: `413`,
    869: `413`,
    87: `16`,
    870: `414`,
    871: `415`,
    872: `415`,
    873: `416`,
    874: `416`,
    875: `417`,
    876: `418`,
    877: `419`,
    878: `419`,
    879: `419`,
    88: `17`,
    880: `420`,
    881: `421`,
    882: `422`,
    883: `422`,
    884: `423`,
    885: `423`,
    886: `424`,
    887: `424`,
    888: `425`,
    889: `425`,
    89: `18`,
    890: `426`,
    891: `426`,
    892: `426`,
    893: `429`,
    894: `429`,
    895: `430`,
    896: `430`,
    897: `431`,
    898: `432`,
    899: `432`,
    9: `2`,
    90: `18`,
    900: `433`,
    901: `433`,
    902: `434`,
    903: `435`,
    904: `436`,
    905: `436`,
    906: `436`,
    907: `437`,
    908: `437`,
    909: `438`,
    91: `19`,
    910: `439`,
    911: `439`,
    912: `440`,
    913: `441`,
    914: `442`,
    915: `442`,
    916: `443`,
    917: `444`,
    918: `445`,
    919: `445`,
    92: `20`,
    920: `446`,
    921: `446`,
    922: `446`,
    923: `446`,
    924: `446`,
    925: `446`,
    926: `446`,
    927: `446`,
    928: `446`,
    929: `446`,
    93: `21`,
    930: `447`,
    931: `447`,
    932: `448`,
    933: `449`,
    934: `450`,
    935: `450`,
    936: `451`,
    937: `451`,
    938: `452`,
    939: `452`,
    94: `22`,
    940: `453`,
    941: `454`,
    942: `454`,
    943: `455`,
    944: `455`,
    945: `456`,
    946: `456`,
    947: `457`,
    948: `457`,
    949: `460`,
    95: `23`,
    950: `460`,
    951: `461`,
    952: `461`,
    953: `462`,
    954: `463`,
    955: `463`,
    956: `464`,
    957: `465`,
    958: `465`,
    959: `465`,
    96: `25`,
    960: `466`,
    961: `467`,
    962: `467`,
    963: `469`,
    964: `469`,
    965: `470`,
    966: `470`,
    967: `471`,
    968: `472`,
    969: `473`,
    97: `25`,
    970: `473`,
    971: `474`,
    972: `475`,
    973: `476`,
    974: `476`,
    975: `477`,
    976: `478`,
    977: `478`,
    978: `479`,
    979: `480`,
    98: `25`,
    980: `480`,
    981: `481`,
    982: `482`,
    983: `483`,
    984: `483`,
    985: `484`,
    986: `485`,
    987: `486`,
    988: `486`,
    989: `487`,
    99: `25`,
    990: `488`,
    991: `489`,
    992: `489`,
    993: `490`,
    994: `491`,
    995: `491`,
    996: `492`,
    997: `493`,
    998: `494`,
    999: `494`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: {
    _api_Bidder_bid12: 1,
    _reachp_2: 1
    },
  extraPages: 2,
  stateKeys: 2,
  stateSize: 235,
  unsupported: [],
  version: 13,
  warnings: [`API Auctioneer_acceptSale may use up to 5 accounts, but the limit is 4. API Auctioneer_acceptSale starts at /app/src/contracts/auction.rsh:204:66:application.`, `API Auctioneer_rejectSale may use up to 5 accounts, but the limit is 4. API Auctioneer_rejectSale starts at /app/src/contracts/auction.rsh:204:66:application.`, `API Auctioneer_stopAuction may use up to 5 accounts, but the limit is 4. API Auctioneer_stopAuction starts at /app/src/contracts/auction.rsh:123:31:application.`, `API Auctioneer_stopAuction may use up to 9 transaction references, but the limit is 8. API Auctioneer_stopAuction starts at /app/src/contracts/auction.rsh:123:31:application.`, `API Bidder_bid may use up to 11 transaction references, but the limit is 8. API Bidder_bid starts at /app/src/contracts/auction.rsh:123:31:application.`, `API Bidder_bid may use up to 6 accounts, but the limit is 4. API Bidder_bid starts at /app/src/contracts/auction.rsh:123:31:application.`, `API Bidder_optIn may use up to 11 transaction references, but the limit is 8. API Bidder_optIn starts at /app/src/contracts/auction.rsh:123:31:application.`, `API Bidder_optIn may use up to 7 accounts, but the limit is 4. API Bidder_optIn starts at /app/src/contracts/auction.rsh:123:31:application.`, `API Bidder_updateState may use up to 5 accounts, but the limit is 4. API Bidder_updateState starts at /app/src/contracts/auction.rsh:204:66:application.`, `Step 12 calls a remote object at /app/src/contracts/auction.rsh:147:91:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 12 may use up to 12 transaction references, but the limit is 8. Step 12 starts at /app/src/contracts/auction.rsh:123:31:dot.`, `Step 12 may use up to 7 accounts, but the limit is 4. Step 12 starts at /app/src/contracts/auction.rsh:123:31:dot.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:116:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:99:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 may use up to 10 transaction references, but the limit is 8. Step 2 starts at /app/src/contracts/auction.rsh:87:15:dot.`, `Step 2 may use up to 5 accounts, but the limit is 4. Step 2 starts at /app/src/contracts/auction.rsh:87:15:dot.`, `Step 9 may use up to 5 accounts, but the limit is 4. Step 9 starts at /app/src/contracts/auction.rsh:204:66:dot.`, `This program calls a remote object at /app/src/contracts/auction.rsh:188:42:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `This program calls a remote object at /app/src/contracts/auction.rsh:250:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T16","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes32","name":"_title","type":"bytes32"}],"internalType":"struct T17","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T18","name":"v10282","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T16","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes32","name":"_title","type":"bytes32"}],"internalType":"struct T17","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T18","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e11","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_114","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T6","name":"_Bidder_bid0_114","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_114","type":"bool"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T8","name":"_a","type":"tuple"}],"name":"_reach_e12","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T6","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T3","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_419","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_419","type":"bool"},{"internalType":"bool","name":"_Bidder_updateState0_419","type":"bool"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e9","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T23","name":"v0","type":"tuple"}],"name":"_reach_oe_v1119","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1130","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T23","name":"v0","type":"tuple"}],"name":"_reach_oe_v1143","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1154","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1332","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1339","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1352","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1359","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T23","name":"v0","type":"tuple"}],"name":"_reach_oe_v1369","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1442","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1511","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1580","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T23","name":"v0","type":"tuple"}],"name":"_reach_oe_v1610","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1644","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T23","name":"v0","type":"tuple"}],"name":"_reach_oe_v1694","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1728","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T23","name":"v0","type":"tuple"}],"name":"_reach_oe_v1777","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1811","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T24","name":"v0","type":"tuple"}],"name":"_reach_oe_v804","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T23","name":"v0","type":"tuple"}],"name":"_reach_oe_v823","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v918","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v935","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"v0","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"bytes32","name":"v3","type":"bytes32"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"v5","type":"bytes32"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"optInSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"v0","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"AdminCall_adminCall","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v10271","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_updateState","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T6","name":"v10285","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v10300","type":"tuple"}],"name":"_reachp_11","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T7","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_114","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T6","name":"_Bidder_bid0_114","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_114","type":"bool"}],"internalType":"struct T7","name":"elem1","type":"tuple"}],"internalType":"struct T8","name":"v10303","type":"tuple"}],"name":"_reachp_12","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T6","name":"v10288","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v10291","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"internalType":"struct T3","name":"v10294","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T4","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_419","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_419","type":"bool"},{"internalType":"bool","name":"_Bidder_updateState0_419","type":"bool"}],"internalType":"struct T4","name":"elem1","type":"tuple"}],"internalType":"struct T5","name":"v10297","type":"tuple"}],"name":"_reachp_9","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"hasEnded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"highestPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"live","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080620061b338819003601f8101601f191683016001600160401b038111848210176200056f578392829160405283398101039061014082126200065a5760405191608083016001600160401b038111848210176200056f57604052815183526200006d60208301620006b3565b602084015260e0603f198201126200065a5760606040519162000090836200065f565b60408401518352605f1901126200065a5760405191620000b0836200067b565b606081015183526080810151602084015260a0810151916001600160801b0319831683036200065a5783610120936040620001209601526020820152620000fa60c08301620006b3565b604082015260e082015160608201526101008201516080820152604085015201620006b3565b60608201524360035560405161016081016001600160401b038111828210176200056f57600091610140916040528281528260208201528260408201528260608201526200016d620006c8565b6080820152604051620001808162000697565b83815283602082015260a08201528260c08201528260e082015282610100820152826101208201520152604051620001b88162000697565b620001c2620006c8565b8152620001ce620006f8565b602082015260ff6004541662000641577f16ce2b1263913dcd4b3c8868cf843330d9bffe7297ca78429c17673c6bb676836101606040513381528451602082015260018060a01b03602086015116604082015262000235604086015160608301906200073f565b60608501516001600160a01b0316610140820152a18151801590811562000634575b50156200061b5760008151526000602082510152600060408251015280516020820151523462000602576020906040519262000293846200065f565b60008452600083850152604051620002ab816200065f565b60008152620002b9620006c8565b84820152600060408201526000606082015260006080820152604085015260006060850152620002e8620006f8565b608085015233845260018060a01b0383820151168385015260408101516040850152606060018060a01b0391015116606084015201518051604060208201519101511515604051916200033b836200067b565b600083526020830152604082015262000353620006f8565b9160005b60018110620005b25750508152608082015260016000554360015560806040519160018060a01b03815116602084015260018060a01b036020820151166040840152620003ad604082015160608501906200073f565b60608101516001600160a01b03166101408401520151600061016083015b6001821062000585576101a08452836101c081016001600160401b038111828210176200056f5760405280516001600160401b0381116200056f57600254600181811c9116801562000564575b60208210146200054e57601f8111620004e4575b50602091601f82116001146200047a579181926000926200046e575b50508160011b916000199060031b1c1916176002555b6040516159f89081620007bb8239f35b01519050828062000448565b601f19821692600260005260206000209160005b858110620004cb57508360019510620004b1575b505050811b016002556200045e565b015160001960f88460031b161c19169055828080620004a2565b919260206001819286850151815501940192016200048e565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000543575b601f0160051c01905b8181106200053657506200042c565b6000815560010162000527565b90915081906200051e565b634e487b7160e01b600052602260045260246000fd5b90607f169062000418565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620003cb565b620005be818362000792565b51620005cb828662000792565b52620005d8818562000792565b506000198114620005ec5760010162000357565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260176004820152602490fd5b60405163100960cb60e01b815260166004820152602490fd5b9050600154143862000257565b60405163100960cb60e01b815260156004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200056f57604052565b606081019081106001600160401b038211176200056f57604052565b604081019081106001600160401b038211176200056f57604052565b51906001600160a01b03821682036200065a57565b60405190606082016001600160401b038111838210176200056f5760405260006040838281528260208201520152565b6040519060208083016001600160401b038111848210176200056f576040528260005b8281106200072857505050565b829062000734620006c8565b81840152016200071b565b608060c09180518452602081015180516020860152602081015160408601526040600180851b031991015116606085015260018060a01b0360408201511682850152606081015160a08501520151910152565b906001811015620007a45760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80630e8670e0146101a857806312f293851461019f57806316a5e887146101965780631e93b0f11461018d5780632d2ae6eb146101845780633fe31c001461017b5780634a96cc0b14610172578063573b851014610169578063669a1e32146101605780636f49e23114610157578063832307571461014e5780638d9e1a1214610145578063957aa58c1461013c578063a40dff5614610133578063a530ae8e1461012a578063ab53f2c614610121578063b627922414610118578063d2526fd91461010f578063ecb70fb7146101065763f5a239bc0361000e57610101610bb7565b61000e565b50610101610b13565b50610101610ad5565b50610101610a59565b506101016109ae565b50610101610906565b50610101610868565b50610101610765565b50610101610748565b50610101610729565b506101016106ea565b506101016106cd565b506101016104fb565b5061010161049c565b5061010161046c565b506101016103f1565b506101016103a7565b5061010161034d565b5061010161029a565b50346102845760003660031901126102845761021e6101206101c86113c4565b600054600b81101561024657600a8110156102225760076101e99114611788565b60406102056101f6611238565b602080825183010191016114cb565b0151828201525b01516040519081529081906020820190565b0390f35b600a61022e9114611768565b604061023b6101f6611238565b01518282015261020c565b600e81101561027857600b61025b9114611748565b61010061023b610269611238565b60208082518301019101612968565b600e61022e9114611728565b600080fd5b60a090600319011261028457600490565b5060a0366003190112610284576102b036610289565b6102b86113c4565b81360360a08112610284576080604051916102d283611165565b84358352601f19011261028457610341926080604051916102f28361118d565b602081013561030081615825565b8352604081013561031081611439565b60208401526103223660608301615551565b6040840152013561033281611439565b60608201526020820152613db7565b60405160008152602090f35b50600036600319011261028457602060e06103666113c4565b61039b816103726128da565b85810190600282515251151560608251015261038c6128da565b90600082525186820152612b2b565b01511515604051908152f35b5034610284576000366003190112610284576020600354604051908152f35b6040809180518452602081015160208501520151910152565b6060810192916103ef91906103c6565b565b5060003660031901126102845761040661136e565b50606060806104136113c4565b61044a8161041f613ab5565b6020810190600082515251151560208251015261043a613ab5565b9060008252516020820152613db7565b015161045960405180926103c6565bf35b604090600319011261028457600490565b506104916104793661045b565b61048c6104846113c4565b9136906157f4565b612063565b602060405160008152f35b50600036600319011261028457602060c06104b56113c4565b61039b816104c1613ab5565b8581019060028251525115156060825101526104db613ab5565b90600082525186820152613db7565b602090600319011261028457600490565b50610518610508366104ea565b6105106113c4565b503690615551565b6105266001600054146117a8565b6106b7610531611238565b6106b261054860209283808251830101910161558d565b9161056461055f61055b60045460ff1690565b1590565b6117c8565b6105ad6040957fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159687518061059984338361567b565b0390a15180159081156106c1575b506117e8565b6105b73415611808565b61067d6080828501946105db6105d66105d08851610a20565b33615798565b611828565b6105f73360018060a01b036105f08451610a20565b1614611848565b61062761061f610605615695565b976106196106138551610a20565b8a6115de565b51610a20565b8588016115de565b878101518887015261064861063f6060830151610a20565b606088016115de565b015180519061067860018351019289868201519101511515906106696112e1565b94855286850152151589840152565b6139b5565b608084015261068c6002600055565b61069543600155565b6106a485519384928301615713565b03601f198101835282611215565b612359565b5160008152602090f35b905060015414386105a7565b506104916106da3661045b565b6106e56104846113c4565b6115ed565b50600036600319011261028457602060606107036113c4565b61039b8161070f6128da565b85810190600182515251151560408251015261038c6128da565b5034610284576000366003190112610284576020600154604051908152f35b506104916107553661045b565b6107606104846113c4565b611f45565b503461028457600080600319360112610865576107c561014061021e9261078a6113c4565b908054600b81106000146107f857600a8110156107d75760076107ad91146118e8565b6107b86101f6611238565b50828201525b0151151590565b60405190151581529081906020820190565b600a6107e391146118c8565b6107ee6101f6611238565b50828201526107be565b600e81101561081d57600b61080d91146118a8565b6107ee610269611238565b6107be565b600f81101561083257600e6107e39114611888565b61083f9150600f14611868565b61085961084a611238565b60208082518301019101613b94565b506001818301526107be565b80fd5b50600080600319360112610865576107c5602061021e926108876113c4565b908161089161136e565b918054600a81106000146108c357506107606108bb6107be946108b26113ab565b93845251151590565b151582870152565b600e11156108e85761048c6108bb86610818956108de6113ab565b9485520151151590565b6040610818936108f66113ab565b92835201511515858201526115ed565b5060a03660031901126102845761091c36610289565b6109246113c4565b81360360a081126102845760806040519161093e83611165565b84358352601f190112610284576103419260806040519161095e8361118d565b602081013561096c81615825565b8352604081013561097c81611439565b6020840152606081013561098f81611439565b6040840152013561099f81611439565b60608201526020820152612b2b565b5034610284576000806003193601126108655780546109cb611238565b906040519283918252602090604082840152835191826040850152815b838110610a0957505060608094508284010152601f80199101168101030190f35b8086018201518782016060015286945081016109e8565b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261028457610a6e6113ab565b5061021e60a0610a7c6113c4565b610ac781604051610a8c81611165565b604051610a98816111a8565b6000815281526020810190610aab613a82565b825260043581515260018251525160408251015261043a613ab5565b015160405191829182610a39565b5060003660031901126102845760206040610aee6113c4565b61039b81610afa6128da565b858101906000825152511515868251015261038c6128da565b503461028457600080600319360112610865576107c561010061021e92610b386113c4565b81549091600b821015610b725750600a811015610b66576007610b5b9114611988565b6108596101f6611238565b600a610b5b9114611968565b90600e811015610b8857600b61080d9114611948565b90600f821015610b9f5750600e610b5b9114611928565b90600f610bac9114611908565b6107ee61084a611238565b50610341610bc7610508366104ea565b610bcf615893565b610bdd6002600054146119a8565b610c56610bfa610beb611238565b6020808251830101910161558d565b92610c12610c0d61055b60045460ff1690565b6119c8565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a60405180610c4284338361567b565b0390a1518015908115611108575b506119e8565b610c603415611a08565b610c77610c706020840151610a20565b3090613956565b61012082015247610100820152610c96600160ff196004541617600455565b7f2c3d7d325827ba507386635e3f0303aa82a7bf6794c5996e97711cb69543649b610d97600080604051632cfbfba760e01b602082015260048152610cda81611165565b610cef610cea6060890151610a20565b610a20565b82602083519301915af1610d0b610d046125a3565b8092612608565b50610d1b60ff1960045416600455565b610d49610d3430610d2f6020890151610a20565b613956565b61012086015180820361014088015214611a28565b610d6d47610100860151900391602086019283515260208082518301019101613947565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a1610da960408201515115611a48565b610db630606083016115de565b602060408201510151608082015152610de2610dd56060830151610a20565b60206080840151016115de565b43604060808301510152610e06610df98351610a20565b60606080840151016115de565b608060408301510151608080830151015260206040830151015160a06080830151015260606040830151015160c060808301510152610e58610e4b6020840151610a20565b60e06080840151016115de565b610e6930610d2f6020850151610a20565b61018082015247610160820152610e88600160ff196004541617600455565b610ee8600080608084015160405190610ec482610eb6602082019363ffc4717f60e01b855260248301615920565b03601f198101845283611215565b82610ed5610cea60608a0151610a20565b9251925af1610ee26125a3565b90612638565b50610ef860ff1960045416600455565b610f21610f0c30610d2f6020860151610a20565b6101808301518082036101a085015214611a68565b7f3a8657a6ea9270643925c4dea620ec38c27074be936122a0f2c000440e0ed72c610f6947610160840151900360a0840190815152518060c08501526040519182918261311d565b0390a1610f7b60c08201515115611a88565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb67602060408301510151610faf8451610a20565b90610fbf60405192839283613ced565b0390a160206040820151015160e0820151526000602060e083015101526000604060e083015101526080610ff1613d06565b92611005610fff8251610a20565b856115de565b61101e6110156020830151610a20565b602086016115de565b61103761102e6060830151610a20565b604086016115de565b61104433606086016115de565b6110596110518451151590565b151585840152565b60206040840151015160a08501524360c085015261108661107d6060850151610a20565b60e086016115de565b60408101805183015161010086015251516110a1904361553d565b61012085015260e08301516101408501526110c96110bf8251610a20565b61016086016115de565b600161018085015260016101a085015260006101c0850152436101e0850152015161020083015260c06040820151519101515101610220820152614ed2565b90506001541438610c50565b90600182811c92168015611144575b602083101461112e57565b634e487b7160e01b600052602260045260246000fd5b91607f1691611123565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b0382111761118057604052565b61118861114e565b604052565b608081019081106001600160401b0382111761118057604052565b602081019081106001600160401b0382111761118057604052565b61016081019081106001600160401b0382111761118057604052565b606081019081106001600160401b0382111761118057604052565b60a081019081106001600160401b0382111761118057604052565b601f909101601f19168101906001600160401b0382119082101761118057604052565b604051906000826002549161124c83611114565b8083526001938085169081156112c05750600114611272575b506103ef92500383611215565b6002600090815260008051602061598c83398151915294602093509091905b8183106112a85750506103ef935082010138611265565b85548884018501529485019487945091830191611291565b90506103ef94506020925060ff191682840152151560051b82010138611265565b604051906103ef826111df565b604051906101c082016001600160401b0381118382101761118057604052565b604051906101e082016001600160401b0381118382101761118057604052565b6040519061024082016001600160401b0381118382101761118057604052565b6040519061022082016001600160401b0381118382101761118057604052565b60405190606082016001600160401b0381118382101761139e575b60405260006040838281528260208201520152565b6113a661114e565b611389565b604051906113b882611165565b60006020838281520152565b604051906113d1826111c3565b816101406000918281528260208201528260408201528260608201526113f561136e565b60808201526114026113ab565b60a08201528260c08201528260e082015282610100820152826101208201520152565b51906001600160a01b038216820361028457565b8015150361028457565b51906103ef82611439565b9080601f8301121561028457604091825192611469846111a8565b836060938484019381851161028457915b84831061148a5750505050505090565b858383031261028457835186916114a0826111df565b845182526020918286015183820152868601516114bc81611439565b8782015281520192019161147a565b60e0818303126102845760c090611517604051936114e8856111fa565b6114f183611425565b85526114ff60208401611425565b6020860152604083015160408601526060830161144e565b60608401520151608082015290565b6001600160a01b0390911681528151602080830191909152909101511515604082015260600190565b6040519061155c826111a8565b8160005b6020811061156c575050565b60209061157761136e565b8184015201611560565b6040519060e082016001600160401b038111838210176115d1575b6040528160c06000918281528260208201528260408201528260608201528260808201526115c861154f565b60a08201520152565b6115d961114e565b61159c565b6001600160a01b039091169052565b600060206103ef93611602600e845414611aa8565b61167a61161e611610611238565b8480825183010191016114cb565b9461163661163161055b60045460ff1690565b611ac8565b7f63bba27b9239a4737471a2862db7b80ba95dfab2aa0da84664e856a1ed63a55060405180611666843383611526565b0390a151801590811561171c575b50611ae8565b6116843415611b08565b604051600081527f04c8564c92960dee48283750f521dcae161e93dc4258b410e7d75b211130531790602090a1015260806116bd611581565b916116d16116cb8251610a20565b846115de565b6116ea6116e16020830151610a20565b602085016115de565b604081015160408401526117016060840160019052565b4382840152606081015160a0840152015160c082015261243c565b90506001541438611674565b1561172f57565b60405163100960cb60e01b8152600f6004820152602490fd5b1561174f57565b60405163100960cb60e01b8152600e6004820152602490fd5b1561176f57565b60405163100960cb60e01b8152600d6004820152602490fd5b1561178f57565b60405163100960cb60e01b8152600c6004820152602490fd5b156117af57565b60405163100960cb60e01b815260186004820152602490fd5b156117cf57565b60405163100960cb60e01b815260196004820152602490fd5b156117ef57565b60405163100960cb60e01b8152601a6004820152602490fd5b1561180f57565b60405163100960cb60e01b8152601b6004820152602490fd5b1561182f57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561184f57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561186f57565b60405163100960cb60e01b815260146004820152602490fd5b1561188f57565b60405163100960cb60e01b815260136004820152602490fd5b156118af57565b60405163100960cb60e01b815260126004820152602490fd5b156118cf57565b60405163100960cb60e01b815260116004820152602490fd5b156118ef57565b60405163100960cb60e01b815260106004820152602490fd5b1561190f57565b60405163100960cb60e01b8152600b6004820152602490fd5b1561192f57565b60405163100960cb60e01b8152600a6004820152602490fd5b1561194f57565b60405163100960cb60e01b815260096004820152602490fd5b1561196f57565b60405163100960cb60e01b815260086004820152602490fd5b1561198f57565b60405163100960cb60e01b815260076004820152602490fd5b156119af57565b60405163100960cb60e01b8152602f6004820152602490fd5b156119cf57565b60405163100960cb60e01b815260306004820152602490fd5b156119ef57565b60405163100960cb60e01b815260316004820152602490fd5b15611a0f57565b60405163100960cb60e01b815260326004820152602490fd5b15611a2f57565b60405163100960cb60e01b815260336004820152602490fd5b15611a4f57565b60405163100960cb60e01b815260356004820152602490fd5b15611a6f57565b60405163100960cb60e01b815260366004820152602490fd5b15611a8f57565b60405163100960cb60e01b815260386004820152602490fd5b15611aaf57565b60405163100960cb60e01b8152601e6004820152602490fd5b15611acf57565b60405163100960cb60e01b8152601f6004820152602490fd5b15611aef57565b60405163100960cb60e01b815260206004820152602490fd5b15611b0f57565b60405163100960cb60e01b815260216004820152602490fd5b15611b2f57565b60405163100960cb60e01b815260396004820152602490fd5b15611b4f57565b60405163100960cb60e01b8152603a6004820152602490fd5b15611b6f57565b60405163100960cb60e01b8152603b6004820152602490fd5b15611b8f57565b60405163100960cb60e01b8152603c6004820152602490fd5b15611baf57565b60405163100960cb60e01b8152603d6004820152602490fd5b15611bcf57565b60405163100960cb60e01b8152603e6004820152602490fd5b15611bef57565b60405163100960cb60e01b8152603f6004820152602490fd5b15611c0f57565b602460405163100960cb60e01b815260406004820152fd5b15611c2e57565b60405163100960cb60e01b815260416004820152602490fd5b15611c4e57565b60405163100960cb60e01b815260426004820152602490fd5b15611c6e57565b60405163100960cb60e01b815260436004820152602490fd5b15611c8e57565b60405163100960cb60e01b815260466004820152602490fd5b15611cae57565b60405163100960cb60e01b815260456004820152602490fd5b15611cce57565b60405163100960cb60e01b815260446004820152602490fd5b15611cee57565b60405163100960cb60e01b815260506004820152602490fd5b15611d0e57565b60405163100960cb60e01b815260526004820152602490fd5b15611d2e57565b60405163100960cb60e01b8152604d6004820152602490fd5b15611d4e57565b60405163100960cb60e01b8152604f6004820152602490fd5b15611d6e57565b60405163100960cb60e01b815260226004820152602490fd5b15611d8e57565b60405163100960cb60e01b815260236004820152602490fd5b15611dae57565b602460405163100960cb60e01b8152816004820152fd5b15611dcc57565b60405163100960cb60e01b8152602e6004820152602490fd5b15611dec57565b60405163100960cb60e01b815260266004820152602490fd5b15611e0c57565b60405163100960cb60e01b815260276004820152602490fd5b15611e2c57565b60405163100960cb60e01b8152602b6004820152602490fd5b15611e4c57565b60405163100960cb60e01b8152602d6004820152602490fd5b15611e6c57565b60405163100960cb60e01b815260286004820152602490fd5b15611e8c57565b60405163100960cb60e01b8152602a6004820152602490fd5b15611eac57565b60405163100960cb60e01b815260256004820152602490fd5b15611ecc57565b60405163100960cb60e01b815260476004820152602490fd5b15611eec57565b60405163100960cb60e01b815260496004820152602490fd5b15611f0c57565b60405163100960cb60e01b8152604a6004820152602490fd5b15611f2c57565b60405163100960cb60e01b8152604c6004820152602490fd5b600060206103ef93611f5a6007845414611b28565b611fc4611f68611610611238565b94611f80611f7b61055b60045460ff1690565b611b48565b7fcd07fe458c2837261baccc27af099290b4cb172153fe5860de83985111590dae60405180611fb0843383611526565b0390a1518015908115612057575b50611b68565b611fce3415611b88565b604051600081527f27aed3e8fc4869edd7342d681704c37911622b17e35b023ff6a91638116793f290602090a101526080612007611581565b916120156116cb8251610a20565b6120256116e16020830151610a20565b6040810151604084015261203c6060840160019052565b4382840152606081015160a0840152015160c0820152612818565b90506001541438611fbe565b600060206103ef93612078600a845414611ba8565b6120e2612086611610611238565b9461209e61209961055b60045460ff1690565b611bc8565b7f772efef3dd9f242d63a20972cf033b16c5cb6bd8c21b19d32246dd861fb60776604051806120ce843383611526565b0390a1518015908115612175575b50611be8565b6120ec3415611c08565b604051600081527f3473fe1f1ea7f1f323066daeb4eba72532c8f4f37f0a6a900cbb08f1736bc96290602090a101526080612125611581565b916121336116cb8251610a20565b6121436116e16020830151610a20565b6040810151604084015261215a6060840160019052565b4382840152606081015160a0840152015160c0820152612879565b905060015414386120dc565b9060018110156121925760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b8181106121c0575050565b600081556001016121b5565b50634e487b7160e01b600052601160045260246000fd5b6121ee600254611114565b806121f65750565b601f811160011461220957506000600255565b600260005261224e90601f0160051c60008051602061598c833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf6121b5565b6000602081208160025555565b60405190612268826111fa565b600060808382815282602082015282604082015261228461154f565b60608201520152565b6000915b6001831061229e57505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612291565b91909160c0608060e083019460018060a01b0380825116855260208201511660208501526040810151604085015261230d6060820151606086019061228d565b0151910152565b90601f8211612321575050565b6103ef9160026000526020600020906020601f840160051c8301931061234f575b601f0160051c01906121b5565b9091508190612342565b80519091906001600160401b03811161242f575b6123818161237c600254611114565b612314565b602080601f83116001146123bd57508192936000926123b2575b50508160011b916000199060031b1c191617600255565b01519050388061239b565b6002600052601f1983169490919060008051602061598c833981519152926000905b8782106124175750508360019596106123fe575b505050811b01600255565b015160001960f88460031b161c191690553880806123f3565b806001859682949686015181550195019301906123df565b61243761114e565b61236d565b6060810151156124b5576106a46106b26103ef9260c061245a61225b565b916124686116cb8251610a20565b6124786116e16020830151610a20565b6040810151604084015260a081015160608401520151608082015261249d600e600055565b6124a643600155565b604051928391602083016122cd565b600080808360c06124f8610cea6124cd859851610a20565b61061960208601916124df8351610a20565b60a08801515151916001600160a01b0390911690612537565b9101519082821561252e575bf115612521575b600080556125196000600155565b6103ef6121e3565b6125296121a8565b61250b565b506108fc612504565b6000919061259c93838093604051602081019363a9059cbb60e01b855260018060a01b0380931660248301526044820152604481526125758161118d565b5193165af161258c6125856125a3565b8092612668565b50602080825183010191016125f0565b1561028457565b3d156125eb573d906001600160401b0382116125de575b604051916125d2601f8201601f191660200184611215565b82523d6000602084013e565b6125e661114e565b6125ba565b606090565b90816020910312610284575161260581611439565b90565b156126105790565b80511561261f57805190602001fd5b60405163100960cb60e01b815260346004820152602490fd5b156126405790565b80511561264f57805190602001fd5b60405163100960cb60e01b815260376004820152602490fd5b156126705790565b80511561267f57805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156126a05790565b8051156126af57805190602001fd5b60405163100960cb60e01b815260516004820152602490fd5b156126d05790565b8051156126df57805190602001fd5b60405163100960cb60e01b8152604e6004820152602490fd5b156127005790565b80511561270f57805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b156127305790565b80511561273f57805190602001fd5b60405163100960cb60e01b8152602c6004820152602490fd5b156127605790565b80511561276f57805190602001fd5b60405163100960cb60e01b815260296004820152602490fd5b156127905790565b80511561279f57805190602001fd5b60405163100960cb60e01b815260486004820152602490fd5b156127c05790565b8051156127cf57805190602001fd5b60405163100960cb60e01b8152604b6004820152602490fd5b156127f05790565b8051156127ff57805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b6060810151156124b5576106a46106b26103ef9260c061283661225b565b916128446116cb8251610a20565b6128546116e16020830151610a20565b6040810151604084015260a081015160608401520151608082015261249d6007600055565b6060810151156124b5576106a46106b26103ef9260c061289761225b565b916128a56116cb8251610a20565b6128b56116e16020830151610a20565b6040810151604084015260a081015160608401520151608082015261249d600a600055565b604051906128e782611165565b600082526040516020836128fa8361118d565b6000835260008284015260006040840152600060608401520152565b6003111561292057565b634e487b7160e01b600052602160045260246000fd5b91908260609103126102845760405161294e816111df565b604080829480518452602081015160208501520151910152565b90610240828203126102845761022061297f6112ee565b9261298981611425565b845261299760208201611425565b60208501526129a860408201611425565b60408501526129b960608201611425565b60608501526129ca60808201611443565b608085015260a081015160a08501526129e68360c08301612936565b60c0850152610120926129fa848301611425565b60e0860152612a4c610140918284015161010088015261016095868501519088015261018092612a2b848601611443565b908801526101a095612a3e878601611443565b908801526101c0840161144e565b9085015201519082015290565b9092916060602060a09260c0850196600180861b0316855280518286015201518051612a8481612916565b6040850152602081015115158285015260408101511515608085015201511515910152565b5161260581612916565b612abb61130e565b9060008083528060208401528060408401528060608401528060808401528060a0840152612ae761136e565b60c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152612b1d61154f565b6101a08401526101c0830152565b90612b5b916000612b3f600b825414611c27565b612b47611238565b926020948486808097518301019101612968565b92612b73612b6e61055b60045460ff1690565b611c47565b60409586917f7382f206dc45f90ecb29418ff3a1cec327dacb157788e9e82364259487f6ac98835180612ba7843383612a59565b0390a1612bbf8151801590811561304a575b50611c67565b01612bca8151612aa9565b612bd381612916565b612e535750612c1e91612be63415611cc7565b8151600181527f0db2f24bee0ec31e5181876f0a6ba8da0bde7e6d126c8fc2b0fdbd39dcc6c07a9080602081015b0390a10160019052565b612c2b610cea8351610a20565b3303612e3c5760015b15612d2b57612c876103ef94612c73612c4b612ab3565b95612c5f612c598751610a20565b886115de565b612c6b81870151610a20565b9087016115de565b612c7f81850151610a20565b9085016115de565b612ca0612c976060840151610a20565b606085016115de565b612cb9612cb06080840151151590565b15156080850152565b60a082015160a084015260c082015160c0840152612ce6612cdd60e0840151610a20565b60e085016115de565b6101008281015190840152610120808301519084015260016101408401526101608301526101804381840152810151906101a0918284015201516101c08201526132ac565b50612d7a6103ef93612d66612d3e612ab3565b94612d52612d4c8651610a20565b876115de565b612d5e81860151610a20565b9086016115de565b612d7281840151610a20565b9084016115de565b612d93612d8a6060830151610a20565b606084016115de565b612dac612da36080830151151590565b15156080840152565b60a081015160a083015260c081015160c0830152612dd9612dd060e0830151610a20565b60e084016115de565b61010080820151908301526101208082015190830152612e09610140612e0181840151151590565b151590840152565b612e1b610160612e0181840151151590565b6101804381840152810151906101a0918284015201516101c08201526132ac565b612e4c610cea6060840151610a20565b3314612c34565b90506001612e618251612aa9565b612e6a81612916565b03612fcd5750612e7a3415611ca7565b8451600081527fdabe4f37d3ec648a60b7bd5322983eefc63e267f69ea564cbb30ae5c97f8097390602090a181606080920152612eba610cea8451610a20565b3303612fb75760015b15612f7857612f0090612c736103ef96612c5f612ede612ab3565b97612eec6106138951610a20565b612ef881890151610a20565b9089016115de565b612f10612cb06080840151151590565b60a082015160a084015260c082015160c0840152612f34612cdd60e0840151610a20565b61010080830151908401526101208083015190840152806101408401526101608301526101804381840152810151906101a0918284015201516101c08201526132ac565b612d939150612d666103ef95612d52612f8f612ab3565b96612fa3612f9d8851610a20565b896115de565b612faf81880151610a20565b9088016115de565b612fc6610cea82850151610a20565b3314612ec3565b612fdd6002919692939651612aa9565b612fe681612916565b14612ff3575b5050505050565b6130409460e0612d7a936130073415611c87565b8351600081527f4103fc4f0bceac1b6d59c47eac5b63db02cf6e1d00ac4ea071af4ad83f2d397590602090a10152612d66612d3e612ab3565b3880808080612fec565b90506001541438612bb9565b6040519061014082016001600160401b038111838210176130d0575b6040528161307e6113ab565b81526130886113ab565b60208201526130956113ab565b60408201526130a26113ab565b60608201526101206000918260808201528260a08201528260c08201528260e0820152826101008201520152565b6130d861114e565b613072565b90815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b600160ff196004541617600455565b8151815260209182015115159181019190915260400190565b604051906101c082016001600160401b038111838210176131be575b604052816101a06000918281528260208201528260408201528260608201528260808201528260a082015261318561136e565b60c08201528260e0820152826101008201528261012082015282610140820152826101608201526131b461154f565b6101808201520152565b6131c661114e565b613152565b9190916102206102408201936131e2838251610a2c565b6131f460208201516020850190610a2c565b61320660408201516040850190610a2c565b61321860608201516060850190610a2c565b60808181015115159084015260a081015160a084015261324060c082015160c08501906103c6565b60e0810151906132566101209283860190610a2c565b61230d61010082015192610140938487015282015192610160938487015282015192613289610180948588019015159052565b8201519261329e6101a0948588019015159052565b8201516101c086019061228d565b6132b4613056565b9061018090818101928351936101209182840195865111600090600014613942575061016084015115155b156133fa575050926106a4926101c06106b2936103ef966132fe613136565b9461330c612d4c8451610a20565b61332561331c6020850151610a20565b602088016115de565b61333e6133356040850151610a20565b604088016115de565b61334e61063f6060850151610a20565b61336761335e6080850151151590565b15156080880152565b60a083015160a087015260c083015160c087015261339461338b60e0850151610a20565b60e088016115de565b610100808401519087015251908501526133be6101406133b681840151151590565b151590860152565b60016101608501526101a09283820151908501520151908201526133e2600b600055565b6133eb43600155565b604051928391602083016131cb565b9350935061340c610140830151151590565b156136a157506020808201936134228551610a20565b9060e084016134506134348251610a20565b6101a0870180515151909590916001600160a01b031690612537565b6000808080613462610cea8a51610a20565b6101c08a015190828215613698575bf11561368b575b60a0850151946101008101918251825161349190610a20565b915161349c90610a20565b978a516134a890610a20565b6040998a519485946134ba94866130dd565b037f6f3b7c13b19df8dc5827fab562cb2b55754c131107a2f7afbcd5068f92b6f5a791a187516134e990610a20565b306134f391613956565b60a0880190815247906080890191825261350b61310e565b60c08301518851634c344d9d60e01b89820190815291819061353090602483016103df565b03601f19810182526135429082611215565b8985015161354f90610a20565b61355890610a20565b90515a9260008094938194f161356c6125a3565b613575916126c8565b5061358560ff1960045416600455565b308a5161359190610a20565b9061359b91613956565b905180820360c08b01526135af9114611d27565b479051900387515284875197019680885286516135cd81928261311d565b037f2ef383a04cb1eb922a0ec2e4f8d9ac4f5ad61b3434a5003b139d228ab93f3fef91a1865151156135fe90611d47565b613606611581565b975161361190610a20565b61361b90896115de565b6060015161362890610a20565b613634908886016115de565b5186850152600160608701525160808601525191825190808383015192015115159161365e6112e1565b60008152938401529015159082015261367691613a12565b60a0830152515160c08201526103ef90612818565b6136936121a8565b613478565b506108fc613471565b9060208101936136b18551610a20565b916136db6136bf8251610a20565b6101a0830180515151909590916001600160a01b031690612537565b60e081019060008080806136f2610cea8751610a20565b6101c086015190828215613939575bf11561392c575b60a08101519461010090818301938451845161372390610a20565b915161372e90610a20565b988b5161373a90610a20565b60409a8b5194859461374c94866130dd565b037fa5d9ecd027a413bfd0c4682b70c07f15c945062f41e27eed60ac3bd81bddd4b591a1885161377b90610a20565b3061378591613956565b918801918252479160e0890192835261379c61310e565b60c08401518851634c344d9d60e01b602082019081529181906137c290602483016103df565b03601f19810182526137d49082611215565b898601516137e190610a20565b6137ea90610a20565b90515a9260008094938194f16137fe6125a3565b61380791612698565b5061381760ff1960045416600455565b308a5161382390610a20565b9061382d91613956565b905191828203908a01521461384190611ce7565b479051900385870190815152519560600195808752855161386381928261311d565b037f9b5629ec34eabbce58039df589a7aa0f71f8c6b789c949f8edd3e7934b889d8e91a18551511561389490611d07565b61389c611581565b96516138a790610a20565b6138b190886115de565b606001516138be90610a20565b6138cb90602088016115de565b51858401526001606086015251608085015251908151908060208301519201511515906138f66112e1565b9260008452602084015282019061390e919015159052565b61391791613a12565b60a0830152515160c08201526103ef90612879565b6139346121a8565b613708565b506108fc613701565b6132df565b90816020910312610284575190565b6000809161260593826040519160208301926370a0823160e01b845260018060a01b0380921660248201526024815261398e816111df565b5193165af16139a561399e6125a3565b80926126f8565b5060208082518301019101613947565b91906139bf61154f565b9260005b600181106139d15750508252565b806139de60019284612181565b516139e98288612181565b526139f48187612181565b506000198114613a05575b016139c3565b613a0d6121cc565b6139ff565b9190613a1c61154f565b9260005b60018110613a2e5750508252565b80613a3b60019284612181565b51613a468288612181565b52613a518187612181565b506000198114613a62575b01613a20565b613a6a6121cc565b613a5c565b60405190613a7c826111a8565b60008252565b60405190613a8f8261118d565b6000606083828152826020820152604051613aa9816111a8565b83815260408201520152565b60405190613ac282611165565b81600081526020613ad1613a82565b910152565b613ade61132e565b90613ae761136e565b8252613af161136e565b6020830152613afe613a6f565b60408301526000806060840152613b136113ab565b6080840152613b206113ab565b60a0840152613b2d6113ab565b60c0840152613b3a6113ab565b60e0840152613b476113ab565b610100840152613b556113ab565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152610220830152565b906102a08282031261028457610280613bab61134e565b92613bb581611425565b8452613bc360208201611425565b6020850152613bd460408201611425565b6040850152613be560608201611425565b6060850152613bf660808201611443565b608085015260a081015160a085015260c081015160c0850152613c1b60e08201611425565b60e085015261010080820151908501526101208082015190850152610140613c4584828401612936565b908501526101a0613c57818301611425565b610160860152612a4c6101c094613c6f868501611443565b6101808801526101e092613c84848601611443565b90880152610200958685015190880152610220840161144e565b9092916060602060a09260c0850196600180861b0316855280518286015201518051613cc981612916565b60408501526020810151151582850152604081015151608085015201511515910152565b9081526001600160a01b03909116602082015260400190565b613d0e61132e565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152613d5461136e565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152613d8561154f565b610200840152610220830152565b9094939260609260808301968352602083015260018060a01b031660408201520152565b90613dc0613ad6565b91613dcf600f60005414611d67565b6020613dea613ddc611238565b828082518301019101613b94565b91613e02613dfd61055b60045460ff1690565b611d87565b7f0c6f91cbb1dec863123f94a5635f26da83e63270bec40df15d54052f8d647bba60405180613e32843383613c9e565b0390a1613e4a81518015908115614cc8575b50611da7565b01613e558151612aa9565b613e5e81612916565b61415b5750613e6d3415611ea5565b613e7a610cea8251610a20565b33036141445760015b15613fd7576103ef9260a08201928351825152436020835101526101c0918284019182516040835101527f65a4ff33bdd91f93f29659007b67c5068d25a27111519dbfb44d1d834a92d942613edf8351604051918291826103df565b0390a160808251910152613ef1613d06565b94613eff612d4c8651610a20565b613f0f61331c6020870151610a20565b613f1f6133356040870151610a20565b613f2f61063f6060870151610a20565b613f3f61335e6080870151151590565b5160a086015260c084015160c0860152613f68613f5f60e0860151610a20565b60e087016115de565b6101008085015190860152610120808501519086015251610140850152613f97610160612d5e81860151610a20565b613fa96101806133b681860151151590565b60006101a085015251908301526101e043818401528101519061020091828401520151610220820152614ed2565b90608060206103ef94016000815152600060208251015260006040825101527f3f1defaf47263e6d8f3c649462323b8b9e69489bb6325cd534cd4d1feea1804e6140288251604051918291826103df565b0390a151910152614037613d06565b9061404b6140458251610a20565b836115de565b61406461405b6020830151610a20565b602084016115de565b61407d6140746040830151610a20565b604084016115de565b61408d612d8a6060830151610a20565b61409d612da36080830151151590565b60a081015160a083015260c081015160c08301526140c1612dd060e0830151610a20565b6101008082015190830152610120808201519083015261014080820151908301526140f4610160612d7281840151610a20565b614106610180612e0181840151151590565b6141186101a0612e0181840151151590565b6101c080820151908301526101e043818401528101519061020091828401520151610220820152614ed2565b614154610cea6060830151610a20565b3314613e83565b600161416b829593949551612aa9565b61417481612916565b0361477457604061419591510151806040840152516101c084015110611de5565b6141b46102008301516040830151908151016060840152513414611e05565b6101808201511561447c576103ef927fab7c0a614ed0b1889a4a07f5b2ae518dc5bd5944213115b9b0382daaa96acbd36142d26141f7610c706020870151610a20565b6101a085019081526142b14791610180870192835261421e600160ff196004541617600455565b61427f6000808a60a08101518261426c610cea60408051956142658761425760208201986311b693e360e11b8a52339060248401613ced565b03601f198101895288611215565b0151610a20565b9251925af16142796125a3565b90612758565b5061428f60ff1960045416600455565b6142a030610d2f60208b0151610a20565b90518082036101c089015214611e65565b479051900360e085019081515251806101008601526040519182918261311d565b0390a16142e56101008301515115611e85565b6000805160206159cc83398151915260a0840151604084015151614316610100870151604051938493339185613d93565b0390a160a0610120830161432b3382516115de565b6101c08501516020825101527f1d059d1b794f382a0c1516f2bf027058d413eb026b2de4f5d9498cadec5a8871614369825160405191829182610a39565b0390a151910152614378613d06565b916143866116cb8251610a20565b6143966116e16020830151610a20565b6143af6143a66040830151610a20565b604085016115de565b6143bf612c976060830151610a20565b6143cf612cb06080830151151590565b60a081015160a084015260c081015160c08401526143f3612cdd60e0830151610a20565b61010081015161010084015261012081015161012084015261014080820151908401526144243361016085016115de565b600061018084015261444761443d6101a0830151151590565b15156101a0850152565b6040820151516101c08401526101e0904382850152015161020083015261010060608201519101515101610220820152614ed2565b6103ef926000808080614496610cea610160890151610a20565b6101c08801519082821561476b575bf11561475e575b6144bc610c706020850151610a20565b610200830152476101e08301526144db600160ff196004541617600455565b61452f60008060a08601516040519061450b82610eb660208201936311b693e360e11b8552339060248401613ced565b8261451c610cea60408b0151610a20565b9251925af16145296125a3565b90612728565b5061453f60ff1960045416600455565b61456861455330610d2f6020870151610a20565b61020084015180820361022086015214611e25565b7fc15f2996b896b21cc42f700242f127ff552e0874fb339240caa11c016da759876145b0476101e085015190036080850190815152518060a08601526040519182918261311d565b0390a16145c260a08301515115611e45565b6000805160206159cc83398151915260a08401516040840151516145f3610100870151604051938493339185613d93565b0390a160a060c083016146073382516115de565b6101c08501516020825101527f4e456d7cdee7b740ffb17f77b51554278c7da4937f9815f6c3062f7ddf0efc36614645825160405191829182610a39565b0390a15191015260a0614656613d06565b92614664610fff8251610a20565b6146746110156020830151610a20565b61468461102e6040830151610a20565b61469d6146946060830151610a20565b606086016115de565b6146b66146ad6080830151151590565b15156080860152565b818101518285015260c081015160c08501526146d861107d60e0830151610a20565b610100810151610100850152610120808201519085015261014080820151908501526147083361016086016115de565b60006101808501526147226101a06133b681840151151590565b6040830151516101c0850152436101e08501526101e08101516102008501526101c0606084015191015190039101515101610220820152614ed2565b6147666121a8565b6144ac565b506108fc6144a5565b61478360029194929451612aa9565b61478c81612916565b1461479657505050565b620f42409161020090838282015101936147ba610140918288019687523414611dc5565b8451620dbba09590868110614a785750620dbb9f1990510193610160809701948552600080808060608701996147f3610cea8c51610a20565b82f115614a6b575b8451620186a09081116149b557916103ef9791600080808061495797614824610cea8b51610a20565b82f1156149a8575b61488e60c060a08701926000805160206159ac8339815191526148588551604051918291339083613ced565b0390a1604051600181527f193e01e8b4d5e54c5fa9b167bc086486a0f5eec2c611b31ad1302c7f755f0f03908060208101612c14565b6148eb6148e261489c613d06565b996148b06148aa8951610a20565b8c6115de565b6148c96148c060208a0151610a20565b60208d016115de565b6106196148d960408a0151610a20565b60408d016115de565b60608a016115de565b6149046148fb6080870151151590565b151560808a0152565b5160a088015260c084015160c088015261492d61492460e0860151610a20565b60e089016115de565b610100808501519088015261012080850151908801528084015190870152612d5e81840151610a20565b6149696101806133b681840151151590565b61497b6101a06133b681840151151590565b6101c080820151908501526101e09043828601520151908301526201869f19905101610220820152614ed2565b6149b06121a8565b61482c565b5095614a21916103ef9761488e60c060a08701926000805160206159ac8339815191526149eb8551604051918291339083613ced565b0390a1604051600181527ffb6f82c1c626740bded771e7b5a70c15066c87fb33e7e8b46894060faf264b93908060208101612c14565b614a336101806133b681840151151590565b614a456101a06133b681840151151590565b6101c080820151908501526101e090438286015201519083015251610220820152614ed2565b614a736121a8565b6147fb565b620186a09750949550938611614bbb5760008080806103ef99614a9e610cea8851610a20565b82f115614bae575b614b0860c060a08401966000805160206159ac833981519152614ad28951604051918291339083613ced565b0390a1604051600181527ff350600f78c4ab622df2355f313525c831adf239fe1cd4d6cc25a9fb79dd3923908060208101612c14565b614b10613d06565b94614b1e612d4c8451610a20565b614b2e61331c6020850151610a20565b614b3e6133356040850151610a20565b614b4e61063f6060850151610a20565b614b5e61335e6080850151151590565b5160a086015260c082015160c0860152614b7e613f5f60e0840151610a20565b610100808301519086015261012080830151908601528082015190850152614957610160612d5e81840151610a20565b614bb66121a8565b614aa6565b6103ef9550614c2260c060a08401966000805160206159ac833981519152614bec8951604051918291339083613ced565b0390a1604051600181527fa4773f35356895dcc80242fd6fa623d25d5d6acd3b81382d32680602f03ee299908060208101612c14565b614c2a613d06565b94614c38612d4c8451610a20565b614c4861331c6020850151610a20565b614c586133356040850151610a20565b614c6861063f6060850151610a20565b614c7861335e6080850151151590565b5160a086015260c082015160c0860152614c98613f5f60e0840151610a20565b610100808301519086015261012080830151908601528082015190850152614a21610160612d5e81840151610a20565b90506001541438613e44565b60405190614ce1826111c3565b81614cea6113ab565b8152614cf46113ab565b6020820152610140600091826040820152614d0d6113ab565b6060820152614d1a6113ab565b60808201528260a08201528260c08201528260e082015282610100820152826101208201520152565b614d4b61134e565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152614d9161136e565b6101408401528061016084015280610180840152806101a0840152806101c0840152614dbb61154f565b6101e0840152610200830152565b9190916102806102a0820193614de0838251610a2c565b614df260208201516020850190610a2c565b614e0460408201516040850190610a2c565b614e1660608201516060850190610a2c565b60808181015115159084015260a081015160a084015260c081015160c0840152614e4860e082015160e0850190610a2c565b61010080820151908401526101208082015190840152614e7161014080830151908501906103c6565b61016081015190614e886101a09283860190610a2c565b61230d61018082015192614ea36101c0948588019015159052565b82015192614eb86101e0948588019015159052565b82015192610200938487015282015161022086019061228d565b614eda614cd4565b6101e080830192835192610120948583019485511160009060001461551557506101a083015115155b1561501a575050916106b2916102206106a4946103ef96614f22614d43565b94614f30612d4c8451610a20565b614f4061331c6020850151610a20565b614f506133356040850151610a20565b614f6061063f6060850151610a20565b614f7061335e6080850151151590565b60a083015160a087015260c083015160c0870152614f9461338b60e0850151610a20565b610100808401519087015251908501526101408082015190850152614fc1610160612d5e81840151610a20565b614fd36101806133b681840151151590565b60016101a08501526101c08082015190850152610200928382015190850152015190820152615002600f600055565b61500b43600155565b60405192839160208301614dc9565b925092506020918282019482865161503190610a20565b3061503b91613956565b9160c08701928352479560a0880196875261505461310e565b60a083019687519460409182519182858101986340e7103960e01b8a52602482019061508290602083019252565b0397601f199889810185526150979085611215565b8488019384516150a690610a20565b6150af90610a20565b90515a9260008094938194f16150c36125a3565b6150cc91612788565b506150dc60ff1960045416600455565b308d516150e890610a20565b906150f291613956565b905180820360e08e01526151069114611ec5565b47905190038a5152895198838b0199808b52835161512581928261311d565b037f3b417a0aa1494b77ad08076553fca09fde2e5d41864665c0c216a9161640e60391a16102208601519951998a510199838c019a8b52511561516790611ee5565b51926101c09a8b8701978851885161517e90610a20565b9060e08a015161518d90610a20565b60c08b8101516101009c8d0180518b519c8d5260208d01959095526001600160a01b0395861660408d01529290941660608b015260808a019390935260a0890191909152967ff6a21739642372a83a047df6bea1e0abe177d94dc1f22a3e38b1936ab26004689190a188518e90156152e45750505061520a612ab3565b9b8c8a5161521790610a20565b615220916115de565b5161522a90610a20565b615235918d016115de565b5161523f90610a20565b61524a918b016115de565b606086015161525890610a20565b6152659060608b016115de565b60808601511515151560808a01525160a0890152610140918286015160c08a0152610160938487015161529790610a20565b6152a49060e08c016115de565b519089015283516152b49061551a565b908801526001908701526001908601525161018085015261020001516101a084015251908201526103ef906132ac565b600080939e508092969d9b9a99975061530381929d9996959d51610a20565b9b61532d6153118b51610a20565b6102008c0180515151909f90916001600160a01b031690612537565b61533e610cea6101608c0151610a20565b90519082821561550c575bf1156154ff575b308c5161535c90610a20565b9061536691613956565b918b0191825247938b0193845261537b61310e565b6101409283860151918b5191828c810194634c344d9d60e01b865260248201906153a4916103df565b0390810183526153b49083611215565b516153be90610a20565b6153c790610a20565b90515a9260008094938194f16153db6125a3565b6153e4916127b8565b506153f460ff1960045416600455565b308b5161540090610a20565b9061540a91613956565b905191828203908b01521461541e90611f05565b47905190036060880190815152519660800196808852865161544181928261311d565b037f78126502d3120ce0b58220c0b1d0c186f86ae3fa63735ec147f2b7d3ce255e7691a18651511561547290611f25565b61547a611581565b975161548590610a20565b61548f90896115de565b6060015161549c90610a20565b6154a8908886016115de565b518685015260016060870152516080860152519182519080838301519201511515916154d26112e1565b6000815293840152901515908201526154ea91613a12565b60a0830152515160c08201526103ef9061243c565b6155076121a8565b615350565b506108fc615349565b614f03565b906032820191828111615530575b821061028457565b6155386121cc565b615528565b919082019182811161553057821061028457565b919082602091031261028457604051602081016001600160401b03811182821017615580575b60405291358252565b61558861114e565b615577565b90818103906101a082126102845760408051936155a9856111fa565b6155b281611425565b85526155c060208201611425565b602086015260e0603f198501126102845760608251946155df866111fa565b828401518652605f190112610284578151936155fa856111df565b606082015185526080820151602086015260a0820151926001600160801b03198416840361028457856101409482615673980152602083015261563f60c08401611425565b8183015260e0830151606083015261010083015160808301528601526156686101208201611425565b60608601520161144e565b608082015290565b6001600160a01b0390911681529051602082015260400190565b604051906156a2826111fa565b8160008082528060208301526040516156ba816111fa565b8181526156c561136e565b6020820152816040820152816060820152816080820152604083015260608201526080613ad161154f565b80518252602080820151908301526040908101516001600160801b031916910152565b6103ef9092919261014060806101a08301958160018060a01b038083511686528060208401511660208701526040830151908151604088015261575e602083015160608901906156f0565b60408201511660c0870152606081015160e0870152015161010085015261578e6060820151610120860190610a2c565b015191019061228d565b6000612605928192826040519160208301926323b872dd60e01b845260018060a01b03809216602482015230604482015260016064820152606481526157dd816111fa565b5193165af161258c6157ed6125a3565b80926127e8565b91908260409103126102845760405161580c81611165565b60208082948035845201359161582183611439565b0152565b6003111561028457565b6040519061010082016001600160401b03811183821017615886575b6040528160e060009182815282602082015282604082015282606082015282608082015261587761136e565b60a08201528260c08201520152565b61588e61114e565b61584b565b61589b6112ee565b9060008083526158a96113ab565b60208401526158b66113ab565b60408401528060608401526158c961582f565b60808401526158d66113ab565b60a08401526158e36113ab565b60c08401526158f061136e565b60e084015280610100840152806101208401528061014084015280610160840152806101808401526101a0830152565b9190916101206101408201938051835260e060018060a01b0391826020820151166020860152604081015160408601528260608201511660608601526080810151608086015261597860a082015160a08701906156f0565b60c081015161010086015201511691015256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace4115afd72fb2573b80edceb720510a70225fa83510b4ecf26f2bd729aafb3e45965c2636a97d0c2b32a3c1dfdb0ed6f649a607ab72d7872557dc3d357b893e29a164736f6c6343000811000a`,
  BytecodeLen: 25011,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:84:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './src/contracts/auction.rsh:86:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:261:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:251:38:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './src/contracts/auction.rsh:261:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: './src/contracts/auction.rsh:251:38:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  11: {
    at: './src/contracts/auction.rsh:204:66:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  13: {
    at: './src/contracts/auction.rsh:261:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  14: {
    at: './src/contracts/auction.rsh:251:38:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  15: {
    at: './src/contracts/auction.rsh:123:31:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Admin": Admin,
  "AdminCall_adminCall": AdminCall_adminCall,
  "Auctioneer_acceptSale": Auctioneer_acceptSale,
  "Auctioneer_rejectSale": Auctioneer_rejectSale,
  "Auctioneer_stopAuction": Auctioneer_stopAuction,
  "Bidder_bid": Bidder_bid,
  "Bidder_optIn": Bidder_optIn,
  "Bidder_updateState": Bidder_updateState,
  "Seller": Seller
  };
export const _APIs = {
  AdminCall: {
    adminCall: AdminCall_adminCall
    },
  Auctioneer: {
    acceptSale: Auctioneer_acceptSale,
    rejectSale: Auctioneer_rejectSale,
    stopAuction: Auctioneer_stopAuction
    },
  Bidder: {
    bid: Bidder_bid,
    optIn: Bidder_optIn,
    updateState: Bidder_updateState
    }
  };
