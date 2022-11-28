function index(props) {
    return (
        <>
            {!props.state === true ?
                <button onClick={props.onClick}>
                    <svg width="37" height="34" viewBox="0 0 37 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35.1579 17.7896H2" stroke="#030708" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.1579 2H2" stroke="#030708" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M35.1579 32H2" stroke="#030708" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                :
                <button onClick={props.onClick}>
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_27_84)">
                            <path d="M3.65692 0L0 3.65692L21.4466 25.1035L0 46.5501L3.65692 50.207L25.1035 28.7604L46.5501 50.207L50.207 46.5501L28.7604 25.1035L50.207 3.65692L46.5501 0L25.1035 21.4466L3.65692 0Z" fill="black" />
                        </g>
                        <defs>
                            <clipPath id="clip0_27_84">
                                <rect width="50" height="50" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </button>
            }
        </>
    );
}

export default index;
