// Automatically generated with Reach 0.1.12 (1f68dfdb)
pragma abicoder v2;
pragma solidity ^0.8.16;

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
  uint256 elem1;
  bool elem2;
  }
struct T5 {
  address payable v724;
  address payable v725;
  bytes20 v747;
  address payable v754;
  uint256 v757;
  bool v1145;
  T3[1] v1156;
  uint256 v1157;
  uint256 v1169;
  }
struct T6 {
  bytes32 elem0;
  bytes32 elem1;
  bytes16 elem2;
  }
struct T7 {
  address payable _Admin;
  uint256 _deadline;
  T6 _description;
  uint256 _id;
  address payable _owner;
  uint256 _price;
  bytes20 _title;
  uint256 _tokenID;
  }
struct T8 {
  address payable v724;
  address payable v725;
  T7 v726;
  uint256 v743;
  uint256 v744;
  address payable v745;
  bytes20 v747;
  uint256 v753;
  address payable v754;
  bool v755;
  bool v756;
  uint256 v757;
  uint256 v758;
  T3[1] v764;
  uint256 v765;
  bool v786;
  }
enum _enum_T9 {Auctioneer_acceptSale0_416, Auctioneer_rejectSale0_416}
struct T9 {
  _enum_T9 which;
  bool _Auctioneer_acceptSale0_416;
  bool _Auctioneer_rejectSale0_416;
  }
struct T10 {
  uint256 elem0;
  T9 elem1;
  }
struct T11 {
  uint256 elem0;
  }
enum _enum_T12 {Auctioneer_stopAuction0_103, Bidder_bid0_103, Bidder_optIn0_103}
struct T12 {
  _enum_T12 which;
  bool _Auctioneer_stopAuction0_103;
  T11 _Bidder_bid0_103;
  bool _Bidder_optIn0_103;
  }
struct T13 {
  uint256 elem0;
  T12 elem1;
  }
struct T14 {
  uint256 elem0;
  address payable elem1;
  T7 elem2;
  }
struct T15 {
  address payable v724;
  address payable v725;
  T7 v726;
  uint256 v727;
  T3[1] v731;
  }
struct T16 {
  address payable elem0;
  address payable elem1;
  T7 elem2;
  uint256 elem3;
  uint256 elem4;
  address payable elem5;
  bytes20 elem6;
  uint256 elem7;
  address payable elem8;
  bool elem9;
  bool elem10;
  uint256 elem11;
  uint256 elem12;
  uint256 elem13;
  T3[1] elem14;
  uint256 elem15;
  }
struct T17 {
  address payable elem0;
  address payable elem1;
  bytes20 elem2;
  address payable elem3;
  uint256 elem4;
  bool elem5;
  bool elem6;
  uint256 elem7;
  T3[1] elem8;
  uint256 elem9;
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
  function array_set4(T3[1] memory arr, uint256 idx, T3 memory val) internal  returns (T3[1] memory arrp) {
    for (uint256 i = 0; i < 1; i++){
      arrp[i] = arr[i];
      }
    arrp[idx] = val;
    }
  event _reach_e0(address _who, T14 _a);
  event _reach_e1(address _who, T11 _a);
  event _reach_e4(address _who, T10 _a);
  event _reach_e5(address _who, T11 _a);
  event _reach_e6(address _who, T13 _a);
  event _reach_e7(address _who, T11 _a);
  event _reach_oe_v1100(bool v0);
  event _reach_oe_v1107(bool v0);
  event _reach_oe_v1120(bool v0);
  event _reach_oe_v1127(bool v0);
  event _reach_oe_v1220(bool v0);
  event _reach_oe_v1301(bool v0);
  event _reach_oe_v851(T0 v0);
  event _reach_oe_v966(T1 v0);
  event created(uint256 v0, address payable v1, uint256 v2, address payable v3, bytes20 v4, T6 v5, uint256 v6, address payable v7, uint256 v8);
  event down(bytes20 v0, uint256 v1, uint256 v2, address payable v3, address payable v4, uint256 v5);
  event log(bytes20 v0, uint256 v1, uint256 v2);
  event outcome(bytes20 v0, bytes20 v1, uint256 v2, address payable v3, address payable v4, address payable v5);
  receive () external payable {}
  fallback () external payable {}
  struct Memory {
    bool nil;
    bool _reachr_AuctionView_awaitingConfirmation;
    bool _reachr_AuctionView_isRunning;
    bool _reachr_Auctioneer_acceptSale;
    bool _reachr_Auctioneer_rejectSale;
    T0 _reachr_Auctioneer_stopAuction;
    T1 _reachr_Bidder_bid;
    bool _reachr_Bidder_optIn;
    }
  function AuctionView_awaitingConfirmation() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_AuctionView_awaitingConfirmation(_ja, _Memory);
    return _Memory._reachr_AuctionView_awaitingConfirmation;
    }
  function AuctionView_isRunning() external view returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_AuctionView_isRunning(_ja, _Memory);
    return _Memory._reachr_AuctionView_isRunning;
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
  function Bidder_bid(uint256 v4406) external payable returns (T1 memory) {
    Memory memory _Memory;
    _reacha_Bidder_bid(v4406, _Memory);
    return _Memory._reachr_Bidder_bid;
    }
  function Bidder_optIn() external payable returns (bool) {
    Memory memory _Memory;
    bool  _ja;
    _reacha_Bidder_optIn(_ja, _Memory);
    return _Memory._reachr_Bidder_optIn;
    }
  function _reacha_AuctionView_awaitingConfirmation(bool _a, Memory memory _Memory) internal view {
    reachRequire(((current_step == uint256(5))), uint256(7) /*'(./src/contracts/auction.rsh:54:37:property binding,[],Just "Incorrect state: not leaf")'*/);
    (T5 memory _svs) = abi.decode(current_svbs, (T5));
    _Memory._reachr_AuctionView_awaitingConfirmation = true;
    }
  function _reacha_AuctionView_isRunning(bool _a, Memory memory _Memory) internal view {
    if ((current_step < uint256(6))) {
      reachRequire(((current_step == uint256(5))), uint256(8) /*'(./src/contracts/auction.rsh:53:26:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T5 memory _svs) = abi.decode(current_svbs, (T5));
      _Memory._reachr_AuctionView_isRunning = _svs.v1145;
      }
    else {
      reachRequire(((current_step == uint256(6))), uint256(9) /*'(./src/contracts/auction.rsh:53:26:property binding,[],Just "Incorrect state: not leaf")'*/);
      (T8 memory _svs) = abi.decode(current_svbs, (T8));
      _Memory._reachr_AuctionView_isRunning = _svs.v786;
      }
    }
  struct _F4524 {
    bool v4395;
    T9 v4396;
    }
  function _reacha_Auctioneer_acceptSale(bool _a, Memory memory _Memory) internal  {
    _F4524 memory _f;
    _f.v4396.which = _enum_T9.Auctioneer_acceptSale0_416;
    _f.v4396._Auctioneer_acceptSale0_416 = _f.v4395;
    T10  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4396;
    _reachi_4(_ja, _Memory);
    }
  struct _F4525 {
    bool v4399;
    T9 v4400;
    }
  function _reacha_Auctioneer_rejectSale(bool _a, Memory memory _Memory) internal  {
    _F4525 memory _f;
    _f.v4400.which = _enum_T9.Auctioneer_rejectSale0_416;
    _f.v4400._Auctioneer_rejectSale0_416 = _f.v4399;
    T10  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4400;
    _reachi_4(_ja, _Memory);
    }
  struct _F4526 {
    bool v4403;
    T12 v4404;
    }
  function _reacha_Auctioneer_stopAuction(bool _a, Memory memory _Memory) internal  {
    _F4526 memory _f;
    _f.v4404.which = _enum_T12.Auctioneer_stopAuction0_103;
    _f.v4404._Auctioneer_stopAuction0_103 = _f.v4403;
    T13  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4404;
    _reachi_6(_ja, _Memory);
    }
  struct _F4527 {
    T11 v4408;
    T12 v4409;
    }
  function _reacha_Bidder_bid(uint256 _a, Memory memory _Memory) internal  {
    _F4527 memory _f;
    _f.v4408.elem0 = _a;
    _f.v4409.which = _enum_T12.Bidder_bid0_103;
    _f.v4409._Bidder_bid0_103 = _f.v4408;
    T13  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4409;
    _reachi_6(_ja, _Memory);
    }
  struct _F4528 {
    bool v4412;
    T12 v4413;
    }
  function _reacha_Bidder_optIn(bool _a, Memory memory _Memory) internal  {
    _F4528 memory _f;
    _f.v4413.which = _enum_T12.Bidder_optIn0_103;
    _f.v4413._Bidder_optIn0_103 = _f.v4412;
    T13  memory _ja;
    _ja.elem0 = (uint256(0));
    _ja.elem1 = _f.v4413;
    _reachi_6(_ja, _Memory);
    }
  struct _F4529 {
    T3 v697;
    T3[1] v698;
    T3[1] v731;
    }
  function _reachi_0(T14 memory _a, Memory memory _Memory) internal  {
    _F4529 memory _f;
    reachRequire((! locked), uint256(10) /*'locked'*/);
    emit _reach_e0(msg.sender, _a);
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(11) /*'time check at ./src/contracts/auction.rsh:62:16:dot'*/);
    _f.v697.elem0 = uint256(0);
    _f.v697.elem1 = uint256(0);
    _f.v697.elem2 = false;
    _f.v698[0] = _f.v697;
    _f.v731 = array_set4(_f.v698, uint256(0), (T3({elem0: uint256(0), elem1: (_f.v698[uint256(0)]).elem1, elem2: (_f.v698[uint256(0)]).elem2})));
    
    reachRequire((msg.value == uint256(0)), uint256(12) /*'(./src/contracts/auction.rsh:62:16:dot,[],"verify network token pay amount")'*/);
    T15 memory nsvs;
    nsvs.v724 = payable(msg.sender);
    nsvs.v725 = (_a.elem1);
    nsvs.v726 = (_a.elem2);
    nsvs.v727 = uint256(block.number);
    nsvs.v731 = _f.v731;
    current_step = uint256(1);
    current_time = uint256(block.number);
    current_svbs = abi.encode(nsvs);
    }
  struct _F4530 {
    address payable v745;
    }
  function _reachi_1(T11 memory _a, Memory memory _Memory) internal  {
    _F4530 memory _f;
    reachRequire((! locked), uint256(13) /*'locked'*/);
    emit _reach_e1(msg.sender, _a);
    reachRequire((current_step == uint256(1)), uint256(14) /*'state check at ./src/contracts/auction.rsh:64:16:dot'*/);
    (T15 memory _svs) = abi.decode(current_svbs, (T15));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(15) /*'time check at ./src/contracts/auction.rsh:64:16:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(16) /*'(./src/contracts/auction.rsh:64:16:dot,[],"verify network token pay amount")'*/);
    reachRequire((checkPayAmt(msg.sender, _svs.v725, uint256(1))), uint256(17) /*'(./src/contracts/auction.rsh:64:16:dot,[],"verify non-network token pay amount")'*/);
    reachRequire(((_svs.v724 == payable(msg.sender))), uint256(18) /*'(./src/contracts/auction.rsh:64:16:dot,[],Just "sender correct")'*/);
    _f.v745 = payable(address(this));
    emit created( (_svs.v726._id),  _f.v745,  (uint256(block.number)),  (_svs.v726._owner),  (_svs.v726._title),  (_svs.v726._description),  (_svs.v726._price),  _svs.v725,  (_svs.v726._tokenID));
    T16  memory _ja;
    _ja.elem0 = _svs.v724;
    _ja.elem1 = _svs.v725;
    _ja.elem2 = _svs.v726;
    _ja.elem3 = (uint256(block.number));
    _ja.elem4 = (_svs.v726._id);
    _ja.elem5 = _f.v745;
    _ja.elem6 = (_svs.v726._title);
    _ja.elem7 = (safeAdd(_svs.v727, (_svs.v726._deadline)));
    _ja.elem8 = (_svs.v724);
    _ja.elem9 = (true);
    _ja.elem10 = (true);
    _ja.elem11 = (uint256(0));
    _ja.elem12 = (uint256(block.number));
    _ja.elem13 = (_svs.v727);
    _ja.elem14 = ((array_set4(_svs.v731, uint256(0), (T3({elem0: (unsafeAdd(((_svs.v731[uint256(0)]).elem0), uint256(1))), elem1: (_svs.v731[uint256(0)]).elem1, elem2: (_svs.v731[uint256(0)]).elem2})))));
    _ja.elem15 = (uint256(0));
    _reachl_2(_ja, _Memory);
    }
  struct _F4531 {
    bytes20 v1227;
    bytes20 v1308;
    }
  function _reachi_4(T10 memory _a, Memory memory _Memory) internal  {
    _F4531 memory _f;
    reachRequire((! locked), uint256(19) /*'locked'*/);
    emit _reach_e4(msg.sender, _a);
    reachRequire((current_step == uint256(5)), uint256(20) /*'state check at ./src/contracts/auction.rsh:152:48:dot'*/);
    (T5 memory _svs) = abi.decode(current_svbs, (T5));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(21) /*'time check at ./src/contracts/auction.rsh:152:48:dot'*/);
    reachRequire((uint256(block.number) < _svs.v1169), uint256(22) /*'timeout check at ./src/contracts/auction.rsh:152:48:dot'*/);
    if ((_a.elem1).which == _enum_T9.Auctioneer_acceptSale0_416) {
    reachRequire((msg.value == uint256(0)), uint256(23) /*'(./src/contracts/auction.rsh:152:48:dot,[],"verify network token pay amount")'*/);
    safeTokenTransfer(_svs.v725, _svs.v754, ((_svs.v1156[uint256(0)]).elem0));
    _svs.v724.transfer(_svs.v1157);
    emit _reach_oe_v1220( (true));
    _Memory._reachr_Auctioneer_acceptSale = (true);
    _f.v1227 = hex'6163636570746564000000000000000000000000';
    emit outcome( _f.v1227,  _svs.v747,  _svs.v757,  _svs.v724,  _svs.v754,  _svs.v725);
    T17  memory _ja;
    _ja.elem0 = _svs.v724;
    _ja.elem1 = _svs.v725;
    _ja.elem2 = _svs.v747;
    _ja.elem3 = _svs.v754;
    _ja.elem4 = _svs.v757;
    _ja.elem5 = _svs.v1145;
    _ja.elem6 = (false);
    _ja.elem7 = (uint256(block.number));
    _ja.elem8 = ((array_set4(_svs.v1156, uint256(0), (T3({elem0: (unsafeSub(((_svs.v1156[uint256(0)]).elem0), ((_svs.v1156[uint256(0)]).elem0))), elem1: (_svs.v1156[uint256(0)]).elem1, elem2: (_svs.v1156[uint256(0)]).elem2})))));
    _ja.elem9 = ((unsafeSub(_svs.v1157, _svs.v1157)));
    _reachl_3(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T9.Auctioneer_rejectSale0_416) {
    reachRequire((msg.value == uint256(0)), uint256(24) /*'(./src/contracts/auction.rsh:152:48:dot,[],"verify network token pay amount")'*/);
    safeTokenTransfer(_svs.v725, _svs.v724, ((_svs.v1156[uint256(0)]).elem0));
    _svs.v754.transfer(_svs.v1157);
    emit _reach_oe_v1301( (false));
    _Memory._reachr_Auctioneer_rejectSale = (false);
    _f.v1308 = hex'72656a6563746564000000000000000000000000';
    emit outcome( _f.v1308,  _svs.v747,  _svs.v757,  _svs.v724,  _svs.v754,  _svs.v725);
    T17  memory _ja;
    _ja.elem0 = _svs.v724;
    _ja.elem1 = _svs.v725;
    _ja.elem2 = _svs.v747;
    _ja.elem3 = _svs.v754;
    _ja.elem4 = _svs.v757;
    _ja.elem5 = _svs.v1145;
    _ja.elem6 = (false);
    _ja.elem7 = (uint256(block.number));
    _ja.elem8 = ((array_set4(_svs.v1156, uint256(0), (T3({elem0: (unsafeSub(((_svs.v1156[uint256(0)]).elem0), ((_svs.v1156[uint256(0)]).elem0))), elem1: (_svs.v1156[uint256(0)]).elem1, elem2: (_svs.v1156[uint256(0)]).elem2})))));
    _ja.elem9 = ((unsafeSub(_svs.v1157, _svs.v1157)));
    _reachl_3(_ja, _Memory);
    }
    }
  struct _F4532 {
    bytes20 v1330;
    }
  function _reachi_5(T11 memory _a, Memory memory _Memory) internal  {
    _F4532 memory _f;
    reachRequire((! locked), uint256(25) /*'locked'*/);
    emit _reach_e5(msg.sender, _a);
    reachRequire((current_step == uint256(5)), uint256(26) /*'state check at ./src/contracts/auction.rsh:201:32:dot'*/);
    (T5 memory _svs) = abi.decode(current_svbs, (T5));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(27) /*'time check at ./src/contracts/auction.rsh:201:32:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v1169), uint256(28) /*'timeout check at ./src/contracts/auction.rsh:201:32:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(29) /*'(./src/contracts/auction.rsh:201:32:dot,[at ./src/contracts/auction.rsh:200:53:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:200:53:function exp)],"verify network token pay amount")'*/);
    reachRequire(((_svs.v724 == payable(msg.sender))), uint256(30) /*'(./src/contracts/auction.rsh:201:32:dot,[at ./src/contracts/auction.rsh:200:53:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:200:53:function exp)],Just "sender correct")'*/);
    safeTokenTransfer(_svs.v725, _svs.v754, ((_svs.v1156[uint256(0)]).elem0));
    _svs.v724.transfer(_svs.v1157);
    _f.v1330 = hex'6163636570746564000000000000000000000000';
    emit outcome( _f.v1330,  _svs.v747,  _svs.v757,  _svs.v724,  _svs.v754,  _svs.v725);
    T17  memory _ja;
    _ja.elem0 = _svs.v724;
    _ja.elem1 = _svs.v725;
    _ja.elem2 = _svs.v747;
    _ja.elem3 = _svs.v754;
    _ja.elem4 = _svs.v757;
    _ja.elem5 = _svs.v1145;
    _ja.elem6 = (false);
    _ja.elem7 = (uint256(block.number));
    _ja.elem8 = ((array_set4(_svs.v1156, uint256(0), (T3({elem0: (unsafeSub(((_svs.v1156[uint256(0)]).elem0), ((_svs.v1156[uint256(0)]).elem0))), elem1: (_svs.v1156[uint256(0)]).elem1, elem2: (_svs.v1156[uint256(0)]).elem2})))));
    _ja.elem9 = ((unsafeSub(_svs.v1157, _svs.v1157)));
    _reachl_3(_ja, _Memory);
    }
  struct _F4533 {
    bytes20 v848;
    T0 v851;
    T11 v934;
    uint256 v945;
    T1 v966;
    bytes20 v981;
    bytes20 v984;
    uint256 v1045;
    uint256 v1093;
    }
  function _reachi_6(T13 memory _a, Memory memory _Memory) internal  {
    _F4533 memory _f;
    reachRequire((! locked), uint256(31) /*'locked'*/);
    emit _reach_e6(msg.sender, _a);
    reachRequire((current_step == uint256(6)), uint256(32) /*'state check at ./src/contracts/auction.rsh:82:83:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(33) /*'time check at ./src/contracts/auction.rsh:82:83:dot'*/);
    reachRequire((uint256(block.number) < _svs.v753), uint256(34) /*'timeout check at ./src/contracts/auction.rsh:82:83:dot'*/);
    if ((_a.elem1).which == _enum_T12.Auctioneer_stopAuction0_103) {
    reachRequire((msg.value == uint256(0)), uint256(35) /*'(./src/contracts/auction.rsh:82:83:dot,[],"verify network token pay amount")'*/);
    _f.v848 = hex'656e645375636365737300000000000000000000';
    emit log( _f.v848,  _svs.v744,  _svs.v757);
    _f.v851.id = _svs.v744;
    _f.v851.blockEnded = uint256(block.number);
    _f.v851.lastBid = _svs.v757;
    emit _reach_oe_v851( _f.v851);
    _Memory._reachr_Auctioneer_stopAuction = _f.v851;
    T16  memory _ja;
    _ja.elem0 = _svs.v724;
    _ja.elem1 = _svs.v725;
    _ja.elem2 = _svs.v726;
    _ja.elem3 = _svs.v743;
    _ja.elem4 = _svs.v744;
    _ja.elem5 = _svs.v745;
    _ja.elem6 = _svs.v747;
    _ja.elem7 = _svs.v753;
    _ja.elem8 = (_svs.v754);
    _ja.elem9 = (_svs.v755);
    _ja.elem10 = (false);
    _ja.elem11 = (_svs.v757);
    _ja.elem12 = (uint256(block.number));
    _ja.elem13 = (_svs.v758);
    _ja.elem14 = (_svs.v764);
    _ja.elem15 = (_svs.v765);
    _reachl_2(_ja, _Memory);
    } else if ((_a.elem1).which == _enum_T12.Bidder_bid0_103) {
    _f.v934 = (_a.elem1)._Bidder_bid0_103;
    reachRequire((((_f.v934.elem0) > _svs.v757)), uint256(36) /*'(reach standard library:57:5:application,[at ./src/contracts/auction.rsh:95:30:application call to "check" (defined at: reach standard library:49:32:function exp),at ./src/contracts/auction.rsh:94:41:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp),at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:94:41:function exp),at ./src/contracts/auction.rsh:82:83:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:82:83:function exp)],Just "Your bid is too low, please try again")'*/);
    _f.v945 = unsafeAdd(_svs.v765, (_f.v934.elem0));
    reachRequire((msg.value == (_f.v934.elem0)), uint256(37) /*'(./src/contracts/auction.rsh:82:83:dot,[],"verify network token pay amount")'*/);
    _f.v966.elem0 = _svs.v754;
    _f.v966.elem1 = _svs.v757;
    emit _reach_oe_v966( _f.v966);
    _Memory._reachr_Bidder_bid = _f.v966;
    if (_svs.v755) {
      _f.v984 = hex'6269645375636365737300000000000000000000';
      emit log( _f.v984,  _svs.v744,  (_f.v934.elem0));
      T16  memory _ja;
      _ja.elem0 = _svs.v724;
      _ja.elem1 = _svs.v725;
      _ja.elem2 = _svs.v726;
      _ja.elem3 = _svs.v743;
      _ja.elem4 = _svs.v744;
      _ja.elem5 = _svs.v745;
      _ja.elem6 = _svs.v747;
      _ja.elem7 = _svs.v753;
      _ja.elem8 = (payable(msg.sender));
      _ja.elem9 = (false);
      _ja.elem10 = (_svs.v756);
      _ja.elem11 = ((_f.v934.elem0));
      _ja.elem12 = (uint256(block.number));
      _ja.elem13 = (_svs.v758);
      _ja.elem14 = (_svs.v764);
      _ja.elem15 = (_f.v945);
      _reachl_2(_ja, _Memory);
      }
    else {
      _svs.v754.transfer(_svs.v757);
      _f.v981 = hex'6269645375636365737300000000000000000000';
      emit log( _f.v981,  _svs.v744,  (_f.v934.elem0));
      T16  memory _ja;
      _ja.elem0 = _svs.v724;
      _ja.elem1 = _svs.v725;
      _ja.elem2 = _svs.v726;
      _ja.elem3 = _svs.v743;
      _ja.elem4 = _svs.v744;
      _ja.elem5 = _svs.v745;
      _ja.elem6 = _svs.v747;
      _ja.elem7 = _svs.v753;
      _ja.elem8 = (payable(msg.sender));
      _ja.elem9 = (false);
      _ja.elem10 = (_svs.v756);
      _ja.elem11 = ((_f.v934.elem0));
      _ja.elem12 = (uint256(block.number));
      _ja.elem13 = (_svs.v758);
      _ja.elem14 = (_svs.v764);
      _ja.elem15 = ((unsafeSub(_f.v945, _svs.v757)));
      _reachl_2(_ja, _Memory);
      }
    } else if ((_a.elem1).which == _enum_T12.Bidder_optIn0_103) {
    _f.v1045 = unsafeAdd(_svs.v765, uint256(1000000));
    reachRequire((msg.value == uint256(1000000)), uint256(38) /*'(./src/contracts/auction.rsh:82:83:dot,[],"verify network token pay amount")'*/);
    if ((_f.v1045 >= uint256(900000))) {
      _f.v1093 = unsafeSub(_f.v1045, uint256(900000));
      (_svs.v726._Admin).transfer(uint256(900000));
      if ((_f.v1093 >= uint256(100000))) {
        _svs.v724.transfer(uint256(100000));
        emit _reach_oe_v1100( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T16  memory _ja;
        _ja.elem0 = _svs.v724;
        _ja.elem1 = _svs.v725;
        _ja.elem2 = _svs.v726;
        _ja.elem3 = _svs.v743;
        _ja.elem4 = _svs.v744;
        _ja.elem5 = _svs.v745;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v753;
        _ja.elem8 = (_svs.v754);
        _ja.elem9 = (_svs.v755);
        _ja.elem10 = (_svs.v756);
        _ja.elem11 = (_svs.v757);
        _ja.elem12 = (uint256(block.number));
        _ja.elem13 = (_svs.v758);
        _ja.elem14 = (_svs.v764);
        _ja.elem15 = ((unsafeSub(_f.v1093, uint256(100000))));
        _reachl_2(_ja, _Memory);
        }
      else {
        emit _reach_oe_v1107( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T16  memory _ja;
        _ja.elem0 = _svs.v724;
        _ja.elem1 = _svs.v725;
        _ja.elem2 = _svs.v726;
        _ja.elem3 = _svs.v743;
        _ja.elem4 = _svs.v744;
        _ja.elem5 = _svs.v745;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v753;
        _ja.elem8 = (_svs.v754);
        _ja.elem9 = (_svs.v755);
        _ja.elem10 = (_svs.v756);
        _ja.elem11 = (_svs.v757);
        _ja.elem12 = (uint256(block.number));
        _ja.elem13 = (_svs.v758);
        _ja.elem14 = (_svs.v764);
        _ja.elem15 = (_f.v1093);
        _reachl_2(_ja, _Memory);
        }
      }
    else {
      if ((_f.v1045 >= uint256(100000))) {
        _svs.v724.transfer(uint256(100000));
        emit _reach_oe_v1120( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T16  memory _ja;
        _ja.elem0 = _svs.v724;
        _ja.elem1 = _svs.v725;
        _ja.elem2 = _svs.v726;
        _ja.elem3 = _svs.v743;
        _ja.elem4 = _svs.v744;
        _ja.elem5 = _svs.v745;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v753;
        _ja.elem8 = (_svs.v754);
        _ja.elem9 = (_svs.v755);
        _ja.elem10 = (_svs.v756);
        _ja.elem11 = (_svs.v757);
        _ja.elem12 = (uint256(block.number));
        _ja.elem13 = (_svs.v758);
        _ja.elem14 = (_svs.v764);
        _ja.elem15 = ((unsafeSub(_f.v1045, uint256(100000))));
        _reachl_2(_ja, _Memory);
        }
      else {
        emit _reach_oe_v1127( (true));
        _Memory._reachr_Bidder_optIn = (true);
        T16  memory _ja;
        _ja.elem0 = _svs.v724;
        _ja.elem1 = _svs.v725;
        _ja.elem2 = _svs.v726;
        _ja.elem3 = _svs.v743;
        _ja.elem4 = _svs.v744;
        _ja.elem5 = _svs.v745;
        _ja.elem6 = _svs.v747;
        _ja.elem7 = _svs.v753;
        _ja.elem8 = (_svs.v754);
        _ja.elem9 = (_svs.v755);
        _ja.elem10 = (_svs.v756);
        _ja.elem11 = (_svs.v757);
        _ja.elem12 = (uint256(block.number));
        _ja.elem13 = (_svs.v758);
        _ja.elem14 = (_svs.v764);
        _ja.elem15 = (_f.v1045);
        _reachl_2(_ja, _Memory);
        }
      }
    }
    }
  function _reachi_7(T11 memory _a, Memory memory _Memory) internal  {
    reachRequire((! locked), uint256(39) /*'locked'*/);
    emit _reach_e7(msg.sender, _a);
    reachRequire((current_step == uint256(6)), uint256(40) /*'state check at ./src/contracts/auction.rsh:138:32:dot'*/);
    (T8 memory _svs) = abi.decode(current_svbs, (T8));
    reachRequire((((_a.elem0) == uint256(0)) || (current_time == (_a.elem0))), uint256(41) /*'time check at ./src/contracts/auction.rsh:138:32:dot'*/);
    reachRequire((uint256(block.number) >= _svs.v753), uint256(42) /*'timeout check at ./src/contracts/auction.rsh:138:32:dot'*/);
    reachRequire((msg.value == uint256(0)), uint256(43) /*'(./src/contracts/auction.rsh:138:32:dot,[at ./src/contracts/auction.rsh:137:46:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:46:function exp)],"verify network token pay amount")'*/);
    reachRequire(((_svs.v724 == payable(msg.sender))), uint256(44) /*'(./src/contracts/auction.rsh:138:32:dot,[at ./src/contracts/auction.rsh:137:46:application call to [unknown function] (defined at: ./src/contracts/auction.rsh:137:46:function exp)],Just "sender correct")'*/);
    T16  memory _ja;
    _ja.elem0 = _svs.v724;
    _ja.elem1 = _svs.v725;
    _ja.elem2 = _svs.v726;
    _ja.elem3 = _svs.v743;
    _ja.elem4 = _svs.v744;
    _ja.elem5 = _svs.v745;
    _ja.elem6 = _svs.v747;
    _ja.elem7 = _svs.v753;
    _ja.elem8 = (_svs.v754);
    _ja.elem9 = (_svs.v755);
    _ja.elem10 = (_svs.v756);
    _ja.elem11 = (_svs.v757);
    _ja.elem12 = (uint256(block.number));
    _ja.elem13 = (_svs.v758);
    _ja.elem14 = (_svs.v764);
    _ja.elem15 = (_svs.v765);
    _reachl_2(_ja, _Memory);
    }
  struct _F4535 {
    bool v779;
    bytes20 v1148;
    }
  function _reachl_2(T16 memory _a, Memory memory _Memory) internal  {
    _F4535 memory _f;
    _f.v779 = _a.elem7 > _a.elem13;
    if ((_f.v779 ? _a.elem10 : false)) {
      T8 memory nsvs;
      nsvs.v724 = _a.elem0;
      nsvs.v725 = _a.elem1;
      nsvs.v726 = _a.elem2;
      nsvs.v743 = _a.elem3;
      nsvs.v744 = _a.elem4;
      nsvs.v745 = _a.elem5;
      nsvs.v747 = _a.elem6;
      nsvs.v753 = _a.elem7;
      nsvs.v754 = _a.elem8;
      nsvs.v755 = _a.elem9;
      nsvs.v756 = true;
      nsvs.v757 = _a.elem11;
      nsvs.v758 = _a.elem12;
      nsvs.v764 = _a.elem14;
      nsvs.v765 = _a.elem15;
      nsvs.v786 = (true);
      current_step = uint256(6);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      _f.v1148 = hex'646f776e00000000000000000000000000000000';
      emit down( _f.v1148,  _a.elem4,  _a.elem11,  _a.elem0,  _a.elem5,  _a.elem3);
      T17  memory _ja;
      _ja.elem0 = _a.elem0;
      _ja.elem1 = _a.elem1;
      _ja.elem2 = _a.elem6;
      _ja.elem3 = _a.elem8;
      _ja.elem4 = _a.elem11;
      _ja.elem5 = (_f.v779 ? _a.elem10 : false);
      _ja.elem6 = (true);
      _ja.elem7 = (_a.elem12);
      _ja.elem8 = (_a.elem14);
      _ja.elem9 = (_a.elem15);
      _reachl_3(_ja, _Memory);
      }
    }
  struct _F4536 {
    uint256 v1169;
    }
  function _reachl_3(T17 memory _a, Memory memory _Memory) internal  {
    _F4536 memory _f;
    if (_a.elem6) {
      _f.v1169 = safeAdd(_a.elem7, uint256(50));
      T5 memory nsvs;
      nsvs.v724 = _a.elem0;
      nsvs.v725 = _a.elem1;
      nsvs.v747 = _a.elem2;
      nsvs.v754 = _a.elem3;
      nsvs.v757 = _a.elem4;
      nsvs.v1145 = _a.elem5;
      nsvs.v1156 = _a.elem8;
      nsvs.v1157 = _a.elem9;
      nsvs.v1169 = _f.v1169;
      current_step = uint256(5);
      current_time = uint256(block.number);
      current_svbs = abi.encode(nsvs);
      }
    else {
      safeTokenTransfer(_a.elem1, _a.elem3, ((_a.elem8[uint256(0)]).elem0));
      _a.elem0.transfer(_a.elem9);
      current_step = 0x0;
      current_time = 0x0;
      delete current_svbs;
      }
    }
  constructor(T14 memory v4416) payable {
    current_step = 0x0;
    creation_time = uint256(block.number);
    Memory memory _Memory;
    _reachi_0(v4416, _Memory);
    }
  function _reachp_1(T11 calldata v4418) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_1(v4418, _Memory);
    }
  function _reachp_4(T10 calldata v4432) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_4(v4432, _Memory);
    }
  function _reachp_5(T11 calldata v4442) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_5(v4442, _Memory);
    }
  function _reachp_6(T13 calldata v4448) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_6(v4448, _Memory);
    }
  function _reachp_7(T11 calldata v4506) external payable returns (bool) {
    Memory memory _Memory;
    _reachi_7(v4506, _Memory);
    }
  }
