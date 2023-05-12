import Link from 'next/link';
import { BsBagCheckFill } from "react-icons/bs";
import { useRouter } from 'next/router';
import React from 'react'

const Custom404 = () => {

    const router = useRouter();
    const { status } = router.query;


    return (
        <div className="success-wrapper">
            <div className="success">
                {status === "true" && (
                    <p className="icon">
                        <BsBagCheckFill />
                    </p>
                )}
                <h2>
                    {status !== "true"
                        ? "You haven't completed your purchase yet."
                        : "Thank you for your order!"}
                </h2>
                {status === "true" && (
                    <p className="email-msg">Check your email inbox for the receipt.</p>
                )}

                <p className="description">
                    If you have any questions, please email
                    <a className="email" href="mailto:order@example.com">
                        order@example.com
                    </a>
                </p>
                <Link href="/">
                    <button type="button" className="btn">
                        Continue Shopping
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Custom404
