import { twMerge } from 'tailwind-merge';
import cn from 'classnames';

export const tcl = (...args) => twMerge(cn(args));
