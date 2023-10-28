import { useEffect, useState } from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const MeetTeam = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch("/teams.json")
      .then((res) => res.json())
      .then((data) => setTeams(data));
  }, []);

  return (
    <div>
        
      <div className="text-center space-y-3">
        <h4 className="font-bold text-[#FF3811]">Team</h4>
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p>
          The majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.{" "}
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="card  bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={team.image} alt="teams" className="rounded-xl w-full" />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{team.title}</h2>
              <p>{team.description}</p>

              <div className="flex items-center justify-center gap-3 mt-3">
                <button>
                  {" "}
                  <FaFacebook className="text-xl text-blue-700"></FaFacebook>{" "}
                </button>
                <button>
                  {" "}
                  <FaLinkedin className="text-xl text-blue-700"></FaLinkedin>{" "}
                </button>

                <button>
                  {" "}
                  <FaTwitter className="text-xl text-blue-300"></FaTwitter>{" "}
                </button>

                <button>
                  {" "}
                  <FaInstagram className="text-xl text-[#E1306C]"></FaInstagram>{" "}
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MeetTeam;
