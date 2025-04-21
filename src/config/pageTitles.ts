export const pageTitles = {
  "/": "START | NS/ PD",
  "/work": "WORK | NS/ PD",
  "/case/:id": (id: string) => ` ${id.toUpperCase()} | NS/ PD`,
  "/contact": "LET'S TALK | NS/ PD",
  "/cv": "MY CV | NS/PD",
  "/gallery/:id": (id: string) => `GALLERY ${id.toUpperCase()} | NS/ PD`,
  "*": "OPS! | NS/ PD"
};