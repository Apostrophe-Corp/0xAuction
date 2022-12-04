#lang pl
EP {
  apis = {
    Just "Auctioneer" = {
      acceptSale = ("Auctioneer_acceptSale", IT_Fun [] Bool),
      rejectSale = ("Auctioneer_rejectSale", IT_Fun [] Bool),
      stopAuction = ("Auctioneer_stopAuction", IT_Fun [] Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))
      },
    Just "Bidder" = {
      bid = ("Bidder_bid", IT_Fun [UInt] Tuple(Address, UInt)),
      optIn = ("Bidder_optIn", IT_Fun [] Bool)
      }
    },
  exports = {
    
    },
  init = {
    maps = {
      
      }
    },
  m = {
    ("Auctioneer_acceptSale", Just 5) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),Bool] Null
      };
    fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/754), (lastPrice/757 : UInt, lastPrice/757), (v1145 : Bool, v1145), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/1156), (netBalance/1157 : UInt, netBalance/1157), (v1169 : UInt, v1169)]) ;
    only(Right False) {
      const this/1171 : Address! = selfAddress("Auctioneer_acceptSale", True, 462 )();
      const .api408.dom/1173 : Tuple()* = protect<Tuple()>("Auctioneer_acceptSale".interact.in());
      const v1175 : Bool! = this/1171 == Seller/724;
      claim(CT_Assume)(v1175, Just "You are not the Seller");
      const v1179 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})! = <Auctioneer_acceptSale0_416 .api408.dom/1173>;
       };
    send({
      amt = [0, ],
      as = (v1179 ),
      saved = (Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/1157 : UInt, v1169 : UInt ),
      soloSend = False,
      when = true,
      which = 4
      })
    recv({
      didSendv = didPublish/541 : Bool,
      from = v1193 : Address,
      lct = Nothing,
      msg = (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()}) ),
      out = (),
      prev = 5,
      secsv = thisConsensusSecs/1196 : UInt,
      timev = thisConsensusTime/1195 : UInt,
      which = 4
      })
    {
      switch (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) {
        case Auctioneer_acceptSale0_416 as data_id/1197 : Tuple()/True: {
          setApiDetails("Auctioneer_acceptSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_acceptSale0_416, AIC_Case );
          checkPay(0, None);
          const tokInfo/1204 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
          const v1205 : UInt* = tokInfo/1204[0];
          const v1211 : UInt! = v1205 - v1205;
          const tokInfo'/1213 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1204, 0, v1211 );
          const tokInfos'/1214 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1213 );
          transfer.(v1205, Some tokenContract/725).to(highestBidder/754);
          const v1219 : UInt! = netBalance/1157 - netBalance/1157;
          transfer.(netBalance/1157, None).to(Seller/724);
          const v1220 : Bool! = true;
          const .api408.rngl/1221 : Bool* = emitLog(api("Auctioneer_acceptSale"))(v1220 );
          only(Right True) {
            local(Just v1223 : Null) if didPublish/541 then {
              protect<Null>("Auctioneer_acceptSale".interact.out(data_id/1197, .api408.rngl/1221 ));
               }
            else {
               };
             };
          const v1227 : Bytes(20)! = "accepted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, outcome))(v1227, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
          const tokInfo/2958 : Tuple(UInt, UInt, Bool)! = tokInfos'/1214[0];
          const v2959 : UInt! = tokInfo/2958[0];
          transfer.(v2959, Some tokenContract/725).to(highestBidder/754);
          transfer.(v1219, None).to(Seller/724);
          fromConsensus 4 (halt [tokenContract/725]) ;
           }
        case Auctioneer_rejectSale0_416 as data_id/1253 : Tuple()/False: {
           } } },
    ("Auctioneer_rejectSale", Just 5) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),Bool] Null
      };
    fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/754), (lastPrice/757 : UInt, lastPrice/757), (v1145 : Bool, v1145), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/1156), (netBalance/1157 : UInt, netBalance/1157), (v1169 : UInt, v1169)]) ;
    only(Right False) {
      const this/1181 : Address! = selfAddress("Auctioneer_rejectSale", True, 489 )();
      const .api409.dom/1183 : Tuple()* = protect<Tuple()>("Auctioneer_rejectSale".interact.in());
      const v1185 : Bool! = this/1181 == Seller/724;
      claim(CT_Assume)(v1185, Just "You are not the Seller");
      const v1189 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})! = <Auctioneer_rejectSale0_416 .api409.dom/1183>;
       };
    send({
      amt = [0, ],
      as = (v1189 ),
      saved = (Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/1157 : UInt, v1169 : UInt ),
      soloSend = False,
      when = true,
      which = 4
      })
    recv({
      didSendv = didPublish/541 : Bool,
      from = v1193 : Address,
      lct = Nothing,
      msg = (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()}) ),
      out = (),
      prev = 5,
      secsv = thisConsensusSecs/1196 : UInt,
      timev = thisConsensusTime/1195 : UInt,
      which = 4
      })
    {
      switch (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) {
        case Auctioneer_acceptSale0_416 as data_id/1197 : Tuple()/False: {
           }
        case Auctioneer_rejectSale0_416 as data_id/1253 : Tuple()/True: {
          setApiDetails("Auctioneer_rejectSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_rejectSale0_416, AIC_Case );
          checkPay(0, None);
          const tokInfo/1285 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
          const v1286 : UInt* = tokInfo/1285[0];
          const v1292 : UInt! = v1286 - v1286;
          const tokInfo'/1294 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1285, 0, v1292 );
          const tokInfos'/1295 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1294 );
          transfer.(v1286, Some tokenContract/725).to(Seller/724);
          const v1300 : UInt! = netBalance/1157 - netBalance/1157;
          transfer.(netBalance/1157, None).to(highestBidder/754);
          const v1301 : Bool! = false;
          const .api409.rngl/1302 : Bool* = emitLog(api("Auctioneer_rejectSale"))(v1301 );
          only(Right True) {
            local(Just v1304 : Null) if didPublish/541 then {
              protect<Null>("Auctioneer_rejectSale".interact.out(data_id/1253, .api409.rngl/1302 ));
               }
            else {
               };
             };
          const v1308 : Bytes(20)! = "rejected\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, outcome))(v1308, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
          const tokInfo/2979 : Tuple(UInt, UInt, Bool)! = tokInfos'/1295[0];
          const v2980 : UInt! = tokInfo/2979[0];
          transfer.(v2980, Some tokenContract/725).to(highestBidder/754);
          transfer.(v1300, None).to(Seller/724);
          fromConsensus 4 (halt [tokenContract/725]) ;
           } } },
    ("Auctioneer_stopAuction", Just 6) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])] Null
      };
    fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/754), (isFirstBid/755 : Bool, isFirstBid/755), (keepBidding/756 : Bool, keepBidding/756), (lastPrice/757 : UInt, lastPrice/757), (thisConsensusTime/758 : UInt, thisConsensusTime/758), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/764), (netBalance/765 : UInt, netBalance/765), (v786 : Bool, v786)]) ;
    only(Right False) {
      const this/792 : Address! = selfAddress("Auctioneer_stopAuction", True, 158 )();
      const .api68.dom/794 : Tuple()* = protect<Tuple()>("Auctioneer_stopAuction".interact.in());
      const v796 : Bool! = this/792 == Seller/724;
      claim(CT_Assume)(v796, Just "You are not the Seller");
      const v800 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})! = <Auctioneer_stopAuction0_103 .api68.dom/794>;
       };
    send({
      amt = [0, ],
      as = (v800 ),
      saved = (Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/754 : Address, isFirstBid/755 : Bool, keepBidding/756 : Bool, lastPrice/757 : UInt, thisConsensusTime/758 : UInt, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/765 : UInt, v786 : Bool ),
      soloSend = False,
      when = true,
      which = 6
      })
    recv({
      didSendv = didPublish/297 : Bool,
      from = highestBidder/830 : Address,
      lct = Nothing,
      msg = (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}) ),
      out = (),
      prev = 6,
      secsv = thisConsensusSecs/833 : UInt,
      timev = thisConsensusTime/832 : UInt,
      which = 6
      })
    {
      switch (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) {
        case Auctioneer_stopAuction0_103 as data_id/834 : Tuple()/True: {
          setApiDetails("Auctioneer_stopAuction", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Auctioneer_stopAuction0_103, AIC_Case );
          checkPay(0, None);
          const v848 : Bytes(20)! = "endSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v848, v744, lastPrice/757 );
          const v851 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])! = struct[(id, v744 ), (blockEnded, thisConsensusTime/832 ), (lastBid, lastPrice/757 ) ];
          const .api68.rngl/852 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])* = emitLog(api("Auctioneer_stopAuction"))(v851 );
          only(Right True) {
            local(Just v854 : Null) if didPublish/297 then {
              protect<Null>("Auctioneer_stopAuction".interact.out(data_id/834, .api68.rngl/852 ));
               }
            else {
               };
             };
          const highestBidder/2981 : Address* = highestBidder/754;
          const isFirstBid/2982 : Bool! = isFirstBid/755;
          const keepBidding/2983 : Bool! = false;
          const lastPrice/2984 : UInt* = lastPrice/757;
          const thisConsensusTime/2985 : UInt! = thisConsensusTime/832;
          const tokenInfos/2987 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
          const netBalance/2988 : UInt! = netBalance/765;
          const v2989 : Bool! = endTime/753 > thisConsensusTime/758;
          const v2990 : Bool! = (v2989 ? false : false);
          if v2990 then {
            const v2992 : Bool! = false;
            fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/2981), (isFirstBid/755 : Bool, isFirstBid/2982), (keepBidding/756 : Bool, keepBidding/2983), (lastPrice/757 : UInt, lastPrice/2984), (thisConsensusTime/758 : UInt, thisConsensusTime/2985), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/2987), (netBalance/765 : UInt, netBalance/2988), (v786 : Bool, v2992)]) ;
             }
          else {
            const v2996 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, down))(v2996, v744, lastPrice/2984, Seller/724, v745, thisConsensusTime/743 );
            const tokenInfos/3043 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
            const netBalance/3044 : UInt! = netBalance/765;
            const v3045 : UInt! = thisConsensusTime/832 + 50;
            fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/2981), (lastPrice/757 : UInt, lastPrice/2984), (v1145 : Bool, v2995), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/3043), (netBalance/1157 : UInt, netBalance/3044), (v1169 : UInt, v3045)]) ;
             }; }
        case Bidder_bid0_103 as data_id/934 : Tuple(UInt)/False: {
           }
        case Bidder_optIn0_103 as data_id/1034 : Tuple()/False: {
           } } },
    ("Bidder_bid", Just 6) = interact {
      in = IT_Fun [] Tuple(UInt),
      out = IT_Fun [Tuple(UInt),Tuple(Address, UInt)] Null
      };
    fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/754), (isFirstBid/755 : Bool, isFirstBid/755), (keepBidding/756 : Bool, keepBidding/756), (lastPrice/757 : UInt, lastPrice/757), (thisConsensusTime/758 : UInt, thisConsensusTime/758), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/764), (netBalance/765 : UInt, netBalance/765), (v786 : Bool, v786)]) ;
    only(Right False) {
      const .api69.dom/804 : Tuple(UInt)* = protect<Tuple(UInt)>("Bidder_bid".interact.in());
      const v805 : UInt* = .api69.dom/804[0];
      const v807 : Bool! = v805 > lastPrice/757;
      claim(CT_Assume)(v807, Just "Your bid is too low, please try again");
      const v814 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})! = <Bidder_bid0_103 .api69.dom/804>;
       };
    send({
      amt = [v805, ],
      as = (v814 ),
      saved = (Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/754 : Address, isFirstBid/755 : Bool, keepBidding/756 : Bool, lastPrice/757 : UInt, thisConsensusTime/758 : UInt, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/765 : UInt, v786 : Bool ),
      soloSend = False,
      when = true,
      which = 6
      })
    recv({
      didSendv = didPublish/297 : Bool,
      from = highestBidder/830 : Address,
      lct = Nothing,
      msg = (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}) ),
      out = (),
      prev = 6,
      secsv = thisConsensusSecs/833 : UInt,
      timev = thisConsensusTime/832 : UInt,
      which = 6
      })
    {
      switch (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) {
        case Auctioneer_stopAuction0_103 as data_id/834 : Tuple()/False: {
           }
        case Bidder_bid0_103 as data_id/934 : Tuple(UInt)/True: {
          setApiDetails("Bidder_bid", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_bid0_103, AIC_Case );
          const bid/940 : UInt* = data_id/934[0];
          const v941 : Bool! = bid/940 > lastPrice/757;
          claim(CT_Require)(v941, Just "Your bid is too low, please try again");
          const v945 : UInt* = netBalance/765 + bid/940;
          checkPay(bid/940, None);
          const v966 : Tuple(Address, UInt)! = [highestBidder/754, lastPrice/757 ];
          const .api69.rngl/967 : Tuple(Address, UInt)* = emitLog(api("Bidder_bid"))(v966 );
          only(Right True) {
            local(Just v969 : Null) if didPublish/297 then {
              protect<Null>("Bidder_bid".interact.out(data_id/934, .api69.rngl/967 ));
               }
            else {
               };
             };
          if isFirstBid/755 then {
            const v984 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, log))(v984, v744, bid/940 );
            const highestBidder/3517 : Address* = highestBidder/830;
            const isFirstBid/3518 : Bool! = false;
            const keepBidding/3519 : Bool! = keepBidding/756;
            const lastPrice/3520 : UInt* = bid/940;
            const thisConsensusTime/3521 : UInt! = thisConsensusTime/832;
            const tokenInfos/3523 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
            const netBalance/3524 : UInt! = v945;
            const v3525 : Bool! = endTime/753 > thisConsensusTime/758;
            const v3526 : Bool! = (v3525 ? keepBidding/756 : false);
            if v3526 then {
              const v3528 : Bool! = true;
              fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/3517), (isFirstBid/755 : Bool, isFirstBid/3518), (keepBidding/756 : Bool, keepBidding/3519), (lastPrice/757 : UInt, lastPrice/3520), (thisConsensusTime/758 : UInt, thisConsensusTime/3521), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/3523), (netBalance/765 : UInt, netBalance/3524), (v786 : Bool, v3528)]) ;
               }
            else {
              const v3532 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
              emitLog(event(Nothing, down))(v3532, v744, lastPrice/3520, Seller/724, v745, thisConsensusTime/743 );
              const tokenInfos/3579 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
              const netBalance/3580 : UInt! = v945;
              const v3581 : UInt! = thisConsensusTime/832 + 50;
              fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/3517), (lastPrice/757 : UInt, lastPrice/3520), (v1145 : Bool, v3531), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/3579), (netBalance/1157 : UInt, netBalance/3580), (v1169 : UInt, v3581)]) ;
               }; }
          else {
            const v979 : UInt* = v945 - lastPrice/757;
            transfer.(lastPrice/757, None).to(highestBidder/754);
            const v981 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, log))(v981, v744, bid/940 );
            const highestBidder/3584 : Address* = highestBidder/830;
            const isFirstBid/3585 : Bool! = false;
            const keepBidding/3586 : Bool! = keepBidding/756;
            const lastPrice/3587 : UInt* = bid/940;
            const thisConsensusTime/3588 : UInt! = thisConsensusTime/832;
            const tokenInfos/3590 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
            const netBalance/3591 : UInt! = v979;
            const v3592 : Bool! = endTime/753 > thisConsensusTime/758;
            const v3593 : Bool! = (v3592 ? keepBidding/756 : false);
            if v3593 then {
              const v3595 : Bool! = true;
              fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/3584), (isFirstBid/755 : Bool, isFirstBid/3585), (keepBidding/756 : Bool, keepBidding/3586), (lastPrice/757 : UInt, lastPrice/3587), (thisConsensusTime/758 : UInt, thisConsensusTime/3588), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/3590), (netBalance/765 : UInt, netBalance/3591), (v786 : Bool, v3595)]) ;
               }
            else {
              const v3599 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
              emitLog(event(Nothing, down))(v3599, v744, lastPrice/3587, Seller/724, v745, thisConsensusTime/743 );
              const tokenInfos/3646 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
              const netBalance/3647 : UInt! = v979;
              const v3648 : UInt! = thisConsensusTime/832 + 50;
              fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/3584), (lastPrice/757 : UInt, lastPrice/3587), (v1145 : Bool, v3598), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/3646), (netBalance/1157 : UInt, netBalance/3647), (v1169 : UInt, v3648)]) ;
               }; }; }
        case Bidder_optIn0_103 as data_id/1034 : Tuple()/False: {
           } } },
    ("Bidder_optIn", Just 6) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),Bool] Null
      };
    fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/754), (isFirstBid/755 : Bool, isFirstBid/755), (keepBidding/756 : Bool, keepBidding/756), (lastPrice/757 : UInt, lastPrice/757), (thisConsensusTime/758 : UInt, thisConsensusTime/758), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/764), (netBalance/765 : UInt, netBalance/765), (v786 : Bool, v786)]) ;
    only(Right False) {
      const .api70.dom/818 : Tuple()* = protect<Tuple()>("Bidder_optIn".interact.in());
      const v822 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})! = <Bidder_optIn0_103 .api70.dom/818>;
       };
    send({
      amt = [1000000, ],
      as = (v822 ),
      saved = (Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/754 : Address, isFirstBid/755 : Bool, keepBidding/756 : Bool, lastPrice/757 : UInt, thisConsensusTime/758 : UInt, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/765 : UInt, v786 : Bool ),
      soloSend = False,
      when = true,
      which = 6
      })
    recv({
      didSendv = didPublish/297 : Bool,
      from = highestBidder/830 : Address,
      lct = Nothing,
      msg = (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}) ),
      out = (),
      prev = 6,
      secsv = thisConsensusSecs/833 : UInt,
      timev = thisConsensusTime/832 : UInt,
      which = 6
      })
    {
      switch (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) {
        case Auctioneer_stopAuction0_103 as data_id/834 : Tuple()/False: {
           }
        case Bidder_bid0_103 as data_id/934 : Tuple(UInt)/False: {
           }
        case Bidder_optIn0_103 as data_id/1034 : Tuple()/True: {
          setApiDetails("Bidder_optIn", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_optIn0_103, AIC_Case );
          const v1045 : UInt* = netBalance/765 + 1000000;
          checkPay(1000000, None);
          const v1088 : Bool! = v1045 >= 900000;
          if v1088 then {
            const v1089 : Address! = auctionInfo/726.Admin;
            const v1093 : UInt* = v1045 - 900000;
            transfer.(900000, None).to(v1089);
            const v1095 : Bool! = v1093 >= 100000;
            if v1095 then {
              const v1099 : UInt* = v1093 - 100000;
              transfer.(100000, None).to(Seller/724);
              const v1100 : Bool! = true;
              const .api70.rngl/1101 : Bool* = emitLog(api("Bidder_optIn"))(v1100 );
              only(Right True) {
                local(Just v1103 : Null) if didPublish/297 then {
                  protect<Null>("Bidder_optIn".interact.out(data_id/1034, .api70.rngl/1101 ));
                   }
                else {
                   };
                 };
              const highestBidder/4120 : Address* = highestBidder/754;
              const isFirstBid/4121 : Bool! = isFirstBid/755;
              const keepBidding/4122 : Bool! = keepBidding/756;
              const lastPrice/4123 : UInt* = lastPrice/757;
              const thisConsensusTime/4124 : UInt! = thisConsensusTime/832;
              const tokenInfos/4126 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
              const netBalance/4127 : UInt! = v1099;
              const v4128 : Bool! = endTime/753 > thisConsensusTime/758;
              const v4129 : Bool! = (v4128 ? keepBidding/756 : false);
              if v4129 then {
                const v4131 : Bool! = true;
                fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/4120), (isFirstBid/755 : Bool, isFirstBid/4121), (keepBidding/756 : Bool, keepBidding/4122), (lastPrice/757 : UInt, lastPrice/4123), (thisConsensusTime/758 : UInt, thisConsensusTime/4124), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4126), (netBalance/765 : UInt, netBalance/4127), (v786 : Bool, v4131)]) ;
                 }
              else {
                const v4135 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, down))(v4135, v744, lastPrice/4123, Seller/724, v745, thisConsensusTime/743 );
                const tokenInfos/4182 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
                const netBalance/4183 : UInt! = v1099;
                const v4184 : UInt! = thisConsensusTime/832 + 50;
                fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/4120), (lastPrice/757 : UInt, lastPrice/4123), (v1145 : Bool, v4134), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4182), (netBalance/1157 : UInt, netBalance/4183), (v1169 : UInt, v4184)]) ;
                 }; }
            else {
              const v1107 : Bool! = true;
              const .api70.rngl/1108 : Bool* = emitLog(api("Bidder_optIn"))(v1107 );
              only(Right True) {
                local(Just v1110 : Null) if didPublish/297 then {
                  protect<Null>("Bidder_optIn".interact.out(data_id/1034, .api70.rngl/1108 ));
                   }
                else {
                   };
                 };
              const highestBidder/4187 : Address* = highestBidder/754;
              const isFirstBid/4188 : Bool! = isFirstBid/755;
              const keepBidding/4189 : Bool! = keepBidding/756;
              const lastPrice/4190 : UInt* = lastPrice/757;
              const thisConsensusTime/4191 : UInt! = thisConsensusTime/832;
              const tokenInfos/4193 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
              const netBalance/4194 : UInt! = v1093;
              const v4195 : Bool! = endTime/753 > thisConsensusTime/758;
              const v4196 : Bool! = (v4195 ? keepBidding/756 : false);
              if v4196 then {
                const v4198 : Bool! = true;
                fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/4187), (isFirstBid/755 : Bool, isFirstBid/4188), (keepBidding/756 : Bool, keepBidding/4189), (lastPrice/757 : UInt, lastPrice/4190), (thisConsensusTime/758 : UInt, thisConsensusTime/4191), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4193), (netBalance/765 : UInt, netBalance/4194), (v786 : Bool, v4198)]) ;
                 }
              else {
                const v4202 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, down))(v4202, v744, lastPrice/4190, Seller/724, v745, thisConsensusTime/743 );
                const tokenInfos/4249 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
                const netBalance/4250 : UInt! = v1093;
                const v4251 : UInt! = thisConsensusTime/832 + 50;
                fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/4187), (lastPrice/757 : UInt, lastPrice/4190), (v1145 : Bool, v4201), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4249), (netBalance/1157 : UInt, netBalance/4250), (v1169 : UInt, v4251)]) ;
                 }; }; }
          else {
            const v1115 : Bool! = v1045 >= 100000;
            if v1115 then {
              const v1119 : UInt* = v1045 - 100000;
              transfer.(100000, None).to(Seller/724);
              const v1120 : Bool! = true;
              const .api70.rngl/1121 : Bool* = emitLog(api("Bidder_optIn"))(v1120 );
              only(Right True) {
                local(Just v1123 : Null) if didPublish/297 then {
                  protect<Null>("Bidder_optIn".interact.out(data_id/1034, .api70.rngl/1121 ));
                   }
                else {
                   };
                 };
              const highestBidder/4254 : Address* = highestBidder/754;
              const isFirstBid/4255 : Bool! = isFirstBid/755;
              const keepBidding/4256 : Bool! = keepBidding/756;
              const lastPrice/4257 : UInt* = lastPrice/757;
              const thisConsensusTime/4258 : UInt! = thisConsensusTime/832;
              const tokenInfos/4260 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
              const netBalance/4261 : UInt! = v1119;
              const v4262 : Bool! = endTime/753 > thisConsensusTime/758;
              const v4263 : Bool! = (v4262 ? keepBidding/756 : false);
              if v4263 then {
                const v4265 : Bool! = true;
                fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/4254), (isFirstBid/755 : Bool, isFirstBid/4255), (keepBidding/756 : Bool, keepBidding/4256), (lastPrice/757 : UInt, lastPrice/4257), (thisConsensusTime/758 : UInt, thisConsensusTime/4258), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4260), (netBalance/765 : UInt, netBalance/4261), (v786 : Bool, v4265)]) ;
                 }
              else {
                const v4269 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, down))(v4269, v744, lastPrice/4257, Seller/724, v745, thisConsensusTime/743 );
                const tokenInfos/4316 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
                const netBalance/4317 : UInt! = v1119;
                const v4318 : UInt! = thisConsensusTime/832 + 50;
                fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/4254), (lastPrice/757 : UInt, lastPrice/4257), (v1145 : Bool, v4268), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4316), (netBalance/1157 : UInt, netBalance/4317), (v1169 : UInt, v4318)]) ;
                 }; }
            else {
              const v1127 : Bool! = true;
              const .api70.rngl/1128 : Bool* = emitLog(api("Bidder_optIn"))(v1127 );
              only(Right True) {
                local(Just v1130 : Null) if didPublish/297 then {
                  protect<Null>("Bidder_optIn".interact.out(data_id/1034, .api70.rngl/1128 ));
                   }
                else {
                   };
                 };
              const highestBidder/4321 : Address* = highestBidder/754;
              const isFirstBid/4322 : Bool! = isFirstBid/755;
              const keepBidding/4323 : Bool! = keepBidding/756;
              const lastPrice/4324 : UInt* = lastPrice/757;
              const thisConsensusTime/4325 : UInt! = thisConsensusTime/832;
              const tokenInfos/4327 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
              const netBalance/4328 : UInt! = v1045;
              const v4329 : Bool! = endTime/753 > thisConsensusTime/758;
              const v4330 : Bool! = (v4329 ? keepBidding/756 : false);
              if v4330 then {
                const v4332 : Bool! = true;
                fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/4321), (isFirstBid/755 : Bool, isFirstBid/4322), (keepBidding/756 : Bool, keepBidding/4323), (lastPrice/757 : UInt, lastPrice/4324), (thisConsensusTime/758 : UInt, thisConsensusTime/4325), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4327), (netBalance/765 : UInt, netBalance/4328), (v786 : Bool, v4332)]) ;
                 }
              else {
                const v4336 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, down))(v4336, v744, lastPrice/4324, Seller/724, v745, thisConsensusTime/743 );
                const tokenInfos/4383 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
                const netBalance/4384 : UInt! = v1045;
                const v4385 : UInt! = thisConsensusTime/832 + 50;
                fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/4321), (lastPrice/757 : UInt, lastPrice/4324), (v1145 : Bool, v4335), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/4383), (netBalance/1157 : UInt, netBalance/4384), (v1169 : UInt, v4385)]) ;
                 }; }; }; } } },
    ("Seller", Nothing) = interact {
      getAuction = IT_Val Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenContract": Token, "tokenID": UInt})
      };
    const initialInfo/697 : Tuple(UInt, UInt, Bool)! = [0, 0, false ];
    const tokInfos/698 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/697 ]);
    only(Right False) {
      const v702 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenContract": Token, "tokenID": UInt})* = "Seller".interact.getAuction;
      const v703 : Address! = v702.Admin;
      const v704 : UInt! = v702.deadline;
      const v705 : Bytes(80)! = v702.description;
      const v706 : UInt! = v702.id;
      const v707 : Address! = v702.owner;
      const v708 : UInt! = v702.price;
      const v709 : Bytes(20)! = v702.title;
      const v710 : Token! = v702.tokenContract;
      const v711 : UInt! = v702.tokenID;
       };
    only(Right False) {
      const v723 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})! = {
        Admin = v703,
        deadline = v704,
        description = v705,
        id = v706,
        owner = v707,
        price = v708,
        title = v709,
        tokenID = v711};
       };
    send({
      amt = [0, ],
      as = (v710, v723 ),
      saved = (),
      soloSend = True,
      when = true,
      which = 0
      })
    recv({
      didSendv = didPublish/47 : Bool,
      from = Seller/724 : Address,
      lct = Just 0,
      msg = (tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}) ),
      out = (),
      prev = 0,
      secsv = thisConsensusSecs/728 : UInt,
      timev = thisConsensusTime/727 : UInt,
      which = 0
      })
    {
      const tokInfo/729 : Tuple(UInt, UInt, Bool)! = tokInfos/698[0];
      const tokInfo'/730 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/729, 0, 0 );
      const tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/698, 0, tokInfo'/730 );
      tokenInit(tokenContract/725);
      checkPay(0, None);
      fromConsensus 1 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/727 : UInt, thisConsensusTime/727), (tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1), tokInfos'/731)]) ;
      send({
        amt = [0, (1, tokenContract/725 ) ],
        as = (),
        saved = (Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/727 : UInt, tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1) ),
        soloSend = True,
        when = true,
        which = 1
        })
      recv({
        didSendv = didPublish/54 : Bool,
        from = Seller/733 : Address,
        lct = Just thisConsensusTime/727,
        msg = (),
        out = (),
        prev = 1,
        secsv = thisConsensusSecs/735 : UInt,
        timev = thisConsensusTime/734 : UInt,
        which = 1
        })
      {
        checkPay(0, None);
        const tokInfo/736 : Tuple(UInt, UInt, Bool)* = tokInfos'/731[0];
        const v737 : UInt! = tokInfo/736[0];
        const v738 : UInt! = v737 + 1;
        const tokInfo'/740 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/736, 0, v738 );
        const tokInfos'/741 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/731, 0, tokInfo'/740 );
        checkPay(1, Some tokenContract/725);
        const v742 : Bool! = Seller/724 == Seller/733;
        claim(CT_Require)(v742, Just "sender correct");
        const thisConsensusTime/743 : UInt* = thisConsensusTime/734;
        const v744 : UInt* = auctionInfo/726.id;
        const v745 : Contract* = getContract()();
        const v746 : Address! = auctionInfo/726.owner;
        const v747 : Bytes(20)* = auctionInfo/726.title;
        const v748 : Bytes(80)! = auctionInfo/726.description;
        const v749 : UInt! = auctionInfo/726.price;
        const v750 : UInt! = auctionInfo/726.tokenID;
        emitLog(event(Nothing, created))(v744, v745, thisConsensusTime/743, v746, v747, v748, v749, tokenContract/725, v750 );
        const deadline/751 : UInt! = auctionInfo/726.deadline;
        const endTime/753 : UInt* = thisConsensusTime/727 + deadline/751;
        loopvar {
          highestBidder/754 : Address = Seller/724,
          isFirstBid/755 : Bool = true,
          keepBidding/756 : Bool = true,
          lastPrice/757 : UInt = 0,
          thisConsensusTime/758 : UInt = thisConsensusTime/734,
          lastConsensusTime/759 : UInt = thisConsensusTime/727,
          tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/741,
          netBalance/765 : UInt = 0
          };
        invariant{
          () }
        while{
          const v779 : Bool! = endTime/753 > lastConsensusTime/759;
          const v783 : Bool! = (v779 ? keepBidding/756 : false);
          
          return v783; }
        {
          const v785 : Bool! = endTime/753 > lastConsensusTime/759;
          const v786 : Bool* = (keepBidding/756 ? v785 : false);
          fromConsensus 6 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/754), (isFirstBid/755 : Bool, isFirstBid/755), (keepBidding/756 : Bool, keepBidding/756), (lastPrice/757 : UInt, lastPrice/757), (thisConsensusTime/758 : UInt, thisConsensusTime/758), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/764), (netBalance/765 : UInt, netBalance/765), (v786 : Bool, v786)]) ;
          recv({
            didSendv = didPublish/297 : Bool,
            from = highestBidder/830 : Address,
            lct = Just thisConsensusTime/758,
            msg = (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}) ),
            out = (),
            prev = 6,
            secsv = thisConsensusSecs/833 : UInt,
            timev = thisConsensusTime/832 : UInt,
            which = 6
            })
          timeout(Just Left endTime/753, {
            send({
              amt = [0, ],
              as = (),
              saved = (Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/754 : Address, isFirstBid/755 : Bool, keepBidding/756 : Bool, lastPrice/757 : UInt, thisConsensusTime/758 : UInt, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/765 : UInt, v786 : Bool ),
              soloSend = True,
              when = true,
              which = 7
              })
            recv({
              didSendv = didPublish/394 : Bool,
              from = Seller/1134 : Address,
              lct = Just thisConsensusTime/758,
              msg = (),
              out = (),
              prev = 6,
              secsv = thisConsensusSecs/1136 : UInt,
              timev = thisConsensusTime/1135 : UInt,
              which = 7
              })
            {
              checkPay(0, None);
              const v1137 : Bool! = Seller/724 == Seller/1134;
              claim(CT_Require)(v1137, Just "sender correct");
              {
                highestBidder/754 : Address = highestBidder/754,
                isFirstBid/755 : Bool = isFirstBid/755,
                keepBidding/756 : Bool = keepBidding/756,
                lastPrice/757 : UInt = lastPrice/757,
                thisConsensusTime/758 : UInt = thisConsensusTime/1135,
                lastConsensusTime/759 : UInt = thisConsensusTime/758,
                tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                netBalance/765 : UInt = netBalance/765
                }
              continue; } } )
          {
            switch (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) {
              case Auctioneer_stopAuction0_103 as data_id/834 : Tuple()/False: {
                setApiDetails("Auctioneer_stopAuction", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Auctioneer_stopAuction0_103, AIC_Case );
                checkPay(0, None);
                const v848 : Bytes(20)! = "endSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, log))(v848, v744, lastPrice/757 );
                const v851 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])! = struct[(id, v744 ), (blockEnded, thisConsensusTime/832 ), (lastBid, lastPrice/757 ) ];
                emitLog(api("Auctioneer_stopAuction"))(v851 );
                {
                  highestBidder/754 : Address = highestBidder/754,
                  isFirstBid/755 : Bool = isFirstBid/755,
                  keepBidding/756 : Bool = false,
                  lastPrice/757 : UInt = lastPrice/757,
                  thisConsensusTime/758 : UInt = thisConsensusTime/832,
                  lastConsensusTime/759 : UInt = thisConsensusTime/758,
                  tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                  netBalance/765 : UInt = netBalance/765
                  }
                continue; }
              case Bidder_bid0_103 as data_id/934 : Tuple(UInt)/True: {
                setApiDetails("Bidder_bid", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_bid0_103, AIC_Case );
                const bid/940 : UInt* = data_id/934[0];
                const v941 : Bool! = bid/940 > lastPrice/757;
                claim(CT_Require)(v941, Just "Your bid is too low, please try again");
                const v945 : UInt* = netBalance/765 + bid/940;
                checkPay(bid/940, None);
                const v966 : Tuple(Address, UInt)! = [highestBidder/754, lastPrice/757 ];
                emitLog(api("Bidder_bid"))(v966 );
                if isFirstBid/755 then {
                  const v984 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                  emitLog(event(Nothing, log))(v984, v744, bid/940 );
                  {
                    highestBidder/754 : Address = highestBidder/830,
                    isFirstBid/755 : Bool = false,
                    keepBidding/756 : Bool = keepBidding/756,
                    lastPrice/757 : UInt = bid/940,
                    thisConsensusTime/758 : UInt = thisConsensusTime/832,
                    lastConsensusTime/759 : UInt = thisConsensusTime/758,
                    tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                    netBalance/765 : UInt = v945
                    }
                  continue; }
                else {
                  const v979 : UInt! = v945 - lastPrice/757;
                  transfer.(lastPrice/757, None).to(highestBidder/754);
                  const v981 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                  emitLog(event(Nothing, log))(v981, v744, bid/940 );
                  {
                    highestBidder/754 : Address = highestBidder/830,
                    isFirstBid/755 : Bool = false,
                    keepBidding/756 : Bool = keepBidding/756,
                    lastPrice/757 : UInt = bid/940,
                    thisConsensusTime/758 : UInt = thisConsensusTime/832,
                    lastConsensusTime/759 : UInt = thisConsensusTime/758,
                    tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                    netBalance/765 : UInt = v979
                    }
                  continue; }; }
              case Bidder_optIn0_103 as data_id/1034 : Tuple()/False: {
                setApiDetails("Bidder_optIn", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_optIn0_103, AIC_Case );
                const v1045 : UInt* = netBalance/765 + 1000000;
                checkPay(1000000, None);
                const v1088 : Bool! = v1045 >= 900000;
                if v1088 then {
                  const v1089 : Address! = auctionInfo/726.Admin;
                  const v1093 : UInt* = v1045 - 900000;
                  transfer.(900000, None).to(v1089);
                  const v1095 : Bool! = v1093 >= 100000;
                  if v1095 then {
                    const v1099 : UInt! = v1093 - 100000;
                    transfer.(100000, None).to(Seller/724);
                    const v1100 : Bool! = true;
                    emitLog(api("Bidder_optIn"))(v1100 );
                    {
                      highestBidder/754 : Address = highestBidder/754,
                      isFirstBid/755 : Bool = isFirstBid/755,
                      keepBidding/756 : Bool = keepBidding/756,
                      lastPrice/757 : UInt = lastPrice/757,
                      thisConsensusTime/758 : UInt = thisConsensusTime/832,
                      lastConsensusTime/759 : UInt = thisConsensusTime/758,
                      tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                      netBalance/765 : UInt = v1099
                      }
                    continue; }
                  else {
                    const v1107 : Bool! = true;
                    emitLog(api("Bidder_optIn"))(v1107 );
                    {
                      highestBidder/754 : Address = highestBidder/754,
                      isFirstBid/755 : Bool = isFirstBid/755,
                      keepBidding/756 : Bool = keepBidding/756,
                      lastPrice/757 : UInt = lastPrice/757,
                      thisConsensusTime/758 : UInt = thisConsensusTime/832,
                      lastConsensusTime/759 : UInt = thisConsensusTime/758,
                      tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                      netBalance/765 : UInt = v1093
                      }
                    continue; }; }
                else {
                  const v1115 : Bool! = v1045 >= 100000;
                  if v1115 then {
                    const v1119 : UInt! = v1045 - 100000;
                    transfer.(100000, None).to(Seller/724);
                    const v1120 : Bool! = true;
                    emitLog(api("Bidder_optIn"))(v1120 );
                    {
                      highestBidder/754 : Address = highestBidder/754,
                      isFirstBid/755 : Bool = isFirstBid/755,
                      keepBidding/756 : Bool = keepBidding/756,
                      lastPrice/757 : UInt = lastPrice/757,
                      thisConsensusTime/758 : UInt = thisConsensusTime/832,
                      lastConsensusTime/759 : UInt = thisConsensusTime/758,
                      tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                      netBalance/765 : UInt = v1119
                      }
                    continue; }
                  else {
                    const v1127 : Bool! = true;
                    emitLog(api("Bidder_optIn"))(v1127 );
                    {
                      highestBidder/754 : Address = highestBidder/754,
                      isFirstBid/755 : Bool = isFirstBid/755,
                      keepBidding/756 : Bool = keepBidding/756,
                      lastPrice/757 : UInt = lastPrice/757,
                      thisConsensusTime/758 : UInt = thisConsensusTime/832,
                      lastConsensusTime/759 : UInt = thisConsensusTime/758,
                      tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                      netBalance/765 : UInt = v1045
                      }
                    continue; }; }; } } } }
        const v1141 : Bool! = endTime/753 > lastConsensusTime/759;
        const v1145 : Bool* = (v1141 ? keepBidding/756 : false);
        const v1148 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, down))(v1148, v744, lastPrice/757, Seller/724, v745, thisConsensusTime/743 );
        loopvar {
          awaitingDecision/1149 : Bool = true,
          thisConsensusTime/1150 : UInt = thisConsensusTime/758,
          tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
          netBalance/1157 : UInt = netBalance/765
          };
        invariant{
          () }
        while{
          
          return awaitingDecision/1149; }
        {
          const v1169 : UInt* = thisConsensusTime/1150 + 50;
          fromConsensus 5 (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/754), (lastPrice/757 : UInt, lastPrice/757), (v1145 : Bool, v1145), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/1156), (netBalance/1157 : UInt, netBalance/1157), (v1169 : UInt, v1169)]) ;
          recv({
            didSendv = didPublish/541 : Bool,
            from = v1193 : Address,
            lct = Just thisConsensusTime/1150,
            msg = (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()}) ),
            out = (),
            prev = 5,
            secsv = thisConsensusSecs/1196 : UInt,
            timev = thisConsensusTime/1195 : UInt,
            which = 4
            })
          timeout(Just Left v1169, {
            send({
              amt = [0, ],
              as = (),
              saved = (Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/1157 : UInt, v1169 : UInt ),
              soloSend = True,
              when = true,
              which = 5
              })
            recv({
              didSendv = didPublish/601 : Bool,
              from = Seller/1309 : Address,
              lct = Just thisConsensusTime/1150,
              msg = (),
              out = (),
              prev = 5,
              secsv = thisConsensusSecs/1311 : UInt,
              timev = thisConsensusTime/1310 : UInt,
              which = 5
              })
            {
              checkPay(0, None);
              const v1312 : Bool! = Seller/724 == Seller/1309;
              claim(CT_Require)(v1312, Just "sender correct");
              const tokInfo/1313 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
              const v1314 : UInt* = tokInfo/1313[0];
              const v1320 : UInt! = v1314 - v1314;
              const tokInfo'/1322 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1313, 0, v1320 );
              const tokInfos'/1323 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1322 );
              transfer.(v1314, Some tokenContract/725).to(highestBidder/754);
              const v1328 : UInt! = netBalance/1157 - netBalance/1157;
              transfer.(netBalance/1157, None).to(Seller/724);
              const v1330 : Bytes(20)! = "accepted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
              emitLog(event(Nothing, outcome))(v1330, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
              {
                awaitingDecision/1149 : Bool = false,
                thisConsensusTime/1150 : UInt = thisConsensusTime/1310,
                tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/1323,
                netBalance/1157 : UInt = v1328
                }
              continue; } } )
          {
            switch (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) {
              case Auctioneer_acceptSale0_416 as data_id/1197 : Tuple()/False: {
                setApiDetails("Auctioneer_acceptSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_acceptSale0_416, AIC_Case );
                checkPay(0, None);
                const tokInfo/1204 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
                const v1205 : UInt* = tokInfo/1204[0];
                const v1211 : UInt! = v1205 - v1205;
                const tokInfo'/1213 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1204, 0, v1211 );
                const tokInfos'/1214 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1213 );
                transfer.(v1205, Some tokenContract/725).to(highestBidder/754);
                const v1219 : UInt! = netBalance/1157 - netBalance/1157;
                transfer.(netBalance/1157, None).to(Seller/724);
                const v1220 : Bool! = true;
                emitLog(api("Auctioneer_acceptSale"))(v1220 );
                const v1227 : Bytes(20)! = "accepted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, outcome))(v1227, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
                {
                  awaitingDecision/1149 : Bool = false,
                  thisConsensusTime/1150 : UInt = thisConsensusTime/1195,
                  tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/1214,
                  netBalance/1157 : UInt = v1219
                  }
                continue; }
              case Auctioneer_rejectSale0_416 as data_id/1253 : Tuple()/False: {
                setApiDetails("Auctioneer_rejectSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_rejectSale0_416, AIC_Case );
                checkPay(0, None);
                const tokInfo/1285 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
                const v1286 : UInt* = tokInfo/1285[0];
                const v1292 : UInt! = v1286 - v1286;
                const tokInfo'/1294 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1285, 0, v1292 );
                const tokInfos'/1295 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1294 );
                transfer.(v1286, Some tokenContract/725).to(Seller/724);
                const v1300 : UInt! = netBalance/1157 - netBalance/1157;
                transfer.(netBalance/1157, None).to(highestBidder/754);
                const v1301 : Bool! = false;
                emitLog(api("Auctioneer_rejectSale"))(v1301 );
                const v1308 : Bytes(20)! = "rejected\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
                emitLog(event(Nothing, outcome))(v1308, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
                {
                  awaitingDecision/1149 : Bool = false,
                  thisConsensusTime/1150 : UInt = thisConsensusTime/1195,
                  tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/1295,
                  netBalance/1157 : UInt = v1300
                  }
                continue; } } } }
        const tokInfo/1332 : Tuple(UInt, UInt, Bool)! = tokenInfos/1156[0];
        const v1333 : UInt! = tokInfo/1332[0];
        transfer.(v1333, Some tokenContract/725).to(highestBidder/754);
        transfer.(netBalance/1157, None).to(Seller/724);
        fromConsensus 4 (halt [tokenContract/725]) ;
         } }
    }
  }
/*** OLD ***/
CP {
  apis = {
    "Auctioneer_acceptSale" = {
      5 = {
        compile = AIC_Case,
        mcase_id = Just Auctioneer_acceptSale0_416,
        msg_tys = [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})],
        ret = Bool,
        which = 4
        }
      },
    "Auctioneer_rejectSale" = {
      5 = {
        compile = AIC_Case,
        mcase_id = Just Auctioneer_rejectSale0_416,
        msg_tys = [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})],
        ret = Bool,
        which = 4
        }
      },
    "Auctioneer_stopAuction" = {
      6 = {
        compile = AIC_Case,
        mcase_id = Just Auctioneer_stopAuction0_103,
        msg_tys = [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})],
        ret = Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]),
        which = 6
        }
      },
    "Bidder_bid" = {
      6 = {
        compile = AIC_Case,
        mcase_id = Just Bidder_bid0_103,
        msg_tys = [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})],
        ret = Tuple(Address, UInt),
        which = 6
        }
      },
    "Bidder_optIn" = {
      6 = {
        compile = AIC_Case,
        mcase_id = Just Bidder_optIn0_103,
        msg_tys = [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})],
        ret = Bool,
        which = 6
        }
      }
    },
  events = {
    Nothing = {
      created = [UInt, Contract, UInt, Address, Bytes(20), Bytes(80), UInt, Token, UInt],
      down = [Bytes(20), UInt, UInt, Address, Contract, UInt],
      log = [Bytes(20), UInt, UInt],
      outcome = [Bytes(20), Bytes(20), UInt, Address, Address, Token]
      }
    },
  handlers = {
    0 = {
      Seller/724 : Address,
      (between [Nothing] [Nothing]),
      last = 0,
      [],
      [],
      [tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*],
      [Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})],
      timev = thisConsensusTime/727 : UInt,
      secsv = thisConsensusSecs/728 : UInt,
      {
        const initialInfo/697 : Tuple(UInt, UInt, Bool)! = [0, 0, false ];
        const tokInfos/698 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/697 ]);
        const tokInfo/729 : Tuple(UInt, UInt, Bool)! = tokInfos/698[0];
        const tokInfo'/730 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/729, 0, 0 );
        const tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/698, 0, tokInfo'/730 );
        tokenInit(tokenContract/725);
        checkPay(0, None);
        (from 1, (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/727 : UInt, thisConsensusTime/727), (tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1), tokInfos'/731)])) }
       },
    1 = {
      Seller/733 : Address,
      (between [Nothing] [Nothing]),
      last = 1,
      [Seller/724 : Address*, tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*, thisConsensusTime/727 : UInt*, tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1)*],
      [Address, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), UInt, Array(Tuple(UInt, UInt, Bool), 1)],
      [],
      [],
      timev = thisConsensusTime/734 : UInt,
      secsv = thisConsensusSecs/735 : UInt,
      {
        checkPay(0, None);
        const tokInfo/736 : Tuple(UInt, UInt, Bool)* = tokInfos'/731[0];
        const v737 : UInt! = tokInfo/736[0];
        const v738 : UInt! = v737 + 1;
        const tokInfo'/740 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/736, 0, v738 );
        const tokInfos'/741 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/731, 0, tokInfo'/740 );
        checkPay(1, Some tokenContract/725);
        const v742 : Bool! = Seller/724 == Seller/733;
        claim(CT_Require)(v742, Just "sender correct");
        const thisConsensusTime/743 : UInt* = thisConsensusTime/734;
        const v744 : UInt* = auctionInfo/726.id;
        const v745 : Contract* = getContract()();
        const v746 : Address! = auctionInfo/726.owner;
        const v747 : Bytes(20)* = auctionInfo/726.title;
        const v748 : Bytes(80)! = auctionInfo/726.description;
        const v749 : UInt! = auctionInfo/726.price;
        const v750 : UInt! = auctionInfo/726.tokenID;
        emitLog(event(Nothing, created))(v744, v745, thisConsensusTime/743, v746, v747, v748, v749, tokenContract/725, v750 );
        const deadline/751 : UInt! = auctionInfo/726.deadline;
        const endTime/753 : UInt! = thisConsensusTime/727 + deadline/751;
        (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
          highestBidder/754 : Address = Seller/724,
          isFirstBid/755 : Bool = true,
          keepBidding/756 : Bool = true,
          lastPrice/757 : UInt = 0,
          thisConsensusTime/758 : UInt = thisConsensusTime/734,
          lastConsensusTime/759 : UInt = thisConsensusTime/727,
          tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/741,
          netBalance/765 : UInt = 0
          }) }
       },
    2 = {
      loop!,
      [Seller/724 : Address*, tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*, thisConsensusTime/743 : UInt*, v744 : UInt*, v745 : Contract*, v747 : Bytes(20)*, endTime/753 : UInt*],
      [highestBidder/754 : Address*, isFirstBid/755 : Bool*, keepBidding/756 : Bool*, lastPrice/757 : UInt*, thisConsensusTime/758 : UInt*, lastConsensusTime/759 : UInt!, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/765 : UInt*],
      {
        const v779 : Bool* = endTime/753 > lastConsensusTime/759;
        const v783 : Bool! = (v779 ? keepBidding/756 : false);
        if v783 then {
          const v786 : Bool* = true;
          (from 6, (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/754), (isFirstBid/755 : Bool, isFirstBid/755), (keepBidding/756 : Bool, true), (lastPrice/757 : UInt, lastPrice/757), (thisConsensusTime/758 : UInt, thisConsensusTime/758), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/764), (netBalance/765 : UInt, netBalance/765), (v786 : Bool, v786)])) }
        else {
          const v1145 : Bool! = (v779 ? keepBidding/756 : false);
          const v1148 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, down))(v1148, v744, lastPrice/757, Seller/724, v745, thisConsensusTime/743 );
          (jump! 3 [Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool] {
            awaitingDecision/1149 : Bool = true,
            thisConsensusTime/1150 : UInt = thisConsensusTime/758,
            tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
            netBalance/1157 : UInt = netBalance/765
            }) }; }
       },
    3 = {
      loop!,
      [Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool*],
      [awaitingDecision/1149 : Bool!, thisConsensusTime/1150 : UInt!, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt*],
      {
        if awaitingDecision/1149 then {
          const v1169 : UInt* = thisConsensusTime/1150 + 50;
          (from 5, (continue [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/754), (lastPrice/757 : UInt, lastPrice/757), (v1145 : Bool, v1145), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/1156), (netBalance/1157 : UInt, netBalance/1157), (v1169 : UInt, v1169)])) }
        else {
          const tokInfo/1332 : Tuple(UInt, UInt, Bool)! = tokenInfos/1156[0];
          const v1333 : UInt! = tokInfo/1332[0];
          transfer.(v1333, Some tokenContract/725).to(highestBidder/754);
          transfer.(netBalance/1157, None).to(Seller/724);
          (from 4, (halt [tokenContract/725])) }; }
       },
    4 = {
      v1193 : Address,
      (between [Nothing] [Just Left v1169]),
      last = 5,
      [Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool*, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt*, v1169 : UInt!],
      [Address, Token, Bytes(20), Address, UInt, Bool, Array(Tuple(UInt, UInt, Bool), 1), UInt, UInt],
      [.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})!],
      [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})],
      timev = thisConsensusTime/1195 : UInt,
      secsv = thisConsensusSecs/1196 : UInt,
      {
        switch (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) {
          case Auctioneer_acceptSale0_416 as data_id/1197 : Tuple()/False: {
            setApiDetails("Auctioneer_acceptSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_acceptSale0_416, AIC_Case );
            checkPay(0, None);
            const tokInfo/1204 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
            const v1205 : UInt* = tokInfo/1204[0];
            const v1211 : UInt! = v1205 - v1205;
            const tokInfo'/1213 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1204, 0, v1211 );
            const tokInfos'/1214 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1213 );
            transfer.(v1205, Some tokenContract/725).to(highestBidder/754);
            const v1219 : UInt! = netBalance/1157 - netBalance/1157;
            transfer.(netBalance/1157, None).to(Seller/724);
            const v1220 : Bool! = true;
            emitLog(api("Auctioneer_acceptSale"))(v1220 );
            const v1227 : Bytes(20)! = "accepted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, outcome))(v1227, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
            (jump! 3 [Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool] {
              awaitingDecision/1149 : Bool = false,
              thisConsensusTime/1150 : UInt = thisConsensusTime/1195,
              tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/1214,
              netBalance/1157 : UInt = v1219
              }) }
          case Auctioneer_rejectSale0_416 as data_id/1253 : Tuple()/False: {
            setApiDetails("Auctioneer_rejectSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_rejectSale0_416, AIC_Case );
            checkPay(0, None);
            const tokInfo/1285 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
            const v1286 : UInt* = tokInfo/1285[0];
            const v1292 : UInt! = v1286 - v1286;
            const tokInfo'/1294 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1285, 0, v1292 );
            const tokInfos'/1295 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1294 );
            transfer.(v1286, Some tokenContract/725).to(Seller/724);
            const v1300 : UInt! = netBalance/1157 - netBalance/1157;
            transfer.(netBalance/1157, None).to(highestBidder/754);
            const v1301 : Bool! = false;
            emitLog(api("Auctioneer_rejectSale"))(v1301 );
            const v1308 : Bytes(20)! = "rejected\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, outcome))(v1308, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
            (jump! 3 [Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool] {
              awaitingDecision/1149 : Bool = false,
              thisConsensusTime/1150 : UInt = thisConsensusTime/1195,
              tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/1295,
              netBalance/1157 : UInt = v1300
              }) } } }
       },
    5 = {
      Seller/1309 : Address,
      (between [Just Left v1169] [Nothing]),
      last = 5,
      [Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool!, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt*, v1169 : UInt!],
      [Address, Token, Bytes(20), Address, UInt, Bool, Array(Tuple(UInt, UInt, Bool), 1), UInt, UInt],
      [],
      [],
      timev = thisConsensusTime/1310 : UInt,
      secsv = thisConsensusSecs/1311 : UInt,
      {
        checkPay(0, None);
        const v1312 : Bool! = Seller/724 == Seller/1309;
        claim(CT_Require)(v1312, Just "sender correct");
        const tokInfo/1313 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
        const v1314 : UInt* = tokInfo/1313[0];
        const v1320 : UInt! = v1314 - v1314;
        const tokInfo'/1322 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1313, 0, v1320 );
        const tokInfos'/1323 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1322 );
        transfer.(v1314, Some tokenContract/725).to(highestBidder/754);
        const v1328 : UInt! = netBalance/1157 - netBalance/1157;
        transfer.(netBalance/1157, None).to(Seller/724);
        const v1330 : Bytes(20)! = "accepted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, outcome))(v1330, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
        (jump! 3 [Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool] {
          awaitingDecision/1149 : Bool = false,
          thisConsensusTime/1150 : UInt = thisConsensusTime/1310,
          tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1) = tokInfos'/1323,
          netBalance/1157 : UInt = v1328
          }) }
       },
    6 = {
      highestBidder/830 : Address,
      (between [Nothing] [Just Left endTime/753]),
      last = 6,
      [Seller/724 : Address*, tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*, thisConsensusTime/743 : UInt*, v744 : UInt*, v745 : Contract*, v747 : Bytes(20)*, endTime/753 : UInt*, highestBidder/754 : Address*, isFirstBid/755 : Bool*, keepBidding/756 : Bool*, lastPrice/757 : UInt*, thisConsensusTime/758 : UInt*, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/765 : UInt*, v786 : Bool#],
      [Address, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), UInt, UInt, Contract, Bytes(20), UInt, Address, Bool, Bool, UInt, UInt, Array(Tuple(UInt, UInt, Bool), 1), UInt, Bool],
      [.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})!],
      [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})],
      timev = thisConsensusTime/832 : UInt,
      secsv = thisConsensusSecs/833 : UInt,
      {
        switch (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) {
          case Auctioneer_stopAuction0_103 as data_id/834 : Tuple()/False: {
            setApiDetails("Auctioneer_stopAuction", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Auctioneer_stopAuction0_103, AIC_Case );
            checkPay(0, None);
            const v848 : Bytes(20)! = "endSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
            emitLog(event(Nothing, log))(v848, v744, lastPrice/757 );
            const v851 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])! = struct[(id, v744 ), (blockEnded, thisConsensusTime/832 ), (lastBid, lastPrice/757 ) ];
            emitLog(api("Auctioneer_stopAuction"))(v851 );
            (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
              highestBidder/754 : Address = highestBidder/754,
              isFirstBid/755 : Bool = isFirstBid/755,
              keepBidding/756 : Bool = false,
              lastPrice/757 : UInt = lastPrice/757,
              thisConsensusTime/758 : UInt = thisConsensusTime/832,
              lastConsensusTime/759 : UInt = thisConsensusTime/758,
              tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
              netBalance/765 : UInt = netBalance/765
              }) }
          case Bidder_bid0_103 as data_id/934 : Tuple(UInt)/True: {
            setApiDetails("Bidder_bid", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_bid0_103, AIC_Case );
            const bid/940 : UInt* = data_id/934[0];
            const v941 : Bool! = bid/940 > lastPrice/757;
            claim(CT_Require)(v941, Just "Your bid is too low, please try again");
            const v945 : UInt* = netBalance/765 + bid/940;
            checkPay(bid/940, None);
            const v966 : Tuple(Address, UInt)! = [highestBidder/754, lastPrice/757 ];
            emitLog(api("Bidder_bid"))(v966 );
            if isFirstBid/755 then {
              const v984 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
              emitLog(event(Nothing, log))(v984, v744, bid/940 );
              (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
                highestBidder/754 : Address = highestBidder/830,
                isFirstBid/755 : Bool = false,
                keepBidding/756 : Bool = keepBidding/756,
                lastPrice/757 : UInt = bid/940,
                thisConsensusTime/758 : UInt = thisConsensusTime/832,
                lastConsensusTime/759 : UInt = thisConsensusTime/758,
                tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                netBalance/765 : UInt = v945
                }) }
            else {
              const v979 : UInt! = v945 - lastPrice/757;
              transfer.(lastPrice/757, None).to(highestBidder/754);
              const v981 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
              emitLog(event(Nothing, log))(v981, v744, bid/940 );
              (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
                highestBidder/754 : Address = highestBidder/830,
                isFirstBid/755 : Bool = false,
                keepBidding/756 : Bool = keepBidding/756,
                lastPrice/757 : UInt = bid/940,
                thisConsensusTime/758 : UInt = thisConsensusTime/832,
                lastConsensusTime/759 : UInt = thisConsensusTime/758,
                tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                netBalance/765 : UInt = v979
                }) }; }
          case Bidder_optIn0_103 as data_id/1034 : Tuple()/False: {
            setApiDetails("Bidder_optIn", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_optIn0_103, AIC_Case );
            const v1045 : UInt* = netBalance/765 + 1000000;
            checkPay(1000000, None);
            const v1088 : Bool! = v1045 >= 900000;
            if v1088 then {
              const v1089 : Address! = auctionInfo/726.Admin;
              const v1093 : UInt* = v1045 - 900000;
              transfer.(900000, None).to(v1089);
              const v1095 : Bool! = v1093 >= 100000;
              if v1095 then {
                const v1099 : UInt! = v1093 - 100000;
                transfer.(100000, None).to(Seller/724);
                const v1100 : Bool! = true;
                emitLog(api("Bidder_optIn"))(v1100 );
                (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
                  highestBidder/754 : Address = highestBidder/754,
                  isFirstBid/755 : Bool = isFirstBid/755,
                  keepBidding/756 : Bool = keepBidding/756,
                  lastPrice/757 : UInt = lastPrice/757,
                  thisConsensusTime/758 : UInt = thisConsensusTime/832,
                  lastConsensusTime/759 : UInt = thisConsensusTime/758,
                  tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                  netBalance/765 : UInt = v1099
                  }) }
              else {
                const v1107 : Bool! = true;
                emitLog(api("Bidder_optIn"))(v1107 );
                (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
                  highestBidder/754 : Address = highestBidder/754,
                  isFirstBid/755 : Bool = isFirstBid/755,
                  keepBidding/756 : Bool = keepBidding/756,
                  lastPrice/757 : UInt = lastPrice/757,
                  thisConsensusTime/758 : UInt = thisConsensusTime/832,
                  lastConsensusTime/759 : UInt = thisConsensusTime/758,
                  tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                  netBalance/765 : UInt = v1093
                  }) }; }
            else {
              const v1115 : Bool! = v1045 >= 100000;
              if v1115 then {
                const v1119 : UInt! = v1045 - 100000;
                transfer.(100000, None).to(Seller/724);
                const v1120 : Bool! = true;
                emitLog(api("Bidder_optIn"))(v1120 );
                (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
                  highestBidder/754 : Address = highestBidder/754,
                  isFirstBid/755 : Bool = isFirstBid/755,
                  keepBidding/756 : Bool = keepBidding/756,
                  lastPrice/757 : UInt = lastPrice/757,
                  thisConsensusTime/758 : UInt = thisConsensusTime/832,
                  lastConsensusTime/759 : UInt = thisConsensusTime/758,
                  tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                  netBalance/765 : UInt = v1119
                  }) }
              else {
                const v1127 : Bool! = true;
                emitLog(api("Bidder_optIn"))(v1127 );
                (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
                  highestBidder/754 : Address = highestBidder/754,
                  isFirstBid/755 : Bool = isFirstBid/755,
                  keepBidding/756 : Bool = keepBidding/756,
                  lastPrice/757 : UInt = lastPrice/757,
                  thisConsensusTime/758 : UInt = thisConsensusTime/832,
                  lastConsensusTime/759 : UInt = thisConsensusTime/758,
                  tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
                  netBalance/765 : UInt = v1045
                  }) }; }; } } }
       },
    7 = {
      Seller/1134 : Address,
      (between [Just Left endTime/753] [Nothing]),
      last = 6,
      [Seller/724 : Address*, tokenContract/725 : Token!, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})!, thisConsensusTime/743 : UInt!, v744 : UInt!, v745 : Contract!, v747 : Bytes(20)!, endTime/753 : UInt*, highestBidder/754 : Address!, isFirstBid/755 : Bool!, keepBidding/756 : Bool!, lastPrice/757 : UInt!, thisConsensusTime/758 : UInt!, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1)!, netBalance/765 : UInt!, v786 : Bool#],
      [Address, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), UInt, UInt, Contract, Bytes(20), UInt, Address, Bool, Bool, UInt, UInt, Array(Tuple(UInt, UInt, Bool), 1), UInt, Bool],
      [],
      [],
      timev = thisConsensusTime/1135 : UInt,
      secsv = thisConsensusSecs/1136 : UInt,
      {
        checkPay(0, None);
        const v1137 : Bool! = Seller/724 == Seller/1134;
        claim(CT_Require)(v1137, Just "sender correct");
        (jump! 2 [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt] {
          highestBidder/754 : Address = highestBidder/754,
          isFirstBid/755 : Bool = isFirstBid/755,
          keepBidding/756 : Bool = keepBidding/756,
          lastPrice/757 : UInt = lastPrice/757,
          thisConsensusTime/758 : UInt = thisConsensusTime/1135,
          lastConsensusTime/759 : UInt = thisConsensusTime/758,
          tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1) = tokenInfos/764,
          netBalance/765 : UInt = netBalance/765
          }) }
       }
    },
  init = {
    maps = {
      
      }
    },
  views = {
    vis = {
      1 = (view [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/727 : UInt, tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1)] {
        
        }),
      5 = (view [Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/1157 : UInt, v1169 : UInt] {
        Just "AuctionView" = {
          awaitingConfirmation = export (Nothing) => {
          return true;},
          isRunning = export (Nothing) => {
          return v1145;}
          }
        }),
      6 = (view [Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/754 : Address, isFirstBid/755 : Bool, keepBidding/756 : Bool, lastPrice/757 : UInt, thisConsensusTime/758 : UInt, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/765 : UInt, v786 : Bool] {
        Just "AuctionView" = {
          isRunning = export (Nothing) => {
          return v786;}
          }
        })
      },
    vs = {
      Just "AuctionView" = {
        awaitingConfirmation = (IT_Val Bool, []),
        isRunning = (IT_Val Bool, [])
        }
      }
    }
  }
/*** CL ***/
// Definitions:
{
  "_reachr_AuctionView_awaitingConfirmation" = mem Bool,
  "_reachr_AuctionView_isRunning" = mem Bool,
  "_reachr_Auctioneer_acceptSale" = mem Bool,
  "_reachr_Auctioneer_rejectSale" = mem Bool,
  "_reachr_Auctioneer_stopAuction" = mem Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]),
  "_reachr_Bidder_bid" = mem Tuple(Address, UInt),
  "_reachr_Bidder_optIn" = mem Bool,
  "created" = evt [UInt, Contract, UInt, Address, Bytes(20), Bytes(80), UInt, Token, UInt ],
  "down" = evt [Bytes(20), UInt, UInt, Address, Contract, UInt ],
  "log" = evt [Bytes(20), UInt, UInt ],
  "outcome" = evt [Bytes(20), Bytes(20), UInt, Address, Address, Token ]
  }
// Functions:
{
  "AuctionView_awaitingConfirmation"()Bool = external(Bool) view () => {
    jump "_reacha_AuctionView_awaitingConfirmation"() Just Just "_reachr_AuctionView_awaitingConfirmation" },
  "AuctionView_isRunning"()Bool = external(Bool) view () => {
    jump "_reacha_AuctionView_isRunning"() Just Just "_reachr_AuctionView_isRunning" },
  "Auctioneer_acceptSale"()Bool = external(Bool) mut () => {
    jump "_reacha_Auctioneer_acceptSale"() Just Just "_reachr_Auctioneer_acceptSale" },
  "Auctioneer_rejectSale"()Bool = external(Bool) mut () => {
    jump "_reacha_Auctioneer_rejectSale"() Just Just "_reachr_Auctioneer_rejectSale" },
  "Auctioneer_stopAuction"()Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]) = external(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])) mut () => {
    jump "_reacha_Auctioneer_stopAuction"() Just Just "_reachr_Auctioneer_stopAuction" },
  "Bidder_bid"(UInt )Tuple(Address, UInt) = external(Tuple(Address, UInt)) mut (v4406 : UInt* ) => {
    jump "_reacha_Bidder_bid"(v4406 : UInt ) Just Just "_reachr_Bidder_bid" },
  "Bidder_optIn"()Bool = external(Bool) mut () => {
    jump "_reacha_Bidder_optIn"() Just Just "_reachr_Bidder_optIn" },
  "_reacha_AuctionView_awaitingConfirmation"()Null = internal view () => {
    v4388 : UInt := state
    const v4389 : Bool! = v4388 == 5;
    claim(CT_Enforce)(v4389, Just "Incorrect state: not leaf");
    [Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool*, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt*, v1169 : UInt*] := state5 True
    mem "_reachr_AuctionView_awaitingConfirmation" <- true
    exit() },
  "_reacha_AuctionView_isRunning"()Null = internal view () => {
    v4390 : UInt := state
    const v4393 : Bool! = v4390 < 6;
    if v4393 then {
      const v4391 : Bool! = v4390 == 5;
      claim(CT_Enforce)(v4391, Just "Incorrect state: not leaf");
      [Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool*, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt*, v1169 : UInt*] := state5 True
      mem "_reachr_AuctionView_isRunning" <- v1145
      exit() }
    else {
      const v4392 : Bool! = v4390 == 6;
      claim(CT_Enforce)(v4392, Just "Incorrect state: not leaf");
      [Seller/724 : Address*, tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*, thisConsensusTime/743 : UInt*, v744 : UInt*, v745 : Contract*, v747 : Bytes(20)*, endTime/753 : UInt*, highestBidder/754 : Address*, isFirstBid/755 : Bool*, keepBidding/756 : Bool*, lastPrice/757 : UInt*, thisConsensusTime/758 : UInt*, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/765 : UInt*, v786 : Bool*] := state6 True
      mem "_reachr_AuctionView_isRunning" <- v786
      exit() }; },
  "_reacha_Auctioneer_acceptSale"()Null = internal mut () => {
    v4394 : UInt := state
    const v4397 : UInt! = 0;
    const v4395 : Tuple()! = [];
    const v4396 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})! = <Auctioneer_acceptSale0_416 v4395>;
    jump "_reachi_4"(v4397 : UInt, v4396 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()}) ) Nothing },
  "_reacha_Auctioneer_rejectSale"()Null = internal mut () => {
    v4398 : UInt := state
    const v4401 : UInt! = 0;
    const v4399 : Tuple()! = [];
    const v4400 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})! = <Auctioneer_rejectSale0_416 v4399>;
    jump "_reachi_4"(v4401 : UInt, v4400 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()}) ) Nothing },
  "_reacha_Auctioneer_stopAuction"()Null = internal mut () => {
    v4402 : UInt := state
    const v4405 : UInt! = 0;
    const v4403 : Tuple()! = [];
    const v4404 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})! = <Auctioneer_stopAuction0_103 v4403>;
    jump "_reachi_6"(v4405 : UInt, v4404 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}) ) Nothing },
  "_reacha_Bidder_bid"(UInt )Null = internal mut (v4406 : UInt* ) => {
    v4407 : UInt := state
    const v4410 : UInt! = 0;
    const v4408 : Tuple(UInt)! = [v4406 ];
    const v4409 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})! = <Bidder_bid0_103 v4408>;
    jump "_reachi_6"(v4410 : UInt, v4409 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}) ) Nothing },
  "_reacha_Bidder_optIn"()Null = internal mut () => {
    v4411 : UInt := state
    const v4414 : UInt! = 0;
    const v4412 : Tuple()! = [];
    const v4413 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})! = <Bidder_optIn0_103 v4412>;
    jump "_reachi_6"(v4414 : UInt, v4413 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}) ) Nothing },
  "_reachi_0"(Tuple(UInt, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})) )Null = internal mut (v4416 : Tuple(UInt, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}))* ) => {
    emitPublish(0, Tuple(UInt, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})) )
    {
      from = Seller/724 : Address,
      secs = thisConsensusSecs/728 : UInt,
      time = thisConsensusTime/727 : UInt
      } := txn.metadata
    const v4415 : UInt* = v4416[0];
    const tokenContract/725 : Token* = v4416[1];
    const auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})* = v4416[2];
    checkTime(v4415 : UInt )
    checkInterval(thisConsensusTime/727 : UInt, thisConsensusSecs/728 : UInt, (between [Nothing] [Nothing]) )
    const initialInfo/697 : Tuple(UInt, UInt, Bool)! = [0, 0, false ];
    const tokInfos/698 : Array(Tuple(UInt, UInt, Bool), 1)* = array(Tuple(UInt, UInt, Bool), [initialInfo/697 ]);
    const tokInfo/729 : Tuple(UInt, UInt, Bool)! = tokInfos/698[0];
    const tokInfo'/730 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/729, 0, 0 );
    const tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1)* = Array.set(tokInfos/698, 0, tokInfo'/730 );
    tokenInit(tokenContract/725);
    checkPay(0, None);
    state1 <- [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/727 : UInt, thisConsensusTime/727), (tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1), tokInfos'/731)]
    exit() },
  "_reachi_1"(Tuple(UInt) )Null = internal mut (v4418 : Tuple(UInt)* ) => {
    emitPublish(1, Tuple(UInt) )
    {
      from = Seller/733 : Address,
      secs = thisConsensusSecs/735 : UInt,
      time = thisConsensusTime/734 : UInt
      } := txn.metadata
    [Seller/724 : Address*, tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*, thisConsensusTime/727 : UInt*, tokInfos'/731 : Array(Tuple(UInt, UInt, Bool), 1)*] := state1 False
    const v4417 : UInt* = v4418[0];
    checkTime(v4417 : UInt )
    checkInterval(thisConsensusTime/734 : UInt, thisConsensusSecs/735 : UInt, (between [Nothing] [Nothing]) )
    checkPay(0, None);
    const tokInfo/736 : Tuple(UInt, UInt, Bool)* = tokInfos'/731[0];
    const v737 : UInt! = tokInfo/736[0];
    const v738 : UInt! = v737 + 1;
    const tokInfo'/740 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/736, 0, v738 );
    const tokInfos'/741 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokInfos'/731, 0, tokInfo'/740 );
    checkPay(1, Some tokenContract/725);
    const v742 : Bool! = Seller/724 == Seller/733;
    claim(CT_Require)(v742, Just "sender correct");
    const thisConsensusTime/743 : UInt* = thisConsensusTime/734;
    const v744 : UInt* = auctionInfo/726.id;
    const v745 : Contract* = getContract()();
    const v746 : Address! = auctionInfo/726.owner;
    const v747 : Bytes(20)* = auctionInfo/726.title;
    const v748 : Bytes(80)! = auctionInfo/726.description;
    const v749 : UInt! = auctionInfo/726.price;
    const v750 : UInt! = auctionInfo/726.tokenID;
    emitLog(event(Nothing, created))(v744, v745, thisConsensusTime/743, v746, v747, v748, v749, tokenContract/725, v750 );
    const deadline/751 : UInt! = auctionInfo/726.deadline;
    const endTime/753 : UInt! = thisConsensusTime/727 + deadline/751;
    const highestBidder/4419 : Address! = Seller/724;
    const isFirstBid/4420 : Bool! = true;
    const keepBidding/4421 : Bool! = true;
    const lastPrice/4422 : UInt! = 0;
    const thisConsensusTime/4423 : UInt! = thisConsensusTime/734;
    const lastConsensusTime/4424 : UInt! = thisConsensusTime/727;
    const tokenInfos/4425 : Array(Tuple(UInt, UInt, Bool), 1)! = tokInfos'/741;
    const netBalance/4426 : UInt! = 0;
    jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4419 : Address, isFirstBid/4420 : Bool, keepBidding/4421 : Bool, lastPrice/4422 : UInt, thisConsensusTime/4423 : UInt, lastConsensusTime/4424 : UInt, tokenInfos/4425 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4426 : UInt ) Nothing },
  "_reachi_4"(Tuple(UInt, Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) )Null = internal mut (v4432 : Tuple(UInt, Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()}))* ) => {
    emitPublish(4, Tuple(UInt, Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) )
    {
      from = v1193 : Address,
      secs = thisConsensusSecs/1196 : UInt,
      time = thisConsensusTime/1195 : UInt
      } := txn.metadata
    [Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool*, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt*, v1169 : UInt!] := state5 False
    const v4431 : UInt* = v4432[0];
    const .fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})! = v4432[1];
    checkTime(v4431 : UInt )
    checkInterval(thisConsensusTime/1195 : UInt, thisConsensusSecs/1196 : UInt, (between [Nothing] [Just Left v1169]) )
    switch (.fork416.msg/1194 : Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) {
      case Auctioneer_acceptSale0_416 as data_id/1197 : Tuple()/False: {
        setApiDetails("Auctioneer_acceptSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_acceptSale0_416, AIC_Case );
        checkPay(0, None);
        const tokInfo/1204 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
        const v1205 : UInt* = tokInfo/1204[0];
        const v1211 : UInt! = v1205 - v1205;
        const tokInfo'/1213 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1204, 0, v1211 );
        const tokInfos'/1214 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1213 );
        transfer.(v1205, Some tokenContract/725).to(highestBidder/754);
        const v1219 : UInt! = netBalance/1157 - netBalance/1157;
        transfer.(netBalance/1157, None).to(Seller/724);
        const v1220 : Bool! = true;
        emitLog(api("Auctioneer_acceptSale"))(v1220 );
        const v1227 : Bytes(20)! = "accepted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, outcome))(v1227, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
        const awaitingDecision/4433 : Bool! = false;
        const thisConsensusTime/4434 : UInt! = thisConsensusTime/1195;
        const tokenInfos/4435 : Array(Tuple(UInt, UInt, Bool), 1)! = tokInfos'/1214;
        const netBalance/4436 : UInt! = v1219;
        jump "_reachl_3"(Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, awaitingDecision/4433 : Bool, thisConsensusTime/4434 : UInt, tokenInfos/4435 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4436 : UInt ) Nothing }
      case Auctioneer_rejectSale0_416 as data_id/1253 : Tuple()/False: {
        setApiDetails("Auctioneer_rejectSale", [Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})], Some Auctioneer_rejectSale0_416, AIC_Case );
        checkPay(0, None);
        const tokInfo/1285 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
        const v1286 : UInt* = tokInfo/1285[0];
        const v1292 : UInt! = v1286 - v1286;
        const tokInfo'/1294 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1285, 0, v1292 );
        const tokInfos'/1295 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1294 );
        transfer.(v1286, Some tokenContract/725).to(Seller/724);
        const v1300 : UInt! = netBalance/1157 - netBalance/1157;
        transfer.(netBalance/1157, None).to(highestBidder/754);
        const v1301 : Bool! = false;
        emitLog(api("Auctioneer_rejectSale"))(v1301 );
        const v1308 : Bytes(20)! = "rejected\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, outcome))(v1308, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
        const awaitingDecision/4437 : Bool! = false;
        const thisConsensusTime/4438 : UInt! = thisConsensusTime/1195;
        const tokenInfos/4439 : Array(Tuple(UInt, UInt, Bool), 1)! = tokInfos'/1295;
        const netBalance/4440 : UInt! = v1300;
        jump "_reachl_3"(Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, awaitingDecision/4437 : Bool, thisConsensusTime/4438 : UInt, tokenInfos/4439 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4440 : UInt ) Nothing } } },
  "_reachi_5"(Tuple(UInt) )Null = internal mut (v4442 : Tuple(UInt)* ) => {
    emitPublish(5, Tuple(UInt) )
    {
      from = Seller/1309 : Address,
      secs = thisConsensusSecs/1311 : UInt,
      time = thisConsensusTime/1310 : UInt
      } := txn.metadata
    [Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool!, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt*, v1169 : UInt!] := state5 False
    const v4441 : UInt* = v4442[0];
    checkTime(v4441 : UInt )
    checkInterval(thisConsensusTime/1310 : UInt, thisConsensusSecs/1311 : UInt, (between [Just Left v1169] [Nothing]) )
    checkPay(0, None);
    const v1312 : Bool! = Seller/724 == Seller/1309;
    claim(CT_Require)(v1312, Just "sender correct");
    const tokInfo/1313 : Tuple(UInt, UInt, Bool)* = tokenInfos/1156[0];
    const v1314 : UInt* = tokInfo/1313[0];
    const v1320 : UInt! = v1314 - v1314;
    const tokInfo'/1322 : Tuple(UInt, UInt, Bool)! = Tuple.set(tokInfo/1313, 0, v1320 );
    const tokInfos'/1323 : Array(Tuple(UInt, UInt, Bool), 1)! = Array.set(tokenInfos/1156, 0, tokInfo'/1322 );
    transfer.(v1314, Some tokenContract/725).to(highestBidder/754);
    const v1328 : UInt! = netBalance/1157 - netBalance/1157;
    transfer.(netBalance/1157, None).to(Seller/724);
    const v1330 : Bytes(20)! = "accepted\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
    emitLog(event(Nothing, outcome))(v1330, v747, lastPrice/757, Seller/724, highestBidder/754, tokenContract/725 );
    const awaitingDecision/4443 : Bool! = false;
    const thisConsensusTime/4444 : UInt! = thisConsensusTime/1310;
    const tokenInfos/4445 : Array(Tuple(UInt, UInt, Bool), 1)! = tokInfos'/1323;
    const netBalance/4446 : UInt! = v1328;
    jump "_reachl_3"(Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, awaitingDecision/4443 : Bool, thisConsensusTime/4444 : UInt, tokenInfos/4445 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4446 : UInt ) Nothing },
  "_reachi_6"(Tuple(UInt, Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) )Null = internal mut (v4448 : Tuple(UInt, Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}))* ) => {
    emitPublish(6, Tuple(UInt, Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) )
    {
      from = highestBidder/830 : Address,
      secs = thisConsensusSecs/833 : UInt,
      time = thisConsensusTime/832 : UInt
      } := txn.metadata
    [Seller/724 : Address*, tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*, thisConsensusTime/743 : UInt*, v744 : UInt*, v745 : Contract*, v747 : Bytes(20)*, endTime/753 : UInt*, highestBidder/754 : Address*, isFirstBid/755 : Bool*, keepBidding/756 : Bool*, lastPrice/757 : UInt*, thisConsensusTime/758 : UInt*, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/765 : UInt*, v786 : Bool#] := state6 False
    const v4447 : UInt* = v4448[0];
    const .fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})! = v4448[1];
    checkTime(v4447 : UInt )
    checkInterval(thisConsensusTime/832 : UInt, thisConsensusSecs/833 : UInt, (between [Nothing] [Just Left endTime/753]) )
    switch (.fork103.msg/831 : Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) {
      case Auctioneer_stopAuction0_103 as data_id/834 : Tuple()/False: {
        setApiDetails("Auctioneer_stopAuction", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Auctioneer_stopAuction0_103, AIC_Case );
        checkPay(0, None);
        const v848 : Bytes(20)! = "endSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
        emitLog(event(Nothing, log))(v848, v744, lastPrice/757 );
        const v851 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])! = struct[(id, v744 ), (blockEnded, thisConsensusTime/832 ), (lastBid, lastPrice/757 ) ];
        emitLog(api("Auctioneer_stopAuction"))(v851 );
        const highestBidder/4449 : Address! = highestBidder/754;
        const isFirstBid/4450 : Bool! = isFirstBid/755;
        const keepBidding/4451 : Bool! = false;
        const lastPrice/4452 : UInt! = lastPrice/757;
        const thisConsensusTime/4453 : UInt! = thisConsensusTime/832;
        const lastConsensusTime/4454 : UInt! = thisConsensusTime/758;
        const tokenInfos/4455 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
        const netBalance/4456 : UInt! = netBalance/765;
        jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4449 : Address, isFirstBid/4450 : Bool, keepBidding/4451 : Bool, lastPrice/4452 : UInt, thisConsensusTime/4453 : UInt, lastConsensusTime/4454 : UInt, tokenInfos/4455 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4456 : UInt ) Nothing }
      case Bidder_bid0_103 as data_id/934 : Tuple(UInt)/True: {
        setApiDetails("Bidder_bid", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_bid0_103, AIC_Case );
        const bid/940 : UInt* = data_id/934[0];
        const v941 : Bool! = bid/940 > lastPrice/757;
        claim(CT_Require)(v941, Just "Your bid is too low, please try again");
        const v945 : UInt* = netBalance/765 + bid/940;
        checkPay(bid/940, None);
        const v966 : Tuple(Address, UInt)! = [highestBidder/754, lastPrice/757 ];
        emitLog(api("Bidder_bid"))(v966 );
        if isFirstBid/755 then {
          const v984 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v984, v744, bid/940 );
          const highestBidder/4457 : Address! = highestBidder/830;
          const isFirstBid/4458 : Bool! = false;
          const keepBidding/4459 : Bool! = keepBidding/756;
          const lastPrice/4460 : UInt! = bid/940;
          const thisConsensusTime/4461 : UInt! = thisConsensusTime/832;
          const lastConsensusTime/4462 : UInt! = thisConsensusTime/758;
          const tokenInfos/4463 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
          const netBalance/4464 : UInt! = v945;
          jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4457 : Address, isFirstBid/4458 : Bool, keepBidding/4459 : Bool, lastPrice/4460 : UInt, thisConsensusTime/4461 : UInt, lastConsensusTime/4462 : UInt, tokenInfos/4463 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4464 : UInt ) Nothing }
        else {
          const v979 : UInt! = v945 - lastPrice/757;
          transfer.(lastPrice/757, None).to(highestBidder/754);
          const v981 : Bytes(20)! = "bidSuccess\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
          emitLog(event(Nothing, log))(v981, v744, bid/940 );
          const highestBidder/4465 : Address! = highestBidder/830;
          const isFirstBid/4466 : Bool! = false;
          const keepBidding/4467 : Bool! = keepBidding/756;
          const lastPrice/4468 : UInt! = bid/940;
          const thisConsensusTime/4469 : UInt! = thisConsensusTime/832;
          const lastConsensusTime/4470 : UInt! = thisConsensusTime/758;
          const tokenInfos/4471 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
          const netBalance/4472 : UInt! = v979;
          jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4465 : Address, isFirstBid/4466 : Bool, keepBidding/4467 : Bool, lastPrice/4468 : UInt, thisConsensusTime/4469 : UInt, lastConsensusTime/4470 : UInt, tokenInfos/4471 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4472 : UInt ) Nothing }; }
      case Bidder_optIn0_103 as data_id/1034 : Tuple()/False: {
        setApiDetails("Bidder_optIn", [Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})], Some Bidder_optIn0_103, AIC_Case );
        const v1045 : UInt* = netBalance/765 + 1000000;
        checkPay(1000000, None);
        const v1088 : Bool! = v1045 >= 900000;
        if v1088 then {
          const v1089 : Address! = auctionInfo/726.Admin;
          const v1093 : UInt* = v1045 - 900000;
          transfer.(900000, None).to(v1089);
          const v1095 : Bool! = v1093 >= 100000;
          if v1095 then {
            const v1099 : UInt! = v1093 - 100000;
            transfer.(100000, None).to(Seller/724);
            const v1100 : Bool! = true;
            emitLog(api("Bidder_optIn"))(v1100 );
            const highestBidder/4473 : Address! = highestBidder/754;
            const isFirstBid/4474 : Bool! = isFirstBid/755;
            const keepBidding/4475 : Bool! = keepBidding/756;
            const lastPrice/4476 : UInt! = lastPrice/757;
            const thisConsensusTime/4477 : UInt! = thisConsensusTime/832;
            const lastConsensusTime/4478 : UInt! = thisConsensusTime/758;
            const tokenInfos/4479 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
            const netBalance/4480 : UInt! = v1099;
            jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4473 : Address, isFirstBid/4474 : Bool, keepBidding/4475 : Bool, lastPrice/4476 : UInt, thisConsensusTime/4477 : UInt, lastConsensusTime/4478 : UInt, tokenInfos/4479 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4480 : UInt ) Nothing }
          else {
            const v1107 : Bool! = true;
            emitLog(api("Bidder_optIn"))(v1107 );
            const highestBidder/4481 : Address! = highestBidder/754;
            const isFirstBid/4482 : Bool! = isFirstBid/755;
            const keepBidding/4483 : Bool! = keepBidding/756;
            const lastPrice/4484 : UInt! = lastPrice/757;
            const thisConsensusTime/4485 : UInt! = thisConsensusTime/832;
            const lastConsensusTime/4486 : UInt! = thisConsensusTime/758;
            const tokenInfos/4487 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
            const netBalance/4488 : UInt! = v1093;
            jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4481 : Address, isFirstBid/4482 : Bool, keepBidding/4483 : Bool, lastPrice/4484 : UInt, thisConsensusTime/4485 : UInt, lastConsensusTime/4486 : UInt, tokenInfos/4487 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4488 : UInt ) Nothing }; }
        else {
          const v1115 : Bool! = v1045 >= 100000;
          if v1115 then {
            const v1119 : UInt! = v1045 - 100000;
            transfer.(100000, None).to(Seller/724);
            const v1120 : Bool! = true;
            emitLog(api("Bidder_optIn"))(v1120 );
            const highestBidder/4489 : Address! = highestBidder/754;
            const isFirstBid/4490 : Bool! = isFirstBid/755;
            const keepBidding/4491 : Bool! = keepBidding/756;
            const lastPrice/4492 : UInt! = lastPrice/757;
            const thisConsensusTime/4493 : UInt! = thisConsensusTime/832;
            const lastConsensusTime/4494 : UInt! = thisConsensusTime/758;
            const tokenInfos/4495 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
            const netBalance/4496 : UInt! = v1119;
            jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4489 : Address, isFirstBid/4490 : Bool, keepBidding/4491 : Bool, lastPrice/4492 : UInt, thisConsensusTime/4493 : UInt, lastConsensusTime/4494 : UInt, tokenInfos/4495 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4496 : UInt ) Nothing }
          else {
            const v1127 : Bool! = true;
            emitLog(api("Bidder_optIn"))(v1127 );
            const highestBidder/4497 : Address! = highestBidder/754;
            const isFirstBid/4498 : Bool! = isFirstBid/755;
            const keepBidding/4499 : Bool! = keepBidding/756;
            const lastPrice/4500 : UInt! = lastPrice/757;
            const thisConsensusTime/4501 : UInt! = thisConsensusTime/832;
            const lastConsensusTime/4502 : UInt! = thisConsensusTime/758;
            const tokenInfos/4503 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
            const netBalance/4504 : UInt! = v1045;
            jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4497 : Address, isFirstBid/4498 : Bool, keepBidding/4499 : Bool, lastPrice/4500 : UInt, thisConsensusTime/4501 : UInt, lastConsensusTime/4502 : UInt, tokenInfos/4503 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4504 : UInt ) Nothing }; }; } } },
  "_reachi_7"(Tuple(UInt) )Null = internal mut (v4506 : Tuple(UInt)* ) => {
    emitPublish(7, Tuple(UInt) )
    {
      from = Seller/1134 : Address,
      secs = thisConsensusSecs/1136 : UInt,
      time = thisConsensusTime/1135 : UInt
      } := txn.metadata
    [Seller/724 : Address*, tokenContract/725 : Token!, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})!, thisConsensusTime/743 : UInt!, v744 : UInt!, v745 : Contract!, v747 : Bytes(20)!, endTime/753 : UInt*, highestBidder/754 : Address!, isFirstBid/755 : Bool!, keepBidding/756 : Bool!, lastPrice/757 : UInt!, thisConsensusTime/758 : UInt!, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1)!, netBalance/765 : UInt!, v786 : Bool#] := state6 False
    const v4505 : UInt* = v4506[0];
    checkTime(v4505 : UInt )
    checkInterval(thisConsensusTime/1135 : UInt, thisConsensusSecs/1136 : UInt, (between [Just Left endTime/753] [Nothing]) )
    checkPay(0, None);
    const v1137 : Bool! = Seller/724 == Seller/1134;
    claim(CT_Require)(v1137, Just "sender correct");
    const highestBidder/4507 : Address! = highestBidder/754;
    const isFirstBid/4508 : Bool! = isFirstBid/755;
    const keepBidding/4509 : Bool! = keepBidding/756;
    const lastPrice/4510 : UInt! = lastPrice/757;
    const thisConsensusTime/4511 : UInt! = thisConsensusTime/1135;
    const lastConsensusTime/4512 : UInt! = thisConsensusTime/758;
    const tokenInfos/4513 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
    const netBalance/4514 : UInt! = netBalance/765;
    jump "_reachl_2"(Seller/724 : Address, tokenContract/725 : Token, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), thisConsensusTime/743 : UInt, v744 : UInt, v745 : Contract, v747 : Bytes(20), endTime/753 : UInt, highestBidder/4507 : Address, isFirstBid/4508 : Bool, keepBidding/4509 : Bool, lastPrice/4510 : UInt, thisConsensusTime/4511 : UInt, lastConsensusTime/4512 : UInt, tokenInfos/4513 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4514 : UInt ) Nothing },
  "_reachl_2"(Address, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), UInt, UInt, Contract, Bytes(20), UInt, Address, Bool, Bool, UInt, UInt, UInt, Array(Tuple(UInt, UInt, Bool), 1), UInt )Null = internal mut (Seller/724 : Address*, tokenContract/725 : Token*, auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})*, thisConsensusTime/743 : UInt*, v744 : UInt*, v745 : Contract*, v747 : Bytes(20)*, endTime/753 : UInt*, highestBidder/754 : Address*, isFirstBid/755 : Bool*, keepBidding/756 : Bool*, lastPrice/757 : UInt*, thisConsensusTime/758 : UInt*, lastConsensusTime/759 : UInt!, tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/765 : UInt* ) => {
    const v779 : Bool* = endTime/753 > lastConsensusTime/759;
    const v783 : Bool! = (v779 ? keepBidding/756 : false);
    if v783 then {
      const v786 : Bool* = true;
      state6 <- [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (auctionInfo/726 : Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}), auctionInfo/726), (thisConsensusTime/743 : UInt, thisConsensusTime/743), (v744 : UInt, v744), (v745 : Contract, v745), (v747 : Bytes(20), v747), (endTime/753 : UInt, endTime/753), (highestBidder/754 : Address, highestBidder/754), (isFirstBid/755 : Bool, isFirstBid/755), (keepBidding/756 : Bool, true), (lastPrice/757 : UInt, lastPrice/757), (thisConsensusTime/758 : UInt, thisConsensusTime/758), (tokenInfos/764 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/764), (netBalance/765 : UInt, netBalance/765), (v786 : Bool, v786)]
      exit() }
    else {
      const v1145 : Bool! = (v779 ? keepBidding/756 : false);
      const v1148 : Bytes(20)! = "down\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL\NUL";
      emitLog(event(Nothing, down))(v1148, v744, lastPrice/757, Seller/724, v745, thisConsensusTime/743 );
      const awaitingDecision/4427 : Bool! = true;
      const thisConsensusTime/4428 : UInt! = thisConsensusTime/758;
      const tokenInfos/4429 : Array(Tuple(UInt, UInt, Bool), 1)! = tokenInfos/764;
      const netBalance/4430 : UInt! = netBalance/765;
      jump "_reachl_3"(Seller/724 : Address, tokenContract/725 : Token, v747 : Bytes(20), highestBidder/754 : Address, lastPrice/757 : UInt, v1145 : Bool, awaitingDecision/4427 : Bool, thisConsensusTime/4428 : UInt, tokenInfos/4429 : Array(Tuple(UInt, UInt, Bool), 1), netBalance/4430 : UInt ) Nothing }; },
  "_reachl_3"(Address, Token, Bytes(20), Address, UInt, Bool, Bool, UInt, Array(Tuple(UInt, UInt, Bool), 1), UInt )Null = internal mut (Seller/724 : Address*, tokenContract/725 : Token*, v747 : Bytes(20)*, highestBidder/754 : Address*, lastPrice/757 : UInt*, v1145 : Bool*, awaitingDecision/1149 : Bool!, thisConsensusTime/1150 : UInt!, tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1)*, netBalance/1157 : UInt* ) => {
    if awaitingDecision/1149 then {
      const v1169 : UInt* = thisConsensusTime/1150 + 50;
      state5 <- [(Seller/724 : Address, Seller/724), (tokenContract/725 : Token, tokenContract/725), (v747 : Bytes(20), v747), (highestBidder/754 : Address, highestBidder/754), (lastPrice/757 : UInt, lastPrice/757), (v1145 : Bool, v1145), (tokenInfos/1156 : Array(Tuple(UInt, UInt, Bool), 1), tokenInfos/1156), (netBalance/1157 : UInt, netBalance/1157), (v1169 : UInt, v1169)]
      exit() }
    else {
      const tokInfo/1332 : Tuple(UInt, UInt, Bool)! = tokenInfos/1156[0];
      const v1333 : UInt! = tokInfo/1332[0];
      transfer.(v1333, Some tokenContract/725).to(highestBidder/754);
      transfer.(netBalance/1157, None).to(Seller/724);
      Token.untrack(tokenContract/725)
      stateDestroy
      exit() }; },
  "_reachp_0"(Tuple(UInt, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})) )Null = external(Null) mut (v4416 : Tuple(UInt, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt}))* ) => {
    jump "_reachi_0"(v4416 : Tuple(UInt, Token, Object({"Admin": Address, "deadline": UInt, "description": Bytes(80), "id": UInt, "owner": Address, "price": UInt, "title": Bytes(20), "tokenID": UInt})) ) Just Nothing },
  "_reachp_1"(Tuple(UInt) )Null = external(Null) mut (v4418 : Tuple(UInt)* ) => {
    jump "_reachi_1"(v4418 : Tuple(UInt) ) Just Nothing },
  "_reachp_4"(Tuple(UInt, Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) )Null = external(Null) mut (v4432 : Tuple(UInt, Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()}))* ) => {
    jump "_reachi_4"(v4432 : Tuple(UInt, Data({"Auctioneer_acceptSale0_416": Tuple(), "Auctioneer_rejectSale0_416": Tuple()})) ) Just Nothing },
  "_reachp_5"(Tuple(UInt) )Null = external(Null) mut (v4442 : Tuple(UInt)* ) => {
    jump "_reachi_5"(v4442 : Tuple(UInt) ) Just Nothing },
  "_reachp_6"(Tuple(UInt, Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) )Null = external(Null) mut (v4448 : Tuple(UInt, Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()}))* ) => {
    jump "_reachi_6"(v4448 : Tuple(UInt, Data({"Auctioneer_stopAuction0_103": Tuple(), "Bidder_bid0_103": Tuple(UInt), "Bidder_optIn0_103": Tuple()})) ) Just Nothing },
  "_reachp_7"(Tuple(UInt) )Null = external(Null) mut (v4506 : Tuple(UInt)* ) => {
    jump "_reachi_7"(v4506 : Tuple(UInt) ) Just Nothing }
  }
