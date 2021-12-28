import React from "react";
import "./profileOwner.scss"


export function ProfileOwner() {
    return <div className='profileOwner'>
        <div className='profileOwnerWrapper'>
            <div className={'container'}>

                <div className={'ownerName'}>
                    <h2>John Doe</h2>
                    <span>Member since August 2017</span>
                    <span>
                        <i>
                            Location
                        </i>
                    </span>
                </div>

                <div className='editProfileButton'>
                    <button>edit</button>
                </div>

            </div>
        </div>
    </div>
}