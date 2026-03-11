from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def index():
    profile = {
        "name": "Bryce A. Corvera",
        "tagline": "IT Professional",
        "bio": (
            "Highly motivated Bachelor of Science in Information Technology (BSIT) "
            "graduate with a strong foundation in web development, backend systems, "
            "and cybersecurity. Skilled in the Python Flask framework, SEO, and "
            "building functional, secure applications. Possesses practical experience "
            "in network analysis, vulnerability assessment, and basic penetration "
            "testing gained through CTF challenges and hands-on projects."
        ),
    }

    personal_info = {
        "Location": "Baan Km3, Butuan City",
        "Citizenship": "Filipino",
        "Email": "bryce.corvera21@gmail.com",
        "Role": "IT Professional",
        "Phone": "0939-266-5553",
        "Availability": "Open for Hire",
    }

    technical_skills = {
        "Web & Backend Development": ["Python", "Flask", "Django", "HTML", "CSS"],
        "Cybersecurity & Forensics": ["Network Analysis", "Vulnerability Assessment", "Penetration Testing", "CTF"],
        "Linux Systems": ["Ubuntu", "Kali Linux"],
        "Server Management": ["Tailscale", "Remote Server Admin"],
        "SEO & Database Management": ["MySQL", "SQLite", "SEO"],
        "Cloud & Hosting": ["PythonAnywhere"],
    }

    soft_skills = [
        "Critical Thinking",
        "Problem Solving",
        "Team Collaboration",
        "Adaptability",
        "Technical Communication",
    ]

    projects = [
        {
            "numeral": "I",
            "title": "Face Recognition Biometric System",
            "description": "Identity verification and secure access system deployed at DOTr Region 13.",
            "tech": "(Python, OpenCV, Ubuntu, Tailscale)",
            "images": [
                "bio-login.png",
                "bio-dashboard.png",
                "bio-scanning.png",
                "bio-recognized.png",
            ],
        },
        {
            "numeral": "II",
            "title": "SMART Home Automation",
            "description": "Miniature smart home model with automated lighting and gate control via voice commands.",
            "tech": "(Raspberry Pi 4, Python (Flask), Alexa Echo Dot, Servo Motor, LED Lights)",
        },
        {
            "numeral": "III",
            "title": "Portfolio Website",
            "description": "Personal portfolio site hosted on PythonAnywhere.",
            "tech": "(Python (Flask), HTML/CSS, JavaScript)",
        },
    ]

    code_snippet = '''developer = {
    "name": "Bryce A. Corvera",
    "education": "BS Information Technology",
    "roles": ["IT Professional", "Developer"],
    "status": "Open for Hire"
}

# Ready to build great things'''

    experience = [
        {
            "location": "Dec 2025 - Mar 2026",
            "title": "IT Intern / Developer - DOTr Region 13",
            "description": (
                "Developed and deployed a Face Recognition Biometric System "
                "to streamline identity verification and secure access. "
                "Configured and managed remote server access using Ubuntu "
                "and Tailscale to ensure secure, cross-platform network "
                "connectivity for the biometric system."
            ),
        },
        {
            "location": "Oct 2025",
            "title": "Hack4Gov Cybersecurity Competitor - DICT",
            "description": (
                "Secured 9th place in the regional Hack4Gov cybersecurity "
                "hackathon. Applied digital forensics, cryptography fundamentals, "
                "and network analysis tools to solve defensive strategy scenarios "
                "in a timed, competitive environment."
            ),
        },
    ]

    achievements = [
        {
            "date": "Dec 2025",
            "title": "DOTr Region 13 Internship",
            "description": "Deployed a Face Recognition Biometric System in a government IT environment.",
        },
        {
            "date": "Oct 2025",
            "title": "Hack4Gov Cybersecurity Hackathon",
            "description": "9th Place Finisher — regional cybersecurity competition by DICT.",
            "images": [
                "hack4gov-certs.png",
                "hack4gov-stage.png",
                "hack4gov-team.png",
            ],
        },
    ]

    certifications = [
        {
            "title": "The Complete Full-Stack Web Development Bootcamp",
            "issuer": "Udemy",
            "instructor": "Dr. Angela Yu",
            "date": "Sept. 4, 2025",
            "hours": "61.5 total hours",
            "image": "cert-udemy.png",
            "cert_id": "UC-ef807c1f-b3cc-46c9-8bdf-c04fa95859d2",
        },
    ]

    education = [
        {
            "years": "2022 - 2026",
            "degree": "BS Information Technology",
            "school": "ACLC College of Butuan",
            "location": "Butuan City, Philippines",
        },
    ]

    return render_template(
        "index.html",
        profile=profile,
        personal_info=personal_info,
        technical_skills=technical_skills,
        soft_skills=soft_skills,
        projects=projects,
        code_snippet=code_snippet,
        experience=experience,
        achievements=achievements,
        certifications=certifications,
        education=education,
    )


if __name__ == "__main__":
    app.run(debug=True)
