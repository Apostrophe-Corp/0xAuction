// Automatically generated with Reach 0.1.12 (1f68dfdb)
/* eslint-disable */
export const _version = '0.1.12';
export const _versionHash = '0.1.12 (1f68dfdb)';
export const _backendVersion = 26;

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
    bidSuccess: [ctc1, ctc1],
    created: [ctc1, ctc2],
    down: [ctc1, ctc1, ctc2, ctc4, ctc1, ctc0],
    endSuccess: [ctc1, ctc1],
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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc6, ctc9],
      6: [ctc0, ctc1, ctc4, ctc0, ctc2, ctc2, ctc9, ctc2],
      8: [ctc0, ctc1, ctc6, ctc10, ctc2, ctc0, ctc2, ctc6, ctc4, ctc2, ctc11, ctc0, ctc7, ctc7, ctc2, ctc9, ctc2]
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
export async function _Auctioneer_acceptSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale6 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_acceptSale0_430: ctc7,
    Auctioneer_rejectSale0_430: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v687, v688, v735, v758, v761, v1125, v1134, v1135] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1144 = ctc.selfAddress();
  const v1146 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:189:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:189:36:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to "runAuctioneer_acceptSale0_430" (defined at: ./src/contracts/auction.rsh:187:29:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:183:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1148 = stdlib.addressEq(v1144, v687);
  stdlib.assert(v1148, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:190:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:189:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:189:36:function exp)', 'at ./src/contracts/auction.rsh:189:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:189:36:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to "runAuctioneer_acceptSale0_430" (defined at: ./src/contracts/auction.rsh:187:29:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:183:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1152 = ['Auctioneer_acceptSale0_430', v1146];
  
  const txn1 = await (ctc.sendrecv({
    args: [v687, v688, v735, v758, v761, v1125, v1134, v1135, v1152],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:192:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1167], secs: v1169, time: v1168, didSend: v555, from: v1166 } = txn1;
      
      switch (v1167[0]) {
        case 'Auctioneer_acceptSale0_430': {
          const v1170 = v1167[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1177 = true;
          const v1178 = await txn1.getOutput('Auctioneer_acceptSale', 'v1177', ctc4, v1177);
          
          const v2956 = v1134;
          const v2957 = v1135;
          const v2958 = stdlib.le(v1168, v1125);
          const v2959 = v2958 ? false : false;
          if (v2959) {
            sim_r.isHalt = false;
            }
          else {
            const v2960 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
            const v2961 = v2960[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v758,
              tok: v688
              });
            sim_r.txns.push({
              kind: 'from',
              to: v687,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v688
              })
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }
          break;
          }
        case 'Auctioneer_rejectSale0_430': {
          const v1192 = v1167[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1167], secs: v1169, time: v1168, didSend: v555, from: v1166 } = txn1;
  switch (v1167[0]) {
    case 'Auctioneer_acceptSale0_430': {
      const v1170 = v1167[1];
      undefined /* setApiDetails */;
      ;
      const v1177 = true;
      const v1178 = await txn1.getOutput('Auctioneer_acceptSale', 'v1177', ctc4, v1177);
      if (v555) {
        stdlib.protect(ctc9, await interact.out(v1170, v1178), {
          at: './src/contracts/auction.rsh:188:33:application',
          fs: ['at ./src/contracts/auction.rsh:188:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:188:33:function exp)', 'at ./src/contracts/auction.rsh:194:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:193:42:function exp)', 'at ./src/contracts/auction.rsh:193:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:193:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v2956 = v1134;
      const v2957 = v1135;
      const v2958 = stdlib.le(v1168, v1125);
      const v2959 = v2958 ? false : false;
      if (v2959) {
        return;
        }
      else {
        const v2960 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
        const v2961 = v2960[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    case 'Auctioneer_rejectSale0_430': {
      const v1192 = v1167[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale6 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_acceptSale0_430: ctc7,
    Auctioneer_rejectSale0_430: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v687, v688, v735, v758, v761, v1125, v1134, v1135] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3]);
  const v1154 = ctc.selfAddress();
  const v1156 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:200:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:200:36:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to "runAuctioneer_rejectSale0_430" (defined at: ./src/contracts/auction.rsh:198:29:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:183:66:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1158 = stdlib.addressEq(v1154, v687);
  stdlib.assert(v1158, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:201:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:200:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:200:36:function exp)', 'at ./src/contracts/auction.rsh:200:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:200:36:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to "runAuctioneer_rejectSale0_430" (defined at: ./src/contracts/auction.rsh:198:29:function exp)', 'at ./src/contracts/auction.rsh:183:66:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:183:66:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1162 = ['Auctioneer_rejectSale0_430', v1156];
  
  const txn1 = await (ctc.sendrecv({
    args: [v687, v688, v735, v758, v761, v1125, v1134, v1135, v1162],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:203:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1167], secs: v1169, time: v1168, didSend: v555, from: v1166 } = txn1;
      
      switch (v1167[0]) {
        case 'Auctioneer_acceptSale0_430': {
          const v1170 = v1167[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_430': {
          const v1192 = v1167[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1207 = false;
          const v1208 = await txn1.getOutput('Auctioneer_rejectSale', 'v1207', ctc4, v1207);
          
          const v2989 = v1134;
          const v2990 = v1135;
          const v2991 = stdlib.le(v1168, v1125);
          const v2992 = v2991 ? false : false;
          if (v2992) {
            sim_r.isHalt = false;
            }
          else {
            const v2995 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
            const v2996 = v2995[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
            sim_r.txns.push({
              kind: 'from',
              to: v687,
              tok: v688
              });
            sim_r.txns.push({
              kind: 'from',
              to: v758,
              tok: undefined /* Nothing */
              });
            null;
            sim_r.txns.push({
              kind: 'halt',
              tok: v688
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
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc3, ctc6, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1167], secs: v1169, time: v1168, didSend: v555, from: v1166 } = txn1;
  switch (v1167[0]) {
    case 'Auctioneer_acceptSale0_430': {
      const v1170 = v1167[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_430': {
      const v1192 = v1167[1];
      undefined /* setApiDetails */;
      ;
      const v1207 = false;
      const v1208 = await txn1.getOutput('Auctioneer_rejectSale', 'v1207', ctc4, v1207);
      if (v555) {
        stdlib.protect(ctc9, await interact.out(v1192, v1208), {
          at: './src/contracts/auction.rsh:199:33:application',
          fs: ['at ./src/contracts/auction.rsh:199:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:199:33:function exp)', 'at ./src/contracts/auction.rsh:205:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:204:42:function exp)', 'at ./src/contracts/auction.rsh:204:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:204:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v2989 = v1134;
      const v2990 = v1135;
      const v2991 = stdlib.le(v1168, v1125);
      const v2992 = v2991 ? false : false;
      if (v2992) {
        return;
        }
      else {
        const v2995 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
        const v2996 = v2995[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
        ;
        ;
        null;
        return;
        }
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction8 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v687, v688, v690, v709, v714, v727, v733, v734, v735, v755, v757, v758, v759, v760, v761, v768, v769] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v780 = ctc.selfAddress();
  const v782 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:152:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:36:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:150:29:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v784 = stdlib.addressEq(v780, v687);
  stdlib.assert(v784, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:153:46:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:152:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:36:function exp)', 'at ./src/contracts/auction.rsh:152:36:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:152:36:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runAuctioneer_stopAuction0_123" (defined at: ./src/contracts/auction.rsh:150:29:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v788 = ['Auctioneer_stopAuction0_123', v782];
  
  const txn1 = await (ctc.sendrecv({
    args: [v687, v688, v690, v709, v714, v727, v733, v734, v735, v755, v757, v758, v759, v760, v761, v768, v769, v788],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:155:39:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v819], secs: v821, time: v820, didSend: v317, from: v818 } = txn1;
      
      switch (v819[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v822 = v819[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          null;
          const v836 = {
            blockEnded: v820,
            id: v714,
            lastBid: v761
            };
          const v837 = await txn1.getOutput('Auctioneer_stopAuction', 'v836', ctc6, v836);
          
          const v2997 = v836;
          const v2998 = v758;
          const v2999 = v759;
          const v3000 = false;
          const v3001 = v761;
          const v3003 = v768;
          const v3004 = v769;
          const v3005 = stdlib.le(v820, v755);
          const v3006 = v3005 ? false : false;
          if (v3006) {
            sim_r.isHalt = false;
            }
          else {
            const v3007 = await (async () => {
              sim_r.txns.push({
                kind: 'remote',
                obj: v690,
                remote: ({
                  accs: [],
                  apps: [],
                  bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                  fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                  pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                  toks: []
                  })
                })
              return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
            const v3008 = await txn1.getOutput('internal', 'v3007', ctc13, v3007);
            const v3009 = v3008[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3010 = stdlib.add(v769, v3009);
            null;
            const v3012 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
            if (v3012) {
              const v3013 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3041 = v768;
              const v3042 = v3010;
              const v3043 = stdlib.le(v820, v3013);
              if (v3043) {
                sim_r.isHalt = false;
                }
              else {
                const v3045 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                const v3046 = v3045[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v758,
                  tok: v688
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v687,
                  tok: undefined /* Nothing */
                  });
                null;
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v688
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}
            else {
              const v3036 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              const v3037 = v3036[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v687,
                tok: v688
                });
              sim_r.txns.push({
                kind: 'from',
                to: v758,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v688
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}
          break;
          }
        case 'Bidder_bid0_123': {
          const v916 = v819[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1010 = v819[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v819], secs: v821, time: v820, didSend: v317, from: v818 } = txn1;
  switch (v819[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v822 = v819[1];
      undefined /* setApiDetails */;
      ;
      null;
      const v836 = {
        blockEnded: v820,
        id: v714,
        lastBid: v761
        };
      const v837 = await txn1.getOutput('Auctioneer_stopAuction', 'v836', ctc6, v836);
      if (v317) {
        stdlib.protect(ctc12, await interact.out(v822, v837), {
          at: './src/contracts/auction.rsh:151:33:application',
          fs: ['at ./src/contracts/auction.rsh:151:33:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:151:33:function exp)', 'at ./src/contracts/auction.rsh:163:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:156:42:function exp)', 'at ./src/contracts/auction.rsh:156:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:156:42:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v2997 = v836;
      const v2998 = v758;
      const v2999 = v759;
      const v3000 = false;
      const v3001 = v761;
      const v3003 = v768;
      const v3004 = v769;
      const v3005 = stdlib.le(v820, v755);
      const v3006 = v3005 ? false : false;
      if (v3006) {
        return;
        }
      else {
        const v3007 = undefined /* Remote */;
        const v3008 = await txn1.getOutput('internal', 'v3007', ctc13, v3007);
        const v3009 = v3008[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
        const v3010 = stdlib.add(v769, v3009);
        const v3011 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3009);
        stdlib.assert(v3011, {
          at: './src/contracts/auction.rsh:168:37:application',
          fs: [],
          msg: 'remote bill check',
          who: 'Auctioneer_stopAuction'
          });
        null;
        const v3012 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
        if (v3012) {
          const v3013 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v3041 = v768;
          const v3042 = v3010;
          const v3043 = stdlib.le(v820, v3013);
          if (v3043) {
            return;
            }
          else {
            const v3045 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
            const v3046 = v3045[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
            ;
            ;
            null;
            return;
            }}
        else {
          const v3036 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
          const v3037 = v3036[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
          ;
          ;
          return;
          }}
      break;
      }
    case 'Bidder_bid0_123': {
      const v916 = v819[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1010 = v819[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid8 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Tuple([ctc0, ctc4]);
  const ctc13 = stdlib.T_Null;
  const ctc14 = stdlib.T_Tuple([ctc4, ctc13]);
  
  
  const [v687, v688, v690, v709, v714, v727, v733, v734, v735, v755, v757, v758, v759, v760, v761, v768, v769] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v792 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:124:30:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v793 = v792[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v795 = stdlib.gt(v793, v761);
  stdlib.assert(v795, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:125:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runBidder_bid0_123" (defined at: ./src/contracts/auction.rsh:124:30:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v802 = ['Bidder_bid0_123', v792];
  
  const txn1 = await (ctc.sendrecv({
    args: [v687, v688, v690, v709, v714, v727, v733, v734, v735, v755, v757, v758, v759, v760, v761, v768, v769, v802],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [v793, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v819], secs: v821, time: v820, didSend: v317, from: v818 } = txn1;
      
      switch (v819[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v822 = v819[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v916 = v819[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v922 = v916[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:124:30:spread', stdlib.UInt_max, '0')];
          const v927 = stdlib.add(v769, v922);
          sim_r.txns.push({
            amt: v922,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v947 = [v758, v761];
          const v948 = await txn1.getOutput('Bidder_bid', 'v947', ctc12, v947);
          
          if (v759) {
            null;
            const v3413 = v757;
            const v3414 = v818;
            const v3415 = false;
            const v3416 = v760;
            const v3417 = v922;
            const v3419 = v768;
            const v3420 = v927;
            const v3421 = stdlib.le(v820, v755);
            const v3422 = v3421 ? v760 : false;
            if (v3422) {
              sim_r.isHalt = false;
              }
            else {
              const v3423 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v690,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              const v3424 = await txn1.getOutput('internal', 'v3423', ctc14, v3423);
              const v3425 = v3424[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
              const v3426 = stdlib.add(v927, v3425);
              null;
              const v3428 = stdlib.gt(v922, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
              if (v3428) {
                const v3429 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3457 = v768;
                const v3458 = v3426;
                const v3459 = stdlib.le(v820, v3429);
                if (v3459) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3461 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                  const v3462 = v3461[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v818,
                    tok: v688
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v687,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v688
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3452 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                const v3453 = v3452[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v687,
                  tok: v688
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v818,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v688
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          else {
            const v960 = stdlib.sub(v927, v761);
            sim_r.txns.push({
              kind: 'from',
              to: v758,
              tok: undefined /* Nothing */
              });
            null;
            const v3465 = v757;
            const v3466 = v818;
            const v3467 = false;
            const v3468 = v760;
            const v3469 = v922;
            const v3471 = v768;
            const v3472 = v960;
            const v3473 = stdlib.le(v820, v755);
            const v3474 = v3473 ? v760 : false;
            if (v3474) {
              sim_r.isHalt = false;
              }
            else {
              const v3475 = await (async () => {
                sim_r.txns.push({
                  kind: 'remote',
                  obj: v690,
                  remote: ({
                    accs: [],
                    apps: [],
                    bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                    pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                    toks: []
                    })
                  })
                return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc13.defaultValue /* simReturnVal */];})();
              const v3476 = await txn1.getOutput('internal', 'v3475', ctc14, v3475);
              const v3477 = v3476[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
              const v3478 = stdlib.add(v960, v3477);
              null;
              const v3480 = stdlib.gt(v922, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
              if (v3480) {
                const v3481 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                const v3509 = v768;
                const v3510 = v3478;
                const v3511 = stdlib.le(v820, v3481);
                if (v3511) {
                  sim_r.isHalt = false;
                  }
                else {
                  const v3513 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                  const v3514 = v3513[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v818,
                    tok: v688
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v687,
                    tok: undefined /* Nothing */
                    });
                  null;
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v688
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}
              else {
                const v3504 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                const v3505 = v3504[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v687,
                  tok: v688
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v818,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v688
                  })
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                }}}
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1010 = v819[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v819], secs: v821, time: v820, didSend: v317, from: v818 } = txn1;
  switch (v819[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v822 = v819[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v916 = v819[1];
      undefined /* setApiDetails */;
      const v922 = v916[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:124:30:spread', stdlib.UInt_max, '0')];
      const v923 = stdlib.gt(v922, v761);
      stdlib.assert(v923, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:125:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v927 = stdlib.add(v769, v922);
      ;
      const v947 = [v758, v761];
      const v948 = await txn1.getOutput('Bidder_bid', 'v947', ctc12, v947);
      if (v317) {
        stdlib.protect(ctc13, await interact.out(v916, v948), {
          at: './src/contracts/auction.rsh:124:31:application',
          fs: ['at ./src/contracts/auction.rsh:124:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:31:function exp)', 'at ./src/contracts/auction.rsh:129:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:128:50:function exp)', 'at ./src/contracts/auction.rsh:128:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:128:50:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v759) {
        null;
        const v3413 = v757;
        const v3414 = v818;
        const v3415 = false;
        const v3416 = v760;
        const v3417 = v922;
        const v3419 = v768;
        const v3420 = v927;
        const v3421 = stdlib.le(v820, v755);
        const v3422 = v3421 ? v760 : false;
        if (v3422) {
          return;
          }
        else {
          const v3423 = undefined /* Remote */;
          const v3424 = await txn1.getOutput('internal', 'v3423', ctc14, v3423);
          const v3425 = v3424[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
          const v3426 = stdlib.add(v927, v3425);
          const v3427 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3425);
          stdlib.assert(v3427, {
            at: './src/contracts/auction.rsh:168:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3428 = stdlib.gt(v922, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
          if (v3428) {
            const v3429 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3457 = v768;
            const v3458 = v3426;
            const v3459 = stdlib.le(v820, v3429);
            if (v3459) {
              return;
              }
            else {
              const v3461 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
              const v3462 = v3461[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3452 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
            const v3453 = v3452[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      else {
        const v960 = stdlib.sub(v927, v761);
        ;
        null;
        const v3465 = v757;
        const v3466 = v818;
        const v3467 = false;
        const v3468 = v760;
        const v3469 = v922;
        const v3471 = v768;
        const v3472 = v960;
        const v3473 = stdlib.le(v820, v755);
        const v3474 = v3473 ? v760 : false;
        if (v3474) {
          return;
          }
        else {
          const v3475 = undefined /* Remote */;
          const v3476 = await txn1.getOutput('internal', 'v3475', ctc14, v3475);
          const v3477 = v3476[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
          const v3478 = stdlib.add(v960, v3477);
          const v3479 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3477);
          stdlib.assert(v3479, {
            at: './src/contracts/auction.rsh:168:37:application',
            fs: [],
            msg: 'remote bill check',
            who: 'Bidder_bid'
            });
          null;
          const v3480 = stdlib.gt(v922, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
          if (v3480) {
            const v3481 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            const v3509 = v768;
            const v3510 = v3478;
            const v3511 = stdlib.le(v820, v3481);
            if (v3511) {
              return;
              }
            else {
              const v3513 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
              const v3514 = v3513[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
              ;
              ;
              null;
              return;
              }}
          else {
            const v3504 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
            const v3505 = v3504[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
            ;
            ;
            return;
            }}}
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1010 = v819[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn8(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn8 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn8 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_stopAuction0_123: ctc3,
    Bidder_bid0_123: ctc10,
    Bidder_optIn0_123: ctc3
    });
  const ctc12 = stdlib.T_Null;
  const ctc13 = stdlib.T_Tuple([ctc4, ctc12]);
  
  
  const [v687, v688, v690, v709, v714, v727, v733, v734, v735, v755, v757, v758, v759, v760, v761, v768, v769] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8'), [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4]);
  const v806 = stdlib.protect(ctc3, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:137:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:48:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to "runBidder_optIn0_123" (defined at: ./src/contracts/auction.rsh:137:30:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v810 = ['Bidder_optIn0_123', v806];
  
  const txn1 = await (ctc.sendrecv({
    args: [v687, v688, v690, v709, v714, v727, v733, v734, v735, v755, v757, v758, v759, v760, v761, v768, v769, v810],
    evt_cnt: 1,
    funcNum: 5,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc11],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v819], secs: v821, time: v820, didSend: v317, from: v818 } = txn1;
      
      switch (v819[0]) {
        case 'Auctioneer_stopAuction0_123': {
          const v822 = v819[1];
          
          break;
          }
        case 'Bidder_bid0_123': {
          const v916 = v819[1];
          
          break;
          }
        case 'Bidder_optIn0_123': {
          const v1010 = v819[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1021 = stdlib.add(v769, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1059 = stdlib.ge(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
          if (v1059) {
            const v1063 = stdlib.sub(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v727,
              tok: undefined /* Nothing */
              });
            const v1065 = stdlib.ge(v1063, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            if (v1065) {
              const v1069 = stdlib.sub(v1063, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v687,
                tok: undefined /* Nothing */
                });
              const v1070 = true;
              const v1071 = await txn1.getOutput('Bidder_optIn', 'v1070', ctc7, v1070);
              
              const v3881 = v757;
              const v3882 = v758;
              const v3883 = v759;
              const v3884 = v760;
              const v3885 = v761;
              const v3887 = v768;
              const v3888 = v1069;
              const v3889 = stdlib.le(v820, v755);
              const v3890 = v3889 ? v760 : false;
              if (v3890) {
                sim_r.isHalt = false;
                }
              else {
                const v3891 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v690,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3892 = await txn1.getOutput('internal', 'v3891', ctc13, v3891);
                const v3893 = v3892[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v3894 = stdlib.add(v1069, v3893);
                null;
                const v3896 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
                if (v3896) {
                  const v3897 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v3925 = v768;
                  const v3926 = v3894;
                  const v3927 = stdlib.le(v820, v3897);
                  if (v3927) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v3929 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    const v3930 = v3929[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v758,
                      tok: v688
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v687,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v688
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v3920 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  const v3921 = v3920[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v687,
                    tok: v688
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v758,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v688
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1077 = true;
              const v1078 = await txn1.getOutput('Bidder_optIn', 'v1077', ctc7, v1077);
              
              const v3933 = v757;
              const v3934 = v758;
              const v3935 = v759;
              const v3936 = v760;
              const v3937 = v761;
              const v3939 = v768;
              const v3940 = v1063;
              const v3941 = stdlib.le(v820, v755);
              const v3942 = v3941 ? v760 : false;
              if (v3942) {
                sim_r.isHalt = false;
                }
              else {
                const v3943 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v690,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3944 = await txn1.getOutput('internal', 'v3943', ctc13, v3943);
                const v3945 = v3944[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v3946 = stdlib.add(v1063, v3945);
                null;
                const v3948 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
                if (v3948) {
                  const v3949 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v3977 = v768;
                  const v3978 = v3946;
                  const v3979 = stdlib.le(v820, v3949);
                  if (v3979) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v3981 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    const v3982 = v3981[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v758,
                      tok: v688
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v687,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v688
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v3972 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  const v3973 = v3972[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v687,
                    tok: v688
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v758,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v688
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}}
          else {
            const v1085 = stdlib.ge(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            if (v1085) {
              const v1089 = stdlib.sub(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v687,
                tok: undefined /* Nothing */
                });
              const v1090 = true;
              const v1091 = await txn1.getOutput('Bidder_optIn', 'v1090', ctc7, v1090);
              
              const v3985 = v757;
              const v3986 = v758;
              const v3987 = v759;
              const v3988 = v760;
              const v3989 = v761;
              const v3991 = v768;
              const v3992 = v1089;
              const v3993 = stdlib.le(v820, v755);
              const v3994 = v3993 ? v760 : false;
              if (v3994) {
                sim_r.isHalt = false;
                }
              else {
                const v3995 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v690,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v3996 = await txn1.getOutput('internal', 'v3995', ctc13, v3995);
                const v3997 = v3996[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v3998 = stdlib.add(v1089, v3997);
                null;
                const v4000 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
                if (v4000) {
                  const v4001 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4029 = v768;
                  const v4030 = v3998;
                  const v4031 = stdlib.le(v820, v4001);
                  if (v4031) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4033 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    const v4034 = v4033[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v758,
                      tok: v688
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v687,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v688
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4024 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  const v4025 = v4024[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v687,
                    tok: v688
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v758,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v688
                    })
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }}}
            else {
              const v1097 = true;
              const v1098 = await txn1.getOutput('Bidder_optIn', 'v1097', ctc7, v1097);
              
              const v4037 = v757;
              const v4038 = v758;
              const v4039 = v759;
              const v4040 = v760;
              const v4041 = v761;
              const v4043 = v768;
              const v4044 = v1021;
              const v4045 = stdlib.le(v820, v755);
              const v4046 = v4045 ? v760 : false;
              if (v4046) {
                sim_r.isHalt = false;
                }
              else {
                const v4047 = await (async () => {
                  sim_r.txns.push({
                    kind: 'remote',
                    obj: v690,
                    remote: ({
                      accs: [],
                      apps: [],
                      bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
                      pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
                      toks: []
                      })
                    })
                  return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc12.defaultValue /* simReturnVal */];})();
                const v4048 = await txn1.getOutput('internal', 'v4047', ctc13, v4047);
                const v4049 = v4048[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
                const v4050 = stdlib.add(v1021, v4049);
                null;
                const v4052 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
                if (v4052) {
                  const v4053 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                  const v4081 = v768;
                  const v4082 = v4050;
                  const v4083 = stdlib.le(v820, v4053);
                  if (v4083) {
                    sim_r.isHalt = false;
                    }
                  else {
                    const v4085 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    const v4086 = v4085[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                    sim_r.txns.push({
                      kind: 'from',
                      to: v758,
                      tok: v688
                      });
                    sim_r.txns.push({
                      kind: 'from',
                      to: v687,
                      tok: undefined /* Nothing */
                      });
                    null;
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: v688
                      })
                    sim_r.txns.push({
                      kind: 'halt',
                      tok: undefined /* Nothing */
                      })
                    sim_r.isHalt = true;
                    }}
                else {
                  const v4076 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  const v4077 = v4076[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
                  sim_r.txns.push({
                    kind: 'from',
                    to: v687,
                    tok: v688
                    });
                  sim_r.txns.push({
                    kind: 'from',
                    to: v758,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: v688
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
    tys: [ctc0, ctc1, ctc2, ctc3, ctc4, ctc0, ctc4, ctc2, ctc5, ctc4, ctc6, ctc0, ctc7, ctc7, ctc4, ctc9, ctc4, ctc11],
    waitIfNotPresent: false
    }));
  const {data: [v819], secs: v821, time: v820, didSend: v317, from: v818 } = txn1;
  switch (v819[0]) {
    case 'Auctioneer_stopAuction0_123': {
      const v822 = v819[1];
      return;
      break;
      }
    case 'Bidder_bid0_123': {
      const v916 = v819[1];
      return;
      break;
      }
    case 'Bidder_optIn0_123': {
      const v1010 = v819[1];
      undefined /* setApiDetails */;
      const v1021 = stdlib.add(v769, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1059 = stdlib.ge(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
      if (v1059) {
        const v1063 = stdlib.sub(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
        ;
        const v1065 = stdlib.ge(v1063, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
        if (v1065) {
          const v1069 = stdlib.sub(v1063, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1070 = true;
          const v1071 = await txn1.getOutput('Bidder_optIn', 'v1070', ctc7, v1070);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1010, v1071), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3881 = v757;
          const v3882 = v758;
          const v3883 = v759;
          const v3884 = v760;
          const v3885 = v761;
          const v3887 = v768;
          const v3888 = v1069;
          const v3889 = stdlib.le(v820, v755);
          const v3890 = v3889 ? v760 : false;
          if (v3890) {
            return;
            }
          else {
            const v3891 = undefined /* Remote */;
            const v3892 = await txn1.getOutput('internal', 'v3891', ctc13, v3891);
            const v3893 = v3892[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3894 = stdlib.add(v1069, v3893);
            const v3895 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3893);
            stdlib.assert(v3895, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v3896 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
            if (v3896) {
              const v3897 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3925 = v768;
              const v3926 = v3894;
              const v3927 = stdlib.le(v820, v3897);
              if (v3927) {
                return;
                }
              else {
                const v3929 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                const v3930 = v3929[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v3920 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              const v3921 = v3920[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1077 = true;
          const v1078 = await txn1.getOutput('Bidder_optIn', 'v1077', ctc7, v1077);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1010, v1078), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3933 = v757;
          const v3934 = v758;
          const v3935 = v759;
          const v3936 = v760;
          const v3937 = v761;
          const v3939 = v768;
          const v3940 = v1063;
          const v3941 = stdlib.le(v820, v755);
          const v3942 = v3941 ? v760 : false;
          if (v3942) {
            return;
            }
          else {
            const v3943 = undefined /* Remote */;
            const v3944 = await txn1.getOutput('internal', 'v3943', ctc13, v3943);
            const v3945 = v3944[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3946 = stdlib.add(v1063, v3945);
            const v3947 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3945);
            stdlib.assert(v3947, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v3948 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
            if (v3948) {
              const v3949 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v3977 = v768;
              const v3978 = v3946;
              const v3979 = stdlib.le(v820, v3949);
              if (v3979) {
                return;
                }
              else {
                const v3981 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                const v3982 = v3981[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v3972 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              const v3973 = v3972[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}}
      else {
        const v1085 = stdlib.ge(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
        if (v1085) {
          const v1089 = stdlib.sub(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          ;
          const v1090 = true;
          const v1091 = await txn1.getOutput('Bidder_optIn', 'v1090', ctc7, v1090);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1010, v1091), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v3985 = v757;
          const v3986 = v758;
          const v3987 = v759;
          const v3988 = v760;
          const v3989 = v761;
          const v3991 = v768;
          const v3992 = v1089;
          const v3993 = stdlib.le(v820, v755);
          const v3994 = v3993 ? v760 : false;
          if (v3994) {
            return;
            }
          else {
            const v3995 = undefined /* Remote */;
            const v3996 = await txn1.getOutput('internal', 'v3995', ctc13, v3995);
            const v3997 = v3996[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v3998 = stdlib.add(v1089, v3997);
            const v3999 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v3997);
            stdlib.assert(v3999, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4000 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
            if (v4000) {
              const v4001 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4029 = v768;
              const v4030 = v3998;
              const v4031 = stdlib.le(v820, v4001);
              if (v4031) {
                return;
                }
              else {
                const v4033 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                const v4034 = v4033[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4024 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              const v4025 = v4024[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              ;
              ;
              return;
              }}}
        else {
          const v1097 = true;
          const v1098 = await txn1.getOutput('Bidder_optIn', 'v1097', ctc7, v1097);
          if (v317) {
            stdlib.protect(ctc12, await interact.out(v1010, v1098), {
              at: './src/contracts/auction.rsh:137:31:application',
              fs: ['at ./src/contracts/auction.rsh:137:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:31:function exp)', 'at ./src/contracts/auction.rsh:145:55:application call to "notify" (defined at: ./src/contracts/auction.rsh:140:50:function exp)', 'at ./src/contracts/auction.rsh:140:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:50:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4037 = v757;
          const v4038 = v758;
          const v4039 = v759;
          const v4040 = v760;
          const v4041 = v761;
          const v4043 = v768;
          const v4044 = v1021;
          const v4045 = stdlib.le(v820, v755);
          const v4046 = v4045 ? v760 : false;
          if (v4046) {
            return;
            }
          else {
            const v4047 = undefined /* Remote */;
            const v4048 = await txn1.getOutput('internal', 'v4047', ctc13, v4047);
            const v4049 = v4048[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
            const v4050 = stdlib.add(v1021, v4049);
            const v4051 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v4049);
            stdlib.assert(v4051, {
              at: './src/contracts/auction.rsh:168:37:application',
              fs: [],
              msg: 'remote bill check',
              who: 'Bidder_optIn'
              });
            null;
            const v4052 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
            if (v4052) {
              const v4053 = stdlib.safeAdd(v820, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              const v4081 = v768;
              const v4082 = v4050;
              const v4083 = stdlib.le(v820, v4053);
              if (v4083) {
                return;
                }
              else {
                const v4085 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                const v4086 = v4085[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
                ;
                ;
                null;
                return;
                }}
            else {
              const v4076 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
              const v4077 = v4076[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
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
  const ctc9 = stdlib.T_Tuple([ctc1, ctc3]);
  const ctc10 = stdlib.T_Null;
  const ctc11 = stdlib.T_Tuple([ctc1, ctc10]);
  const ctc12 = stdlib.T_Tuple([]);
  const ctc13 = stdlib.T_Tuple([ctc1]);
  const ctc14 = stdlib.T_Data({
    Auctioneer_stopAuction0_123: ctc12,
    Bidder_bid0_123: ctc13,
    Bidder_optIn0_123: ctc12
    });
  const ctc15 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc16 = stdlib.T_Tuple([ctc3, ctc1]);
  const ctc17 = stdlib.T_Bool;
  const ctc18 = stdlib.T_Data({
    Auctioneer_acceptSale0_430: ctc12,
    Auctioneer_rejectSale0_430: ctc12
    });
  const ctc19 = stdlib.T_Tuple([ctc1, ctc1, ctc17]);
  const ctc20 = stdlib.T_Array(ctc19, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  
  
  const v664 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v665 = [v664];
  const v669 = stdlib.protect(ctc6, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v670 = v669.adminContract;
  const v671 = v669.deadline;
  const v672 = v669.description;
  const v673 = v669.owner;
  const v674 = v669.price;
  const v675 = v669.title;
  const v676 = v669.tokenId;
  
  const v686 = {
    deadline: v671,
    description: v672,
    owner: v673,
    price: v674,
    title: v675
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v676, v686, v670],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc5, ctc7, ctc0],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v688, v689, v690], secs: v692, time: v691, didSend: v44, from: v687 } = txn1;
      
      const v693 = v665[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
      const v694 = stdlib.Array_set(v693, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
      const v695 = stdlib.Array_set(v665, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v694);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v688
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
  const {data: [v688, v689, v690], secs: v692, time: v691, didSend: v44, from: v687 } = txn1;
  const v693 = v665[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0')];
  const v694 = stdlib.Array_set(v693, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'));
  const v695 = stdlib.Array_set(v665, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:71:16:dot', stdlib.UInt_max, '0'), v694);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v687, v688, v689, v690, v695],
    evt_cnt: 0,
    funcNum: 1,
    lct: v691,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v688]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v699, time: v698, didSend: v51, from: v697 } = txn2;
      
      ;
      const v700 = v695[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v701 = v700[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
      const v702 = stdlib.add(v701, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v704 = stdlib.Array_set(v700, '0', v702);
      const v705 = stdlib.Array_set(v695, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v704);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v688
        });
      const v709 = [];
      const v710 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v690,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc1.defaultValue /* simReturnVal */];})();
      const v711 = await txn2.getOutput('internal', 'v710', ctc8, v710);
      const v713 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0')];
      const v714 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '1')];
      const v723 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v690,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc3.defaultValue /* simReturnVal */];})();
      const v724 = await txn2.getOutput('internal', 'v723', ctc9, v723);
      const v726 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0')];
      const v727 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '1')];
      const v731 = stdlib.add(v713, v726);
      const v733 = v698;
      const v734 = await ctc.getContractInfo();
      const v735 = v689.title;
      const v736 = v689.description;
      const v737 = v689.price;
      const v741 = {
        blockCreated: v698,
        contractInfo: v734,
        description: v736,
        id: v714,
        owner: v687,
        price: v737,
        title: v735,
        tokenId: v688
        };
      const v742 = await (async () => {
        sim_r.txns.push({
          kind: 'remote',
          obj: v690,
          remote: ({
            accs: [],
            apps: [],
            bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0'),
            fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
            pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0'),
            toks: []
            })
          })
        return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
      const v743 = await txn2.getOutput('internal', 'v742', ctc11, v742);
      const v745 = v743[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0')];
      const v750 = stdlib.add(v731, v745);
      const v754 = v689.deadline;
      const v755 = stdlib.safeAdd(v698, v754);
      null;
      const v756 = {
        blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
        };
      const v757 = v756;
      const v758 = v687;
      const v759 = true;
      const v760 = true;
      const v761 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:25:decimal', stdlib.UInt_max, '0');
      const v762 = v698;
      const v768 = v705;
      const v769 = v750;
      
      if (await (async () => {
        const v778 = stdlib.le(v762, v755);
        const v779 = v778 ? v760 : false;
        
        return v779;})()) {
        sim_r.isHalt = false;
        }
      else {
        const v1110 = await (async () => {
          sim_r.txns.push({
            kind: 'remote',
            obj: v690,
            remote: ({
              accs: [],
              apps: [],
              bills: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
              fees: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
              pays: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0'),
              toks: []
              })
            })
          return [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0') /* simNetRecv */, ctc10.defaultValue /* simReturnVal */];})();
        const v1111 = await txn3.getOutput('internal', 'v1110', ctc11, v1110);
        const v1113 = v1111[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
        const v1118 = stdlib.add(v769, v1113);
        null;
        const v1123 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
        if (v1123) {
          const v1125 = stdlib.safeAdd(v762, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          const v1126 = true;
          const v1127 = true;
          const v1128 = v762;
          const v1134 = v768;
          const v1135 = v1118;
          
          if (await (async () => {
            const v1142 = stdlib.le(v1128, v1125);
            const v1143 = v1142 ? v1127 : false;
            
            return v1143;})()) {
            sim_r.isHalt = false;
            }
          else {
            if (v1126) {
              const v1214 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
              const v1215 = v1214[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v758,
                tok: v688
                });
              sim_r.txns.push({
                kind: 'from',
                to: v687,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v688
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }
            else {
              const v1236 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              const v1237 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v687,
                tok: v688
                });
              sim_r.txns.push({
                kind: 'from',
                to: v758,
                tok: undefined /* Nothing */
                });
              null;
              sim_r.txns.push({
                kind: 'halt',
                tok: v688
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }}}
        else {
          const v1258 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
          const v1259 = v1258[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v687,
            tok: v688
            });
          sim_r.txns.push({
            kind: 'from',
            to: v758,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v688
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
    tys: [ctc3, ctc5, ctc7, ctc0, ctc20],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v699, time: v698, didSend: v51, from: v697 } = txn2;
  ;
  const v700 = v695[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v701 = v700[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0')];
  const v702 = stdlib.add(v701, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v704 = stdlib.Array_set(v700, '0', v702);
  const v705 = stdlib.Array_set(v695, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:73:16:dot', stdlib.UInt_max, '0'), v704);
  ;
  const v706 = stdlib.addressEq(v687, v697);
  stdlib.assert(v706, {
    at: './src/contracts/auction.rsh:73:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v709 = [];
  const v710 = undefined /* Remote */;
  const v711 = await txn2.getOutput('internal', 'v710', ctc8, v710);
  const v713 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '0')];
  const v714 = v711[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:84:48:application', stdlib.UInt_max, '1')];
  const v719 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v713);
  stdlib.assert(v719, {
    at: './src/contracts/auction.rsh:84:48:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v723 = undefined /* Remote */;
  const v724 = await txn2.getOutput('internal', 'v723', ctc9, v723);
  const v726 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '0')];
  const v727 = v724[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:85:68:application', stdlib.UInt_max, '1')];
  const v731 = stdlib.add(v713, v726);
  const v732 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v726);
  stdlib.assert(v732, {
    at: './src/contracts/auction.rsh:85:68:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v733 = v698;
  const v734 = await ctc.getContractInfo();
  const v735 = v689.title;
  const v736 = v689.description;
  const v737 = v689.price;
  const v741 = {
    blockCreated: v698,
    contractInfo: v734,
    description: v736,
    id: v714,
    owner: v687,
    price: v737,
    title: v735,
    tokenId: v688
    };
  const v742 = undefined /* Remote */;
  const v743 = await txn2.getOutput('internal', 'v742', ctc11, v742);
  const v745 = v743[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:100:39:application', stdlib.UInt_max, '0')];
  const v750 = stdlib.add(v731, v745);
  const v751 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v745);
  stdlib.assert(v751, {
    at: './src/contracts/auction.rsh:100:39:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  const v754 = v689.deadline;
  const v755 = stdlib.safeAdd(v698, v754);
  null;
  const v756 = {
    blockEnded: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    id: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    lastBid: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')
    };
  let v757 = v756;
  let v758 = v687;
  let v759 = true;
  let v760 = true;
  let v761 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:25:decimal', stdlib.UInt_max, '0');
  let v762 = v698;
  let v768 = v705;
  let v769 = v750;
  
  let txn3 = txn2;
  while (await (async () => {
    const v778 = stdlib.le(v762, v755);
    const v779 = v778 ? v760 : false;
    
    return v779;})()) {
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 5,
      out_tys: [ctc14],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v819], secs: v821, time: v820, didSend: v317, from: v818 } = txn4;
    switch (v819[0]) {
      case 'Auctioneer_stopAuction0_123': {
        const v822 = v819[1];
        undefined /* setApiDetails */;
        ;
        null;
        const v836 = {
          blockEnded: v820,
          id: v714,
          lastBid: v761
          };
        await txn4.getOutput('Auctioneer_stopAuction', 'v836', ctc15, v836);
        const cv757 = v836;
        const cv758 = v758;
        const cv759 = v759;
        const cv760 = false;
        const cv761 = v761;
        const cv762 = v820;
        const cv768 = v768;
        const cv769 = v769;
        
        v757 = cv757;
        v758 = cv758;
        v759 = cv759;
        v760 = cv760;
        v761 = cv761;
        v762 = cv762;
        v768 = cv768;
        v769 = cv769;
        
        txn3 = txn4;
        continue;
        break;
        }
      case 'Bidder_bid0_123': {
        const v916 = v819[1];
        undefined /* setApiDetails */;
        const v922 = v916[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:124:30:spread', stdlib.UInt_max, '0')];
        const v923 = stdlib.gt(v922, v761);
        stdlib.assert(v923, {
          at: 'reach standard library:57:5:application',
          fs: ['at ./src/contracts/auction.rsh:125:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:124:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:49:function exp)', 'at ./src/contracts/auction.rsh:107:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:107:31:function exp)'],
          msg: 'Your bid is too low, please try again',
          who: 'Seller'
          });
        const v927 = stdlib.add(v769, v922);
        ;
        const v947 = [v758, v761];
        await txn4.getOutput('Bidder_bid', 'v947', ctc16, v947);
        if (v759) {
          null;
          const cv757 = v757;
          const cv758 = v818;
          const cv759 = false;
          const cv760 = v760;
          const cv761 = v922;
          const cv762 = v820;
          const cv768 = v768;
          const cv769 = v927;
          
          v757 = cv757;
          v758 = cv758;
          v759 = cv759;
          v760 = cv760;
          v761 = cv761;
          v762 = cv762;
          v768 = cv768;
          v769 = cv769;
          
          txn3 = txn4;
          continue;}
        else {
          const v960 = stdlib.sub(v927, v761);
          ;
          null;
          const cv757 = v757;
          const cv758 = v818;
          const cv759 = false;
          const cv760 = v760;
          const cv761 = v922;
          const cv762 = v820;
          const cv768 = v768;
          const cv769 = v960;
          
          v757 = cv757;
          v758 = cv758;
          v759 = cv759;
          v760 = cv760;
          v761 = cv761;
          v762 = cv762;
          v768 = cv768;
          v769 = cv769;
          
          txn3 = txn4;
          continue;}
        break;
        }
      case 'Bidder_optIn0_123': {
        const v1010 = v819[1];
        undefined /* setApiDetails */;
        const v1021 = stdlib.add(v769, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
        ;
        const v1059 = stdlib.ge(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
        if (v1059) {
          const v1063 = stdlib.sub(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:141:83:application', stdlib.UInt_max, '900000'));
          ;
          const v1065 = stdlib.ge(v1063, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          if (v1065) {
            const v1069 = stdlib.sub(v1063, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1070 = true;
            await txn4.getOutput('Bidder_optIn', 'v1070', ctc17, v1070);
            const cv757 = v757;
            const cv758 = v758;
            const cv759 = v759;
            const cv760 = v760;
            const cv761 = v761;
            const cv762 = v820;
            const cv768 = v768;
            const cv769 = v1069;
            
            v757 = cv757;
            v758 = cv758;
            v759 = cv759;
            v760 = cv760;
            v761 = cv761;
            v762 = cv762;
            v768 = cv768;
            v769 = cv769;
            
            txn3 = txn4;
            continue;}
          else {
            const v1077 = true;
            await txn4.getOutput('Bidder_optIn', 'v1077', ctc17, v1077);
            const cv757 = v757;
            const cv758 = v758;
            const cv759 = v759;
            const cv760 = v760;
            const cv761 = v761;
            const cv762 = v820;
            const cv768 = v768;
            const cv769 = v1063;
            
            v757 = cv757;
            v758 = cv758;
            v759 = cv759;
            v760 = cv760;
            v761 = cv761;
            v762 = cv762;
            v768 = cv768;
            v769 = cv769;
            
            txn3 = txn4;
            continue;}}
        else {
          const v1085 = stdlib.ge(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
          if (v1085) {
            const v1089 = stdlib.sub(v1021, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:142:84:application', stdlib.UInt_max, '100000'));
            ;
            const v1090 = true;
            await txn4.getOutput('Bidder_optIn', 'v1090', ctc17, v1090);
            const cv757 = v757;
            const cv758 = v758;
            const cv759 = v759;
            const cv760 = v760;
            const cv761 = v761;
            const cv762 = v820;
            const cv768 = v768;
            const cv769 = v1089;
            
            v757 = cv757;
            v758 = cv758;
            v759 = cv759;
            v760 = cv760;
            v761 = cv761;
            v762 = cv762;
            v768 = cv768;
            v769 = cv769;
            
            txn3 = txn4;
            continue;}
          else {
            const v1097 = true;
            await txn4.getOutput('Bidder_optIn', 'v1097', ctc17, v1097);
            const cv757 = v757;
            const cv758 = v758;
            const cv759 = v759;
            const cv760 = v760;
            const cv761 = v761;
            const cv762 = v820;
            const cv768 = v768;
            const cv769 = v1021;
            
            v757 = cv757;
            v758 = cv758;
            v759 = cv759;
            v760 = cv760;
            v761 = cv761;
            v762 = cv762;
            v768 = cv768;
            v769 = cv769;
            
            txn3 = txn4;
            continue;}}
        break;
        }
      }
    
    }
  const v1110 = undefined /* Remote */;
  const v1111 = await txn3.getOutput('internal', 'v1110', ctc11, v1110);
  const v1113 = v1111[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:168:37:application', stdlib.UInt_max, '0')];
  const v1118 = stdlib.add(v769, v1113);
  const v1119 = stdlib.eq(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), v1113);
  stdlib.assert(v1119, {
    at: './src/contracts/auction.rsh:168:37:application',
    fs: [],
    msg: 'remote bill check',
    who: 'Seller'
    });
  null;
  const v1123 = stdlib.gt(v761, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:180:25:decimal', stdlib.UInt_max, '0'));
  if (v1123) {
    const v1125 = stdlib.safeAdd(v762, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    let v1126 = true;
    let v1127 = true;
    let v1128 = v762;
    let v1134 = v768;
    let v1135 = v1118;
    
    let txn4 = txn3;
    while (await (async () => {
      const v1142 = stdlib.le(v1128, v1125);
      const v1143 = v1142 ? v1127 : false;
      
      return v1143;})()) {
      const txn5 = await (ctc.recv({
        didSend: false,
        evt_cnt: 1,
        funcNum: 4,
        out_tys: [ctc18],
        timeoutAt: undefined /* mto */,
        waitIfNotPresent: false
        }));
      const {data: [v1167], secs: v1169, time: v1168, didSend: v555, from: v1166 } = txn5;
      switch (v1167[0]) {
        case 'Auctioneer_acceptSale0_430': {
          const v1170 = v1167[1];
          undefined /* setApiDetails */;
          ;
          const v1177 = true;
          await txn5.getOutput('Auctioneer_acceptSale', 'v1177', ctc17, v1177);
          const cv1126 = true;
          const cv1127 = false;
          const cv1128 = v1168;
          const cv1134 = v1134;
          const cv1135 = v1135;
          
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1134 = cv1134;
          v1135 = cv1135;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Auctioneer_rejectSale0_430': {
          const v1192 = v1167[1];
          undefined /* setApiDetails */;
          ;
          const v1207 = false;
          await txn5.getOutput('Auctioneer_rejectSale', 'v1207', ctc17, v1207);
          const cv1126 = false;
          const cv1127 = false;
          const cv1128 = v1168;
          const cv1134 = v1134;
          const cv1135 = v1135;
          
          v1126 = cv1126;
          v1127 = cv1127;
          v1128 = cv1128;
          v1134 = cv1134;
          v1135 = cv1135;
          
          txn4 = txn5;
          continue;
          break;
          }
        }
      
      }
    if (v1126) {
      const v1214 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
      const v1215 = v1214[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:211:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }
    else {
      const v1236 = v1134[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
      const v1237 = v1236[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:221:41:application', stdlib.UInt_max, '0')];
      ;
      ;
      null;
      return;
      }}
  else {
    const v1258 = v768[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
    const v1259 = v1258[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:232:33:application', stdlib.UInt_max, '0')];
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
  if (step == 6) {return _Auctioneer_acceptSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_rejectSale6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Auctioneer_stopAuction8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Bidder_bid8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 8) {return _Bidder_optIn8(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '8')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`],
    pure: [],
    sigs: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`]
    },
  GlobalNumByteSlice: 3,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAPAAEEBgigjQYFIKD3NpaHyKoBs7bPiAjSuNG7DqCbvIEBAsCEPSYFAQEBAAAFYXBwSUQE+oYRCSI1ADEYQQm7KmRJIls1AUkhBFs1AoEQWzUINhoAF0lBAHciNQQjNQZJIQkMQAA+SSEKDEAAI0khCwxAAA4hCxJEKjX/KTT/UEIDSyEKEkQqNf8oNP9QQgM9IQkSRCo1/4ABAjT/UCEEr1BCAEpJIQwMQAAQIQwSRDYaATX/KDT/UEIAM4Ggi+pMEkQqNf8pNP9QIQSvUEIAHjYaAhc1BDYaAzYaARdJJAxAA5BJIQYMQALiIQYSRCEENAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpKSkpKSklXACA1/yEHWzX+gShbNf1IKjX8gTBbNftXOCA1+oFYWzX5gWBbNfhXaBQ194F8WzX2V4QYNfVXnCA19Fe8ARc181e9ARc18oG+AVs18VfGETXwgdcBWzXvSTUFNe6ABACscs007lCwNO4iVUkjDEAB9kkhDQxAAT0hDRJENO8hDgg17SEOiAiDNO0hCA9BAJ407SEICTXssSKyASEIsggjshA0+rIHszTsIQUPQQBJsSKyASEFsggjshA0/7IHs4AJAAAAAAAABC4BsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07CEFCUIFEoAJAAAAAAAABDUBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07EIE3DTtIQUPQQBJsSKyASEFsggjshA0/7IHs4AJAAAAAAAABEIBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07SEFCUIEi4AJAAAAAAAABEkBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DTzNPI08TIGNPA07UIEVUg07lcBCDXtNO0XSTXsNPENRDTvNOwINes07IgHOIAIAAAAAAAAA7M09DTxFlBQsDT0NPEWUDUHNPNBADEnBDT7FlA07BZQsDT/NP40/TT8NPs0+jT5NPg09zT2NPUxACI08jTsMgY08DTrQgPnsSKyATTxsggjshA09LIHsycENPsWUDTsFlCwNP80/jT9NPw0+zT6NPk0+DT3NPY09TEAIjTyNOwyBjTwNOs08QlCA6NIgAS4o0qLNPsWUDTxFlCwNPsWMgYWUDTxFlA17YAIAAAAAAAAA0Q07VCwNO01BzT/NP40/TT8NPs0+jT5NPg09zT2NO009DTzIjTxMgY08DTvQgNOSCU0ARJENARJIhJMNAISEUQpZChkUEk1A0lKSkpXACA1/yEHWzX+VygUNf1XPCA1/IFcWzX7gWRbNfpXbBE1+YF9WzX4STUFNfeABK571AY091CwNPciVUAAJoAJAAAAAAAABJkBsCg1BzT/NP40/TT8NPs0+iMiMgY0+TT4QgQ5gAkAAAAAAAAEtwCwKTUHNP80/jT9NPw0+zT6IiIyBjT5NPhCBBNJIwxAAfEjEkSxIrIBJbIQNAiyGLMjNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSklXACA1/yEHWzX+VyiUNf2BvAFbNfxXxBE1+4AEmouRdLA0+1cAETX6IzT+iAViNP8xABJEKjX5KzT8FlADNfcyCng19jIKYDT2CRY19bEisgElshA0/LIYgARt7b2AshqzMgpgNPYJNPUXCRa3AD5XBABQNfiACAAAAAAAAALGNPhQsDT4STX3Ils19jT3IQRbNfUiNPYSRCs0/BZQAzXzMgp4NfIyCmA08gkWNfGxIrIBJbIQNPyyGIAEbK3kb7IaszIKYDTyCTTxFwkWtwA+VwQAUDX0gAgAAAAAAAAC0zT0ULA09Ek18yJbNfIiNPISRDEYNfE0/VeAFDXwKzT8FlADNe4yCng17TIKYDTtCRY17LEisgElshA0/LIYgAS5cMuksho09RY08RZQMgYWUDT/UDTwUDT9VwhQUDT9V3gIUDT+FlCyGrMyCmA07Qk07BcJFrcAPlcEAFA174AIAAAAAAAAAuY071CwNO9JNe4iWzXtIjTtEkSABI8PNQY09RZQNP9QsDT/NP40/DT5NPU081cIIDIGNPE08DIGNP0iWwiBGK80/yMjIjIGNPs0+kkiWyMIFlwAXAA09jTyCDTtCEIAsEiBwJoMiAOpsSKyASWyECKyGIAGBzEAMgkSsh6AAQeyH7O0PTUIIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/1cIlDX+gZwBWzX9gATtKYjjNP8WUDT+UDT9FlCwgRGvSTX8SVcAESEEr1wAXAA1+yEFiAM9sSKyASKyEiSyEDIKshQ0/7IRszEANP8WUDT+UDT9FlA0+1ApSwFXAH9nKEsBV39WZ0gjNQEyBjUCQgKoNf81/jX9Nfw1+zX6Nfk1+DX3NfY19TX0NfM18jXxNfA17zXuNP009w40+xBBAFc07jTvFlA08BZQNPFQNPIWUDTzUDT0FlA09RZQNPZQNPcWUDT4UDT5UDT6FlEHCFAoUDT8FlA0/lA0/xZQKUsBVwB/ZyhLAVd/YGdIIQQ1ATIGNQJCAiIrNPAWUAM17DIKeDXrMgpgNOsJFjXqsSKyASWyEDTwshiABKLw2gGyGjT4shqzMgpgNOsJNOoXCRa3AD5XBABQNe2ACAAAAAAAAARWNO1QsDTtSTXsIls16zT/NOsINeoiNOsSRIAEeH51vjTyFlA0/BZQNO5QNPUWUDT0FlA09lCwNPwiDUEAGjTuNO809jT5NPw0/YEyCCMjNP00/jTqQgBDsSKyATT+VwARIluyEiSyEDTushQ077IRs7EisgE06rIII7IQNPmyB7OxIrIBIrISJLIQMgmyFTIKshQ077IRs0IBEDX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU0/TT6DjT8EEEANDT1NPYWUDT3UDT4UDT5FlA0+hZQNP5QNP8WUClLAVcAf2coSwFXfwZnSCU1ATIGNQJCAOc0+0EAW7EisgE0/lcAESJbshIkshA0+LIUNPayEbOxIrIBNP+yCCOyEDT1sgezgATuppnENPdQNPkWUDT1UDT4UDT2FlCwsSKyASKyEiSyEDIJshUyCrIUNPayEbNCAFuxIrIBNP5XABEiW7ISJLIQNPWyFDT2shGzsSKyATT/sggjshA0+LIHs4AEpU+azTT3UDT5FlA09VA0+FA09hZQsLEisgEishIkshAyCbIVMgqyFDT2shGzQgAAMRkhBhJEsSKyASWyEDQIshghBrIZs7EisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhY0CBZQUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQMxNRJEIjE2EkQiMTcSRCI1ASI1AiI1CEL/pzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiTQASUpJIwg1ADgUMgoSRDgQJBJEOBFPAhJEOBISRIk=`,
  appClear: `Bw==`,
  companionInfo: {
    publish1: 1
    },
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 223,
  unsupported: [],
  version: 11,
  warnings: [`Step 1 calls a remote object at /app/src/contracts/auction.rsh:100:39:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:84:48:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 1 calls a remote object at /app/src/contracts/auction.rsh:85:68:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`, `Step 2 calls a remote object at /app/src/contracts/auction.rsh:168:37:application. This means that Reach's conservative analysis of resource utilization and fees is incorrect, because we cannot take into account the needs of the remote object. Furthermore, the remote object may require special transaction parameters which are not expressed in the Reach API or the Algorand ABI standards.`]
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"internalType":"struct T10","name":"v4111","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T8","name":"_description","type":"tuple"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T9","name":"elem2","type":"tuple"},{"internalType":"address payable","name":"elem3","type":"address"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T5","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_430","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_430","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T4","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T7","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1070","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1077","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1090","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1097","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v1110","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1177","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1207","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T14","name":"v0","type":"tuple"}],"name":"_reach_oe_v710","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"}],"indexed":false,"internalType":"struct T15","name":"v0","type":"tuple"}],"name":"_reach_oe_v723","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"bool","name":"elem1","type":"bool"}],"indexed":false,"internalType":"struct T17","name":"v0","type":"tuple"}],"name":"_reach_oe_v742","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v836","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v947","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"accepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"bidSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"uint256","name":"v4","type":"uint256"},{"indexed":false,"internalType":"bytes20","name":"v5","type":"bytes20"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"}],"name":"endSuccess","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v2","type":"address"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"}],"name":"rejected","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4101","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"v4113","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T3","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_430","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_430","type":"bool"}],"internalType":"struct T3","name":"elem1","type":"tuple"}],"internalType":"struct T4","name":"v4128","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T6","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_123","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T5","name":"_Bidder_bid0_123","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_123","type":"bool"}],"internalType":"struct T6","name":"elem1","type":"tuple"}],"internalType":"struct T7","name":"v4140","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x601f196001600160401b0360806200403f38819003601f8101851683018481118482101762000555578392829160405283398101036101408112620006405760405191608083018381108582111762000555576040528051835262000067602082016200067d565b602084015260e0603f1983011262000640576060604051926200008a8462000645565b60408301518452605f1901126200064057604051620000a98162000661565b606082015181526080820151602082015260a08201516001600160801b031981168103620006405760408201526020830152620000e960c082016200067d565b604083015260e08101516060830152610100810151906001600160601b0319821682036200064057826101209260806200012b9501526040850152016200067d565b60608201524360035560405160c081018181108482111762000555576040526000815260006020820152600060408201526200016662000692565b606082015260405190604082019082821085831117620005555760009260a0926040528381528360208201526080820152015260405190620001a88262000661565b620001b262000692565b825260208201620001c2620006c2565b8152620001ce620006c2565b604084015260ff6004541662000627577faf21c54356e0cb238c07cd6d2a0ba48aa0a87eb5fccc9285719045c4cfe7472b6101606040513381528451602082015260018060a01b036020860151166040820152620002356040860151606083019062000709565b60608501516001600160a01b0316610140820152a1815180159081156200061a575b50156200060157600083515260006020845101526000604084510152825181515251805160406020820151910151151560405191620002968362000661565b6000835260208301526040820152620002ae620006c2565b9160005b60018110620005b15750508152604083015234620005985760405190620002d98262000645565b60008252600060208301526040820192604051620002f78162000645565b600081526200030562000692565b60208201526000604082015260006060820152600060808201528452604060608401916000835260808501936200033b620006c2565b855233865260018060a01b036020820151166020870152828101518752606060018060a01b0391015116835201518252620003a16001948560005543865560405194336020870152602060018060a01b0391015116604086015251606085019062000709565b516001600160a01b03166101408301525160008361016084015b8183106200056b57505050506101a081526101c08101818110848211176200055557604052805192831162000555576002548281811c911680156200054a575b60208210146200053457601f8111620004c7575b50602090601f84116001146200045e578394509083929160009462000452575b50501b916000199060031b1c1916176002555b6040516138a69081620007998239f35b0151925038806200042f565b919383169160026000528360206000209360005b87828210620004ad5750501062000493575b505050811b0160025562000442565b015160001960f88460031b161c1916905538808062000484565b848601518755909501946020948501948793500162000472565b60026000527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace601f850160051c8101916020861062000529575b601f0160051c019083905b8281106200051c5750506200040f565b600081550183906200050c565b909150819062000501565b634e487b7160e01b600052602260045260246000fd5b90607f1690620003fb565b634e487b7160e01b600052604160045260246000fd5b606060209160408651805183528481015185840152015115156040820152019301910190918490620003bb565b60405163100960cb60e01b815260096004820152602490fd5b620005bd818362000770565b51620005ca828662000770565b52620005d7818562000770565b506000198114620005eb57600101620002b2565b634e487b7160e01b600052601160045260246000fd5b60405163100960cb60e01b815260086004820152602490fd5b9050600154143862000257565b60405163100960cb60e01b815260076004820152602490fd5b600080fd5b60a081019081106001600160401b038211176200055557604052565b606081019081106001600160401b038211176200055557604052565b51906001600160a01b03821682036200064057565b60405190606082016001600160401b03811183821017620005555760405260006040838281528260208201520152565b6040519060208083016001600160401b0381118482101762000555576040528260005b828110620006f257505050565b8290620006fe62000692565b8184015201620006e5565b8051825260208082015180518285015290810151604080850191909152908101516001600160801b031916606080850191909152908201516001600160a01b03166080808501919091529082015160a084015201516001600160601b03191660c090910152565b906001811015620007825760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f1146100f45780632d2ae6eb146100eb57806334d3e29e146100e25780634a96cc0b146100d9578063573b8510146100d05780636f49e231146100c757806383230757146100be578063980e632f146100b5578063ab53f2c6146100ac578063b6279224146100a35763d2526fd90361000e5761009e610c29565b61000e565b5061009e610bad565b5061009e610aff565b5061009e610a72565b5061009e610a53565b5061009e610a06565b5061009e610295565b5061009e61023b565b5061009e6101ac565b5061009e610143565b5034610113576000366003190112610113576020600354604051908152f35b600080fd5b6040809180518452602081015160208501520151910152565b6060810192916101419190610118565b565b50600036600319011261011357610158610eca565b50606080610164610f20565b61019b81610170610ffa565b6020810190600082515251151560208251015261018b610ffa565b9060008252516020820152611b0f565b01516101aa6040518092610118565bf35b506080366003190112610113576101c1610f20565b604051906101ce82610cc6565b6004358252606036602319011261011357604051916101ec83610cee565b6024359260028410156101135761022b93815260443561020b816110a9565b602082015260643561021c816110a9565b604082015260208201526112a6565b60405160008152602090f35b0390f35b50600036600319011261011357602060a0610254610f20565b61028981610260610ffa565b85810190600282515251151560608251015261027a610ffa565b90600082525186820152611b0f565b01511515604051908152f35b506020366003190112610113576102aa610f20565b5061022b6102b736613495565b6102bf61351a565b6102da6102d56102d160045460ff1690565b1590565b61151f565b60408051338152835160208201527fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815969190a161031a60016000541461153f565b610349610337610328610db4565b602080825183010191016135d8565b925180159081156109fa575b5061155f565b610353341561157f565b61037161036c6103666020850151610b74565b3361377a565b61159f565b61038d3360018060a01b036103868551610b74565b16146115bf565b6103a461039d6020840151610b74565b3090613106565b610160820152476101408201526103c3600160ff196004541617600455565b7fe78449cb4ea3683148f975753092bb435a931dae003ab8a925ec3c0c3da581f56104c4600080604051632cfbfba760e01b60208201526004815261040781610cc6565b61041c6104176060890151610b74565b610b74565b82602083519301915af16104386104316125fa565b8092612f02565b5061044860ff1960045416600455565b6104766104613061045c6020890151610b74565b613106565b610160860151808203610180880152146115df565b61049a476101408601519003916020860192835152602080825183010191016130f7565b60208251015251806040850152604051918291829190916020806040830194805184520151910152565b0390a16104d6604082015151156115ff565b6104e73061045c6020850151610b74565b6101c0820152476101a0820152610506600160ff196004541617600455565b7f1b7d6513012bcfa05bd90c44e591164949af2ef434fbd7ee4f19661df7b5137f61060c60008060405160208101637541dda360e11b81526004825261054b82610cc6565b8261055c61041760608b0151610b74565b9251925af161057361056c6125fa565b8092612f32565b5061058360ff1960045416600455565b6105ac6105973061045c6020890151610b74565b6101c08601518082036101e08801521461161f565b6105dd6105d3476101a08701519003926060870193845152602080825183010191016136cd565b6020835101611287565b516080840181905260408051825181526020928301516001600160a01b03169281019290925290918291820190565b0390a161061e6080820151511561163f565b61062b3060a08301611287565b60206040820151015160c08201515261065761064a60a0830151610b74565b602060c084015101611287565b43604060c0830151015261067b61066e8351610b74565b606060c084015101611287565b60408201516080015161069f906001600160601b031916608060c084015101611296565b60206040830151015160a060c0830151015260606040830151015160c08083015101526106df6106d26020840151610b74565b60e060c084015101611287565b6106f03061045c6020850151610b74565b6102208201527f162d8768cb2e9435037707c4d0bbe3ad4e878b08380e15f3cfb1c163b135055d6107ef476102008401908152610735600160ff196004541617600455565b61079560008060c08701516040519061077182610763602082019363063eabe760e11b8552602483016136e1565b03601f198101845283610d91565b8261078261041760608d0151610b74565b9251925af161078f6125fa565b90612f62565b506107a560ff1960045416600455565b6107ce6107b93061045c6020890151610b74565b6102208601518082036102408801521461165f565b479051900360e0840190815152518061010085015260405191829182612647565b0390a1610802610100820151511561167f565b7fb758eeaad548e48420d76d670d08a2b8b63cf903c04cf64fbe368cbb7830eb676020604083015101516108368451610b74565b604080519283526001600160a01b0391909116602083015290a16000610120820151526000602061012083015101526000604061012083015101526109d4608061087e611a64565b9361089261088c8251610b74565b86611287565b6108ab6108a26020830151610b74565b60208701611287565b6108c46108bb6060830151610b74565b60408701611287565b6108da6108d18551151590565b15156060870152565b604084015160209081015186840152828501510151610905906001600160a01b031660a08701611287565b4360c086015261092461091b60a0860151610b74565b60e08701611287565b6040810151820151610944906001600160601b0319166101008701611296565b61095360408201515143612eee565b61012086015261012084015161014086015261097c6109728251610b74565b6101608701611287565b600161018086015260016101a086015260006101c0860152436101e086015201518051906109cf600183510192604060208201519101511515906109be610e5d565b948552602085015215156040840152565b6137fc565b610200830152610100604082015151608083015151019101515101610220820152612a34565b90506001541438610343565b5060003660031901126101135760206040610a1f610f20565b61028981610a2b610f5f565b8581019060018251525115158582510152610a44610f5f565b906000825251868201526112a6565b5034610113576000366003190112610113576020600154604051908152f35b5060a036600319011261011357610a87610f20565b60405190610a9482610cc6565b600435825260803660231901126101135760405191610ab283610d09565b6024359260038410156101135761022b938152604435610ad1816110a9565b6020820152610adf366134b5565b6040820152608435610af0816110a9565b60608201526020820152611b0f565b503461011357600080600319360112610b71578054610b1c610db4565b906040519283918252602090604082840152835191826040850152815b838110610b5a57505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610b39565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261011357610bc2610f07565b506102376080610bd0610f20565b610c1b81604051610be081610cc6565b604051610bec81610d24565b6000815281526020810190610bff610fa9565b825260043581515260018251525160408251015261018b610ffa565b015160405191829182610b8d565b50600036600319011261011357602080610c41610f20565b61028981610c4d610f5f565b8481019060008251525115158582510152610c66610f5f565b906000825251858201526112a6565b90600182811c92168015610ca5575b6020831014610c8f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610c84565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610ce157604052565b610ce9610caf565b604052565b606081019081106001600160401b03821117610ce157604052565b608081019081106001600160401b03821117610ce157604052565b602081019081106001600160401b03821117610ce157604052565b60c081019081106001600160401b03821117610ce157604052565b61010081019081106001600160401b03821117610ce157604052565b60a081019081106001600160401b03821117610ce157604052565b601f909101601f19168101906001600160401b03821190821017610ce157604052565b6040519060008260025491610dc883610c75565b808352600193808516908115610e3c5750600114610dee575b5061014192500383610d91565b6002600090815260008051602061387a83398151915294602093509091905b818310610e24575050610141935082010138610de1565b85548884018501529485019487945091830191610e0d565b905061014194506020925060ff191682840152151560051b82010138610de1565b6040519061014182610cee565b6040519061022082016001600160401b03811183821017610ce157604052565b6040519061024082016001600160401b03811183821017610ce157604052565b6040519061026082016001600160401b03811183821017610ce157604052565b60405190606082016001600160401b03811183821017610efa575b60405260006040838281528260208201520152565b610f02610caf565b610ee5565b60405190610f1482610cc6565b60006020838281520152565b60405190610f2d82610d3f565b600060a083828152826020820152826040820152610f49610eca565b6060820152610f56610f07565b60808201520152565b60405190610f6c82610cc6565b81600081526020610f7b610eca565b910152565b50634e487b7160e01b600052602160045260246000fd5b60021115610fa157565b610141610f80565b60405190608082016001600160401b03811183821017610fed575b6040526000606083828152826020820152604051610fe181610d24565b83815260408201520152565b610ff5610caf565b610fc4565b6040519061100782610cc6565b81600081526020610f7b610fa9565b60031115610fa157565b9092916040602060809260a085019660018060a01b03168552805182860152015180516002811015611066575b8285015260208101511515606085015201511515910152565b61106e610f80565b61104d565b51906001600160a01b038216820361011357565b6001600160601b03191690565b51906001600160601b03198216820361011357565b8015150361011357565b5190610141826110a9565b9080601f83011215610113576040918251926110d984610d24565b836060938484019381851161011357915b8483106110fa5750505050505090565b8583830312610113578351869161111082610cee565b8451825260209182860151838201528686015161112c816110a9565b878201528152019201916110ea565b6101408183031261011357610120906111b56040519361115a85610d5a565b61116383611073565b855261117160208401611073565b602086015261118260408401611094565b604086015261119360608401611073565b60608601526080830151608086015260a083015160a086015260c083016110be565b60c0840152015160e082015290565b5160028110156111d15790565b6111d9610f80565b90565b604051906111e982610d24565b8160005b602081106111f9575050565b602090611204610eca565b81840152016111ed565b6040519061016082016001600160401b0381118382101761127a575b604052816101406000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152826101008201526112706111dc565b6101208201520152565b611282610caf565b61122a565b6001600160a01b039091169052565b6001600160601b03199091169052565b90611320906112c26112bd6102d160045460ff1690565b61169f565b6040907f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa15768251806112f4873383611020565b0390a16113056006600054146116bf565b61130d610db4565b602093818580809451830101910161113b565b9461133681518015908115611513575b506116df565b0161134181516111c4565b61134a81610f97565b6114465750926113e760e0926113a08561014197611368341561171f565b8351600181527fe638f3aff7d7da36d584db77b07ed2cdeef67da632fe4de068b916e74ec04f2c9080602081015b0390a10160019052565b6113d36113ab61120e565b956113bf6113b98651610b74565b88611287565b6113cb81860151610b74565b908701611287565b6113df81840151611087565b908501611296565b6114006113f76060830151610b74565b60608501611287565b6080810151608084015260a081015160a084015261142160c0840160019052565b6000828401524361010084015260c08101516101208401520151610140820152613215565b611455600191959295516111c4565b61145e81610f97565b1461146a575b50505050565b6114ba82600060e09461150a9761148134156116ff565b8151600081527f6ced002556843678d5cf343075a2ddfff655952325e2150eda541932c7f097e290602090a101526113d36113ab61120e565b6114ca6113f76060830151610b74565b6080810151608084015260a081015160a0840152600060c08401526000828401524361010084015260c08101516101208401520151610140820152613215565b38808080611464565b90506001541438611330565b1561152657565b60405163100960cb60e01b8152600a6004820152602490fd5b1561154657565b60405163100960cb60e01b8152600b6004820152602490fd5b1561156657565b60405163100960cb60e01b8152600c6004820152602490fd5b1561158657565b60405163100960cb60e01b8152600d6004820152602490fd5b156115a657565b60405163100960cb60e01b8152600e6004820152602490fd5b156115c657565b60405163100960cb60e01b8152600f6004820152602490fd5b156115e657565b60405163100960cb60e01b815260106004820152602490fd5b1561160657565b60405163100960cb60e01b815260126004820152602490fd5b1561162657565b60405163100960cb60e01b815260136004820152602490fd5b1561164657565b60405163100960cb60e01b815260156004820152602490fd5b1561166657565b60405163100960cb60e01b815260166004820152602490fd5b1561168657565b60405163100960cb60e01b815260186004820152602490fd5b156116a657565b60405163100960cb60e01b815260196004820152602490fd5b156116c657565b60405163100960cb60e01b8152601a6004820152602490fd5b156116e657565b60405163100960cb60e01b8152601b6004820152602490fd5b1561170657565b60405163100960cb60e01b8152601d6004820152602490fd5b1561172657565b60405163100960cb60e01b8152601c6004820152602490fd5b1561174657565b60405163100960cb60e01b8152601e6004820152602490fd5b1561176657565b60405163100960cb60e01b8152601f6004820152602490fd5b1561178657565b60405163100960cb60e01b815260206004820152602490fd5b156117a657565b602460405163100960cb60e01b8152816004820152fd5b156117c457565b60405163100960cb60e01b815260226004820152602490fd5b156117e457565b60405163100960cb60e01b815260236004820152602490fd5b1561180457565b60405163100960cb60e01b815260216004820152602490fd5b1561182457565b60405163100960cb60e01b815260256004820152602490fd5b1561184457565b60405163100960cb60e01b815260276004820152602490fd5b6040519061186a82610d3f565b600060a083611877610eca565b815260405161188581610d24565b838152602082015282604082015261189b610f07565b60608201528260808201520152565b9092916060602060a09260c0850196600180861b031685528051828601520151805160038110156118fa575b60408501526020810151151582850152604081015151608085015201511515910152565b611902610f80565b6118d6565b91908260609103126101135760405161191f81610cee565b604080829480518452602081015160208501520151910152565b906102a08282031261011357610280611950610e6a565b9261195a81611073565b845261196860208201611073565b602085015261197960408201611073565b604085015261198a606082016110b3565b6060850152608081015160808501526119a560a08201611073565b60a085015260c081015160c08501526119c060e08201611073565b60e08501526101006119d3818301611094565b9085015261012080820151908501526101406119f184828401611907565b908501526101a0611a03818301611073565b610160860152611a4a6101c094611a1b8685016110b3565b6101808801526101e092611a308486016110b3565b9088015261020095868501519088015261022084016110be565b9085015201519082015290565b5160038110156111d15790565b611a6c610e8a565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152611ab2610eca565b6101408401528061016084015280610180840152806101a0840152806101c0840152806101e0840152611ae36111dc565b610200840152610220830152565b506040513d6000823e3d90fd5b908152602081019190915260400190565b611b9190611b1b61185d565b92611b33611b2e6102d160045460ff1690565b61173f565b60407fc08304f8842fdf9fe5c32b7c33d0b2bb36997def29e0c6d0fa626741dcab6010815180611b648633836118aa565b0390a16000611b76600882541461175f565b611b7e610db4565b6020958187808094518301019101611939565b94611ba7815180159081156125af575b5061177f565b0195611bb38751611a57565b611bbc81611016565b611d89576101419650611bcf34156117fd565b60808501611caa8151946101c0967f772252bb3a260bb19eae21a8a9243292763a37c5bcfc38c9f961eb102482f434888a0197885190611c13855192839283611afe565b0390a18351855152438a86510152865182865101527ff36eb678b3f761fe5ce06c2696df2389bacf7238abd231148c9ba4ff3ba16c15611c598651845191829182610131565b0390a160608551910152611c96611c6e611a64565b99611c82611c7c8b51610b74565b8c611287565b611c8e818b0151610b74565b908b01611287565b611ca281890151610b74565b908901611287565b611cc3611cba6060880151151590565b15156060890152565b516080870152611ce2611cd960a0870151610b74565b60a08801611287565b60c085015160c0870152611d05611cfc60e0870151610b74565b60e08801611287565b611d1f610100611d1781880151611087565b908801611296565b610120808601519087015251610140860152611d436101606113cb81870151610b74565b611d5d610180611d5581870151151590565b151590870152565b6101a085015251908301526101e043818401528101519061020091828401520151610220820152612a34565b9094956001611d9b8296949651611a57565b611da481611016565b0361212c5784905101518682019080825251956101c092611dca848601988951106117bd565b610200958686015197611deb8551998a5101998285019a8b525134146117dd565b61016091608083890194611e0e6060611e048851610b74565b9201918251611287565b8d8d5190825101527fa7bf7eccc5db55d0f0a2f792273f40828389e36875ba389ead05d587347476e6611e478251865191829182610b8d565b0390a15191015261018092611e5e84890151151590565b15611fae575090919293949596979850608087019081518651518251918291611e879183611afe565b0360008051602061385a83398151915291a1611ea1611a64565b9a8851611ead90610b74565b611eb7908d611287565b80890151611ec490610b74565b611ecf918d01611287565b80880151611edc90610b74565b611ee7918c01611287565b6060878101511515908b01525160808a015260a0860151611f0790610b74565b611f149060a08b01611287565b60c086015160c08a015260e0860151611f2c90610b74565b611f399060e08b01611287565b61010080870151611f4990611087565b611f54918b01611296565b61012086810151908a015261014080870151908a0152611f779033908a01611287565b8701526101a08381015115151515908701525151908501526101e09043828601520151908301525161022082015261014190612a34565b8480808d611fc0610417839651610b74565b905190828215612123575bf115612116575b608087019081518651518251918291611feb9183611afe565b0360008051602061385a83398151915291a1612005611a64565b9b8c895161201290610b74565b61201b91611287565b8089015161202890610b74565b612033918e01611287565b8088015161204090610b74565b61204b918d01611287565b6060878101511515908c01525160808b015260a086015161206b90610b74565b6120789060a08c01611287565b60c086015160c08b015260e086015161209090610b74565b61209d9060e08c01611287565b610100808701516120ad90611087565b6120b8918c01611296565b61012086810151908b015261014080870151908b01526120db9033908b01611287565b8801526101a08381015115151515908801525151908601526101e0904382870152015190840152519051900361022082015261014190612a34565b61211e611af1565b611fd2565b506108fc611fcb565b61213e60029197969594929751611a57565b61214781611016565b14612155575b505050505050565b620f42406102009381858501510192612177608093848b01958652341461179f565b8351620dbba094908581106124635750620dbb9f199051019660a0809a01978852808080808d8a01986121ad6104178b51610b74565b82f115612456575b8751620186a09081116123695761228b936122248c6122939895856123519f99968080612264988f6104176121ea9151610b74565b82f11561235c575b8351600181527f5792ae7d7f614b5472f9807925f9d7907e4740d573101f50c8a802f619fbdf07908060208101611396565b61225861222f611a64565b9b6122448d61223e8c51610b74565b90611287565b612250818b0151610b74565b908d01611287565b611c8e81890151610b74565b61227d6122746060880151151590565b151560608b0152565b808601519089015251610b74565b908601611287565b60c081015160c08501526122b66122ad60e0830151610b74565b60e08601611287565b6122d06101006122c881840151611087565b908601611296565b610120808201519085015261014080820151908501526122f861016061228b81840151610b74565b61231261018061230a81840151151590565b151590860152565b6123246101a061230a81840151151590565b6101c080820151908501526101e09043828601520151908301526201869f19905101610220820152612a34565b38808080808061214d565b612364611af1565b6121f2565b5050928892612264836122246124519c6123b3987fbd09d97030d0955f9ab81fe137ff3322becfdc597579b4e79b51a512d5c0bff961228b98518061139681906001602083019252565b60c081015160c08501526123cd6122ad60e0830151610b74565b6123df6101006122c881840151611087565b6101208082015190850152610140808201519085015261240761016061228b81840151610b74565b61241961018061230a81840151151590565b61242b6101a061230a81840151151590565b6101c080820151908501526101e090438286015201519083015251610220820152612a34565b612351565b61245e611af1565b6121b5565b929950969293509190620186a09081116125455760a0612507938380806124519d966124d0966124966104178d51610b74565b82f115612538575b8351600181527f500a6deb6bb083983c15e5f3d74ef0462bb50ce8dc52585085576a34d16b3a10908060208101611396565b6124fb6124db611a64565b976124ef6124e98751610b74565b8a611287565b611ca281870151610b74565b6113cb81850151610b74565b6125176108d16060840151151590565b808201519085015261229361252f60a0830151610b74565b60a08601611287565b612540611af1565b61249e565b5050866124d060a0612587937f1f44f06fa2c378dc8e31d2830931d9a9c49976009917dcad6fe83531e8d1a7cd6124519b518061139681906001602083019252565b6125976108d16060840151151590565b80820151908501526123b361252f60a0830151610b74565b90506001541438611ba1565b604051906125c882610d3f565b600060a0836125d5610f07565b81526125df610f07565b60208201528260408201528260608201528260808201520152565b3d15612642573d906001600160401b038211612635575b60405191612629601f8201601f191660200184610d91565b82523d6000602084013e565b61263d610caf565b612611565b606090565b91909160208060408301948051845201511515910152565b9060018110156126705760051b0190565b634e487b7160e01b600052603260045260246000fd5b818110612691575050565b60008155600101612686565b50634e487b7160e01b600052601160045260246000fd5b6126bf600254610c75565b806126c75750565b601f81116001146126da57506000600255565b600260005261271f90601f0160051c60008051602061387a833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612686565b6000602081208160025555565b612734610e6a565b9060008083528060208401528060408401528060608401528060808401528060a08401528060c08401528060e0840152806101008401528061012084015261277a610eca565b6101408401528061016084015280610180840152806101a0840152806101c08401526127a46111dc565b6101e0840152610200830152565b6000915b600183106127c357505050565b6001906060835191825181526020928381015184830152604080910151151590820152019201920191906127b6565b9190916102806102a0820193612809838251610b80565b61281b60208201516020850190610b80565b61282d60408201516040850190610b80565b6060818101511515908401526080810151608084015261285560a082015160a0850190610b80565b60c081015160c084015261287160e082015160e0850190610b80565b610100818101516001600160601b0319169084015261012080820151908401526128a46101408083015190850190610118565b610160810151906128bb6101a09283860190610b80565b612905610180820151926128d66101c0948588019015159052565b820151926128eb6101e0948588019015159052565b8201519261020093848701528201516102208601906127b2565b0151910152565b90601f8211612919575050565b6101419160026000526020600020906020601f840160051c83019310612947575b601f0160051c0190612686565b909150819061293a565b80519091906001600160401b038111612a27575b61297981612974600254610c75565b61290c565b602080601f83116001146129b557508192936000926129aa575b50508160011b916000199060031b1c191617600255565b015190503880612993565b6002600052601f1983169490919060008051602061387a833981519152926000905b878210612a0f5750508360019596106129f6575b505050811b01600255565b015160001960f88460031b161c191690553880806129eb565b806001859682949686015181550195019301906129d7565b612a2f610caf565b612965565b612a3c6125bb565b6101e082810180516101208086018051909591939260009110612ec657506101a086015115155b15612bb557505091612bb09161022061014195612ba295612a8261272c565b94612a96612a908451610b74565b87611287565b612aaf612aa66020850151610b74565b60208801611287565b612ac8612abf6040850151610b74565b60408801611287565b612ae1612ad86060850151151590565b15156060880152565b60808301516080870152612afb611cd960a0850151610b74565b60c083015160c0870152612b15611cfc60e0850151610b74565b612b27610100611d1781860151611087565b51908501526101408082015190850152612b4961016061228b81840151610b74565b612b5b61018061230a81840151151590565b60016101a08501526101c08082015190850152610200928382015190850152015190820152612b8a6008600055565b612b9343600155565b604051928391602083016127f2565b03601f198101835282610d91565b612951565b925092506020840193612bcb61039d8651610b74565b60808401908152479460608501958652612bed600160ff196004541617600455565b61014095612c838785015193612c556000808860409882612c426104178c805195612c3b87612c2d6020820198634c344d9d60e01b8a5260248301610131565b03601f198101895288610d91565b0151610b74565b9251925af1612c4f6125fa565b90612f92565b50612c6560ff1960045416600455565b612c733061045c8c51610b74565b905180820360a08a01521461181d565b4790519003855152612ce385517ff5883b786db8bb5b467c880f6fffb6c63ba3c7531a98f2478192485d0e0bd804612cc76020890192808452865191829182612647565b0390a1836102208601519151918251019701968752511561183d565b6080830151916101c08401908151937fc3acd7ee24f4f9cf4606c64c38b8640466129f78b44ac84b4e810f68345d08b4612d1d8751610b74565b95612d2b60e0890151610b74565b92612d8c60c08a015198610100998a8c0196612d478851611087565b895195865260208601969096526001600160a01b039283166040860152909116606084015260808301526001600160601b031990921660a082015290819060c0820190565b0390a1825115612e3c57612d9e61120e565b998651612daa90610b74565b612db4908c611287565b51612dbe90610b74565b612dcb9060208c01611287565b51612dd590611087565b612de0918a01611296565b610160840151612def90610b74565b612dfc9060608a01611287565b5160808801528051612e0d90612ecb565b60a0880152600160c0880152600160e08801525190860152610200015190840152519082015261014190613215565b505050505060009485945084939184935061016061041791612c3b612e64612e889551610b74565b612e6e8351610b74565b6102008401515151916001600160a01b0390911690613052565b905190828215612ebd575bf115612eb0575b60008055612ea86000600155565b6101416126b4565b612eb8611af1565b612e9a565b506108fc612e93565b612a63565b906032820191828111612ee1575b821061011357565b612ee961269d565b612ed9565b9190820191828111612ee157821061011357565b15612f0a5790565b805115612f1957805190602001fd5b60405163100960cb60e01b815260116004820152602490fd5b15612f3a5790565b805115612f4957805190602001fd5b60405163100960cb60e01b815260146004820152602490fd5b15612f6a5790565b805115612f7957805190602001fd5b60405163100960cb60e01b815260176004820152602490fd5b15612f9a5790565b805115612fa957805190602001fd5b60405163100960cb60e01b815260266004820152602490fd5b15612fca5790565b805115612fd957805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b15612ffa5790565b80511561300957805190602001fd5b60405163100960cb60e01b815260066004820152602490fd5b1561302a5790565b80511561303957805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b60405163a9059cbb60e01b602082019081526001600160a01b0393841660248301526044808301959095529381526130ce93600093849392849190608081016001600160401b038111828210176130d5575b6040525193165af16130be6130b76125fa565b8092612fc2565b50602080825183010191016130e2565b1561011357565b6130dd610caf565b6130a4565b9081602091031261011357516111d9816110a9565b90816020910312610113575190565b600080916111d993826040519160208301926370a0823160e01b845260018060a01b0380921660248201526024815261313e81610cee565b5193165af161315561314e6125fa565b8092612ff2565b50602080825183010191016130f7565b6040519061317282610d5a565b8160e06000918281528260208201528260408201528260608201528260808201528260a08201526131a16111dc565b60c08201520152565b91909161012060e061014083019460018060a01b0380825116855280602083015116602086015260018060601b0319604083015116604086015260608201511660608501526080810151608085015260a081015160a085015261290560c082015160c08601906127b2565b61010081015160a082018051909160009110613490575060e082015115155b156132f257612bb0612ba2916101406101419461324f613165565b9261326361325d8351610b74565b85611287565b61327c6132736020840151610b74565b60208601611287565b61329561328c6040840151611087565b60408601611296565b6132ae6132a56060840151610b74565b60608601611287565b608082015160808501525160a084015261012081015160c0840152015160e08201526132da6006600055565b6132e343600155565b604051928391602083016131aa565b5060c081015115613420578060207f12efbaf7d721b41313ea6075bffc8bcdaf87de4d387fbe499734cc9c29fe5c3792016133f96133308251610b74565b61335c60608501916133428351610b74565b6101208701515151916001600160a01b0390911690613052565b600080808061336e6104178951610b74565b61014089015190828215613417575bf11561340a575b6133916040850151611087565b926133b56133ae6133a760808801519751610b74565b9351610b74565b9151610b74565b91604051958695866001600160601b0319909116815260208101919091526001600160a01b0391821660408201529181166060830152909116608082015260a00190565b0390a160008055612ea86000600155565b613412611af1565b613384565b506108fc61337d565b8060207fdd5bfdf918cd86e0bb3c19331b121dcfa52fec6eee8c528aa1267c110694568792016134776134538251610b74565b61345d8451610b74565b6101208501515151916001600160a01b0390911690613052565b6133f960608301600080808061336e6104178651610b74565b613234565b602090600319011261011357604051906134ae82610d24565b6004358252565b602090606319011261011357604051906134ce82610d24565b6064358252565b604051906134e282610d5a565b8160e060009182815282602082015282604082015282606082015282608082015261350b610eca565b60a08201528260c08201520152565b613522610eaa565b906000808352613530610f07565b602084015261353d610f07565b604084015261354a610f07565b6060840152613557610f07565b60808401528060a084015261356a6134d5565b60c0840152613577610f07565b60e0840152613584610f07565b610100840152613592610eca565b610120840152806101408401528061016084015280610180840152806101a0840152806101c0840152806101e08401528061020084015280610220840152610240830152565b90818103906101a082126101135760408051936135f485610d76565b6135fd81611073565b855261360b60208201611073565b602086015260e0603f1985011261011357606082519461362a86610d76565b828401518652605f1901126101135781519361364585610cee565b606082015185526080820151602086015260a0820151926001600160801b031984168403610113578561014094826136c5980152602083015261368a60c08401611073565b8183015260e083015160608301526136a56101008401611094565b60808301528601526136ba6101208201611073565b6060860152016110be565b608082015290565b90816020910312610113576111d990611073565b815181526020808301516001600160a01b039081168284015260408085015181850152606080860151909216918401919091526080808501516001600160601b0319169084015260a0808501518051918501919091529182015160c084015201516001600160801b03191660e0808301919091526101408201939261014192916101209160c08101516101008501520151910190610b80565b6040516323b872dd60e01b602082019081526001600160a01b039283166024830152306044830152600160648084019190915282526111d993600093849391929184919060a081016001600160401b038111828210176137ef575b6040525193165af16130be6137e86125fa565b8092613022565b6137f7610caf565b6137d5565b91906138066111dc565b9260005b600181106138185750508252565b806138256001928461265f565b51613830828861265f565b5261383b818761265f565b50600019811461384c575b0161380a565b61385461269d565b61384656fe472702956de3c3fddce2ef74f6a934374fc18113bc27ca360930d4b17b0ca03e405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acea164736f6c6343000810000a`,
  BytecodeLen: 16447,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:72:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:236:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:236:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:183:66:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './src/contracts/auction.rsh:236:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: './src/contracts/auction.rsh:107:31:after expr stmt semicolon',
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
