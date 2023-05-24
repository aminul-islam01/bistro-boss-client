import { Parallax } from 'react-parallax';

const Cover = ({ img, coverTitle }) => {
    return (
        <div className='mb-10'>
            <Parallax
                bgImage={img}
                renderLayer={percentage => (
                    <div
                        style={{
                            position: 'absolute',
                            background: `rgba(0, 0, 0, ${percentage * 0.4})`,
                            left: '0',
                            top: '0',
                            width: percentage * 5000,
                            height: percentage * 1000,
                        }}
                    />
                )}
            >
                <div className="hero-content text-center text-neutral-content">
                    <div className=" bg-black bg-opacity-40 m-5 md:mx-40 md:my-16 md:p-16">
                        <h1 className="mb-5 text-5xl font-bold uppercase">{coverTitle}</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                </div>
            </Parallax>
        </div>
    );
};

export default Cover;