/******************************************************************************
**	@Author:				Rarity Extended
**	@Twitter:				@RXtended
**	@Date:					Wednesday September 15th 2021
**	@Filename:				dungeonBoars.abi.js
******************************************************************************/

const	ABI = [
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': '_rmAddr',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_attrAddr',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_skills',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_random',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_mushroom',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_berries',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_wood',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_leather',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_meat',
				'type': 'address'
			},
			{
				'internalType': 'address',
				'name': '_tusks',
				'type': 'address'
			}
		],
		'stateMutability': 'nonpayable',
		'type': 'constructor'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'former_expected_boars',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'new_expected_boars',
				'type': 'uint256'
			}
		],
		'name': 'ChangedExpectedBoars',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': '_summoner',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'reward_qty_one',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'enum boarAdventure.RewardKill',
				'name': 'RewardTypeOne',
				'type': 'uint8'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'reward_qty_two',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'enum boarAdventure.RewardKill',
				'name': 'RewardTypeTwo',
				'type': 'uint8'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'reward_qty_three',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'enum boarAdventure.RewardKill',
				'name': 'RewardTypeThree',
				'type': 'uint8'
			}
		],
		'name': 'Killed',
		'type': 'event'
	},
	{
		'anonymous': false,
		'inputs': [
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': '_summoner',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'reward_qty_one',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'enum boarAdventure.RewardReproduce',
				'name': 'RewardTypeOne',
				'type': 'uint8'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'reward_qty_two',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'enum boarAdventure.RewardReproduce',
				'name': 'RewardTypeTwo',
				'type': 'uint8'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'reward_qty_three',
				'type': 'uint256'
			},
			{
				'indexed': false,
				'internalType': 'enum boarAdventure.RewardReproduce',
				'name': 'RewardTypeThree',
				'type': 'uint8'
			},
			{
				'indexed': false,
				'internalType': 'uint256',
				'name': 'litter',
				'type': 'uint256'
			}
		],
		'name': 'Reproduced',
		'type': 'event'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_summoner',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': 'limit',
				'type': 'uint256'
			},
			{
				'internalType': 'bool',
				'name': 'withZero',
				'type': 'bool'
			}
		],
		'name': '_get_random',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'acceptExtended',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'name': 'actions_log',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_dex',
				'type': 'uint256'
			}
		],
		'name': 'armor_class',
		'outputs': [
			{
				'internalType': 'int256',
				'name': '',
				'type': 'int256'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_class',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': '_str',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': '_level',
				'type': 'uint256'
			}
		],
		'name': 'attack_bonus',
		'outputs': [
			{
				'internalType': 'int256',
				'name': '',
				'type': 'int256'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'attr',
		'outputs': [
			{
				'internalType': 'contract attributes',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_class',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': '_level',
				'type': 'uint256'
			}
		],
		'name': 'base_attack_bonus_by_class_and_level',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'berries',
		'outputs': [
			{
				'internalType': 'contract IrERC20',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'boar_population',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'reward',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': 'pop',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': 'expected',
				'type': 'uint256'
			}
		],
		'name': 'boost_reward_for_kill',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'reward',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': 'pop',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': 'expected',
				'type': 'uint256'
			}
		],
		'name': 'boost_reward_for_reproduce',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': 'new_expected_boars',
				'type': 'uint256'
			}
		],
		'name': 'change_expected_boars',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_str',
				'type': 'uint256'
			}
		],
		'name': 'damage',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'dungeon_armor_class',
		'outputs': [
			{
				'internalType': 'int256',
				'name': '',
				'type': 'int256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'dungeon_damage',
		'outputs': [
			{
				'internalType': 'int256',
				'name': '',
				'type': 'int256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'dungeon_health',
		'outputs': [
			{
				'internalType': 'int256',
				'name': '',
				'type': 'int256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'dungeon_to_hit',
		'outputs': [
			{
				'internalType': 'int256',
				'name': '',
				'type': 'int256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'expected_boars',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'extended',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'extinction',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'extinctionBy',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': '',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_class',
				'type': 'uint256'
			},
			{
				'internalType': 'uint256',
				'name': '_level',
				'type': 'uint256'
			},
			{
				'internalType': 'uint32',
				'name': '_const',
				'type': 'uint32'
			}
		],
		'name': 'health_by_class_and_level',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'health',
				'type': 'uint256'
			}
		],
		'stateMutability': 'pure',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_summoner',
				'type': 'uint256'
			}
		],
		'name': 'kill',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'leather',
		'outputs': [
			{
				'internalType': 'contract IrERC20',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'meat',
		'outputs': [
			{
				'internalType': 'contract IrERC20',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'mushroom',
		'outputs': [
			{
				'internalType': 'contract IrERC20',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'pendingExtended',
		'outputs': [
			{
				'internalType': 'address',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'random',
		'outputs': [
			{
				'internalType': 'contract IRandomCodex',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_summoner',
				'type': 'uint256'
			}
		],
		'name': 'reproduce',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'rm',
		'outputs': [
			{
				'internalType': 'contract IRarity',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'address',
				'name': '_extended',
				'type': 'address'
			}
		],
		'name': 'setExtended',
		'outputs': [],
		'stateMutability': 'nonpayable',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_summoner',
				'type': 'uint256'
			}
		],
		'name': 'simulate_kill',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'reward',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [
			{
				'internalType': 'uint256',
				'name': '_summoner',
				'type': 'uint256'
			}
		],
		'name': 'simulate_reproduce',
		'outputs': [
			{
				'internalType': 'uint256',
				'name': 'reward',
				'type': 'uint256'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'skills',
		'outputs': [
			{
				'internalType': 'contract ISkills',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'tusks',
		'outputs': [
			{
				'internalType': 'contract IrERC20',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	},
	{
		'inputs': [],
		'name': 'wood',
		'outputs': [
			{
				'internalType': 'contract IrERC20',
				'name': '',
				'type': 'address'
			}
		],
		'stateMutability': 'view',
		'type': 'function'
	}
];

export default ABI;
