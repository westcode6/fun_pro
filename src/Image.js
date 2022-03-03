

const Image = (props) => {
    return (
        <figure className="mb-3">
            <img className="rounded-md shadow-lg h-32 w-full object-cover object-center" src={props.image} alt={props.alt} />
        </figure>
     );
}

export default Image;