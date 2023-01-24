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
  bytes32 elem0;
  bytes32 elem1;
  bytes16 elem2;
  }
struct T1 {
  uint256 id;
  address payable contractInfo;
  uint256 blockCreated;
  address payable owner;
  bytes32 title;
  T0 description;
  uint256 price;
  address payable tokenId;
  }
struct T2 {
  T1 elem0;
  }
struct T3 {
  uint256 elem0;
  }
struct T4 {
  uint256 id;
  uint256 blockEnded;
  uint256 lastBid;
  }
struct T5 {
  T4 elem0;
  }
struct T7 {
  uint256 elem0;
  address payable elem1;
  }
enum _enum_T8 {Auctions_created0_44, Auctions_endSuccess0_44, Auctions_ended0_44, Auctions_getID0_44, Auctions_updateHighestBidder0_44}
struct T8 {
  _enum_T8 which;
  T2 _Auctions_created0_44;
  T3 _Auctions_endSuccess0_44;
  T5 _Auctions_ended0_44;
  bool _Auctions_getID0_44;
  T7 _Auctions_updateHighestBidder0_44;
  }
struct T9 {
  uint256 elem0;
  T8 elem1;
  }
struct T10 {
  address payable v338;
  }
struct T11 {
  uint256 elem0;
  uint256 elem1;
  }
struct T12 {
  uint256 v347;
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
  event _reach_e0(address _who, T3 _a);
  event _reach_e1(address _who, T3 _a);
  event _reach_e3(address _who, T9 _a);
  event _reach_oe_v347(uint256 v0);
  event _reach_oe_v455(bool v0);
  event _reach_oe_v556(bool v0);
  event _reach_oe_v644(bool v0);
  event _reach_oe_v816(bool v0);
  event create(uint256 v0, address payable v1, uint256 v2, address payable v3, bytes32 v4, T0 v5, uint256 v6, address payable v7);
  event end(uint256 v0, uint256 v1, uint256 v2);
  event endSuccess(uint256 v0);
  event updateHighestBidder(uint256 v0, address payable v1);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_Auctions_created;
    bool _reachr_Auctions_endSuccess;
    bool _reachr_Auctions_ended;
    uint256 _reachr_Auctions_getID;
    bool _reachr_Auctions_updateHighestBidder;
    }
  struct _F1553 {
    T2 v1516;
    T8 v1517;
    }
  function _reacha_Auctions_created(T1 memory _a, Memory memory _Memory) internal  {
    _F1553 memory _f;
    _f.v1516.elem0 = _a;
    _f.v1517.which = _enum_T8.Auctions_created0_44;
    _f.v1517._Auctions_created0_44 = _f.v1516;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v1517;
    _reachi_3(_ja, _Memory);
    }
  struct _F1554 {
    T3 v1522;
    T8 v1523;
    }
  function _reacha_Auctions_endSuccess(uint256 _a, Memory memory _Memory) internal  {
    _F1554 memory _f;
    _f.v1522.elem0 = _a;
    _f.v1523.which = _enum_T8.Auctions_endSuccess0_44;
    _f.v1523._Auctions_endSuccess0_44 = _f.v1522;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v1523;
    _reachi_3(_ja, _Memory);
    }
  struct _F1555 {
    T5 v1528;
    T8 v1529;
    }
  function _reacha_Auctions_ended(T4 memory _a, Memory memory _Memory) internal  {
    _F1555 memory _f;
    _f.v1528.elem0 = _a;
    _f.v1529.which = _enum_T8.Auctions_ended0_44;
    _f.v1529._Auctions_ended0_44 = _f.v1528;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v1529;
    _reachi_3(_ja, _Memory);
    }
  struct _F1556 {
    bool v1533;
    T8 v1534;
    }
  function _reacha_Auctions_getID(bool _a, Memory memory _Memory) internal  {
    _F1556 memory _f;
    _f.v1534.which = _enum_T8.Auctions_getID0_44;
    _f.v1534._Auctions_getID0_44 = _f.v1533;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v1534;
    _reachi_3(_ja, _Memory);
    }
  struct _F1557 {
    T7 v1539;
    T8 v1540;
    }
  function _reacha_Auctions_updateHighestBidder(T7 memory _a, Memory memory _Memory) internal  {
    _F1557 memory _f;
    _f.v1539.elem0 = _a.elem0;
    _f.v1539.elem1 = _a.elem1;
    _f.v1540.which = _enum_T8.Auctions_updateHighestBidder0_44;
    _f.v1540._Auctions_updateHighestBidder0_44 = _f.v1539;
    T9  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v1540;
    _reachi_3(_ja, _Memory);
    }
  function _reachi_0(T3 memory _a, Memory memory _Memory) internal  {
    reachRequire((! locked), uint256(7) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(8) /*'time check at ./src/contracts/index.rsh:46:15:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(9) /*'(./src/contracts/index.rsh:46:15:dot,[],"verify network token pay amount")'*/);
    T10 memory nsvs;
    nsvs.v338 = payable(msg.sender);
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  function _reachi_1(T3 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(1)), uint256(10) /*'state check at ./src/contracts/index.rsh:48:15:dot'*/);
    (T10 memory _svs) = abi.decode(current_svbs, (T10));
    reachRequire((! locked), uint256(11) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(12) /*'time check at ./src/contracts/index.rsh:48:15:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(13) /*'(./src/contracts/index.rsh:48:15:dot,[],"verify network token pay amount")'*/);
    reachRequire(((_svs.v338 == payable(msg.sender))), uint256(14) /*'(./src/contracts/index.rsh:48:15:dot,[],Just "sender correct")'*/);
    T11  memory _ja;
    _ja.elem0 = uint256(0);
    _ja.elem1 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    }
  struct _F1560 {
    T2 v444;
    T3 v520;
    T5 v596;
    T7 v748;
    }
  function _reachi_3(T9 memory _a, Memory memory _Memory) internal  {
    _F1560 memory _f;
    reachRequire((current_step == uint256(4)), uint256(15) /*'state check at ./src/contracts/index.rsh:50:41:dot'*/);
    (T12 memory _svs) = abi.decode(current_svbs, (T12));
    reachRequire((! locked), uint256(16) /*'locked'*/);
    emit _reach_e3(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(17) /*'time check at ./src/contracts/index.rsh:50:41:dot'*/);
    if ((_a.elem1).which == _enum_T8.Auctions_created0_44) {
    _f.v444 = (_a.elem1)._Auctions_created0_44;
    reachRequire((msg.value == uint256(0)), uint256(18) /*'(./src/contracts/index.rsh:50:41:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v455( (false));
    _Memory._reachr_Auctions_created = (false);
    emit create( ((_f.v444.elem0).id),  ((_f.v444.elem0).contractInfo),  ((_f.v444.elem0).blockCreated),  ((_f.v444.elem0).owner),  ((_f.v444.elem0).title),  ((_f.v444.elem0).description),  ((_f.v444.elem0).price),  ((_f.v444.elem0).tokenId));
    T11  memory _ja;
    _ja.elem0 = _svs.v347;
    _ja.elem1 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T8.Auctions_endSuccess0_44) {
    _f.v520 = (_a.elem1)._Auctions_endSuccess0_44;
    reachRequire((msg.value == uint256(0)), uint256(19) /*'(./src/contracts/index.rsh:50:41:dot,[],"verify network token pay amount")'*/);
    emit endSuccess( (_f.v520.elem0));
    emit _reach_oe_v556( (false));
    _Memory._reachr_Auctions_endSuccess = (false);
    T11  memory _ja;
    _ja.elem0 = _svs.v347;
    _ja.elem1 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T8.Auctions_ended0_44) {
    _f.v596 = (_a.elem1)._Auctions_ended0_44;
    reachRequire((msg.value == uint256(0)), uint256(20) /*'(./src/contracts/index.rsh:50:41:dot,[],"verify network token pay amount")'*/);
    emit end( ((_f.v596.elem0).id),  ((_f.v596.elem0).blockEnded),  ((_f.v596.elem0).lastBid));
    emit _reach_oe_v644( (false));
    _Memory._reachr_Auctions_ended = (false);
    T11  memory _ja;
    _ja.elem0 = _svs.v347;
    _ja.elem1 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T8.Auctions_getID0_44) {
    reachRequire((msg.value == uint256(0)), uint256(21) /*'(./src/contracts/index.rsh:50:41:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v347( _svs.v347);
    _Memory._reachr_Auctions_getID = _svs.v347;
    T11  memory _ja;
    _ja.elem0 = (safeAdd(_svs.v347, uint256(1)));
    _ja.elem1 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T8.Auctions_updateHighestBidder0_44) {
    _f.v748 = (_a.elem1)._Auctions_updateHighestBidder0_44;
    reachRequire((msg.value == uint256(0)), uint256(22) /*'(./src/contracts/index.rsh:50:41:dot,[],"verify network token pay amount")'*/);
    emit updateHighestBidder( (_f.v748.elem0),  (_f.v748.elem1));
    emit _reach_oe_v816( (false));
    _Memory._reachr_Auctions_updateHighestBidder = (false);
    T11  memory _ja;
    _ja.elem0 = _svs.v347;
    _ja.elem1 = uint256(block.number);
    _reachl_2(_ja, _Memory);
    }
    }
  function _reachl_2(T11 memory _a, Memory memory _Memory) internal  {
    T12 memory nsvs;
    nsvs.v347 = _a.elem0;
    current_step = uint256(4);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  function Auctions_created(T1 calldata v1519) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Auctions_created(v1519, _Memory);
    return _Memory._reachr_Auctions_created;
    }
  function Auctions_endSuccess(uint256 v1525) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Auctions_endSuccess(v1525, _Memory);
    return _Memory._reachr_Auctions_endSuccess;
    }
  function Auctions_ended(T4 calldata v1531) external payable returns (bool) {
    Memory memory _Memory;
    _reacha_Auctions_ended(v1531, _Memory);
    return _Memory._reachr_Auctions_ended;
    }
  function Auctions_getID() external payable returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Auctions_getID(_ja, _Memory);
    return _Memory._reachr_Auctions_getID;
    }
  function Auctions_updateHighestBidder(uint256 v1542, address payable v1543) external payable returns (bool) {
    Memory memory _Memory;
    T7  memory _ja;
    _ja.elem0 = v1542;
    _ja.elem1 = v1543;
    _reacha_Auctions_updateHighestBidder(_ja, _Memory);
    return _Memory._reachr_Auctions_updateHighestBidder;
    }
  constructor(T3 memory v1546) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v1546, _Memory);
    }
  function _reachp_1(T3 calldata v1549) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v1549, _Memory);
    }
  function _reachp_3(T9 calldata v1552) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_3(v1552, _Memory);
    }
  }
