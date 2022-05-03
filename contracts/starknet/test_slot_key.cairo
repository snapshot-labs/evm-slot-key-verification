%lang starknet

from starkware.cairo.common.cairo_builtins import BitwiseBuiltin
from starkware.cairo.common.uint256 import Uint256
from starknet.slot_key import get_slot_key

@view
func test_get_slot_key{bitwise_ptr : BitwiseBuiltin*, range_check_ptr}(slot_index: felt, mapping_key: felt) -> (slot_key : Uint256):
    let (slot_key) = get_slot_key(slot_index, mapping_key)
    return (slot_key)
end

