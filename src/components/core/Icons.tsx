import {
    LucideProps,
    Moon,
    SunMedium,
    Menu,
    X,
    Eye,
    EyeOff,
    ShoppingCart,
    Star,
    Heart,
    Share2,
    Filter
} from 'lucide-react';

export const Icons = {
    Moon,
    SunMedium,
    Menu,
    X,
    Eye,
    EyeOff,
    ShoppingCart,
    Star,
    Heart,
    Share2,
    Filter,
    EmptyBox: (props: LucideProps) => (
        <svg
            {...props}
            viewBox='0 0 1024 1024'
            width='17'
            height='20'
            version='1.1'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M743.68 176.61952h-448l-220.16 240.52736v345.6c0 56.54528 45.85472 102.4 102.4 102.4h683.52c56.54528 0 102.4-45.85472 102.4-102.4v-345.6l-220.16-240.52736z m-416.43008 71.68h384.8704l176.52736 192.8704h-193.87392c0 0.28672 0.04096 0.57344 0.04096 0.84992 0 94.57664-76.94336 171.52-171.52 171.52-94.5664 0-171.52-76.94336-171.52-171.52 0-0.27648 0.04096-0.5632 0.0512-0.84992h-201.12384l176.54784-192.8704z m534.19008 545.16736h-683.52c-16.93696 0-30.72-13.78304-30.72-30.72v-249.89696h143.4112c30.33088 99.75808 123.02336 172.36992 232.69376 172.36992 109.68064 0 202.36288-72.61184 232.69376-172.36992h136.17152v249.89696a30.7712 30.7712 0 0 1-30.73024 30.72z'
                fill='inherite'
            />
        </svg>
    ),
    Settings: (props: LucideProps) => (
        <svg
            {...props}
            width='24'
            height='26'
            viewBox='0 0 24 26'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M23.7036 15.9102L21.6219 14.709C21.8321 13.5762 21.8321 12.4141 21.6219 11.2813L23.7036 10.0801C23.943 9.94341 24.0505 9.6602 23.9724 9.39653C23.43 7.65825 22.5064 6.08598 21.2994 4.77739C21.1137 4.57719 20.8108 4.52837 20.5762 4.66509L18.4945 5.86626C17.6198 5.1143 16.6132 4.53325 15.5235 4.15239V1.75493C15.5235 1.48149 15.3329 1.24223 15.0642 1.18364C13.2708 0.783249 11.4335 0.80278 9.72807 1.18364C9.45931 1.24223 9.26874 1.48149 9.26874 1.75493V4.15727C8.18392 4.54301 7.17729 5.12407 6.29772 5.87114L4.22093 4.66997C3.98149 4.53325 3.68341 4.57719 3.49772 4.78227C2.29075 6.08598 1.36719 7.65825 0.824782 9.40141C0.741711 9.66508 0.854102 9.94829 1.09354 10.085L3.17521 11.2862C2.96509 12.419 2.96509 13.5811 3.17521 14.7139L1.09354 15.9151C0.854102 16.0518 0.746598 16.335 0.824782 16.5987C1.36719 18.337 2.29075 19.9092 3.49772 21.2178C3.68341 21.418 3.98638 21.4668 4.22093 21.3301L6.3026 20.129C7.1773 20.8809 8.18392 21.462 9.27363 21.8428V24.2452C9.27363 24.5186 9.4642 24.7579 9.73296 24.8165C11.5263 25.2168 13.3637 25.1973 15.0691 24.8165C15.3378 24.7579 15.5284 24.5186 15.5284 24.2452V21.8428C16.6132 21.4571 17.6198 20.876 18.4994 20.129L20.5811 21.3301C20.8205 21.4668 21.1186 21.4229 21.3043 21.2178C22.5113 19.9141 23.4348 18.3418 23.9772 16.5987C24.0505 16.3301 23.943 16.0469 23.7036 15.9102ZM12.3961 16.9014C10.2412 16.9014 8.48689 15.1485 8.48689 12.9952C8.48689 10.8418 10.2412 9.08891 12.3961 9.08891C14.5511 9.08891 16.3054 10.8418 16.3054 12.9952C16.3054 15.1485 14.5511 16.9014 12.3961 16.9014Z'
                fill='#364146'
            />
        </svg>
    ),
    Google: (props: LucideProps) => (
        <svg
            {...props}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                fill='#FFC107'
            />
            <path
                d='M3.15283 7.3455L6.43833 9.755C7.32733 7.554 9.48033 6 11.9998 6C13.5293 6 14.9208 6.577 15.9803 7.5195L18.8088 4.691C17.0228 3.0265 14.6338 2 11.9998 2C8.15883 2 4.82783 4.1685 3.15283 7.3455Z'
                fill='#FF3D00'
            />
            <path
                d='M12.0002 22C14.5832 22 16.9302 21.0115 18.7047 19.404L15.6097 16.785C14.5719 17.5742 13.3039 18.001 12.0002 18C9.39916 18 7.19066 16.3415 6.35866 14.027L3.09766 16.5395C4.75266 19.778 8.11366 22 12.0002 22Z'
                fill='#4CAF50'
            />
            <path
                d='M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z'
                fill='#1976D2'
            />
        </svg>
    ),
    Search: (props: LucideProps) => (
        <svg
            {...props}
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <path
                d='M7.22224 13.4445C10.6587 13.4445 13.4445 10.6587 13.4445 7.22224C13.4445 3.78579 10.6587 1 7.22224 1C3.78579 1 1 3.78579 1 7.22224C1 10.6587 3.78579 13.4445 7.22224 13.4445Z'
                stroke='#9BA0A3'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
            <path
                d='M15.0002 15L11.6558 11.6555'
                stroke='#9BA0A3'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
            />
        </svg>
    ),
    Facebook: (props: LucideProps) => (
        <svg
            {...props}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
        >
            <g clipPath='url(#clip0_1577_2563)'>
                <path
                    d='M24 12C24 5.37262 18.6274 0 12 0C5.37262 0 0 5.37262 0 12C0 17.9895 4.38825 22.954 10.125 23.8542V15.4687H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9705 4.6875 17.3438 4.92187 17.3438 4.92187V7.875H15.8306C14.3399 7.875 13.875 8.80003 13.875 9.74906V12H17.2031L16.6711 15.4687H13.875V23.8542C19.6117 22.954 24 17.9896 24 12Z'
                    fill='#1877F2'
                />
                <path
                    d='M16.6711 15.4688L17.2031 12H13.875V9.74906C13.875 8.79994 14.3399 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6575 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C10.7453 23.9514 11.3722 24.0002 12 24C12.6278 24.0002 13.2547 23.9514 13.875 23.8542V15.4688H16.6711Z'
                    fill='white'
                />
            </g>
            <defs>
                <clipPath id='clip0_1577_2563'>
                    <rect width='24' height='24' fill='white' />
                </clipPath>
            </defs>
        </svg>
    )
};
