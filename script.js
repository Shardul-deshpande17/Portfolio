/* ==========================================================
   EDIT THIS FILE to add your real links.
   Anything left as "" shows up as a dashed "placeholder" button.
   To fill one in, paste the URL between the quotes, e.g.
       github: "https://github.com/your-username/your-repo",
   ========================================================== */

/* ---------- 1. YOUR LINKS ---------- */
const LINKS = {
  github: "https://github.com/Shardul-deshpande17",
  linkedin: "https://www.linkedin.com/in/shardul-rahul-deshpande/",
  email: "sharduldeshpande09@gmail.com",
  tryhackme: "https://tryhackme.com/p/ShardulD09?utm_campaign=social_share&utm_medium=social&utm_content=profile&cardVersion=4fc468585d1e&utm_source=copy&share_date=2026-11-20&sharerId=687cb149ca428adf61d4be47",
  blog: "https://github.com/Shardul-deshpande17/Blogs/blob/main/first-blue-team-ctf.md",
  thmRepo: "https://github.com/Shardul-deshpande17/Tryhackme-SOC-Level-1",
  certGoogle: "https://www.coursera.org/account/accomplishments/specialization/2ZZRSYL5453W",
  certCS50: "https://certificates.cs50.io/45de0283-417b-4869-99cb-29facc7ecc50.pdf?size=letter",
  certCisco: "https://www.credly.com/badges/2ff8b719-b539-40c0-aded-74a1e1bda4eb/public_url",
  certWireshark: "https://www.coursera.org/account/accomplishments/verify/9A18CD6SZ3SQ",
  certSplunk: "https://www.coursera.org/account/accomplishments/verify/0MEIABXRGU9N"
};

/* ---------- 2. YOUR PROJECTS ----------
   evidence: paste a URL between the quotes to switch a button on.
     github  = the project's repository
   A button only appears if its key exists. To add one back later, add
   writeup: "", docs: "" or demo: "" to that project's evidence object.
   Tools starting with "?" show as a dashed placeholder tag.            */
const PROJECTS = [
  {
    id: "p1",
    title: "SOC Network Traffic Investigation & Detection Lab",
    summary:
      "Took a simulated attack from a network scan to a Splunk dashboard, and learned to separate 'suspicious' from 'proven'.",
    tags: ["Nmap", "Wireshark", "Splunk Cloud"],
    what:
      "Two virtual machines on an isolated network: Kali scanned an Ubuntu target running a small Python web server. I captured the traffic, turned it into structured events, loaded them into Splunk Cloud and built searches and a dashboard on top.",
    why:
      "Reading about SIEM work and actually doing it are different skills. I wanted to run the whole loop once, from raw traffic to searchable, alert-worthy data, and document it like an investigation rather than a tutorial.",
    objective:
      "Go from raw network activity to a labelled detection and a dashboard, and report honestly what the evidence proved and what it didn't.",
    tools: ["Kali Linux", "Ubuntu", "VirtualBox (host-only network)", "Nmap", "Wireshark", "Python http.server", "Splunk Cloud", "SPL"],
    did: [
      "Scanned the target with Nmap and found a single open service on port 8000, with ports 22, 80 and 443 closed.",
      "Confirmed the scan results at packet level in Wireshark: handshakes on the open port, resets on the closed ones.",
      "Sent three requests of rising interest (a normal page, an /admin probe and one carrying a cmd parameter) and followed the HTTP streams.",
      "Exported the activity as seven structured events and ingested them into Splunk Cloud.",
      "Wrote two SPL searches that label the suspicious requests automatically.",
      "Built a four-panel dashboard: traffic by port, requests by URI, suspicious activity and activity by source IP."
    ],
    skills: ["Network reconnaissance", "Packet analysis", "HTTP traffic review", "SIEM ingestion", "SPL", "Detection logic", "Dashboarding", "Evidence-based reporting"],
    outcome:
      "One complete packet-to-dashboard workflow. The admin probe and the command-parameter request were both flagged by detection. The command request was treated strictly as an indicator: nothing in the capture showed the command actually ran, so it was not reported as a compromise.",
    relevance:
      "Analysts constantly judge whether a suspicious-looking request was an attempt, a success or just noise. This lab practises that triage call and turns a manual observation into a repeatable search and dashboard.",
    limits: [
      "Only seven events, structured by hand rather than pulled from a live log pipeline.",
      "Detections match simple URI patterns and are not tuned for production-level noise.",
      "Command execution was not confirmed, so it is reported as an indicator only."
    ],
    evidence: { github: "https://github.com/Shardul-deshpande17/SOC-Network-Traffic-Investigation" }
  },
  {
    id: "p2",
    title: "SOC Alert Triage & Incident Investigation Lab",
    summary:
      "Started from one alert and worked across four log sources to decide whether five odd events were really one incident.",
    tags: ["Splunk Cloud", "MITRE ATT&CK", "Detection"],
    what:
      "An investigation of an alert on a Windows host, using synthetic authentication, endpoint, DNS and network logs that I wrote to be internally consistent. I correlated them into one timeline, then turned the findings into an SPL detection and an incident report.",
    why:
      "Many beginner projects stop at 'here is a suspicious event'. I wanted to follow the full Tier 1 path, from a single alert to a defensible conclusion.",
    objective:
      "Decide whether failed logins, discovery commands, a PowerShell-launched lookup and internal SMB connections were unrelated or one incident, then finish with a tested detection and an assessment.",
    tools: ["Splunk Cloud", "SPL", "MITRE ATT&CK", "Synthetic telemetry (4 log types)"],
    did: [
      "Triaged the logins: five failures followed by successful logins from the same source.",
      "Traced the process chain on the host and tied a DNS lookup tool back to its PowerShell parent.",
      "Matched the queried domain against independent DNS logs, so the link wasn't a coincidence between two unrelated sources.",
      "Reviewed every connection from the source: repeated SMB attempts to several internal hosts and one blocked RDP attempt.",
      "Extracted only the indicators actually observed and mapped the behaviour to five ATT&CK techniques.",
      "Wrote and tested one detection from the pattern I found, rather than writing it first and justifying it afterwards.",
      "Closed with a written incident report and severity assessment."
    ],
    skills: ["SIEM investigation", "Alert triage", "Event correlation", "Timeline reconstruction", "IOC extraction", "MITRE ATT&CK mapping", "Detection development", "Incident assessment"],
    outcome:
      "Classified as suspicious activity warranting further investigation. The evidence did not establish confirmed compromise, malware or lateral movement, and the report says so. The deliverables were an incident timeline, an IOC list, an ATT&CK mapping, a working detection and the incident report.",
    relevance:
      "Real incidents rarely sit in one log. Correlating identity, endpoint, DNS and network data is how a Tier 1 analyst decides what to escalate, and stating what is not proven matters as much as what is.",
    limits: [
      "The data is synthetic and self-authored, so this shows method, not real-world detection performance.",
      "Single host only, and the indicators were not enriched against threat intelligence."
    ],
    evidence: { github: "https://github.com/Shardul-deshpande17/SOC-Alert-Triage-Investigation-Lab" }
  },
  {
    id: "p3",
    title: "AWS Cloud Detection & Auto-Response Lab",
    summary:
      "Turned my own AWS account into a small SOC: logged activity, simulated attacks, alerted on risky events and auto-reversed one of them.",
    tags: ["AWS", "CloudTrail", "MITRE ATT&CK"],
    what:
      "In my own AWS account I recorded activity with CloudTrail, simulated attacks from the browser shell, hunted through the history with SQL and built near-real-time email alerts. One alert also reverses a risky change on its own: a firewall rule opened to the whole internet. Seven activities are mapped to ATT&CK.",
    why:
      "To see how detection and response work in the cloud, where the evidence lives in service logs rather than on a single machine.",
    objective:
      "Log account activity, hunt through it, alert on risky events, automatically undo one dangerous change, map each detection to ATT&CK and practise a basic cloud investigation.",
    tools: ["AWS CloudTrail", "S3", "Athena", "EventBridge", "Lambda (Python)", "SNS", "IAM", "CloudShell", "MITRE ATT&CK"],
    did: [
      "Recorded management events with CloudTrail and stored the logs in S3.",
      "Hunted through past activity with seven saved Athena queries covering failed logins, root usage, recon, persistence, defence evasion and permission errors.",
      "Wrote four EventBridge rules (root login, IAM changes, open firewall, logging tampering) that feed one function, which sends an email alert.",
      "Added an automatic fix that removes internet-open firewall rules, with the alert still sent if the fix fails.",
      "Gave the function a least-privilege role with only the permissions it needs.",
      "Simulated each attack against my own account, then removed the test resources and tore the lab down."
    ],
    skills: ["Cloud log analysis", "Detection rules", "Alerting & automation", "Least-privilege IAM", "ATT&CK mapping", "Cross-checking log sources", "Cost and cleanup discipline"],
    outcome:
      "Alerts fired for a root login, a new access key, an admin policy attachment, an open firewall rule (also auto-reverted) and logging being stopped. Recon and console brute force were covered by hunting queries only. The whole lab cost about two cents.",
    relevance:
      "Cloud account takeovers often show up as root logins, new keys, privilege changes and disabled logging. This lab covers those patterns and shows both the value and the risk of automated containment.",
    limits: [
      "Stopped-logging events appeared in CloudTrail's event history and triggered the alert, but I could not find them in the stored logs I queried. The cause is unconfirmed, and it is why I now cross-check sources.",
      "The first root-login test produced no alert, while a second did. I never confirmed why.",
      "The auto-fix was tested only on a firewall group attached to nothing, and only one of the three logging-tamper events was tested.",
      "No alert tuning, single account and region, email alerts only."
    ],
    note:
      "A learning project in my own account, not a production SOC. The responder function was drafted with AI help, then reviewed line by line and tested against my own simulated attacks.",
    evidence: { github: "https://github.com/Shardul-deshpande17/AWS-Cloud-Detection-Auto-Response-Lab" }
  }
];

/* ==========================================================
   Code below handles behaviour. You shouldn't need to edit it.
   ========================================================== */

(function () {
  "use strict";

  document.documentElement.classList.add("js");

  var toastEl = document.getElementById("toast");
  var toastTimer = null;

  function toast(message) {
    toastEl.textContent = message;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 3200);
  }

  /* ----- Links: real URL or clearly-labelled placeholder ----- */
 function applyLink(el, url, isEmail) {
    if (url) {
      el.href = isEmail ? "https://mail.google.com/mail/?view=cm&to=" + encodeURIComponent(url.replace(/^mailto:/i, "")) : url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
      el.classList.remove("is-placeholder");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("title");
    } else {
      el.href = "#";
      el.classList.add("is-placeholder");
      el.setAttribute("aria-disabled", "true");
      el.title = "Placeholder: add this link in script.js";
    }
  }

  document.querySelectorAll("[data-link]").forEach(function (el) {
    var key = el.getAttribute("data-link");
    applyLink(el, LINKS[key], key === "email");
  });

  var emailText = document.querySelector("[data-email-text]");
  if (emailText && LINKS.email) { emailText.textContent = LINKS.email.replace(/^mailto:/i, ""); }

  document.addEventListener("click", function (e) {
    var ph = e.target.closest(".is-placeholder");
    if (ph) {
      e.preventDefault();
      toast("Placeholder link. Add the real URL in script.js.");
    }
  });

  document.addEventListener("click", function (e) {
    var mail = e.target.closest('[data-link="email"]');
    if (mail && !mail.classList.contains("is-placeholder")) {
      e.preventDefault();
      window.open(mail.href, "gmailCompose", "width=640,height=640,left=200,top=100");
    }
  });
  
/* ----- Theme toggle ----- */
  var root = document.documentElement;
  var themeBtn = document.getElementById("theme-toggle");

  function syncThemeLabel() {
    var dark = root.getAttribute("data-theme") === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
  }
  syncThemeLabel();

  themeBtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (err) { /* storage may be blocked */ }
    syncThemeLabel();
  });

  /* ----- Project cards ----- */
  var grid = document.getElementById("project-grid");
  var dialog = document.getElementById("project-modal");
  var modalBody = document.getElementById("modal-body");
  var lastOpener = null;

  function tagList(items) {
    return items.map(function (t) {
      if (t.charAt(0) === "?") {
        return '<span class="tag tag-ph">' + t.slice(1).trim() + "</span>";
      }
      return '<span class="tag">' + t + "</span>";
    }).join("");
  }

  PROJECTS.forEach(function (p, i) {
    var card = document.createElement("button");
    card.type = "button";
    card.className = "project-card reveal";
    card.setAttribute("data-project", p.id);
    card.setAttribute("aria-haspopup", "dialog");
    card.innerHTML =
      '<span class="project-num">PROJECT 0' + (i + 1) + "</span>" +
      "<h3>" + p.title + "</h3>" +
      "<p>" + p.summary + "</p>" +
      '<div class="tags">' + tagList(p.tags) + "</div>" +
      '<span class="project-more">View details →</span>';
    card.addEventListener("click", function () { openProject(p, card); });
    grid.appendChild(card);
  });

  function evidenceButton(label, iconId, url) {
    var a = document.createElement("a");
    a.className = "btn btn-small";
    a.innerHTML = '<svg class="icon"><use href="#' + iconId + '"/></svg>' + label;
    applyLink(a, url, false);
    return a;
  }

  function openProject(p, opener) {
    lastOpener = opener;

    var steps = p.did.map(function (s) { return "<li>" + s + "</li>"; }).join("");
    var noteHtml = p.note ? '<div class="note">' + p.note + "</div>" : "";
    var limitsHtml = (p.limits && p.limits.length)
      ? '<section class="detail"><h4>Scope &amp; limitations</h4><ul>' +
        p.limits.map(function (l) { return "<li>" + l + "</li>"; }).join("") + "</ul></section>"
      : "";

    modalBody.innerHTML =
      '<div class="modal-head">' +
        '<p class="eyebrow">Project</p>' +
        '<h2 id="modal-title">' + p.title + "</h2>" +
        '<div class="tags">' + tagList(p.tags) + "</div>" +
        noteHtml +
      "</div>" +
      '<section class="detail"><h4>What was the project?</h4><p>' + p.what + "</p></section>" +
      '<section class="detail"><h4>Why I built it</h4><p>' + p.why + "</p></section>" +
      '<section class="detail"><h4>Objective</h4><p>' + p.objective + "</p></section>" +
      '<section class="detail"><h4>Tools &amp; technologies</h4><div class="tags">' + tagList(p.tools) + "</div></section>" +
      '<section class="detail"><h4>What I did</h4><ol>' + steps + "</ol></section>" +
      '<section class="detail"><h4>Skills developed</h4><div class="tags">' + tagList(p.skills) + "</div></section>" +
      '<section class="detail"><h4>Outcome</h4><p>' + p.outcome + "</p></section>" +
      '<section class="detail"><h4>Real-world relevance</h4><p>' + p.relevance + "</p></section>" +
      limitsHtml +
      '<section class="detail"><h4>Evidence</h4><div class="btn-row" id="evidence-row"></div></section>';

    var row = document.getElementById("evidence-row");
    var ev = p.evidence || {};
    [
      ["github", "GitHub repository", "i-github"],
      ["writeup", "Write-up", "i-book"],
      ["docs", "Technical documentation", "i-doc"],
      ["demo", "Demo", "i-play"]
    ].forEach(function (k) {
      if (k[0] in ev) { row.appendChild(evidenceButton(k[1], k[2], ev[k[0]])); }
    });

    document.body.classList.add("no-scroll");
    dialog.showModal();
    dialog.querySelector(".modal-inner").scrollTop = 0;
  }

  document.getElementById("modal-close").addEventListener("click", function () { dialog.close(); });

  /* Click on the dimmed backdrop closes the popup */
  dialog.addEventListener("click", function (e) { if (e.target === dialog) { dialog.close(); } });

  dialog.addEventListener("close", function () {
    document.body.classList.remove("no-scroll");
    if (lastOpener) { lastOpener.focus(); }
  });

  /* ----- Scroll reveal ----- */
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("visible"); });
  }

  /* ----- Footer year ----- */
  var yearEl = document.getElementById("year");
  if (yearEl) { yearEl.textContent = new Date().getFullYear(); }
})();
