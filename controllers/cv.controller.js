import path from "path";
import fs from "fs";

export const createCV = async (req, res) => {
  try {
  
    const { templateKey, formData: formDataRaw } = req.body;
    
    const formData = typeof formDataRaw === "string" ? JSON.parse(formDataRaw) : formDataRaw;

    if (!templateKey || !formData) {
      return res.status(400).json({ error: "Invalid request data" });
    }

    const ejsPath = path.join(process.cwd(), "views", `${templateKey}.ejs`);
    if (!fs.existsSync(ejsPath)) {
      return res.status(404).json({ error: "Template not found" });
    }

    const coverLetter = formData["Cover Letter"]?.[0] || {};

    const templateData = { coverLetter };

    res.render(templateKey, templateData, async (err, html) => {
      if (err) {
        console.error("EJS Render Error:", err);
        return res.status(500).json({ error: "EJS render failed", details: err.message });
      }
      res.set({ "Content-Type": "text/html" });
      res.json({ html });
    });

  } catch (error) {
    console.error("Create Cover Letter Error:", error);
    res.status(500).json({ message: "Failed to generate cover letter. Please try again later." });
  }
};
