interface AboutPageData {
  info: Record<string, string>[];
  bio: string;
}

export const aboutPageData: AboutPageData = {
  bio: "Hi, I'm Gabriel! My journey in game development started early, evolving from a hobby into a career focused on crafting immersive digital experiences. A Digital Games graduate from FATEC, I have experience developing and publishing titles on the Google Play Store. I’m passionate about using Unity and Godot to build the same kind of impactful worlds that first inspired me as a kid.",
  info: [
    { Name: "Gabriel Rimoldi Carollo" },
    { Email: "rimoldi98@gmail.com" },
    { Phone: "+55 (11) 97279-0409" },
    { Address: "São Paulo, Brazil" }
  ]
}