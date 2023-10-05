import { MouseEventHandler } from "react";

export interface ButtonProps {
  isDisable?: boolean;
  btnType?: 'button' | 'submit';
  customStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface FilterOptionProps {
  title: string;
  value: string;
}

export interface FilterProps {
  title: string;
  options: FilterOptionProps[];
}

export interface FetchFilterProps {
  manufacturer?: string;
  year?: number;
  model?: string;
  limit?: number;
  fuel?: string;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

export interface CarDetailProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}