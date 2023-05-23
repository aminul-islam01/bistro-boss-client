

const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="text-center">
            <p className=" text-yellow-600 mb-3">--- {subHeading} ---</p>
            <h3 className="text-3xl uppercase border-y-4 inline-block mb-8 py-2 px-8">{heading}</h3>
        </div>
    );
};

export default SectionTitle;