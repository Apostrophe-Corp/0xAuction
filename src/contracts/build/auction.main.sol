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
struct T3 {
  uint256 elem0;
  bool elem1;
  }
enum _enum_T4 {Auctioneer_acceptSale0_419, Auctioneer_rejectSale0_419, Bidder_updateState0_419}
struct T4 {
  _enum_T4 which;
  bool _Auctioneer_acceptSale0_419;
  bool _Auctioneer_rejectSale0_419;
  bool _Bidder_updateState0_419;
  }
struct T5 {
  uint256 elem0;
  T4 elem1;
  }
struct T6 {
  uint256 elem0;
  }
enum _enum_T7 {Auctioneer_stopAuction0_114, Bidder_bid0_114, Bidder_optIn0_114}
struct T7 {
  _enum_T7 which;
  bool _Auctioneer_stopAuction0_114;
  T6 _Bidder_bid0_114;
  bool _Bidder_optIn0_114;
  }
struct T8 {
  uint256 elem0;
  T7 elem1;
  }
struct T9 {
  uint256 elem0;
  uint256 elem1;
  bool elem2;
  }
struct T11 {
  address payable v779;
  address payable v798;
  uint256 v842;
  T9[1] v1627;
  uint256 v1628;
  }
struct T12 {
  address payable v779;
  address payable v798;
  uint256 v842;
  T9[1] v1711;
  uint256 v1712;
  }
struct T13 {
  address payable v778;
  address payable v779;
  address payable v781;
  address payable v798;
  bool v803;
  bytes32 v816;
  T0 v838;
  address payable v839;
  uint256 v842;
  uint256 v1384;
  bool v1385;
  bool v1386;
  T9[1] v1393;
  uint256 v1394;
  }
struct T14 {
  address payable v779;
  address payable v798;
  uint256 v842;
  T9[1] v1794;
  uint256 v1795;
  }
struct T15 {
  address payable v778;
  address payable v779;
  address payable v781;
  address payable v798;
  bool v803;
  uint256 v808;
  uint256 v814;
  address payable v815;
  bytes32 v816;
  uint256 v836;
  T0 v838;
  address payable v839;
  bool v840;
  bool v841;
  uint256 v842;
  T9[1] v849;
  uint256 v850;
  }
struct T16 {
  bytes32 elem0;
  bytes32 elem1;
  bytes16 elem2;
  }
struct T17 {
  uint256 _deadline;
  T16 _description;
  address payable _owner;
  uint256 _price;
  bytes32 _title;
  }
struct T18 {
  uint256 elem0;
  address payable elem1;
  T17 elem2;
  address payable elem3;
  }
struct T19 {
  address payable v778;
  address payable v779;
  T17 v780;
  address payable v781;
  T9[1] v786;
  }
struct T20 {
  address payable v778;
  address payable v779;
  T17 v780;
  address payable v781;
  T9[1] v796;
  }
struct T21 {
  address payable elem0;
  address payable elem1;
  uint256 elem2;
  bool elem3;
  uint256 elem4;
  T9[1] elem5;
  uint256 elem6;
  }
struct T22 {
  address payable elem0;
  address payable elem1;
  address payable elem2;
  address payable elem3;
  bool elem4;
  uint256 elem5;
  uint256 elem6;
  address payable elem7;
  bytes32 elem8;
  uint256 elem9;
  T0 elem10;
  address payable elem11;
  bool elem12;
  bool elem13;
  uint256 elem14;
  uint256 elem15;
  T9[1] elem16;
  uint256 elem17;
  }
struct T23 {
  uint256 elem0;
  bool elem1;
  }
struct T24 {
  uint256 elem0;
  uint256 elem1;
  }
struct T25 {
  uint256 id;
  address payable contractInfo;
  uint256 blockCreated;
  address payable owner;
  bytes32 title;
  T16 description;
  uint256 price;
  address payable tokenId;
  }
struct T26 {
  address payable elem0;
  address payable elem1;
  address payable elem2;
  address payable elem3;
  bool elem4;
  bytes32 elem5;
  T0 elem6;
  address payable elem7;
  uint256 elem8;
  uint256 elem9;
  bool elem10;
  bool elem11;
  uint256 elem12;
  T9[1] elem13;
  uint256 elem14;
  }
interface I05ae2f580d719327ba7d89e9dc85dbe2eb5dc03e {
  function Auctions_created(T25 memory) external payable returns (bool);
  }
interface I0929d31897a8bf4ecce6b4113b39c0cdd711c6ed {
  function Auctions_updateHighestBidder(uint256, address payable) external payable returns (bool);
  }
interface I65c391f23b0f0e4ab619548bba5869629951b155 {
  function Auctions_getID() external payable returns (uint256);
  }
interface I71ecfd913dbeb55e00ddeba69e01686608f7a8ff {
  function Auctions_ended(T0 memory) external payable returns (bool);
  }
interface I9ee3fdb5efac1d6cf40c9063bd3e2dab1eb4c163 {
  function Auctions_endSuccess(uint256) external payable returns (bool);
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
  function array_set10(T9[1] memory arr, uint256 idx, T9 memory val) internal  returns (T9[1] memory arrp) {
    for (uint256 i = 0; i < 1; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T18 _a);
  event _reach_e1(address _who, T6 _a);
  event _reach_e11(address _who, T3 _a);
  event _reach_e12(address _who, T8 _a);
  event _reach_e2(address _who, T6 _a);
  event _reach_e6(address _who, T3 _a);
  event _reach_e8(address _who, T3 _a);
  event _reach_e9(address _who, T5 _a);
  event _reach_oe_v1119(T23 v0);
  event _reach_oe_v1130(T1 v0);
  event _reach_oe_v1143(T23 v0);
  event _reach_oe_v1154(T1 v0);
  event _reach_oe_v1332(bool v0);
  event _reach_oe_v1339(bool v0);
  event _reach_oe_v1352(bool v0);
  event _reach_oe_v1359(bool v0);
  event _reach_oe_v1369(T23 v0);
  event _reach_oe_v1442(bool v0);
  event _reach_oe_v1511(bool v0);
  event _reach_oe_v1580(bool v0);
  event _reach_oe_v1610(T23 v0);
  event _reach_oe_v1644(bool v0);
  event _reach_oe_v1694(T23 v0);
  event _reach_oe_v1728(bool v0);
  event _reach_oe_v1777(T23 v0);
  event _reach_oe_v1811(bool v0);
  event _reach_oe_v804(T24 v0);
  event _reach_oe_v823(T23 v0);
  event _reach_oe_v918(T0 v0);
  event _reach_oe_v935(T0 v0);
  event accepted(bytes32 v0, uint256 v1, address payable v2, address payable v3, address payable v4);
  event bidSuccess(uint256 v0, uint256 v1, address payable v2, bytes32 v3);
  event created(uint256 v0, address payable v1);
  event down(uint256 v0, uint256 v1, address payable v2, address payable v3, uint256 v4, bytes32 v5);
  event optInSuccess(uint256 v0, address payable v1);
  event rejected(bytes32 v0, uint256 v1, address payable v2, address payable v3, address payable v4);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_AdminCall_adminCall;
    bool _reachr_Auctioneer_acceptSale;
    bool _reachr_Auctioneer_rejectSale;
    T0 _reachr_Auctioneer_stopAuction;
    T1 _reachr_Bidder_bid;
    bool _reachr_Bidder_optIn;
    bool _reachr_Bidder_updateState;
    bool _reachr_hasEnded;
    uint256 _reachr_highestPrice;
    bool _reachr_live;
    }
  struct _F10304 {
    bool v10246;
    bool v10248;
    bool v10250;
    }
  function _reacha_AdminCall_adminCall(bool _a, Memory memory _Memory) internal  {
    _F10304 memory _f;
    if ((current_step < uint256(10))) {
      T3  memory _ja;
      _ja.elem0 = (uint256(0));
      _ja.elem1 = _f.v10246;
      _reachi_6(_ja, _Memory);
      }
    else {
      if ((current_step < uint256(14))) {
        T3  memory _ja;
        _ja.elem0 = (uint256(0));
        _ja.elem1 = _f.v10248;
        _reachi_8(_ja, _Memory);
        }
      else {
        T3  memory _ja;
        _ja.elem0 = (uint256(0));
        _ja.elem1 = _f.v10250;
        _reachi_11(_ja, _Memory);
        }
      }
    }
  struct _F10305 {
    bool v10255;
    T4 v10256;
    }
  function _reacha_Auctioneer_acceptSale(bool _a, Memory memory _Memory) internal  {
    _F10305 memory _f;
    _f.v10256.which = _enum_T4.Auctioneer_acceptSale0_419;
    _f.v10256._Auctioneer_acceptSale0_419 = _f.v10255;
    T5  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10256;
    _reachi_9(_ja, _Memory);
    }
  struct _F10306 {
    bool v10259;
    T4 v10260;
    }
  function _reacha_Auctioneer_rejectSale(bool _a, Memory memory _Memory) internal  {
    _F10306 memory _f;
    _f.v10260.which = _enum_T4.Auctioneer_rejectSale0_419;
    _f.v10260._Auctioneer_rejectSale0_419 = _f.v10259;
    T5  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10260;
    _reachi_9(_ja, _Memory);
    }
  struct _F10307 {
    bool v10263;
    T7 v10264;
    }
  function _reacha_Auctioneer_stopAuction(bool _a, Memory memory _Memory) internal  {
    _F10307 memory _f;
    _f.v10264.which = _enum_T7.Auctioneer_stopAuction0_114;
    _f.v10264._Auctioneer_stopAuction0_114 = _f.v10263;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10264;
    _reachi_12(_ja, _Memory);
    }
  struct _F10308 {
    T6 v10268;
    T7 v10269;
    }
  function _reacha_Bidder_bid(uint256 _a, Memory memory _Memory) internal  {
    _F10308 memory _f;
    _f.v10268.elem0 = _a;
    _f.v10269.which = _enum_T7.Bidder_bid0_114;
    _f.v10269._Bidder_bid0_114 = _f.v10268;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10269;
    _reachi_12(_ja, _Memory);
    }
  struct _F10309 {
    bool v10273;
    T7 v10274;
    }
  function _reacha_Bidder_optIn(bool _a, Memory memory _Memory) internal  {
    _F10309 memory _f;
    _f.v10274.which = _enum_T7.Bidder_optIn0_114;
    _f.v10274._Bidder_optIn0_114 = _f.v10273;
    T8  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10274;
    _reachi_12(_ja, _Memory);
    }
  struct _F10310 {
    bool v10277;
    T4 v10278;
    }
  function _reacha_Bidder_updateState(bool _a, Memory memory _Memory) internal  {
    _F10310 memory _f;
    _f.v10278.which = _enum_T4.Bidder_updateState0_419;
    _f.v10278._Bidder_updateState0_419 = _f.v10277;
    T5  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v10278;
    _reachi_9(_ja, _Memory);
    }
  function _reacha_hasEnded(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(11))) {
      if ((current_step < uint256(10))) {
        reachRequire(((current_step == uint256(7))), uint256(7) /*'(./src/contracts/auction.rsh:74:25:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T11 memory _svs) = abi.decode(current_svbs, (T11));
        _Memory._reachr_hasEnded = true;
        }
      else {
        reachRequire(((current_step == uint256(10))), uint256(8) /*'(./src/contracts/auction.rsh:74:25:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T12 memory _svs) = abi.decode(current_svbs, (T12));
        _Memory._reachr_hasEnded = true;
        }
      }
    else {
      if ((current_step < uint256(14))) {
        reachRequire(((current_step == uint256(11))), uint256(9) /*'(./src/contracts/auction.rsh:74:25:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T13 memory _svs) = abi.decode(current_svbs, (T13));
        _Memory._reachr_hasEnded = false;
        }
      else {
        if ((current_step < uint256(15))) {
          reachRequire(((current_step == uint256(14))), uint256(10) /*'(./src/contracts/auction.rsh:74:25:property binding,[],Just "Incorrect state: not leaf")'*/);
          (T14 memory _svs) = abi.decode(current_svbs, (T14));
          _Memory._reachr_hasEnded = true;
          }
        else {
          reachRequire(((current_step == uint256(15))), uint256(11) /*'(./src/contracts/auction.rsh:74:25:property binding,[],Just "Incorrect state: not leaf")'*/);
          (T15 memory _svs) = abi.decode(current_svbs, (T15));
          _Memory._reachr_hasEnded = false;
          }
        }
      }
    }
  function _reacha_highestPrice(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(11))) {
      if ((current_step < uint256(10))) {
        reachRequire(((current_step == uint256(7))), uint256(12) /*'(./src/contracts/auction.rsh:73:29:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T11 memory _svs) = abi.decode(current_svbs, (T11));
        _Memory._reachr_highestPrice = _svs.v842;
        }
      else {
        reachRequire(((current_step == uint256(10))), uint256(13) /*'(./src/contracts/auction.rsh:73:29:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T12 memory _svs) = abi.decode(current_svbs, (T12));
        _Memory._reachr_highestPrice = _svs.v842;
        }
      }
    else {
      if ((current_step < uint256(14))) {
        reachRequire(((current_step == uint256(11))), uint256(14) /*'(./src/contracts/auction.rsh:73:29:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T13 memory _svs) = abi.decode(current_svbs, (T13));
        _Memory._reachr_highestPrice = _svs.v842;
        }
      else {
        reachRequire(((current_step == uint256(14))), uint256(15) /*'(./src/contracts/auction.rsh:73:29:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T14 memory _svs) = abi.decode(current_svbs, (T14));
        _Memory._reachr_highestPrice = _svs.v842;
        }
      }
    }
  function _reacha_live(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(11))) {
      if ((current_step < uint256(10))) {
        reachRequire(((current_step == uint256(7))), uint256(16) /*'(./src/contracts/auction.rsh:72:21:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T11 memory _svs) = abi.decode(current_svbs, (T11));
        _Memory._reachr_live = false;
        }
      else {
        reachRequire(((current_step == uint256(10))), uint256(17) /*'(./src/contracts/auction.rsh:72:21:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T12 memory _svs) = abi.decode(current_svbs, (T12));
        _Memory._reachr_live = false;
        }
      }
    else {
      if ((current_step < uint256(14))) {
        reachRequire(((current_step == uint256(11))), uint256(18) /*'(./src/contracts/auction.rsh:72:21:property binding,[],Just "Incorrect state: not leaf")'*/);
        (T13 memory _svs) = abi.decode(current_svbs, (T13));
        _Memory._reachr_live = false;
        }
      else {
        if ((current_step < uint256(15))) {
          reachRequire(((current_step == uint256(14))), uint256(19) /*'(./src/contracts/auction.rsh:72:21:property binding,[],Just "Incorrect state: not leaf")'*/);
          (T14 memory _svs) = abi.decode(current_svbs, (T14));
          _Memory._reachr_live = false;
          }
        else {
          reachRequire(((current_step == uint256(15))), uint256(20) /*'(./src/contracts/auction.rsh:72:21:property binding,[],Just "Incorrect state: not leaf")'*/);
          (T15 memory _svs) = abi.decode(current_svbs, (T15));
          _Memory._reachr_live = true;
          }
        }
      }
    }
  struct _F10314 {
    T9 v755;
    T9[1] v756;
    }
  function _reachi_0(T18 memory _a, Memory memory _Memory) internal  {
    _F10314 memory _f;
    reachRequire((! locked), uint256(21) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(22) /*'time check at ./src/contracts/auction.rsh:83:16:dot'*/);
    _f.v755.elem0 = uint256(0);
    _f.v755.elem1 = uint256(0);
    _f.v755.elem2 = false;
    _f.v756[0] = _f.v755;
    
    reachRequire((msg.value == uint256(0)), uint256(23) /*'(./src/contracts/auction.rsh:83:16:dot,[],"verify network token pay amount")'*/);
    T19 memory nsvs;
    nsvs.v778 = payable(msg.sender);
    nsvs.v779 = (_a.elem1);
    nsvs.v780 = (_a.elem2);
    nsvs.v781 = (_a.elem3);
    nsvs.v786 = (array_set10(_f.v756, uint256(0), (T9({elem0: uint256(0), elem1: (_f.v756[uint256(0)]).elem1, elem2: (_f.v756[uint256(0)]).elem2}))));
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  function _reachi_1(T6 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(1)), uint256(24) /*'state check at ./src/contracts/auction.rsh:85:16:dot'*/);
    (T19 memory _svs) = abi.decode(current_svbs, (T19));
    reachRequire((! locked), uint256(25) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(26) /*'time check at ./src/contracts/auction.rsh:85:16:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(27) /*'(./src/contracts/auction.rsh:85:16:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v779, uint256(1))), uint256(28) /*'(./src/contracts/auction.rsh:85:16:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v778 == payable(msg.sender))), uint256(29) /*'(./src/contracts/auction.rsh:85:16:dot,[],Just "sender correct")'*/);
    T20 memory nsvs;
    nsvs.v778 = _svs.v778;
    nsvs.v779 = _svs.v779;
    nsvs.v780 = _svs.v780;
    nsvs.v781 = _svs.v781;
    nsvs.v796 = (array_set10(_svs.v786, uint256(0), (T9({elem0: (unsafeAdd(((_svs.v786[uint256(0)]).elem0), uint256(1))), elem1: (_svs.v786[uint256(0)]).elem1, elem2: (_svs.v786[uint256(0)]).elem2}))));
    current_step = uint256(2);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  function _reachi_11(T3 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(14)), uint256(30) /*'state check at ./src/contracts/auction.rsh:251:38:dot'*/);
    (T14 memory _svs) = abi.decode(current_svbs, (T14));
    reachRequire((! locked), uint256(31) /*'locked'*/);
    emit _reach_e11(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(32) /*'time check at ./src/contracts/auction.rsh:251:38:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(33) /*'(./src/contracts/auction.rsh:251:38:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1811( (false));
    _Memory._reachr_AdminCall_adminCall = (false);
    T21  memory _ja;
    _ja.elem0 = _svs.v779;
    _ja.elem1 = _svs.v798;
    _ja.elem2 = _svs.v842;
    _ja.elem3 = true;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v1794;
    _ja.elem6 = _svs.v1795;
    _reachl_10(_ja, _Memory);
    }
  struct _F10329 {
    T0 v918;
    T0 v935;
    T6 v1056;
    uint256 v1067;
    T23 v1119;
    T23 v1120;
    T1 v1130;
    T23 v1143;
    T23 v1144;
    T1 v1154;
    uint256 v1222;
    uint256 v1325;
    uint256 v10319;
    uint256 v10320;
    uint256 v10321;
    uint256 v10325;
    uint256 v10326;
    uint256 v10327;
    }
  function _reachi_12(T8 memory _a, Memory memory _Memory) internal  {
    _F10329 memory _f;
    reachRequire((current_step == uint256(15)), uint256(34) /*'state check at ./src/contracts/auction.rsh:123:31:dot'*/);
    (T15 memory _svs) = abi.decode(current_svbs, (T15));
    reachRequire((! locked), uint256(35) /*'locked'*/);
    emit _reach_e12(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(36) /*'time check at ./src/contracts/auction.rsh:123:31:dot'*/);
    if ((_a.elem1).which == _enum_T7.Auctioneer_stopAuction0_114) {
    reachRequire((msg.value == uint256(0)), uint256(37) /*'(./src/contracts/auction.rsh:123:31:dot,[],"verify network token pay amount")'*/);
    if (((payable(msg.sender) == _svs.v778) ? true : (payable(msg.sender) == _svs.v798))) {
      _f.v918.id = _svs.v808;
      _f.v918.blockEnded = uint256(block.number);
      _f.v918.lastBid = _svs.v842;
      emit _reach_oe_v918( _f.v918);
      _Memory._reachr_Auctioneer_stopAuction = _f.v918;
      T22  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v808;
      _ja.elem6 = _svs.v814;
      _ja.elem7 = _svs.v815;
      _ja.elem8 = _svs.v816;
      _ja.elem9 = _svs.v836;
      _ja.elem10 = _f.v918;
      _ja.elem11 = _svs.v839;
      _ja.elem12 = _svs.v840;
      _ja.elem13 = false;
      _ja.elem14 = _svs.v842;
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = _svs.v849;
      _ja.elem17 = _svs.v850;
      _reachl_3(_ja, _Memory);
      }
    else {
      _f.v935.id = uint256(0);
      _f.v935.blockEnded = uint256(0);
      _f.v935.lastBid = uint256(0);
      emit _reach_oe_v935( _f.v935);
      _Memory._reachr_Auctioneer_stopAuction = _f.v935;
      T22  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v808;
      _ja.elem6 = _svs.v814;
      _ja.elem7 = _svs.v815;
      _ja.elem8 = _svs.v816;
      _ja.elem9 = _svs.v836;
      _ja.elem10 = _svs.v838;
      _ja.elem11 = _svs.v839;
      _ja.elem12 = _svs.v840;
      _ja.elem13 = _svs.v841;
      _ja.elem14 = _svs.v842;
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = _svs.v849;
      _ja.elem17 = _svs.v850;
      _reachl_3(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T7.Bidder_bid0_114) {
    _f.v1056 = (_a.elem1)._Bidder_bid0_114;
    reachRequire((((_f.v1056.elem0) > _svs.v842)), uint256(38) /*'(reach standard library:57:5:application,[at ./src/contracts/auction.rsh:141:38:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/auction.rsh:140:49:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp),at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:140:49:function exp),at ./src/contracts/auction.rsh:123:31:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:123:31:function exp)],Just "Your bid is too low, please try again")'*/);
    _f.v1067 = unsafeAdd(_svs.v850, (_f.v1056.elem0));
    reachRequire((msg.value == (_f.v1056.elem0)), uint256(39) /*'(./src/contracts/auction.rsh:123:31:dot,[],"verify network token pay amount")'*/);
    if (_svs.v840) {
      {
        _f.v10320 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), 0);
        _f.v10319 = unsafeSub(address(this).balance, uint256(0));
        locked = true;
        bytes memory v10322 = abi.encodeWithSelector(I0929d31897a8bf4ecce6b4113b39c0cdd711c6ed.Auctions_updateHighestBidder.selector, _svs.v808, payable(msg.sender));
        (bool v10317, bytes memory v10318) = _svs.v781.call{value: uint256(0)}(v10322);
        checkFunReturn(v10317, v10318, uint256(41) /*'(./src/contracts/auction.rsh:147:91:application,[at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)],"remote Auctions_updateHighestBidder failed")'*/);
        locked = false;
        _f.v10321 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), _f.v10320);
        reachRequire((_f.v10321 == 0), uint256(40) /*'remote did not transfer unexpected non-network tokens'*/);
        _f.v1143.elem0 = unsafeSub(address(this).balance, _f.v10319);
        }
      _f.v1144 = _f.v1143;
      emit _reach_oe_v1143( _f.v1143);
      reachRequire(((uint256(0) == (_f.v1144.elem0))), uint256(42) /*'(./src/contracts/auction.rsh:147:91:application,[at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)],Just "remote bill check")'*/);
      emit bidSuccess( _svs.v808,  (_f.v1056.elem0),  payable(msg.sender),  _svs.v816);
      _f.v1154.elem0 = payable(msg.sender);
      _f.v1154.elem1 = _svs.v842;
      emit _reach_oe_v1154( _f.v1154);
      _Memory._reachr_Bidder_bid = _f.v1154;
      T22  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v808;
      _ja.elem6 = _svs.v814;
      _ja.elem7 = _svs.v815;
      _ja.elem8 = _svs.v816;
      _ja.elem9 = _svs.v836;
      _ja.elem10 = _svs.v838;
      _ja.elem11 = payable(msg.sender);
      _ja.elem12 = false;
      _ja.elem13 = _svs.v841;
      _ja.elem14 = (_f.v1056.elem0);
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = _svs.v849;
      _ja.elem17 = (unsafeAdd(_f.v1067, (_f.v1144.elem0)));
      _reachl_3(_ja, _Memory);
      }
    else {
      _svs.v839.transfer(_svs.v842);
      {
        _f.v10326 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), 0);
        _f.v10325 = unsafeSub(address(this).balance, uint256(0));
        locked = true;
        bytes memory v10328 = abi.encodeWithSelector(I0929d31897a8bf4ecce6b4113b39c0cdd711c6ed.Auctions_updateHighestBidder.selector, _svs.v808, payable(msg.sender));
        (bool v10323, bytes memory v10324) = _svs.v781.call{value: uint256(0)}(v10328);
        checkFunReturn(v10323, v10324, uint256(44) /*'(./src/contracts/auction.rsh:147:91:application,[at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)],"remote Auctions_updateHighestBidder failed")'*/);
        locked = false;
        _f.v10327 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), _f.v10326);
        reachRequire((_f.v10327 == 0), uint256(43) /*'remote did not transfer unexpected non-network tokens'*/);
        _f.v1119.elem0 = unsafeSub(address(this).balance, _f.v10325);
        }
      _f.v1120 = _f.v1119;
      emit _reach_oe_v1119( _f.v1119);
      reachRequire(((uint256(0) == (_f.v1120.elem0))), uint256(45) /*'(./src/contracts/auction.rsh:147:91:application,[at ./src/contracts/auction.rsh:144:50:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:144:50:function exp)],Just "remote bill check")'*/);
      emit bidSuccess( _svs.v808,  (_f.v1056.elem0),  payable(msg.sender),  _svs.v816);
      _f.v1130.elem0 = payable(msg.sender);
      _f.v1130.elem1 = _svs.v842;
      emit _reach_oe_v1130( _f.v1130);
      _Memory._reachr_Bidder_bid = _f.v1130;
      T22  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v808;
      _ja.elem6 = _svs.v814;
      _ja.elem7 = _svs.v815;
      _ja.elem8 = _svs.v816;
      _ja.elem9 = _svs.v836;
      _ja.elem10 = _svs.v838;
      _ja.elem11 = payable(msg.sender);
      _ja.elem12 = false;
      _ja.elem13 = _svs.v841;
      _ja.elem14 = (_f.v1056.elem0);
      _ja.elem15 = uint256(block.number);
      _ja.elem16 = _svs.v849;
      _ja.elem17 = (unsafeAdd((unsafeSub(_f.v1067, _svs.v842)), (_f.v1120.elem0)));
      _reachl_3(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T7.Bidder_optIn0_114) {
    _f.v1222 = unsafeAdd(_svs.v850, uint256(1000000));
    reachRequire((msg.value == uint256(1000000)), uint256(46) /*'(./src/contracts/auction.rsh:123:31:dot,[],"verify network token pay amount")'*/);
    if ((_f.v1222 >= uint256(900000))) {
      _f.v1325 = unsafeSub(_f.v1222, uint256(900000));
      _svs.v798.transfer(uint256(900000));
      if ((_f.v1325 >= uint256(100000))) {
        _svs.v778.transfer(uint256(100000));
        emit optInSuccess( _svs.v808,  payable(msg.sender));
        emit _reach_oe_v1332( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T22  memory _ja;
        _ja.elem0 = _svs.v778;
        _ja.elem1 = _svs.v779;
        _ja.elem2 = _svs.v781;
        _ja.elem3 = _svs.v798;
        _ja.elem4 = _svs.v803;
        _ja.elem5 = _svs.v808;
        _ja.elem6 = _svs.v814;
        _ja.elem7 = _svs.v815;
        _ja.elem8 = _svs.v816;
        _ja.elem9 = _svs.v836;
        _ja.elem10 = _svs.v838;
        _ja.elem11 = _svs.v839;
        _ja.elem12 = _svs.v840;
        _ja.elem13 = _svs.v841;
        _ja.elem14 = _svs.v842;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v849;
        _ja.elem17 = (unsafeSub(_f.v1325, uint256(100000)));
        _reachl_3(_ja, _Memory);
        }
      else {
        emit optInSuccess( _svs.v808,  payable(msg.sender));
        emit _reach_oe_v1339( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T22  memory _ja;
        _ja.elem0 = _svs.v778;
        _ja.elem1 = _svs.v779;
        _ja.elem2 = _svs.v781;
        _ja.elem3 = _svs.v798;
        _ja.elem4 = _svs.v803;
        _ja.elem5 = _svs.v808;
        _ja.elem6 = _svs.v814;
        _ja.elem7 = _svs.v815;
        _ja.elem8 = _svs.v816;
        _ja.elem9 = _svs.v836;
        _ja.elem10 = _svs.v838;
        _ja.elem11 = _svs.v839;
        _ja.elem12 = _svs.v840;
        _ja.elem13 = _svs.v841;
        _ja.elem14 = _svs.v842;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v849;
        _ja.elem17 = _f.v1325;
        _reachl_3(_ja, _Memory);
        }
      }
    else {
      if ((_f.v1222 >= uint256(100000))) {
        _svs.v778.transfer(uint256(100000));
        emit optInSuccess( _svs.v808,  payable(msg.sender));
        emit _reach_oe_v1352( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T22  memory _ja;
        _ja.elem0 = _svs.v778;
        _ja.elem1 = _svs.v779;
        _ja.elem2 = _svs.v781;
        _ja.elem3 = _svs.v798;
        _ja.elem4 = _svs.v803;
        _ja.elem5 = _svs.v808;
        _ja.elem6 = _svs.v814;
        _ja.elem7 = _svs.v815;
        _ja.elem8 = _svs.v816;
        _ja.elem9 = _svs.v836;
        _ja.elem10 = _svs.v838;
        _ja.elem11 = _svs.v839;
        _ja.elem12 = _svs.v840;
        _ja.elem13 = _svs.v841;
        _ja.elem14 = _svs.v842;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v849;
        _ja.elem17 = (unsafeSub(_f.v1222, uint256(100000)));
        _reachl_3(_ja, _Memory);
        }
      else {
        emit optInSuccess( _svs.v808,  payable(msg.sender));
        emit _reach_oe_v1359( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T22  memory _ja;
        _ja.elem0 = _svs.v778;
        _ja.elem1 = _svs.v779;
        _ja.elem2 = _svs.v781;
        _ja.elem3 = _svs.v798;
        _ja.elem4 = _svs.v803;
        _ja.elem5 = _svs.v808;
        _ja.elem6 = _svs.v814;
        _ja.elem7 = _svs.v815;
        _ja.elem8 = _svs.v816;
        _ja.elem9 = _svs.v836;
        _ja.elem10 = _svs.v838;
        _ja.elem11 = _svs.v839;
        _ja.elem12 = _svs.v840;
        _ja.elem13 = _svs.v841;
        _ja.elem14 = _svs.v842;
        _ja.elem15 = uint256(block.number);
        _ja.elem16 = _svs.v849;
        _ja.elem17 = _f.v1222;
        _reachl_3(_ja, _Memory);
        }
      }
    }
    }
  struct _F10342 {
    bool v803;
    T24 v804;
    T24 v805;
    address payable v815;
    T25 v822;
    T23 v823;
    T23 v824;
    T0 v837;
    uint256 v10332;
    uint256 v10333;
    uint256 v10334;
    uint256 v10338;
    uint256 v10339;
    uint256 v10340;
    }
  function _reachi_2(T6 memory _a, Memory memory _Memory) internal  {
    _F10342 memory _f;
    reachRequire((current_step == uint256(2)), uint256(47) /*'state check at ./src/contracts/auction.rsh:87:15:dot'*/);
    (T20 memory _svs) = abi.decode(current_svbs, (T20));
    reachRequire((! locked), uint256(48) /*'locked'*/);
    emit _reach_e2(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(49) /*'time check at ./src/contracts/auction.rsh:87:15:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(50) /*'(./src/contracts/auction.rsh:87:15:dot,[],"verify network token pay amount")'*/);
    {
      _f.v10333 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), 0);
      _f.v10332 = unsafeSub(address(this).balance, uint256(0));
      locked = true;
      bytes memory v10335 = abi.encodeWithSelector(I65c391f23b0f0e4ab619548bba5869629951b155.Auctions_getID.selector);
      (bool v10330, bytes memory v10331) = _svs.v781.call{value: uint256(0)}(v10335);
      checkFunReturn(v10330, v10331, uint256(52) /*'(./src/contracts/auction.rsh:99:48:application,[],"remote Auctions_getID failed")'*/);
      locked = false;
      _f.v10334 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), _f.v10333);
      reachRequire((_f.v10334 == 0), uint256(51) /*'remote did not transfer unexpected non-network tokens'*/);
      _f.v804.elem0 = unsafeSub(address(this).balance, _f.v10332);
      _f.v804.elem1 = abi.decode(v10331, (uint256));
      }
    _f.v805 = _f.v804;
    emit _reach_oe_v804( _f.v804);
    reachRequire(((uint256(0) == (_f.v805.elem0))), uint256(53) /*'(./src/contracts/auction.rsh:99:48:application,[],Just "remote bill check")'*/);
    _f.v815 = payable(address(this));
    _f.v822.id = (_f.v805.elem1);
    _f.v822.contractInfo = _f.v815;
    _f.v822.blockCreated = uint256(block.number);
    _f.v822.owner = _svs.v778;
    _f.v822.title = (_svs.v780._title);
    _f.v822.description = (_svs.v780._description);
    _f.v822.price = (_svs.v780._price);
    _f.v822.tokenId = _svs.v779;
    {
      _f.v10339 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), 0);
      _f.v10338 = unsafeSub(address(this).balance, uint256(0));
      locked = true;
      bytes memory v10341 = abi.encodeWithSelector(I05ae2f580d719327ba7d89e9dc85dbe2eb5dc03e.Auctions_created.selector, _f.v822);
      (bool v10336, bytes memory v10337) = _svs.v781.call{value: uint256(0)}(v10341);
      checkFunReturn(v10336, v10337, uint256(55) /*'(./src/contracts/auction.rsh:116:39:application,[],"remote Auctions_created failed")'*/);
      locked = false;
      _f.v10340 = unsafeSub(tokenBalanceOf(_svs.v779, address(this)), _f.v10339);
      reachRequire((_f.v10340 == 0), uint256(54) /*'remote did not transfer unexpected non-network tokens'*/);
      _f.v823.elem0 = unsafeSub(address(this).balance, _f.v10338);
      }
    _f.v824 = _f.v823;
    emit _reach_oe_v823( _f.v823);
    reachRequire(((uint256(0) == (_f.v824.elem0))), uint256(56) /*'(./src/contracts/auction.rsh:116:39:application,[],Just "remote bill check")'*/);
    emit created( (_f.v805.elem1),  _svs.v778);
    _f.v837.id = (_f.v805.elem1);
    _f.v837.blockEnded = uint256(0);
    _f.v837.lastBid = uint256(0);
    T22  memory _ja;
    _ja.elem0 = _svs.v778;
    _ja.elem1 = _svs.v779;
    _ja.elem2 = _svs.v781;
    _ja.elem3 = payable(msg.sender);
    _ja.elem4 = _f.v803;
    _ja.elem5 = (_f.v805.elem1);
    _ja.elem6 = (uint256(block.number));
    _ja.elem7 = _f.v815;
    _ja.elem8 = (_svs.v780._title);
    _ja.elem9 = (safeAdd(uint256(block.number), (_svs.v780._deadline)));
    _ja.elem10 = _f.v837;
    _ja.elem11 = _svs.v778;
    _ja.elem12 = true;
    _ja.elem13 = true;
    _ja.elem14 = uint256(0);
    _ja.elem15 = uint256(block.number);
    _ja.elem16 = _svs.v796;
    _ja.elem17 = (unsafeAdd((_f.v805.elem0), (_f.v824.elem0)));
    _reachl_3(_ja, _Memory);
    }
  function _reachi_6(T3 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(7)), uint256(57) /*'state check at ./src/contracts/auction.rsh:251:38:dot'*/);
    (T11 memory _svs) = abi.decode(current_svbs, (T11));
    reachRequire((! locked), uint256(58) /*'locked'*/);
    emit _reach_e6(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(59) /*'time check at ./src/contracts/auction.rsh:251:38:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(60) /*'(./src/contracts/auction.rsh:251:38:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1644( (false));
    _Memory._reachr_AdminCall_adminCall = (false);
    T21  memory _ja;
    _ja.elem0 = _svs.v779;
    _ja.elem1 = _svs.v798;
    _ja.elem2 = _svs.v842;
    _ja.elem3 = true;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v1627;
    _ja.elem6 = _svs.v1628;
    _reachl_5(_ja, _Memory);
    }
  function _reachi_8(T3 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(10)), uint256(61) /*'state check at ./src/contracts/auction.rsh:251:38:dot'*/);
    (T12 memory _svs) = abi.decode(current_svbs, (T12));
    reachRequire((! locked), uint256(62) /*'locked'*/);
    emit _reach_e8(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(63) /*'time check at ./src/contracts/auction.rsh:251:38:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(64) /*'(./src/contracts/auction.rsh:251:38:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1728( (false));
    _Memory._reachr_AdminCall_adminCall = (false);
    T21  memory _ja;
    _ja.elem0 = _svs.v779;
    _ja.elem1 = _svs.v798;
    _ja.elem2 = _svs.v842;
    _ja.elem3 = true;
    _ja.elem4 = uint256(block.number);
    _ja.elem5 = _svs.v1711;
    _ja.elem6 = _svs.v1712;
    _reachl_7(_ja, _Memory);
    }
  function _reachi_9(T5 memory _a, Memory memory _Memory) internal  {
    reachRequire((current_step == uint256(11)), uint256(65) /*'state check at ./src/contracts/auction.rsh:204:66:dot'*/);
    (T13 memory _svs) = abi.decode(current_svbs, (T13));
    reachRequire((! locked), uint256(66) /*'locked'*/);
    emit _reach_e9(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(67) /*'time check at ./src/contracts/auction.rsh:204:66:dot'*/);
    if ((_a.elem1).which == _enum_T4.Auctioneer_acceptSale0_419) {
    reachRequire((msg.value == uint256(0)), uint256(68) /*'(./src/contracts/auction.rsh:204:66:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1442( (true));
    _Memory._reachr_Auctioneer_acceptSale = (true);
    if (((payable(msg.sender) == _svs.v778) ? true : (payable(msg.sender) == _svs.v798))) {
      T26  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v816;
      _ja.elem6 = _svs.v838;
      _ja.elem7 = _svs.v839;
      _ja.elem8 = _svs.v842;
      _ja.elem9 = _svs.v1384;
      _ja.elem10 = true;
      _ja.elem11 = false;
      _ja.elem12 = uint256(block.number);
      _ja.elem13 = _svs.v1393;
      _ja.elem14 = _svs.v1394;
      _reachl_4(_ja, _Memory);
      }
    else {
      T26  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v816;
      _ja.elem6 = _svs.v838;
      _ja.elem7 = _svs.v839;
      _ja.elem8 = _svs.v842;
      _ja.elem9 = _svs.v1384;
      _ja.elem10 = _svs.v1385;
      _ja.elem11 = _svs.v1386;
      _ja.elem12 = uint256(block.number);
      _ja.elem13 = _svs.v1393;
      _ja.elem14 = _svs.v1394;
      _reachl_4(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T4.Auctioneer_rejectSale0_419) {
    reachRequire((msg.value == uint256(0)), uint256(69) /*'(./src/contracts/auction.rsh:204:66:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1511( (false));
    _Memory._reachr_Auctioneer_rejectSale = (false);
    if (((payable(msg.sender) == _svs.v778) ? true : (payable(msg.sender) == _svs.v798))) {
      T26  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v816;
      _ja.elem6 = _svs.v838;
      _ja.elem7 = _svs.v839;
      _ja.elem8 = _svs.v842;
      _ja.elem9 = _svs.v1384;
      _ja.elem10 = false;
      _ja.elem11 = false;
      _ja.elem12 = uint256(block.number);
      _ja.elem13 = _svs.v1393;
      _ja.elem14 = _svs.v1394;
      _reachl_4(_ja, _Memory);
      }
    else {
      T26  memory _ja;
      _ja.elem0 = _svs.v778;
      _ja.elem1 = _svs.v779;
      _ja.elem2 = _svs.v781;
      _ja.elem3 = _svs.v798;
      _ja.elem4 = _svs.v803;
      _ja.elem5 = _svs.v816;
      _ja.elem6 = _svs.v838;
      _ja.elem7 = _svs.v839;
      _ja.elem8 = _svs.v842;
      _ja.elem9 = _svs.v1384;
      _ja.elem10 = _svs.v1385;
      _ja.elem11 = _svs.v1386;
      _ja.elem12 = uint256(block.number);
      _ja.elem13 = _svs.v1393;
      _ja.elem14 = _svs.v1394;
      _reachl_4(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T4.Bidder_updateState0_419) {
    reachRequire((msg.value == uint256(0)), uint256(70) /*'(./src/contracts/auction.rsh:204:66:dot,[],"verify network token pay amount")'*/);
    emit _reach_oe_v1580( (false));
    _Memory._reachr_Bidder_updateState = (false);
    T26  memory _ja;
    _ja.elem0 = _svs.v778;
    _ja.elem1 = _svs.v779;
    _ja.elem2 = _svs.v781;
    _ja.elem3 = _svs.v798;
    _ja.elem4 = _svs.v803;
    _ja.elem5 = _svs.v816;
    _ja.elem6 = _svs.v838;
    _ja.elem7 = _svs.v839;
    _ja.elem8 = _svs.v842;
    _ja.elem9 = _svs.v1384;
    _ja.elem10 = _svs.v1385;
    _ja.elem11 = _svs.v1386;
    _ja.elem12 = uint256(block.number);
    _ja.elem13 = _svs.v1393;
    _ja.elem14 = _svs.v1394;
    _reachl_4(_ja, _Memory);
    }
    }
  function _reachl_10(T21 memory _a, Memory memory _Memory) internal  {
    if (_a.elem3) {
      T14 memory nsvs;
      nsvs.v779 = _a.elem0;
      nsvs.v798 = _a.elem1;
      nsvs.v842 = _a.elem2;
      nsvs.v1794 = _a.elem5;
      nsvs.v1795 = _a.elem6;
      current_step = uint256(14);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      safeTokenTransfer(_a.elem0, _a.elem1, ((_a.elem5[uint256(0)]).elem0));
      _a.elem1.transfer(_a.elem6);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  struct _F10359 {
    T23 v1369;
    T23 v1370;
    uint256 v1377;
    T23 v1777;
    T23 v1778;
    uint256 v10349;
    uint256 v10350;
    uint256 v10351;
    uint256 v10355;
    uint256 v10356;
    uint256 v10357;
    }
  function _reachl_3(T22 memory _a, Memory memory _Memory) internal  {
    _F10359 memory _f;
    if (((_a.elem15 < _a.elem9) ? _a.elem13 : false)) {
      T15 memory nsvs;
      nsvs.v778 = _a.elem0;
      nsvs.v779 = _a.elem1;
      nsvs.v781 = _a.elem2;
      nsvs.v798 = _a.elem3;
      nsvs.v803 = _a.elem4;
      nsvs.v808 = _a.elem5;
      nsvs.v814 = _a.elem6;
      nsvs.v815 = _a.elem7;
      nsvs.v816 = _a.elem8;
      nsvs.v836 = _a.elem9;
      nsvs.v838 = _a.elem10;
      nsvs.v839 = _a.elem11;
      nsvs.v840 = _a.elem12;
      nsvs.v841 = true;
      nsvs.v842 = _a.elem14;
      nsvs.v849 = _a.elem16;
      nsvs.v850 = _a.elem17;
      current_step = uint256(15);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      {
        _f.v10350 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), 0);
        _f.v10349 = unsafeSub(address(this).balance, uint256(0));
        locked = true;
        bytes memory v10352 = abi.encodeWithSelector(I9ee3fdb5efac1d6cf40c9063bd3e2dab1eb4c163.Auctions_endSuccess.selector, _a.elem5);
        (bool v10347, bytes memory v10348) = _a.elem2.call{value: uint256(0)}(v10352);
        checkFunReturn(v10347, v10348, uint256(72) /*'(./src/contracts/auction.rsh:188:42:application,[],"remote Auctions_endSuccess failed")'*/);
        locked = false;
        _f.v10351 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), _f.v10350);
        reachRequire((_f.v10351 == 0), uint256(71) /*'remote did not transfer unexpected non-network tokens'*/);
        _f.v1369.elem0 = unsafeSub(address(this).balance, _f.v10349);
        }
      _f.v1370 = _f.v1369;
      emit _reach_oe_v1369( _f.v1369);
      _f.v1377 = unsafeAdd(_a.elem17, (_f.v1370.elem0));
      reachRequire(((uint256(0) == (_f.v1370.elem0))), uint256(73) /*'(./src/contracts/auction.rsh:188:42:application,[],Just "remote bill check")'*/);
      emit down( _a.elem5,  _a.elem14,  _a.elem0,  _a.elem7,  _a.elem6,  _a.elem8);
      if ((_a.elem14 > uint256(0))) {
        T26  memory _ja;
        _ja.elem0 = _a.elem0;
        _ja.elem1 = _a.elem1;
        _ja.elem2 = _a.elem2;
        _ja.elem3 = _a.elem3;
        _ja.elem4 = _a.elem4;
        _ja.elem5 = _a.elem8;
        _ja.elem6 = _a.elem10;
        _ja.elem7 = _a.elem11;
        _ja.elem8 = _a.elem14;
        _ja.elem9 = (safeAdd(_a.elem15, uint256(50)));
        _ja.elem10 = true;
        _ja.elem11 = true;
        _ja.elem12 = _a.elem15;
        _ja.elem13 = _a.elem16;
        _ja.elem14 = _f.v1377;
        _reachl_4(_ja, _Memory);
        }
      else {
        safeTokenTransfer(_a.elem1, _a.elem0, ((_a.elem16[uint256(0)]).elem0));
        _a.elem11.transfer(_f.v1377);
        {
          _f.v10356 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), 0);
          _f.v10355 = unsafeSub(address(this).balance, uint256(0));
          locked = true;
          bytes memory v10358 = abi.encodeWithSelector(I71ecfd913dbeb55e00ddeba69e01686608f7a8ff.Auctions_ended.selector, _a.elem10);
          (bool v10353, bytes memory v10354) = _a.elem2.call{value: uint256(0)}(v10358);
          checkFunReturn(v10353, v10354, uint256(75) /*'(./src/contracts/auction.rsh:250:37:application,[],"remote Auctions_ended failed")'*/);
          locked = false;
          _f.v10357 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), _f.v10356);
          reachRequire((_f.v10357 == 0), uint256(74) /*'remote did not transfer unexpected non-network tokens'*/);
          _f.v1777.elem0 = unsafeSub(address(this).balance, _f.v10355);
          }
        _f.v1778 = _f.v1777;
        emit _reach_oe_v1777( _f.v1777);
        reachRequire(((uint256(0) == (_f.v1778.elem0))), uint256(76) /*'(./src/contracts/auction.rsh:250:37:application,[],Just "remote bill check")'*/);
        T21  memory _ja;
        _ja.elem0 = _a.elem1;
        _ja.elem1 = _a.elem3;
        _ja.elem2 = _a.elem14;
        _ja.elem3 = true;
        _ja.elem4 = _a.elem15;
        _ja.elem5 = (array_set10(_a.elem16, uint256(0), (T9({elem0: (unsafeSub(((_a.elem16[uint256(0)]).elem0), ((_a.elem16[uint256(0)]).elem0))), elem1: (_a.elem16[uint256(0)]).elem1, elem2: (_a.elem16[uint256(0)]).elem2}))));
        _ja.elem6 = (unsafeAdd((unsafeSub(_f.v1377, _f.v1377)), (_f.v1778.elem0)));
        _reachl_10(_ja, _Memory);
        }
      }
    }
  struct _F10372 {
    T23 v1610;
    T23 v1611;
    T23 v1694;
    T23 v1695;
    uint256 v10362;
    uint256 v10363;
    uint256 v10364;
    uint256 v10368;
    uint256 v10369;
    uint256 v10370;
    }
  function _reachl_4(T26 memory _a, Memory memory _Memory) internal  {
    _F10372 memory _f;
    if (((_a.elem12 < _a.elem9) ? _a.elem11 : false)) {
      T13 memory nsvs;
      nsvs.v778 = _a.elem0;
      nsvs.v779 = _a.elem1;
      nsvs.v781 = _a.elem2;
      nsvs.v798 = _a.elem3;
      nsvs.v803 = _a.elem4;
      nsvs.v816 = _a.elem5;
      nsvs.v838 = _a.elem6;
      nsvs.v839 = _a.elem7;
      nsvs.v842 = _a.elem8;
      nsvs.v1384 = _a.elem9;
      nsvs.v1385 = _a.elem10;
      nsvs.v1386 = true;
      nsvs.v1393 = _a.elem13;
      nsvs.v1394 = _a.elem14;
      current_step = uint256(11);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      if (_a.elem10) {
        safeTokenTransfer(_a.elem1, _a.elem7, ((_a.elem13[uint256(0)]).elem0));
        _a.elem0.transfer(_a.elem14);
        emit accepted( _a.elem5,  _a.elem8,  _a.elem0,  _a.elem7,  _a.elem1);
        {
          _f.v10363 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), 0);
          _f.v10362 = unsafeSub(address(this).balance, uint256(0));
          locked = true;
          bytes memory v10365 = abi.encodeWithSelector(I71ecfd913dbeb55e00ddeba69e01686608f7a8ff.Auctions_ended.selector, _a.elem6);
          (bool v10360, bytes memory v10361) = _a.elem2.call{value: uint256(0)}(v10365);
          checkFunReturn(v10360, v10361, uint256(78) /*'(./src/contracts/auction.rsh:250:37:application,[],"remote Auctions_ended failed")'*/);
          locked = false;
          _f.v10364 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), _f.v10363);
          reachRequire((_f.v10364 == 0), uint256(77) /*'remote did not transfer unexpected non-network tokens'*/);
          _f.v1610.elem0 = unsafeSub(address(this).balance, _f.v10362);
          }
        _f.v1611 = _f.v1610;
        emit _reach_oe_v1610( _f.v1610);
        reachRequire(((uint256(0) == (_f.v1611.elem0))), uint256(79) /*'(./src/contracts/auction.rsh:250:37:application,[],Just "remote bill check")'*/);
        T21  memory _ja;
        _ja.elem0 = _a.elem1;
        _ja.elem1 = _a.elem3;
        _ja.elem2 = _a.elem8;
        _ja.elem3 = true;
        _ja.elem4 = _a.elem12;
        _ja.elem5 = (array_set10(_a.elem13, uint256(0), (T9({elem0: (unsafeSub(((_a.elem13[uint256(0)]).elem0), ((_a.elem13[uint256(0)]).elem0))), elem1: (_a.elem13[uint256(0)]).elem1, elem2: (_a.elem13[uint256(0)]).elem2}))));
        _ja.elem6 = (unsafeAdd((unsafeSub(_a.elem14, _a.elem14)), (_f.v1611.elem0)));
        _reachl_5(_ja, _Memory);
        }
      else {
        safeTokenTransfer(_a.elem1, _a.elem0, ((_a.elem13[uint256(0)]).elem0));
        _a.elem7.transfer(_a.elem14);
        emit rejected( _a.elem5,  _a.elem8,  _a.elem0,  _a.elem7,  _a.elem1);
        {
          _f.v10369 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), 0);
          _f.v10368 = unsafeSub(address(this).balance, uint256(0));
          locked = true;
          bytes memory v10371 = abi.encodeWithSelector(I71ecfd913dbeb55e00ddeba69e01686608f7a8ff.Auctions_ended.selector, _a.elem6);
          (bool v10366, bytes memory v10367) = _a.elem2.call{value: uint256(0)}(v10371);
          checkFunReturn(v10366, v10367, uint256(81) /*'(./src/contracts/auction.rsh:250:37:application,[],"remote Auctions_ended failed")'*/);
          locked = false;
          _f.v10370 = unsafeSub(tokenBalanceOf(_a.elem1, address(this)), _f.v10369);
          reachRequire((_f.v10370 == 0), uint256(80) /*'remote did not transfer unexpected non-network tokens'*/);
          _f.v1694.elem0 = unsafeSub(address(this).balance, _f.v10368);
          }
        _f.v1695 = _f.v1694;
        emit _reach_oe_v1694( _f.v1694);
        reachRequire(((uint256(0) == (_f.v1695.elem0))), uint256(82) /*'(./src/contracts/auction.rsh:250:37:application,[],Just "remote bill check")'*/);
        T21  memory _ja;
        _ja.elem0 = _a.elem1;
        _ja.elem1 = _a.elem3;
        _ja.elem2 = _a.elem8;
        _ja.elem3 = true;
        _ja.elem4 = _a.elem12;
        _ja.elem5 = (array_set10(_a.elem13, uint256(0), (T9({elem0: (unsafeSub(((_a.elem13[uint256(0)]).elem0), ((_a.elem13[uint256(0)]).elem0))), elem1: (_a.elem13[uint256(0)]).elem1, elem2: (_a.elem13[uint256(0)]).elem2}))));
        _ja.elem6 = (unsafeAdd((unsafeSub(_a.elem14, _a.elem14)), (_f.v1695.elem0)));
        _reachl_7(_ja, _Memory);
        }
      }
    }
  function _reachl_5(T21 memory _a, Memory memory _Memory) internal  {
    if (_a.elem3) {
      T11 memory nsvs;
      nsvs.v779 = _a.elem0;
      nsvs.v798 = _a.elem1;
      nsvs.v842 = _a.elem2;
      nsvs.v1627 = _a.elem5;
      nsvs.v1628 = _a.elem6;
      current_step = uint256(7);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      safeTokenTransfer(_a.elem0, _a.elem1, ((_a.elem5[uint256(0)]).elem0));
      _a.elem1.transfer(_a.elem6);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function _reachl_7(T21 memory _a, Memory memory _Memory) internal  {
    if (_a.elem3) {
      T12 memory nsvs;
      nsvs.v779 = _a.elem0;
      nsvs.v798 = _a.elem1;
      nsvs.v842 = _a.elem2;
      nsvs.v1711 = _a.elem5;
      nsvs.v1712 = _a.elem6;
      current_step = uint256(10);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      safeTokenTransfer(_a.elem0, _a.elem1, ((_a.elem5[uint256(0)]).elem0));
      _a.elem1.transfer(_a.elem6);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  function AdminCall_adminCall() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_AdminCall_adminCall(_ja, _Memory);
    return _Memory._reachr_AdminCall_adminCall;
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
  function Bidder_bid(uint256 v10271) external payable returns (T1 memory) {
    Memory memory _Memory;
    _reacha_Bidder_bid(v10271, _Memory);
    return _Memory._reachr_Bidder_bid;
    }
  function Bidder_optIn() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Bidder_optIn(_ja, _Memory);
    return _Memory._reachr_Bidder_optIn;
    }
  function Bidder_updateState() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Bidder_updateState(_ja, _Memory);
    return _Memory._reachr_Bidder_updateState;
    }
  constructor(T18 memory v10282) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v10282, _Memory);
    }
  function _reachp_1(T6 calldata v10285) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v10285, _Memory);
    }
  function _reachp_11(T3 calldata v10300) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_11(v10300, _Memory);
    }
  function _reachp_12(T8 calldata v10303) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_12(v10303, _Memory);
    }
  function _reachp_2(T6 calldata v10288) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_2(v10288, _Memory);
    }
  function _reachp_6(T3 calldata v10291) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_6(v10291, _Memory);
    }
  function _reachp_8(T3 calldata v10294) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_8(v10294, _Memory);
    }
  function _reachp_9(T5 calldata v10297) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_9(v10297, _Memory);
    }
  function hasEnded() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_hasEnded(_ja, _Memory);
    return _Memory._reachr_hasEnded;
    }
  function highestPrice() external view returns (uint256) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_highestPrice(_ja, _Memory);
    return _Memory._reachr_highestPrice;
    }
  function live() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_live(_ja, _Memory);
    return _Memory._reachr_live;
    }
  }
