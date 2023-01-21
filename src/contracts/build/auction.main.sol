// Automatically generated with Reach 0.1.13 (f79282c4)
pragma abicoder v2;
pragma solidity ^0.8.17;

/**
 * @dev Interface of the ERC20 standard as defined in the EIP.
 */
interface IERC20 {
    /**
     * @dev Returns the amount of tokens in existence.
     */
    function totalSupply() external view returns (uint256);

    /**
     * @dev Returns the amount of tokens owned by `account`.
     */
    function balanceOf(address account) external view returns (uint256);

    /**
     * @dev Moves `amount` tokens from the caller's account to `to`.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transfer(address to, uint256 amount) external returns (bool);

    /**
     * @dev Returns the remaining number of tokens that `spender` will be
     * allowed to spend on behalf of `owner` through {transferFrom}. This is
     * zero by default.
     *
     * This value changes when {approve} or {transferFrom} are called.
     */
    function allowance(address owner, address spender) external view returns (uint256);

    /**
     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * IMPORTANT: Beware that changing an allowance with this method brings the risk
     * that someone may use both the old and the new allowance by unfortunate
     * transaction ordering. One possible solution to mitigate this race
     * condition is to first reduce the spender's allowance to 0 and set the
     * desired value afterwards:
     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729
     *
     * Emits an {Approval} event.
     */
    function approve(address spender, uint256 amount) external returns (bool);

    /**
     * @dev Moves `amount` tokens from `from` to `to` using the
     * allowance mechanism. `amount` is then deducted from the caller's
     * allowance.
     *
     * Returns a boolean value indicating whether the operation succeeded.
     *
     * Emits a {Transfer} event.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) external returns (bool);

    /**
     * @dev Emitted when `value` tokens are moved from one account (`from`) to
     * another (`to`).
     *
     * Note that `value` may be zero.
     */
    event Transfer(address indexed from, address indexed to, uint256 value);

    /**
     * @dev Emitted when the allowance of a `spender` for an `owner` is set by
     * a call to {approve}. `value` is the new allowance.
     */
    event Approval(address indexed owner, address indexed spender, uint256 value);
}

/**
 * @dev Interface for the optional metadata functions from the ERC20 standard.
 *
 * _Available since v4.1._
 */
interface IERC20Metadata is IERC20 {
    /**
     * @dev Returns the name of the token.
     */
    function name() external view returns (string memory);

    /**
     * @dev Returns the symbol of the token.
     */
    function symbol() external view returns (string memory);

    /**
     * @dev Returns the decimals places of the token.
     */
    function decimals() external view returns (uint8);
}

/**
 * @dev Provides information about the current execution context, including the
 * sender of the transaction and its data. While these are generally available
 * via msg.sender and msg.data, they should not be accessed in such a direct
 * manner, since when dealing with meta-transactions the account sending and
 * paying for execution may not be the actual sender (as far as an application
 * is concerned).
 *
 * This contract is only required for intermediate, library-like contracts.
 */
abstract contract Context {
    function _msgSender() internal view virtual returns (address) {
        return msg.sender;
    }

    function _msgData() internal view virtual returns (bytes calldata) {
        return msg.data;
    }
}

/**
 * @dev Implementation of the {IERC20} interface.
 *
 * This implementation is agnostic to the way tokens are created. This means
 * that a supply mechanism has to be added in a derived contract using {_mint}.
 * For a generic mechanism see {ERC20PresetMinterPauser}.
 *
 * TIP: For a detailed writeup see our guide
 * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How
 * to implement supply mechanisms].
 *
 * We have followed general OpenZeppelin Contracts guidelines: functions revert
 * instead returning `false` on failure. This behavior is nonetheless
 * conventional and does not conflict with the expectations of ERC20
 * applications.
 *
 * Additionally, an {Approval} event is emitted on calls to {transferFrom}.
 * This allows applications to reconstruct the allowance for all accounts just
 * by listening to said events. Other implementations of the EIP may not emit
 * these events, as it isn't required by the specification.
 *
 * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}
 * functions have been added to mitigate the well-known issues around setting
 * allowances. See {IERC20-approve}.
 */
contract ERC20 is Context, IERC20, IERC20Metadata {
    mapping(address => uint256) private _balances;

    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name;
    string private _symbol;

    /**
     * @dev Sets the values for {name} and {symbol}.
     *
     * The default value of {decimals} is 18. To select a different value for
     * {decimals} you should overload it.
     *
     * All two of these values are immutable: they can only be set once during
     * construction.
     */
    constructor(string memory name_, string memory symbol_) {
        _name = name_;
        _symbol = symbol_;
    }

    /**
     * @dev Returns the name of the token.
     */
    function name() public view virtual override returns (string memory) {
        return _name;
    }

    /**
     * @dev Returns the symbol of the token, usually a shorter version of the
     * name.
     */
    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    /**
     * @dev Returns the number of decimals used to get its user representation.
     * For example, if `decimals` equals `2`, a balance of `505` tokens should
     * be displayed to a user as `5.05` (`505 / 10 ** 2`).
     *
     * Tokens usually opt for a value of 18, imitating the relationship between
     * Ether and Wei. This is the value {ERC20} uses, unless this function is
     * overridden;
     *
     * NOTE: This information is only used for _display_ purposes: it in
     * no way affects any of the arithmetic of the contract, including
     * {IERC20-balanceOf} and {IERC20-transfer}.
     */
    function decimals() public view virtual override returns (uint8) {
        return 18;
    }

    /**
     * @dev See {IERC20-totalSupply}.
     */
    function totalSupply() public view virtual override returns (uint256) {
        return _totalSupply;
    }

    /**
     * @dev See {IERC20-balanceOf}.
     */
    function balanceOf(address account) public view virtual override returns (uint256) {
        return _balances[account];
    }

    /**
     * @dev See {IERC20-transfer}.
     *
     * Requirements:
     *
     * - `to` cannot be the zero address.
     * - the caller must have a balance of at least `amount`.
     */
    function transfer(address to, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _transfer(owner, to, amount);
        return true;
    }

    /**
     * @dev See {IERC20-allowance}.
     */
    function allowance(address owner, address spender) public view virtual override returns (uint256) {
        return _allowances[owner][spender];
    }

    /**
     * @dev See {IERC20-approve}.
     *
     * NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on
     * `transferFrom`. This is semantically equivalent to an infinite approval.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function approve(address spender, uint256 amount) public virtual override returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, amount);
        return true;
    }

    /**
     * @dev See {IERC20-transferFrom}.
     *
     * Emits an {Approval} event indicating the updated allowance. This is not
     * required by the EIP. See the note at the beginning of {ERC20}.
     *
     * NOTE: Does not update the allowance if the current allowance
     * is the maximum `uint256`.
     *
     * Requirements:
     *
     * - `from` and `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     * - the caller must have allowance for ``from``'s tokens of at least
     * `amount`.
     */
    function transferFrom(
        address from,
        address to,
        uint256 amount
    ) public virtual override returns (bool) {
        address spender = _msgSender();
        _spendAllowance(from, spender, amount);
        _transfer(from, to, amount);
        return true;
    }

    /**
     * @dev Atomically increases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     */
    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {
        address owner = _msgSender();
        _approve(owner, spender, _allowances[owner][spender] + addedValue);
        return true;
    }

    /**
     * @dev Atomically decreases the allowance granted to `spender` by the caller.
     *
     * This is an alternative to {approve} that can be used as a mitigation for
     * problems described in {IERC20-approve}.
     *
     * Emits an {Approval} event indicating the updated allowance.
     *
     * Requirements:
     *
     * - `spender` cannot be the zero address.
     * - `spender` must have allowance for the caller of at least
     * `subtractedValue`.
     */
    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {
        address owner = _msgSender();
        uint256 currentAllowance = _allowances[owner][spender];
        require(currentAllowance >= subtractedValue, "ERC20: decreased allowance below zero");
        unchecked {
            _approve(owner, spender, currentAllowance - subtractedValue);
        }

        return true;
    }

    /**
     * @dev Moves `amount` of tokens from `sender` to `recipient`.
     *
     * This internal function is equivalent to {transfer}, and can be used to
     * e.g. implement automatic token fees, slashing mechanisms, etc.
     *
     * Emits a {Transfer} event.
     *
     * Requirements:
     *
     * - `from` cannot be the zero address.
     * - `to` cannot be the zero address.
     * - `from` must have a balance of at least `amount`.
     */
    function _transfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {
        require(from != address(0), "ERC20: transfer from the zero address");
        require(to != address(0), "ERC20: transfer to the zero address");

        _beforeTokenTransfer(from, to, amount);

        uint256 fromBalance = _balances[from];
        require(fromBalance >= amount, "ERC20: transfer amount exceeds balance");
        unchecked {
            _balances[from] = fromBalance - amount;
        }
        _balances[to] += amount;

        emit Transfer(from, to, amount);

        _afterTokenTransfer(from, to, amount);
    }

    /** @dev Creates `amount` tokens and assigns them to `account`, increasing
     * the total supply.
     *
     * Emits a {Transfer} event with `from` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     */
    function _mint(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: mint to the zero address");

        _beforeTokenTransfer(address(0), account, amount);

        _totalSupply += amount;
        _balances[account] += amount;
        emit Transfer(address(0), account, amount);

        _afterTokenTransfer(address(0), account, amount);
    }

    /**
     * @dev Destroys `amount` tokens from `account`, reducing the
     * total supply.
     *
     * Emits a {Transfer} event with `to` set to the zero address.
     *
     * Requirements:
     *
     * - `account` cannot be the zero address.
     * - `account` must have at least `amount` tokens.
     */
    function _burn(address account, uint256 amount) internal virtual {
        require(account != address(0), "ERC20: burn from the zero address");

        _beforeTokenTransfer(account, address(0), amount);

        uint256 accountBalance = _balances[account];
        require(accountBalance >= amount, "ERC20: burn amount exceeds balance");
        unchecked {
            _balances[account] = accountBalance - amount;
        }
        _totalSupply -= amount;

        emit Transfer(account, address(0), amount);

        _afterTokenTransfer(account, address(0), amount);
    }

    /**
     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.
     *
     * This internal function is equivalent to `approve`, and can be used to
     * e.g. set automatic allowances for certain subsystems, etc.
     *
     * Emits an {Approval} event.
     *
     * Requirements:
     *
     * - `owner` cannot be the zero address.
     * - `spender` cannot be the zero address.
     */
    function _approve(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        require(owner != address(0), "ERC20: approve from the zero address");
        require(spender != address(0), "ERC20: approve to the zero address");

        _allowances[owner][spender] = amount;
        emit Approval(owner, spender, amount);
    }

    /**
     * @dev Spend `amount` form the allowance of `owner` toward `spender`.
     *
     * Does not update the allowance amount in case of infinite allowance.
     * Revert if not enough allowance is available.
     *
     * Might emit an {Approval} event.
     */
    function _spendAllowance(
        address owner,
        address spender,
        uint256 amount
    ) internal virtual {
        uint256 currentAllowance = allowance(owner, spender);
        if (currentAllowance != type(uint256).max) {
            require(currentAllowance >= amount, "ERC20: insufficient allowance");
            unchecked {
                _approve(owner, spender, currentAllowance - amount);
            }
        }
    }

    /**
     * @dev Hook that is called before any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * will be transferred to `to`.
     * - when `from` is zero, `amount` tokens will be minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}

    /**
     * @dev Hook that is called after any transfer of tokens. This includes
     * minting and burning.
     *
     * Calling conditions:
     *
     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens
     * has been transferred to `to`.
     * - when `from` is zero, `amount` tokens have been minted for `to`.
     * - when `to` is zero, `amount` of ``from``'s tokens have been burned.
     * - `from` and `to` are never both zero.
     *
     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].
     */
    function _afterTokenTransfer(
        address from,
        address to,
        uint256 amount
    ) internal virtual {}
}
/*
  ReachToken essentially emulates Algorand Standard Assets on Ethereum, but doesn't include things like clawback or a separation of management and creator.
 */
contract ReachToken is ERC20 {
  address private _creator;
  string private _url;
  string private _metadata;
  uint8 private _decimals;

  constructor (
    string memory name_,
    string memory symbol_,
    string memory url_,
    string memory metadata_,
    uint256 supply_,
    uint256 decimals_
  ) ERC20(name_, symbol_) {
    _creator = _msgSender();
    _mint(_creator, supply_);
    _url = url_;
    _metadata = metadata_;
    _decimals = uint8(decimals_);
  }

  function url() public view returns (string memory) { return _url; }

  function metadata() public view returns (string memory) { return _metadata; }

  function decimals() public view override returns (uint8) { return _decimals; }

  function burn(uint256 amount) public virtual returns (bool) {
    require(_msgSender() == _creator, "must be creator");
    _burn(_creator, amount);
    return true;
  }

  function destroy() public virtual {
    require(_msgSender() == _creator, "must be creator");
    require(totalSupply() == 0, "must be no supply");
    selfdestruct(payable(_creator));
  }
}

// Generated code includes meaning of numbers
error ReachError(uint256 msg);

contract Stdlib {
  function safeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x + y) >= x, "add overflow"); }
  function safeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require((z = x - y) <= x, "sub wraparound"); }
  function safeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y == 0 || (z = x * y) / y == x, "mul overflow"); }
  function safeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x / y; }
  function safeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    require(y != 0, "div by zero"); z = x % y; }

  function unsafeAdd(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x + y; } }
  function unsafeSub(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x - y; } }
  function unsafeMul(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x * y; } }
  function unsafeDiv(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x / y; } }
  function unsafeMod(uint256 x, uint256 y) internal pure returns (uint256 z) {
    unchecked { z = x % y; } }

  function safeSqrt(uint256 y) internal pure returns (uint256 z) {
    if (y > 3) {
      z = y;
      uint256 x = y / 2 + 1;
      while (x < z) {
        z = x;
        x = (y / x + x) / 2;
      }
    } else if (y != 0) {
      z = 1;
    }
  }

  // From OpenZeppelin --- MIT license
  function uintToStringDyn(uint256 value) internal pure returns (string memory) {
        // Inspired by OraclizeAPI's implementation - MIT licence
        // https://github.com/oraclize/ethereum-api/blob/b42146b063c7d6ee1358846c198246239e9360e8/oraclizeAPI_0.4.25.sol

        if (value == 0) {
            return "0";
        }
        uint256 temp = value;
        uint256 digits;
        while (temp != 0) {
            digits++;
            temp /= 10;
        }
        bytes memory buffer = new bytes(digits);
        while (value != 0) {
            digits -= 1;
            buffer[digits] = bytes1(uint8(48 + uint256(value % 10)));
            value /= 10;
        }
        return string(buffer);
    }

  function reachRequire(bool succ, uint256 errMsg) internal pure {
    if ( ! succ ) {
      revert ReachError(errMsg);
    }
  }

  function checkFunReturn(bool succ, bytes memory returnData, uint256 errMsg) internal pure returns (bytes memory) {
    if (succ) {
      return returnData;
    } else {
      if (returnData.length > 0) {
        assembly {
          let returnData_size := mload(returnData)
          revert(add(32, returnData), returnData_size)
        }
      } else {
        revert ReachError(errMsg);
      }
    }
  }

  function tokenAllowance(address payable token, address owner, address spender) internal returns (uint256 amt) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.allowance.selector, owner, spender));
    checkFunReturn(ok, ret, 0 /*'token.allowance'*/);
    amt = abi.decode(ret, (uint256));
  }

  function tokenTransferFrom(address payable token, address sender, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transferFrom.selector, sender, recipient, amt));
    checkFunReturn(ok, ret, 1 /*'token.transferFrom'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenTransfer(address payable token, address recipient, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.transfer.selector, recipient, amt));
    checkFunReturn(ok, ret, 2 /*'token.transfer'*/);
    res = abi.decode(ret, (bool));
  }
  function safeTokenTransfer(address payable token, address recipient, uint256 amt) internal {
    require(tokenTransfer(token, recipient, amt));
  }

  function reachTokenBurn(address payable token, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.burn.selector, amt));
    checkFunReturn(ok, ret, 3 /*'token.burn'*/);
    res = abi.decode(ret, (bool));
  }
  function safeReachTokenBurn(address payable token, uint256 amt) internal {
    require(reachTokenBurn(token, amt));
  }

  function reachTokenDestroy(address payable token) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(ReachToken.destroy.selector));
    checkFunReturn(ok, ret, 4 /*'token.destroy'*/);
    res = true;
  }
  function safeReachTokenDestroy(address payable token) internal {
    require(reachTokenDestroy(token));
  }

  function readPayAmt(address sender, address payable token) internal returns (uint256 amt) {
    amt = tokenAllowance(token, sender, address(this));
    require(checkPayAmt(sender, token, amt));
  }

  function checkPayAmt(address sender, address payable token, uint256 amt) internal returns (bool) {
    return tokenTransferFrom(token, sender, address(this), amt);
  }

  function tokenApprove(address payable token, address spender, uint256 amt) internal returns (bool res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0)}(abi.encodeWithSelector(IERC20.approve.selector, spender, amt));
    checkFunReturn(ok, ret, 5 /*'token.approve'*/);
    res = abi.decode(ret, (bool));
  }

  function tokenBalanceOf(address payable token, address owner) internal returns (uint256 res) {
    (bool ok, bytes memory ret) = token.call{value: uint256(0) }(abi.encodeWithSelector(IERC20.balanceOf.selector, owner));
    checkFunReturn(ok, ret, 6 /*'token.balanceOf'*/);
    res = abi.decode(ret, (uint256));
  }
}

struct T0 {
  uint256 id;
  uint256 blockEnded;
  uint256 lastBid;
  }
struct T1 {
  address payable elem0;
  uint256 elem1;
  }
enum _enum_T3 {Auctioneer_acceptSale0_444, Auctioneer_rejectSale0_444}
struct T3 {
  _enum_T3 which;
  bool _Auctioneer_acceptSale0_444;
  bool _Auctioneer_rejectSale0_444;
  }
struct T4 {
  uint256 elem0;
  T3 elem1;
  }
struct T5 {
  uint256 elem0;
  }
enum _enum_T6 {Auctioneer_stopAuction0_123, Bidder_bid0_123, Bidder_optIn0_123}
struct T6 {
  _enum_T6 which;
  bool _Auctioneer_stopAuction0_123;
  T5 _Bidder_bid0_123;
  bool _Bidder_optIn0_123;
  }
struct T7 {
  uint256 elem0;
  T6 elem1;
  }
struct T8 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T10 {
  address payable v701;
  address payable v702;
  bytes20 v749;
  address payable v772;
  uint256 v775;
  uint256 v1250;
  T8[1] v1259;
  uint256 v1260;
  }
struct T11 {
  address payable v701;
  address payable v702;
  address payable v704;
  bool v723;
  uint256 v728;
  address payable v741;
  uint256 v747;
  address payable v748;
  bytes20 v749;
  uint256 v769;
  T0 v771;
  address payable v772;
  bool v773;
  bool v774;
  uint256 v775;
  T8[1] v782;
  uint256 v783;
  }
struct T12 {
  bytes32 elem0;
  bytes32 elem1;
  bytes16 elem2;
  }
struct T13 {
  uint256 _deadline;
  T12 _description;
  address payable _owner;
  uint256 _price;
  bytes20 _title;
  }
struct T14 {
  uint256 elem0;
  address payable elem1;
  T13 elem2;
  address payable elem3;
  }
struct T15 {
  address payable v701;
  address payable v702;
  T13 v703;
  address payable v704;
  T8[1] v709;
  }
struct T16 {
  uint256 elem0;
  uint256 elem1;
  }
struct T17 {
  uint256 elem0;
  address payable elem1;
  }
struct T18 {
  uint256 id;
  address payable contractInfo;
  uint256 blockCreated;
  address payable owner;
  bytes20 title;
  T12 description;
  uint256 price;
  address payable tokenId;
  }
struct T19 {
  uint256 elem0;
  bool elem1;
  }
struct T20 {
  address payable elem0;
  address payable elem1;
  address payable elem2;
  bool elem3;
  uint256 elem4;
  address payable elem5;
  uint256 elem6;
  address payable elem7;
  bytes20 elem8;
  uint256 elem9;
  T0 elem10;
  address payable elem11;
  bool elem12;
  bool elem13;
  uint256 elem14;
  uint256 elem15;
  T8[1] elem16;
  uint256 elem17;
  }
struct T21 {
  address payable elem0;
  address payable elem1;
  bytes20 elem2;
  address payable elem3;
  uint256 elem4;
  uint256 elem5;
  bool elem6;
  bool elem7;
  uint256 elem8;
  T8[1] elem9;
  uint256 elem10;
  }
interface I0929d31897a8bf4ecce6b4113b39c0cdd711c6ed {
  function Auctions_updateHighestBidder(uint256, address payable) external payable returns (bool);
  }
interface I3defb57028d2e0220b6fe823333446eaca249a55 {
  function Auctions_getAdminAddress() external payable returns (address payable);
  }
interface I65c391f23b0f0e4ab619548bba5869629951b155 {
  function Auctions_getID() external payable returns (uint256);
  }
interface I71ecfd913dbeb55e00ddeba69e01686608f7a8ff {
  function Auctions_ended(T0 memory) external payable returns (bool);
  }
interface Icd5b779c46c4fd20ee1204cb5762604a51f26777 {
  function Auctions_created(T18 memory) external payable returns (bool);
  }
contract ReachContract is Stdlib {
  uint256 current_step;
  uint256 current_time;
    bytes current_svbs;
  uint256 creation_time;
     bool locked;
  function _reachCreationTime() external view returns (uint256) { return creation_time; }
  function _reachCurrentTime() external view returns (uint256) { return current_time; }
  function _reachCurrentState() external view returns (uint256, bytes memory) { return (current_step, current_svbs); }
  function array_set9(T8[1] memory arr, uint256 idx, T8 memory val) internal  returns (T8[1] memory arrp) {
    for (uint256 i = 0; i < 1; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T14 _a);
  event _reach_e1(address _who, T5 _a);
  event _reach_e4(address _who, T4 _a);
  event _reach_e5(address _who, T7 _a);
  event _reach_oe_v1006(T19 v0);
  event _reach_oe_v1017(T1 v0);
  event _reach_oe_v1030(T19 v0);
  event _reach_oe_v1041(T1 v0);
  event _reach_oe_v1195(bool v0);
  event _reach_oe_v1202(bool v0);
  event _reach_oe_v1215(bool v0);
  event _reach_oe_v1222(bool v0);
  event _reach_oe_v1235(T19 v0);
  event _reach_oe_v1302(bool v0);
  event _reach_oe_v1332(bool v0);
  event _reach_oe_v724(T16 v0);
  event _reach_oe_v737(T17 v0);
  event _reach_oe_v756(T19 v0);
  event _reach_oe_v850(T0 v0);
  event accepted(bytes20 v0, uint256 v1, address payable v2, address payable v3, address payable v4);
  event bidSuccess(uint256 v0, uint256 v1, address payable v2, bytes20 v3);
  event created(uint256 v0, address payable v1);
  event down(uint256 v0, uint256 v1, address payable v2, address payable v3, uint256 v4, bytes20 v5);
  event endSuccess(uint256 v0, uint256 v1);
  event optInSuccess(uint256 v0, address payable v1);
  event rejected(bytes20 v0, uint256 v1, address payable v2, address payable v3, address payable v4);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_Auctioneer_acceptSale;
    bool _reachr_Auctioneer_rejectSale;
    T0 _reachr_Auctioneer_stopAuction;
    T1 _reachr_Bidder_bid;
    bool _reachr_Bidder_optIn;
    bool _reachr_live;
    }
  struct _F4276 {
    bool v4243;
    T3 v4244;
    }
  function _reacha_Auctioneer_acceptSale(bool _a, Memory memory _Memory) internal  {
    _F4276 memory _f;
    _f.v4244.which = _enum_T3.Auctioneer_acceptSale0_444;
    _f.v4244._Auctioneer_acceptSale0_444 = _f.v4243;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4244;
    _reachi_4(_ja, _Memory);
    }
  struct _F4277 {
    bool v4247;
    T3 v4248;
    }
  function _reacha_Auctioneer_rejectSale(bool _a, Memory memory _Memory) internal  {
    _F4277 memory _f;
    _f.v4248.which = _enum_T3.Auctioneer_rejectSale0_444;
    _f.v4248._Auctioneer_rejectSale0_444 = _f.v4247;
    T4  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4248;
    _reachi_4(_ja, _Memory);
    }
  struct _F4278 {
    bool v4251;
    T6 v4252;
    }
  function _reacha_Auctioneer_stopAuction(bool _a, Memory memory _Memory) internal  {
    _F4278 memory _f;
    _f.v4252.which = _enum_T6.Auctioneer_stopAuction0_123;
    _f.v4252._Auctioneer_stopAuction0_123 = _f.v4251;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4252;
    _reachi_5(_ja, _Memory);
    }
  struct _F4279 {
    T5 v4256;
    T6 v4257;
    }
  function _reacha_Bidder_bid(uint256 _a, Memory memory _Memory) internal  {
    _F4279 memory _f;
    _f.v4256.elem0 = _a;
    _f.v4257.which = _enum_T6.Bidder_bid0_123;
    _f.v4257._Bidder_bid0_123 = _f.v4256;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4257;
    _reachi_5(_ja, _Memory);
    }
  struct _F4280 {
    bool v4261;
    T6 v4262;
    }
  function _reacha_Bidder_optIn(bool _a, Memory memory _Memory) internal  {
    _F4280 memory _f;
    _f.v4262.which = _enum_T6.Bidder_optIn0_123;
    _f.v4262._Bidder_optIn0_123 = _f.v4261;
    T7  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4262;
    _reachi_5(_ja, _Memory);
    }
  function _reacha_live(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(8))) {
      reachRequire(((current_step == uint256(6))), uint256(7) /*'(./src/contracts/auction.rsh:66:21:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T10 memory _svs) = abi.decode(current_svbs, (T10));
      _Memory._reachr_live = false;
      }
    else {
      reachRequire(((current_step == uint256(8))), uint256(8) /*'(./src/contracts/auction.rsh:66:21:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T11 memory _svs) = abi.decode(current_svbs, (T11));
      _Memory._reachr_live = true;
      }
    }
  struct _F4282 {
    T8 v678;
    T8[1] v679;
    }
  function _reachi_0(T14 memory _a, Memory memory _Memory) internal  {
    _F4282 memory _f;
    reachRequire((! locked), uint256(9) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(10) /*'time check at ./src/contracts/auction.rsh:76:16:dot'*/);
    _f.v678.elem0 = uint256(0);
    _f.v678.elem1 = uint256(0);
    _f.v678.elem2 = false;
    _f.v679[0] = _f.v678;
    
    reachRequire((msg.value == uint256(0)), uint256(11) /*'(./src/contracts/auction.rsh:76:16:dot,[],"verify network token pay amount")'*/);
    T15 memory nsvs;
    nsvs.v701 = payable(msg.sender);
    nsvs.v702 = (_a.elem1);
    nsvs.v703 = (_a.elem2);
    nsvs.v704 = (_a.elem3);
    nsvs.v709 = (array_set9(_f.v679, uint256(0), (T8({elem0: uint256(0), elem1: (_f.v679[uint256(0)]).elem1, elem2: (_f.v679[uint256(0)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F4301 {
    bool v723;
    T16 v724;
    T16 v725;
    T17 v737;
    T17 v738;
    address payable v748;
    T18 v755;
    T19 v756;
    T19 v757;
    T0 v770;
    uint256 v4285;
    uint256 v4286;
    uint256 v4287;
    uint256 v4291;
    uint256 v4292;
    uint256 v4293;
    uint256 v4297;
    uint256 v4298;
    uint256 v4299;
    }
  function _reachi_1(T5 memory _a, Memory memory _Memory) internal  {
    _F4301 memory _f;
    reachRequire((current_step == uint256(1)), uint256(12) /*'state check at ./src/contracts/auction.rsh:78:16:dot'*/);
    (T15 memory _svs) = abi.decode(current_svbs, (T15));
    reachRequire((! locked), uint256(13) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(14) /*'time check at ./src/contracts/auction.rsh:78:16:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(15) /*'(./src/contracts/auction.rsh:78:16:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v702, uint256(1))), uint256(16) /*'(./src/contracts/auction.rsh:78:16:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v701 == payable(msg.sender))), uint256(17) /*'(./src/contracts/auction.rsh:78:16:dot,[],Just "sender correct")'*/);
    {
      _f.v4286 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), 0);
      _f.v4285 = unsafeSub(address(this).balance, uint256(0));
      locked = true;
      bytes memory v4288 = abi.encodeWithSelector(I65c391f23b0f0e4ab619548bba5869629951b155.Auctions_getID.selector);
      (bool v4283, bytes memory v4284) = _svs.v704.call{value: uint256(0)}(v4288);
      checkFunReturn(v4283, v4284, uint256(19) /*'(./src/contracts/auction.rsh:90:48:application,[],"remote Auctions_getID failed")'*/);
      locked = false;
      _f.v4287 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), _f.v4286);
      reachRequire((_f.v4287 == 0), uint256(18) /*'remote did not transfer unexpected non-network tokens'*/);
      _f.v724.elem0 = unsafeSub(address(this).balance, _f.v4285);
      _f.v724.elem1 = abi.decode(v4284, (uint256));
      }
    _f.v725 = _f.v724;
    emit _reach_oe_v724( _f.v724);
    reachRequire(((uint256(0) == (_f.v725.elem0))), uint256(20) /*'(./src/contracts/auction.rsh:90:48:application,[],Just "remote bill check")'*/);
    {
      _f.v4292 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), 0);
      _f.v4291 = unsafeSub(address(this).balance, uint256(0));
      locked = true;
      bytes memory v4294 = abi.encodeWithSelector(I3defb57028d2e0220b6fe823333446eaca249a55.Auctions_getAdminAddress.selector);
      (bool v4289, bytes memory v4290) = _svs.v704.call{value: uint256(0)}(v4294);
      checkFunReturn(v4289, v4290, uint256(22) /*'(./src/contracts/auction.rsh:91:68:application,[],"remote Auctions_getAdminAddress failed")'*/);
      locked = false;
      _f.v4293 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), _f.v4292);
      reachRequire((_f.v4293 == 0), uint256(21) /*'remote did not transfer unexpected non-network tokens'*/);
      _f.v737.elem0 = unsafeSub(address(this).balance, _f.v4291);
      _f.v737.elem1 = abi.decode(v4290, (address));
      }
    _f.v738 = _f.v737;
    emit _reach_oe_v737( _f.v737);
    reachRequire(((uint256(0) == (_f.v738.elem0))), uint256(23) /*'(./src/contracts/auction.rsh:91:68:application,[],Just "remote bill check")'*/);
    _f.v748 = payable(address(this));
    _f.v755.id = (_f.v725.elem1);
    _f.v755.contractInfo = _f.v748;
    _f.v755.blockCreated = uint256(block.number);
    _f.v755.owner = _svs.v701;
    _f.v755.title = (_svs.v703._title);
    _f.v755.description = (_svs.v703._description);
    _f.v755.price = (_svs.v703._price);
    _f.v755.tokenId = _svs.v702;
    {
      _f.v4298 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), 0);
      _f.v4297 = unsafeSub(address(this).balance, uint256(0));
      locked = true;
      bytes memory v4300 = abi.encodeWithSelector(Icd5b779c46c4fd20ee1204cb5762604a51f26777.Auctions_created.selector, _f.v755);
      (bool v4295, bytes memory v4296) = _svs.v704.call{value: uint256(0)}(v4300);
      checkFunReturn(v4295, v4296, uint256(25) /*'(./src/contracts/auction.rsh:107:39:application,[],"remote Auctions_created failed")'*/);
      locked = false;
      _f.v4299 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), _f.v4298);
      reachRequire((_f.v4299 == 0), uint256(24) /*'remote did not transfer unexpected non-network tokens'*/);
      _f.v756.elem0 = unsafeSub(address(this).balance, _f.v4297);
      }
    _f.v757 = _f.v756;
    emit _reach_oe_v756( _f.v756);
    reachRequire(((uint256(0) == (_f.v757.elem0))), uint256(26) /*'(./src/contracts/auction.rsh:107:39:application,[],Just "remote bill check")'*/);
    emit created( (_f.v725.elem1),  _svs.v701);
    _f.v770.id = uint256(0);
    _f.v770.blockEnded = uint256(0);
    _f.v770.lastBid = uint256(0);
    T20  memory _ja;
    _ja.elem0 = _svs.v701;
    _ja.elem1 = _svs.v702;
    _ja.elem2 = _svs.v704;
    _ja.elem3 = _f.v723;
    _ja.elem4 = (_f.v725.elem1);
    _ja.elem5 = (_f.v738.elem1);
    _ja.elem6 = (uint256(block.number));
    _ja.elem7 = _f.v748;
    _ja.elem8 = (_svs.v703._title);
    _ja.elem9 = (safeAdd(uint256(block.number), (_svs.v703._deadline)));
    _ja.elem10 = _f.v770;
    _ja.elem11 = _svs.v701;
    _ja.elem12 = true;
    _ja.elem13 = true;
    _ja.elem14 = uint256(0);
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = (array_set9(_svs.v709, uint256(0), (T8({elem0: (unsafeAdd(((_svs.v709[uint256(0)]).elem0), uint256(1))), elem1: (_svs.v709[uint256(0)]).elem1, elem2: (_svs.v709[uint256(0)]).elem2}))));
    _ja.elem17 = (unsafeAdd((unsafeAdd((_f.v725.elem0), (_f.v738.elem0))), (_f.v757.elem0)));
    _reachl_2(_ja, _Memory);
    }
  function _reachi_4(T4 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(6)), uint256(27) /*'state check at ./src/contracts/auction.rsh:193:66:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(28) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(29) /*'time check at ./src/contracts/auction.rsh:193:66:dot'*/);
    if ((_a.elem1).which == _enum_T3.Auctioneer_acceptSale0_444) {
    reachRequire((msg.value == uint256(0)), uint256(30) /*'(./src/contracts/auction.rsh:193:66:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1302( (true));
    _Memory._reachr_Auctioneer_acceptSale = (true);
    T21  memory _ja;
    _ja.elem0 = _svs.v701;
    _ja.elem1 = _svs.v702;
    _ja.elem2 = _svs.v749;
    _ja.elem3 = _svs.v772;
    _ja.elem4 = _svs.v775;
    _ja.elem5 = _svs.v1250;
    _ja.elem6 = true;
    _ja.elem7 = false;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v1259;
    _ja.elem10 = _svs.v1260;
    _reachl_3(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T3.Auctioneer_rejectSale0_444) {
    reachRequire((msg.value == uint256(0)), uint256(31) /*'(./src/contracts/auction.rsh:193:66:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1332( (false));
    _Memory._reachr_Auctioneer_rejectSale = (false);
    T21  memory _ja;
    _ja.elem0 = _svs.v701;
    _ja.elem1 = _svs.v702;
    _ja.elem2 = _svs.v749;
    _ja.elem3 = _svs.v772;
    _ja.elem4 = _svs.v775;
    _ja.elem5 = _svs.v1250;
    _ja.elem6 = false;
    _ja.elem7 = false;
    _ja.elem8 = uint256(block.number);
    _ja.elem9 = _svs.v1259;
    _ja.elem10 = _svs.v1260;
    _reachl_3(_ja, _Memory);
    }
    }
  struct _F4315 {
    T0 v850;
    T5 v967;
    uint256 v978;
    T19 v1006;
    T19 v1007;
    T1 v1017;
    T19 v1030;
    T19 v1031;
    T1 v1041;
    uint256 v1109;
    uint256 v1188;
    uint256 v4305;
    uint256 v4306;
    uint256 v4307;
    uint256 v4311;
    uint256 v4312;
    uint256 v4313;
    }
  function _reachi_5(T7 memory _a, Memory memory _Memory) internal  {
    _F4315 memory _f;
    reachRequire((current_step == uint256(8)), uint256(32) /*'state check at ./src/contracts/auction.rsh:114:31:dot'*/);
    (T11 memory _svs) = abi.decode(current_svbs, (T11));
    reachRequire((! locked), uint256(33) /*'locked'*/);
    emit _reach_e5(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(34) /*'time check at ./src/contracts/auction.rsh:114:31:dot'*/);
    if ((_a.elem1).which == _enum_T6.Auctioneer_stopAuction0_123) {
    reachRequire((msg.value == uint256(0)), uint256(35) /*'(./src/contracts/auction.rsh:114:31:dot,[],"verify network token pay amount")'*/);
    emit endSuccess( _svs.v728,  _svs.v775);
    _f.v850.id = _svs.v728;
    _f.v850.blockEnded = uint256(block.number);
    _f.v850.lastBid = _svs.v775;
    emit _reach_oe_v850( _f.v850);
    _Memory._reachr_Auctioneer_stopAuction = _f.v850;
    T20  memory _ja;
    _ja.elem0 = _svs.v701;
    _ja.elem1 = _svs.v702;
    _ja.elem2 = _svs.v704;
    _ja.elem3 = _svs.v723;
    _ja.elem4 = _svs.v728;
    _ja.elem5 = _svs.v741;
    _ja.elem6 = _svs.v747;
    _ja.elem7 = _svs.v748;
    _ja.elem8 = _svs.v749;
    _ja.elem9 = _svs.v769;
    _ja.elem10 = _f.v850;
    _ja.elem11 = _svs.v772;
    _ja.elem12 = _svs.v773;
    _ja.elem13 = false;
    _ja.elem14 = _svs.v775;
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = _svs.v782;
    _ja.elem17 = _svs.v783;
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T6.Bidder_bid0_123) {
    _f.v967 = (_a.elem1)._Bidder_bid0_123;
    reachRequire((((_f.v967.elem0) > _svs.v775)), uint256(36) /*'(reach standard library:57:5:application,[at ./src/contracts/auction.rsh:132:38:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/auction.rsh:131:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp),at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:131:49:function exp),at ./src/contracts/auction.rsh:114:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:114:31:function exp)],Just "Your bid is too low, please try again")'*/);
    _f.v978 = unsafeAdd(_svs.v783, (_f.v967.elem0));
    reachRequire((msg.value == (_f.v967.elem0)), uint256(37) /*'(./src/contracts/auction.rsh:114:31:dot,[],"verify network token pay amount")'*/);
    if (_svs.v773) {
      {
        _f.v4306 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), 0);
        _f.v4305 = unsafeSub(address(this).balance, uint256(0));
        locked = true;
        bytes memory v4308 = abi.encodeWithSelector(I0929d31897a8bf4ecce6b4113b39c0cdd711c6ed.Auctions_updateHighestBidder.selector, _svs.v728, payable(msg.sender));
        (bool v4303, bytes memory v4304) = _svs.v704.call{value: uint256(0)}(v4308);
        checkFunReturn(v4303, v4304, uint256(39) /*'(./src/contracts/auction.rsh:138:91:application,[at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)],"remote Auctions_updateHighestBidder failed")'*/);
        locked = false;
        _f.v4307 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), _f.v4306);
        reachRequire((_f.v4307 == 0), uint256(38) /*'remote did not transfer unexpected non-network tokens'*/);
        _f.v1030.elem0 = unsafeSub(address(this).balance, _f.v4305);
        }
      _f.v1031 = _f.v1030;
      emit _reach_oe_v1030( _f.v1030);
      reachRequire(((uint256(0) == (_f.v1031.elem0))), uint256(40) /*'(./src/contracts/auction.rsh:138:91:application,[at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)],Just "remote bill check")'*/);
      emit bidSuccess( _svs.v728,  (_f.v967.elem0),  payable(msg.sender),  _svs.v749);
      _f.v1041.elem0 = payable(msg.sender);
      _f.v1041.elem1 = _svs.v775;
      emit _reach_oe_v1041( _f.v1041);
      _Memory._reachr_Bidder_bid = _f.v1041;
      T20  memory _ja;
      _ja.elem0 = _svs.v701;
      _ja.elem1 = _svs.v702;
      _ja.elem2 = _svs.v704;
      _ja.elem3 = _svs.v723;
      _ja.elem4 = _svs.v728;
      _ja.elem5 = _svs.v741;
      _ja.elem6 = _svs.v747;
      _ja.elem7 = _svs.v748;
      _ja.elem8 = _svs.v749;
      _ja.elem9 = _svs.v769;
      _ja.elem10 = _svs.v771;
      _ja.elem11 = payable(msg.sender);
      _ja.elem12 = false;
      _ja.elem13 = _svs.v774;
      _ja.elem14 = (_f.v967.elem0);
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = _svs.v782;
      _ja.elem17 = (unsafeAdd(_f.v978, (_f.v1031.elem0)));
      _reachl_2(_ja, _Memory);
      }
    else {
      _svs.v772.transfer(_svs.v775);
      {
        _f.v4312 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), 0);
        _f.v4311 = unsafeSub(address(this).balance, uint256(0));
        locked = true;
        bytes memory v4314 = abi.encodeWithSelector(I0929d31897a8bf4ecce6b4113b39c0cdd711c6ed.Auctions_updateHighestBidder.selector, _svs.v728, payable(msg.sender));
        (bool v4309, bytes memory v4310) = _svs.v704.call{value: uint256(0)}(v4314);
        checkFunReturn(v4309, v4310, uint256(42) /*'(./src/contracts/auction.rsh:138:91:application,[at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)],"remote Auctions_updateHighestBidder failed")'*/);
        locked = false;
        _f.v4313 = unsafeSub(tokenBalanceOf(_svs.v702, address(this)), _f.v4312);
        reachRequire((_f.v4313 == 0), uint256(41) /*'remote did not transfer unexpected non-network tokens'*/);
        _f.v1006.elem0 = unsafeSub(address(this).balance, _f.v4311);
        }
      _f.v1007 = _f.v1006;
      emit _reach_oe_v1006( _f.v1006);
      reachRequire(((uint256(0) == (_f.v1007.elem0))), uint256(43) /*'(./src/contracts/auction.rsh:138:91:application,[at ./src/contracts/auction.rsh:135:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:135:50:function exp)],Just "remote bill check")'*/);
      emit bidSuccess( _svs.v728,  (_f.v967.elem0),  payable(msg.sender),  _svs.v749);
      _f.v1017.elem0 = payable(msg.sender);
      _f.v1017.elem1 = _svs.v775;
      emit _reach_oe_v1017( _f.v1017);
      _Memory._reachr_Bidder_bid = _f.v1017;
      T20  memory _ja;
      _ja.elem0 = _svs.v701;
      _ja.elem1 = _svs.v702;
      _ja.elem2 = _svs.v704;
      _ja.elem3 = _svs.v723;
      _ja.elem4 = _svs.v728;
      _ja.elem5 = _svs.v741;
      _ja.elem6 = _svs.v747;
      _ja.elem7 = _svs.v748;
      _ja.elem8 = _svs.v749;
      _ja.elem9 = _svs.v769;
      _ja.elem10 = _svs.v771;
      _ja.elem11 = payable(msg.sender);
      _ja.elem12 = false;
      _ja.elem13 = _svs.v774;
      _ja.elem14 = (_f.v967.elem0);
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = _svs.v782;
      _ja.elem17 = (unsafeAdd((unsafeSub(_f.v978, _svs.v775)), (_f.v1007.elem0)));
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T6.Bidder_optIn0_123) {
    _f.v1109 = unsafeAdd(_svs.v783, uint256(1000000));
    reachRequire((msg.value == uint256(1000000)), uint256(44) /*'(./src/contracts/auction.rsh:114:31:dot,[],"verify network token pay amount")'*/);
    if ((_f.v1109 >= uint256(900000))) {
      _f.v1188 = unsafeSub(_f.v1109, uint256(900000));
      _svs.v741.transfer(uint256(900000));
      if ((_f.v1188 >= uint256(100000))) {
        _svs.v701.transfer(uint256(100000));
        emit optInSuccess( _svs.v728,  payable(msg.sender));
        emit _reach_oe_v1195( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T20  memory _ja;
        _ja.elem0 = _svs.v701;
        _ja.elem1 = _svs.v702;
        _ja.elem2 = _svs.v704;
        _ja.elem3 = _svs.v723;
        _ja.elem4 = _svs.v728;
        _ja.elem5 = _svs.v741;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v748;
        _ja.elem8 = _svs.v749;
        _ja.elem9 = _svs.v769;
        _ja.elem10 = _svs.v771;
        _ja.elem11 = _svs.v772;
        _ja.elem12 = _svs.v773;
        _ja.elem13 = _svs.v774;
        _ja.elem14 = _svs.v775;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v782;
        _ja.elem17 = (unsafeSub(_f.v1188, uint256(100000)));
        _reachl_2(_ja, _Memory);
        }
      else {
        emit optInSuccess( _svs.v728,  payable(msg.sender));
        emit _reach_oe_v1202( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T20  memory _ja;
        _ja.elem0 = _svs.v701;
        _ja.elem1 = _svs.v702;
        _ja.elem2 = _svs.v704;
        _ja.elem3 = _svs.v723;
        _ja.elem4 = _svs.v728;
        _ja.elem5 = _svs.v741;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v748;
        _ja.elem8 = _svs.v749;
        _ja.elem9 = _svs.v769;
        _ja.elem10 = _svs.v771;
        _ja.elem11 = _svs.v772;
        _ja.elem12 = _svs.v773;
        _ja.elem13 = _svs.v774;
        _ja.elem14 = _svs.v775;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v782;
        _ja.elem17 = _f.v1188;
        _reachl_2(_ja, _Memory);
        }
      }
    else {
      if ((_f.v1109 >= uint256(100000))) {
        _svs.v701.transfer(uint256(100000));
        emit optInSuccess( _svs.v728,  payable(msg.sender));
        emit _reach_oe_v1215( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T20  memory _ja;
        _ja.elem0 = _svs.v701;
        _ja.elem1 = _svs.v702;
        _ja.elem2 = _svs.v704;
        _ja.elem3 = _svs.v723;
        _ja.elem4 = _svs.v728;
        _ja.elem5 = _svs.v741;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v748;
        _ja.elem8 = _svs.v749;
        _ja.elem9 = _svs.v769;
        _ja.elem10 = _svs.v771;
        _ja.elem11 = _svs.v772;
        _ja.elem12 = _svs.v773;
        _ja.elem13 = _svs.v774;
        _ja.elem14 = _svs.v775;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v782;
        _ja.elem17 = (unsafeSub(_f.v1109, uint256(100000)));
        _reachl_2(_ja, _Memory);
        }
      else {
        emit optInSuccess( _svs.v728,  payable(msg.sender));
        emit _reach_oe_v1222( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T20  memory _ja;
        _ja.elem0 = _svs.v701;
        _ja.elem1 = _svs.v702;
        _ja.elem2 = _svs.v704;
        _ja.elem3 = _svs.v723;
        _ja.elem4 = _svs.v728;
        _ja.elem5 = _svs.v741;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v748;
        _ja.elem8 = _svs.v749;
        _ja.elem9 = _svs.v769;
        _ja.elem10 = _svs.v771;
        _ja.elem11 = _svs.v772;
        _ja.elem12 = _svs.v773;
        _ja.elem13 = _svs.v774;
        _ja.elem14 = _svs.v775;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v782;
        _ja.elem17 = _f.v1109;
        _reachl_2(_ja, _Memory);
        }
      }
    }
    }
  struct _F4322 {
    T19 v1235;
    T19 v1236;
    uint256 v1243;
    uint256 v4318;
    uint256 v4319;
    uint256 v4320;
    }
  function _reachl_2(T20 memory _a, Memory memory _Memory) internal  {
    _F4322 memory _f;
    if (((_a.elem15 <= _a.elem9) ? _a.elem13 : false)) {
      T11 memory nsvs;
      nsvs.v701 = _a.elem0;
      nsvs.v702 = _a.elem1;
      nsvs.v704 = _a.elem2;
      nsvs.v723 = _a.elem3;
      nsvs.v728 = _a.elem4;
      nsvs.v741 = _a.elem5;
      nsvs.v747 = _a.elem6;
      nsvs.v748 = _a.elem7;
      nsvs.v749 = _a.elem8;
      nsvs.v769 = _a.elem9;
      nsvs.v771 = _a.elem10;
      nsvs.v772 = _a.elem11;
      nsvs.v773 = _a.elem12;
      nsvs.v774 = true;
      nsvs.v775 = _a.elem14;
      nsvs.v782 = _a.elem16;
      nsvs.v783 = _a.elem17;
      current_step = uint256(8);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      {
        _f.v4319 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), 0);
        _f.v4318 = unsafeSub(address(this).balance, uint256(0));
        locked = true;
        bytes memory v4321 = abi.encodeWithSelector(I71ecfd913dbeb55e00ddeba69e01686608f7a8ff.Auctions_ended.selector, _a.elem10);
        (bool v4316, bytes memory v4317) = _a.elem2.call{value: uint256(0)}(v4321);
        checkFunReturn(v4316, v4317, uint256(46) /*'(./src/contracts/auction.rsh:178:37:application,[],"remote Auctions_ended failed")'*/);
        locked = false;
        _f.v4320 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), _f.v4319);
        reachRequire((_f.v4320 == 0), uint256(45) /*'remote did not transfer unexpected non-network tokens'*/);
        _f.v1235.elem0 = unsafeSub(address(this).balance, _f.v4318);
        }
      _f.v1236 = _f.v1235;
      emit _reach_oe_v1235( _f.v1235);
      _f.v1243 = unsafeAdd(_a.elem17, (_f.v1236.elem0));
      reachRequire(((uint256(0) == (_f.v1236.elem0))), uint256(47) /*'(./src/contracts/auction.rsh:178:37:application,[],Just "remote bill check")'*/);
      emit down( _a.elem4,  _a.elem14,  _a.elem0,  _a.elem7,  _a.elem6,  _a.elem8);
      if ((_a.elem14 > uint256(0))) {
        T21  memory _ja;
        _ja.elem0 = _a.elem0;
        _ja.elem1 = _a.elem1;
        _ja.elem2 = _a.elem8;
        _ja.elem3 = _a.elem11;
        _ja.elem4 = _a.elem14;
        _ja.elem5 = (safeAdd(_a.elem15, uint256(50)));
        _ja.elem6 = true;
        _ja.elem7 = true;
        _ja.elem8 = _a.elem15;
        _ja.elem9 = _a.elem16;
        _ja.elem10 = _f.v1243;
        _reachl_3(_ja, _Memory);
        }
      else {
        safeTokenTransfer(_a.elem1, _a.elem0, ((_a.elem16[uint256(0)]).elem0));
        _a.elem11.transfer(_f.v1243);
        current_step = 0x0;
        current_time = 0x0;
        delete current_svbs;
        }
      }
    }
  function _reachl_3(T21 memory _a, Memory memory _Memory) internal  {
    if (((_a.elem8 <= _a.elem5) ? _a.elem7 : false)) {
      T10 memory nsvs;
      nsvs.v701 = _a.elem0;
      nsvs.v702 = _a.elem1;
      nsvs.v749 = _a.elem2;
      nsvs.v772 = _a.elem3;
      nsvs.v775 = _a.elem4;
      nsvs.v1250 = _a.elem5;
      nsvs.v1259 = _a.elem9;
      nsvs.v1260 = _a.elem10;
      current_step = uint256(6);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      if (_a.elem6) {
        safeTokenTransfer(_a.elem1, _a.elem3, ((_a.elem9[uint256(0)]).elem0));
        _a.elem0.transfer(_a.elem10);
        emit accepted( _a.elem2,  _a.elem4,  _a.elem0,  _a.elem3,  _a.elem1);
        current_step = 0x0;
        current_time = 0x0;
        delete current_svbs;
        }
      else {
        safeTokenTransfer(_a.elem1, _a.elem0, ((_a.elem9[uint256(0)]).elem0));
        _a.elem3.transfer(_a.elem10);
        emit rejected( _a.elem2,  _a.elem4,  _a.elem0,  _a.elem3,  _a.elem1);
        current_step = 0x0;
        current_time = 0x0;
        delete current_svbs;
        }
      }
    }
  function Auctioneer_acceptSale() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Auctioneer_acceptSale(_ja, _Memory);
    return _Memory._reachr_Auctioneer_acceptSale;
    }
  function Auctioneer_rejectSale() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Auctioneer_rejectSale(_ja, _Memory);
    return _Memory._reachr_Auctioneer_rejectSale;
    }
  function Auctioneer_stopAuction() external payable returns (T0 memory) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Auctioneer_stopAuction(_ja, _Memory);
    return _Memory._reachr_Auctioneer_stopAuction;
    }
  function Bidder_bid(uint256 v4259) external payable returns (T1 memory) {
    Memory memory _Memory;
    _reacha_Bidder_bid(v4259, _Memory);
    return _Memory._reachr_Bidder_bid;
    }
  function Bidder_optIn() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Bidder_optIn(_ja, _Memory);
    return _Memory._reachr_Bidder_optIn;
    }
  constructor(T14 memory v4266) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v4266, _Memory);
    }
  function _reachp_1(T5 calldata v4269) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v4269, _Memory);
    }
  function _reachp_4(T4 calldata v4272) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v4272, _Memory);
    }
  function _reachp_5(T7 calldata v4275) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_5(v4275, _Memory);
    }
  function live() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_live(_ja, _Memory);
    return _Memory._reachr_live;
    }
  }
