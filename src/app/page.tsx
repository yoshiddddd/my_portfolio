import Image from "next/image";

export default function Home() {
  return (
    <div>
      <header style={{ 
        backgroundColor: "#f8f9fa", 
        padding: "10px 20px", 
        borderBottom: "1px solid #dee2e6" 
      }}>
        <h1 style={{ 
          fontFamily: "var(--font-geist-sans)", 
          fontSize: "24px", 
          margin: "0" 
        }}>
          My Website
        </h1>
      </header>
      <main style={{ 
        fontFamily: "var(--font-geist-sans)", 
        padding: "20px" 
      }}>
        <section style={{ 
          marginBottom: "40px" 
        }}>
          <h2 style={{ 
            fontSize: "20px", 
            borderBottom: "2px solid #dee2e6", 
            paddingBottom: "10px" 
          }}>
            About Me
          </h2>
          <p style={{ 
            fontSize: "16px", 
            lineHeight: "1.5" 
          }}>
            Hello! I am a web developer with a passion for creating beautiful and functional websites. I have experience in various web technologies and enjoy learning new things.
          </p>
        </section>
        <section style={{ 
          marginBottom: "40px" 
        }}>
          <h2 style={{ 
            fontSize: "20px", 
            borderBottom: "2px solid #dee2e6", 
            paddingBottom: "10px" 
          }}>
            Projects
          </h2>
          <ul style={{ 
            listStyleType: "none", 
            padding: "0" 
          }}>
            <li style={{ 
              marginBottom: "20px" 
            }}>
              <h3 style={{ 
                fontSize: "18px", 
                margin: "0 0 5px 0" 
              }}>
                Project 1
              </h3>
              <p style={{ 
                fontSize: "16px", 
                lineHeight: "1.5" 
              }}>
                Description of project 1. This project is about...
              </p>
            </li>
            <li style={{ 
              marginBottom: "20px" 
            }}>
              <h3 style={{ 
                fontSize: "18px", 
                margin: "0 0 5px 0" 
              }}>
                Project 2
              </h3>
              <p style={{ 
                fontSize: "16px", 
                lineHeight: "1.5" 
              }}>
                Description of project 2. This project is about...
              </p>
            </li>
          </ul>
        </section>
        <section>
          <h2 style={{ 
            fontSize: "20px", 
            borderBottom: "2px solid #dee2e6", 
            paddingBottom: "10px" 
          }}>
            Contact
          </h2>
          <p style={{ 
            fontSize: "16px", 
            lineHeight: "1.5" 
          }}>
            Feel free to reach out to me at <a href="mailto:example@example.com">example@example.com</a>.
          </p>
        </section>
      </main>
      </div>
      );
}
