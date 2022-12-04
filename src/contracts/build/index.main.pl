#lang pl
EP {
  apis = {
    Just "Auction" = {
      created = ("Auction_created", IT_Fun [Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])] Null),
      ended = ("Auction_ended", IT_Fun [Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])] Null),
      getID = ("Auction_getID", IT_Fun [] UInt)
      }
    },
  exports = {
    
    },
  init = {
    maps = {
      
      }
    },
  m = {
    ("Admin", Nothing) = interact {
      deployed = IT_Fun [Contract] Null
      };
    send({
      amt = [0, ],
      as = (),
      saved = (),
      soloSend = True,
      when = true,
      which = 0
      })
    recv({
      didSendv = didPublish/22 : Bool,
      from = Admin/250 : Address,
      lct = Just 0,
      msg = (),
      out = (),
      prev = 0,
      secsv = thisConsensusSecs/252 : UInt,
      timev = thisConsensusTime/251 : UInt,
      which = 0
      })
    {
      checkPay(0, None);
      fromConsensus 1 (continue [(Admin/250 : Address, Admin/250)]) ;
      send({
        amt = [0, ],
        as = (),
        saved = (Admin/250 : Address ),
        soloSend = True,
        when = true,
        which = 1
        })
      recv({
        didSendv = didPublish/27 : Bool,
        from = Admin/253 : Address,
        lct = Just thisConsensusTime/251,
        msg = (),
        out = (),
        prev = 1,
        secsv = thisConsensusSecs/255 : UInt,
        timev = thisConsensusTime/254 : UInt,
        which = 1
        })
      {
        checkPay(0, None);
        const v256 : Bool! = Admin/250 == Admin/253;
        claim(CT_Require)(v256, Just "sender correct");
        const v257 : Contract! = getContract()();
        only(Right True) {
          protect<Null>("Admin".interact.deployed(v257 ));
           };
        emitLog(event(Nothing, passAddress))(Admin/250 );
        loopvar {
          auctionID/259 : UInt = 0,
          thisConsensusTime/260 : UInt = thisConsensusTime/254
          };
        invariant{
          () }
        while{
          
          return true; }
        {
          fromConsensus 4 (continue [(auctionID/259 : UInt, auctionID/259)]) ;
          recv({
            didSendv = didPublish/175 : Bool,
            from = v327 : Address,
            lct = Just thisConsensusTime/260,
            msg = (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()}) ),
            out = (),
            prev = 4,
            secsv = thisConsensusSecs/330 : UInt,
            timev = thisConsensusTime/329 : UInt,
            which = 3
            })
          {
            switch (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})) {
              case Auction_created0_42 as data_id/331 : Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]]))/True: {
                setApiDetails("Auction_created", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_created0_42, AIC_Case );
                checkPay(0, None);
                const obj/339 : Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])* = data_id/331[0];
                const v340 : Null! = null;
                emitLog(api("Auction_created"))(v340 );
                const v356 : UInt! = obj/339.id;
                const v357 : Contract! = obj/339.contractInfo;
                const v358 : UInt! = obj/339.blockCreated;
                const v359 : Address! = obj/339.owner;
                const v360 : Bytes(20)! = obj/339.title;
                const v361 : Bytes(80)! = obj/339.description;
                const v362 : UInt! = obj/339.price;
                const v363 : Token! = obj/339.tokenContract;
                const v364 : UInt! = obj/339.tokenID;
                emitLog(event(Nothing, create))(v356, v357, v358, v359, v360, v361, v362, v363, v364 );
                {
                  auctionID/259 : UInt = auctionID/259,
                  thisConsensusTime/260 : UInt = thisConsensusTime/329
                  }
                continue; }
              case Auction_ended0_42 as data_id/387 : Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))/True: {
                setApiDetails("Auction_ended", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_ended0_42, AIC_Case );
                checkPay(0, None);
                const obj/422 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])* = data_id/387[0];
                const v423 : Null! = null;
                emitLog(api("Auction_ended"))(v423 );
                const v433 : UInt! = obj/422.id;
                const v434 : UInt! = obj/422.blockEnded;
                const v435 : UInt! = obj/422.lastBid;
                emitLog(event(Nothing, end))(v433, v434, v435 );
                {
                  auctionID/259 : UInt = auctionID/259,
                  thisConsensusTime/260 : UInt = thisConsensusTime/329
                  }
                continue; }
              case Auction_getID0_42 as data_id/443 : Tuple()/False: {
                setApiDetails("Auction_getID", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_getID0_42, AIC_Case );
                checkPay(0, None);
                emitLog(api("Auction_getID"))(auctionID/259 );
                const auctionID/498 : UInt! = auctionID/259 + 1;
                {
                  auctionID/259 : UInt = auctionID/498,
                  thisConsensusTime/260 : UInt = thisConsensusTime/329
                  }
                continue; } } } }
        fromConsensus 3 (halt []) ;
         } },
    ("Auction_created", Just 4) = interact {
      in = IT_Fun [] Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])),
      out = IT_Fun [Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])),Null] Null
      };
    fromConsensus 4 (continue [(auctionID/259 : UInt, auctionID/259)]) ;
    only(Right False) {
      const _/280 : Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]]))* = protect<Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]]))>("Auction_created".interact.in());
      const v305 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})! = <Auction_created0_42 _/280>;
       };
    send({
      amt = [0, ],
      as = (v305 ),
      saved = (auctionID/259 : UInt ),
      soloSend = False,
      when = true,
      which = 3
      })
    recv({
      didSendv = didPublish/175 : Bool,
      from = v327 : Address,
      lct = Nothing,
      msg = (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/330 : UInt,
      timev = thisConsensusTime/329 : UInt,
      which = 3
      })
    {
      switch (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})) {
        case Auction_created0_42 as data_id/331 : Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]]))/True: {
          setApiDetails("Auction_created", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_created0_42, AIC_Case );
          checkPay(0, None);
          const obj/339 : Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])* = data_id/331[0];
          const v340 : Null! = null;
          const .api35.rngl/341 : Null* = emitLog(api("Auction_created"))(v340 );
          only(Right True) {
            local(Just v343 : Null) if didPublish/175 then {
              protect<Null>("Auction_created".interact.out(data_id/331, .api35.rngl/341 ));
               }
            else {
               };
             };
          const v356 : UInt! = obj/339.id;
          const v357 : Contract! = obj/339.contractInfo;
          const v358 : UInt! = obj/339.blockCreated;
          const v359 : Address! = obj/339.owner;
          const v360 : Bytes(20)! = obj/339.title;
          const v361 : Bytes(80)! = obj/339.description;
          const v362 : UInt! = obj/339.price;
          const v363 : Token! = obj/339.tokenContract;
          const v364 : UInt! = obj/339.tokenID;
          emitLog(event(Nothing, create))(v356, v357, v358, v359, v360, v361, v362, v363, v364 );
          const auctionID/759 : UInt! = auctionID/259;
          fromConsensus 4 (continue [(auctionID/259 : UInt, auctionID/759)]) ;
           }
        case Auction_ended0_42 as data_id/387 : Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))/False: {
           }
        case Auction_getID0_42 as data_id/443 : Tuple()/False: {
           } } },
    ("Auction_ended", Just 4) = interact {
      in = IT_Fun [] Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])),
      out = IT_Fun [Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])),Null] Null
      };
    fromConsensus 4 (continue [(auctionID/259 : UInt, auctionID/259)]) ;
    only(Right False) {
      const _/309 : Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))* = protect<Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))>("Auction_ended".interact.in());
      const v322 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})! = <Auction_ended0_42 _/309>;
       };
    send({
      amt = [0, ],
      as = (v322 ),
      saved = (auctionID/259 : UInt ),
      soloSend = False,
      when = true,
      which = 3
      })
    recv({
      didSendv = didPublish/175 : Bool,
      from = v327 : Address,
      lct = Nothing,
      msg = (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/330 : UInt,
      timev = thisConsensusTime/329 : UInt,
      which = 3
      })
    {
      switch (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})) {
        case Auction_created0_42 as data_id/331 : Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]]))/False: {
           }
        case Auction_ended0_42 as data_id/387 : Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))/True: {
          setApiDetails("Auction_ended", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_ended0_42, AIC_Case );
          checkPay(0, None);
          const obj/422 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])* = data_id/387[0];
          const v423 : Null! = null;
          const .api36.rngl/424 : Null* = emitLog(api("Auction_ended"))(v423 );
          only(Right True) {
            local(Just v426 : Null) if didPublish/175 then {
              protect<Null>("Auction_ended".interact.out(data_id/387, .api36.rngl/424 ));
               }
            else {
               };
             };
          const v433 : UInt! = obj/422.id;
          const v434 : UInt! = obj/422.blockEnded;
          const v435 : UInt! = obj/422.lastBid;
          emitLog(event(Nothing, end))(v433, v434, v435 );
          const auctionID/767 : UInt! = auctionID/259;
          fromConsensus 4 (continue [(auctionID/259 : UInt, auctionID/767)]) ;
           }
        case Auction_getID0_42 as data_id/443 : Tuple()/False: {
           } } },
    ("Auction_getID", Just 4) = interact {
      in = IT_Fun [] Tuple(),
      out = IT_Fun [Tuple(),UInt] Null
      };
    fromConsensus 4 (continue [(auctionID/259 : UInt, auctionID/259)]) ;
    only(Right False) {
      const _/272 : Tuple()* = protect<Tuple()>("Auction_getID".interact.in());
      const v276 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})! = <Auction_getID0_42 _/272>;
       };
    send({
      amt = [0, ],
      as = (v276 ),
      saved = (auctionID/259 : UInt ),
      soloSend = False,
      when = true,
      which = 3
      })
    recv({
      didSendv = didPublish/175 : Bool,
      from = v327 : Address,
      lct = Nothing,
      msg = (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()}) ),
      out = (),
      prev = 4,
      secsv = thisConsensusSecs/330 : UInt,
      timev = thisConsensusTime/329 : UInt,
      which = 3
      })
    {
      switch (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})) {
        case Auction_created0_42 as data_id/331 : Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]]))/False: {
           }
        case Auction_ended0_42 as data_id/387 : Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))/False: {
           }
        case Auction_getID0_42 as data_id/443 : Tuple()/True: {
          setApiDetails("Auction_getID", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_getID0_42, AIC_Case );
          checkPay(0, None);
          const .api34.rngl/493 : UInt* = emitLog(api("Auction_getID"))(auctionID/259 );
          only(Right True) {
            local(Just v495 : Null) if didPublish/175 then {
              protect<Null>("Auction_getID".interact.out(data_id/443, .api34.rngl/493 ));
               }
            else {
               };
             };
          const auctionID/498 : UInt! = auctionID/259 + 1;
          const auctionID/775 : UInt! = auctionID/498;
          fromConsensus 4 (continue [(auctionID/259 : UInt, auctionID/775)]) ;
           } } }
    }
  }
CP {
  apis = {
    "Auction_created" = {
      4 = {
        compile = AIC_Case,
        mcase_id = Just Auction_created0_42,
        msg_tys = [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})],
        ret = Null,
        which = 3
        }
      },
    "Auction_ended" = {
      4 = {
        compile = AIC_Case,
        mcase_id = Just Auction_ended0_42,
        msg_tys = [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})],
        ret = Null,
        which = 3
        }
      },
    "Auction_getID" = {
      4 = {
        compile = AIC_Case,
        mcase_id = Just Auction_getID0_42,
        msg_tys = [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})],
        ret = UInt,
        which = 3
        }
      }
    },
  events = {
    Nothing = {
      create = [UInt, Contract, UInt, Address, Bytes(20), Bytes(80), UInt, Token, UInt],
      end = [UInt, UInt, UInt],
      passAddress = [Address]
      }
    },
  handlers = {
    0 = {
      Admin/250 : Address,
      (between [Nothing] [Nothing]),
      last = 0,
      [],
      [],
      [],
      [],
      timev = thisConsensusTime/251 : UInt,
      secsv = thisConsensusSecs/252 : UInt,
      {
        checkPay(0, None);
        (from 1, (continue [(Admin/250 : Address, Admin/250)])) }
       },
    1 = {
      Admin/253 : Address,
      (between [Nothing] [Nothing]),
      last = 1,
      [Admin/250 : Address*],
      [Address],
      [],
      [],
      timev = thisConsensusTime/254 : UInt,
      secsv = thisConsensusSecs/255 : UInt,
      {
        checkPay(0, None);
        const v256 : Bool! = Admin/250 == Admin/253;
        claim(CT_Require)(v256, Just "sender correct");
        emitLog(event(Nothing, passAddress))(Admin/250 );
        (jump! 2 [] {
          auctionID/259 : UInt = 0,
          thisConsensusTime/260 : UInt = thisConsensusTime/254
          }) }
       },
    2 = {
      loop!,
      [],
      [auctionID/259 : UInt*, thisConsensusTime/260 : UInt#],
      {
        (from 4, (continue [(auctionID/259 : UInt, auctionID/259)])) }
       },
    3 = {
      v327 : Address,
      (between [Nothing] [Nothing]),
      last = 4,
      [auctionID/259 : UInt*],
      [UInt],
      [.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})!],
      [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})],
      timev = thisConsensusTime/329 : UInt,
      secsv = thisConsensusSecs/330 : UInt,
      {
        switch (.fork42.msg/328 : Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})) {
          case Auction_created0_42 as data_id/331 : Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]]))/True: {
            setApiDetails("Auction_created", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_created0_42, AIC_Case );
            checkPay(0, None);
            const obj/339 : Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])* = data_id/331[0];
            const v340 : Null! = null;
            emitLog(api("Auction_created"))(v340 );
            const v356 : UInt! = obj/339.id;
            const v357 : Contract! = obj/339.contractInfo;
            const v358 : UInt! = obj/339.blockCreated;
            const v359 : Address! = obj/339.owner;
            const v360 : Bytes(20)! = obj/339.title;
            const v361 : Bytes(80)! = obj/339.description;
            const v362 : UInt! = obj/339.price;
            const v363 : Token! = obj/339.tokenContract;
            const v364 : UInt! = obj/339.tokenID;
            emitLog(event(Nothing, create))(v356, v357, v358, v359, v360, v361, v362, v363, v364 );
            (jump! 2 [] {
              auctionID/259 : UInt = auctionID/259,
              thisConsensusTime/260 : UInt = thisConsensusTime/329
              }) }
          case Auction_ended0_42 as data_id/387 : Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]]))/True: {
            setApiDetails("Auction_ended", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_ended0_42, AIC_Case );
            checkPay(0, None);
            const obj/422 : Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])* = data_id/387[0];
            const v423 : Null! = null;
            emitLog(api("Auction_ended"))(v423 );
            const v433 : UInt! = obj/422.id;
            const v434 : UInt! = obj/422.blockEnded;
            const v435 : UInt! = obj/422.lastBid;
            emitLog(event(Nothing, end))(v433, v434, v435 );
            (jump! 2 [] {
              auctionID/259 : UInt = auctionID/259,
              thisConsensusTime/260 : UInt = thisConsensusTime/329
              }) }
          case Auction_getID0_42 as data_id/443 : Tuple()/False: {
            setApiDetails("Auction_getID", [Data({"Auction_created0_42": Tuple(Struct([['"id"', UInt], ['"contractInfo"', Contract], ['"blockCreated"', UInt], ['"owner"', Address], ['"title"', Bytes(20)], ['"description"', Bytes(80)], ['"price"', UInt], ['"tokenContract"', Token], ['"tokenID"', UInt]])), "Auction_ended0_42": Tuple(Struct([['"id"', UInt], ['"blockEnded"', UInt], ['"lastBid"', UInt]])), "Auction_getID0_42": Tuple()})], Some Auction_getID0_42, AIC_Case );
            checkPay(0, None);
            emitLog(api("Auction_getID"))(auctionID/259 );
            const auctionID/498 : UInt! = auctionID/259 + 1;
            (jump! 2 [] {
              auctionID/259 : UInt = auctionID/498,
              thisConsensusTime/260 : UInt = thisConsensusTime/329
              }) } } }
       }
    },
  init = {
    maps = {
      
      }
    },
  views = {
    vis = {
      1 = (view [Admin/250 : Address] {
        
        }),
      4 = (view [auctionID/259 : UInt] {
        
        })
      },
    vs = {
      
      }
    }
  }
