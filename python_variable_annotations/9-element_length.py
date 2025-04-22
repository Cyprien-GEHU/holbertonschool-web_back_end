#!/usr/bin/env python3
"""
the objective are to take the funtion element_length and :
- annontate the below function parameters
- return value with appropirate type
"""
from typing import Iterable, Tuple, List, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """the function"""
    return [(i, len(i)) for i in lst]
