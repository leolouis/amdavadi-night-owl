export async function checkLiveAlerts(repo) {
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/issues?state=open`);
        const issues = await response.json();

        if (issues && issues.length > 0) {
            const alertBanner = document.createElement("div");
            alertBanner.className = "live-alert-banner";
            alertBanner.style.cssText = "background: rgba(239, 68, 68, 0.9); padding: 12px; text-align: center; font-size: 14px; z-index: 1000; position: relative;";
            alertBanner.innerHTML = `🚨 <strong>Live Alert:</strong> ${issues[0].title} <a href="${issues[0].html_url}" target="_blank" style="color: white; text-decoration: underline; margin-left: 10px;">Details</a>`;
            
            document.body.prepend(alertBanner);
        }
    } catch (error) {
        console.error("Could not fetch GitHub alerts:", error);
    }
}
