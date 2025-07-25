'use client';

import * as React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/ui/command';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const PROPERTY_TYPES = ['Apartment', 'Hotel', 'Office', 'Plot', 'Townhouse', 'Villa'];
const BEDROOMS = ['1 Bedroom', '2 Bedrooms', '3 Bedrooms', '4 Bedrooms', '5+ Bedrooms'];
const PRICE_MIN = ['Any', '100,000', '500,000', '1,000,000', '2,000,000'];
const PRICE_MAX = ['Any', '1,000,000', '5,000,000', '10,000,000', '20,000,000', '50,000,000'];

type DropdownProps = {
  label: string;
  options: string[];
  value: string;
  setValue: (value: string) => void;
};

function Dropdown({ label, options, value, setValue }: DropdownProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between text-black dark:text-white border-gray-300 dark:border-gray-60 dark:bg-[#2a2a2d] hover:bg-gray-100 dark:hover:bg-[#3a3a3d]"
        >
          {value || label}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0 bg-white dark:bg-[#2a2a2d] text-black dark:text-white border-gray-200 dark:border-gray-600">
        <Command>
          <CommandInput placeholder={`Search ${label.toLowerCase()}`} />
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup>
            {options.map((option) => (
              <CommandItem
                key={option}
                value={option}
                onSelect={() => {
                  setValue(option);
                  setOpen(false);
                }}
                className="cursor-pointer hover:bg-gray-100 dark:hover:bg-[#3a3a3d]"
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value === option ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

export default function SearchFilterBar() {
  const [propertyType, setPropertyType] = React.useState('');
  const [bedrooms, setBedrooms] = React.useState('');
  const [minPrice, setMinPrice] = React.useState('Any');
  const [maxPrice, setMaxPrice] = React.useState('Any');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ propertyType, bedrooms, minPrice, maxPrice });
  };

  return (
    <form
      onSubmit={onSubmit}
      className="bg-white/70 dark:bg-[#1c1c1e]/80 backdrop-blur-lg border border-gray-200 dark:border-gray-700 rounded-xl shadow-lg p-6 max-w-5xl mx-auto mt-10 text-black dark:text-white"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Dropdown label="Property Type" options={PROPERTY_TYPES} value={propertyType} setValue={setPropertyType} />
        <Dropdown label="Bedrooms" options={BEDROOMS} value={bedrooms} setValue={setBedrooms} />
        <Dropdown label="Min Price" options={PRICE_MIN} value={minPrice} setValue={setMinPrice} />
        <Dropdown label="Max Price" options={PRICE_MAX} value={maxPrice} setValue={setMaxPrice} />
      </div>
      <div className="mt-6 text-center">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              Search Properties
            </span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
    </form>
  );
}
