import { Weapons } from './items';
import { Type } from './interfaces/type';

export type Option<T> = {
  label: string;
  value: T;
};
export function toWeapon(id: number | string) {
  return Weapons.find((x) => x.ID === Number(id));
}

export function typeToIcon(type: Type) {
  switch (type) {
    case Type.Melee:
      return '⚔️';
    case Type.Ranged:
      return '🏹';
    case Type.Magic:
      return '🔮';
  }
}

/**
 *                   | Type Resist | Type Neutral | Type Weak
 *  Element Resist   | 30% - 60%   | 40% - 70%    | 50% - 80%
 *  Element Neutral  | 90%         | 100%         | 110%
 *  Element Weak     | 100% - 190% | 110% - 200%  | 120% - 210%
 */
export function getDamageModifier(element: number, type: number) {
  let modifier = 1;
  if (type < 0) modifier *= 0.9;
  else if (type > 0) modifier *= 1.1;
  if (element < 0) modifier *= 0.5;
  else if (element > 0) modifier *= 2;
  return modifier;
}

export function getTypeData(type: Type) {
  switch (type) {
    case Type.Melee:
      return { strong: Type.Ranged, weak: Type.Magic };
    case Type.Ranged:
      return { strong: Type.Magic, weak: Type.Melee };
    case Type.Magic:
      return { strong: Type.Melee, weak: Type.Ranged };
  }
}
