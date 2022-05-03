%lang starknet
from starkware.cairo.common.uint256 import Uint256
from starkware.cairo.common.cairo_builtins import BitwiseBuiltin
from starknet.felt_to_uint256 import felt_to_uint256

@view
func test_felt_to_uint256{range_check_ptr, bitwise_ptr : BitwiseBuiltin*}(input : felt) -> (
        uint256 : Uint256):
    let (uint256) = felt_to_uint256(input)
    return (uint256)
end
