import { Element } from './interfaces/element';
import { IWeapon } from './interfaces/item';
import { Type } from './interfaces/type';

export const Weapons: IWeapon[] = [
  {
    ID: 0,
    name: 'Unarmed',
    averageDamage: 0,
    type: Type.Undefined,
    element: Element.Undefined,
  },
  {
    ID: 3,
    name: 'Basic GreatSword',
    averageDamage: 3,
    type: Type.Melee,
    element: Element.Blessed,
  },
  {
    ID: 4,
    name: 'Basic Lance',
    averageDamage: 1.5,
    type: Type.Melee,
    element: Element.Cursed,
  },
  {
    ID: 5,
    name: 'Basic Spear',
    averageDamage: 4,
    type: Type.Ranged,
    element: Element.Synthetic,
  },
  {
    ID: 6,
    name: 'Basic Crossbow',
    averageDamage: 2,
    type: Type.Ranged,
    element: Element.Air,
  },
  {
    ID: 7,
    name: 'Basic Fire Staff',
    averageDamage: 3.5,
    type: Type.Magic,
    element: Element.Sun,
  },
  {
    ID: 8,
    name: 'Basic Water Wand',
    averageDamage: 2,
    type: Type.Magic,
    element: Element.Moon,
  },
  {
    ID: 9,
    name: 'Wooden Sword',
    averageDamage: 3,
    type: Type.Melee,
    element: Element.Earth,
  },
  {
    ID: 10,
    name: "High Priest's Sceptre Handle",
    averageDamage: 4.5,
    type: Type.Magic,
    element: Element.Blessed,
  },
  {
    ID: 11,
    name: 'Mass Lambiguity',
    averageDamage: 5,
    type: Type.Magic,
    element: Element.Sun,
  },
  {
    ID: 12,
    name: 'Dwarf Bread',
    averageDamage: 3.5,
    type: Type.Melee,
    element: Element.Organic,
  },
  {
    ID: 13,
    name: 'Hat-trick of Hectic Halberds',
    averageDamage: 6,
    type: Type.Melee,
    element: Element.Synthetic,
  },
  {
    ID: 14,
    name: "Galadriel's Mirror",
    averageDamage: 2,
    type: Type.Magic,
    element: Element.Blessed,
  },
  {
    ID: 15,
    name: 'Dawnbringer',
    averageDamage: 5,
    type: Type.Melee,
    element: Element.Sun,
  },
  {
    ID: 16,
    name: 'The Homelite XL Chainsaw',
    averageDamage: 5.5,
    type: Type.Melee,
    element: Element.Synthetic,
  },
  {
    ID: 17,
    name: 'Spear of Darkness',
    averageDamage: 5.5,
    type: Type.Magic,
    element: Element.Moon,
  },
  {
    ID: 18,
    name: 'The Book of Names',
    averageDamage: 6.5,
    type: Type.Magic,
    element: Element.Cursed,
  },
  {
    ID: 19,
    name: "Fenrir's Silver Folly",
    averageDamage: 2.0,
    type: Type.Melee,
    element: Element.Synthetic,
  },
  {
    ID: 20,
    name: 'The Iron Ruler',
    averageDamage: 7,
    type: Type.Melee,
    element: Element.Earth,
  },
  {
    ID: 21,
    name: 'Collar at the Gates of Heck',
    averageDamage: 7,
    type: Type.Magic,
    element: Element.Fire,
  },
  {
    ID: 22,
    name: 'Attack Moon',
    averageDamage: 8.5,
    type: Type.Ranged,
    element: Element.Moon,
  },
  {
    ID: 23,
    name: 'Worldslayer',
    averageDamage: 7.0,
    type: Type.Melee,
    element: Element.Air,
  },
  {
    ID: 24,
    name: 'Blade of Grass',
    averageDamage: 4,
    type: Type.Melee,
    element: Element.Earth,
  },
  {
    ID: 25,
    name: 'Pitchfork of Twilight',
    averageDamage: 7.5,
    type: Type.Melee,
    element: Element.Moon,
  },
  {
    ID: 26,
    name: 'Electric Squid',
    averageDamage: 8.5,
    type: Type.Melee,
    element: Element.Water,
  },
  {
    ID: 27,
    name: 'El-Bow',
    averageDamage: 7,
    type: Type.Ranged,
    element: Element.Organic,
  },
  {
    ID: 28,
    name: 'Saddle of Lightspeed',
    averageDamage: 10,
    type: Type.Magic,
    element: Element.Blessed,
  },
  {
    ID: 29,
    name: 'Shining Axe of Door-Breaking',
    averageDamage: 10,
    type: Type.Melee,
    element: Element.Organic,
  },
  {
    ID: 30,
    name: 'The Spoon of Delightfulness',
    averageDamage: 15,
    type: Type.Ranged,
    element: Element.Cursed,
  },
  {
    ID: 31,
    name: 'Lava Trebuchet',
    averageDamage: 9.5,
    type: Type.Ranged,
    element: Element.Air,
  },
  {
    ID: 32,
    name: 'Triple Wield Swords',
    averageDamage: 9.0,
    type: Type.Melee,
    element: Element.Air,
  },
  {
    ID: 33,
    name: 'The Tempmute Sword',
    averageDamage: 6,
    type: Type.Melee,
    element: Element.Blessed,
  },
  {
    ID: 34,
    name: 'Hedgehog Cannonball',
    averageDamage: 6,
    type: Type.Ranged,
    element: Element.Cursed,
  },
  {
    ID: 35,
    name: 'Mothers Wrath',
    averageDamage: 10,
    type: Type.Melee,
    element: Element.Blessed,
  },
  {
    ID: 36,
    name: 'Rat Chucks',
    averageDamage: 1,
    type: Type.Melee,
    element: Element.Cursed,
  },
  {
    ID: 37,
    name: 'Red Paint',
    averageDamage: 7.5,
    type: Type.Ranged,
    element: Element.Earth,
  },
  {
    ID: 38,
    name: 'Golden Wallet',
    averageDamage: 7.5,
    type: Type.Ranged,
    element: Element.Synthetic,
  },
  {
    ID: 39,
    name: 'Trident of Trails',
    averageDamage: 10.5,
    type: Type.Ranged,
    element: Element.Organic,
  },
  {
    ID: 40,
    name: 'Weird Looking Fang',
    averageDamage: 4.5,
    type: Type.Magic,
    element: Element.Cursed,
  },
  {
    ID: 41,
    name: 'Claws of the Dragon',
    averageDamage: 12.5,
    type: Type.Ranged,
    element: Element.Earth,
  },
  {
    ID: 42,
    name: 'Cat Eyes',
    averageDamage: 10.5,
    type: Type.Magic,
    element: Element.Moon,
  },
  {
    ID: 43,
    name: 'Diadem of doornails',
    averageDamage: 9.5,
    type: Type.Magic,
    element: Element.Synthetic,
  },
  {
    ID: 44,
    name: 'Fossilised Cake Slice',
    averageDamage: 6.5,
    type: Type.Magic,
    element: Element.Earth,
  },
  {
    ID: 45,
    name: 'Combat Parasol',
    averageDamage: 5.5,
    type: Type.Ranged,
    element: Element.Sun,
  },
  {
    ID: 46,
    name: 'Ruined Pickaxe',
    averageDamage: 15,
    type: Type.Melee,
    element: Element.Synthetic,
  },
  {
    ID: 47,
    name: 'Ashen fish hook',
    averageDamage: 15,
    type: Type.Ranged,
    element: Element.Fire,
  },
  {
    ID: 48,
    name: 'Lifespoon',
    averageDamage: 15,
    type: Type.Magic,
    element: Element.Organic,
  },
];