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
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Token;
  const ctc4 = stdlib.T_Contract;
  return {
    accepted: [ctc0, ctc1, ctc2, ctc2, ctc3],
    bidSuccess: [ctc1, ctc1, ctc2, ctc0],
    created: [ctc1, ctc2],
    down: [ctc1, ctc1, ctc2, ctc4, ctc1, ctc0],
    endSuccess: [ctc1, ctc1],
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
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
  
  const _live = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v734, v735, v736, v737, v742] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'))) {
      const [v734, v735, v736, v737, v752] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'))) {
      const [v734, v735, v754, v772, v795, v798, v1291, v1292, v1293, v1300, v1301, v1316] = svs;
      return (await ((async () => {
        
        
        return false;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'))) {
      const [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      live: {
        decode: _live,
        dom: [],
        rng: ctc7
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc6, ctc9],
      2: [ctc0, ctc1, ctc5, ctc6, ctc9],
      7: [ctc0, ctc1, ctc0, ctc4, ctc0, ctc2, ctc2, ctc7, ctc7, ctc9, ctc2, ctc2],
      9: [ctc0, ctc1, ctc6, ctc0, ctc10, ctc2, ctc2, ctc6, ctc4, ctc2, ctc2, ctc11, ctc0, ctc7, ctc7, ctc2, ctc9, ctc2, ctc2]
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
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
  const ctc16 = stdlib.T_Tuple([ctc1, ctc1, ctc15]);
  const ctc17 = stdlib.T_Array(ctc16, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc18 = stdlib.T_Data({
    Auctioneer_acceptSale0_458: ctc10,
    Auctioneer_rejectSale0_458: ctc10
    });
  
  
  const v711 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v712 = [v711];
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc5, ctc6],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v735, v736, v737], secs: v739, time: v738, didSend: v44, from: v734 } = txn1;
  const v740 = v712[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0')];
  const v741 = stdlib.Array_set(v740, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'));
  const v742 = stdlib.Array_set(v712, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'), v741);
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
  const {data: [], secs: v746, time: v745, didSend: v51, from: v744 } = txn2;
  ;
  const v747 = v742[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0')];
  const v748 = v747[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0')];
  const v749 = stdlib.add(v748, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v751 = stdlib.Array_set(v747, '0', v749);
  const v752 = stdlib.Array_set(v742, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0'), v751);
  ;
  const v753 = stdlib.addressEq(v734, v744);
  stdlib.assert(v753, {
    at: './src/contracts/auction.rsh:80:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Admin'
    });
  const txn3 = await (ctc.sendrecv({
    args: [v734, v735, v736, v737, v752],
    evt_cnt: 0,
    funcNum: 2,
    lct: v745,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:82:15:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v756, time: v755, didSend: v55, from: v754 } = txn3;
      
      ;
      const v759 = [];
      const v760 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v737,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v761 = await txn3.getOutput('internal', 'v760', ctc7, v760);
      const v763 = v761[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '0')];
      const v764 = v761[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '1')];
      const v770 = v755;
      const v771 = await ctc.getContractInfo();
      const v772 = v736.title;
      const v773 = v736.description;
      const v774 = v736.price;
      const v778 = {
        blockCreated: v755,
        contractInfo: v771,
        description: v773,
        id: v764,
        owner: v734,
        price: v774,
        title: v772,
        tokenId: v735
        };
      const v779 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v737,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:39:application', stdlib.UInt_max, '0'),
            boxes: [],
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
      const v780 = await txn3.getOutput('internal', 'v779', ctc9, v779);
      const v782 = v780[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:39:application', stdlib.UInt_max, '0')];
      const v787 = stdlib.add(v763, v782);
      const v791 = v736.deadline;
      const v792 = stdlib.safeAdd(v755, v791);
      null;
      const v793 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: v764,
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v794 = v793;
      const v795 = v734;
      const v796 = true;
      const v797 = true;
      const v798 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:119:25:decimal', stdlib.UInt_max, '0');
      const v799 = v755;
      const v805 = v752;
      const v806 = v787;
      
      if (await (async () => {
        const v815 = stdlib.le(v799, v792);
        const v816 = v815 ? v797 : false;
        
        return v816;})()) {
        const v824 = stdlib.safeAdd(v799, v791);
        sim_r.isHalt = false;
        }
      else {
        const v1276 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v737,
            remote: ({
              accs: [],
              apps: [],
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
              boxes: [],
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
        const v1277 = await txn4.getOutput('internal', 'v1276', ctc9, v1276);
        const v1279 = v1277[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
        const v1284 = stdlib.add(v806, v1279);
        null;
        const v1289 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
        if (v1289) {
          const v1291 = stdlib.safeAdd(v799, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v1292 = true;
          const v1293 = true;
          const v1294 = v799;
          const v1300 = v805;
          const v1301 = v1284;
          
          if (await (async () => {
            const v1308 = stdlib.le(v1294, v1291);
            const v1309 = v1308 ? v1293 : false;
            
            return v1309;})()) {
            const v1316 = stdlib.safeAdd(v1294, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            sim_r.isHalt = false;
            }
          else {
            if (v1292) {
              const v1394 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
              const v1395 = v1394[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v795,
                tok: v735
                });
              sim_r.txns.push({
                kind: 'from',
                to: v734,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v735
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v1416 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
              const v1417 = v1416[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v734,
                tok: v735
                });
              sim_r.txns.push({
                kind: 'from',
                to: v795,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v735
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1438 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
          const v1439 = v1438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v734,
            tok: v735
            });
          sim_r.txns.push({
            kind: 'from',
            to: v795,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v735
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          }}
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc0, ctc5, ctc6, ctc17],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v756, time: v755, didSend: v55, from: v754 } = txn3;
  ;
  const v759 = [];
  const v760 = undefined /* Remote */;
  const v761 = await txn3.getOutput('internal', 'v760', ctc7, v760);
  const v763 = v761[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '0')];
  const v764 = v761[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '1')];
  const v769 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v763);
  stdlib.assert(v769, {
    at: './src/contracts/auction.rsh:93:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v770 = v755;
  const v771 = await ctc.getContractInfo();
  const v772 = v736.title;
  const v773 = v736.description;
  const v774 = v736.price;
  const v778 = {
    blockCreated: v755,
    contractInfo: v771,
    description: v773,
    id: v764,
    owner: v734,
    price: v774,
    title: v772,
    tokenId: v735
    };
  const v779 = undefined /* Remote */;
  const v780 = await txn3.getOutput('internal', 'v779', ctc9, v779);
  const v782 = v780[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:39:application', stdlib.UInt_max, '0')];
  const v787 = stdlib.add(v763, v782);
  const v788 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v782);
  stdlib.assert(v788, {
    at: './src/contracts/auction.rsh:109:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  const v791 = v736.deadline;
  const v792 = stdlib.safeAdd(v755, v791);
  null;
  const v793 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: v764,
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v794 = v793;
  let v795 = v734;
  let v796 = true;
  let v797 = true;
  let v798 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:119:25:decimal', stdlib.UInt_max, '0');
  let v799 = v755;
  let v805 = v752;
  let v806 = v787;
  
  let txn4 = txn3;
  while (await (async () => {
    const v815 = stdlib.le(v799, v792);
    const v816 = v815 ? v797 : false;
    
    return v816;})()) {
    const v824 = stdlib.safeAdd(v799, v791);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc12],
      timeoutAt: ['time', v824],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824],
        evt_cnt: 0,
        funcNum: 8,
        lct: v799,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:179:39:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1263, time: v1262, didSend: v416, from: v1261 } = txn6;
          
          ;
          const v1266 = {
            blockEnded: v1262,
            id: v764,
            lastBid: v798
            };
          const cv794 = v1266;
          const cv795 = v795;
          const cv796 = v796;
          const cv797 = v797;
          const cv798 = v798;
          const cv799 = v1262;
          const cv805 = v805;
          const cv806 = v806;
          
          await (async () => {
            const v794 = cv794;
            const v795 = cv795;
            const v796 = cv796;
            const v797 = cv797;
            const v798 = cv798;
            const v799 = cv799;
            const v805 = cv805;
            const v806 = cv806;
            
            if (await (async () => {
              const v815 = stdlib.le(v799, v792);
              const v816 = v815 ? v797 : false;
              
              return v816;})()) {
              const v824 = stdlib.safeAdd(v799, v791);
              sim_r.isHalt = false;
              }
            else {
              const v1276 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v737,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc8.defaultValue /* simReturnVal */];})();
              const v1277 = await txn6.getOutput('internal', 'v1276', ctc9, v1276);
              const v1279 = v1277[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
              const v1284 = stdlib.add(v806, v1279);
              const v1285 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1279);
              ;
              null;
              const v1289 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
              if (v1289) {
                const v1291 = stdlib.safeAdd(v799, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v1292 = true;
                const v1293 = true;
                const v1294 = v799;
                const v1300 = v805;
                const v1301 = v1284;
                
                if (await (async () => {
                  const v1308 = stdlib.le(v1294, v1291);
                  const v1309 = v1308 ? v1293 : false;
                  
                  return v1309;})()) {
                  const v1316 = stdlib.safeAdd(v1294, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  sim_r.isHalt = false;
                  }
                else {
                  if (v1292) {
                    const v1394 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    const v1395 = v1394[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v795,
                      tok: v735
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v734,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v735
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }
                  else {
                    const v1416 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
                    const v1417 = v1416[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v734,
                      tok: v735
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v795,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v735
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}}
              else {
                const v1438 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                const v1439 = v1438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v734,
                  tok: v735
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v795,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v735
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc3, ctc0, ctc6, ctc3, ctc10, ctc1, ctc1, ctc6, ctc4, ctc1, ctc1, ctc13, ctc3, ctc15, ctc15, ctc1, ctc17, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1263, time: v1262, didSend: v416, from: v1261 } = txn6;
      ;
      const v1264 = stdlib.addressEq(v754, v1261);
      stdlib.assert(v1264, {
        at: './src/contracts/auction.rsh:179:39:dot',
        fs: ['at ./src/contracts/auction.rsh:178:73:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:178:73:function exp)'],
        msg: 'sender correct',
        who: 'Admin'
        });
      const v1266 = {
        blockEnded: v1262,
        id: v764,
        lastBid: v798
        };
      const cv794 = v1266;
      const cv795 = v795;
      const cv796 = v796;
      const cv797 = v797;
      const cv798 = v798;
      const cv799 = v1262;
      const cv805 = v805;
      const cv806 = v806;
      
      v794 = cv794;
      v795 = cv795;
      v796 = cv796;
      v797 = cv797;
      v798 = cv798;
      v799 = cv799;
      v805 = cv805;
      v806 = cv806;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn5;
      switch (v865[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v868 = v865[1];
          undefined /* setApiDetails */;
          ;
          null;
          const v882 = {
            blockEnded: v866,
            id: v764,
            lastBid: v798
            };
          await txn5.getOutput('Auctioneer_stopAuction', 'v882', ctc13, v882);
          const cv794 = v882;
          const cv795 = v795;
          const cv796 = v796;
          const cv797 = false;
          const cv798 = v798;
          const cv799 = v866;
          const cv805 = v805;
          const cv806 = v806;
          
          v794 = cv794;
          v795 = cv795;
          v796 = cv796;
          v797 = cv797;
          v798 = cv798;
          v799 = cv799;
          v805 = cv805;
          v806 = cv806;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Bidder_bid0_114': {
          const v999 = v865[1];
          undefined /* setApiDetails */;
          const v1005 = v999[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:133:30:spread', stdlib.UInt_max, '0')];
          const v1006 = stdlib.gt(v1005, v798);
          stdlib.assert(v1006, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/auction.rsh:134:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:133:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
            msg: 'Your bid is too low, please try again',
            who: 'Admin'
            });
          const v1010 = stdlib.add(v806, v1005);
          ;
          if (v796) {
            const v1062 = undefined /* Remote */;
            const v1063 = await txn5.getOutput('internal', 'v1062', ctc9, v1062);
            const v1065 = v1063[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
            const v1070 = stdlib.add(v1010, v1065);
            const v1071 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1065);
            stdlib.assert(v1071, {
              at: './src/contracts/auction.rsh:140:91:application',
              fs: ['at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'remote bill check',
              who: 'Admin'
              });
            null;
            const v1073 = [v864, v798];
            await txn5.getOutput('Bidder_bid', 'v1073', ctc14, v1073);
            const cv794 = v794;
            const cv795 = v864;
            const cv796 = false;
            const cv797 = v797;
            const cv798 = v1005;
            const cv799 = v866;
            const cv805 = v805;
            const cv806 = v1070;
            
            v794 = cv794;
            v795 = cv795;
            v796 = cv796;
            v797 = cv797;
            v798 = cv798;
            v799 = cv799;
            v805 = cv805;
            v806 = cv806;
            
            txn4 = txn5;
            continue;}
          else {
            const v1034 = stdlib.sub(v1010, v798);
            ;
            const v1038 = undefined /* Remote */;
            const v1039 = await txn5.getOutput('internal', 'v1038', ctc9, v1038);
            const v1041 = v1039[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
            const v1046 = stdlib.add(v1034, v1041);
            const v1047 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041);
            stdlib.assert(v1047, {
              at: './src/contracts/auction.rsh:140:91:application',
              fs: ['at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'remote bill check',
              who: 'Admin'
              });
            null;
            const v1049 = [v864, v798];
            await txn5.getOutput('Bidder_bid', 'v1049', ctc14, v1049);
            const cv794 = v794;
            const cv795 = v864;
            const cv796 = false;
            const cv797 = v797;
            const cv798 = v1005;
            const cv799 = v866;
            const cv805 = v805;
            const cv806 = v1046;
            
            v794 = cv794;
            v795 = cv795;
            v796 = cv796;
            v797 = cv797;
            v798 = cv798;
            v799 = cv799;
            v805 = cv805;
            v806 = cv806;
            
            txn4 = txn5;
            continue;}
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1130 = v865[1];
          undefined /* setApiDetails */;
          const v1141 = stdlib.add(v806, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          ;
          const v1216 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
          if (v1216) {
            const v1220 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
            ;
            const v1222 = stdlib.ge(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
            if (v1222) {
              const v1226 = stdlib.sub(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
              ;
              null;
              const v1227 = true;
              await txn5.getOutput('Bidder_optIn', 'v1227', ctc15, v1227);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1226;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}
            else {
              null;
              const v1234 = true;
              await txn5.getOutput('Bidder_optIn', 'v1234', ctc15, v1234);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1220;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}}
          else {
            const v1242 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
            if (v1242) {
              const v1246 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
              ;
              null;
              const v1247 = true;
              await txn5.getOutput('Bidder_optIn', 'v1247', ctc15, v1247);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1246;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}
            else {
              null;
              const v1254 = true;
              await txn5.getOutput('Bidder_optIn', 'v1254', ctc15, v1254);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1141;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}}
          break;
          }
        }}
    
    }
  const v1276 = undefined /* Remote */;
  const v1277 = await txn4.getOutput('internal', 'v1276', ctc9, v1276);
  const v1279 = v1277[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
  const v1284 = stdlib.add(v806, v1279);
  const v1285 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1279);
  stdlib.assert(v1285, {
    at: './src/contracts/auction.rsh:194:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Admin'
    });
  null;
  const v1289 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
  if (v1289) {
    const v1291 = stdlib.safeAdd(v799, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    let v1292 = true;
    let v1293 = true;
    let v1294 = v799;
    let v1300 = v805;
    let v1301 = v1284;
    
    let txn5 = txn4;
    while (await (async () => {
      const v1308 = stdlib.le(v1294, v1291);
      const v1309 = v1308 ? v1293 : false;
      
      return v1309;})()) {
      const v1316 = stdlib.safeAdd(v1294, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc18],
        timeoutAt: ['time', v1316],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.sendrecv({
          args: [v734, v735, v754, v772, v795, v798, v1291, v1292, v1293, v1300, v1301, v1316],
          evt_cnt: 0,
          funcNum: 6,
          lct: v1294,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:236:39:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn7) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v1390, time: v1389, didSend: v621, from: v1388 } = txn7;
            
            ;
            const cv1292 = v1292;
            const cv1293 = v1293;
            const cv1294 = v1389;
            const cv1300 = v1300;
            const cv1301 = v1301;
            
            await (async () => {
              const v1292 = cv1292;
              const v1293 = cv1293;
              const v1294 = cv1294;
              const v1300 = cv1300;
              const v1301 = cv1301;
              
              if (await (async () => {
                const v1308 = stdlib.le(v1294, v1291);
                const v1309 = v1308 ? v1293 : false;
                
                return v1309;})()) {
                const v1316 = stdlib.safeAdd(v1294, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }
              else {
                if (v1292) {
                  const v1394 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                  const v1395 = v1394[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v795,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }
                else {
                  const v1416 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
                  const v1417 = v1416[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v795,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}})();
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: undefined /* mto */,
          tys: [ctc3, ctc0, ctc3, ctc4, ctc3, ctc1, ctc1, ctc15, ctc15, ctc17, ctc1, ctc1],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1390, time: v1389, didSend: v621, from: v1388 } = txn7;
        ;
        const v1391 = stdlib.addressEq(v754, v1388);
        stdlib.assert(v1391, {
          at: './src/contracts/auction.rsh:236:39:dot',
          fs: ['at ./src/contracts/auction.rsh:235:61:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:235:61:function exp)'],
          msg: 'sender correct',
          who: 'Admin'
          });
        const cv1292 = v1292;
        const cv1293 = v1293;
        const cv1294 = v1389;
        const cv1300 = v1300;
        const cv1301 = v1301;
        
        v1292 = cv1292;
        v1293 = cv1293;
        v1294 = cv1294;
        v1300 = cv1300;
        v1301 = cv1301;
        
        txn5 = txn7;
        continue;
        }
      else {
        const {data: [v1341], secs: v1343, time: v1342, didSend: v583, from: v1340 } = txn6;
        switch (v1341[0]) {
          case 'Auctioneer_acceptSale0_458': {
            const v1344 = v1341[1];
            undefined /* setApiDetails */;
            ;
            const v1351 = true;
            await txn6.getOutput('Auctioneer_acceptSale', 'v1351', ctc15, v1351);
            const cv1292 = true;
            const cv1293 = false;
            const cv1294 = v1342;
            const cv1300 = v1300;
            const cv1301 = v1301;
            
            v1292 = cv1292;
            v1293 = cv1293;
            v1294 = cv1294;
            v1300 = cv1300;
            v1301 = cv1301;
            
            txn5 = txn6;
            continue;
            break;
            }
          case 'Auctioneer_rejectSale0_458': {
            const v1366 = v1341[1];
            undefined /* setApiDetails */;
            ;
            const v1381 = false;
            await txn6.getOutput('Auctioneer_rejectSale', 'v1381', ctc15, v1381);
            const cv1292 = false;
            const cv1293 = false;
            const cv1294 = v1342;
            const cv1300 = v1300;
            const cv1301 = v1301;
            
            v1292 = cv1292;
            v1293 = cv1293;
            v1294 = cv1294;
            v1300 = cv1300;
            v1301 = cv1301;
            
            txn5 = txn6;
            continue;
            break;
            }
          }}
      
      }
    if (v1292) {
      const v1394 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
      const v1395 = v1394[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }
    else {
      const v1416 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
      const v1417 = v1416[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }}
  else {
    const v1438 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
    const v1439 = v1438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  
  
  
  };
export async function _Auctioneer_acceptSale7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_458: ctc7,
    Auctioneer_rejectSale0_458: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v734, v735, v754, v772, v795, v798, v1291, v1292, v1293, v1300, v1301, v1316] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc0, ctc2, ctc0, ctc3, ctc3, ctc4, ctc4, ctc6, ctc3, ctc3]);
  const v1318 = ctc.selfAddress();
  const v1320 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:215:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:215:36:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to "runAuctioneer_acceptSale0_458" (defined at: ./src/contracts/auction.rsh:213:29:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:209:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1322 = stdlib.addressEq(v1318, v734);
  stdlib.assert(v1322, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:216:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:215:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:215:36:function exp)', 'at ./src/contracts/auction.rsh:215:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:215:36:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to "runAuctioneer_acceptSale0_458" (defined at: ./src/contracts/auction.rsh:213:29:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:209:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1326 = ['Auctioneer_acceptSale0_458', v1320];
  
  const txn1 = await (ctc.sendrecv({
    args: [v734, v735, v754, v772, v795, v798, v1291, v1292, v1293, v1300, v1301, v1316, v1326],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:218:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1341], secs: v1343, time: v1342, didSend: v583, from: v1340 } = txn1;
      
      switch (v1341[0]) {
        case 'Auctioneer_acceptSale0_458': {
          const v1344 = v1341[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1351 = true;
          const v1352 = await txn1.getOutput('Auctioneer_acceptSale', 'v1351', ctc4, v1351);
          
          const v3349 = true;
          const v3350 = false;
          const v3352 = v1300;
          const v3353 = v1301;
          const v3354 = stdlib.le(v1342, v1291);
          const v3355 = v3354 ? false : false;
          if (v3355) {
            const v3356 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            sim_r.isHalt = false;
            }
          else {
            const v3357 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
            const v3358 = v3357[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v795,
              tok: v735
              });
            sim_r.txns.push({
              kind: 'from',
              to: v734,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v735
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Auctioneer_rejectSale0_458': {
          const v1366 = v1341[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc3, ctc3, ctc4, ctc4, ctc6, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1341], secs: v1343, time: v1342, didSend: v583, from: v1340 } = txn1;
  switch (v1341[0]) {
    case 'Auctioneer_acceptSale0_458': {
      const v1344 = v1341[1];
      undefined /* setApiDetails */;
      ;
      const v1351 = true;
      const v1352 = await txn1.getOutput('Auctioneer_acceptSale', 'v1351', ctc4, v1351);
      if (v583) {
        stdlib.protect(ctc9, await interact.out(v1344, v1352), {
          at: './src/contracts/auction.rsh:214:33:application',
          fs: ['at ./src/contracts/auction.rsh:214:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:214:33:function exp)', 'at ./src/contracts/auction.rsh:220:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:219:42:function exp)', 'at ./src/contracts/auction.rsh:219:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:219:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v3349 = true;
      const v3350 = false;
      const v3352 = v1300;
      const v3353 = v1301;
      const v3354 = stdlib.le(v1342, v1291);
      const v3355 = v3354 ? false : false;
      if (v3355) {
        const v3356 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        return;
        }
      else {
        const v3357 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
        const v3358 = v3357[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    case 'Auctioneer_rejectSale0_458': {
      const v1366 = v1341[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale7(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale7 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale7 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc3 = stdlib.T_UInt;
  const ctc4 = stdlib.T_Bool;
  const ctc5 = stdlib.T_Tuple([ctc3, ctc3, ctc4]);
  const ctc6 = stdlib.T_Array(ctc5, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Data({
    Auctioneer_acceptSale0_458: ctc7,
    Auctioneer_rejectSale0_458: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v734, v735, v754, v772, v795, v798, v1291, v1292, v1293, v1300, v1301, v1316] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7'), [ctc0, ctc1, ctc0, ctc2, ctc0, ctc3, ctc3, ctc4, ctc4, ctc6, ctc3, ctc3]);
  const v1328 = ctc.selfAddress();
  const v1330 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:226:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:226:36:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to "runAuctioneer_rejectSale0_458" (defined at: ./src/contracts/auction.rsh:224:29:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:209:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1332 = stdlib.addressEq(v1328, v734);
  stdlib.assert(v1332, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:227:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:226:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:226:36:function exp)', 'at ./src/contracts/auction.rsh:226:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:226:36:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to "runAuctioneer_rejectSale0_458" (defined at: ./src/contracts/auction.rsh:224:29:function exp)', 'at ./src/contracts/auction.rsh:209:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:209:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1336 = ['Auctioneer_rejectSale0_458', v1330];
  
  const txn1 = await (ctc.sendrecv({
    args: [v734, v735, v754, v772, v795, v798, v1291, v1292, v1293, v1300, v1301, v1316, v1336],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:229:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1341], secs: v1343, time: v1342, didSend: v583, from: v1340 } = txn1;
      
      switch (v1341[0]) {
        case 'Auctioneer_acceptSale0_458': {
          const v1344 = v1341[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_458': {
          const v1366 = v1341[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1381 = false;
          const v1382 = await txn1.getOutput('Auctioneer_rejectSale', 'v1381', ctc4, v1381);
          
          const v3385 = false;
          const v3386 = false;
          const v3388 = v1300;
          const v3389 = v1301;
          const v3390 = stdlib.le(v1342, v1291);
          const v3391 = v3390 ? false : false;
          if (v3391) {
            const v3392 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            sim_r.isHalt = false;
            }
          else {
            const v3395 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
            const v3396 = v3395[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v734,
              tok: v735
              });
            sim_r.txns.push({
              kind: 'from',
              to: v795,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v735
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc0, ctc2, ctc0, ctc3, ctc3, ctc4, ctc4, ctc6, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1341], secs: v1343, time: v1342, didSend: v583, from: v1340 } = txn1;
  switch (v1341[0]) {
    case 'Auctioneer_acceptSale0_458': {
      const v1344 = v1341[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_458': {
      const v1366 = v1341[1];
      undefined /* setApiDetails */;
      ;
      const v1381 = false;
      const v1382 = await txn1.getOutput('Auctioneer_rejectSale', 'v1381', ctc4, v1381);
      if (v583) {
        stdlib.protect(ctc9, await interact.out(v1366, v1382), {
          at: './src/contracts/auction.rsh:225:33:application',
          fs: ['at ./src/contracts/auction.rsh:225:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:225:33:function exp)', 'at ./src/contracts/auction.rsh:231:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:230:42:function exp)', 'at ./src/contracts/auction.rsh:230:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:230:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v3385 = false;
      const v3386 = false;
      const v3388 = v1300;
      const v3389 = v1301;
      const v3390 = stdlib.le(v1342, v1291);
      const v3391 = v3390 ? false : false;
      if (v3391) {
        const v3392 = stdlib.safeAdd(v1342, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        return;
        }
      else {
        const v3395 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
        const v3396 = v3395[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
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
  
  
  const [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc4]);
  const v826 = ctc.selfAddress();
  const v828 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:163:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:163:36:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to "runAuctioneer_stopAuction0_114" (defined at: ./src/contracts/auction.rsh:161:29:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v830 = stdlib.addressEq(v826, v734);
  stdlib.assert(v830, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:164:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:163:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:163:36:function exp)', 'at ./src/contracts/auction.rsh:163:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:163:36:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to "runAuctioneer_stopAuction0_114" (defined at: ./src/contracts/auction.rsh:161:29:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v834 = ['Auctioneer_stopAuction0_114', v828];
  
  const txn1 = await (ctc.sendrecv({
    args: [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824, v834],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:166:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn1;
      
      switch (v865[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v868 = v865[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          null;
          const v882 = {
            blockEnded: v866,
            id: v764,
            lastBid: v798
            };
          const v883 = await txn1.getOutput('Auctioneer_stopAuction', 'v882', ctc6, v882);
          
          const v3397 = v882;
          const v3398 = v795;
          const v3399 = v796;
          const v3400 = false;
          const v3401 = v798;
          const v3403 = v805;
          const v3404 = v806;
          const v3405 = stdlib.le(v866, v792);
          const v3406 = v3405 ? false : false;
          if (v3406) {
            const v3407 = stdlib.safeAdd(v866, v791);
            sim_r.isHalt = false;
            }
          else {
            const v3408 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v737,
                remote: ({
                  accs: [],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v3409 = await txn1.getOutput('internal', 'v3408', ctc13, v3408);
            const v3410 = v3409[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
            const v3411 = stdlib.add(v806, v3410);
            null;
            const v3413 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
            if (v3413) {
              const v3414 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3445 = true;
              const v3446 = true;
              const v3448 = v805;
              const v3449 = v3411;
              const v3450 = stdlib.le(v866, v3414);
              if (v3450) {
                sim_r.isHalt = false;
                }
              else {
                const v3453 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                const v3454 = v3453[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v795,
                  tok: v735
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v734,
                  tok: undefined /* Nothing */
                  });
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v735
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v3443 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              const v3444 = v3443[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v734,
                tok: v735
                });
              sim_r.txns.push({
                kind: 'from',
                to: v795,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v735
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_bid0_114': {
          const v999 = v865[1];
          
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1130 = v865[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn1;
  switch (v865[0]) {
    case 'Auctioneer_stopAuction0_114': {
      const v868 = v865[1];
      undefined /* setApiDetails */;
      ;
      null;
      const v882 = {
        blockEnded: v866,
        id: v764,
        lastBid: v798
        };
      const v883 = await txn1.getOutput('Auctioneer_stopAuction', 'v882', ctc6, v882);
      if (v308) {
        stdlib.protect(ctc12, await interact.out(v868, v883), {
          at: './src/contracts/auction.rsh:162:33:application',
          fs: ['at ./src/contracts/auction.rsh:162:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:162:33:function exp)', 'at ./src/contracts/auction.rsh:174:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:167:42:function exp)', 'at ./src/contracts/auction.rsh:167:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:167:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v3397 = v882;
      const v3398 = v795;
      const v3399 = v796;
      const v3400 = false;
      const v3401 = v798;
      const v3403 = v805;
      const v3404 = v806;
      const v3405 = stdlib.le(v866, v792);
      const v3406 = v3405 ? false : false;
      if (v3406) {
        const v3407 = stdlib.safeAdd(v866, v791);
        return;
        }
      else {
        const v3408 = undefined /* Remote */;
        const v3409 = await txn1.getOutput('internal', 'v3408', ctc13, v3408);
        const v3410 = v3409[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
        const v3411 = stdlib.add(v806, v3410);
        const v3412 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3410);
        stdlib.assert(v3412, {
          at: './src/contracts/auction.rsh:194:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        null;
        const v3413 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
        if (v3413) {
          const v3414 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3445 = true;
          const v3446 = true;
          const v3448 = v805;
          const v3449 = v3411;
          const v3450 = stdlib.le(v866, v3414);
          if (v3450) {
            return;
            }
          else {
            const v3453 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
            const v3454 = v3453[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}
        else {
          const v3443 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
          const v3444 = v3443[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Bidder_bid0_114': {
      const v999 = v865[1];
      return;
      break;
      }
    case 'Bidder_optIn0_114': {
      const v1130 = v865[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
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
  
  
  const [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc4]);
  const v838 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:133:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to "runBidder_bid0_114" (defined at: ./src/contracts/auction.rsh:133:30:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v839 = v838[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v841 = stdlib.gt(v839, v798);
  stdlib.assert(v841, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:134:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:133:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to "runBidder_bid0_114" (defined at: ./src/contracts/auction.rsh:133:30:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v848 = ['Bidder_bid0_114', v838];
  
  const txn1 = await (ctc.sendrecv({
    args: [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824, v848],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v839, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn1;
      
      switch (v865[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v868 = v865[1];
          
          break;
          }
        case 'Bidder_bid0_114': {
          const v999 = v865[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v1005 = v999[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:133:30:spread', stdlib.UInt_max, '0')];
          const v1010 = stdlib.add(v806, v1005);
          sim_r.txns.push({
            amt: v1005,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          if (v796) {
            const v1062 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v737,
                remote: ({
                  accs: [v864],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1063 = await txn1.getOutput('internal', 'v1062', ctc13, v1062);
            const v1065 = v1063[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
            const v1070 = stdlib.add(v1010, v1065);
            null;
            const v1073 = [v864, v798];
            const v1074 = await txn1.getOutput('Bidder_bid', 'v1073', ctc14, v1073);
            
            const v3877 = v794;
            const v3878 = v864;
            const v3879 = false;
            const v3880 = v797;
            const v3881 = v1005;
            const v3883 = v805;
            const v3884 = v1070;
            const v3885 = stdlib.le(v866, v792);
            const v3886 = v3885 ? v797 : false;
            if (v3886) {
              const v3887 = stdlib.safeAdd(v866, v791);
              sim_r.isHalt = false;
              }
            else {
              const v3888 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v737,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3889 = await txn1.getOutput('internal', 'v3888', ctc13, v3888);
              const v3890 = v3889[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
              const v3891 = stdlib.add(v1070, v3890);
              null;
              const v3893 = stdlib.gt(v1005, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
              if (v3893) {
                const v3894 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3925 = true;
                const v3926 = true;
                const v3928 = v805;
                const v3929 = v3891;
                const v3930 = stdlib.le(v866, v3894);
                if (v3930) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3933 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                  const v3934 = v3933[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v864,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3923 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                const v3924 = v3923[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v734,
                  tok: v735
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v864,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v735
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v1034 = stdlib.sub(v1010, v798);
            sim_r.txns.push({
              kind: 'from',
              to: v795,
              tok: undefined /* Nothing */
              });
            const v1038 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v737,
                remote: ({
                  accs: [v864],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0'),
                  boxes: [],
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v1039 = await txn1.getOutput('internal', 'v1038', ctc13, v1038);
            const v1041 = v1039[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
            const v1046 = stdlib.add(v1034, v1041);
            null;
            const v1049 = [v864, v798];
            const v1050 = await txn1.getOutput('Bidder_bid', 'v1049', ctc14, v1049);
            
            const v3937 = v794;
            const v3938 = v864;
            const v3939 = false;
            const v3940 = v797;
            const v3941 = v1005;
            const v3943 = v805;
            const v3944 = v1046;
            const v3945 = stdlib.le(v866, v792);
            const v3946 = v3945 ? v797 : false;
            if (v3946) {
              const v3947 = stdlib.safeAdd(v866, v791);
              sim_r.isHalt = false;
              }
            else {
              const v3948 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v737,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                    boxes: [],
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
              const v3949 = await txn1.getOutput('internal', 'v3948', ctc13, v3948);
              const v3950 = v3949[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
              const v3951 = stdlib.add(v1046, v3950);
              null;
              const v3953 = stdlib.gt(v1005, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
              if (v3953) {
                const v3954 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3985 = true;
                const v3986 = true;
                const v3988 = v805;
                const v3989 = v3951;
                const v3990 = stdlib.le(v866, v3954);
                if (v3990) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3993 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                  const v3994 = v3993[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v864,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3983 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                const v3984 = v3983[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v734,
                  tok: v735
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v864,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v735
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1130 = v865[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn1;
  switch (v865[0]) {
    case 'Auctioneer_stopAuction0_114': {
      const v868 = v865[1];
      return;
      break;
      }
    case 'Bidder_bid0_114': {
      const v999 = v865[1];
      undefined /* setApiDetails */;
      const v1005 = v999[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:133:30:spread', stdlib.UInt_max, '0')];
      const v1006 = stdlib.gt(v1005, v798);
      stdlib.assert(v1006, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:134:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:133:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v1010 = stdlib.add(v806, v1005);
      ;
      if (v796) {
        const v1062 = undefined /* Remote */;
        const v1063 = await txn1.getOutput('internal', 'v1062', ctc13, v1062);
        const v1065 = v1063[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
        const v1070 = stdlib.add(v1010, v1065);
        const v1071 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1065);
        stdlib.assert(v1071, {
          at: './src/contracts/auction.rsh:140:91:application',
          fs: ['at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1073 = [v864, v798];
        const v1074 = await txn1.getOutput('Bidder_bid', 'v1073', ctc14, v1073);
        if (v308) {
          stdlib.protect(ctc12, await interact.out(v999, v1074), {
            at: './src/contracts/auction.rsh:133:31:application',
            fs: ['at ./src/contracts/auction.rsh:133:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:31:function exp)', 'at ./src/contracts/auction.rsh:142:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:137:50:function exp)', 'at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3877 = v794;
        const v3878 = v864;
        const v3879 = false;
        const v3880 = v797;
        const v3881 = v1005;
        const v3883 = v805;
        const v3884 = v1070;
        const v3885 = stdlib.le(v866, v792);
        const v3886 = v3885 ? v797 : false;
        if (v3886) {
          const v3887 = stdlib.safeAdd(v866, v791);
          return;
          }
        else {
          const v3888 = undefined /* Remote */;
          const v3889 = await txn1.getOutput('internal', 'v3888', ctc13, v3888);
          const v3890 = v3889[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
          const v3891 = stdlib.add(v1070, v3890);
          const v3892 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3890);
          stdlib.assert(v3892, {
            at: './src/contracts/auction.rsh:194:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3893 = stdlib.gt(v1005, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
          if (v3893) {
            const v3894 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3925 = true;
            const v3926 = true;
            const v3928 = v805;
            const v3929 = v3891;
            const v3930 = stdlib.le(v866, v3894);
            if (v3930) {
              return;
              }
            else {
              const v3933 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
              const v3934 = v3933[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3923 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
            const v3924 = v3923[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v1034 = stdlib.sub(v1010, v798);
        ;
        const v1038 = undefined /* Remote */;
        const v1039 = await txn1.getOutput('internal', 'v1038', ctc13, v1038);
        const v1041 = v1039[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
        const v1046 = stdlib.add(v1034, v1041);
        const v1047 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041);
        stdlib.assert(v1047, {
          at: './src/contracts/auction.rsh:140:91:application',
          fs: ['at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
          msg: 'remote bill check',
          who: 'Bidder_bid'
          });
        null;
        const v1049 = [v864, v798];
        const v1050 = await txn1.getOutput('Bidder_bid', 'v1049', ctc14, v1049);
        if (v308) {
          stdlib.protect(ctc12, await interact.out(v999, v1050), {
            at: './src/contracts/auction.rsh:133:31:application',
            fs: ['at ./src/contracts/auction.rsh:133:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:31:function exp)', 'at ./src/contracts/auction.rsh:142:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:137:50:function exp)', 'at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
            msg: 'out',
            who: 'Bidder_bid'
            });
          }
        else {
          }
        
        const v3937 = v794;
        const v3938 = v864;
        const v3939 = false;
        const v3940 = v797;
        const v3941 = v1005;
        const v3943 = v805;
        const v3944 = v1046;
        const v3945 = stdlib.le(v866, v792);
        const v3946 = v3945 ? v797 : false;
        if (v3946) {
          const v3947 = stdlib.safeAdd(v866, v791);
          return;
          }
        else {
          const v3948 = undefined /* Remote */;
          const v3949 = await txn1.getOutput('internal', 'v3948', ctc13, v3948);
          const v3950 = v3949[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
          const v3951 = stdlib.add(v1046, v3950);
          const v3952 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3950);
          stdlib.assert(v3952, {
            at: './src/contracts/auction.rsh:194:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3953 = stdlib.gt(v1005, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
          if (v3953) {
            const v3954 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3985 = true;
            const v3986 = true;
            const v3988 = v805;
            const v3989 = v3951;
            const v3990 = stdlib.le(v866, v3954);
            if (v3990) {
              return;
              }
            else {
              const v3993 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
              const v3994 = v3993[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3983 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
            const v3984 = v3983[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_114': {
      const v1130 = v865[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn9(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn9 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn9 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_Contract;
  const ctc3 = stdlib.T_Tuple([]);
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
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
  
  
  const [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc4]);
  const v852 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:147:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:48:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to "runBidder_optIn0_114" (defined at: ./src/contracts/auction.rsh:147:30:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v856 = ['Bidder_optIn0_114', v852];
  
  const txn1 = await (ctc.sendrecv({
    args: [v734, v735, v737, v754, v759, v764, v770, v771, v772, v791, v792, v794, v795, v796, v797, v798, v805, v806, v824, v856],
    evt_cnt: 1,
    funcNum: 7,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn1;
      
      switch (v865[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v868 = v865[1];
          
          break;
          }
        case 'Bidder_bid0_114': {
          const v999 = v865[1];
          
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1130 = v865[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1141 = stdlib.add(v806, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1216 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
          if (v1216) {
            const v1220 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v754,
              tok: undefined /* Nothing */
              });
            const v1222 = stdlib.ge(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
            if (v1222) {
              const v1226 = stdlib.sub(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v734,
                tok: undefined /* Nothing */
                });
              null;
              const v1227 = true;
              const v1228 = await txn1.getOutput('Bidder_optIn', 'v1227', ctc7, v1227);
              
              const v4417 = v794;
              const v4418 = v795;
              const v4419 = v796;
              const v4420 = v797;
              const v4421 = v798;
              const v4423 = v805;
              const v4424 = v1226;
              const v4425 = stdlib.le(v866, v792);
              const v4426 = v4425 ? v797 : false;
              if (v4426) {
                const v4427 = stdlib.safeAdd(v866, v791);
                sim_r.isHalt = false;
                }
              else {
                const v4428 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v737,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4429 = await txn1.getOutput('internal', 'v4428', ctc13, v4428);
                const v4430 = v4429[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
                const v4431 = stdlib.add(v1226, v4430);
                null;
                const v4433 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
                if (v4433) {
                  const v4434 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4465 = true;
                  const v4466 = true;
                  const v4468 = v805;
                  const v4469 = v4431;
                  const v4470 = stdlib.le(v866, v4434);
                  if (v4470) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4473 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    const v4474 = v4473[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v795,
                      tok: v735
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v734,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v735
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4463 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  const v4464 = v4463[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v795,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              null;
              const v1234 = true;
              const v1235 = await txn1.getOutput('Bidder_optIn', 'v1234', ctc7, v1234);
              
              const v4477 = v794;
              const v4478 = v795;
              const v4479 = v796;
              const v4480 = v797;
              const v4481 = v798;
              const v4483 = v805;
              const v4484 = v1220;
              const v4485 = stdlib.le(v866, v792);
              const v4486 = v4485 ? v797 : false;
              if (v4486) {
                const v4487 = stdlib.safeAdd(v866, v791);
                sim_r.isHalt = false;
                }
              else {
                const v4488 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v737,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4489 = await txn1.getOutput('internal', 'v4488', ctc13, v4488);
                const v4490 = v4489[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
                const v4491 = stdlib.add(v1220, v4490);
                null;
                const v4493 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
                if (v4493) {
                  const v4494 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4525 = true;
                  const v4526 = true;
                  const v4528 = v805;
                  const v4529 = v4491;
                  const v4530 = stdlib.le(v866, v4494);
                  if (v4530) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4533 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    const v4534 = v4533[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v795,
                      tok: v735
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v734,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v735
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4523 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  const v4524 = v4523[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v795,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v1242 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
            if (v1242) {
              const v1246 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v734,
                tok: undefined /* Nothing */
                });
              null;
              const v1247 = true;
              const v1248 = await txn1.getOutput('Bidder_optIn', 'v1247', ctc7, v1247);
              
              const v4537 = v794;
              const v4538 = v795;
              const v4539 = v796;
              const v4540 = v797;
              const v4541 = v798;
              const v4543 = v805;
              const v4544 = v1246;
              const v4545 = stdlib.le(v866, v792);
              const v4546 = v4545 ? v797 : false;
              if (v4546) {
                const v4547 = stdlib.safeAdd(v866, v791);
                sim_r.isHalt = false;
                }
              else {
                const v4548 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v737,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4549 = await txn1.getOutput('internal', 'v4548', ctc13, v4548);
                const v4550 = v4549[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
                const v4551 = stdlib.add(v1246, v4550);
                null;
                const v4553 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
                if (v4553) {
                  const v4554 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4585 = true;
                  const v4586 = true;
                  const v4588 = v805;
                  const v4589 = v4551;
                  const v4590 = stdlib.le(v866, v4554);
                  if (v4590) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4593 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    const v4594 = v4593[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v795,
                      tok: v735
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v734,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v735
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4583 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  const v4584 = v4583[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v795,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              null;
              const v1254 = true;
              const v1255 = await txn1.getOutput('Bidder_optIn', 'v1254', ctc7, v1254);
              
              const v4597 = v794;
              const v4598 = v795;
              const v4599 = v796;
              const v4600 = v797;
              const v4601 = v798;
              const v4603 = v805;
              const v4604 = v1141;
              const v4605 = stdlib.le(v866, v792);
              const v4606 = v4605 ? v797 : false;
              if (v4606) {
                const v4607 = stdlib.safeAdd(v866, v791);
                sim_r.isHalt = false;
                }
              else {
                const v4608 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v737,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      boxes: [],
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4609 = await txn1.getOutput('internal', 'v4608', ctc13, v4608);
                const v4610 = v4609[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
                const v4611 = stdlib.add(v1141, v4610);
                null;
                const v4613 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
                if (v4613) {
                  const v4614 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4645 = true;
                  const v4646 = true;
                  const v4648 = v805;
                  const v4649 = v4611;
                  const v4650 = stdlib.le(v866, v4614);
                  if (v4650) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4653 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    const v4654 = v4653[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v795,
                      tok: v735
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v734,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v735
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4643 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  const v4644 = v4643[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v734,
                    tok: v735
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v795,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v735
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc4, ctc2, ctc5, ctc4, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn1;
  switch (v865[0]) {
    case 'Auctioneer_stopAuction0_114': {
      const v868 = v865[1];
      return;
      break;
      }
    case 'Bidder_bid0_114': {
      const v999 = v865[1];
      return;
      break;
      }
    case 'Bidder_optIn0_114': {
      const v1130 = v865[1];
      undefined /* setApiDetails */;
      const v1141 = stdlib.add(v806, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1216 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
      if (v1216) {
        const v1220 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1222 = stdlib.ge(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
        if (v1222) {
          const v1226 = stdlib.sub(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
          ;
          null;
          const v1227 = true;
          const v1228 = await txn1.getOutput('Bidder_optIn', 'v1227', ctc7, v1227);
          if (v308) {
            stdlib.protect(ctc12, await interact.out(v1130, v1228), {
              at: './src/contracts/auction.rsh:147:31:application',
              fs: ['at ./src/contracts/auction.rsh:147:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:31:function exp)', 'at ./src/contracts/auction.rsh:156:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:150:50:function exp)', 'at ./src/contracts/auction.rsh:150:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4417 = v794;
          const v4418 = v795;
          const v4419 = v796;
          const v4420 = v797;
          const v4421 = v798;
          const v4423 = v805;
          const v4424 = v1226;
          const v4425 = stdlib.le(v866, v792);
          const v4426 = v4425 ? v797 : false;
          if (v4426) {
            const v4427 = stdlib.safeAdd(v866, v791);
            return;
            }
          else {
            const v4428 = undefined /* Remote */;
            const v4429 = await txn1.getOutput('internal', 'v4428', ctc13, v4428);
            const v4430 = v4429[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
            const v4431 = stdlib.add(v1226, v4430);
            const v4432 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4430);
            stdlib.assert(v4432, {
              at: './src/contracts/auction.rsh:194:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4433 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
            if (v4433) {
              const v4434 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4465 = true;
              const v4466 = true;
              const v4468 = v805;
              const v4469 = v4431;
              const v4470 = stdlib.le(v866, v4434);
              if (v4470) {
                return;
                }
              else {
                const v4473 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                const v4474 = v4473[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4463 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              const v4464 = v4463[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          null;
          const v1234 = true;
          const v1235 = await txn1.getOutput('Bidder_optIn', 'v1234', ctc7, v1234);
          if (v308) {
            stdlib.protect(ctc12, await interact.out(v1130, v1235), {
              at: './src/contracts/auction.rsh:147:31:application',
              fs: ['at ./src/contracts/auction.rsh:147:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:31:function exp)', 'at ./src/contracts/auction.rsh:156:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:150:50:function exp)', 'at ./src/contracts/auction.rsh:150:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4477 = v794;
          const v4478 = v795;
          const v4479 = v796;
          const v4480 = v797;
          const v4481 = v798;
          const v4483 = v805;
          const v4484 = v1220;
          const v4485 = stdlib.le(v866, v792);
          const v4486 = v4485 ? v797 : false;
          if (v4486) {
            const v4487 = stdlib.safeAdd(v866, v791);
            return;
            }
          else {
            const v4488 = undefined /* Remote */;
            const v4489 = await txn1.getOutput('internal', 'v4488', ctc13, v4488);
            const v4490 = v4489[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
            const v4491 = stdlib.add(v1220, v4490);
            const v4492 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4490);
            stdlib.assert(v4492, {
              at: './src/contracts/auction.rsh:194:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4493 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
            if (v4493) {
              const v4494 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4525 = true;
              const v4526 = true;
              const v4528 = v805;
              const v4529 = v4491;
              const v4530 = stdlib.le(v866, v4494);
              if (v4530) {
                return;
                }
              else {
                const v4533 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                const v4534 = v4533[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4523 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              const v4524 = v4523[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
      else {
        const v1242 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
        if (v1242) {
          const v1246 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
          ;
          null;
          const v1247 = true;
          const v1248 = await txn1.getOutput('Bidder_optIn', 'v1247', ctc7, v1247);
          if (v308) {
            stdlib.protect(ctc12, await interact.out(v1130, v1248), {
              at: './src/contracts/auction.rsh:147:31:application',
              fs: ['at ./src/contracts/auction.rsh:147:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:31:function exp)', 'at ./src/contracts/auction.rsh:156:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:150:50:function exp)', 'at ./src/contracts/auction.rsh:150:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4537 = v794;
          const v4538 = v795;
          const v4539 = v796;
          const v4540 = v797;
          const v4541 = v798;
          const v4543 = v805;
          const v4544 = v1246;
          const v4545 = stdlib.le(v866, v792);
          const v4546 = v4545 ? v797 : false;
          if (v4546) {
            const v4547 = stdlib.safeAdd(v866, v791);
            return;
            }
          else {
            const v4548 = undefined /* Remote */;
            const v4549 = await txn1.getOutput('internal', 'v4548', ctc13, v4548);
            const v4550 = v4549[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
            const v4551 = stdlib.add(v1246, v4550);
            const v4552 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4550);
            stdlib.assert(v4552, {
              at: './src/contracts/auction.rsh:194:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4553 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
            if (v4553) {
              const v4554 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4585 = true;
              const v4586 = true;
              const v4588 = v805;
              const v4589 = v4551;
              const v4590 = stdlib.le(v866, v4554);
              if (v4590) {
                return;
                }
              else {
                const v4593 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                const v4594 = v4593[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4583 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              const v4584 = v4583[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          null;
          const v1254 = true;
          const v1255 = await txn1.getOutput('Bidder_optIn', 'v1254', ctc7, v1254);
          if (v308) {
            stdlib.protect(ctc12, await interact.out(v1130, v1255), {
              at: './src/contracts/auction.rsh:147:31:application',
              fs: ['at ./src/contracts/auction.rsh:147:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:147:31:function exp)', 'at ./src/contracts/auction.rsh:156:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:150:50:function exp)', 'at ./src/contracts/auction.rsh:150:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4597 = v794;
          const v4598 = v795;
          const v4599 = v796;
          const v4600 = v797;
          const v4601 = v798;
          const v4603 = v805;
          const v4604 = v1141;
          const v4605 = stdlib.le(v866, v792);
          const v4606 = v4605 ? v797 : false;
          if (v4606) {
            const v4607 = stdlib.safeAdd(v866, v791);
            return;
            }
          else {
            const v4608 = undefined /* Remote */;
            const v4609 = await txn1.getOutput('internal', 'v4608', ctc13, v4608);
            const v4610 = v4609[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
            const v4611 = stdlib.add(v1141, v4610);
            const v4612 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4610);
            stdlib.assert(v4612, {
              at: './src/contracts/auction.rsh:194:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4613 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
            if (v4613) {
              const v4614 = stdlib.safeAdd(v866, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4645 = true;
              const v4646 = true;
              const v4648 = v805;
              const v4649 = v4611;
              const v4650 = stdlib.le(v866, v4614);
              if (v4650) {
                return;
                }
              else {
                const v4653 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                const v4654 = v4653[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4643 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              const v4644 = v4643[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
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
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
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
    Auctioneer_acceptSale0_458: ctc11,
    Auctioneer_rejectSale0_458: ctc11
    });
  const ctc18 = stdlib.T_Tuple([ctc1, ctc1, ctc16]);
  const ctc19 = stdlib.T_Array(ctc18, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v711 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v712 = [v711];
  const v716 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v717 = v716.adminContract;
  const v718 = v716.deadline;
  const v719 = v716.description;
  const v720 = v716.owner;
  const v721 = v716.price;
  const v722 = v716.title;
  const v723 = v716.tokenId;
  
  const v733 = {
    deadline: v718,
    description: v719,
    owner: v720,
    price: v721,
    title: v722
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v723, v733, v717],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v735, v736, v737], secs: v739, time: v738, didSend: v44, from: v734 } = txn1;
      
      const v740 = v712[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0')];
      const v741 = stdlib.Array_set(v740, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'));
      const v742 = stdlib.Array_set(v712, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'), v741);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v735
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
  const {data: [v735, v736, v737], secs: v739, time: v738, didSend: v44, from: v734 } = txn1;
  const v740 = v712[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0')];
  const v741 = stdlib.Array_set(v740, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'));
  const v742 = stdlib.Array_set(v712, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:78:16:dot', stdlib.UInt_max, '0'), v741);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v734, v735, v736, v737, v742],
    evt_cnt: 0,
    funcNum: 1,
    lct: v738,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v735]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v746, time: v745, didSend: v51, from: v744 } = txn2;
      
      ;
      const v747 = v742[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0')];
      const v748 = v747[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0')];
      const v749 = stdlib.add(v748, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v751 = stdlib.Array_set(v747, '0', v749);
      const v752 = stdlib.Array_set(v742, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0'), v751);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v735
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc3, ctc5, ctc7, ctc0, ctc19],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v746, time: v745, didSend: v51, from: v744 } = txn2;
  ;
  const v747 = v742[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0')];
  const v748 = v747[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0')];
  const v749 = stdlib.add(v748, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v751 = stdlib.Array_set(v747, '0', v749);
  const v752 = stdlib.Array_set(v742, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:80:16:dot', stdlib.UInt_max, '0'), v751);
  ;
  const v753 = stdlib.addressEq(v734, v744);
  stdlib.assert(v753, {
    at: './src/contracts/auction.rsh:80:16:dot',
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
  const {data: [], secs: v756, time: v755, didSend: v55, from: v754 } = txn3;
  ;
  const v759 = [];
  const v760 = undefined /* Remote */;
  const v761 = await txn3.getOutput('internal', 'v760', ctc8, v760);
  const v763 = v761[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '0')];
  const v764 = v761[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:93:48:application', stdlib.UInt_max, '1')];
  const v769 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v763);
  stdlib.assert(v769, {
    at: './src/contracts/auction.rsh:93:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v770 = v755;
  const v771 = await ctc.getContractInfo();
  const v772 = v736.title;
  const v773 = v736.description;
  const v774 = v736.price;
  const v778 = {
    blockCreated: v755,
    contractInfo: v771,
    description: v773,
    id: v764,
    owner: v734,
    price: v774,
    title: v772,
    tokenId: v735
    };
  const v779 = undefined /* Remote */;
  const v780 = await txn3.getOutput('internal', 'v779', ctc10, v779);
  const v782 = v780[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:39:application', stdlib.UInt_max, '0')];
  const v787 = stdlib.add(v763, v782);
  const v788 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v782);
  stdlib.assert(v788, {
    at: './src/contracts/auction.rsh:109:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v791 = v736.deadline;
  const v792 = stdlib.safeAdd(v755, v791);
  null;
  const v793 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: v764,
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v794 = v793;
  let v795 = v734;
  let v796 = true;
  let v797 = true;
  let v798 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:119:25:decimal', stdlib.UInt_max, '0');
  let v799 = v755;
  let v805 = v752;
  let v806 = v787;
  
  let txn4 = txn3;
  while (await (async () => {
    const v815 = stdlib.le(v799, v792);
    const v816 = v815 ? v797 : false;
    
    return v816;})()) {
    const v824 = stdlib.safeAdd(v799, v791);
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 7,
      out_tys: [ctc13],
      timeoutAt: ['time', v824],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 0,
        funcNum: 8,
        out_tys: [],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1263, time: v1262, didSend: v416, from: v1261 } = txn6;
      ;
      const v1264 = stdlib.addressEq(v754, v1261);
      stdlib.assert(v1264, {
        at: './src/contracts/auction.rsh:179:39:dot',
        fs: ['at ./src/contracts/auction.rsh:178:73:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:178:73:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v1266 = {
        blockEnded: v1262,
        id: v764,
        lastBid: v798
        };
      const cv794 = v1266;
      const cv795 = v795;
      const cv796 = v796;
      const cv797 = v797;
      const cv798 = v798;
      const cv799 = v1262;
      const cv805 = v805;
      const cv806 = v806;
      
      v794 = cv794;
      v795 = cv795;
      v796 = cv796;
      v797 = cv797;
      v798 = cv798;
      v799 = cv799;
      v805 = cv805;
      v806 = cv806;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v865], secs: v867, time: v866, didSend: v308, from: v864 } = txn5;
      switch (v865[0]) {
        case 'Auctioneer_stopAuction0_114': {
          const v868 = v865[1];
          undefined /* setApiDetails */;
          ;
          null;
          const v882 = {
            blockEnded: v866,
            id: v764,
            lastBid: v798
            };
          await txn5.getOutput('Auctioneer_stopAuction', 'v882', ctc14, v882);
          const cv794 = v882;
          const cv795 = v795;
          const cv796 = v796;
          const cv797 = false;
          const cv798 = v798;
          const cv799 = v866;
          const cv805 = v805;
          const cv806 = v806;
          
          v794 = cv794;
          v795 = cv795;
          v796 = cv796;
          v797 = cv797;
          v798 = cv798;
          v799 = cv799;
          v805 = cv805;
          v806 = cv806;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Bidder_bid0_114': {
          const v999 = v865[1];
          undefined /* setApiDetails */;
          const v1005 = v999[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:133:30:spread', stdlib.UInt_max, '0')];
          const v1006 = stdlib.gt(v1005, v798);
          stdlib.assert(v1006, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/auction.rsh:134:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:133:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:133:49:function exp)', 'at ./src/contracts/auction.rsh:116:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:116:31:function exp)'],
            msg: 'Your bid is too low, please try again',
            who: 'Seller'
            });
          const v1010 = stdlib.add(v806, v1005);
          ;
          if (v796) {
            const v1062 = undefined /* Remote */;
            const v1063 = await txn5.getOutput('internal', 'v1062', ctc10, v1062);
            const v1065 = v1063[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
            const v1070 = stdlib.add(v1010, v1065);
            const v1071 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1065);
            stdlib.assert(v1071, {
              at: './src/contracts/auction.rsh:140:91:application',
              fs: ['at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'remote bill check',
              who: 'Seller'
              });
            null;
            const v1073 = [v864, v798];
            await txn5.getOutput('Bidder_bid', 'v1073', ctc15, v1073);
            const cv794 = v794;
            const cv795 = v864;
            const cv796 = false;
            const cv797 = v797;
            const cv798 = v1005;
            const cv799 = v866;
            const cv805 = v805;
            const cv806 = v1070;
            
            v794 = cv794;
            v795 = cv795;
            v796 = cv796;
            v797 = cv797;
            v798 = cv798;
            v799 = cv799;
            v805 = cv805;
            v806 = cv806;
            
            txn4 = txn5;
            continue;}
          else {
            const v1034 = stdlib.sub(v1010, v798);
            ;
            const v1038 = undefined /* Remote */;
            const v1039 = await txn5.getOutput('internal', 'v1038', ctc10, v1038);
            const v1041 = v1039[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:140:91:application', stdlib.UInt_max, '0')];
            const v1046 = stdlib.add(v1034, v1041);
            const v1047 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1041);
            stdlib.assert(v1047, {
              at: './src/contracts/auction.rsh:140:91:application',
              fs: ['at ./src/contracts/auction.rsh:137:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:50:function exp)'],
              msg: 'remote bill check',
              who: 'Seller'
              });
            null;
            const v1049 = [v864, v798];
            await txn5.getOutput('Bidder_bid', 'v1049', ctc15, v1049);
            const cv794 = v794;
            const cv795 = v864;
            const cv796 = false;
            const cv797 = v797;
            const cv798 = v1005;
            const cv799 = v866;
            const cv805 = v805;
            const cv806 = v1046;
            
            v794 = cv794;
            v795 = cv795;
            v796 = cv796;
            v797 = cv797;
            v798 = cv798;
            v799 = cv799;
            v805 = cv805;
            v806 = cv806;
            
            txn4 = txn5;
            continue;}
          break;
          }
        case 'Bidder_optIn0_114': {
          const v1130 = v865[1];
          undefined /* setApiDetails */;
          const v1141 = stdlib.add(v806, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          ;
          const v1216 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
          if (v1216) {
            const v1220 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:151:83:application', stdlib.UInt_max, '900000'));
            ;
            const v1222 = stdlib.ge(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
            if (v1222) {
              const v1226 = stdlib.sub(v1220, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
              ;
              null;
              const v1227 = true;
              await txn5.getOutput('Bidder_optIn', 'v1227', ctc16, v1227);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1226;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}
            else {
              null;
              const v1234 = true;
              await txn5.getOutput('Bidder_optIn', 'v1234', ctc16, v1234);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1220;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}}
          else {
            const v1242 = stdlib.ge(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
            if (v1242) {
              const v1246 = stdlib.sub(v1141, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:152:84:application', stdlib.UInt_max, '100000'));
              ;
              null;
              const v1247 = true;
              await txn5.getOutput('Bidder_optIn', 'v1247', ctc16, v1247);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1246;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}
            else {
              null;
              const v1254 = true;
              await txn5.getOutput('Bidder_optIn', 'v1254', ctc16, v1254);
              const cv794 = v794;
              const cv795 = v795;
              const cv796 = v796;
              const cv797 = v797;
              const cv798 = v798;
              const cv799 = v866;
              const cv805 = v805;
              const cv806 = v1141;
              
              v794 = cv794;
              v795 = cv795;
              v796 = cv796;
              v797 = cv797;
              v798 = cv798;
              v799 = cv799;
              v805 = cv805;
              v806 = cv806;
              
              txn4 = txn5;
              continue;}}
          break;
          }
        }}
    
    }
  const v1276 = undefined /* Remote */;
  const v1277 = await txn4.getOutput('internal', 'v1276', ctc10, v1276);
  const v1279 = v1277[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:194:37:application', stdlib.UInt_max, '0')];
  const v1284 = stdlib.add(v806, v1279);
  const v1285 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1279);
  stdlib.assert(v1285, {
    at: './src/contracts/auction.rsh:194:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1289 = stdlib.gt(v798, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:206:25:decimal', stdlib.UInt_max, '0'));
  if (v1289) {
    const v1291 = stdlib.safeAdd(v799, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    let v1292 = true;
    let v1293 = true;
    let v1294 = v799;
    let v1300 = v805;
    let v1301 = v1284;
    
    let txn5 = txn4;
    while (await (async () => {
      const v1308 = stdlib.le(v1294, v1291);
      const v1309 = v1308 ? v1293 : false;
      
      return v1309;})()) {
      const v1316 = stdlib.safeAdd(v1294, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
      const txn6 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 5,
        out_tys: [ctc17],
        timeoutAt: ['time', v1316],
        waitIfNotPresent: false
        }));
      if (txn6.didTimeout) {
        const txn7 = await (ctc.recv({
          didSend: false,
          evt_cnt: 0,
          funcNum: 6,
          out_tys: [],
          timeoutAt: undefined /* mto */,
          waitIfNotPresent: false
          }));
        const {data: [], secs: v1390, time: v1389, didSend: v621, from: v1388 } = txn7;
        ;
        const v1391 = stdlib.addressEq(v754, v1388);
        stdlib.assert(v1391, {
          at: './src/contracts/auction.rsh:236:39:dot',
          fs: ['at ./src/contracts/auction.rsh:235:61:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:235:61:function exp)'],
          msg: 'sender correct',
          who: 'Seller'
          });
        const cv1292 = v1292;
        const cv1293 = v1293;
        const cv1294 = v1389;
        const cv1300 = v1300;
        const cv1301 = v1301;
        
        v1292 = cv1292;
        v1293 = cv1293;
        v1294 = cv1294;
        v1300 = cv1300;
        v1301 = cv1301;
        
        txn5 = txn7;
        continue;
        }
      else {
        const {data: [v1341], secs: v1343, time: v1342, didSend: v583, from: v1340 } = txn6;
        switch (v1341[0]) {
          case 'Auctioneer_acceptSale0_458': {
            const v1344 = v1341[1];
            undefined /* setApiDetails */;
            ;
            const v1351 = true;
            await txn6.getOutput('Auctioneer_acceptSale', 'v1351', ctc16, v1351);
            const cv1292 = true;
            const cv1293 = false;
            const cv1294 = v1342;
            const cv1300 = v1300;
            const cv1301 = v1301;
            
            v1292 = cv1292;
            v1293 = cv1293;
            v1294 = cv1294;
            v1300 = cv1300;
            v1301 = cv1301;
            
            txn5 = txn6;
            continue;
            break;
            }
          case 'Auctioneer_rejectSale0_458': {
            const v1366 = v1341[1];
            undefined /* setApiDetails */;
            ;
            const v1381 = false;
            await txn6.getOutput('Auctioneer_rejectSale', 'v1381', ctc16, v1381);
            const cv1292 = false;
            const cv1293 = false;
            const cv1294 = v1342;
            const cv1300 = v1300;
            const cv1301 = v1301;
            
            v1292 = cv1292;
            v1293 = cv1293;
            v1294 = cv1294;
            v1300 = cv1300;
            v1301 = cv1301;
            
            txn5 = txn6;
            continue;
            break;
            }
          }}
      
      }
    if (v1292) {
      const v1394 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
      const v1395 = v1394[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:241:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }
    else {
      const v1416 = v1300[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
      const v1417 = v1416[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:251:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }}
  else {
    const v1438 = v805[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
    const v1439 = v1438[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:262:33:application', stdlib.UInt_max, '0')];
    ;
    ;
    return;
    }
  
  
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Auctioneer_acceptSale7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 7) {return _Auctioneer_rejectSale7(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '7')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Auctioneer_stopAuction9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Bidder_bid9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 9) {return _Bidder_optIn9(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '9')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`, `_reachp_0((uint64,uint64,(uint64,byte[80],address,uint64,byte[20]),uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_5((uint64,(byte,byte[0])))void`, `_reachp_6((uint64))void`, `_reachp_7((uint64,(byte,byte[8])))void`, `_reachp_8((uint64))void`],
    pure: [`live()byte`],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`, `_reachp_0((uint64,uint64,(uint64,byte[80],address,uint64,byte[20]),uint64))void`, `_reachp_1((uint64))void`, `_reachp_2((uint64))void`, `_reachp_5((uint64,(byte,byte[0])))void`, `_reachp_6((uint64))void`, `_reachp_7((uint64,(byte,byte[8])))void`, `_reachp_8((uint64))void`, `live()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `CCASAAGgjQYICQYHIKD3NhEywIQ9GrwBBAJ8hAEmBwAFYXBwSUQBAQTEa5ATAQAEB0BfPQTq9O6VMRhBByEoZEkiWzUBJVs1AicEZCpkUIINBAkwDfsECZqFoAQQLw2gBBVSA5YESWM97QR1DuQGBIET2zMEjECAugSXTSP6BN/ZIygE53RcUgTvr85DBPE66oo2GgCODQaYAFIAlQCoBl0GdwBCBo0GggZsAAEGowmvACEErzUPIQY0ARJEiApINA8iWzUQNA9XCAE1E4AEBRynmjQQFlA0E1CwNBCICaQyBjQSDEQ0EyJVjQIGkAaTQv++gAkAAAAAAAAAAAE1D0L/tCEJrzULIQQ0ARJEiAmBNAsiWzUMNAtXCAk1IYAEEtFEBTQMFlA0IVCwNAyICVMyBjQNDEQ0ISJVjQMGQwZGBklC/2s2GgEXNQslryo0CxZQUDULQv+vgBEAAAAAAAAAAAIAAAAAAAAAADULQv+XIzUPgAgAAAAAAAAFRzQPFlEHCFCwNA8WUQcINQQjIjIGNQ01ITUiNA00Dg40IRBBCBo0DSEKCDUSIzUhNCA0HxZQNB1QNBhQNBRQNBEWUDQOFlA0IhZRBwhQNCEWUQcIUDQMUDQLFlA0EhZQgUCvUCEGMgY1AjUBJwRLAVcAf2cqTFd/cGcoNAEWNAIWUGcxGSISRIgJbjQDQAAKgAQVH3x1NARQsCNDIjUPgAgAAAAAAAAFZTQPFlEHCFCwNA8WUQcINQQiIjIGNQ01ITUiQv9VgAS4o0qLNBsWUDQRFlCwNBsWMgYWUDQRFlA1C4AIAAAAAAAAA3I0C1CwNAs1BDQLIjIGNRA1EjUVNBA0Fg40EhBBBlw0EDQXCDUNIzUSNCA0HxZQNB4WUDQdUDQcUDQbFlA0GhZQNBkWUDQYUDQXFlA0FhZQNBVQNBRQNBMWUQcIUDQSFlEHCFA0ERZQNA9QNA4WUDQNFlAhBDIGQv8DNCEjW0k1ITQRDUQ0DjQhCDUNNCGICGE0E0EEkSk0HhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HrIYJwWyGjQbFrIaMQBJshyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAABCY0DFCwNAxJNQsiWzUMIjQMEkQnBjQbFlA0IRZQMQBQNBhQsDEANBEWUDULgAgAAAAAAAAEMTQLULA0CzUEMQAiNCEyBjQNNAwINQ41EDURNRM1FEL+1jQOIQsINQwhC4gHqDQMIQgPQQSHNAwhCAk1CyEINB2IBrQ0CyQPQQSyJDQgiAanKzQbFlAxAFCwIzUMgAgAAAAAAAAEyzQMFlEHCFCwNAwWUQcINQQyBjQLJAk1DjUQQv50NAEhBAxBBiY0ASEGEkSIBu8nBDUEMRkiEkRC/egxADUgNAsiWzUMNAslWzUfNAtXEJQ1FjQLgaQBWzUegARrH4XmNAwWUDQfFlA0FlA0HhZQsDQMiAYlIQmvSTULSVcAESWvXABcADUMJIgHDSI0HzIKiAYRNCA0HxZQNBZQNB4WUDQMUCEMr1AjMgZC/U4jNAESRElXACA1IEkhB1s1H0lXKJQ1FkkhDVs1HlfEETUMNAsXNQ2ABNUVGRQ0DRZQsDQNiAW2NAxXABE1CzQMNAtJIlsjCBZcAFwANQ0jNB8xFjQAIwhJNQAJRwM4FDIKEkQ4ECEOEkQ4EU8CEkQ4EhJENCAxABJENCA0HxZQNBZQNB4WUDQNUCEMr1AhDzIGQvy6MQA1HSEPNAESRElXACA1IEkhB1s1H0lXKJQ1FkkhDVs1HlfEETUNNAsXNQyABJdO9xc0DBZQsDQMiAUdKDUcKTQeFlADNQgyCng1CSgyCmA0CQkWNQqxIrIBIQWyEDQeshiABG3tvYCyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAAAvg0DFCwNAxJNQsiWzUMNAslWzUbIjQMEkQyBjUaMRg1GTQWV4AUNRgpNB4WUAM1CDIKeDUJKDIKYDQJCRY1CrEisgEhBbIQNB6yGIAEdbqs6LIaNBsWNBkWUDIGFlA0IFA0GFA0FlcIUFA0Fld4CFA0HxZQshqzMgpgNAkJNAoXCRa3AD5XBABQNQuACAAAAAAAAAMLNAtQsDQLSTUXIls1CyI0CxJENBYiWzUXMgY0Fwg1FoAEjw81BjQbFlA0IFCwNBsWJa9QJa9QNCAjIyIyBjQNNAw0Cwg1DjUPNRA1ETUSNRM1FDUVQvvdIQY0ARJEiARgNA8XNRCABHDt73o0EBZQsDQQiAPHMgY0Eg9ENB0xABJEMgY1DUL6yCEENAESRIgDuTQLFzUMgAQv2ukdNAwWULA0DIgDljIGNA0PRDQdMQASRDQbFjIGFlA0ERZQMgY1EDUVQvtuiANvJIgEbTYaATULQv0IiANgNhoBNQtC/W+IA1U2GgE1C0L9+IgDSjYaATUPQvl5iAM/NhoBNQ9C/1aIAzQ2GgE1C0L5tIgDKTYaATULQv9xIjE0EkSBAzE1EkQiMTYSRCIxNxJEiAMJge8BryIiQvplQvnuQvqTQvq6QvtWQvwXNBE0FIgC5ik0HhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HrIYJwWyGjQbFrIaMQBJshyyGrMyCmA0CQk0ChcJFrcAPlcEAFA1DIAIAAAAAAAABA40DFCwNAxJNQsiWzUMIjQMEkQnBjQbFlA0IRZQMQBQNBhQsDEANBEWUDULgAgAAAAAAAAEGTQLULA0CzUEMQAiNCEyBjQNNBEJNAwINQ41EDURNRM1FEL6OzQMJA9BAGokNCCIAi4rNBsWUDEAULAjNQuACAAAAAAAAATfNAsWUQcIULA0CxZRBwg1BDIGNAwkCTUONRBC+fsrNBsWUDEAULAjNQyACAAAAAAAAATSNAwWUQcIULA0DBZRBwg1BDIGNAs1DjUQQvnKKzQbFlAxAFCwIzULgAgAAAAAAAAE5jQLFlEHCFCwNAsWUQcINQQyBjQMNQ41EEL5mSk0HhZQAzUIMgp4NQkoMgpgNAkJFjUKsSKyASEFshA0HrIYgAQUiXiusho0FbIaszIKYDQJCTQKFwkWtwA+VwQAUDUSgAgAAAAAAAAE/DQSULA0Ekk1EyJbNRI0DjQSCDUTIjQSEkSABHh+db40GxZQNBEWUDQgUDQZFlA0GhZQNBhQsDQRIg1BABw0ECEKCDUOIyM0EDQPNBM1CzUMNQ01ITUiQvgONA9XABEiWzQfNCCIAPY0EzQUiADdIjQfMgoyCYgBqzEZgQUSRIgBxCIyCjIJiAHOQvhLNCJBADo0DFcAESJbNB80FIgAvjQLNCCIAKWABO6mmcQ0GFA0ERZQNCBQNBRQNB8WULAiNB8yCjIJiAFbQv+tNAxXABEiWzQfNCCIAIQ0CzQUiABrgASlT5rNNBhQNBEWUDQgUDQUUDQfFlCwIjQfMgoyCYgBIUL/czQBIQQSRIgAUyo1BEL52CKyASOyELIHsgiziSKyASEOshCyFLIRshKziUL5pUiJTAlJNQYyCYgADYkJSUH/7kk1BogA34mxQv/FIzUDiUkiEkw0AhIRRImxQv+/SVcAIDUgSSEHWzUfSYEoWzUeSVcwIDUdSUgoNRxJgVBbNRtJgVhbNRpJgWBbNRlJV2gUNRhJIRBbNRdJIRFbNRZJV4wYNRVJV6QgNRRJV8QBFzUTSVfFARc1EkmBxgFbNRFJV84RNQ9Jgd8BWzUOgecBWzUNiUlXACA1IEkhB1s1H0lXKCA1HUlXSBQ1GElXXCA1FEkhEFs1EUkhEVs1DklXjAEXNSJJV40BFzUhSVeOETUMSYGfAVs1C4GnAVs1EomxshVC/vcxFjQAIwhJNQAJRwI4BzIKEkQ4ECMSRDgIEkSJNAY0B0oPQf7mQv7uNAYINQaJsbIJQv63`,
  appApprovalMap: {
    0: `2`,
    1: `2`,
    10: `2`,
    100: `21`,
    1000: `515`,
    1001: `515`,
    1002: `515`,
    1003: `516`,
    1004: `516`,
    1005: `517`,
    1006: `518`,
    1007: `518`,
    1008: `518`,
    1009: `519`,
    101: `21`,
    1010: `520`,
    1011: `521`,
    1012: `521`,
    1013: `522`,
    1014: `523`,
    1015: `523`,
    1016: `523`,
    1017: `524`,
    1018: `524`,
    1019: `525`,
    102: `21`,
    1020: `525`,
    1021: `526`,
    1022: `526`,
    1023: `527`,
    1024: `528`,
    1025: `529`,
    1026: `529`,
    1027: `530`,
    1028: `530`,
    1029: `531`,
    103: `21`,
    1030: `531`,
    1031: `531`,
    1032: `533`,
    1033: `533`,
    1034: `534`,
    1035: `534`,
    1036: `535`,
    1037: `536`,
    1038: `536`,
    1039: `536`,
    104: `21`,
    1040: `537`,
    1041: `537`,
    1042: `538`,
    1043: `538`,
    1044: `539`,
    1045: `540`,
    1046: `543`,
    1047: `543`,
    1048: `543`,
    1049: `544`,
    105: `21`,
    1050: `544`,
    1051: `545`,
    1052: `545`,
    1053: `547`,
    1054: `547`,
    1055: `548`,
    1056: `549`,
    1057: `550`,
    1058: `552`,
    1059: `552`,
    106: `21`,
    1060: `552`,
    1061: `554`,
    1062: `554`,
    1063: `555`,
    1064: `555`,
    1065: `556`,
    1066: `556`,
    1067: `557`,
    1068: `558`,
    1069: `559`,
    107: `21`,
    1070: `559`,
    1071: `560`,
    1072: `560`,
    1073: `561`,
    1074: `562`,
    1075: `563`,
    1076: `563`,
    1077: `564`,
    1078: `564`,
    1079: `565`,
    108: `21`,
    1080: `565`,
    1081: `565`,
    1082: `566`,
    1083: `566`,
    1084: `567`,
    1085: `567`,
    1086: `568`,
    1087: `568`,
    1088: `568`,
    1089: `569`,
    109: `21`,
    1090: `570`,
    1091: `570`,
    1092: `571`,
    1093: `571`,
    1094: `571`,
    1095: `571`,
    1096: `571`,
    1097: `571`,
    1098: `572`,
    1099: `572`,
    11: `2`,
    110: `21`,
    1100: `573`,
    1101: `574`,
    1102: `575`,
    1103: `575`,
    1104: `576`,
    1105: `577`,
    1106: `578`,
    1107: `578`,
    1108: `579`,
    1109: `580`,
    111: `21`,
    1110: `580`,
    1111: `581`,
    1112: `582`,
    1113: `583`,
    1114: `585`,
    1115: `585`,
    1116: `586`,
    1117: `586`,
    1118: `586`,
    1119: `587`,
    112: `21`,
    1120: `587`,
    1121: `588`,
    1122: `589`,
    1123: `590`,
    1124: `590`,
    1125: `591`,
    1126: `592`,
    1127: `592`,
    1128: `592`,
    1129: `593`,
    113: `21`,
    1130: `594`,
    1131: `595`,
    1132: `595`,
    1133: `596`,
    1134: `596`,
    1135: `597`,
    1136: `597`,
    1137: `598`,
    1138: `599`,
    1139: `599`,
    114: `21`,
    1140: `599`,
    1141: `600`,
    1142: `602`,
    1143: `602`,
    1144: `603`,
    1145: `603`,
    1146: `604`,
    1147: `604`,
    1148: `604`,
    1149: `606`,
    115: `21`,
    1150: `606`,
    1151: `607`,
    1152: `607`,
    1153: `608`,
    1154: `609`,
    1155: `610`,
    1156: `610`,
    1157: `611`,
    1158: `612`,
    1159: `612`,
    116: `21`,
    1160: `613`,
    1161: `614`,
    1162: `615`,
    1163: `615`,
    1164: `616`,
    1165: `617`,
    1166: `617`,
    1167: `618`,
    1168: `619`,
    1169: `620`,
    117: `21`,
    1170: `621`,
    1171: `621`,
    1172: `622`,
    1173: `622`,
    1174: `622`,
    1175: `624`,
    1176: `625`,
    1177: `625`,
    1178: `626`,
    1179: `627`,
    118: `21`,
    1180: `629`,
    1181: `630`,
    1182: `630`,
    1183: `630`,
    1184: `631`,
    1185: `631`,
    1186: `632`,
    1187: `633`,
    1188: `633`,
    1189: `634`,
    119: `21`,
    1190: `635`,
    1191: `635`,
    1192: `636`,
    1193: `637`,
    1194: `637`,
    1195: `637`,
    1196: `638`,
    1197: `638`,
    1198: `639`,
    1199: `640`,
    12: `2`,
    120: `21`,
    1200: `640`,
    1201: `641`,
    1202: `642`,
    1203: `642`,
    1204: `643`,
    1205: `643`,
    1206: `643`,
    1207: `644`,
    1208: `644`,
    1209: `645`,
    121: `21`,
    1210: `645`,
    1211: `646`,
    1212: `647`,
    1213: `647`,
    1214: `648`,
    1215: `648`,
    1216: `648`,
    1217: `648`,
    1218: `648`,
    1219: `648`,
    122: `21`,
    1220: `649`,
    1221: `649`,
    1222: `650`,
    1223: `651`,
    1224: `652`,
    1225: `654`,
    1226: `654`,
    1227: `655`,
    1228: `655`,
    1229: `655`,
    123: `21`,
    1230: `656`,
    1231: `656`,
    1232: `657`,
    1233: `657`,
    1234: `657`,
    1235: `658`,
    1236: `658`,
    1237: `659`,
    1238: `659`,
    1239: `660`,
    124: `21`,
    1240: `660`,
    1241: `661`,
    1242: `662`,
    1243: `663`,
    1244: `664`,
    1245: `665`,
    1246: `666`,
    1247: `667`,
    1248: `667`,
    1249: `668`,
    125: `21`,
    1250: `668`,
    1251: `669`,
    1252: `669`,
    1253: `670`,
    1254: `671`,
    1255: `671`,
    1256: `674`,
    1257: `674`,
    1258: `675`,
    1259: `675`,
    126: `21`,
    1260: `676`,
    1261: `677`,
    1262: `678`,
    1263: `679`,
    1264: `679`,
    1265: `680`,
    1266: `681`,
    1267: `681`,
    1268: `682`,
    1269: `682`,
    127: `21`,
    1270: `683`,
    1271: `683`,
    1272: `684`,
    1273: `685`,
    1274: `686`,
    1275: `686`,
    1276: `687`,
    1277: `687`,
    1278: `688`,
    1279: `689`,
    128: `21`,
    1280: `690`,
    1281: `690`,
    1282: `691`,
    1283: `691`,
    1284: `692`,
    1285: `693`,
    1286: `694`,
    1287: `694`,
    1288: `695`,
    1289: `696`,
    129: `21`,
    1290: `699`,
    1291: `699`,
    1292: `700`,
    1293: `700`,
    1294: `701`,
    1295: `702`,
    1296: `706`,
    1297: `706`,
    1298: `707`,
    1299: `707`,
    13: `2`,
    130: `21`,
    1300: `708`,
    1301: `709`,
    1302: `710`,
    1303: `710`,
    1304: `711`,
    1305: `712`,
    1306: `712`,
    1307: `713`,
    1308: `714`,
    1309: `715`,
    131: `21`,
    1310: `715`,
    1311: `716`,
    1312: `717`,
    1313: `717`,
    1314: `718`,
    1315: `719`,
    1316: `720`,
    1317: `720`,
    1318: `721`,
    1319: `721`,
    132: `21`,
    1320: `722`,
    1321: `722`,
    1322: `722`,
    1323: `724`,
    1324: `724`,
    1325: `725`,
    1326: `725`,
    1327: `726`,
    1328: `726`,
    1329: `727`,
    133: `21`,
    1330: `727`,
    1331: `728`,
    1332: `729`,
    1333: `731`,
    1334: `732`,
    1335: `732`,
    1336: `732`,
    1337: `733`,
    1338: `733`,
    1339: `734`,
    134: `21`,
    1340: `735`,
    1341: `735`,
    1342: `736`,
    1343: `737`,
    1344: `737`,
    1345: `738`,
    1346: `739`,
    1347: `739`,
    1348: `739`,
    1349: `740`,
    135: `21`,
    1350: `740`,
    1351: `741`,
    1352: `742`,
    1353: `742`,
    1354: `743`,
    1355: `744`,
    1356: `744`,
    1357: `745`,
    1358: `745`,
    1359: `745`,
    136: `21`,
    1360: `746`,
    1361: `746`,
    1362: `747`,
    1363: `747`,
    1364: `748`,
    1365: `749`,
    1366: `749`,
    1367: `750`,
    1368: `750`,
    1369: `750`,
    137: `21`,
    1370: `750`,
    1371: `750`,
    1372: `750`,
    1373: `751`,
    1374: `751`,
    1375: `752`,
    1376: `753`,
    1377: `754`,
    1378: `756`,
    1379: `756`,
    138: `21`,
    1380: `757`,
    1381: `757`,
    1382: `757`,
    1383: `758`,
    1384: `759`,
    1385: `759`,
    1386: `760`,
    1387: `761`,
    1388: `761`,
    1389: `762`,
    139: `21`,
    1390: `763`,
    1391: `764`,
    1392: `765`,
    1393: `765`,
    1394: `766`,
    1395: `766`,
    1396: `767`,
    1397: `768`,
    1398: `768`,
    1399: `769`,
    14: `2`,
    140: `21`,
    1400: `770`,
    1401: `770`,
    1402: `771`,
    1403: `772`,
    1404: `772`,
    1405: `773`,
    1406: `774`,
    1407: `775`,
    1408: `775`,
    1409: `776`,
    141: `21`,
    1410: `777`,
    1411: `778`,
    1412: `778`,
    1413: `779`,
    1414: `779`,
    1415: `780`,
    1416: `780`,
    1417: `781`,
    1418: `781`,
    1419: `783`,
    142: `21`,
    1420: `783`,
    1421: `784`,
    1422: `784`,
    1423: `784`,
    1424: `784`,
    1425: `784`,
    1426: `784`,
    1427: `785`,
    1428: `785`,
    1429: `786`,
    143: `21`,
    1430: `789`,
    1431: `789`,
    1432: `790`,
    1433: `791`,
    1434: `791`,
    1435: `792`,
    1436: `793`,
    1437: `793`,
    1438: `794`,
    1439: `795`,
    144: `21`,
    1440: `796`,
    1441: `797`,
    1442: `797`,
    1443: `797`,
    1444: `798`,
    1445: `798`,
    1446: `798`,
    1447: `799`,
    1448: `800`,
    1449: `800`,
    145: `21`,
    1450: `801`,
    1451: `801`,
    1452: `801`,
    1453: `801`,
    1454: `801`,
    1455: `801`,
    1456: `801`,
    1457: `801`,
    1458: `801`,
    1459: `801`,
    146: `22`,
    1460: `802`,
    1461: `802`,
    1462: `803`,
    1463: `804`,
    1464: `805`,
    1465: `805`,
    1466: `806`,
    1467: `807`,
    1468: `807`,
    1469: `808`,
    147: `22`,
    1470: `809`,
    1471: `810`,
    1472: `810`,
    1473: `811`,
    1474: `811`,
    1475: `812`,
    1476: `813`,
    1477: `814`,
    1478: `814`,
    1479: `815`,
    148: `22`,
    1480: `816`,
    1481: `816`,
    1482: `817`,
    1483: `818`,
    1484: `821`,
    1485: `821`,
    1486: `822`,
    1487: `822`,
    1488: `823`,
    1489: `823`,
    149: `23`,
    1490: `824`,
    1491: `824`,
    1492: `825`,
    1493: `825`,
    1494: `826`,
    1495: `826`,
    1496: `826`,
    1497: `827`,
    1498: `827`,
    1499: `828`,
    15: `2`,
    150: `23`,
    1500: `829`,
    1501: `829`,
    1502: `830`,
    1503: `831`,
    1504: `832`,
    1505: `833`,
    1506: `833`,
    1507: `834`,
    1508: `834`,
    1509: `835`,
    151: `23`,
    1510: `836`,
    1511: `836`,
    1512: `837`,
    1513: `838`,
    1514: `838`,
    1515: `839`,
    1516: `840`,
    1517: `840`,
    1518: `841`,
    1519: `842`,
    152: `23`,
    1520: `843`,
    1521: `843`,
    1522: `844`,
    1523: `845`,
    1524: `846`,
    1525: `846`,
    1526: `847`,
    1527: `847`,
    1528: `848`,
    1529: `848`,
    153: `23`,
    1530: `849`,
    1531: `849`,
    1532: `850`,
    1533: `850`,
    1534: `851`,
    1535: `851`,
    1536: `851`,
    1537: `851`,
    1538: `851`,
    1539: `851`,
    154: `23`,
    1540: `852`,
    1541: `852`,
    1542: `853`,
    1543: `853`,
    1544: `854`,
    1545: `855`,
    1546: `855`,
    1547: `856`,
    1548: `857`,
    1549: `858`,
    155: `23`,
    1550: `858`,
    1551: `859`,
    1552: `860`,
    1553: `861`,
    1554: `861`,
    1555: `862`,
    1556: `863`,
    1557: `863`,
    1558: `864`,
    1559: `865`,
    156: `23`,
    1560: `865`,
    1561: `866`,
    1562: `866`,
    1563: `866`,
    1564: `867`,
    1565: `868`,
    1566: `868`,
    1567: `869`,
    1568: `869`,
    1569: `869`,
    157: `23`,
    1570: `870`,
    1571: `871`,
    1572: `871`,
    1573: `872`,
    1574: `873`,
    1575: `874`,
    1576: `874`,
    1577: `875`,
    1578: `878`,
    1579: `878`,
    158: `23`,
    1580: `879`,
    1581: `880`,
    1582: `880`,
    1583: `881`,
    1584: `882`,
    1585: `882`,
    1586: `883`,
    1587: `884`,
    1588: `885`,
    1589: `886`,
    159: `23`,
    1590: `886`,
    1591: `886`,
    1592: `887`,
    1593: `887`,
    1594: `887`,
    1595: `888`,
    1596: `889`,
    1597: `889`,
    1598: `890`,
    1599: `890`,
    16: `2`,
    160: `23`,
    1600: `890`,
    1601: `890`,
    1602: `890`,
    1603: `890`,
    1604: `890`,
    1605: `890`,
    1606: `890`,
    1607: `890`,
    1608: `891`,
    1609: `891`,
    161: `23`,
    1610: `892`,
    1611: `893`,
    1612: `894`,
    1613: `894`,
    1614: `895`,
    1615: `896`,
    1616: `896`,
    1617: `897`,
    1618: `898`,
    1619: `899`,
    162: `23`,
    1620: `899`,
    1621: `900`,
    1622: `901`,
    1623: `901`,
    1624: `902`,
    1625: `903`,
    1626: `906`,
    1627: `906`,
    1628: `907`,
    1629: `908`,
    163: `23`,
    1630: `909`,
    1631: `909`,
    1632: `910`,
    1633: `910`,
    1634: `911`,
    1635: `911`,
    1636: `912`,
    1637: `913`,
    1638: `913`,
    1639: `914`,
    164: `23`,
    1640: `914`,
    1641: `914`,
    1642: `914`,
    1643: `914`,
    1644: `914`,
    1645: `915`,
    1646: `915`,
    1647: `916`,
    1648: `917`,
    1649: `918`,
    165: `23`,
    1650: `918`,
    1651: `919`,
    1652: `920`,
    1653: `922`,
    1654: `922`,
    1655: `923`,
    1656: `924`,
    1657: `925`,
    1658: `926`,
    1659: `927`,
    166: `23`,
    1660: `928`,
    1661: `929`,
    1662: `930`,
    1663: `930`,
    1664: `931`,
    1665: `932`,
    1666: `933`,
    1667: `934`,
    1668: `934`,
    1669: `935`,
    167: `23`,
    1670: `935`,
    1671: `936`,
    1672: `936`,
    1673: `937`,
    1674: `937`,
    1675: `938`,
    1676: `939`,
    1677: `939`,
    1678: `940`,
    1679: `940`,
    168: `23`,
    1680: `941`,
    1681: `941`,
    1682: `942`,
    1683: `942`,
    1684: `943`,
    1685: `943`,
    1686: `944`,
    1687: `944`,
    1688: `945`,
    1689: `945`,
    169: `23`,
    1690: `946`,
    1691: `946`,
    1692: `947`,
    1693: `947`,
    1694: `947`,
    1695: `949`,
    1696: `949`,
    1697: `950`,
    1698: `950`,
    1699: `951`,
    17: `2`,
    170: `23`,
    1700: `952`,
    1701: `953`,
    1702: `953`,
    1703: `953`,
    1704: `954`,
    1705: `954`,
    1706: `955`,
    1707: `956`,
    1708: `956`,
    1709: `957`,
    171: `23`,
    1710: `957`,
    1711: `957`,
    1712: `957`,
    1713: `957`,
    1714: `957`,
    1715: `958`,
    1716: `958`,
    1717: `959`,
    1718: `960`,
    1719: `961`,
    172: `23`,
    1720: `963`,
    1721: `963`,
    1722: `964`,
    1723: `964`,
    1724: `964`,
    1725: `965`,
    1726: `965`,
    1727: `966`,
    1728: `966`,
    1729: `967`,
    173: `23`,
    1730: `968`,
    1731: `969`,
    1732: `969`,
    1733: `970`,
    1734: `970`,
    1735: `971`,
    1736: `972`,
    1737: `976`,
    1738: `976`,
    1739: `977`,
    174: `23`,
    1740: `977`,
    1741: `978`,
    1742: `978`,
    1743: `978`,
    1744: `980`,
    1745: `980`,
    1746: `981`,
    1747: `981`,
    1748: `982`,
    1749: `983`,
    175: `23`,
    1750: `984`,
    1751: `984`,
    1752: `984`,
    1753: `985`,
    1754: `985`,
    1755: `986`,
    1756: `987`,
    1757: `987`,
    1758: `988`,
    1759: `988`,
    176: `23`,
    1760: `988`,
    1761: `988`,
    1762: `988`,
    1763: `988`,
    1764: `989`,
    1765: `989`,
    1766: `990`,
    1767: `991`,
    1768: `992`,
    1769: `994`,
    177: `25`,
    1770: `994`,
    1771: `995`,
    1772: `995`,
    1773: `995`,
    1774: `996`,
    1775: `996`,
    1776: `997`,
    1777: `997`,
    1778: `998`,
    1779: `999`,
    178: `28`,
    1780: `1000`,
    1781: `1000`,
    1782: `1001`,
    1783: `1001`,
    1784: `1002`,
    1785: `1003`,
    1786: `1007`,
    1787: `1007`,
    1788: `1008`,
    1789: `1009`,
    179: `28`,
    1790: `1009`,
    1791: `1010`,
    1792: `1011`,
    1793: `1012`,
    1794: `1012`,
    1795: `1013`,
    1796: `1014`,
    1797: `1015`,
    1798: `1015`,
    1799: `1016`,
    18: `2`,
    180: `29`,
    1800: `1016`,
    1801: `1017`,
    1802: `1017`,
    1803: `1018`,
    1804: `1018`,
    1805: `1018`,
    1806: `1020`,
    1807: `1020`,
    1808: `1020`,
    1809: `1021`,
    181: `30`,
    1810: `1022`,
    1811: `1022`,
    1812: `1022`,
    1813: `1023`,
    1814: `1023`,
    1815: `1023`,
    1816: `1024`,
    1817: `1024`,
    1818: `1025`,
    1819: `1025`,
    182: `30`,
    1820: `1025`,
    1821: `1027`,
    1822: `1027`,
    1823: `1027`,
    1824: `1028`,
    1825: `1028`,
    1826: `1028`,
    1827: `1029`,
    1828: `1029`,
    1829: `1030`,
    183: `32`,
    1830: `1030`,
    1831: `1030`,
    1832: `1032`,
    1833: `1032`,
    1834: `1032`,
    1835: `1033`,
    1836: `1033`,
    1837: `1033`,
    1838: `1034`,
    1839: `1034`,
    184: `32`,
    1840: `1035`,
    1841: `1035`,
    1842: `1035`,
    1843: `1037`,
    1844: `1037`,
    1845: `1037`,
    1846: `1038`,
    1847: `1038`,
    1848: `1038`,
    1849: `1039`,
    185: `33`,
    1850: `1039`,
    1851: `1040`,
    1852: `1040`,
    1853: `1040`,
    1854: `1042`,
    1855: `1042`,
    1856: `1042`,
    1857: `1043`,
    1858: `1043`,
    1859: `1043`,
    186: `33`,
    1860: `1044`,
    1861: `1044`,
    1862: `1045`,
    1863: `1045`,
    1864: `1045`,
    1865: `1047`,
    1866: `1047`,
    1867: `1047`,
    1868: `1048`,
    1869: `1048`,
    187: `34`,
    1870: `1048`,
    1871: `1049`,
    1872: `1049`,
    1873: `1050`,
    1874: `1050`,
    1875: `1050`,
    1876: `1052`,
    1877: `1052`,
    1878: `1052`,
    1879: `1053`,
    188: `35`,
    1880: `1053`,
    1881: `1053`,
    1882: `1054`,
    1883: `1054`,
    1884: `1055`,
    1885: `1055`,
    1886: `1055`,
    1887: `1057`,
    1888: `1058`,
    1889: `1058`,
    189: `36`,
    1890: `1059`,
    1891: `1060`,
    1892: `1061`,
    1893: `1061`,
    1894: `1062`,
    1895: `1062`,
    1896: `1063`,
    1897: `1064`,
    1898: `1065`,
    1899: `1066`,
    19: `2`,
    190: `36`,
    1900: `1066`,
    1901: `1067`,
    1902: `1068`,
    1903: `1069`,
    1904: `1070`,
    1905: `1070`,
    1906: `1071`,
    1907: `1072`,
    1908: `1073`,
    1909: `1073`,
    191: `36`,
    1910: `1073`,
    1911: `1074`,
    1912: `1074`,
    1913: `1074`,
    1914: `1075`,
    1915: `1076`,
    1916: `1077`,
    1917: `1078`,
    1918: `1078`,
    1919: `1078`,
    192: `37`,
    1920: `1080`,
    1921: `1080`,
    1922: `1080`,
    1923: `1082`,
    1924: `1082`,
    1925: `1082`,
    1926: `1084`,
    1927: `1084`,
    1928: `1084`,
    1929: `1086`,
    193: `37`,
    1930: `1086`,
    1931: `1086`,
    1932: `1088`,
    1933: `1088`,
    1934: `1088`,
    1935: `1090`,
    1936: `1090`,
    1937: `1092`,
    1938: `1092`,
    1939: `1093`,
    194: `38`,
    1940: `1093`,
    1941: `1093`,
    1942: `1094`,
    1943: `1095`,
    1944: `1095`,
    1945: `1096`,
    1946: `1097`,
    1947: `1098`,
    1948: `1099`,
    1949: `1099`,
    195: `39`,
    1950: `1100`,
    1951: `1100`,
    1952: `1101`,
    1953: `1102`,
    1954: `1102`,
    1955: `1103`,
    1956: `1104`,
    1957: `1104`,
    1958: `1105`,
    1959: `1106`,
    196: `40`,
    1960: `1106`,
    1961: `1107`,
    1962: `1108`,
    1963: `1109`,
    1964: `1109`,
    1965: `1110`,
    1966: `1111`,
    1967: `1112`,
    1968: `1112`,
    1969: `1113`,
    197: `40`,
    1970: `1113`,
    1971: `1114`,
    1972: `1114`,
    1973: `1115`,
    1974: `1115`,
    1975: `1117`,
    1976: `1117`,
    1977: `1118`,
    1978: `1118`,
    1979: `1119`,
    198: `41`,
    1980: `1119`,
    1981: `1120`,
    1982: `1120`,
    1983: `1121`,
    1984: `1122`,
    1985: `1122`,
    1986: `1123`,
    1987: `1123`,
    1988: `1124`,
    1989: `1125`,
    199: `41`,
    1990: `1125`,
    1991: `1126`,
    1992: `1126`,
    1993: `1127`,
    1994: `1131`,
    1995: `1131`,
    1996: `1132`,
    1997: `1133`,
    1998: `1133`,
    1999: `1134`,
    2: `2`,
    20: `2`,
    200: `42`,
    2000: `1135`,
    2001: `1135`,
    2002: `1136`,
    2003: `1137`,
    2004: `1138`,
    2005: `1139`,
    2006: `1139`,
    2007: `1139`,
    2008: `1140`,
    2009: `1140`,
    201: `42`,
    2010: `1140`,
    2011: `1141`,
    2012: `1142`,
    2013: `1142`,
    2014: `1143`,
    2015: `1143`,
    2016: `1143`,
    2017: `1143`,
    2018: `1143`,
    2019: `1143`,
    202: `42`,
    2020: `1143`,
    2021: `1143`,
    2022: `1143`,
    2023: `1143`,
    2024: `1144`,
    2025: `1144`,
    2026: `1145`,
    2027: `1146`,
    2028: `1147`,
    2029: `1147`,
    203: `43`,
    2030: `1148`,
    2031: `1149`,
    2032: `1149`,
    2033: `1150`,
    2034: `1151`,
    2035: `1152`,
    2036: `1152`,
    2037: `1153`,
    2038: `1154`,
    2039: `1154`,
    204: `43`,
    2040: `1155`,
    2041: `1156`,
    2042: `1160`,
    2043: `1160`,
    2044: `1161`,
    2045: `1161`,
    2046: `1162`,
    2047: `1163`,
    2048: `1164`,
    2049: `1164`,
    205: `44`,
    2050: `1165`,
    2051: `1166`,
    2052: `1167`,
    2053: `1167`,
    2054: `1168`,
    2055: `1169`,
    2056: `1169`,
    2057: `1170`,
    2058: `1171`,
    2059: `1173`,
    206: `44`,
    2060: `1173`,
    2061: `1174`,
    2062: `1174`,
    2063: `1175`,
    2064: `1176`,
    2065: `1177`,
    2066: `1177`,
    2067: `1178`,
    2068: `1178`,
    2069: `1178`,
    207: `44`,
    2070: `1178`,
    2071: `1178`,
    2072: `1178`,
    2073: `1178`,
    2074: `1178`,
    2075: `1178`,
    2076: `1178`,
    2077: `1179`,
    2078: `1179`,
    2079: `1180`,
    208: `44`,
    2080: `1181`,
    2081: `1182`,
    2082: `1182`,
    2083: `1183`,
    2084: `1183`,
    2085: `1184`,
    2086: `1184`,
    2087: `1185`,
    2088: `1186`,
    2089: `1186`,
    209: `44`,
    2090: `1187`,
    2091: `1187`,
    2092: `1188`,
    2093: `1188`,
    2094: `1189`,
    2095: `1189`,
    2096: `1190`,
    2097: `1191`,
    2098: `1191`,
    2099: `1192`,
    21: `2`,
    210: `44`,
    2100: `1193`,
    2101: `1193`,
    2102: `1194`,
    2103: `1194`,
    2104: `1195`,
    2105: `1195`,
    2106: `1196`,
    2107: `1196`,
    2108: `1197`,
    2109: `1197`,
    211: `45`,
    2110: `1198`,
    2111: `1198`,
    2112: `1198`,
    2113: `1200`,
    2114: `1200`,
    2115: `1201`,
    2116: `1202`,
    2117: `1203`,
    2118: `1203`,
    2119: `1203`,
    212: `45`,
    2120: `1204`,
    2121: `1206`,
    2122: `1206`,
    2123: `1207`,
    2124: `1207`,
    2125: `1207`,
    2126: `1208`,
    2127: `1209`,
    2128: `1209`,
    2129: `1210`,
    213: `46`,
    2130: `1211`,
    2131: `1212`,
    2132: `1212`,
    2133: `1213`,
    2134: `1214`,
    2135: `1216`,
    2136: `1217`,
    2137: `1217`,
    2138: `1218`,
    2139: `1218`,
    214: `47`,
    2140: `1218`,
    2141: `1218`,
    2142: `1218`,
    2143: `1218`,
    2144: `1218`,
    2145: `1218`,
    2146: `1218`,
    2147: `1218`,
    2148: `1219`,
    2149: `1219`,
    215: `48`,
    2150: `1220`,
    2151: `1221`,
    2152: `1221`,
    2153: `1221`,
    2154: `1222`,
    2155: `1223`,
    2156: `1224`,
    2157: `1224`,
    2158: `1225`,
    2159: `1226`,
    216: `48`,
    2160: `1226`,
    2161: `1226`,
    2162: `1227`,
    2163: `1227`,
    2164: `1228`,
    2165: `1228`,
    2166: `1229`,
    2167: `1229`,
    2168: `1230`,
    2169: `1231`,
    217: `49`,
    2170: `1232`,
    2171: `1232`,
    2172: `1233`,
    2173: `1233`,
    2174: `1234`,
    2175: `1234`,
    2176: `1234`,
    2177: `1236`,
    2178: `1237`,
    2179: `1237`,
    218: `50`,
    2180: `1238`,
    2181: `1239`,
    2182: `1240`,
    2183: `1240`,
    2184: `1241`,
    2185: `1242`,
    2186: `1244`,
    2187: `1245`,
    2188: `1245`,
    2189: `1246`,
    219: `52`,
    2190: `1246`,
    2191: `1246`,
    2192: `1246`,
    2193: `1246`,
    2194: `1246`,
    2195: `1246`,
    2196: `1246`,
    2197: `1246`,
    2198: `1246`,
    2199: `1247`,
    22: `2`,
    220: `52`,
    2200: `1247`,
    2201: `1248`,
    2202: `1249`,
    2203: `1249`,
    2204: `1249`,
    2205: `1250`,
    2206: `1251`,
    2207: `1252`,
    2208: `1252`,
    2209: `1253`,
    221: `53`,
    2210: `1254`,
    2211: `1254`,
    2212: `1254`,
    2213: `1255`,
    2214: `1255`,
    2215: `1256`,
    2216: `1256`,
    2217: `1257`,
    2218: `1257`,
    2219: `1258`,
    222: `53`,
    2220: `1258`,
    2221: `1259`,
    2222: `1259`,
    2223: `1260`,
    2224: `1260`,
    2225: `1260`,
    2226: `1262`,
    2227: `1263`,
    2228: `1263`,
    2229: `1264`,
    223: `53`,
    2230: `1265`,
    2231: `1266`,
    2232: `1266`,
    2233: `1267`,
    2234: `1268`,
    2235: `1270`,
    2236: `1271`,
    2237: `1271`,
    2238: `1272`,
    2239: `1272`,
    224: `54`,
    2240: `1272`,
    2241: `1272`,
    2242: `1272`,
    2243: `1272`,
    2244: `1272`,
    2245: `1272`,
    2246: `1272`,
    2247: `1272`,
    2248: `1273`,
    2249: `1273`,
    225: `54`,
    2250: `1274`,
    2251: `1275`,
    2252: `1275`,
    2253: `1275`,
    2254: `1276`,
    2255: `1277`,
    2256: `1278`,
    2257: `1278`,
    2258: `1279`,
    2259: `1280`,
    226: `55`,
    2260: `1280`,
    2261: `1280`,
    2262: `1281`,
    2263: `1281`,
    2264: `1282`,
    2265: `1282`,
    2266: `1283`,
    2267: `1283`,
    2268: `1284`,
    2269: `1284`,
    227: `55`,
    2270: `1285`,
    2271: `1285`,
    2272: `1286`,
    2273: `1286`,
    2274: `1286`,
    2275: `1288`,
    2276: `1289`,
    2277: `1289`,
    2278: `1290`,
    2279: `1291`,
    228: `56`,
    2280: `1292`,
    2281: `1293`,
    2282: `1293`,
    2283: `1294`,
    2284: `1294`,
    2285: `1295`,
    2286: `1296`,
    2287: `1296`,
    2288: `1297`,
    2289: `1298`,
    229: `57`,
    2290: `1298`,
    2291: `1299`,
    2292: `1300`,
    2293: `1300`,
    2294: `1301`,
    2295: `1302`,
    2296: `1303`,
    2297: `1303`,
    2298: `1304`,
    2299: `1305`,
    23: `2`,
    230: `58`,
    2300: `1306`,
    2301: `1306`,
    2302: `1307`,
    2303: `1307`,
    2304: `1308`,
    2305: `1308`,
    2306: `1309`,
    2307: `1309`,
    2308: `1311`,
    2309: `1311`,
    231: `58`,
    2310: `1312`,
    2311: `1312`,
    2312: `1312`,
    2313: `1312`,
    2314: `1312`,
    2315: `1312`,
    2316: `1313`,
    2317: `1313`,
    2318: `1314`,
    2319: `1314`,
    232: `59`,
    2320: `1315`,
    2321: `1315`,
    2322: `1316`,
    2323: `1319`,
    2324: `1319`,
    2325: `1320`,
    2326: `1321`,
    2327: `1321`,
    2328: `1322`,
    2329: `1323`,
    233: `60`,
    2330: `1323`,
    2331: `1324`,
    2332: `1325`,
    2333: `1326`,
    2334: `1327`,
    2335: `1327`,
    2336: `1327`,
    2337: `1328`,
    2338: `1328`,
    2339: `1328`,
    234: `61`,
    2340: `1329`,
    2341: `1330`,
    2342: `1330`,
    2343: `1331`,
    2344: `1331`,
    2345: `1331`,
    2346: `1331`,
    2347: `1331`,
    2348: `1331`,
    2349: `1331`,
    235: `61`,
    2350: `1331`,
    2351: `1331`,
    2352: `1331`,
    2353: `1332`,
    2354: `1332`,
    2355: `1333`,
    2356: `1334`,
    2357: `1335`,
    2358: `1335`,
    2359: `1336`,
    236: `61`,
    2360: `1337`,
    2361: `1337`,
    2362: `1338`,
    2363: `1339`,
    2364: `1340`,
    2365: `1340`,
    2366: `1341`,
    2367: `1341`,
    2368: `1342`,
    2369: `1342`,
    237: `61`,
    2370: `1343`,
    2371: `1344`,
    2372: `1344`,
    2373: `1345`,
    2374: `1346`,
    2375: `1346`,
    2376: `1347`,
    2377: `1348`,
    2378: `1351`,
    2379: `1351`,
    238: `61`,
    2380: `1351`,
    2381: `1351`,
    2382: `1351`,
    2383: `1351`,
    2384: `1352`,
    2385: `1352`,
    2386: `1353`,
    2387: `1354`,
    2388: `1355`,
    2389: `1355`,
    239: `61`,
    2390: `1356`,
    2391: `1357`,
    2392: `1358`,
    2393: `1358`,
    2394: `1359`,
    2395: `1360`,
    2396: `1360`,
    2397: `1361`,
    2398: `1362`,
    2399: `1363`,
    24: `2`,
    240: `62`,
    2400: `1363`,
    2401: `1364`,
    2402: `1365`,
    2403: `1366`,
    2404: `1366`,
    2405: `1367`,
    2406: `1368`,
    2407: `1370`,
    2408: `1370`,
    2409: `1371`,
    241: `62`,
    2410: `1372`,
    2411: `1373`,
    2412: `1373`,
    2413: `1373`,
    2414: `1374`,
    2415: `1374`,
    2416: `1375`,
    2417: `1375`,
    2418: `1376`,
    2419: `1377`,
    242: `62`,
    2420: `1377`,
    2421: `1378`,
    2422: `1379`,
    2423: `1380`,
    2424: `1380`,
    2425: `1381`,
    2426: `1381`,
    2427: `1382`,
    2428: `1382`,
    2429: `1383`,
    243: `65`,
    2430: `1383`,
    2431: `1384`,
    2432: `1384`,
    2433: `1385`,
    2434: `1385`,
    2435: `1386`,
    2436: `1386`,
    2437: `1387`,
    2438: `1387`,
    2439: `1388`,
    244: `65`,
    2440: `1388`,
    2441: `1388`,
    2442: `1390`,
    2443: `1390`,
    2444: `1391`,
    2445: `1391`,
    2446: `1391`,
    2447: `1392`,
    2448: `1393`,
    2449: `1395`,
    245: `65`,
    2450: `1395`,
    2451: `1397`,
    2452: `1397`,
    2453: `1398`,
    2454: `1398`,
    2455: `1398`,
    2456: `1399`,
    2457: `1399`,
    2458: `1401`,
    2459: `1401`,
    246: `65`,
    2460: `1402`,
    2461: `1402`,
    2462: `1402`,
    2463: `1404`,
    2464: `1405`,
    2465: `1405`,
    2466: `1406`,
    2467: `1406`,
    2468: `1407`,
    2469: `1407`,
    247: `65`,
    2470: `1408`,
    2471: `1408`,
    2472: `1408`,
    2473: `1410`,
    2474: `1410`,
    2475: `1411`,
    2476: `1411`,
    2477: `1412`,
    2478: `1413`,
    2479: `1415`,
    248: `65`,
    2480: `1415`,
    2481: `1415`,
    2482: `1417`,
    2483: `1418`,
    2484: `1418`,
    2485: `1419`,
    2486: `1419`,
    2487: `1420`,
    2488: `1420`,
    2489: `1420`,
    249: `65`,
    2490: `1421`,
    2491: `1421`,
    2492: `1421`,
    2493: `1423`,
    2494: `1423`,
    2495: `1424`,
    2496: `1424`,
    2497: `1424`,
    2498: `1425`,
    2499: `1425`,
    25: `2`,
    250: `65`,
    2500: `1426`,
    2501: `1426`,
    2502: `1426`,
    2503: `1427`,
    2504: `1428`,
    2505: `1430`,
    2506: `1430`,
    2507: `1432`,
    2508: `1432`,
    2509: `1433`,
    251: `65`,
    2510: `1433`,
    2511: `1433`,
    2512: `1434`,
    2513: `1434`,
    2514: `1436`,
    2515: `1436`,
    2516: `1437`,
    2517: `1437`,
    2518: `1437`,
    2519: `1438`,
    252: `65`,
    2520: `1438`,
    2521: `1438`,
    2522: `1438`,
    2523: `1438`,
    2524: `1438`,
    2525: `1439`,
    2526: `1439`,
    2527: `1440`,
    2528: `1441`,
    2529: `1441`,
    253: `65`,
    2530: `1442`,
    2531: `1443`,
    2532: `1444`,
    2533: `1444`,
    2534: `1445`,
    2535: `1446`,
    2536: `1446`,
    2537: `1447`,
    2538: `1448`,
    2539: `1448`,
    254: `66`,
    2540: `1449`,
    2541: `1450`,
    2542: `1451`,
    2543: `1454`,
    2544: `1455`,
    2545: `1455`,
    2546: `1456`,
    2547: `1456`,
    2548: `1457`,
    2549: `1457`,
    255: `66`,
    2550: `1458`,
    2551: `1458`,
    2552: `1458`,
    2553: `1459`,
    2554: `1459`,
    2555: `1459`,
    2556: `1461`,
    2557: `1461`,
    2558: `1462`,
    2559: `1462`,
    256: `67`,
    2560: `1462`,
    2561: `1463`,
    2562: `1464`,
    2563: `1466`,
    2564: `1466`,
    2565: `1468`,
    2566: `1468`,
    2567: `1469`,
    2568: `1469`,
    2569: `1469`,
    257: `67`,
    2570: `1470`,
    2571: `1470`,
    2572: `1472`,
    2573: `1472`,
    2574: `1473`,
    2575: `1473`,
    2576: `1473`,
    2577: `1474`,
    2578: `1474`,
    2579: `1474`,
    258: `67`,
    2580: `1474`,
    2581: `1474`,
    2582: `1474`,
    2583: `1475`,
    2584: `1475`,
    2585: `1476`,
    2586: `1477`,
    2587: `1477`,
    2588: `1478`,
    2589: `1479`,
    259: `70`,
    2590: `1480`,
    2591: `1480`,
    2592: `1481`,
    2593: `1482`,
    2594: `1482`,
    2595: `1483`,
    2596: `1484`,
    2597: `1484`,
    2598: `1485`,
    2599: `1486`,
    26: `2`,
    260: `70`,
    2600: `1487`,
    2601: `1490`,
    2602: `1491`,
    2603: `1491`,
    2604: `1492`,
    2605: `1492`,
    2606: `1493`,
    2607: `1493`,
    2608: `1494`,
    2609: `1494`,
    261: `71`,
    2610: `1494`,
    2611: `1495`,
    2612: `1495`,
    2613: `1495`,
    2614: `1497`,
    2615: `1497`,
    2616: `1498`,
    2617: `1498`,
    2618: `1499`,
    2619: `1500`,
    262: `72`,
    2620: `1503`,
    2621: `1503`,
    2622: `1503`,
    2623: `1504`,
    2624: `1505`,
    2625: `1505`,
    2626: `1506`,
    2627: `1506`,
    2628: `1506`,
    2629: `1508`,
    263: `72`,
    2630: `1509`,
    2631: `1509`,
    2632: `1510`,
    2633: `1511`,
    2634: `1511`,
    2635: `1512`,
    2636: `1512`,
    2637: `1513`,
    2638: `1513`,
    2639: `1514`,
    264: `74`,
    2640: `1515`,
    2641: `1517`,
    2642: `1518`,
    2643: `1518`,
    2644: `1519`,
    2645: `1519`,
    2646: `1520`,
    2647: `1520`,
    2648: `1521`,
    2649: `1521`,
    265: `74`,
    2650: `1522`,
    2651: `1522`,
    2652: `1523`,
    2653: `1523`,
    2654: `1524`,
    2655: `1525`,
    2656: `1527`,
    2657: `1527`,
    2658: `1527`,
    2659: `1529`,
    266: `75`,
    2660: `1530`,
    2661: `1532`,
    2662: `1533`,
    2663: `1534`,
    2664: `1535`,
    2665: `1535`,
    2666: `1536`,
    2667: `1536`,
    2668: `1537`,
    2669: `1537`,
    267: `75`,
    2670: `1537`,
    2671: `1538`,
    2672: `1540`,
    2673: `1541`,
    2674: `1542`,
    2675: `1542`,
    2676: `1542`,
    2677: `1543`,
    2678: `1544`,
    2679: `1544`,
    268: `76`,
    2680: `1545`,
    2681: `1545`,
    2682: `1545`,
    2683: `1546`,
    2684: `1548`,
    2685: `1549`,
    2686: `1549`,
    2687: `1549`,
    2688: `1551`,
    2689: `1552`,
    269: `77`,
    2690: `1552`,
    2691: `1553`,
    2692: `1555`,
    2693: `1556`,
    2694: `1557`,
    2695: `1558`,
    2696: `1559`,
    2697: `1559`,
    2698: `1560`,
    2699: `1561`,
    27: `2`,
    270: `78`,
    2700: `1562`,
    2701: `1563`,
    2702: `1565`,
    2703: `1566`,
    2704: `1566`,
    2705: `1566`,
    2706: `1568`,
    2707: `1569`,
    2708: `1569`,
    2709: `1569`,
    271: `78`,
    2710: `1570`,
    2711: `1570`,
    2712: `1571`,
    2713: `1572`,
    2714: `1572`,
    2715: `1573`,
    2716: `1574`,
    2717: `1574`,
    2718: `1575`,
    2719: `1576`,
    272: `78`,
    2720: `1576`,
    2721: `1577`,
    2722: `1578`,
    2723: `1578`,
    2724: `1579`,
    2725: `1580`,
    2726: `1580`,
    2727: `1580`,
    2728: `1581`,
    2729: `1581`,
    273: `79`,
    2730: `1582`,
    2731: `1583`,
    2732: `1584`,
    2733: `1585`,
    2734: `1585`,
    2735: `1586`,
    2736: `1587`,
    2737: `1587`,
    2738: `1588`,
    2739: `1589`,
    274: `79`,
    2740: `1589`,
    2741: `1590`,
    2742: `1591`,
    2743: `1591`,
    2744: `1592`,
    2745: `1593`,
    2746: `1593`,
    2747: `1594`,
    2748: `1595`,
    2749: `1595`,
    275: `80`,
    2750: `1596`,
    2751: `1597`,
    2752: `1597`,
    2753: `1598`,
    2754: `1599`,
    2755: `1599`,
    2756: `1599`,
    2757: `1600`,
    2758: `1600`,
    2759: `1601`,
    276: `81`,
    2760: `1602`,
    2761: `1602`,
    2762: `1603`,
    2763: `1604`,
    2764: `1604`,
    2765: `1605`,
    2766: `1606`,
    2767: `1606`,
    2768: `1607`,
    2769: `1608`,
    277: `82`,
    2770: `1608`,
    2771: `1609`,
    2772: `1610`,
    2773: `1610`,
    2774: `1610`,
    2775: `1611`,
    2776: `1611`,
    2777: `1612`,
    2778: `1613`,
    2779: `1613`,
    278: `82`,
    2780: `1613`,
    2781: `1614`,
    2782: `1614`,
    2783: `1615`,
    2784: `1616`,
    2785: `1616`,
    2786: `1616`,
    2787: `1617`,
    2788: `1618`,
    2789: `1618`,
    279: `83`,
    2790: `1619`,
    2791: `1620`,
    2792: `1620`,
    2793: `1620`,
    2794: `1621`,
    2795: `1622`,
    2796: `1622`,
    2797: `1623`,
    2798: `1624`,
    2799: `1624`,
    28: `2`,
    280: `83`,
    2800: `1624`,
    2801: `1625`,
    2802: `1626`,
    2803: `1626`,
    2804: `1627`,
    2805: `1628`,
    2806: `1628`,
    2807: `1628`,
    2808: `1629`,
    2809: `1629`,
    281: `84`,
    2810: `1630`,
    2811: `1631`,
    2812: `1631`,
    2813: `1631`,
    2814: `1632`,
    2815: `1633`,
    2816: `1633`,
    2817: `1634`,
    2818: `1634`,
    2819: `1634`,
    282: `84`,
    2820: `1635`,
    2821: `1636`,
    2822: `1636`,
    2823: `1637`,
    2824: `1639`,
    2825: `1640`,
    2826: `1640`,
    2827: `1640`,
    2828: `1641`,
    2829: `1641`,
    283: `84`,
    2830: `1642`,
    2831: `1643`,
    2832: `1643`,
    2833: `1644`,
    2834: `1645`,
    2835: `1645`,
    2836: `1646`,
    2837: `1647`,
    2838: `1647`,
    2839: `1647`,
    284: `85`,
    2840: `1648`,
    2841: `1648`,
    2842: `1649`,
    2843: `1650`,
    2844: `1650`,
    2845: `1650`,
    2846: `1651`,
    2847: `1651`,
    2848: `1652`,
    2849: `1653`,
    285: `85`,
    2850: `1653`,
    2851: `1653`,
    2852: `1654`,
    2853: `1654`,
    2854: `1655`,
    2855: `1656`,
    2856: `1656`,
    2857: `1657`,
    2858: `1658`,
    2859: `1658`,
    286: `86`,
    2860: `1659`,
    2861: `1660`,
    2862: `1660`,
    2863: `1661`,
    2864: `1662`,
    2865: `1662`,
    2866: `1663`,
    2867: `1664`,
    2868: `1664`,
    2869: `1664`,
    287: `86`,
    2870: `1665`,
    2871: `1666`,
    2872: `1666`,
    2873: `1667`,
    2874: `1668`,
    2875: `1668`,
    2876: `1668`,
    2877: `1669`,
    2878: `1670`,
    2879: `1670`,
    288: `86`,
    2880: `1671`,
    2881: `1672`,
    2882: `1672`,
    2883: `1672`,
    2884: `1673`,
    2885: `1673`,
    2886: `1674`,
    2887: `1675`,
    2888: `1675`,
    2889: `1675`,
    289: `86`,
    2890: `1676`,
    2891: `1677`,
    2892: `1677`,
    2893: `1678`,
    2894: `1678`,
    2895: `1678`,
    2896: `1679`,
    2897: `1680`,
    2898: `1680`,
    2899: `1681`,
    29: `2`,
    290: `86`,
    2900: `1683`,
    2901: `1684`,
    2902: `1684`,
    2903: `1685`,
    2904: `1685`,
    2905: `1685`,
    2906: `1688`,
    2907: `1688`,
    2908: `1689`,
    2909: `1689`,
    291: `86`,
    2910: `1690`,
    2911: `1691`,
    2912: `1692`,
    2913: `1693`,
    2914: `1693`,
    2915: `1694`,
    2916: `1695`,
    2917: `1695`,
    2918: `1696`,
    2919: `1696`,
    292: `87`,
    2920: `1697`,
    2921: `1697`,
    2922: `1698`,
    2923: `1699`,
    2924: `1700`,
    2925: `1700`,
    2926: `1701`,
    2927: `1702`,
    2928: `1703`,
    2929: `1704`,
    293: `87`,
    2930: `1704`,
    2931: `1705`,
    2932: `1706`,
    2933: `1707`,
    2934: `1709`,
    2935: `1709`,
    2936: `1710`,
    2937: `1710`,
    2938: `1711`,
    2939: `1712`,
    294: `88`,
    2940: `1713`,
    2941: `1713`,
    2942: `1713`,
    2943: `1714`,
    2944: `1714`,
    2945: `1714`,
    2946: `1716`,
    2947: `1716`,
    2948: `1717`,
    2949: `1718`,
    295: `89`,
    2950: `1718`,
    2951: `1719`,
    2952: `1721`,
    2953: `1722`,
    2954: `1722`,
    2955: `1723`,
    296: `90`,
    297: `90`,
    298: `91`,
    299: `92`,
    3: `2`,
    30: `2`,
    300: `94`,
    301: `94`,
    302: `95`,
    303: `95`,
    304: `95`,
    305: `96`,
    306: `96`,
    307: `97`,
    308: `97`,
    309: `98`,
    31: `2`,
    310: `99`,
    311: `100`,
    312: `100`,
    313: `101`,
    314: `102`,
    315: `103`,
    316: `103`,
    317: `103`,
    318: `103`,
    319: `103`,
    32: `2`,
    320: `103`,
    321: `103`,
    322: `103`,
    323: `104`,
    324: `104`,
    325: `104`,
    326: `106`,
    327: `106`,
    328: `106`,
    329: `107`,
    33: `2`,
    330: `108`,
    331: `108`,
    332: `110`,
    333: `111`,
    334: `112`,
    335: `113`,
    336: `113`,
    337: `114`,
    338: `115`,
    339: `116`,
    34: `2`,
    340: `117`,
    341: `117`,
    342: `118`,
    343: `118`,
    344: `118`,
    345: `121`,
    346: `121`,
    347: `121`,
    348: `121`,
    349: `121`,
    35: `2`,
    350: `121`,
    351: `121`,
    352: `121`,
    353: `121`,
    354: `121`,
    355: `121`,
    356: `121`,
    357: `121`,
    358: `121`,
    359: `121`,
    36: `2`,
    360: `121`,
    361: `121`,
    362: `121`,
    363: `121`,
    364: `122`,
    365: `122`,
    366: `123`,
    367: `123`,
    368: `123`,
    369: `125`,
    37: `2`,
    370: `126`,
    371: `126`,
    372: `127`,
    373: `127`,
    374: `127`,
    375: `127`,
    376: `127`,
    377: `127`,
    378: `127`,
    379: `127`,
    38: `2`,
    380: `127`,
    381: `127`,
    382: `128`,
    383: `128`,
    384: `129`,
    385: `130`,
    386: `130`,
    387: `130`,
    388: `131`,
    389: `132`,
    39: `2`,
    390: `133`,
    391: `133`,
    392: `134`,
    393: `135`,
    394: `135`,
    395: `135`,
    396: `136`,
    397: `136`,
    398: `137`,
    399: `138`,
    4: `2`,
    40: `2`,
    400: `139`,
    401: `139`,
    402: `140`,
    403: `140`,
    404: `141`,
    405: `141`,
    406: `142`,
    407: `142`,
    408: `144`,
    409: `144`,
    41: `2`,
    410: `145`,
    411: `145`,
    412: `146`,
    413: `147`,
    414: `147`,
    415: `148`,
    416: `149`,
    417: `149`,
    418: `149`,
    419: `150`,
    42: `2`,
    420: `150`,
    421: `151`,
    422: `151`,
    423: `152`,
    424: `153`,
    425: `153`,
    426: `154`,
    427: `155`,
    428: `155`,
    429: `157`,
    43: `2`,
    430: `157`,
    431: `158`,
    432: `158`,
    433: `159`,
    434: `160`,
    435: `161`,
    436: `161`,
    437: `162`,
    438: `163`,
    439: `163`,
    44: `2`,
    440: `164`,
    441: `165`,
    442: `165`,
    443: `166`,
    444: `167`,
    445: `167`,
    446: `168`,
    447: `169`,
    448: `170`,
    449: `170`,
    45: `2`,
    450: `171`,
    451: `172`,
    452: `173`,
    453: `173`,
    454: `174`,
    455: `175`,
    456: `175`,
    457: `175`,
    458: `176`,
    459: `177`,
    46: `2`,
    460: `177`,
    461: `178`,
    462: `179`,
    463: `179`,
    464: `179`,
    465: `180`,
    466: `181`,
    467: `181`,
    468: `182`,
    469: `183`,
    47: `2`,
    470: `183`,
    471: `184`,
    472: `185`,
    473: `186`,
    474: `186`,
    475: `187`,
    476: `188`,
    477: `189`,
    478: `189`,
    479: `190`,
    48: `2`,
    480: `191`,
    481: `192`,
    482: `192`,
    483: `193`,
    484: `193`,
    485: `195`,
    486: `195`,
    487: `196`,
    488: `196`,
    489: `197`,
    49: `2`,
    490: `197`,
    491: `198`,
    492: `198`,
    493: `199`,
    494: `199`,
    495: `199`,
    496: `200`,
    497: `201`,
    498: `202`,
    499: `203`,
    5: `2`,
    50: `2`,
    500: `203`,
    501: `203`,
    502: `204`,
    503: `205`,
    504: `206`,
    505: `206`,
    506: `207`,
    507: `208`,
    508: `208`,
    509: `209`,
    51: `2`,
    510: `210`,
    511: `211`,
    512: `212`,
    513: `212`,
    514: `213`,
    515: `214`,
    516: `215`,
    517: `217`,
    518: `217`,
    519: `217`,
    52: `2`,
    520: `219`,
    521: `219`,
    522: `220`,
    523: `220`,
    524: `220`,
    525: `222`,
    526: `222`,
    527: `222`,
    528: `222`,
    529: `222`,
    53: `2`,
    530: `222`,
    531: `223`,
    532: `223`,
    533: `224`,
    534: `225`,
    535: `227`,
    536: `228`,
    537: `230`,
    538: `231`,
    539: `231`,
    54: `2`,
    540: `232`,
    541: `232`,
    542: `232`,
    543: `232`,
    544: `232`,
    545: `232`,
    546: `232`,
    547: `232`,
    548: `232`,
    549: `232`,
    55: `2`,
    550: `233`,
    551: `233`,
    552: `234`,
    553: `235`,
    554: `235`,
    555: `235`,
    556: `236`,
    557: `237`,
    558: `238`,
    559: `238`,
    56: `2`,
    560: `239`,
    561: `240`,
    562: `240`,
    563: `240`,
    564: `241`,
    565: `241`,
    566: `242`,
    567: `243`,
    568: `244`,
    569: `244`,
    57: `4`,
    570: `245`,
    571: `245`,
    572: `246`,
    573: `246`,
    574: `247`,
    575: `247`,
    576: `248`,
    577: `248`,
    578: `248`,
    579: `250`,
    58: `4`,
    580: `250`,
    581: `250`,
    582: `250`,
    583: `250`,
    584: `250`,
    585: `251`,
    586: `251`,
    587: `252`,
    588: `253`,
    589: `254`,
    59: `5`,
    590: `254`,
    591: `255`,
    592: `256`,
    593: `257`,
    594: `259`,
    595: `259`,
    596: `260`,
    597: `261`,
    598: `261`,
    599: `262`,
    6: `2`,
    60: `5`,
    600: `263`,
    601: `264`,
    602: `264`,
    603: `265`,
    604: `266`,
    605: `267`,
    606: `267`,
    607: `268`,
    608: `268`,
    609: `268`,
    61: `5`,
    610: `268`,
    611: `268`,
    612: `268`,
    613: `268`,
    614: `268`,
    615: `268`,
    616: `268`,
    617: `269`,
    618: `269`,
    619: `270`,
    62: `6`,
    620: `271`,
    621: `272`,
    622: `272`,
    623: `273`,
    624: `273`,
    625: `274`,
    626: `274`,
    627: `275`,
    628: `276`,
    629: `276`,
    63: `7`,
    630: `277`,
    631: `277`,
    632: `278`,
    633: `278`,
    634: `279`,
    635: `279`,
    636: `281`,
    637: `281`,
    638: `282`,
    639: `282`,
    64: `8`,
    640: `283`,
    641: `284`,
    642: `284`,
    643: `285`,
    644: `286`,
    645: `286`,
    646: `286`,
    647: `287`,
    648: `287`,
    649: `288`,
    65: `9`,
    650: `288`,
    651: `289`,
    652: `290`,
    653: `290`,
    654: `291`,
    655: `292`,
    656: `292`,
    657: `294`,
    658: `294`,
    659: `295`,
    66: `10`,
    660: `295`,
    661: `296`,
    662: `297`,
    663: `298`,
    664: `298`,
    665: `299`,
    666: `300`,
    667: `301`,
    668: `301`,
    669: `302`,
    67: `11`,
    670: `303`,
    671: `303`,
    672: `304`,
    673: `305`,
    674: `305`,
    675: `306`,
    676: `307`,
    677: `308`,
    678: `308`,
    679: `309`,
    68: `11`,
    680: `310`,
    681: `311`,
    682: `311`,
    683: `312`,
    684: `313`,
    685: `314`,
    686: `314`,
    687: `315`,
    688: `316`,
    689: `316`,
    69: `12`,
    690: `317`,
    691: `318`,
    692: `319`,
    693: `319`,
    694: `320`,
    695: `321`,
    696: `322`,
    697: `322`,
    698: `323`,
    699: `324`,
    7: `2`,
    70: `13`,
    700: `324`,
    701: `325`,
    702: `326`,
    703: `326`,
    704: `327`,
    705: `328`,
    706: `328`,
    707: `328`,
    708: `329`,
    709: `330`,
    71: `14`,
    710: `330`,
    711: `331`,
    712: `332`,
    713: `332`,
    714: `332`,
    715: `333`,
    716: `334`,
    717: `334`,
    718: `335`,
    719: `336`,
    72: `14`,
    720: `337`,
    721: `337`,
    722: `338`,
    723: `339`,
    724: `339`,
    725: `340`,
    726: `341`,
    727: `342`,
    728: `342`,
    729: `343`,
    73: `15`,
    730: `344`,
    731: `345`,
    732: `345`,
    733: `346`,
    734: `346`,
    735: `347`,
    736: `347`,
    737: `347`,
    738: `349`,
    739: `349`,
    74: `15`,
    740: `350`,
    741: `351`,
    742: `352`,
    743: `353`,
    744: `353`,
    745: `354`,
    746: `354`,
    747: `355`,
    748: `356`,
    749: `363`,
    75: `16`,
    750: `363`,
    751: `364`,
    752: `364`,
    753: `365`,
    754: `366`,
    755: `366`,
    756: `367`,
    757: `367`,
    758: `368`,
    759: `368`,
    76: `17`,
    760: `368`,
    761: `371`,
    762: `371`,
    763: `372`,
    764: `372`,
    765: `372`,
    766: `373`,
    767: `374`,
    768: `374`,
    769: `375`,
    77: `18`,
    770: `376`,
    771: `377`,
    772: `378`,
    773: `378`,
    774: `379`,
    775: `379`,
    776: `380`,
    777: `381`,
    778: `381`,
    779: `382`,
    78: `19`,
    780: `383`,
    781: `383`,
    782: `384`,
    783: `385`,
    784: `385`,
    785: `386`,
    786: `387`,
    787: `388`,
    788: `388`,
    789: `389`,
    79: `21`,
    790: `390`,
    791: `391`,
    792: `391`,
    793: `392`,
    794: `392`,
    795: `393`,
    796: `393`,
    797: `394`,
    798: `394`,
    799: `396`,
    8: `2`,
    80: `21`,
    800: `396`,
    801: `397`,
    802: `397`,
    803: `398`,
    804: `398`,
    805: `399`,
    806: `399`,
    807: `400`,
    808: `401`,
    809: `401`,
    81: `21`,
    810: `402`,
    811: `402`,
    812: `403`,
    813: `404`,
    814: `404`,
    815: `405`,
    816: `405`,
    817: `406`,
    818: `410`,
    819: `410`,
    82: `21`,
    820: `411`,
    821: `412`,
    822: `412`,
    823: `413`,
    824: `414`,
    825: `414`,
    826: `415`,
    827: `416`,
    828: `417`,
    829: `418`,
    83: `21`,
    830: `418`,
    831: `418`,
    832: `419`,
    833: `419`,
    834: `419`,
    835: `420`,
    836: `421`,
    837: `421`,
    838: `422`,
    839: `422`,
    84: `21`,
    840: `422`,
    841: `422`,
    842: `422`,
    843: `422`,
    844: `422`,
    845: `422`,
    846: `422`,
    847: `422`,
    848: `423`,
    849: `423`,
    85: `21`,
    850: `424`,
    851: `425`,
    852: `426`,
    853: `426`,
    854: `427`,
    855: `428`,
    856: `428`,
    857: `429`,
    858: `430`,
    859: `431`,
    86: `21`,
    860: `431`,
    861: `432`,
    862: `433`,
    863: `433`,
    864: `434`,
    865: `435`,
    866: `439`,
    867: `439`,
    868: `440`,
    869: `440`,
    87: `21`,
    870: `441`,
    871: `442`,
    872: `443`,
    873: `443`,
    874: `444`,
    875: `445`,
    876: `446`,
    877: `446`,
    878: `447`,
    879: `448`,
    88: `21`,
    880: `448`,
    881: `449`,
    882: `450`,
    883: `452`,
    884: `452`,
    885: `453`,
    886: `453`,
    887: `454`,
    888: `455`,
    889: `456`,
    89: `21`,
    890: `456`,
    891: `457`,
    892: `457`,
    893: `457`,
    894: `457`,
    895: `457`,
    896: `457`,
    897: `457`,
    898: `457`,
    899: `457`,
    9: `2`,
    90: `21`,
    900: `457`,
    901: `458`,
    902: `458`,
    903: `459`,
    904: `460`,
    905: `461`,
    906: `461`,
    907: `462`,
    908: `462`,
    909: `463`,
    91: `21`,
    910: `463`,
    911: `464`,
    912: `465`,
    913: `465`,
    914: `466`,
    915: `466`,
    916: `467`,
    917: `467`,
    918: `468`,
    919: `468`,
    92: `21`,
    920: `469`,
    921: `470`,
    922: `470`,
    923: `471`,
    924: `471`,
    925: `472`,
    926: `472`,
    927: `473`,
    928: `473`,
    929: `474`,
    93: `21`,
    930: `474`,
    931: `475`,
    932: `475`,
    933: `475`,
    934: `477`,
    935: `477`,
    936: `478`,
    937: `478`,
    938: `479`,
    939: `480`,
    94: `21`,
    940: `480`,
    941: `481`,
    942: `481`,
    943: `482`,
    944: `482`,
    945: `482`,
    946: `485`,
    947: `485`,
    948: `486`,
    949: `486`,
    95: `21`,
    950: `487`,
    951: `488`,
    952: `488`,
    953: `488`,
    954: `489`,
    955: `489`,
    956: `490`,
    957: `490`,
    958: `491`,
    959: `492`,
    96: `21`,
    960: `492`,
    961: `493`,
    962: `493`,
    963: `495`,
    964: `495`,
    965: `496`,
    966: `496`,
    967: `496`,
    968: `497`,
    969: `497`,
    97: `21`,
    970: `498`,
    971: `499`,
    972: `500`,
    973: `500`,
    974: `500`,
    975: `501`,
    976: `503`,
    977: `503`,
    978: `504`,
    979: `504`,
    98: `21`,
    980: `504`,
    981: `505`,
    982: `506`,
    983: `506`,
    984: `507`,
    985: `508`,
    986: `509`,
    987: `509`,
    988: `510`,
    989: `511`,
    99: `21`,
    990: `513`,
    991: `514`,
    992: `514`,
    993: `515`,
    994: `515`,
    995: `515`,
    996: `515`,
    997: `515`,
    998: `515`,
    999: `515`
    },
  appClear: `CA==`,
  appClearMap: {
    },
  companionInfo: null,
  extraPages: 1,
  stateKeys: 2,
  stateSize: 239,
  unsupported: [],
  version: 13,
  warnings: [`API Bidder_bid may use up to 5 accounts, but the limit is 4. API Bidder_bid starts at /app/src/contracts/auction.rsh:116:31:application.`, `API Bidder_optIn may use up to 6 accounts, but the limit is 4. API Bidder_optIn starts at /app/src/contracts/auction.rsh:116:31:application.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:109:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:93:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 7 calls a remote object at /app/src/contracts/auction.rsh:140:91:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 7 may use up to 6 accounts, but the limit is 4. Step 7 starts at /app/src/contracts/auction.rsh:116:31:dot.`, `Step 7 may use up to 9 transaction references, but the limit is 8. Step 7 starts at /app/src/contracts/auction.rsh:116:31:dot.`, `This program calls a remote object at /app/src/contracts/auction.rsh:194:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T12","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T13","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T14","name":"v4685","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T12","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T13","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e2","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_458","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_458","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_114","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_114","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_114","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e8","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1038","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1049","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1062","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v1073","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1227","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1234","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1247","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1254","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v1276","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1351","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1381","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v760","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T19","name":"v0","type":"tuple"}],"name":"_reach_oe_v779","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v882","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v3","type":"bytes20"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"bytes20","name":"v5","type":"bytes20"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"optInSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4678","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4688","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4691","type":"tuple"}],"name":"_reachp_2","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_458","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_458","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4694","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4697","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_114","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_114","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_114","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4700","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4703","type":"tuple"}],"name":"_reachp_8","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"live","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x608062004f7c38819003601f8101601f191683016001600160401b0381118482101762000555578392829160405283398101036101408112620006405760405190608082016001600160401b038111838210176200055557604052825182526200006c6020840162000699565b602083019081529260e0603f198301126200064057606060405192620000928462000645565b60408301518452605f1901126200064057604051620000b18162000661565b606082015181526080820151602082015260a08201516001600160801b031981168103620006405760408201526020830152620000f160c0820162000699565b604083015260e081015160608301526101008101516001600160601b031981168103620006405760808301526040830191825262000133906101200162000699565b606083019081524360035560405190919060e081016001600160401b03811182821017620005555760009160c0916040528281528260208201528260408201526200017d620006ae565b606082015260405162000190816200067d565b83815283602082015260808201528260a08201520152604051620001b4816200067d565b620001be620006ae565b81526020810193620001cf620006de565b855260ff6004541662000627577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528351602082015260018060a01b0389511660408201526200022d8651606083019062000725565b86516001600160a01b0316610140820152a15180159081156200061a575b501562000601576000815152600060208251015260006040825101525183515234620005e85760405193620002808562000645565b6000855260006020860152604051620002998162000645565b60008152620002a7620006ae565b6020820152600060408201526000606082015260006080820152604086015260006060860152620002d7620006de565b608086015233855260018060a01b03905116602085015251604084015260018060a01b03905116606083015251805160406020820151910151151560405191620003218362000661565b600083526020830152604082015262000339620006de565b9160005b60018110620005985750508152608082015260016000554360015560806040519160018060a01b03815116602084015260018060a01b036020820151166040840152620003936040820151606085019062000725565b60608101516001600160a01b03166101408401520151600061016083015b600182106200056b576101a08452836101c081016001600160401b03811182821017620005555760405280516001600160401b0381116200055557600254600181811c911680156200054a575b60208210146200053457601f8111620004ca575b50602091601f8211600114620004605791819260009262000454575b50508160011b916000199060031b1c1916176002555b6040516147c79081620007b58239f35b0151905082806200042e565b601f19821692600260005260206000209160005b858110620004b15750836001951062000497575b505050811b0160025562000444565b015160001960f88460031b161c1916905582808062000488565b9192602060018192868501518155019401920162000474565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f830160051c8101916020841062000529575b601f0160051c01905b8181106200051c575062000412565b600081556001016200050d565b909150819062000504565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003fe565b634e487b7160e01b600052604160045260246000fd5b602060606001926040865180518352848101518584015201511515604082015201930191019091620003b1565b620005a481836200078c565b51620005b182866200078c565b52620005be81856200078c565b506000198114620005d2576001016200033d565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b8152600b6004820152602490fd5b60405163100960cb60e01b8152600a6004820152602490fd5b905060015414386200024b565b60405163100960cb60e01b815260096004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055557604052565b606081019081106001600160401b038211176200055557604052565b604081019081106001600160401b038211176200055557604052565b51906001600160a01b03821682036200064057565b60405190606082016001600160401b03811183821017620005555760405260006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000555576040528260005b8281106200070e57505050565b82906200071a620006ae565b818401520162000701565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b9060018110156200079e5760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c806306a72303146101445780631e93b0f11461013b5780632d2ae6eb146101325780632e928421146101295780634a96cc0b14610120578063573b8510146101175780636f49e2311461010e57806383230757146101055780638dca4147146100fc578063957aa58c146100f3578063ab53f2c6146100ea578063b6279224146100e1578063d2526fd9146100d8578063ef4f4a22146100cf5763f5a239bc0361000e576100ca610bcf565b61000e565b506100ca610b42565b506100ca610af6565b506100ca610a7a565b506100ca6109cc565b506100ca610943565b506100ca6108c4565b506100ca6108a5565b506100ca610858565b506100ca6106a0565b506100ca610646565b506100ca61048a565b506100ca610421565b506100ca6103d7565b506100ca610163565b602090600319011261015e57600490565b600080fd5b506103bb6101836101733661014d565b61017b61140d565b5036906142e3565b61018b614740565b9061019a6009600054146119fc565b6102176101b76101a8611281565b60208082518301019101612a3a565b916101d36101ce6101ca60045460ff1690565b1590565b611a1c565b7f90a060bb9517819ff9fcae31809040edc14dc784a4ce151b7d5b20fea1b5cc6b604051806102038433836143f6565b0390a15180159081156103cb575b50611a3c565b6102409061022a82820151431015611a5c565b6102343415611a7c565b60608101926102553360018060a01b0361024e8751610a41565b1614611a9c565b60a082018051825152436020835101526101e0918284019182516040835101526102d86102cf610283612bf2565b986102976102918951610a41565b8b611748565b6102b06102a760208a0151610a41565b60208c01611748565b6102c96102c060408a0151610a41565b60408c01611748565b51610a41565b60608901611748565b6102f16102e86080870151151590565b15156080890152565b5160a087015260c084015160c087015261031a61031160e0860151610a41565b60e08801611748565b61033461010061032c818701516114ce565b908801611757565b610120808501519087015261014080850151908701525161016086015261036b61018061036381860151610a41565b908701611748565b6103856101a061037d81860151151590565b151590870152565b6103976101c061037d81860151151590565b51908401526102004381850152810151906102209182850152015190820152613e0c565b60405160008152602090f35b0390f35b90506001541438610211565b503461015e57600036600319011261015e576020600354604051908152f35b6040809180518452602081015160208501520151910152565b60608101929161041f91906103f6565b565b50600036600319011261015e576104366113b7565b5060608061044261140d565b6104798161044e612932565b60208101906000825152511515602082510152610469612932565b9060008252516020820152612c9e565b015161048860405180926103f6565bf35b506103bb61049a6101733661014d565b6104a8600760005414611abc565b6105216104c56104b6611281565b60208082518301019101611582565b916104dd6104d86101ca60045460ff1690565b611adc565b7f85bba4f12ee548563e5364ae202a127c474a1931b802b9f898e735963540adcd6040518061050d8433836143f6565b0390a151801590811561063a575b50611afc565b61016061053381830151431015611b1a565b61053d3415611b3a565b604082019161055e3360018060a01b036105578651610a41565b1614611b5a565b6105a261059961056c6116e7565b9461058061057a8551610a41565b87611748565b6102c96105906020860151610a41565b60208801611748565b60408501611748565b6105bb6105b260608301516114ce565b60608501611757565b6105d46105cb6080830151610a41565b60808501611748565b60a081015160a084015260c081015160c08401526106016105f860e0830151151590565b151560e0850152565b61061b61010061061381840151151590565b151590850152565b610120438185015281015190610140918285015201519082015261235b565b9050600154143861051b565b50600036600319011261015e57602060a061065f61140d565b6106948161066b612932565b858101906002825152511515606082510152610685612932565b90600082525186820152612c9e565b01511515604051908152f35b506106ad6101733661014d565b6106bb600160005414611b7a565b6108426106c6611281565b61083d6106dd602092838082518301019101614301565b916106f56106f06101ca60045460ff1690565b611b9a565b61073e6040957fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee8159687518061072a8433836143f6565b0390a151801590811561084c575b50611bba565b6107483415611bda565b61080860808285019461076c6107676107618851610a41565b3361451e565b611bfa565b6107883360018060a01b036107818451610a41565b1614611c1a565b6107b26107aa610796614410565b976102c96107a48551610a41565b8a611748565b858801611748565b87810151888701526107d36107ca6060830151610a41565b60608801611748565b015180519061080360018351019289868201519101511515906107f461132a565b94855286850152151589840152565b61457a565b60808401526108176002600055565b61082043600155565b61082f8551938492830161448e565b03601f19810183528261125e565b612278565b5160008152602090f35b90506001541438610738565b50600036600319011261015e576020604061087161140d565b6106948161087d611470565b8581019060018251525115158582510152610896611470565b90600082525186820152611767565b503461015e57600036600319011261015e576020600154604051908152f35b50608036600319011261015e576108d961140d565b604051906108e6826111ae565b6004358252606036602319011261015e5760405191610904836111d6565b60243592600284101561015e576103bb938152604435610923816114f0565b6020820152606435610934816114f0565b60408201526020820152611767565b503461015e57600036600319011261015e576103c761099760c061096561140d565b60005460098110156109a957600761097d9114611c5a565b6109886104b6611281565b506000828201525b0151151590565b60405190151581529081906020820190565b60096109b59114611c3a565b6109c06101a8611281565b50600182820152610990565b503461015e57600080600319360112610a3e5780546109e9611281565b906040519283918252602090604082840152835191826040850152815b838110610a2757505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610a06565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261015e57610a8f6113f4565b506103c76080610a9d61140d565b610ae881604051610aad816111ae565b604051610ab9816111f1565b6000815281526020810190610acc6128e1565b8252600435815152600182515251604082510152610469612932565b015160405191829182610a5a565b50600036600319011261015e57602080610b0e61140d565b61069481610b1a611470565b8481019060008251525115158582510152610b33611470565b90600082525185820152611767565b5060a036600319011261015e57610b5761140d565b60405190610b64826111ae565b6004358252608036602319011261015e5760405191610b828361120c565b60243592600384101561015e576103bb938152604435610ba1816114f0565b6020820152610baf366142c3565b6040820152608435610bc0816114f0565b60608201526020820152612c9e565b506103bb610bdf6101733661014d565b610be761463b565b610bf5600260005414611c7a565b610c6e610c12610c03611281565b60208082518301019101614301565b92610c2a610c256101ca60045460ff1690565b611c9a565b7f794b69bffed607ab45148da3c7f9c613ba8e4d2d82b625153563a3a2f536190a60405180610c5a8433836143f6565b0390a1518015908115611151575b50611cba565b610c783415611cda565b610c8f610c886020840151610a41565b3090613b8b565b61012082015247610100820152610cae600160ff196004541617600455565b7fbb730b6fe01c5d81c2ad80dc49a5321b7a27a8c1a0cdc3548f0435631c405382610daf600080604051632cfbfba760e01b602082015260048152610cf2816111ae565b610d07610d026060890151610a41565b610a41565b82602083519301915af1610d23610d1c6126ec565b809261274e565b50610d3360ff1960045416600455565b610d61610d4c30610d476020890151610a41565b613b8b565b61012086015180820361014088015214611cfa565b610d8547610100860151900391602086019283515260208082518301019101613b7c565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a1610dc160408201515115611d1a565b610dce3060608301611748565b602060408201510151608082015152610dfa610ded6060830151610a41565b6020608084015101611748565b43604060808301510152610e1e610e118351610a41565b6060608084015101611748565b604082015160800151610e41906001600160601b03191660808084015101611757565b60206040830151015160a06080830151015260606040830151015160c060808301510152610e82610e756020840151610a41565b60e0608084015101611748565b610e9330610d476020850151610a41565b61018082015247610160820152610eb2600160ff196004541617600455565b610f12600080608084015160405190610eee82610ee0602082019363063eabe760e11b8552602483016146c8565b03601f19810184528361125e565b82610eff610d0260608a0151610a41565b9251925af1610f0c6126ec565b9061277e565b50610f2260ff1960045416600455565b610f4b610f3630610d476020860151610a41565b6101808301518082036101a085015214611d3a565b7fc876a5da60651cd694c615d28b8e024c068a856d19d3618a283f6e09a3b8c0ef610f9347610160840151900360a0840190815152518060c085015260405191829182612c86565b0390a1610fa560c08201515115611d5a565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb67602060408301510151610fd98451610a41565b90610fe960405192839283612bd9565b0390a160206040820151015160e0820151526000602060e083015101526000604060e08301510152608061101b612bf2565b9261102f6110298251610a41565b85611748565b61104861103f6020830151610a41565b60208601611748565b6110616110586060830151610a41565b60408601611748565b61106e3360608601611748565b61108361107b8451151590565b151585840152565b60206040840151015160a08501524360c08501526110b06110a76060850151610a41565b60e08601611748565b60408101518201516110d1906001600160601b0319165b6101008601611757565b6040810180515161012086015251516110ea9043612648565b61014085015260e08301516101608501526111126111088251610a41565b6101808601611748565b60016101a085015260016101c085015260006101e085015243610200850152015161022083015260c06040820151519101515101610240820152613e0c565b90506001541438610c68565b90600182811c9216801561118d575b602083101461117757565b634e487b7160e01b600052602260045260246000fd5b91607f169161116c565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b038211176111c957604052565b6111d1611197565b604052565b606081019081106001600160401b038211176111c957604052565b602081019081106001600160401b038211176111c957604052565b608081019081106001600160401b038211176111c957604052565b61018081019081106001600160401b038211176111c957604052565b60a081019081106001600160401b038211176111c957604052565b601f909101601f19168101906001600160401b038211908210176111c957604052565b60405190600082600254916112958361115d565b80835260019380851690811561130957506001146112bb575b5061041f9250038361125e565b6002600090815260008051602061475b83398151915294602093509091905b8183106112f157505061041f9350820101386112ae565b855488840185015294850194879450918301916112da565b905061041f94506020925060ff191682840152151560051b820101386112ae565b6040519061041f826111d6565b6040519061018082016001600160401b038111838210176111c957604052565b6040519061022082016001600160401b038111838210176111c957604052565b6040519061026082016001600160401b038111838210176111c957604052565b604051906101c082016001600160401b038111838210176111c957604052565b60405190606082016001600160401b038111838210176113e7575b60405260006040838281528260208201520152565b6113ef611197565b6113d2565b60405190611401826111ae565b60006020838281520152565b6040519060e082016001600160401b03811183821017611463575b604052600060c0838281528260208201528260408201526114476113b7565b60608201526114546113f4565b60808201528260a08201520152565b61146b611197565b611428565b6040519061147d826111ae565b8160008152602061148c6113b7565b910152565b50634e487b7160e01b600052602160045260246000fd5b600211156114b257565b61041f611491565b51906001600160a01b038216820361015e57565b6001600160601b03191690565b51906001600160601b03198216820361015e57565b8015150361015e57565b519061041f826114f0565b9080601f8301121561015e57604091825192611520846111f1565b836060938484019381851161015e57915b8483106115415750505050505090565b858383031261015e5783518691611557826111d6565b84518252602091828601518382015286860151611573816114f0565b87820152815201920191611531565b6101c08183031261015e576101a090611599611337565b926115a3826114ba565b84526115b1602083016114ba565b60208501526115c2604083016114ba565b60408501526115d3606083016114db565b60608501526115e4608083016114ba565b608085015260a082015160a085015260c082015160c085015261160960e083016114fa565b60e085015261010061161c8184016114fa565b9085015261162f61012091828401611505565b90840152610180810151610140840152015161016082015290565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611690575b8285015260208101511515606085015201511515910152565b611698611491565b611677565b5160028110156116aa5790565b6116b2611491565b90565b604051906116c2826111f1565b8160005b602081106116d2575050565b6020906116dd6113b7565b81840152016116c6565b604051906116f482611227565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201528261012082015261173e6116b5565b6101408201520152565b6001600160a01b039091169052565b6001600160601b03199091169052565b611775600760005414611d7a565b61177d611281565b90611792602092838082518301019101611582565b6117a96117a46101ca60045460ff1690565b611d9a565b6040937fa8cc1e0e7313e31b67ffc8662535f499310f0a2b7d7f2ae89cbe01a18167f1fa8551806117db86338361164a565b0390a16117f3835180159081156119f0575b50611dba565b8361016093611806858501514310611dda565b01611811815161169d565b61181a816114a8565b611914575061041f9461186d856118ac936118353415611e1a565b8351600181527f3fafe75354f260145836f6231e8eaed0f3f87c3b9f3179a3b22f84a5845ededf9080602081015b0390a10160019052565b6118986118786116e7565b9561188c6118868651610a41565b88611748565b61036381860151610a41565b6118a481840151610a41565b908501611748565b6118bc6105b260608301516114ce565b6118cc6105cb6080830151610a41565b60a081015160a084015260c081015160c08401526118ed60e0840160019052565b6000610100840152610120438185015281015190610140918285015201519082015261235b565b6119206001915161169d565b611929816114a8565b14611936575b5050505050565b8460006119e6966119849361194b3415611dfa565b8151600081527faa5feb8c1a2fe060788617e3f8a8f85c7cbd45bf1e93e1d51d10441954c2da8890602090a101526118986118786116e7565b6119946105b260608301516114ce565b6119a46105cb6080830151610a41565b60a081015160a084015260c081015160c0840152600060e08401526000610100840152610120438185015281015190610140918285015201519082015261235b565b388080808061192f565b905060015414386117ed565b15611a0357565b60405163100960cb60e01b815260366004820152602490fd5b15611a2357565b60405163100960cb60e01b815260376004820152602490fd5b15611a4357565b60405163100960cb60e01b815260386004820152602490fd5b15611a6357565b60405163100960cb60e01b815260396004820152602490fd5b15611a8357565b60405163100960cb60e01b8152603a6004820152602490fd5b15611aa357565b60405163100960cb60e01b8152603b6004820152602490fd5b15611ac357565b60405163100960cb60e01b815260226004820152602490fd5b15611ae357565b60405163100960cb60e01b815260236004820152602490fd5b15611b0357565b602460405163100960cb60e01b8152816004820152fd5b15611b2157565b60405163100960cb60e01b815260256004820152602490fd5b15611b4157565b60405163100960cb60e01b815260266004820152602490fd5b15611b6157565b60405163100960cb60e01b815260276004820152602490fd5b15611b8157565b60405163100960cb60e01b8152600c6004820152602490fd5b15611ba157565b60405163100960cb60e01b8152600d6004820152602490fd5b15611bc157565b60405163100960cb60e01b8152600e6004820152602490fd5b15611be157565b60405163100960cb60e01b8152600f6004820152602490fd5b15611c0157565b60405163100960cb60e01b815260106004820152602490fd5b15611c2157565b60405163100960cb60e01b815260116004820152602490fd5b15611c4157565b60405163100960cb60e01b815260086004820152602490fd5b15611c6157565b60405163100960cb60e01b815260076004820152602490fd5b15611c8157565b60405163100960cb60e01b815260126004820152602490fd5b15611ca157565b60405163100960cb60e01b815260136004820152602490fd5b15611cc157565b60405163100960cb60e01b815260146004820152602490fd5b15611ce157565b60405163100960cb60e01b815260156004820152602490fd5b15611d0157565b60405163100960cb60e01b815260166004820152602490fd5b15611d2157565b60405163100960cb60e01b815260186004820152602490fd5b15611d4157565b60405163100960cb60e01b815260196004820152602490fd5b15611d6157565b60405163100960cb60e01b8152601b6004820152602490fd5b15611d8157565b60405163100960cb60e01b8152601c6004820152602490fd5b15611da157565b60405163100960cb60e01b8152601d6004820152602490fd5b15611dc157565b60405163100960cb60e01b8152601e6004820152602490fd5b15611de157565b60405163100960cb60e01b8152601f6004820152602490fd5b15611e0157565b60405163100960cb60e01b815260216004820152602490fd5b15611e2157565b60405163100960cb60e01b815260206004820152602490fd5b15611e4157565b60405163100960cb60e01b815260286004820152602490fd5b15611e6157565b60405163100960cb60e01b815260296004820152602490fd5b15611e8157565b60405163100960cb60e01b8152602a6004820152602490fd5b15611ea157565b60405163100960cb60e01b8152602b6004820152602490fd5b15611ec157565b60405163100960cb60e01b815260356004820152602490fd5b15611ee157565b60405163100960cb60e01b8152602d6004820152602490fd5b15611f0157565b60405163100960cb60e01b8152602e6004820152602490fd5b15611f2157565b60405163100960cb60e01b815260326004820152602490fd5b15611f4157565b60405163100960cb60e01b815260346004820152602490fd5b15611f6157565b60405163100960cb60e01b8152602f6004820152602490fd5b15611f8157565b60405163100960cb60e01b815260316004820152602490fd5b15611fa157565b60405163100960cb60e01b8152602c6004820152602490fd5b15611fc157565b60405163100960cb60e01b8152603c6004820152602490fd5b15611fe157565b60405163100960cb60e01b8152603e6004820152602490fd5b90600181101561200b5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b818110612039575050565b6000815560010161202e565b50634e487b7160e01b600052601160045260246000fd5b61206760025461115d565b8061206f5750565b601f811160011461208257506000600255565b60026000526120c790601f0160051c60008051602061475b833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf61202e565b6000602081208160025555565b604051906120e182611227565b816101606000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526121246116b5565b610120820152826101408201520152565b6000915b6001831061214657505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612139565b9190916101a06101606101c083019461218f848251610a4d565b6121a160208201516020860190610a4d565b6121b360408201516040860190610a4d565b6060818101516001600160601b031916908501526121d960808201516080860190610a4d565b60a081015160a085015260c081015160c085015261220060e082015160e086019015159052565b610100818101511515908501526122206101208083015190860190612135565b6101408101516101808501520151910152565b90601f8211612240575050565b61041f9160026000526020600020906020601f840160051c8301931061226e575b601f0160051c019061202e565b9091508190612261565b80519091906001600160401b03811161234e575b6122a08161229b60025461115d565b612233565b602080601f83116001146122dc57508192936000926122d1575b50508160011b916000199060031b1c191617600255565b0151905038806122ba565b6002600052601f1983169490919060008051602061475b833981519152926000905b87821061233657505083600195961061231d575b505050811b01600255565b015160001960f88460031b161c19169055388080612312565b806001859682949686015181550195019301906122fe565b612356611197565b61228c565b610120818101805160c08401805190939160009110612620575061010084015115155b15612478579161041f9361245261083d9361082f9561239b6120d4565b946123a961057a8651610a41565b6123b96105906020870151610a41565b6123d26123c96040870151610a41565b60408801611748565b6123eb6123e260608701516114ce565b60608801611757565b6124046123fb6080870151610a41565b60808801611748565b60a085015160a08701525160c086015261242d61242460e0860151151590565b151560e0870152565b6001610100860152610140908185015190860152610160809401519085015251612625565b908201526124606007600055565b61246943600155565b60405192839160208301612175565b50505060e0810151156125b0578060207f12efbaf7d721b41313ea6075bffc8bcdaf87de4d387fbe499734cc9c29fe5c3792016125816124b88251610a41565b6124e460808501916124ca8351610a41565b6101408701515151916001600160a01b039091169061265c565b60008080806124f6610d028951610a41565b610160890151908282156125a7575bf11561259a575b61251960608501516114ce565b9261253d61253661252f60a08801519751610a41565b9351610a41565b9151610a41565b91604051958695866001600160601b0319909116815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b0390a1600080556125926000600155565b61041f61205c565b6125a2612021565b61250c565b506108fc612505565b8060207fdd5bfdf918cd86e0bb3c19331b121dcfa52fec6eee8c528aa1267c110694568792016126076125e38251610a41565b6125ed8451610a41565b6101408501515151916001600160a01b039091169061265c565b6125816080830160008080806124f6610d028651610a41565b61237e565b90603282019182811161263b575b821061015e57565b612643612045565b612633565b919082019182811161263b57821061015e57565b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526126d893600093849392849190608081016001600160401b038111828210176126df575b6040525193165af16126c86126c16126ec565b80926127ae565b5060208082518301019101612739565b1561015e57565b6126e7611197565b6126ae565b3d15612734573d906001600160401b038211612727575b6040519161271b601f8201601f19166020018461125e565b82523d6000602084013e565b61272f611197565b612703565b606090565b9081602091031261015e57516116b2816114f0565b156127565790565b80511561276557805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b156127865790565b80511561279557805190602001fd5b60405163100960cb60e01b8152601a6004820152602490fd5b156127b65790565b8051156127c557805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156127e65790565b8051156127f557805190602001fd5b60405163100960cb60e01b815260336004820152602490fd5b156128165790565b80511561282557805190602001fd5b60405163100960cb60e01b815260306004820152602490fd5b156128465790565b80511561285557805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b156128765790565b80511561288557805190602001fd5b60405163100960cb60e01b8152603d6004820152602490fd5b156128a65790565b8051156128b557805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b604051906128db826111f1565b60008252565b60405190608082016001600160401b03811183821017612925575b6040526000606083828152826020820152604051612919816111f1565b83815260408201520152565b61292d611197565b6128fc565b6040519061293f826111ae565b8160008152602061148c6128e1565b600311156114b257565b612960611357565b906129696113b7565b82526129736128ce565b602083015260008060408401526129886113f4565b60608401526129956113f4565b60808401526129a26113f4565b60a08401526129af6113f4565b60c08401526129bc6113f4565b60e08401526129c96113f4565b61010084015280610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152610200830152565b919082606091031261015e57604051612a20816111d6565b604080829480518452602081015160208501520151910152565b906102e08282031261015e576102c0612a51611377565b92612a5b816114ba565b8452612a69602082016114ba565b6020850152612a7a604082016114ba565b6040850152612a8b606082016114ba565b6060850152612a9c608082016114fa565b608085015260a081015160a085015260c081015160c0850152612ac160e082016114ba565b60e0850152610100612ad48183016114db565b9085015261012080820151908501526101408082015190850152610160612afd84828401612a08565b908501526101c0612b0f8183016114ba565b6101808601526101e090612b248284016114fa565b6101a087015261020090612b398285016114fa565b90870152610220918284015190870152612b5861024095868501611505565b908601526102a08201519085015201519082015290565b9092916060602060a09260c0850196600180861b03168552805182860152015180516003811015612bbf575b60408501526020810151151582850152604081015151608085015201511515910152565b612bc7611491565b612b9b565b5160038110156116aa5790565b9081526001600160a01b03909116602082015260400190565b612bfa611377565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015280610140840152612c476113b7565b61016084015280610180840152806101a0840152806101c0840152806101e084015280610200840152612c786116b5565b610220840152610240830152565b91909160208060408301948051845201511515910152565b612ca6612958565b90612cb5600960005414611e3a565b6020612cd0612cc2611281565b828082518301019101612a3a565b91612ce8612ce36101ca60045460ff1690565b611e5a565b7f79b3c560a6d3a6a4c7691d5a6434c6712c92b70975d19a8cb837edc0df24789760405180612d18843383612b6f565b0390a1612d3081518015908115613b70575b50611e7a565b612d406102408401514310611e9a565b01612d4b8151612bcc565b612d548161294e565b612f2b575061041f92612d673415611f9a565b60a08201928351906101e0927f772252bb3a260bb19eae21a8a9243292763a37c5bcfc38c9f961eb102482f43484860193845190612db76040519283928360209093929193604081019481520152565b0390a185518251524360208351015282516040835101527fac49c0b82f66b1b47b222d4d5a13e0619a03fac62c2fa4be0b7f5b2a20107dfc612e0083516040519182918261040f565b0390a160608251910152612e12612bf2565b94612e2061057a8651610a41565b612e306105906020870151610a41565b612e406123c96040870151610a41565b612e506107ca6060870151610a41565b612e69612e606080870151151590565b15156080880152565b5160a086015260c084015160c0860152612e92612e8960e0860151610a41565b60e08701611748565b612eac610100612ea4818701516114ce565b908701611757565b6101208085015190860152610140808501519086015251610160850152612ee3610180612edb81860151610a41565b908601611748565b612efd6101a0612ef581860151151590565b151590860152565b60006101c0850152519083015261020043818401528101519061022091828401520151610240820152613e0c565b6001612f3a8294939451612bcc565b612f438161294e565b036135a6576040612f6491510151806020840152516101e084015110611eda565b612f836102208301516020830151908151016040840152513414611efa565b6101a0820151156132a55761041f927fc4b8bdd4d1ed750c0bfe600750d38aa4ca0927f5e4edd8f947c14382337dd56c6130a0612fc6610c886020870151610a41565b610180850190815261308047916101608701928352612fed600160ff196004541617600455565b61304e6000808a60a08101518261303b610d0260408051956130348761302660208201986311b693e360e11b8a52339060248401612bd9565b03601f19810189528861125e565b0151610a41565b9251925af16130486126ec565b9061280e565b5061305e60ff1960045416600455565b61306f30610d4760208b0151610a41565b90518082036101a089015214611f5a565b479051900360c0850190815152518060e086015260405191829182612c86565b0390a16130b260e08301515115611f7a565b60008051602061479b83398151915260a084015160208401515161310e6130dd6101008801516114ce565b60408051948552602085019390935233928401929092526001600160601b0319909116606083015281906080820190565b0390a160806101008301613123338251611748565b6101e08501516020825101527f587924aa67e13d871b0cd0414946fca220d21dcac0b129ca5eb6a252da7f4052613161825160405191829182610a5a565b0390a151910152613170612bf2565b9161318461317e8251610a41565b84611748565b61319d6131946020830151610a41565b60208501611748565b6131ad6105996040830151610a41565b6131c66131bd6060830151610a41565b60608501611748565b6131df6131d66080830151151590565b15156080850152565b60a081015160a084015260c081015160c084015261320c61320360e0830151610a41565b60e08501611748565b61322761321d6101008301516114ce565b6101008501611757565b61012080820151908401526101408082015190840152610160810151610160840152613257336101808501611748565b60006101a08401526132716101c061061381840151151590565b6020820151516101e0840152610200904382850152015161022083015260e060408201519101515101610240820152613e0c565b61041f9260008080806132bf610d02610180890151610a41565b6101e08801519082821561359d575bf115613590575b61338f6132e8610c886020860151610a41565b6101e08401908152476101c0850152613309600160ff196004541617600455565b61335d60008060a08801516040519061333982610ee060208201936311b693e360e11b8552339060248401612bd9565b8261334a610d0260408d0151610a41565b9251925af16133576126ec565b906127de565b5061336d60ff1960045416600455565b61337e30610d476020880151610a41565b905180820361020086015214611f1a565b7f91238d842ebf999831700112741d7b79cbd41c7b29b883b0c4636031572e93ca6133d7476101c0850151900360608501908151525180608086015260405191829182612c86565b0390a16133e960808301515115611f3a565b60008051602061479b83398151915260a08401516020840151516134146130dd6101008801516114ce565b0390a1608060a08301613428338251611748565b6101e08501516020825101527fe034c98f38c60988b3c0a3b132a83b797c07795c6825b814c57f0a2c0fdb838c613466825160405191829182610a5a565b0390a1519101526080613477612bf2565b926134856110298251610a41565b61349561103f6020830151610a41565b6134a56110586040830151610a41565b6134be6134b56060830151610a41565b60608601611748565b6134cd61107b83830151151590565b60a081015160a085015260c081015160c08501526134f16110a760e0830151610a41565b6135026110c76101008301516114ce565b610120808201519085015261014080820151908501526101608082015190850152613531336101808601611748565b60006101a085015261355461354a6101c0830151151590565b15156101c0860152565b6020830151516101e0850152436102008501526102008101516102208501526101e0604084015191015190039101515101610240820152613e0c565b613598612021565b6132d5565b506108fc6132ce565b6135b560029193929351612bcc565b6135be8161294e565b146135c857505050565b620f42409061022090828282015101936135ec610120948583019687523414611eba565b8451620dbba095908681106138fd5750620dbb9f199051019361014080920194855260008080806060870199613625610d028c51610a41565b82f1156138f0575b8451620186a0979088116137c357600080808061041f9b613651610d028a51610a41565b82f1156137b6575b6136ba60a08086019260008051602061477b8339815191526136848551604051918291339083612bd9565b0390a1604051600181527f9d228c4fa9c106a55bc0de084f1943a6d7a3baf88423a0cda18fc694008e64e6908060208101611863565b6136f66102cf6136c8612bf2565b986136d66102918851610a41565b6136e66102a76020890151610a41565b6102c96102c06040890151610a41565b6137066102e86080860151151590565b5160a087015260c083015160c087015261372661031160e0850151610a41565b61373861010061032c818601516114ce565b808301519086015280820151908501526101608082015190850152613765610180612edb81840151610a41565b6137776101a0612ef581840151151590565b6137896101c0612ef581840151151590565b6101e080820151908501526102009043828601520151908301526201869f19905101610240820152613e0c565b6137be612021565b613659565b61041f975061382960a08086019260008051602061477b8339815191526137f38551604051918291339083612bd9565b0390a1604051600181527fc4a518340b9a3db356dee8b61d7c4e6891edc9f9f5ff38240852262bc330265b908060208101611863565b6138376102cf6136c8612bf2565b6138476102e86080860151151590565b5160a087015260c083015160c087015261386761031160e0850151610a41565b61387961010061032c818601516114ce565b8083015190860152808201519085015261016080820151908501526138a6610180612edb81840151610a41565b6138b86101a0612ef581840151151590565b6138ca6101c0612ef581840151151590565b6101e0808201519085015261020090438286015201519083015251610240820152613e0c565b6138f8612021565b61362d565b620186a0979650909491508611613a5257600080808061041f99613924610d028851610a41565b82f115613a45575b61398d60a08084019660008051602061477b8339815191526139578951604051918291339083612bd9565b0390a1604051600181527f3efa548e097e974c27e342285613ce8c0d729ca73ba2afef0ba9487b6c7925c4908060208101611863565b613995612bf2565b946139a361057a8451610a41565b6139b36105906020850151610a41565b6139c36123c96040850151610a41565b6139d36107ca6060850151610a41565b6139e3612e606080850151151590565b5160a086015260c082015160c0860152613a03612e8960e0840151610a41565b613a15610100612ea4818501516114ce565b808201519085015261014080820151908501526101608082015190850152613765610180612edb81840151610a41565b613a4d612021565b61392c565b61041f9550613ab860a08084019660008051602061477b833981519152613a828951604051918291339083612bd9565b0390a1604051600181527f5da08243c25bf74e4f55bb704d6f60ff329b86b295b2567df17cf92672361d7e908060208101611863565b613ac0612bf2565b94613ace61057a8451610a41565b613ade6105906020850151610a41565b613aee6123c96040850151610a41565b613afe6107ca6060850151610a41565b613b0e612e606080850151151590565b5160a086015260c082015160c0860152613b2e612e8960e0840151610a41565b613b40610100612ea4818501516114ce565b8082015190850152610140808201519085015261016080820151908501526138a6610180612edb81840151610a41565b90506001541438612d2a565b9081602091031261015e575190565b600080916116b293826040519160208301926370a0823160e01b845260018060a01b03809216602482015260248152613bc3816111d6565b5193165af1613bda613bd36126ec565b809261283e565b5060208082518301019101613b7c565b6040519060c082016001600160401b03811183821017613c3a575b604052600060a083613c156113f4565b8152613c1f6113f4565b60208201528260408201528260608201528260808201520152565b613c42611197565b613c05565b613c4f611377565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015280610140840152613c9c6113b7565b61016084015280610180840152806101a0840152806101c0840152806101e0840152613cc66116b5565b61020084015280610220840152610240830152565b9190916102c06102e0820193613cf2838251610a4d565b613d0460208201516020850190610a4d565b613d1660408201516040850190610a4d565b613d2860608201516060850190610a4d565b60808181015115159084015260a081015160a084015260c081015160c0840152613d5a60e082015160e0850190610a4d565b610100818101516001600160601b0319169084015261012080820151908401526101408082015190840152613d9861016080830151908501906103f6565b61018081015190613daf6101c09283860190610a4d565b6101a081015191613dc76101e0938487019015159052565b81015191613ddc610200938487019015159052565b81015191610220928386015281015191613dfc6102409384870190612135565b8101516102a08501520151910152565b613e14613bea565b6102008083018051916101409384860193845110156000906000146142be57506101c086015115155b15613fae575093613f8861083d9361082f959361041f97613e5c613c47565b95613e6a6118868751610a41565b613e83613e7a6020880151610a41565b60208901611748565b613e9c613e936040880151610a41565b60408901611748565b613eac6102cf6060880151610a41565b613ebc6102e86080880151151590565b60a086015160a088015260c086015160c0880152613ee9613ee060e0880151610a41565b60e08901611748565b613f03610100613efb818901516114ce565b908901611757565b610120938487019485519089015251908701526101608086015190870152613f3b610180613f3381880151610a41565b908801611748565b613f556101a0613f4d81880151151590565b151590880152565b60016101c08701526101e08086015190870152610220908186015190870152610240809501519086015251905190612648565b90820152613f966009600055565b613f9f43600155565b60405192839160208301613cdb565b925050916020840193613fc4610c888651610a41565b9360808401948552479460608501958652613fe7600160ff196004541617600455565b61016095614068878501519261403a6000808860409782614027610d028b805195613034876130266020820198634c344d9d60e01b8a526024830161040f565b9251925af16140346126ec565b9061286e565b5061404a60ff1960045416600455565b61405830610d478c51610a41565b905180820360a08a015214611fba565b47905190038551526140c885517f7ed41a761e572399507eca306f051fc4967641cd734071c06ebadcd4c81b853a6140ac6020890192808452855191829182612c86565b0390a18261024086015191519182510197019687525115611fda565b60a08301516101e08401908151927fc3acd7ee24f4f9cf4606c64c38b8640466129f78b44ac84b4e810f68345d08b46141018751610a41565b9461410f60e0890151610a41565b9361417060c08a01519761010098898c019761412b89516114ce565b885195865260208601969096526001600160a01b039283166040860152909116606084015260808301526001600160601b031990921660a082015290819060c0820190565b0390a182511561423c576141826116e7565b99865161418e90610a41565b614198908c611748565b516141a290610a41565b6141af9060208c01611748565b60608601516141bd90610a41565b6141c8918b01611748565b516141d2906114ce565b6141df9060608a01611757565b6101808401516141ee90610a41565b6141fb9060808a01611748565b5160a0880152815161420c90612625565b60c0880152600160e088015260019087015251610120860152610220015190840152519082015261041f9061235b565b5050505050600094859450849391849350610180610d02916130346142646142889551610a41565b61426e8351610a41565b6102208401515151916001600160a01b039091169061265c565b9051908282156142b5575bf1156142a8575b600080556125926000600155565b6142b0612021565b61429a565b506108fc614293565b613e3d565b602090606319011261015e57604051906142dc826111f1565b6064358252565b919082602091031261015e576040516142fb816111f1565b91358252565b90818103906101a0821261015e57604080519361431d85611243565b614326816114ba565b8552614334602082016114ba565b602086015260e0603f1985011261015e57606082519461435386611243565b828401518652605f19011261015e5781519361436e856111d6565b606082015185526080820151602086015260a0820151926001600160801b03198416840361015e578561014094826143ee98015260208301526143b360c084016114ba565b8183015260e083015160608301526143ce61010084016114db565b60808301528601526143e361012082016114ba565b606086015201611505565b608082015290565b6001600160a01b0390911681529051602082015260400190565b6040519061441d82611243565b81600080825280602083015260405161443581611243565b8181526144406113b7565b602082015281604082015281606082015281608082015260408301526060820152608061148c6116b5565b80518252602080820151908301526040908101516001600160801b031916910152565b61041f9092919261014060806101a083019560018060a01b03808251168552806020830151166020860152604082015190815160408701526144d86020830151606088019061446b565b60408201511660c086015260608082015160e0870152908301516001600160601b03191661010086015281015161451490610120860190610a4d565b0151910190612135565b60006116b2928192826040519160208301926323b872dd60e01b845260018060a01b038092166024820152306044820152600160648201526064815261456381611243565b5193165af16126c86145736126ec565b809261289e565b91906145846116b5565b9260005b600181106145965750508252565b806145a360019284611ffa565b516145ae8288611ffa565b526145b98187611ffa565b5060001981146145ca575b01614588565b6145d2612045565b6145c4565b6040519061010082016001600160401b0381118382101761462e575b6040528160e060009182815282602082015282604082015282606082015282608082015261461f6113b7565b60a08201528260c08201520152565b614636611197565b6145f3565b614643611397565b9060008083526146516113f4565b602084015261465e6113f4565b60408401528060608401526146716145d7565b608084015261467e6113f4565b60a084015261468b6113f4565b60c08401526146986113b7565b60e084015280610100840152806101208401528061014084015280610160840152806101808401526101a0830152565b61041f9092919261012060e06101408301958051845260018060a01b0380602083015116602086015260408201516040860152606082015116606085015260018060601b0319608082015116608085015261472b60a082015160a086019061446b565b60c08101516101008501520151910190610a4d565b6040519061474d826111f1565b816147566113b7565b905256fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace4115afd72fb2573b80edceb720510a70225fa83510b4ecf26f2bd729aafb3e4510e5d75f4df634f7c0e19fee3620d2d34905e2dcd059beed6673032e56c98b8ba164736f6c6343000811000a`,
  BytecodeLen: 20348,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:79:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './src/contracts/auction.rsh:81:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:266:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:266:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:209:66:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './src/contracts/auction.rsh:266:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './src/contracts/auction.rsh:116:31:after expr stmt semicolon',
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
  "Auctioneer_acceptSale": Auctioneer_acceptSale,
  "Auctioneer_rejectSale": Auctioneer_rejectSale,
  "Auctioneer_stopAuction": Auctioneer_stopAuction,
  "Bidder_bid": Bidder_bid,
  "Bidder_optIn": Bidder_optIn,
  "Seller": Seller
  };
export const _APIs = {
  Auctioneer: {
    acceptSale: Auctioneer_acceptSale,
    rejectSale: Auctioneer_rejectSale,
    stopAuction: Auctioneer_stopAuction
    },
  Bidder: {
    bid: Bidder_bid,
    optIn: Bidder_optIn
    }
  };
