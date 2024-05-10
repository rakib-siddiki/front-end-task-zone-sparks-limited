'use client';
import { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FC } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import Image from 'next/image';
import { IProductResponse } from '../../types';

interface IProps extends IProductResponse {}
type SlideImage = {
    src: string;
    zoomSrc?: string;
};
const settings = {
    className: 'slick-container',
    centerMode: true,
    infinite: true,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: '0',
    dots: false,
    arrows: false,
    swipe: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};
const Gallery: FC<IProps> = ({ ...props }) => {
    const [open, setOpen] = useState<boolean>(false);
    const sliderRef = useRef<Slider | null>(null);
    const { image, variants } = props;
    const images = variants?.map((variant) => variant?.image);
    const allImages = [image, ...(images || [])];
    const goToSlide = (slideIndex: number) => {
        if (sliderRef.current) {
            sliderRef.current.slickGoTo(slideIndex);
        }
    };
    return (
        <>
            <section className='grid grid-cols-12 gap-2'>
                <div className='max-md:flex gap-3 col-span-12 md:col-span-2  h-32 md:h-[580px] overflow-scroll no-scrollbar md:space-y-3 md:order-first order-last'>
                    {allImages?.map((image, id) => (
                        <>
                            <Image
                                key={id}
                                onClick={() => goToSlide(id)}
                                height={500}
                                width={500}
                                src={image}
                                alt='Image'
                                className='w-md block'
                            />
                        </>
                    ))}
                </div>
                <div className='col-span-12 md:col-span-10 '>
                    <div className='relative'>
                        <Slider {...settings} ref={sliderRef}>
                            {allImages?.map((img, id) => (
                                <InnerImageZoom
                                    src={img}
                                    zoomSrc={img}
                                    key={id}
                                    className='max-md:h-[580px] max-h-[700px] overflow-hidden'
                                />
                            ))}
                        </Slider>
                        <button
                            type='button'
                            onClick={() => setOpen(true)}
                            className='bg-white text-xs md:text-base py-1 px-2  rounded-full absolute top-1/2 -translate-y-1/2 left-3'
                        >
                            Click to Inlarge
                        </button>
                    </div>
                    <Lightbox
                        open={open}
                        close={() => setOpen(false)}
                        slides={images as SlideImage[] | undefined}
                        plugins={[Fullscreen, Slideshow, Zoom]}
                    />
                </div>
            </section>
        </>
    );
};

export default Gallery;
