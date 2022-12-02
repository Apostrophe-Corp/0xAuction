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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Contract;
  const ctc2 = stdlib.T_Address;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc5 = stdlib.T_Token;
  return {
    created: [ctc0, ctc1, ctc0, ctc2, ctc3, ctc4, ctc0, ctc5],
    down: [ctc3, ctc0, ctc0, ctc2, ctc1, ctc0],
    log: [ctc3, ctc0, ctc0],
    outcome: [ctc3, ctc3, ctc0, ctc2, ctc2, ctc5]
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
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Bool;
  const ctc7 = stdlib.T_Tuple([ctc2, ctc2, ctc6]);
  const ctc8 = stdlib.T_Array(ctc7, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc9 = stdlib.T_Contract;
  
  const AuctionView_awaitingConfirmation = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v719, v720, v721, v722, v726] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v719, v720, v742, v748, v751, v1139, v1150, v1151, v1163] = svs;
      return (await ((async () => {
        
        
        return true;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780] = svs;
      stdlib.assert(false, 'illegal view')
      }
    
    stdlib.assert(false, 'illegal view')
    };
  const AuctionView_isRunning = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'))) {
      const [v719, v720, v721, v722, v726] = svs;
      stdlib.assert(false, 'illegal view')
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'))) {
      const [v719, v720, v742, v748, v751, v1139, v1150, v1151, v1163] = svs;
      return (await ((async () => {
        
        
        return v1139;}))(...args));
      }
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'))) {
      const [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780] = svs;
      return (await ((async () => {
        
        
        return v780;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      AuctionView: {
        awaitingConfirmation: {
          decode: AuctionView_awaitingConfirmation,
          dom: [],
          rng: ctc6
          },
        isRunning: {
          decode: AuctionView_isRunning,
          dom: [],
          rng: ctc6
          }
        }
      },
    views: {
      1: [ctc0, ctc1, ctc5, ctc2, ctc8],
      5: [ctc0, ctc1, ctc4, ctc0, ctc2, ctc6, ctc8, ctc2, ctc2],
      6: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc9, ctc4, ctc2, ctc0, ctc6, ctc6, ctc2, ctc2, ctc8, ctc2, ctc6]
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
export async function _Auctioneer_acceptSale5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_acceptSale5 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_acceptSale0_413: ctc7,
    Auctioneer_rejectSale0_413: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v719, v720, v742, v748, v751, v1139, v1150, v1151, v1163] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3]);
  const v1165 = ctc.selfAddress();
  const v1167 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:158:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:158:28:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to "runAuctioneer_acceptSale0_413" (defined at: ./src/contracts/auction.rsh:156:21:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:48:function exp)'],
    msg: 'in',
    who: 'Auctioneer_acceptSale'
    });
  const v1169 = stdlib.addressEq(v1165, v719);
  stdlib.assert(v1169, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:159:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:158:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:158:28:function exp)', 'at ./src/contracts/auction.rsh:158:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:158:28:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to "runAuctioneer_acceptSale0_413" (defined at: ./src/contracts/auction.rsh:156:21:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:48:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_acceptSale'
    });
  const v1173 = ['Auctioneer_acceptSale0_413', v1167];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v720, v742, v748, v751, v1139, v1150, v1151, v1163, v1173],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:161:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1188], secs: v1190, time: v1189, didSend: v538, from: v1187 } = txn1;
      
      switch (v1188[0]) {
        case 'Auctioneer_acceptSale0_413': {
          const v1191 = v1188[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_acceptSale"
            });
          ;
          const v1198 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:49:application', stdlib.UInt_max, '0')];
          const v1199 = v1198[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:49:application', stdlib.UInt_max, '0')];
          const v1205 = stdlib.sub(v1199, v1199);
          const v1207 = stdlib.Array_set(v1198, '0', v1205);
          const v1208 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:71:application', stdlib.UInt_max, '0'), v1207);
          sim_r.txns.push({
            kind: 'from',
            to: v748,
            tok: v720
            });
          const v1213 = stdlib.sub(v1151, v1151);
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          const v1214 = true;
          const v1215 = await txn1.getOutput('Auctioneer_acceptSale', 'v1214', ctc4, v1214);
          
          const v1221 = 'accepted            ';
          null;
          const v2952 = v1208[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
          const v2953 = v2952[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v748,
            tok: v720
            });
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v720
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        case 'Auctioneer_rejectSale0_413': {
          const v1247 = v1188[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1188], secs: v1190, time: v1189, didSend: v538, from: v1187 } = txn1;
  switch (v1188[0]) {
    case 'Auctioneer_acceptSale0_413': {
      const v1191 = v1188[1];
      undefined /* setApiDetails */;
      ;
      const v1198 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:49:application', stdlib.UInt_max, '0')];
      const v1199 = v1198[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:49:application', stdlib.UInt_max, '0')];
      const v1205 = stdlib.sub(v1199, v1199);
      const v1207 = stdlib.Array_set(v1198, '0', v1205);
      const v1208 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:71:application', stdlib.UInt_max, '0'), v1207);
      ;
      const v1213 = stdlib.sub(v1151, v1151);
      ;
      const v1214 = true;
      const v1215 = await txn1.getOutput('Auctioneer_acceptSale', 'v1214', ctc4, v1214);
      if (v538) {
        stdlib.protect(ctc9, await interact.out(v1191, v1215), {
          at: './src/contracts/auction.rsh:157:25:application',
          fs: ['at ./src/contracts/auction.rsh:157:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:157:25:function exp)', 'at ./src/contracts/auction.rsh:165:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:162:34:function exp)', 'at ./src/contracts/auction.rsh:162:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:162:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_acceptSale'
          });
        }
      else {
        }
      
      const v1221 = 'accepted            ';
      null;
      const v2952 = v1208[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
      const v2953 = v2952[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    case 'Auctioneer_rejectSale0_413': {
      const v1247 = v1188[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Auctioneer_rejectSale5(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale5 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_rejectSale5 expects to receive an interact object as its second argument.`));}
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
    Auctioneer_acceptSale0_413: ctc7,
    Auctioneer_rejectSale0_413: ctc7
    });
  const ctc9 = stdlib.T_Null;
  
  
  const [v719, v720, v742, v748, v751, v1139, v1150, v1151, v1163] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5'), [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3]);
  const v1175 = ctc.selfAddress();
  const v1177 = stdlib.protect(ctc7, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:179:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:179:28:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to "runAuctioneer_rejectSale0_413" (defined at: ./src/contracts/auction.rsh:177:21:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:48:function exp)'],
    msg: 'in',
    who: 'Auctioneer_rejectSale'
    });
  const v1179 = stdlib.addressEq(v1175, v719);
  stdlib.assert(v1179, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:180:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:179:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:179:28:function exp)', 'at ./src/contracts/auction.rsh:179:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:179:28:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to "runAuctioneer_rejectSale0_413" (defined at: ./src/contracts/auction.rsh:177:21:function exp)', 'at ./src/contracts/auction.rsh:150:48:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:150:48:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_rejectSale'
    });
  const v1183 = ['Auctioneer_rejectSale0_413', v1177];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v720, v742, v748, v751, v1139, v1150, v1151, v1163, v1183],
    evt_cnt: 1,
    funcNum: 4,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc8],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:182:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v1188], secs: v1190, time: v1189, didSend: v538, from: v1187 } = txn1;
      
      switch (v1188[0]) {
        case 'Auctioneer_acceptSale0_413': {
          const v1191 = v1188[1];
          
          break;
          }
        case 'Auctioneer_rejectSale0_413': {
          const v1247 = v1188[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_rejectSale"
            });
          ;
          const v1279 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:49:application', stdlib.UInt_max, '0')];
          const v1280 = v1279[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:49:application', stdlib.UInt_max, '0')];
          const v1286 = stdlib.sub(v1280, v1280);
          const v1288 = stdlib.Array_set(v1279, '0', v1286);
          const v1289 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:71:application', stdlib.UInt_max, '0'), v1288);
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: v720
            });
          const v1294 = stdlib.sub(v1151, v1151);
          sim_r.txns.push({
            kind: 'from',
            to: v748,
            tok: undefined /* Nothing */
            });
          const v1295 = false;
          const v1296 = await txn1.getOutput('Auctioneer_rejectSale', 'v1295', ctc4, v1295);
          
          const v1302 = 'rejected            ';
          null;
          const v2973 = v1289[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
          const v2974 = v2973[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v748,
            tok: v720
            });
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v720
            })
          sim_r.txns.push({
            kind: 'halt',
            tok: undefined /* Nothing */
            })
          sim_r.isHalt = true;
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc2, ctc0, ctc3, ctc4, ctc6, ctc3, ctc3, ctc8],
    waitIfNotPresent: false
    }));
  const {data: [v1188], secs: v1190, time: v1189, didSend: v538, from: v1187 } = txn1;
  switch (v1188[0]) {
    case 'Auctioneer_acceptSale0_413': {
      const v1191 = v1188[1];
      return;
      break;
      }
    case 'Auctioneer_rejectSale0_413': {
      const v1247 = v1188[1];
      undefined /* setApiDetails */;
      ;
      const v1279 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:49:application', stdlib.UInt_max, '0')];
      const v1280 = v1279[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:49:application', stdlib.UInt_max, '0')];
      const v1286 = stdlib.sub(v1280, v1280);
      const v1288 = stdlib.Array_set(v1279, '0', v1286);
      const v1289 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:71:application', stdlib.UInt_max, '0'), v1288);
      ;
      const v1294 = stdlib.sub(v1151, v1151);
      ;
      const v1295 = false;
      const v1296 = await txn1.getOutput('Auctioneer_rejectSale', 'v1295', ctc4, v1295);
      if (v538) {
        stdlib.protect(ctc9, await interact.out(v1247, v1296), {
          at: './src/contracts/auction.rsh:178:25:application',
          fs: ['at ./src/contracts/auction.rsh:178:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:178:25:function exp)', 'at ./src/contracts/auction.rsh:186:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:183:34:function exp)', 'at ./src/contracts/auction.rsh:183:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:183:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_rejectSale'
          });
        }
      else {
        }
      
      const v1302 = 'rejected            ';
      null;
      const v2973 = v1289[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
      const v2974 = v2973[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
      ;
      ;
      return;
      
      break;
      }
    }
  
  
  };
export async function _Auctioneer_stopAuction6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Auctioneer_stopAuction6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Data({
    Auctioneer_stopAuction0_100: ctc10,
    Bidder_bid0_100: ctc11,
    Bidder_optIn0_100: ctc10
    });
  const ctc13 = stdlib.T_Struct([['id', ctc2], ['blockEnded', ctc2], ['lastBid', ctc2]]);
  const ctc14 = stdlib.T_Null;
  
  
  const [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7]);
  const v786 = ctc.selfAddress();
  const v788 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:120:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:120:28:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to "runAuctioneer_stopAuction0_100" (defined at: ./src/contracts/auction.rsh:118:21:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:80:83:function exp)'],
    msg: 'in',
    who: 'Auctioneer_stopAuction'
    });
  const v790 = stdlib.addressEq(v786, v719);
  stdlib.assert(v790, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:121:38:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:120:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:120:28:function exp)', 'at ./src/contracts/auction.rsh:120:28:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:120:28:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to "runAuctioneer_stopAuction0_100" (defined at: ./src/contracts/auction.rsh:118:21:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:80:83:function exp)'],
    msg: 'You are not the Seller',
    who: 'Auctioneer_stopAuction'
    });
  const v794 = ['Auctioneer_stopAuction0_100', v788];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780, v794],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:123:31:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v825], secs: v827, time: v826, didSend: v294, from: v824 } = txn1;
      
      switch (v825[0]) {
        case 'Auctioneer_stopAuction0_100': {
          const v828 = v825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Auctioneer_stopAuction"
            });
          ;
          const v842 = 'endSuccess          ';
          null;
          const v845 = {
            blockEnded: v826,
            id: v739,
            lastBid: v751
            };
          const v846 = await txn1.getOutput('Auctioneer_stopAuction', 'v845', ctc13, v845);
          
          const v2975 = v748;
          const v2976 = v749;
          const v2977 = false;
          const v2978 = v751;
          const v2979 = v826;
          const v2981 = v758;
          const v2982 = v759;
          const v2983 = stdlib.gt(v747, v752);
          const v2984 = v2983 ? false : false;
          if (v2984) {
            const v2986 = false;
            sim_r.isHalt = false;
            }
          else {
            const v2990 = 'down                ';
            null;
            const v3037 = v758;
            const v3038 = v759;
            const v3039 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            sim_r.isHalt = false;
            }
          break;
          }
        case 'Bidder_bid0_100': {
          const v928 = v825[1];
          
          break;
          }
        case 'Bidder_optIn0_100': {
          const v1028 = v825[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v825], secs: v827, time: v826, didSend: v294, from: v824 } = txn1;
  switch (v825[0]) {
    case 'Auctioneer_stopAuction0_100': {
      const v828 = v825[1];
      undefined /* setApiDetails */;
      ;
      const v842 = 'endSuccess          ';
      null;
      const v845 = {
        blockEnded: v826,
        id: v739,
        lastBid: v751
        };
      const v846 = await txn1.getOutput('Auctioneer_stopAuction', 'v845', ctc13, v845);
      if (v294) {
        stdlib.protect(ctc14, await interact.out(v828, v846), {
          at: './src/contracts/auction.rsh:119:25:application',
          fs: ['at ./src/contracts/auction.rsh:119:25:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:119:25:function exp)', 'at ./src/contracts/auction.rsh:131:39:application call to "notify" (defined at: ./src/contracts/auction.rsh:124:34:function exp)', 'at ./src/contracts/auction.rsh:124:34:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:124:34:function exp)'],
          msg: 'out',
          who: 'Auctioneer_stopAuction'
          });
        }
      else {
        }
      
      const v2975 = v748;
      const v2976 = v749;
      const v2977 = false;
      const v2978 = v751;
      const v2979 = v826;
      const v2981 = v758;
      const v2982 = v759;
      const v2983 = stdlib.gt(v747, v752);
      const v2984 = v2983 ? false : false;
      if (v2984) {
        const v2986 = false;
        return;
        }
      else {
        const v2990 = 'down                ';
        null;
        const v3037 = v758;
        const v3038 = v759;
        const v3039 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
        return;
        }
      break;
      }
    case 'Bidder_bid0_100': {
      const v928 = v825[1];
      return;
      break;
      }
    case 'Bidder_optIn0_100': {
      const v1028 = v825[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_bid6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_bid6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([ctc2]);
  const ctc11 = stdlib.T_Tuple([]);
  const ctc12 = stdlib.T_Data({
    Auctioneer_stopAuction0_100: ctc11,
    Bidder_bid0_100: ctc10,
    Bidder_optIn0_100: ctc11
    });
  const ctc13 = stdlib.T_Tuple([ctc0, ctc2]);
  const ctc14 = stdlib.T_Null;
  
  
  const [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7]);
  const v798 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:92:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:92:41:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to "runBidder_bid0_100" (defined at: ./src/contracts/auction.rsh:92:22:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:80:83:function exp)'],
    msg: 'in',
    who: 'Bidder_bid'
    });
  const v799 = v798[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:1:23:application', stdlib.UInt_max, '0')];
  const v801 = stdlib.gt(v799, v751);
  stdlib.assert(v801, {
    at: 'reach standard library:57:5:application',
    fs: ['at ./src/contracts/auction.rsh:93:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:92:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:92:41:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to "runBidder_bid0_100" (defined at: ./src/contracts/auction.rsh:92:22:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:80:83:function exp)'],
    msg: 'Your bid is too low, please try again',
    who: 'Bidder_bid'
    });
  const v808 = ['Bidder_bid0_100', v798];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780, v808],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [v799, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v825], secs: v827, time: v826, didSend: v294, from: v824 } = txn1;
      
      switch (v825[0]) {
        case 'Auctioneer_stopAuction0_100': {
          const v828 = v825[1];
          
          break;
          }
        case 'Bidder_bid0_100': {
          const v928 = v825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_bid"
            });
          const v934 = v928[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:92:22:spread', stdlib.UInt_max, '0')];
          const v939 = stdlib.add(v759, v934);
          sim_r.txns.push({
            amt: v934,
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v960 = [v748, v751];
          const v961 = await txn1.getOutput('Bidder_bid', 'v960', ctc13, v960);
          
          if (v749) {
            const v978 = 'bidSuccess          ';
            null;
            const v3511 = v824;
            const v3512 = false;
            const v3513 = v750;
            const v3514 = v934;
            const v3515 = v826;
            const v3517 = v758;
            const v3518 = v939;
            const v3519 = stdlib.gt(v747, v752);
            const v3520 = v3519 ? v750 : false;
            if (v3520) {
              const v3522 = true;
              sim_r.isHalt = false;
              }
            else {
              const v3526 = 'down                ';
              null;
              const v3573 = v758;
              const v3574 = v939;
              const v3575 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              sim_r.isHalt = false;
              }}
          else {
            const v973 = stdlib.sub(v939, v751);
            sim_r.txns.push({
              kind: 'from',
              to: v748,
              tok: undefined /* Nothing */
              });
            const v975 = 'bidSuccess          ';
            null;
            const v3578 = v824;
            const v3579 = false;
            const v3580 = v750;
            const v3581 = v934;
            const v3582 = v826;
            const v3584 = v758;
            const v3585 = v973;
            const v3586 = stdlib.gt(v747, v752);
            const v3587 = v3586 ? v750 : false;
            if (v3587) {
              const v3589 = true;
              sim_r.isHalt = false;
              }
            else {
              const v3593 = 'down                ';
              null;
              const v3640 = v758;
              const v3641 = v973;
              const v3642 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              sim_r.isHalt = false;
              }}
          break;
          }
        case 'Bidder_optIn0_100': {
          const v1028 = v825[1];
          
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v825], secs: v827, time: v826, didSend: v294, from: v824 } = txn1;
  switch (v825[0]) {
    case 'Auctioneer_stopAuction0_100': {
      const v828 = v825[1];
      return;
      break;
      }
    case 'Bidder_bid0_100': {
      const v928 = v825[1];
      undefined /* setApiDetails */;
      const v934 = v928[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:92:22:spread', stdlib.UInt_max, '0')];
      const v935 = stdlib.gt(v934, v751);
      stdlib.assert(v935, {
        at: 'reach standard library:57:5:application',
        fs: ['at ./src/contracts/auction.rsh:93:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:92:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:92:41:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:92:41:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:80:83:function exp)'],
        msg: 'Your bid is too low, please try again',
        who: 'Bidder_bid'
        });
      const v939 = stdlib.add(v759, v934);
      ;
      const v960 = [v748, v751];
      const v961 = await txn1.getOutput('Bidder_bid', 'v960', ctc13, v960);
      if (v294) {
        stdlib.protect(ctc14, await interact.out(v928, v961), {
          at: './src/contracts/auction.rsh:92:23:application',
          fs: ['at ./src/contracts/auction.rsh:92:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:92:23:function exp)', 'at ./src/contracts/auction.rsh:97:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:96:42:function exp)', 'at ./src/contracts/auction.rsh:96:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:96:42:function exp)'],
          msg: 'out',
          who: 'Bidder_bid'
          });
        }
      else {
        }
      
      if (v749) {
        const v978 = 'bidSuccess          ';
        null;
        const v3511 = v824;
        const v3512 = false;
        const v3513 = v750;
        const v3514 = v934;
        const v3515 = v826;
        const v3517 = v758;
        const v3518 = v939;
        const v3519 = stdlib.gt(v747, v752);
        const v3520 = v3519 ? v750 : false;
        if (v3520) {
          const v3522 = true;
          return;
          }
        else {
          const v3526 = 'down                ';
          null;
          const v3573 = v758;
          const v3574 = v939;
          const v3575 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          return;
          }}
      else {
        const v973 = stdlib.sub(v939, v751);
        ;
        const v975 = 'bidSuccess          ';
        null;
        const v3578 = v824;
        const v3579 = false;
        const v3580 = v750;
        const v3581 = v934;
        const v3582 = v826;
        const v3584 = v758;
        const v3585 = v973;
        const v3586 = stdlib.gt(v747, v752);
        const v3587 = v3586 ? v750 : false;
        if (v3587) {
          const v3589 = true;
          return;
          }
        else {
          const v3593 = 'down                ';
          null;
          const v3640 = v758;
          const v3641 = v973;
          const v3642 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          return;
          }}
      break;
      }
    case 'Bidder_optIn0_100': {
      const v1028 = v825[1];
      return;
      break;
      }
    }
  
  
  };
export async function _Bidder_optIn6(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for _Bidder_optIn6 expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for _Bidder_optIn6 expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_Token;
  const ctc2 = stdlib.T_UInt;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc4 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc2,
    description: ctc3,
    id: ctc2,
    owner: ctc0,
    price: ctc2,
    title: ctc4
    });
  const ctc6 = stdlib.T_Contract;
  const ctc7 = stdlib.T_Bool;
  const ctc8 = stdlib.T_Tuple([ctc2, ctc2, ctc7]);
  const ctc9 = stdlib.T_Array(ctc8, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc10 = stdlib.T_Tuple([]);
  const ctc11 = stdlib.T_Tuple([ctc2]);
  const ctc12 = stdlib.T_Data({
    Auctioneer_stopAuction0_100: ctc10,
    Bidder_bid0_100: ctc11,
    Bidder_optIn0_100: ctc10
    });
  const ctc13 = stdlib.T_Null;
  
  
  const [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780] = await ctc.getState(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6'), [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7]);
  const v812 = stdlib.protect(ctc10, await interact.in(), {
    at: './src/contracts/auction.rsh:1:23:application',
    fs: ['at ./src/contracts/auction.rsh:105:40:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:105:40:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to "runBidder_optIn0_100" (defined at: ./src/contracts/auction.rsh:105:22:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:80:83:function exp)'],
    msg: 'in',
    who: 'Bidder_optIn'
    });
  const v816 = ['Bidder_optIn0_100', v812];
  
  const txn1 = await (ctc.sendrecv({
    args: [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780, v816],
    evt_cnt: 1,
    funcNum: 6,
    lct: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc12],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v825], secs: v827, time: v826, didSend: v294, from: v824 } = txn1;
      
      switch (v825[0]) {
        case 'Auctioneer_stopAuction0_100': {
          const v828 = v825[1];
          
          break;
          }
        case 'Bidder_bid0_100': {
          const v928 = v825[1];
          
          break;
          }
        case 'Bidder_optIn0_100': {
          const v1028 = v825[1];
          sim_r.txns.push({
            kind: 'api',
            who: "Bidder_optIn"
            });
          const v1039 = stdlib.add(v759, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          sim_r.txns.push({
            amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'),
            kind: 'to',
            tok: undefined /* Nothing */
            });
          const v1082 = stdlib.ge(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:75:application', stdlib.UInt_max, '900000'));
          if (v1082) {
            const v1083 = v721.Admin;
            const v1087 = stdlib.sub(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:75:application', stdlib.UInt_max, '900000'));
            sim_r.txns.push({
              kind: 'from',
              to: v1083,
              tok: undefined /* Nothing */
              });
            const v1089 = stdlib.ge(v1087, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
            if (v1089) {
              const v1093 = stdlib.sub(v1087, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v719,
                tok: undefined /* Nothing */
                });
              const v1094 = true;
              const v1095 = await txn1.getOutput('Bidder_optIn', 'v1094', ctc7, v1094);
              
              const v4114 = v748;
              const v4115 = v749;
              const v4116 = v750;
              const v4117 = v751;
              const v4118 = v826;
              const v4120 = v758;
              const v4121 = v1093;
              const v4122 = stdlib.gt(v747, v752);
              const v4123 = v4122 ? v750 : false;
              if (v4123) {
                const v4125 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4129 = 'down                ';
                null;
                const v4176 = v758;
                const v4177 = v1093;
                const v4178 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}
            else {
              const v1101 = true;
              const v1102 = await txn1.getOutput('Bidder_optIn', 'v1101', ctc7, v1101);
              
              const v4181 = v748;
              const v4182 = v749;
              const v4183 = v750;
              const v4184 = v751;
              const v4185 = v826;
              const v4187 = v758;
              const v4188 = v1087;
              const v4189 = stdlib.gt(v747, v752);
              const v4190 = v4189 ? v750 : false;
              if (v4190) {
                const v4192 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4196 = 'down                ';
                null;
                const v4243 = v758;
                const v4244 = v1087;
                const v4245 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}}
          else {
            const v1109 = stdlib.ge(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
            if (v1109) {
              const v1113 = stdlib.sub(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
              sim_r.txns.push({
                kind: 'from',
                to: v719,
                tok: undefined /* Nothing */
                });
              const v1114 = true;
              const v1115 = await txn1.getOutput('Bidder_optIn', 'v1114', ctc7, v1114);
              
              const v4248 = v748;
              const v4249 = v749;
              const v4250 = v750;
              const v4251 = v751;
              const v4252 = v826;
              const v4254 = v758;
              const v4255 = v1113;
              const v4256 = stdlib.gt(v747, v752);
              const v4257 = v4256 ? v750 : false;
              if (v4257) {
                const v4259 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4263 = 'down                ';
                null;
                const v4310 = v758;
                const v4311 = v1113;
                const v4312 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}
            else {
              const v1121 = true;
              const v1122 = await txn1.getOutput('Bidder_optIn', 'v1121', ctc7, v1121);
              
              const v4315 = v748;
              const v4316 = v749;
              const v4317 = v750;
              const v4318 = v751;
              const v4319 = v826;
              const v4321 = v758;
              const v4322 = v1039;
              const v4323 = stdlib.gt(v747, v752);
              const v4324 = v4323 ? v750 : false;
              if (v4324) {
                const v4326 = true;
                sim_r.isHalt = false;
                }
              else {
                const v4330 = 'down                ';
                null;
                const v4377 = v758;
                const v4378 = v1039;
                const v4379 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }}}
          break;
          }
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1, ctc5, ctc2, ctc2, ctc6, ctc4, ctc2, ctc0, ctc7, ctc7, ctc2, ctc2, ctc9, ctc2, ctc7, ctc12],
    waitIfNotPresent: false
    }));
  const {data: [v825], secs: v827, time: v826, didSend: v294, from: v824 } = txn1;
  switch (v825[0]) {
    case 'Auctioneer_stopAuction0_100': {
      const v828 = v825[1];
      return;
      break;
      }
    case 'Bidder_bid0_100': {
      const v928 = v825[1];
      return;
      break;
      }
    case 'Bidder_optIn0_100': {
      const v1028 = v825[1];
      undefined /* setApiDetails */;
      const v1039 = stdlib.add(v759, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
      ;
      const v1082 = stdlib.ge(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:75:application', stdlib.UInt_max, '900000'));
      if (v1082) {
        const v1083 = v721.Admin;
        const v1087 = stdlib.sub(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:75:application', stdlib.UInt_max, '900000'));
        ;
        const v1089 = stdlib.ge(v1087, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
        if (v1089) {
          const v1093 = stdlib.sub(v1087, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
          ;
          const v1094 = true;
          const v1095 = await txn1.getOutput('Bidder_optIn', 'v1094', ctc7, v1094);
          if (v294) {
            stdlib.protect(ctc13, await interact.out(v1028, v1095), {
              at: './src/contracts/auction.rsh:105:23:application',
              fs: ['at ./src/contracts/auction.rsh:105:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:105:23:function exp)', 'at ./src/contracts/auction.rsh:113:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:108:42:function exp)', 'at ./src/contracts/auction.rsh:108:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4114 = v748;
          const v4115 = v749;
          const v4116 = v750;
          const v4117 = v751;
          const v4118 = v826;
          const v4120 = v758;
          const v4121 = v1093;
          const v4122 = stdlib.gt(v747, v752);
          const v4123 = v4122 ? v750 : false;
          if (v4123) {
            const v4125 = true;
            return;
            }
          else {
            const v4129 = 'down                ';
            null;
            const v4176 = v758;
            const v4177 = v1093;
            const v4178 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}
        else {
          const v1101 = true;
          const v1102 = await txn1.getOutput('Bidder_optIn', 'v1101', ctc7, v1101);
          if (v294) {
            stdlib.protect(ctc13, await interact.out(v1028, v1102), {
              at: './src/contracts/auction.rsh:105:23:application',
              fs: ['at ./src/contracts/auction.rsh:105:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:105:23:function exp)', 'at ./src/contracts/auction.rsh:113:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:108:42:function exp)', 'at ./src/contracts/auction.rsh:108:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4181 = v748;
          const v4182 = v749;
          const v4183 = v750;
          const v4184 = v751;
          const v4185 = v826;
          const v4187 = v758;
          const v4188 = v1087;
          const v4189 = stdlib.gt(v747, v752);
          const v4190 = v4189 ? v750 : false;
          if (v4190) {
            const v4192 = true;
            return;
            }
          else {
            const v4196 = 'down                ';
            null;
            const v4243 = v758;
            const v4244 = v1087;
            const v4245 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}}
      else {
        const v1109 = stdlib.ge(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
        if (v1109) {
          const v1113 = stdlib.sub(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
          ;
          const v1114 = true;
          const v1115 = await txn1.getOutput('Bidder_optIn', 'v1114', ctc7, v1114);
          if (v294) {
            stdlib.protect(ctc13, await interact.out(v1028, v1115), {
              at: './src/contracts/auction.rsh:105:23:application',
              fs: ['at ./src/contracts/auction.rsh:105:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:105:23:function exp)', 'at ./src/contracts/auction.rsh:113:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:108:42:function exp)', 'at ./src/contracts/auction.rsh:108:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4248 = v748;
          const v4249 = v749;
          const v4250 = v750;
          const v4251 = v751;
          const v4252 = v826;
          const v4254 = v758;
          const v4255 = v1113;
          const v4256 = stdlib.gt(v747, v752);
          const v4257 = v4256 ? v750 : false;
          if (v4257) {
            const v4259 = true;
            return;
            }
          else {
            const v4263 = 'down                ';
            null;
            const v4310 = v758;
            const v4311 = v1113;
            const v4312 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}
        else {
          const v1121 = true;
          const v1122 = await txn1.getOutput('Bidder_optIn', 'v1121', ctc7, v1121);
          if (v294) {
            stdlib.protect(ctc13, await interact.out(v1028, v1122), {
              at: './src/contracts/auction.rsh:105:23:application',
              fs: ['at ./src/contracts/auction.rsh:105:23:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:105:23:function exp)', 'at ./src/contracts/auction.rsh:113:47:application call to "notify" (defined at: ./src/contracts/auction.rsh:108:42:function exp)', 'at ./src/contracts/auction.rsh:108:42:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:108:42:function exp)'],
              msg: 'out',
              who: 'Bidder_optIn'
              });
            }
          else {
            }
          
          const v4315 = v748;
          const v4316 = v749;
          const v4317 = v750;
          const v4318 = v751;
          const v4319 = v826;
          const v4321 = v758;
          const v4322 = v1039;
          const v4323 = stdlib.gt(v747, v752);
          const v4324 = v4323 ? v750 : false;
          if (v4324) {
            const v4326 = true;
            return;
            }
          else {
            const v4330 = 'down                ';
            null;
            const v4377 = v758;
            const v4378 = v1039;
            const v4379 = stdlib.safeAdd(v826, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
            return;
            }}}
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
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '80'));
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '20'));
  const ctc4 = stdlib.T_Token;
  const ctc5 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc1,
    description: ctc2,
    id: ctc1,
    owner: ctc0,
    price: ctc1,
    title: ctc3,
    tokenId: ctc4
    });
  const ctc6 = stdlib.T_Object({
    Admin: ctc0,
    deadline: ctc1,
    description: ctc2,
    id: ctc1,
    owner: ctc0,
    price: ctc1,
    title: ctc3
    });
  const ctc7 = stdlib.T_Tuple([]);
  const ctc8 = stdlib.T_Tuple([ctc1]);
  const ctc9 = stdlib.T_Data({
    Auctioneer_stopAuction0_100: ctc7,
    Bidder_bid0_100: ctc8,
    Bidder_optIn0_100: ctc7
    });
  const ctc10 = stdlib.T_Struct([['id', ctc1], ['blockEnded', ctc1], ['lastBid', ctc1]]);
  const ctc11 = stdlib.T_Tuple([ctc0, ctc1]);
  const ctc12 = stdlib.T_Bool;
  const ctc13 = stdlib.T_Contract;
  const ctc14 = stdlib.T_Tuple([ctc1, ctc1, ctc12]);
  const ctc15 = stdlib.T_Array(ctc14, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'));
  const ctc16 = stdlib.T_Data({
    Auctioneer_acceptSale0_413: ctc7,
    Auctioneer_rejectSale0_413: ctc7
    });
  
  
  const v694 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), false];
  const v695 = [v694];
  const v699 = stdlib.protect(ctc5, interact.getAuction, 'for Seller\'s interact field getAuction');
  const v700 = v699.Admin;
  const v701 = v699.deadline;
  const v702 = v699.description;
  const v703 = v699.id;
  const v704 = v699.owner;
  const v705 = v699.price;
  const v706 = v699.title;
  const v707 = v699.tokenId;
  
  const v718 = {
    Admin: v700,
    deadline: v701,
    description: v702,
    id: v703,
    owner: v704,
    price: v705,
    title: v706
    };
  
  const txn1 = await (ctc.sendrecv({
    args: [v707, v718],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4, ctc6],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v720, v721], secs: v723, time: v722, didSend: v45, from: v719 } = txn1;
      
      const v724 = v695[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:dot', stdlib.UInt_max, '0')];
      const v725 = stdlib.Array_set(v724, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:dot', stdlib.UInt_max, '0'));
      const v726 = stdlib.Array_set(v695, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:dot', stdlib.UInt_max, '0'), v725);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'),
        kind: 'init',
        tok: v720
        });
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc6],
    waitIfNotPresent: false
    }));
  const {data: [v720, v721], secs: v723, time: v722, didSend: v45, from: v719 } = txn1;
  const v724 = v695[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:dot', stdlib.UInt_max, '0')];
  const v725 = stdlib.Array_set(v724, '0', stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:dot', stdlib.UInt_max, '0'));
  const v726 = stdlib.Array_set(v695, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:61:16:dot', stdlib.UInt_max, '0'), v725);
  ;
  ;
  const txn2 = await (ctc.sendrecv({
    args: [v719, v720, v721, v722, v726],
    evt_cnt: 0,
    funcNum: 1,
    lct: v722,
    onlyIf: true,
    out_tys: [],
    pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:63:16:dot', stdlib.UInt_max, '0'), [[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'), v720]]],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v730, time: v729, didSend: v52, from: v728 } = txn2;
      
      ;
      const v731 = v726[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:63:16:dot', stdlib.UInt_max, '0')];
      const v732 = v731[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:63:16:dot', stdlib.UInt_max, '0')];
      const v733 = stdlib.add(v732, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
      const v735 = stdlib.Array_set(v731, '0', v733);
      const v736 = stdlib.Array_set(v726, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:63:16:dot', stdlib.UInt_max, '0'), v735);
      sim_r.txns.push({
        amt: stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'),
        kind: 'to',
        tok: v720
        });
      const v738 = v729;
      const v739 = v721.id;
      const v740 = await ctc.getContractInfo();
      const v741 = v721.owner;
      const v742 = v721.title;
      const v743 = v721.description;
      const v744 = v721.price;
      null;
      const v745 = v721.deadline;
      const v747 = stdlib.safeAdd(v722, v745);
      const v748 = v719;
      const v749 = true;
      const v750 = true;
      const v751 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:17:decimal', stdlib.UInt_max, '0');
      const v752 = v729;
      const v753 = v722;
      const v758 = v736;
      const v759 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:56:9:after expr stmt', stdlib.UInt_max, '0');
      
      if (await (async () => {
        const v773 = stdlib.gt(v747, v753);
        const v777 = v773 ? v750 : false;
        
        return v777;})()) {
        const v779 = stdlib.gt(v747, v753);
        const v780 = v750 ? v779 : false;
        sim_r.isHalt = false;
        }
      else {
        const v1135 = stdlib.gt(v747, v753);
        const v1139 = v1135 ? v750 : false;
        const v1142 = 'down                ';
        null;
        const v1143 = true;
        const v1144 = v752;
        const v1150 = v758;
        const v1151 = v759;
        
        if (await (async () => {
          
          return v1143;})()) {
          const v1163 = stdlib.safeAdd(v1144, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
          sim_r.isHalt = false;
          }
        else {
          const v1326 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
          const v1327 = v1326[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
          sim_r.txns.push({
            kind: 'from',
            to: v748,
            tok: v720
            });
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          sim_r.txns.push({
            kind: 'halt',
            tok: v720
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
    tys: [ctc0, ctc4, ctc6, ctc1, ctc15],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v730, time: v729, didSend: v52, from: v728 } = txn2;
  ;
  const v731 = v726[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:63:16:dot', stdlib.UInt_max, '0')];
  const v732 = v731[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:63:16:dot', stdlib.UInt_max, '0')];
  const v733 = stdlib.add(v732, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:11:13:decimal', stdlib.UInt_max, '1'));
  const v735 = stdlib.Array_set(v731, '0', v733);
  const v736 = stdlib.Array_set(v726, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:63:16:dot', stdlib.UInt_max, '0'), v735);
  ;
  const v737 = stdlib.addressEq(v719, v728);
  stdlib.assert(v737, {
    at: './src/contracts/auction.rsh:63:16:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Seller'
    });
  const v738 = v729;
  const v739 = v721.id;
  const v740 = await ctc.getContractInfo();
  const v741 = v721.owner;
  const v742 = v721.title;
  const v743 = v721.description;
  const v744 = v721.price;
  null;
  const v745 = v721.deadline;
  const v747 = stdlib.safeAdd(v722, v745);
  let v748 = v719;
  let v749 = true;
  let v750 = true;
  let v751 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:83:17:decimal', stdlib.UInt_max, '0');
  let v752 = v729;
  let v753 = v722;
  let v758 = v736;
  let v759 = stdlib.checkedBigNumberify('./src/contracts/auction.rsh:56:9:after expr stmt', stdlib.UInt_max, '0');
  
  let txn3 = txn2;
  while (await (async () => {
    const v773 = stdlib.gt(v747, v753);
    const v777 = v773 ? v750 : false;
    
    return v777;})()) {
    const v779 = stdlib.gt(v747, v753);
    const v780 = v750 ? v779 : false;
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 6,
      out_tys: [ctc9],
      timeoutAt: ['time', v747],
      waitIfNotPresent: false
      }));
    if (txn4.didTimeout) {
      const txn5 = await (ctc.sendrecv({
        args: [v719, v720, v721, v738, v739, v740, v742, v747, v748, v749, v750, v751, v752, v758, v759, v780],
        evt_cnt: 0,
        funcNum: 7,
        lct: v752,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:136:32:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn5) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1130, time: v1129, didSend: v391, from: v1128 } = txn5;
          
          ;
          const cv748 = v748;
          const cv749 = v749;
          const cv750 = v750;
          const cv751 = v751;
          const cv752 = v1129;
          const cv753 = v752;
          const cv758 = v758;
          const cv759 = v759;
          
          await (async () => {
            const v748 = cv748;
            const v749 = cv749;
            const v750 = cv750;
            const v751 = cv751;
            const v752 = cv752;
            const v753 = cv753;
            const v758 = cv758;
            const v759 = cv759;
            
            if (await (async () => {
              const v773 = stdlib.gt(v747, v753);
              const v777 = v773 ? v750 : false;
              
              return v777;})()) {
              const v779 = stdlib.gt(v747, v753);
              const v780 = v750 ? v779 : false;
              sim_r.isHalt = false;
              }
            else {
              const v1135 = stdlib.gt(v747, v753);
              const v1139 = v1135 ? v750 : false;
              const v1142 = 'down                ';
              null;
              const v1143 = true;
              const v1144 = v752;
              const v1150 = v758;
              const v1151 = v759;
              
              if (await (async () => {
                
                return v1143;})()) {
                const v1163 = stdlib.safeAdd(v1144, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
                sim_r.isHalt = false;
                }
              else {
                const v1326 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
                const v1327 = v1326[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
                sim_r.txns.push({
                  kind: 'from',
                  to: v748,
                  tok: v720
                  });
                sim_r.txns.push({
                  kind: 'from',
                  to: v719,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: v720
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
        tys: [ctc0, ctc4, ctc6, ctc1, ctc1, ctc13, ctc3, ctc1, ctc0, ctc12, ctc12, ctc1, ctc1, ctc15, ctc1, ctc12],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1130, time: v1129, didSend: v391, from: v1128 } = txn5;
      ;
      const v1131 = stdlib.addressEq(v719, v1128);
      stdlib.assert(v1131, {
        at: './src/contracts/auction.rsh:136:32:dot',
        fs: ['at ./src/contracts/auction.rsh:135:46:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:46:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const cv748 = v748;
      const cv749 = v749;
      const cv750 = v750;
      const cv751 = v751;
      const cv752 = v1129;
      const cv753 = v752;
      const cv758 = v758;
      const cv759 = v759;
      
      v748 = cv748;
      v749 = cv749;
      v750 = cv750;
      v751 = cv751;
      v752 = cv752;
      v753 = cv753;
      v758 = cv758;
      v759 = cv759;
      
      txn3 = txn5;
      continue;
      }
    else {
      const {data: [v825], secs: v827, time: v826, didSend: v294, from: v824 } = txn4;
      switch (v825[0]) {
        case 'Auctioneer_stopAuction0_100': {
          const v828 = v825[1];
          undefined /* setApiDetails */;
          ;
          const v842 = 'endSuccess          ';
          null;
          const v845 = {
            blockEnded: v826,
            id: v739,
            lastBid: v751
            };
          await txn4.getOutput('Auctioneer_stopAuction', 'v845', ctc10, v845);
          const cv748 = v748;
          const cv749 = v749;
          const cv750 = false;
          const cv751 = v751;
          const cv752 = v826;
          const cv753 = v752;
          const cv758 = v758;
          const cv759 = v759;
          
          v748 = cv748;
          v749 = cv749;
          v750 = cv750;
          v751 = cv751;
          v752 = cv752;
          v753 = cv753;
          v758 = cv758;
          v759 = cv759;
          
          txn3 = txn4;
          continue;
          break;
          }
        case 'Bidder_bid0_100': {
          const v928 = v825[1];
          undefined /* setApiDetails */;
          const v934 = v928[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:92:22:spread', stdlib.UInt_max, '0')];
          const v935 = stdlib.gt(v934, v751);
          stdlib.assert(v935, {
            at: 'reach standard library:57:5:application',
            fs: ['at ./src/contracts/auction.rsh:93:30:application call to "check" (defined at: reach standard library:49:32:function exp)', 'at ./src/contracts/auction.rsh:92:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:92:41:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:92:41:function exp)', 'at ./src/contracts/auction.rsh:80:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:80:83:function exp)'],
            msg: 'Your bid is too low, please try again',
            who: 'Seller'
            });
          const v939 = stdlib.add(v759, v934);
          ;
          const v960 = [v748, v751];
          await txn4.getOutput('Bidder_bid', 'v960', ctc11, v960);
          if (v749) {
            const v978 = 'bidSuccess          ';
            null;
            const cv748 = v824;
            const cv749 = false;
            const cv750 = v750;
            const cv751 = v934;
            const cv752 = v826;
            const cv753 = v752;
            const cv758 = v758;
            const cv759 = v939;
            
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v751 = cv751;
            v752 = cv752;
            v753 = cv753;
            v758 = cv758;
            v759 = cv759;
            
            txn3 = txn4;
            continue;}
          else {
            const v973 = stdlib.sub(v939, v751);
            ;
            const v975 = 'bidSuccess          ';
            null;
            const cv748 = v824;
            const cv749 = false;
            const cv750 = v750;
            const cv751 = v934;
            const cv752 = v826;
            const cv753 = v752;
            const cv758 = v758;
            const cv759 = v973;
            
            v748 = cv748;
            v749 = cv749;
            v750 = cv750;
            v751 = cv751;
            v752 = cv752;
            v753 = cv753;
            v758 = cv758;
            v759 = cv759;
            
            txn3 = txn4;
            continue;}
          break;
          }
        case 'Bidder_optIn0_100': {
          const v1028 = v825[1];
          undefined /* setApiDetails */;
          const v1039 = stdlib.add(v759, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:12:18:decimal', stdlib.UInt_max, '1000000'));
          ;
          const v1082 = stdlib.ge(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:75:application', stdlib.UInt_max, '900000'));
          if (v1082) {
            const v1083 = v721.Admin;
            const v1087 = stdlib.sub(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:109:75:application', stdlib.UInt_max, '900000'));
            ;
            const v1089 = stdlib.ge(v1087, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
            if (v1089) {
              const v1093 = stdlib.sub(v1087, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
              ;
              const v1094 = true;
              await txn4.getOutput('Bidder_optIn', 'v1094', ctc12, v1094);
              const cv748 = v748;
              const cv749 = v749;
              const cv750 = v750;
              const cv751 = v751;
              const cv752 = v826;
              const cv753 = v752;
              const cv758 = v758;
              const cv759 = v1093;
              
              v748 = cv748;
              v749 = cv749;
              v750 = cv750;
              v751 = cv751;
              v752 = cv752;
              v753 = cv753;
              v758 = cv758;
              v759 = cv759;
              
              txn3 = txn4;
              continue;}
            else {
              const v1101 = true;
              await txn4.getOutput('Bidder_optIn', 'v1101', ctc12, v1101);
              const cv748 = v748;
              const cv749 = v749;
              const cv750 = v750;
              const cv751 = v751;
              const cv752 = v826;
              const cv753 = v752;
              const cv758 = v758;
              const cv759 = v1087;
              
              v748 = cv748;
              v749 = cv749;
              v750 = cv750;
              v751 = cv751;
              v752 = cv752;
              v753 = cv753;
              v758 = cv758;
              v759 = cv759;
              
              txn3 = txn4;
              continue;}}
          else {
            const v1109 = stdlib.ge(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
            if (v1109) {
              const v1113 = stdlib.sub(v1039, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:110:76:application', stdlib.UInt_max, '100000'));
              ;
              const v1114 = true;
              await txn4.getOutput('Bidder_optIn', 'v1114', ctc12, v1114);
              const cv748 = v748;
              const cv749 = v749;
              const cv750 = v750;
              const cv751 = v751;
              const cv752 = v826;
              const cv753 = v752;
              const cv758 = v758;
              const cv759 = v1113;
              
              v748 = cv748;
              v749 = cv749;
              v750 = cv750;
              v751 = cv751;
              v752 = cv752;
              v753 = cv753;
              v758 = cv758;
              v759 = cv759;
              
              txn3 = txn4;
              continue;}
            else {
              const v1121 = true;
              await txn4.getOutput('Bidder_optIn', 'v1121', ctc12, v1121);
              const cv748 = v748;
              const cv749 = v749;
              const cv750 = v750;
              const cv751 = v751;
              const cv752 = v826;
              const cv753 = v752;
              const cv758 = v758;
              const cv759 = v1039;
              
              v748 = cv748;
              v749 = cv749;
              v750 = cv750;
              v751 = cv751;
              v752 = cv752;
              v753 = cv753;
              v758 = cv758;
              v759 = cv759;
              
              txn3 = txn4;
              continue;}}
          break;
          }
        }}
    
    }
  const v1135 = stdlib.gt(v747, v753);
  const v1139 = v1135 ? v750 : false;
  const v1142 = 'down                ';
  null;
  let v1143 = true;
  let v1144 = v752;
  let v1150 = v758;
  let v1151 = v759;
  
  let txn4 = txn3;
  while (await (async () => {
    
    return v1143;})()) {
    const v1163 = stdlib.safeAdd(v1144, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
    const txn5 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc16],
      timeoutAt: ['time', v1163],
      waitIfNotPresent: false
      }));
    if (txn5.didTimeout) {
      const txn6 = await (ctc.sendrecv({
        args: [v719, v720, v742, v748, v751, v1139, v1150, v1151, v1163],
        evt_cnt: 0,
        funcNum: 5,
        lct: v1144,
        onlyIf: true,
        out_tys: [],
        pay: [stdlib.checkedBigNumberify('./src/contracts/auction.rsh:199:32:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn6) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [], secs: v1305, time: v1304, didSend: v598, from: v1303 } = txn6;
          
          ;
          const v1307 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:41:application', stdlib.UInt_max, '0')];
          const v1308 = v1307[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:41:application', stdlib.UInt_max, '0')];
          const v1314 = stdlib.sub(v1308, v1308);
          const v1316 = stdlib.Array_set(v1307, '0', v1314);
          const v1317 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:63:application', stdlib.UInt_max, '0'), v1316);
          sim_r.txns.push({
            kind: 'from',
            to: v748,
            tok: v720
            });
          const v1322 = stdlib.sub(v1151, v1151);
          sim_r.txns.push({
            kind: 'from',
            to: v719,
            tok: undefined /* Nothing */
            });
          const v1324 = 'accepted            ';
          null;
          const cv1143 = false;
          const cv1144 = v1304;
          const cv1150 = v1317;
          const cv1151 = v1322;
          
          await (async () => {
            const v1143 = cv1143;
            const v1144 = cv1144;
            const v1150 = cv1150;
            const v1151 = cv1151;
            
            if (await (async () => {
              
              return v1143;})()) {
              const v1163 = stdlib.safeAdd(v1144, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:10:18:decimal', stdlib.UInt_max, '50'));
              sim_r.isHalt = false;
              }
            else {
              const v1326 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
              const v1327 = v1326[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
              sim_r.txns.push({
                kind: 'from',
                to: v748,
                tok: v720
                });
              sim_r.txns.push({
                kind: 'from',
                to: v719,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: v720
                })
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              }})();
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: undefined /* mto */,
        tys: [ctc0, ctc4, ctc3, ctc0, ctc1, ctc12, ctc15, ctc1, ctc1],
        waitIfNotPresent: false
        }));
      const {data: [], secs: v1305, time: v1304, didSend: v598, from: v1303 } = txn6;
      ;
      const v1306 = stdlib.addressEq(v719, v1303);
      stdlib.assert(v1306, {
        at: './src/contracts/auction.rsh:199:32:dot',
        fs: ['at ./src/contracts/auction.rsh:198:53:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:198:53:function exp)'],
        msg: 'sender correct',
        who: 'Seller'
        });
      const v1307 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:41:application', stdlib.UInt_max, '0')];
      const v1308 = v1307[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:41:application', stdlib.UInt_max, '0')];
      const v1314 = stdlib.sub(v1308, v1308);
      const v1316 = stdlib.Array_set(v1307, '0', v1314);
      const v1317 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:200:63:application', stdlib.UInt_max, '0'), v1316);
      ;
      const v1322 = stdlib.sub(v1151, v1151);
      ;
      const v1324 = 'accepted            ';
      null;
      const cv1143 = false;
      const cv1144 = v1304;
      const cv1150 = v1317;
      const cv1151 = v1322;
      
      v1143 = cv1143;
      v1144 = cv1144;
      v1150 = cv1150;
      v1151 = cv1151;
      
      txn4 = txn6;
      continue;
      }
    else {
      const {data: [v1188], secs: v1190, time: v1189, didSend: v538, from: v1187 } = txn5;
      switch (v1188[0]) {
        case 'Auctioneer_acceptSale0_413': {
          const v1191 = v1188[1];
          undefined /* setApiDetails */;
          ;
          const v1198 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:49:application', stdlib.UInt_max, '0')];
          const v1199 = v1198[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:49:application', stdlib.UInt_max, '0')];
          const v1205 = stdlib.sub(v1199, v1199);
          const v1207 = stdlib.Array_set(v1198, '0', v1205);
          const v1208 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:163:71:application', stdlib.UInt_max, '0'), v1207);
          ;
          const v1213 = stdlib.sub(v1151, v1151);
          ;
          const v1214 = true;
          await txn5.getOutput('Auctioneer_acceptSale', 'v1214', ctc12, v1214);
          const v1221 = 'accepted            ';
          null;
          const cv1143 = false;
          const cv1144 = v1189;
          const cv1150 = v1208;
          const cv1151 = v1213;
          
          v1143 = cv1143;
          v1144 = cv1144;
          v1150 = cv1150;
          v1151 = cv1151;
          
          txn4 = txn5;
          continue;
          break;
          }
        case 'Auctioneer_rejectSale0_413': {
          const v1247 = v1188[1];
          undefined /* setApiDetails */;
          ;
          const v1279 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:49:application', stdlib.UInt_max, '0')];
          const v1280 = v1279[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:49:application', stdlib.UInt_max, '0')];
          const v1286 = stdlib.sub(v1280, v1280);
          const v1288 = stdlib.Array_set(v1279, '0', v1286);
          const v1289 = stdlib.Array_set(v1150, stdlib.checkedBigNumberify('./src/contracts/auction.rsh:184:71:application', stdlib.UInt_max, '0'), v1288);
          ;
          const v1294 = stdlib.sub(v1151, v1151);
          ;
          const v1295 = false;
          await txn5.getOutput('Auctioneer_rejectSale', 'v1295', ctc12, v1295);
          const v1302 = 'rejected            ';
          null;
          const cv1143 = false;
          const cv1144 = v1189;
          const cv1150 = v1289;
          const cv1151 = v1294;
          
          v1143 = cv1143;
          v1144 = cv1144;
          v1150 = cv1150;
          v1151 = cv1151;
          
          txn4 = txn5;
          continue;
          break;
          }
        }}
    
    }
  const v1326 = v1150[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
  const v1327 = v1326[stdlib.checkedBigNumberify('./src/contracts/auction.rsh:212:25:application', stdlib.UInt_max, '0')];
  ;
  ;
  return;
  
  
  
  
  };
export async function Auctioneer_acceptSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_acceptSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Auctioneer_acceptSale5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_rejectSale(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_rejectSale expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 5) {return _Auctioneer_rejectSale5(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '5')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Auctioneer_stopAuction(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Auctioneer_stopAuction expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Auctioneer_stopAuction6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_bid(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_bid expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bidder_bid6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
export async function Bidder_optIn(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bidder_optIn expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const step = await ctc.getCurrentStep()
  if (step == 6) {return _Bidder_optIn6(ctcTop, interact);}
  throw stdlib.apiStateMismatchError({ _stateSourceMap }, [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '6')], stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, step))
  };
const _ALGO = {
  ABI: {
    impure: [`Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`],
    pure: [`AuctionView_awaitingConfirmation()byte`, `AuctionView_isRunning()byte`],
    sigs: [`AuctionView_awaitingConfirmation()byte`, `AuctionView_isRunning()byte`, `Auctioneer_acceptSale()byte`, `Auctioneer_rejectSale()byte`, `Auctioneer_stopAuction()(uint64,uint64,uint64)`, `Bidder_bid(uint64)(address,uint64)`, `Bidder_optIn()byte`]
    },
  GlobalNumByteSlice: 4,
  GlobalNumUint: 0,
  LocalNumByteSlice: 0,
  LocalNumUint: 0,
  appApproval: `ByAhAAEEIKCNBgUGCOQBEaD3NrO2z4gI5tji7gvSuNG7DuDt+OMIoJu8gQGWh8iqAQeQAuwB9AGYArgCuQK6AsICygLbAgLAhD1cdn4mBgEBAQAAAQIY3xqJa2JpZFN1Y2Nlc3MAAAAAAAAAAAAAGG8qQyxhY2NlcHRlZAAAAAAAAAAAAAAAACI1ADEYQQmoKmRJIls1ASEHWzUCNhoAF0lBAM0iNQQjNQZJIQsMQAB7SSEMDEAAT0khDQxAAA4hDRJEKjX/KTT/UEIFAiEMEkQ0AUkhBgxAABkhBhJEKWQoZFArZFBJNQOB4wIjWDUHQgk9IQUSRClkKGRQSTUDV2QBNQdCCSlJIQ4MQAAQIQ4SRDQBIQUSRCg1B0IJEiELEkQqNf8oNP9QQgSjSSEPDEAAKUkhEAxAABIhEBJEKjX/KzT/UCEHr1BCANYhDxJENhoBNf8oNP9QQgDGgaCL6kwSRCo1/yk0/1AhB69QQgCxNhoCFzUENhoDNhoBF0khBQxABD1JIQYMQAN1SSERDEAAjiEREkQhBjQBEkQ0BEkiEkw0AhIRRClkKGRQK2RQSTUDSVcAIDX/IRJbNf6ABOIbs6mwMgY0/g9ENP8xABJENP80AyVbNANXKLw0AyEIWzQDIRNbNAMhFFs0A1f8FDT+NAMhFSVYNAMhFiNYFzQDIRcjWBc0AyEYWzIGNAMhGVs0AyEaIQlYNAMhG1tCBllIIQY0ARJENARJIhJMNAISEUQpZChkUCtkUEk1A0lKSkpKSkpJVwAgNf8lWzX+Vyi8Nf0hCFs1/CETWzX7IRRbNfpX/BQ1+SESWzX4IRUlWDX3IRYjWBc19iEXI1gXNfUhGFs19CEZWzXzIRohCVg18iEbWzXxSTUFNfCABBQM5gg08FCwMgY0+AxENPAiVUkjDEAB4UkhHAxAATAhHBJENPEhHQg17yEdiAeINO8hCg9BAJk07yEKCTXusSKyASEKsggjshA0/VcAILIHszTuIQQPQQBFsSKyASEEsggjshA0/7IHs4AJAAAAAAAABEYBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DIGNPM08jTuIQQJQgU+gAkAAAAAAAAETQGwKDUHNP80/jT9NPw0+zT6NPk0+DT3NPY09TT0MgY08zTyNO5CBQw07yEED0EARbEisgEhBLIII7IQNP+yB7OACQAAAAAAAARaAbAoNQc0/zT+NP00/DT7NPo0+TT4NPc09jT1NPQyBjTzNPI07yEECUIEv4AJAAAAAAAABGEBsCg1BzT/NP40/TT8NPs0+jT5NPg09zT2NPU09DIGNPM08jTvQgSNSDTwVwEINe807xdJNe409A1ENPE07gg17TTuiAZKgAgAAAAAAAADwDT3NPQWUFCwNPc09BZQNQc09kEALScENPsWUDTuFlCwNP80/jT9NPw0+zT6NPk0+DEAIjT1NO4yBjTzNPI07UIEI7EisgE09LIII7IQNPeyB7MnBDT7FlA07hZQsDT/NP40/TT8NPs0+jT5NPgxACI09TTuMgY08zTyNO009AlCA+NIgBjfGolrZW5kU3VjY2VzcwAAAAAAAAAAAAA0+xZQNPQWULCACAAAAAAAAANNNPsWMgYWUDT0FlBQsDT7FjIGFlA09BZQNQc0/zT+NP00/DT7NPo0+TT4NPc09iI09DIGNPM08jTxQgN5SCEFNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSkpJVwAgNf8lWzX+VygUNf1XPCA1/CEeWzX7V2URNfohH1s1+YAEzJmSXLAyBjQDISBbD0Q0/zEAEkQ0+lcAEUk1+CJbNfexIrIBNPeyEiSyEDT8shQ0/rIRs7EisgE0+bIII7IQNP+yB7MnBTT9UDT7FlA0/1A0/FA0/hZQsDT/NP40/TT8NPs0A1dkARciMgY0+jT4NPdJCRZcAFwANPlJCUIDh0kjDEACLUkkDEABaUghBTQBEkQ0BEkiEkw0AhIRRClkKGRQSTUDSUpKSlcAIDX/JVs1/lcoFDX9VzwgNfwhHls1+1dkARc1+ldlETX5IR9bNfhJNQU194AErnvUBjT3ULAyBjQDISBbDEQ09yJVQAB2NPlXABFJNfYiWzX1sSKyATT1shIkshA0/LIUNP6yEbOxIrIBNPiyCCOyEDT/sgezgAkAAAAAAAAEvgGwKDUHJwU0/VA0+xZQNP9QNPxQNP4WULA0/zT+NP00/DT7NPoiMgY0+TT2NPVJCRZcAFwANPhJCUICoDT5VwARSTX2Ils19bEisgE09bISJLIQNP+yFDT+shGzsSKyATT4sggjshA0/LIHs4AJAAAAAAAABQ8AsCk1B4AYbypDLHJlamVjdGVkAAAAAAAAAAAAAAAANP1QNPsWUDT/UDT8UDT+FlCwNP80/jT9NPw0+zT6IjIGNPk09jT1SQkWXABcADT4SQlCAhIjEkQjNAESRDQESSISTDQCEhFEKWQoZFBJNQNJSklXACA1/yVbNf5XKLw1/SEIWzX8V+wRNfuABJqLkXSwNPtXABE1+iM0/ogC7DT/MQASRDT9gXhbNfkxGDX4NP1XqBQ194AEQ689YzT5FlA0+BZQMgYWUDT9V4AgUDT3UDT9VyhQUDT9V6AIUDT+FlCwNP80/jT9MgY0+TT4NPc0/DT9JVsINP8jIyIyBjT8NPs0+kkiWyMIFlwAXAAiQgCFSCEEiAJaIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/Vwi8Nf6ABDJBGOk0/xZQNP5QsCEJr0k1/UlXABEhB69cAFwANfwhBIgCF7EisgEishIkshAyCrIUNP+yEbMxADT/FlA0/lAyBhZQNPxQKUsBVwB/ZyhLAVd/fmdIIzUBMgY1AkIBijX/Nf41/TX8Nfs1+jX5Nfg19zX2NfU19DXzNfI18TXwNPc0/Q1JNe80+hBBAFo08DTxFlA08lA08xZQNPQWUDT1FlA09lA09xZQNPhQNPkWUQcIUChQNPsWUDT8FlA0/lA0/xZQKFApSwFXAH9nKEsBV39/ZytLAVf+ZmdIIQY1ATIGNQJCAQKAGNbE+fhkb3duAAAAAAAAAAAAAAAAAAAAADT0FlA0+xZQNPBQNPUWUDTzFlCwNPA08TT2NPg0+zTvNPoQIzT8NP40/0IAADX/Nf41/TX8Nfs1+jX5Nfg19zX2NPxBAEM0/YEyCDX1NPY09xZQNPhQNPlQNPoWUDT7FlEHCFA0/lA0/xZQNPUWUClLAVcAf2coSwFXfwdnSCEFNQEyBjUCQgBfsSKyATT+VwARIluyEiSyEDT5shQ097IRs7EisgE0/7III7IQNPayB7OxIrIBIrISJLIQMgmyFTIKshQ097IRs0IAADEZIQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCo0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk0AElKSSMINQA4FDIKEkQ4ECQSRDgRTwISRDgSEkSJ`,
  appClear: `Bw==`,
  companionInfo: null,
  extraPages: 1,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 356,
  unsupported: [],
  version: 11,
  warnings: []
  };
const _ETH = {
  ABI: `[{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"address payable","name":"_Admin","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T6","name":"_description","type":"tuple"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T7","name":"elem2","type":"tuple"}],"internalType":"struct T14","name":"v4410","type":"tuple"}],"stateMutability":"payable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"msg","type":"uint256"}],"name":"ReachError","type":"error"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"internalType":"address payable","name":"elem1","type":"address"},{"components":[{"internalType":"address payable","name":"_Admin","type":"address"},{"internalType":"uint256","name":"_deadline","type":"uint256"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"internalType":"struct T6","name":"_description","type":"tuple"},{"internalType":"uint256","name":"_id","type":"uint256"},{"internalType":"address payable","name":"_owner","type":"address"},{"internalType":"uint256","name":"_price","type":"uint256"},{"internalType":"bytes20","name":"_title","type":"bytes20"}],"internalType":"struct T7","name":"elem2","type":"tuple"}],"indexed":false,"internalType":"struct T14","name":"_a","type":"tuple"}],"name":"_reach_e0","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e1","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_413","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_413","type":"bool"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T10","name":"_a","type":"tuple"}],"name":"_reach_e4","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e5","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T12","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_100","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"_Bidder_bid0_100","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_100","type":"bool"}],"internalType":"struct T12","name":"elem1","type":"tuple"}],"indexed":false,"internalType":"struct T13","name":"_a","type":"tuple"}],"name":"_reach_e6","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_who","type":"address"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"indexed":false,"internalType":"struct T11","name":"_a","type":"tuple"}],"name":"_reach_e7","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1094","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1101","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1114","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1121","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1214","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"v0","type":"bool"}],"name":"_reach_oe_v1295","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"indexed":false,"internalType":"struct T0","name":"v0","type":"tuple"}],"name":"_reach_oe_v845","type":"event"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"indexed":false,"internalType":"struct T1","name":"v0","type":"tuple"}],"name":"_reach_oe_v960","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"v0","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v1","type":"address"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"bytes20","name":"v4","type":"bytes20"},{"components":[{"internalType":"bytes32","name":"elem0","type":"bytes32"},{"internalType":"bytes32","name":"elem1","type":"bytes32"},{"internalType":"bytes16","name":"elem2","type":"bytes16"}],"indexed":false,"internalType":"struct T6","name":"v5","type":"tuple"},{"indexed":false,"internalType":"uint256","name":"v6","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v7","type":"address"}],"name":"created","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"uint256","name":"v5","type":"uint256"}],"name":"down","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v1","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"}],"name":"log","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes20","name":"v0","type":"bytes20"},{"indexed":false,"internalType":"bytes20","name":"v1","type":"bytes20"},{"indexed":false,"internalType":"uint256","name":"v2","type":"uint256"},{"indexed":false,"internalType":"address payable","name":"v3","type":"address"},{"indexed":false,"internalType":"address payable","name":"v4","type":"address"},{"indexed":false,"internalType":"address payable","name":"v5","type":"address"}],"name":"outcome","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"AuctionView_awaitingConfirmation","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AuctionView_isRunning","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Auctioneer_acceptSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_rejectSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Auctioneer_stopAuction","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"blockEnded","type":"uint256"},{"internalType":"uint256","name":"lastBid","type":"uint256"}],"internalType":"struct T0","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"v4400","type":"uint256"}],"name":"Bidder_bid","outputs":[{"components":[{"internalType":"address payable","name":"elem0","type":"address"},{"internalType":"uint256","name":"elem1","type":"uint256"}],"internalType":"struct T1","name":"","type":"tuple"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"Bidder_optIn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"_reachCreationTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentState","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_reachCurrentTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v4412","type":"tuple"}],"name":"_reachp_1","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T9","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_acceptSale0_413","type":"bool"},{"internalType":"bool","name":"_Auctioneer_rejectSale0_413","type":"bool"}],"internalType":"struct T9","name":"elem1","type":"tuple"}],"internalType":"struct T10","name":"v4426","type":"tuple"}],"name":"_reachp_4","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v4436","type":"tuple"}],"name":"_reachp_5","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"},{"components":[{"internalType":"enum _enum_T12","name":"which","type":"uint8"},{"internalType":"bool","name":"_Auctioneer_stopAuction0_100","type":"bool"},{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"_Bidder_bid0_100","type":"tuple"},{"internalType":"bool","name":"_Bidder_optIn0_100","type":"bool"}],"internalType":"struct T12","name":"elem1","type":"tuple"}],"internalType":"struct T13","name":"v4442","type":"tuple"}],"name":"_reachp_6","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"inputs":[{"components":[{"internalType":"uint256","name":"elem0","type":"uint256"}],"internalType":"struct T11","name":"v4500","type":"tuple"}],"name":"_reachp_7","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}]`,
  Bytecode: `0x6080601f1962003ff638819003601f81018316840192916001600160401b039185851083861117620005ff5780869260409687528339810103916101608312620006155783519262000051846200061a565b8551845260206200006481880162000652565b968186019788526101209283603f198201126200061557875191620000898362000636565b6200009689820162000652565b8352606080928183015186860152607f1901126200061557885190620000bc826200061a565b6080810151825260a08101518583015260c0810151916001600160801b0319831683036200061557610140928b8201528a85015260e081015183850152610100956200010a87830162000652565b608086015281015160a085015201516001600160601b031981168103620006155760c083015287870191825243600355875193840184811087821117620005ff5788526000938481528484820152848982015284828201528460808201526200017262000667565b60a0820152885189810181811089821117620005eb578a5285815284810186905260c082015260e001849052875191620001ac836200061a565b620001b662000667565b835283830192620001c662000697565b84528981019a620001d662000697565b8c5260049460ff865416620005d4578b51923384528b518885015260018060a01b039b8d8d8551169086015262000212865188870190620006de565b7f80c34c49b57a0654d5660ed6b4208d3845f43b5d8c23febc92be3e0a259161276101808096a1518015908115620005c7575b5015620005b05788815152888882510152888d82510152518151525180518c8882015191015115158d51916200027b836200061a565b8a8352898301528d8201526200029062000697565b91895b600181106200056357505081528c52346200054c578a519260a084018481108b82111762000539579b809d62000363928d9e839e9c9d9e528a87528987019b8b8d5283880193805190620002e78262000636565b8d82528d8d830152620002f962000667565b908201528c8a8201528c60808201528c60a08201528c60c08201528452888801958c875260808901986200032c62000697565b8a5233905251168c525182524384525185528d60019d8e808c5543905581519b8c8b339101525116908b015251858a0190620006de565b51908701525190849089858c6101a08a015b8386106200050f57505050505050506101e08452610200840184811087821117620004fc5788528351958611620004e957600254908782811c92168015620004de575b83831014620004cb5750601f81116200047f575b508093601f861160011462000417575050918394918493946200040b575b50501b916000199060031b1c1916176002555b5161387990816200077d8239f35b015192503880620003ea565b600283528183209493928692918316915b888383106200046457505050106200044a575b505050811b01600255620003fd565b015160001960f88460031b161c191690553880806200043b565b85870151885590960195948501948793509081019062000428565b60028352818320601f870160051c810191838810620004c0575b601f0160051c019087905b828110620004b4575050620003cc565b848155018790620004a4565b909150819062000499565b634e487b7160e01b845260229052602483fd5b91607f1691620003b8565b634e487b7160e01b835260419052602482fd5b634e487b7160e01b845260418252602484fd5b8185928851805184528581015186850152015115159082015201940192019192858c8c9262000375565b634e487b7160e01b895260418752602489fd5b8a5163100960cb60e01b8152600c81870152602490fd5b6200056f818362000754565b516200057c828662000754565b5262000589818562000754565b5060001981146200059d5760010162000293565b634e487b7160e01b8b526011895260248bfd5b8c5163100960cb60e01b8152600b81890152602490fd5b9050600154143862000245565b8b5163100960cb60e01b8152600a81880152602490fd5b634e487b7160e01b87526041600452602487fd5b634e487b7160e01b600052604160045260246000fd5b600080fd5b606081019081106001600160401b03821117620005ff57604052565b60e081019081106001600160401b03821117620005ff57604052565b51906001600160a01b03821682036200061557565b60405190606082016001600160401b03811183821017620005ff5760405260006040838281528260208201520152565b6040519060208083016001600160401b03811184821017620005ff576040528260005b828110620006c757505050565b8290620006d362000667565b8184015201620006ba565b6101009060018060a01b038082511684526020820151602085015260408201518051604086015260208101516060860152604060018060801b0319910151166080850152606082015160a085015260808201511660c084015260a081015160e084015260c060018060601b031991015116910152565b906001811015620007665760051b0190565b634e487b7160e01b600052603260045260246000fdfe60806040526004361015610018575b361561001657005b005b60003560e01c80631e93b0f114610144578063232682ca1461013b57806329af2c6f146101325780632d2ae6eb146101295780632f1323021461012057806330dd5d081461011757806334d3e29e1461010e5780634a96cc0b14610105578063573b8510146100fc5780636f49e231146100f35780637d817cb9146100ea57806383230757146100e1578063ab53f2c6146100d8578063b6279224146100cf5763d2526fd90361000e576100ca610d47565b61000e565b506100ca610ccb565b506100ca610c1d565b506100ca610bfe565b506100ca610b55565b506100ca610b07565b506100ca610872565b506100ca610818565b506100ca610799565b506100ca6104fe565b506100ca610307565b506100ca61028e565b506100ca6101d1565b506100ca610168565b5034610163576000366003190112610163576020600354604051908152f35b600080fd5b503461016357600036600319011261016357610182611009565b6005600054036101b85760206001916101aa61019c610ea9565b83808251830101910161113c565b500152602060405160018152f35b60405163100960cb60e01b815260076004820152602490fd5b5060a0366003190112610163576101e6611009565b604051906101f382610dd6565b60043582526080366023190112610163576040519161021183610dfe565b6024359260038410156101635761025e938152604435610230816110aa565b602082015261023e3661364d565b604082015260843561024f816110aa565b60608201526020820152612297565b60405160008152602090f35b0390f35b919091604080606083019480518452602081015160208501520151910152565b506000366003190112610163576102a3610fb3565b5061026a60a06102b1611009565b6102e8816102bd61187c565b602081019060008251525115156020825101526102d861187c565b9060008252516020820152612297565b01516040519182918261026e565b602090600319011261016357600490565b5061025e610327610317366102f6565b61031f611009565b50369061366d565b61034261033d61033960045460ff1690565b1590565b6111d4565b7fa4850b05c9188495196ad609440a82393348559ec3e1eb1c2ab8d784a9e9d4016040518061037284338361368b565b0390a16103836006600054146111f4565b6103b26103a0610391610ea9565b602080825183010191016116c6565b915180159081156104f2575b50611214565b60e08101906103c48251431015611234565b6103ce3415611254565b6103ea3360018060a01b036103e38451610c92565b1614611274565b6103f26121f4565b916104066104008351610c92565b84611a38565b61041f6104166020840151610c92565b60208501611a38565b60408201516040840152606082015160608401526080820151608084015261045661044d60a0840151610c92565b60a08501611a38565b61046f61046660c0840151611088565b60c08501611941565b5160e083015261048f61010061048781840151610c92565b908401611a38565b6104a96101206104a181840151151590565b151590840152565b6104bb6101406104a181840151151590565b610160808201519083015261018043818401528101516101a09081840152810151906101c0918284015201516101e082015261304d565b905060015414386103ac565b5061050b610317366102f6565b610513611818565b61052a61052561033960045460ff1690565b611294565b6040917f46f247599a5fa9114da586bc9a4d716618c03f0781a481e77299e07c647c124983518061055c84338361368b565b0390a160009061056f60058354146112b4565b610577610ea9565b6105a061058e60209283808251830101910161113c565b9251801590811561078d575b506112d4565b610100916105b3838201514310156112f4565b6105bd3415611314565b60018060a01b03906105db33836105d48451610c92565b1614611334565b828101956105e98751610c92565b9061060e60608401926105fc8451610c92565b9060c086019687515151921690611f07565b8680808061062461061f8851610c92565b610c92565b60e088015190828215610784575bf115610777575b671858d8d95c1d195960c21b81525161065190611088565b90888301805161066090611088565b9260808501938451918c8c885161067690610c92565b875161068190610c92565b915161068c90610c92565b925195869561069b9587611951565b0360008051602061382d83398151915291a16106b56119c6565b9884516106c190610c92565b6106cb908b611a38565b516106d590610c92565b6106e1908a8801611a38565b516106eb90611088565b6106f790898b01611941565b5161070190610c92565b61070e9060608901611a38565b51608087015260a001511515151560a08601528360c08601524360e0860152519081518682820151910151151590610744610f54565b8681529283015215158682015261075a91612070565b9083015261012082015261076d906134a4565b5160008152602090f35b61077f611934565b610639565b506108fc610632565b9050600154143861059a565b506080366003190112610163576107ae611009565b604051906107bb82610dd6565b6004358252606036602319011261016357604051916107d983610e19565b6024359260028410156101635761025e9381526044356107f8816110aa565b6020820152606435610809816110aa565b60408201526020820152611a47565b50600036600319011261016357602060e0610831611009565b6108668161083d61187c565b85810190600282515251151560608251015261085761187c565b90600082525186820152612297565b01511515604051908152f35b5061087f610317366102f6565b61076d61088a611818565b6108a161089c61033960045460ff1690565b611354565b610ae86040937fcf0e8bec53cd91fa87ecf8f6f405ac75914a22acdb92a3553ee5c294fee815968551806108d684338361368b565b0390a16108e7600160005414611374565b60806108f1610ea9565b9161091b6109096020948580825183010191016136a5565b91518015908115610afb575b50611394565b61092534156113b4565b8281019461094461093f6109398851610c92565b3361378a565b6113d4565b6109603360018060a01b036109598551610c92565b16146113f4565b61096a3082611a38565b610a3f610a36898401927f23753032dbcbfdebb55c35887ff8bb4b48e2c9892bec44b5815a91c4b37b3b9c8b85516109e76060820151928d6109ac8751610c92565b936109b98d820151610c92565b6109c660c0830151611088565b906109da60a0868501519401519451610c92565b945197889743918961372c565b0390a1610a1a610a126109f86121f4565b9a610a0c610a068951610c92565b8d611a38565b51610c92565b888b01611a38565b83518b8a01524360608a0152606084510151868a015251610c92565b60a08801611a38565b805160c00151610a5d906001600160601b0319165b60c08801611941565b610a7260608301918583519151015190613639565b60e0870152610a8e610a848351610c92565b6101008801611a38565b60016101208701526001610140870152600061016087015243610180870152516101a08601520151610ae38151926001845101938882820151910151151591610ad5610f54565b958652850152151587840152565b612070565b6101c082015260006101e082015261304d565b90506001541438610915565b5060003660031901126101635760206080610b20611009565b61086681610b2c6117d3565b858101906001825152511515604082510152610b466117d3565b90600082525186820152611a47565b50346101635760003660031901126101635761026a610bc06040610b77611009565b6000546006811015610bd2576005610b8f9114611434565b610bb1610bb860a0610bb1610ba2610ea9565b6020808251830101910161113c565b0151151590565b151582840152565b60405190151581529081906020820190565b6006610bde9114611414565b610bf96101e0610bef610391610ea9565b0151151582840152565b610bb1565b5034610163576000366003190112610163576020600154604051908152f35b503461016357600080600319360112610c8f578054610c3a610ea9565b906040519283918252602090604082840152835191826040850152815b838110610c7857505060608094508284010152601f80199101168101030190f35b808601820151878201606001528694508101610c57565b80fd5b6001600160a01b031690565b6001600160a01b03169052565b81516001600160a01b031681526020918201519181019190915260400190565b50602036600319011261016357610ce0610ff0565b5061026a60c0610cee611009565b610d3981604051610cfe81610dd6565b604051610d0a81610e34565b6000815281526020810190610d1d61182b565b82526004358151526001825152516040825101526102d861187c565b015160405191829182610cab565b5060003660031901126101635760206060610d60611009565b61086681610d6c6117d3565b8581019060008251525115158682510152610b466117d3565b90600182811c92168015610db5575b6020831014610d9f57565b634e487b7160e01b600052602260045260246000fd5b91607f1691610d94565b50634e487b7160e01b600052604160045260246000fd5b604081019081106001600160401b03821117610df157604052565b610df9610dbf565b604052565b608081019081106001600160401b03821117610df157604052565b606081019081106001600160401b03821117610df157604052565b602081019081106001600160401b03821117610df157604052565b60e081019081106001600160401b03821117610df157604052565b61012081019081106001600160401b03821117610df157604052565b601f909101601f19168101906001600160401b03821190821017610df157604052565b6040519060008260025491610ebd83610d85565b808352600193808516908115610f335750600114610ee5575b50610ee392500383610e86565b565b6002600090815260008051602061380d83398151915294602093509091905b818310610f1b575050610ee3935082010138610ed6565b85548884018501529485019487945091830191610f04565b9050610ee394506020925060ff191682840152151560051b82010138610ed6565b60405190606082016001600160401b03811183821017610df157604052565b6040519061012082016001600160401b03811183821017610df157604052565b6040519061020082016001600160401b03811183821017610df157604052565b60405190606082016001600160401b03811183821017610fe3575b60405260006040838281528260208201520152565b610feb610dbf565b610fce565b60405190610ffd82610dd6565b60006020838281520152565b6040519061010082016001600160401b03811183821017611067575b6040528160e0600091828152826020820152826040820152826060820152826080820152611051610fb3565b60a082015261105e610ff0565b60c08201520152565b61106f610dbf565b611025565b51906001600160a01b038216820361016357565b6001600160601b03191690565b51906001600160601b03198216820361016357565b8015150361016357565b5190610ee3826110aa565b9080601f83011215610163576040918251926110da84610e34565b836060938484019381851161016357915b8483106110fb5750505050505090565b8583830312610163578351869161111182610e19565b8451825260209182860151838201528686015161112d816110aa565b878201528152019201916110eb565b6101608183031261016357610140906111b9611156610f73565b9361116083611074565b855261116e60208401611074565b602086015261117f60408401611095565b604086015261119060608401611074565b6060860152608083015160808601526111ab60a084016110b4565b60a086015260c083016110bf565b60c084015261012081015160e0840152015161010082015290565b156111db57565b60405163100960cb60e01b815260276004820152602490fd5b156111fb57565b60405163100960cb60e01b815260286004820152602490fd5b1561121b57565b60405163100960cb60e01b815260296004820152602490fd5b1561123b57565b60405163100960cb60e01b8152602a6004820152602490fd5b1561125b57565b60405163100960cb60e01b8152602b6004820152602490fd5b1561127b57565b60405163100960cb60e01b8152602c6004820152602490fd5b1561129b57565b60405163100960cb60e01b815260196004820152602490fd5b156112bb57565b60405163100960cb60e01b8152601a6004820152602490fd5b156112db57565b60405163100960cb60e01b8152601b6004820152602490fd5b156112fb57565b60405163100960cb60e01b8152601c6004820152602490fd5b1561131b57565b60405163100960cb60e01b8152601d6004820152602490fd5b1561133b57565b60405163100960cb60e01b8152601e6004820152602490fd5b1561135b57565b60405163100960cb60e01b8152600d6004820152602490fd5b1561137b57565b60405163100960cb60e01b8152600e6004820152602490fd5b1561139b57565b60405163100960cb60e01b8152600f6004820152602490fd5b156113bb57565b60405163100960cb60e01b815260106004820152602490fd5b156113db57565b60405163100960cb60e01b815260116004820152602490fd5b156113fb57565b60405163100960cb60e01b815260126004820152602490fd5b1561141b57565b60405163100960cb60e01b815260096004820152602490fd5b1561143b57565b60405163100960cb60e01b815260086004820152602490fd5b1561145b57565b60405163100960cb60e01b815260136004820152602490fd5b1561147b57565b60405163100960cb60e01b815260146004820152602490fd5b1561149b57565b60405163100960cb60e01b815260156004820152602490fd5b156114bb57565b60405163100960cb60e01b815260166004820152602490fd5b156114db57565b60405163100960cb60e01b815260186004820152602490fd5b156114fb57565b60405163100960cb60e01b815260176004820152602490fd5b1561151b57565b60405163100960cb60e01b8152601f6004820152602490fd5b1561153b57565b60405163100960cb60e01b815260206004820152602490fd5b1561155b57565b60405163100960cb60e01b815260216004820152602490fd5b1561157b57565b60405163100960cb60e01b815260226004820152602490fd5b1561159b57565b60405163100960cb60e01b815260266004820152602490fd5b156115bb57565b602460405163100960cb60e01b8152816004820152fd5b156115d957565b60405163100960cb60e01b815260256004820152602490fd5b156115f957565b60405163100960cb60e01b815260236004820152602490fd5b80929103916101208312610163576040519061162d82610e4f565b6060829461163a83611074565b845260208301516020850152603f1901126101635760405161165b81610e19565b604082015181526060820151602082015260808201516001600160801b0319811681036101635760c092826101009260406116c1950152604086015260a081015160608601526116ac848201611074565b608086015260e081015160a086015201611095565b910152565b9061034082820312610163576117cc6103206116e0610f93565b936116ea81611074565b85526116f860208201611074565b602086015261170a8460408301611612565b604086015261016093848201516060870152610180908183015160808801526117b86101a09161173b838601611074565b60a08a01526101c09361174f858701611095565b60c08b01526101e0988987015160e08c015261176e6102008801611074565b6101008c015261178161022088016110b4565b6101208c015261179461024088016110b4565b6101408c0152610260870151908b0152610280860151908a01526102a085016110bf565b9087015261030082015190860152016110b4565b9082015290565b604051906117e082610dd6565b816000815260206116c1610fb3565b50634e487b7160e01b600052602160045260246000fd5b6002111561181057565b610ee36117ef565b6040519061182582610e34565b60008252565b60405190608082016001600160401b0381118382101761186f575b604052600060608382815282602082015260405161186381610e34565b83815260408201520152565b611877610dbf565b611846565b6040519061188982610dd6565b816000815260206116c161182b565b6003111561181057565b9092916040602060809260a085019660018060a01b031685528051828601520151805160028110156118e8575b8285015260208101511515606085015201511515910152565b6118f06117ef565b6118cf565b5160028110156119025790565b61190a6117ef565b90565b90600181101561191e5760051b0190565b634e487b7160e01b600052603260045260246000fd5b506040513d6000823e3d90fd5b6001600160601b03199091169052565b6001600160601b031991821681529116602082015260408101919091526001600160a01b039182166060820152918116608083015290911660a082015260c00190565b604051906119a182610e34565b8160005b602081106119b1575050565b6020906119bc610fb3565b81840152016119a5565b6040519061014082016001600160401b03811183821017611a2b575b604052816101206000918281528260208201528260408201528260608201528260808201528260a08201528260c08201528260e0820152611a21611994565b6101008201520152565b611a33610dbf565b6119e2565b6001600160a01b039091169052565b611a4f610ff0565b90611a67611a6261033960045460ff1690565b611454565b60407f109eb76f82f8872ff024177afedebf0c35323f0a478a1f78956f6ddd62aa1576815180611a988533836118a2565b0390a1600092611aab6005855414611474565b611ab3610ea9565b90611ac860209283808251830101910161113c565b611add85518015908115611efb575b50611494565b8261010095611af08784015143106114b4565b01611afb81516118f5565b611b0481611806565b611cfa5750611b1334156114f4565b82810196611b218851610c92565b926060830191611b4f611b348451610c92565b60c0860180515151909790916001600160a01b031690611f07565b88808080611b6061061f8951610c92565b60e089015190828215611cf1575bf115611ce4575b8651600181527f9c634b95dffd582c08aac49b15b6fac30d8007b51e0eb8de4e8b13c93801195990602090a1606001611bae9060019052565b671858d8d95c1d195960c21b815251611bc690611088565b908583018051611bd590611088565b9260808501938451918651611be990610c92565b8d8651611bf590610c92565b9051611c0090610c92565b918c51958695611c109587611951565b0360008051602061382d83398151915291a1611c2a6119c6565b998451611c3690610c92565b611c40908c611a38565b51611c4a90610c92565b611c56908b8801611a38565b51611c6090611088565b611c6c908a8801611941565b51611c7690610c92565b611c839060608a01611a38565b51608088015260a001511515151560a08701528460c08701524360e087015251918251908083830151920151151591611cba610f54565b8781529384015290151590820152611cd191612070565b90830152610120820152610ee3906134a4565b611cec611934565b611b75565b506108fc611b6e565b611d06600191516118f5565b611d0f81611806565b14611d1e575b50505050505050565b611d2834156114d4565b8281019683611d378951610c92565b93611d45611b348551610c92565b88606085019381808080611d5c61061f8a51610c92565b60e08b015190828215611ef2575bf115611ee5575b8851600081527f89b1e7798420f8d4f064c6bda87be7b103626416cedf89850e2d1f0c5f3c6a2890602090a160800152671c995a9958dd195960c21b9101819052611dbb90611088565b908583018051611dca90611088565b9260808501938451918651611dde90610c92565b8d8651611dea90610c92565b9051611df590610c92565b918c51958695611e059587611951565b0360008051602061382d83398151915291a1611e1f6119c6565b998451611e2b90610c92565b611e35908c611a38565b51611e3f90610c92565b611e4b908b8801611a38565b51611e5590611088565b611e61908a8801611941565b51611e6b90610c92565b611e789060608a01611a38565b51608088015260a001511515151560a08701528460c08701524360e087015251918251908083830151920151151591611eaf610f54565b8781529384015290151590820152611ec691612070565b90830152610120820152611ed9906134a4565b38808080808080611d15565b611eed611934565b611d71565b506108fc611d6a565b90506001541438611ad7565b60405163a9059cbb60e01b602082019081526001600160a01b039384166024830152604480830195909552938152611f8393600093849392849190608081016001600160401b03811182821017611f8a575b6040525193165af1611f73611f6c611f97565b8092611ff9565b5060208082518301019101611fe4565b1561016357565b611f92610dbf565b611f59565b3d15611fdf573d906001600160401b038211611fd2575b60405191611fc6601f8201601f191660200184610e86565b82523d6000602084013e565b611fda610dbf565b611fae565b606090565b90816020910312610163575161190a816110aa565b156120015790565b80511561201057805190602001fd5b60405163100960cb60e01b815260026004820152602490fd5b156120315790565b80511561204057805190602001fd5b60405163100960cb60e01b815260016004820152602490fd5b50634e487b7160e01b600052601160045260246000fd5b919061207a611994565b9260005b6001811061208c5750508252565b806120996001928461190d565b516120a4828861190d565b526120af818761190d565b5060001981146120c0575b0161207e565b6120c8612059565b6120ba565b604051906120da82610e6a565b6000808352610100836120eb610fb3565b60208201526040516120fc81610e34565b8381526040820152826060820152612112610ff0565b60808201528260a08201528260c08201528260e08201520152565b9092916060602060a09260c0850196600180861b0316855280518286015201518051600381101561217d575b60408501526020810151151582850152604081015151608085015201511515910152565b6121856117ef565b612159565b5160038110156119025790565b6040519060e082016001600160401b038111838210176121e7575b6040528160c06000918281528260208201526121cc610fb3565b60408201528260608201528260808201528260a08201520152565b6121ef610dbf565b6121b2565b6121fc610f93565b906000808352806020840152612210612197565b60408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152806101a0840152612265611994565b6101c08401526101e0830152565b6001600160601b031990911681526020810191909152604081019190915260600190565b61229f6120cd565b906122b76122b261033960045460ff1690565b611514565b6040917fea1ef57ffeb28c3bb191acd0b9792f27e3b53cede1d9ce1352affc2ed1bf892d8351806122e985338361212d565b0390a16000926122fc6006855414611534565b612304610ea9565b936123196020958680825183010191016116c6565b9361232f81518015908115612cc5575b50611554565b60e090868287019161234383514310611574565b019761234f895161218a565b61235881611898565b6124f557610ee3985061236b34156115f2565b69656e645375636365737360b01b86526123858651611088565b94608088019160a083519860008051602061384d8339815191526101609a8b8d019a6123b78c51885193849384612273565b0390a18b8551910190815152438c82510152885184825101527fea8e8f5390957f01aa8ec470a87f24a541bdc017295041b0e31230de018634cb612401825186519182918261026e565b0390a15191015261243b6124136121f4565b996124276124218b51610c92565b8c611a38565b612433818b0151610c92565b908b01611a38565b80880151908901526060870151606089015251608088015261246c61246360a0880151610c92565b60a08901611a38565b61248561247c60c0880151611088565b60c08901611941565b51908601526124a461010061249c81870151610c92565b908701611a38565b6124be6101206124b681870151151590565b151590870152565b610140850152519083015261018043818401528101516101a09081840152810151906101c0918284015201516101e082015261304d565b92909593976001612509829997995161218a565b61251281611898565b03612874578880899251015193818301948086525198610160968789019a8b511061253c906115b4565b6101c0998a8a01519b88519c8d51019c606088019d8e5251341461255f906115d2565b61010095868c0197885161257290610c92565b906080019081519061258391611a38565b8251848251015280518251612599819282610cab565b037f3a0a6f2ea64e0a5f5ae3983d0f665b7d81deca7ef414d0123e4cb1ed2bce47a791a15160c08095015261012097888d01516125d590151590565b1561271057505050908092939495969798999a9b9c0161260181696269645375636365737360b01b9052565b5161260b90611088565b908d60808c01928351908b515192519283926126279284612273565b0360008051602061384d83398151915291a16126416121f4565b9d8e918c5161264f90610c92565b6126599084611a38565b808d015161266690610c92565b612671918401611a38565b808c01519101528c60608b015190606001525160808d015260a089015161269790610c92565b6126a49060a08e01611a38565b808901516126b190611088565b6126bc918d01611941565b51908a01526126ce9033908a01611a38565b8701526101408381015115151515908701525151908501526101804381860152810151906101a09182860152015190830152516101e0820152610ee39061304d565b9e829f8a808060a0959661272861061f839651610c92565b90519082821561286b575bf11561285e575b696269645375636365737360b01b910181905261275690611088565b9060808c01918251908b515192519283926127719284612273565b0360008051602061384d83398151915291a161278b6121f4565b9e8f928c5161279990610c92565b6127a39085611a38565b808d01516127b090610c92565b6127bb918501611a38565b808c01519083015260608b015160608301525190608001528c60a08a01516127e290610c92565b6127ee9160a001611a38565b808901516127fb90611088565b612806918e01611941565b51908b01526128189033908b01611a38565b8801526101408381015115151515908801525151908601526101804381870152810151906101a0918287015201519084015251905190036101e0820152610ee39061304d565b612866611934565b61273a565b506108fc612733565b61288860029199929793949698995161218a565b61289181611898565b146128a1575b5050505050505050565b620f42406101c0956128c082888801510192868c019384523414611594565b8151620dbba09290838110612b325750620dbb9f1990510197610100809b0198895280808080878b01966128ff61061f895160018060a01b0390511690565b82f115612b25575b8851620186a0908111612a865786612a089795938380612a6c9f99979580612977966129378f61061f9051610c92565b82f115612a79575b8451600181527ff910c4baf35cc7aff398eef490c107e2a3db0dbd3b5fc087d3bf4ee4db32caa49080602081015b0390a10160019052565b6129a46129826121f4565b9a612990610a068a51610c92565b61299c818a0151610c92565b908c01611a38565b519089015260608501516060890152608085015160808901526129d66129cd60a0870151610c92565b60a08a01611a38565b6129ef6129e660c0870151611088565b60c08a01611941565b5190870152612a0081840151610c92565b908601611a38565b612a22610120612a1a81840151151590565b151590860152565b612a34610140612a1a81840151151590565b61016080820151908501526101804381860152810151906101a091828601520151908301526201869f199051016101e082015261304d565b3880808080808080612897565b612a81611934565b61293f565b505091612b2099939161297786612acb97957f588dd0450f232cdeae5d4b5be2160c4e1124693b28ef1f041273041a682b870485518061296d81906001602083019252565b612add610120612a1a81840151151590565b612aef610140612a1a81840151151590565b61016080820151908501526101804381860152810151906101a09182860152015190830152516101e082015261304d565b612a6c565b612b2d611934565b612907565b919a50979150620186a0908111612c2a57612b2099828080612b97958995612b5d61061f8d51610c92565b82f115612c1d575b8351600181527f59719a440030f0c4c249963baeef1c713f1f7e14eda66817eb571298de65da0390806020810161296d565b612bca612ba26121f4565b97612bb6612bb08751610c92565b8a611a38565b612bc281870151610c92565b908901611a38565b80840151908701526060830151606087015260808301516080870152612bf6610a3660a0850151610c92565b612c06610a5460c0850151611088565b5190850152612a08610100612a0081840151610c92565b612c25611934565b612b65565b5050612c6783612b20997f8513cf5dfbe4a7c317bc191ee35c312cc2092aa71b4958c1495ed1e10390db8084518061296d81906001602083019252565b612c72612ba26121f4565b80840151908701526060830151606087015260808301516080870152612c9e610a3660a0850151610c92565b612cae610a5460c0850151611088565b5190850152612acb610100612a0081840151610c92565b90506001541438612329565b612cd9610f93565b906000808352806020840152612ced612197565b60408401528060608401528060808401528060a08401528060c08401528060e08401528061010084015280610120840152806101408401528061016084015280610180840152612d3b611994565b6101a0840152806101c08401526101e0830152565b80518252602080820151908301526040908101516001600160801b031916910152565b6101009060018060a01b0380825116845260208201516020850152612da060408301516040860190612d50565b606082015160a085015260808201511660c084015260a081015160e084015260c060018060601b031991015116910152565b6000915b60018310612de357505050565b600190606083519182518152602092838101518483015260408091015115159082015201920192019190612dd6565b610ee390929192610320610340820194612e2d838251610c9e565b612e3f60208201516020850190610c9e565b612e5160408201516040850190612d73565b606081015190610160918285015260808101516101809081860152612efc60a0830151612e846101a09182890190610c9e565b60c08401516001600160601b0319166101c0888101919091529260e0850151956101e096878a0152612ec06101008701516102008b0190610c9e565b61012086015115156102208a015261014086015115156102408a01528501516102608901528401516102808801528301516102a0870190612dd2565b81015161030085015201511515910152565b818110612f19575050565b60008155600101612f0e565b90601f8211612f32575050565b610ee39160026000526020600020906020601f840160051c83019310612f60575b601f0160051c0190612f0e565b9091508190612f53565b80519091906001600160401b038111613040575b612f9281612f8d600254610d85565b612f25565b602080601f8311600114612fce5750819293600092612fc3575b50508160011b916000199060031b1c191617600255565b015190503880612fac565b6002600052601f1983169490919060008051602061380d833981519152926000905b87821061302857505083600195961061300f575b505050811b01600255565b015160001960f88460031b161c19169055388080613004565b80600185968294968601518155019501930190612ff0565b613048610dbf565b612f7e565b613055610ff0565b60e0820180516101a080850151919091108084529192909160009015613346575061014084015115155b156131b557506131a291613180610ee3946131b09361309c612cd1565b936130b06130aa8451610c92565b86611a38565b6130c96130c06020850151610c92565b60208701611a38565b6040830151604086015260608301516060860152608083015160808601526131006130f760a0850151610c92565b60a08701611a38565b61311961311060c0850151611088565b60c08701611941565b5160e0850152613131610100612a0081850151610c92565b613143610120612a1a81850151151590565b6001610140850152610160808301519085015261018080830151908501526101c09081830151908501526101e08092015190840152820160019052565b61318a6006600055565b61319343600155565b60405192839160208301612e12565b03601f198101835282610e86565b612f6a565b9150506101e0610ee3926131dc602084016131d681633237bbb760e11b9052565b51611088565b7f357c94579deebb86dae97569dd270d5562f0a208d6b4874cfcc80bb87d54176d608083015161016084019261327584516132178751610c92565b61322460a0890151610c92565b606089810151604080516001600160601b031990981688526020880198909852968601939093526001600160a01b039182169285019290925216608083015260a082019290925290819060c0820190565b0390a16132f16132836119c6565b946132976132918551610c92565b87611a38565b6132b06132a76020860151610c92565b60208801611a38565b6132c96132c060c0860151611088565b60408801611941565b610100926132e56132dc85870151610c92565b60608901611a38565b51608087015251151590565b6000901561333d575061331461330b610140840151151590565b151560a0860152565b600160c085015261018082015160e08501526101c08201519084015201516101208201526134a4565b6133149061330b565b61307f565b613356600254610d85565b8061335e5750565b601f811160011461337157506000600255565b60026000526133b690601f0160051c60008051602061380d833981519152017f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5acf612f0e565b6000602081208160025555565b604051906133d082610e6a565b816101006000918281528260208201528260408201528260608201528260808201528260a0820152613400611994565b60c08201528260e08201520152565b81516001600160a01b0316815260208083015161016083019493610140926101009261343d91860190610c9e565b6040818101516001600160601b0319169085015261346360608201516060860190610c9e565b6080810151608085015261348060a082015160a086019015159052565b61349260c082015160c0860190612dd2565b60e08101516101208501520151910152565b6134ac611818565b60c082015115613589576131b06131a291836134ce60e0610ee3960151613616565b82526134d86133c3565b916134e66104008351610c92565b6134f66104166020840151610c92565b61350f6135066040840151611088565b60408501611941565b61352861351f6060840151610c92565b60608501611a38565b6080820151608084015261354b61354260a0840151151590565b151560a0850152565b610120610100928381015160c0860152015160e084015251908201526135716005600055565b61357a43600155565b6040519283916020830161340f565b5060008080836135c76135a0602084970151610c92565b6135ad6060840151610c92565b6101008401515151916001600160a01b0390911690611f07565b6101206135d761061f8351610c92565b9101519082821561360d575bf115613600575b600080556135f86000600155565b610ee361334b565b613608611934565b6135ea565b506108fc6135e3565b90603282019182811161362c575b821061016357565b613634612059565b613624565b919082019182811161362c57821061016357565b6020906063190112610163576040519061366682610e34565b6064358252565b91908260209103126101635760405161368581610e34565b91358252565b6001600160a01b0390911681529051602082015260400190565b906101e082820312610163576040519161371791906101809060a085016001600160401b0381118682101761371f575b6040526136e181611074565b85526136ef60208201611074565b60208601526137018360408301611612565b60408601526101608101516060860152016110bf565b608082015290565b613727610dbf565b6136d5565b9081526001600160a01b039182166020820152604081019290925291821660608201526001600160601b031990921660808301526101408201959491936101209391929161377e9060a0870190612d50565b61010085015216910152565b6040516323b872dd60e01b602082019081526001600160a01b0392831660248301523060448301526001606480840191909152825261190a93600093849391929184919060a081016001600160401b038111828210176137ff575b6040525193165af1611f736137f8611f97565b8092612029565b613807610dbf565b6137e556fe405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace543cb95dd81154d567510afb182f8995b596950b4795b12737cf59283102e666acf14236eb0aafe887aa56af00dd77d2c3e62c8620f2878747fe2ef6e848cd21a164736f6c6343000810000a`,
  BytecodeLen: 16374,
  version: 9,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './src/contracts/auction.rsh:62:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './src/contracts/auction.rsh:214:9:after expr stmt',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './src/contracts/auction.rsh:150:48:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: './src/contracts/auction.rsh:80:83:after expr stmt semicolon',
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
