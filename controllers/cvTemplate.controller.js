import coverLetterTemplates from "../utils/template.js";

export const getCVTemplates = (req, res) => {
  try {
    const { type } = req.query;

    if (!type || !coverLetterTemplates[type]) {
      return res.status(400).json({
        success: false,
        message: "Invalid cover letter type",
      });
    }

    const templates = coverLetterTemplates[type].map(t => ({
      id: t.id,
      templateKey: t.key,
      image: t.image,
    }));

    res.json({
      success: true,
      data: templates,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Unable to load cover letter templates.",
    });
  }
};
