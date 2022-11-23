import config from "../config.json"
import styled from "styled-components"
import { CSSReset } from "../src/components/CSSReset"
import Menu from "../src/components/Menu"
import { StyledTimeline } from "../src/components/Timeline"

function HomePage() {
    const estilosDaHomePage = { 
        // backgroundColor: 'red' 
    }

    // console.log(config.playlists)
    return (
        <>
        <CSSReset/>
        <div style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
                // backgroundColor: "red",
            }}>
            <Menu />
            <Header />
            <TimeLine playlists={config.playlists} />
        </div>
        </>
    )

}

export default HomePage

// function Menu() {
//     return (
//         <div>
//             Menu
//         </div>
//     )
// }
const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;
const StyledNav = styled.div`
    img {
        width: 1330px;
        height: 300px;
        display: flex;
    }
`;

function Header() {
    return (
        <div>
            <StyledNav>
            <img src={'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'} />
            </StyledNav>
            
            <StyledHeader>
                <section className="user-info">
                    <img src={`https://github.com/${config.github}.png `} />
                    <div>
                        <h2>{config.name}</h2>
                        <p>{config.job}</p>
                    </div>

                </section>

            </StyledHeader>
        </div>
    )
}
function TimeLine(props) {
    // console.log("Dentro do componente", props)
    const playlistNames = Object.keys(props.playlists)
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = props.playlists[playlistName]
                console.log(playlistName)
                console.log(videos)
                return (
                    <section>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos.map((video) => {
                                return (
                                    <a href={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>

                                )
                            })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )

}