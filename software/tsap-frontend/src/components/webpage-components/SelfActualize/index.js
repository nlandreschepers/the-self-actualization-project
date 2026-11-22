import {Link} from "react-router";

function SelfActualize() {
    return (
        <div className={"container"}>

            <h1>Self-Actualize</h1>

            <p>Here you can find information provided as is, without any
                guarantee that it works, regarding how to get to
                self-actualization.</p>

            <h2>Levels of the Maslow's hierarchy of needs</h2>

            <Link
                to={"https://en.wikipedia.org/wiki/Maslow%27s_hierarchy_of_needs"}>
                Levels of the Maslow's hierarchy of needs
            </Link>

            <h3>Physiological needs</h3>

            <h3>Safety needs</h3>

            <h3>Love and social needs</h3>

            <p>
                Very important to note here is that what&nbsp;
                <Link to={"https://karlalbrecht.com/wordpress/about-karl/"}
                      target={"_blank"}>
                    Karl Albrecht
                </Link>
                &nbsp;mentioned in his book:&nbsp;
                <Link
                    to={"https://karlalbrecht.com/wordpress/book-social-intelligence/"}
                    target={"_blank"}>
                    Social Intelligence.
                </Link>
                &nbsp;Namely:
            </p>

            <h5 className={"fst-italic"}>
                CODES OF CONDUCT: VIOLATE THE RULES AT YOUR PERIL
            </h5>
            <p className={"fst-italic"}>
                Every culture, and indeed every situation and every context, has
                some kind of code of conduct that people impose on themselves.
                Formal or informal, conscious or unconscious, these codes have
                the effect of making humans highly predictable to one another.
                Indeed, no organized society could function without the myriad
                subconscious "deals" people make with one another about how to
                behave. People who have adapted to a particular culture have
                internalized these codes and typically follow them quite
                automatically and unconsciously. And the person who violates an
                important social code--the rebel, the renegade, the
                radical--will almost certainly arouse the disapproval and even
                the animosity of others who follow that code.
            </p>

            <p>
                If you grow up in society, and during adolescence deviate from
                the cultural wisdom regarding internal coping mechanisms and
                engagement strategies, you will be at risk of being regarded as
                a rebel, a deviant, someone that is not part of the tribe,
                social group, clan. Merely for having your own opinion regarding
                who to become, who you already are and what you stand for.
            </p>

            <p>
                Take for example&nbsp;
                <Link
                    to={"https://en.wikipedia.org/wiki/Princess_Alexia_of_the_Netherlands"}>princess
                    Alexia
                </Link>
                . It seems she tends more to her mother, than to her father like
                her two sisters.
                Every child does this probably, but in the case of the princess,
                she might tend then also more to the cultural wisdom of
                South-America: High emotional intelligence and principles of
                engagement with people different than what is common in The
                Netherlands. How friendly, competent, effective this
                choice might be, it results in communicating implicitly a
                different code. How does that affect her experience of social
                acceptance?
            </p>

            <h3>Esteem needs</h3>

            <h3>Self-actualization</h3>

        </div>
    )
}

export default SelfActualize;
