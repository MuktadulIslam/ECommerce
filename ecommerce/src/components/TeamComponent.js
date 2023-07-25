import React from 'react'
import TeamMemberComponent from './TeamMemberComponent'

export default function TeamComponent() {
    const backgroundImageUrl = "assets/img/breadcrumb.jpg"
    return (
        <>
            {/* Start BreadCrumb Area */}
            <section class="breadcrumb-area pt-80 pb-80" style={{ backgroundImage: `url(${backgroundImageUrl})`}}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h2>Team Members</h2>
                        </div>
                        <div class="col-md-6 align-self-center">
                            <ul class="text-right">
                                <li><a href="index.html">Home</a></li>
                                <li>Team Members</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* End BreadCrumb Area */}

            <TeamMemberComponent/>
        </>
    )
}
