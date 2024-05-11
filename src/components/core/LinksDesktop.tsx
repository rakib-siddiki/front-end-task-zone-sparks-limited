'use client';

import * as React from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger
} from '@/components/ui/navigation-menu';
type Url = string;
export function LinksDesktop() {
    return (
        <NavigationMenu>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <NavigationMenuTrigger className='max-sm:p-0'>
                        Collections
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul className='grid w-56 sm:min-w-80 md:grid-cols-2 md:gap-3 md:p-4 md:w-[27rem] '>
                            <li className='row-span-3'>
                                <NavigationMenuLink asChild>
                                    <Link
                                        className="flex flex-col justify-end w-full h-full p-4 md:p-6 no-underline rounded-md outline-none select-none from-muted/50 to-muted focus:shadow-md bg-cover bg-no-repeat md:bg-[url('/main-image.webp')]"
                                        href='/'
                                    >
                                        <div className='mt-4 mb-1 text-sm font-medium md:text-gray-50'>
                                            VIEW ALL
                                        </div>
                                        <p className='text-sm leading-tight text-muted-foreground md:text-gray-100'>
                                            Discover wardrobe staples for every
                                            occasion.
                                        </p>
                                    </Link>
                                </NavigationMenuLink>
                            </li>
                            <ListItem href='/t-shirts' title='T-SHIRTS'>
                                Our men&apos;s T-shirts offer timeless style in
                                a range of designs, colors, and textures. From
                                classic to contemporary, find the perfect tee
                                for any occasion.
                            </ListItem>
                            <ListItem href='/pants' title='PANTS'>
                                Explore essential men&apos;s pants for all
                                occasions. From classic chinos to modern
                                joggers, find your perfect fit in a variety of
                                styles and colors.
                            </ListItem>
                            <ListItem href='/sweatshirts' title='SWEATSHIRTS'>
                                Much like the T-shirt, men&apos;s sweatshirts
                                are far more than a basic.
                            </ListItem>
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

const ListItem = React.forwardRef<
    React.ElementRef<'a'>,
    React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
    return (
        <li className='group'>
            <NavigationMenuLink asChild>
                <Link
                    ref={ref}
                    className={cn(
                        'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground hover:bg-gray-800',
                        className
                    )}
                    href={props.href as Url}
                    {...props}
                >
                    <div className='text-sm font-medium leading-none group-hover:text-gray-50'>
                        {title}
                    </div>
                    <p className='text-sm leading-snug line-clamp-2 text-muted-foreground text-gray-700 group-hover:text-gray-100'>
                        {children}
                    </p>
                </Link>
            </NavigationMenuLink>
        </li>
    );
});
ListItem.displayName = 'ListItem';
