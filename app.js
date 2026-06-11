(function(){
  'use strict';

  const PROMPTS = [
    {
      id:'p1',
      title:'Example 1: Ukiyoe Flash Card',
      desc:'Core Instruction: A Japanese Ukiyoe style collectible trading card design, vertical composition. The illustration style needs to closely mimic the visual aesthetics of "Demon Slayer", features include',
      tags:["card", "curated", "illustration", "japanese", "photography", "retro"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Core Instruction: A Japanese Ukiyoe style collectible trading card design, vertical composition. The illustration style needs to closely mimic the visual aesthetics of "Demon Slayer", features include: ink outlines with varying thickness, traditional woodblock print color schemes, and dramatic dynamic composition.

Subject Description: The card protagonist is {Character Name} (Title: {Hashira Name/Title}), in a dynamic fighting pose, holding {Weapon Description}. The character is performing {Breathing Style Move Name}, surrounded by {Visual Effect Description} (e.g., giant flames / water dragon / whirlwind), these effects need to be presented in Traditional Japanese Sumi-e style.

Background and Material: The background needs to blend textured Holographic Foil effect, shimmering beneath the traditional ink elements.

Border: The image should have a decorative border composed of Traditional Japanese Patterns (such as Seigaiha or Asanoha). At the bottom, there is a stylized banner with "{Japanese Kanji Name}" written in ancient Japanese calligraphy.`
    },
    {
      id:'p2',
      title:'Example 2: Generate Image from Coordinates',
      desc:'Create an image at 40.7128° N, 74.0060° W, on September 11, 2001, at 08:46',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create an image at 40.7128° N, 74.0060° W, on September 11, 2001, at 08:46`
    },
    {
      id:'p3',
      title:'Example 3: Character Cloning',
      desc:'Need to upload a reference image as the character object',
      tags:["character", "curated", "experimental", "illustration", "surreal"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Based on the uploaded reference character, shoot a real-life scene in a spacious Tokyo girl's apartment—a bright, lived-in studio, spatial proportions close to 1LDK. The room should contain white walls, warm wooden floors, beige curtains, a low bed with soft bedding, a desk with cosmetics, bookshelves, plants, a standing mirror, a rug, scattered personal items, and a compact kitchen area at the back of the room. The room must have strong depth of field, with distinct foreground, middle ground, and deep background layers.

Place about thirty characters identical to the reference character (face, hairstyle, clothing all identical to the reference character) in the room, each in a different action or interaction state. Adjust the distance, scale, height, and visibility between characters to make the room density look natural.

Foreground (very close to the lens/partially occluded):

- A person walking past the lens, slightly out of focus

- A hand or shoulder entering the frame

- One person approaching the lens

- One person half-hidden behind a large plant

- One person sitting directly in front, tying hair

- One person kneeling by the table organizing items

Middle ground (main room area):

- One person stretching by the bed

- One person sitting on the bed checking phone

- One person lying on the bed

- One person reaching under the bed

- One person organizing cosmetics on the table

- One person flipping through books on the bookshelf

- One person standing in front of the mirror

- One person squatting on the rug

- One person leaning against the wall

- One person looking out the window

- One person adjusting curtains

- One person carrying clothes

- One person drinking water from a cup

- One person arranging pillows

- One person sitting on the floor eating snacks

- One person doing a small jump or motion blur action

- One person moving a small chair

Background (deep depth/near kitchen and... corridor):

- One person standing by the stove drinking water

- One person opening the cupboard

- One person sitting on a stool

- One person leaning against the doorway

- One person walking towards the corridor

- One person's silhouette partially blocked by the refrigerator

- One person reaching for a high shelf

- One person standing far in the entrance area

- One person faintly visible through the corridor frame

- One person sitting on the floor near the kitchen rug

Ensure strong layering occlusion: foreground figures partially obscure middle ground figures, background figures appear smaller and present natural perspective falloff. Naturally scatter the thirty figures, avoiding symmetry or grid alignment. All figures use soft natural daylight lighting to ensure perfect blending with the environment.

Place the figures in a real-life background matching the illustration pose and composition, while faithfully retaining the illustration's texture and style. Use realistic lighting, depth of field, and subtle camera effects to make the illustration seamlessly connect with the real environment.`
    },
    {
      id:'p4',
      title:'Example 4: Generate Flowchart from Document',
      desc:'The diagram illustrates the process of constructing a Dyson swarm based on the paper Armstrong, S., & Sandberg, A. (2013). Eternity in six hours: Intergalactic spreading of intelligent life and sharpe',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`The diagram illustrates the process of constructing a Dyson swarm based on the paper Armstrong, S., & Sandberg, A. (2013). Eternity in six hours: Intergalactic spreading of intelligent life and sharpening the Fermi paradox. Acta Astronautica, 89, 1-13.`
    },
    {
      id:'p5',
      title:'Example 5: Create PPT from Article',
      desc:'Need to upload article/text as content for generating PPT',
      tags:["curated", "presentation", "professional"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Help me create a set of Chinese PPTs that middle school students can understand based on the article below.

First write a PPT outline, planning the content of each PPT page.

Then throw the content of each PPT page to Nana Banana pro to generate the corresponding PPT page, ensuring consistent style.

The specific style of the PPT should be "Anthropic/Claude style" "Warm Academic Humanism" design.

Background: Use warm beige/cream (# F3F0E9) as the base color, mimicking high-quality paper texture.

Font: Use elegant Serif for titles, and modern Sans-serif for body text.

Color Scheme: Main colors are Terracotta Red (# D67052) and Mustard Yellow (# F0B857), with Dark Navy Blue as accents. Avoid neon colors or pure black.

Visual Elements: Use a typography-focused grid layout, illustration style should be abstract, organic black hand-drawn line art, placed on solid Terracotta Red blocks, some key information uses card layout.

Charts: Flat, minimalist bar charts, emphasizing data contrast, removing excess borders.

Both text and images are generated by Nano Banana Pro, also do not turn the PPT into a single image, one image per page.

Article content is: []`
    },
    {
      id:'p6',
      title:'Example 6: Character Deconstruction',
      desc:'Need to upload a character image as reference',
      tags:["character", "curated", "illustration", "technical"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Hand-drawn style fashion concept breakdown diagram.

Center: A full-body shot of a stylish, confident, slightly sexy (but not explicit) female character, with a natural and energetic pose.

Surrounding: Structured layout of her key elements:

• Clothing layers—showing coat, underwear, leggings (lace, tulle material), shapewear, and zooming in on detail patterns.

• Expression sheet—3-4 facial expressions (neutral, shy, surprised, focused).

• Close-up shots—fabric fold textures, skin details, hand gestures.

• Lifestyle and accessories—opened handbag containing daily items: lipstick, perfume, compact powder, hand cream, diary, health supplements.

• Material annotations—handwritten style notes next to each item (e.g., "soft lace", "matte leather", "shade #520").

Background: Soft beige or parchment texture, creating a design sketch atmosphere.

Lighting: Clean and soft shadows, making the image integrated.

Output: 4K HD 2D illustration, combining sexiness and fashion sense.

Language: Chinese and English labels.`
    },
    {
      id:'p7',
      title:'Example 7: Behind the Scenes of Item Creation',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`I want to see how this was made`
    },
    {
      id:'p8',
      title:'Example 8: Children\'s Literacy Newsletter',
      desc:'Please generate a children\'s literacy newsletter "Amusement Park", vertical A4, learning newsletter layout, suitable for 5–9 year old children to recognize words and identify objects from pictures.',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Please generate a children's literacy newsletter "Amusement Park", vertical A4, learning newsletter layout, suitable for 5–9 year old children to recognize words and identify objects from pictures.
1. Newsletter Title Area (Top)
Top center large title: "Amusement Park Literacy Newsletter"
Style: Cross newsletter / Children's learning paper feel
Text requirements: Large, eye-catching, cartoon handwritten font, colorful outline
Decoration: Add sticker-style decorations related to Amusement Park around it, bright colors
2. Newsletter Body (Middle Main Image)
Center of the picture is a Cartoon Illustration style "Amusement Park" scene:
Overall atmosphere: Bright, warm, positive
Composition: Object boundaries are clear, easy to correspond to text, not too crowded.
Scene Zoning and Core Content
Core Area A (Main Objects): Show the core activities of the Amusement Park (children playing on rides).
Core Area B (Supporting Facilities): Show related tools or items (ticket booth, snacks, signage).
Core Area C (Environmental Background): Reflect environmental features (entrance, road signs, colorful flags, green space, etc.).
Theme Characters
Role: 1 cute cartoon character (Identity: Amusement Park staff/visitor child both ok).
Action: Interacting naturally with the scene (e.g., smiling and pointing the way, waving welcome, playing with children).
3. Must-Draw Objects and Literacy List (Generated Content)
Please be sure to clearly draw the following objects in the picture and reserve space for labels:
1. Core Roles and Facilities:
gōng zuò rén yuán Staff
shòu piào chù Ticket Booth
guò shān chē Roller Coaster
mó tiān lún Ferris Wheel
xuán zhuǎn mǎ Merry-Go-Round
2. Common Items/Tools:
piào Ticket
qì qiú Balloon
bīng jī líng Ice Cream
bào mǐ huā Popcorn
táng hú lu Tanghulu
miàn jù Mask
wán jù Toy
xiǎo qí zi Small Flag
3. Environment and Decoration:
rù kǒu Entrance
chū kǒu Exit
zhǐ shì pái Signpost
cǎi qí Colorful Flags
guǎng chǎng Square
(Note: The number of objects in the picture is not limited to this, but the above list must be the focus of depiction; total 18 typical nouns, suitable for 5–9 year old children literacy.)
4. Literacy Annotation Rules
Label the above list of objects with Chinese literacy labels:
Format: Two-line system (first line Pinyin with tones, second line Simplified Chinese characters).
Style: Colorful small sticker style, white background with black text or dark text, clearly readable.
Layout: Labels close to corresponding objects, not blocking the subject.
5. Art Style Parameters
Style: Children's picture book style + Literacy newsletter style
Color: High Saturation, Warm Tone
Quality: 8k resolution, high detail, vector illustration style, clean lines.`
    },
    {
      id:'p9',
      title:'Example 9: Generate Material Texture',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Can you help me generate a decorative atlas using the texture of this building?`
    },
    {
      id:'p10',
      title:'Example 10: Add Giant Creature to City Image',
      desc:'Need to upload a city reference image',
      tags:["architecture", "city", "curated", "fantasy", "surreal"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Use the uploaded city photo as the base map. Do not change the real buildings, streets, vehicles or people in the photo. Maintain the authenticity of the photo. Add a very huge, stylized illustration creature in the sky above and behind the buildings, as if it is overlooking the entire city. The creature should be drawn in a flat graphic style, with clear outlines, and use limited neon colors (such as soft neon green, neon yellow and lime green), similar to murals or poster illustrations.
Creature Design:
- Fantasy whimsical world, not horror or violent
- Composed of layered shapes, scales, hair or floral patterns
- Long arms or hair hanging beside the buildings
- Huge horns or other peculiar features clearly visible against the sky
Fusion with photo:
- Place the creature behind the edge of the building, making part of its body appear behind the edge of the building, pay attention to perspective relationship
- Use correct overlapping methods: building edge in front, creature behind, making it blend into the scene
- If necessary, add very soft shadows or color reflections on the surface of nearby buildings, but keep it subtle
- Maintain the original brightness of the sky, making the illustration clearly stand out
Optional:
- Add some small, simple illustration figures (flat, minimalist style) on the street, such as walking a dog or crossing the road, but do not block real people.
Overall atmosphere: Dreamy surreal city scene, a huge, friendly illustration creature appears above realistic buildings, combining real photos with simple modern illustrations.`
    },
    {
      id:'p11',
      title:'Example 11: Toy Disassembly Display',
      desc:'There is only one [Astro Boy] toy on the table. The toy is displayed split in half, left and right. The left half of the toy is the normal toy image, and the right half is a transparent shell, clearly',
      tags:["curated", "product", "toy"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`There is only one [Astro Boy] toy on the table. The toy is displayed split in half, left and right. The left half of the toy is the normal toy image, and the right half is a transparent shell, clearly showing the internal structure inside, with white lines pointing out what each part is. On the desktop, bright background, blurred table. The left side shows this half-transparent half-solid toy, and the right side of the picture shows parameters pointed out by various lines.`
    },
    {
      id:'p12',
      title:'Example 12: Fluffy Plush Toy',
      desc:'Need to upload a reference image',
      tags:["curated", "product", "toy"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Convert a simple flat vector logo into a soft, fluffy 3D object. Use original colors. The object is completely covered in fur, with hyper-realistic fur texture and soft shadows. It is located in the center of a clean light gray background, floating gently in the air. The style is surreal, tactile and modern, creating a comfortable and playful feeling. Use studio lighting and high-resolution rendering.`
    },
    {
      id:'p13',
      title:'Example 13: Crystal Texture Emoji',
      desc:'A photorealistic, highly detailed image featuring [a 3D Polaroid camera] rendered in clear, highly polished transparent glass or crystal material. [The body has distinct thickness and dimensional dept',
      tags:["3d", "curated", "illustration", "product"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`A photorealistic, highly detailed image featuring [a 3D Polaroid camera] rendered in clear, highly polished transparent glass or crystal material. [The body has distinct thickness and dimensional depth, the iconic shape of a classic Polaroid camera—boxy body, front lens, top viewfinder, front shutter button, and bottom film slot—all presented in simplified yet extremely precise geometric structures, making it instantly recognizable without any patterns]. All edges are treated with rounded chamfers and smooth curved surfaces, creating elegant refraction effects under light. The camera is placed slightly tilted, as if floating above a clean, flawless, seamless pale beige or very light gray studio background.

Lighting is bright, clean professional studio light, focusing on highlighting the transparency, specular reflection and refraction characteristics of the glass material. Sharp and delicate highlights appear on the body chamfers, film slot edges and lens rings, highlighting the crystal texture and luxurious vision. Subtle refraction, light bending and local distortion effects are produced when light penetrates the interior of the glass body, especially obvious in the lens thickness variation area, inside the film slot and near the top viewfinder, greatly enhancing realism and visual impact. A soft, diffuse shadow falls below and slightly behind the camera, giving the picture a sense of groundedness without destroying the minimalist temperament.

The overall aesthetic style is minimalist, modern, and clean, presenting the visual effect of high-end product photography and concept art rendering. The focus of the picture is completely on the crystal clear material performance and classic geometric shape of the glass Polaroid camera. The image as a whole is high-key and shallow depth of field processing, keeping the Polaroid camera in absolute sharp focus, while the background is softly blurred, thereby maximizing the subject.`
    },
    {
      id:'p14',
      title:'Example 14: Fluffy Inflatable Toy',
      desc:'Need to upload a reference image',
      tags:["curated", "product", "toy"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a high-resolution 3D rendering of the logo in the attachment, the shape should be an inflatable fluffy object. The shape should appear soft and full, like a plush balloon or inflatable toy. Use a smooth matte texture and add subtle fabric folds and stitching to highlight the inflatable effect. The object should be slightly elastic, supplemented by soft shadows and lighting to enhance volume and realism. Place it on a simple background (light gray).`
    },
    {
      id:'p15',
      title:'Example 15: Hand-drawn Isometric View',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Draw a hand-drawn isometric diagram of this street`
    },
    {
      id:'p16',
      title:'Example 16: Reveal Behind-the-Scenes of Photo Creation',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`I want to see the behind-the-scenes of this photo shoot and understand how it was born.`
    },
    {
      id:'p17',
      title:'Example 17: Estimate Age from Face',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a hyper-realistic, high-resolution portrait infographic based on (your photo). Keep the identity, hairstyle, clothing, and natural skin tone of the person in (your photo) unchanged, and use a neutral studio background. Overlay a subtle semi-transparent facial analysis grid on the entire face, similar to a 3D facial scan grid: fine, soft white lines extending along the facial contours, slightly glossy but not obscuring skin details. Add a clear vertical red laser line on one side of the face, like a futuristic scanning effect. All analysis lines must be soft, concise, and elegant, like a beauty technology advertisement. Create a concise medical beauty infographic using global data percentages to evaluate 5 aging factors: 1. Fine lines and wrinkles; 2. Skin texture and elasticity; 3. Facial volume and sagging; 4. Signs of aging around eyes; 5. Skin tone and pigmentation: For each factor, place a small label with a thin line pointing to the corresponding facial area, and write a short title and a 0-100% actual percentage score (based on global data) next to it, for example: "Fine lines and wrinkles - 18%" "Skin texture and elasticity - 72%" "Facial volume and sagging - 35%" "Signs of aging around eyes - 41%" "Skin tone and pigmentation - 63%". Use concise, modern sans-serif fonts and small technical style text, similar to scientific facial analysis user interface. In the bottom center of the image, display the estimated real age based on the analysis in bold large characters, for example: "Estimated Age: (random number based on facial analysis)". Overall style: Futuristic AI-guided skincare analysis, minimalist, high-end editorial lighting, gender-neutral, suitable for any face.`
    },
    {
      id:'p18',
      title:'Example 18: Historical Newspaper',
      desc:'A 1080x1080 pixel close-up photo, hands holding a white newspaper, shot downwards. The background is extremely blurred and dark, making the newspaper stand out clearly. The newspaper occupies most of ',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`A 1080x1080 pixel close-up photo, hands holding a white newspaper, shot downwards. The background is extremely blurred and dark, making the newspaper stand out clearly. The newspaper occupies most of the picture, and its content is legible. The eye-catching headline is "[Headline]". In the center of the picture is a large black and white photo of [Photo Description]. The caption has many columns and is legible. Each shot maintains the same style, composition, lighting, characters, blur effect, layout and newspaper design, only changing the headline and photo.`
    },
    {
      id:'p19',
      title:'Example 19: Character Relationship Chart',
      desc:'Example 19: Character Relationship Chart',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`[Japanese Dating Sim Game] Character Relationship Chart. Includes character names, relationship arrows, affection levels, conflict points. [Romantic Comedy Style]. Total 7 characters.`
    },
    {
      id:'p20',
      title:'Example 20: Otome Game Setting Collection',
      desc:'A set of background information for setting the protagonist and supporting characters of an Otome game.',
      tags:["curated", "game"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`A set of background information for setting the protagonist and supporting characters of an Otome game.`
    },
    {
      id:'p21',
      title:'Example 21: Character Level Evolution',
      desc:'Game design illustration. Based on the reference image, create four versions of the character: beginner, intermediate, advanced, and elite. Each version should have a unique appearance and be arranged',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Game design illustration. Based on the reference image, create four versions of the character: beginner, intermediate, advanced, and elite. Each version should have a unique appearance and be arranged in order. Character name: [ A ]`
    },
    {
      id:'p22',
      title:'Example 22: Recursive Image',
      desc:'An amateur photo from 1998, showing a middle-aged artist hand-copying an image from a computer screen onto a canvas with oil paint, but the image itself is a photo of the artist painting a recursive i',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`An amateur photo from 1998, showing a middle-aged artist hand-copying an image from a computer screen onto a canvas with oil paint, but the image itself is a photo of the artist painting a recursive image.`
    },
    {
      id:'p23',
      title:'Example 23: Multi-Character Crossover Comic',
      desc:'Help me generate a collection story of female characters in anime, including Nami, Robin, Sakura, Hinata, and Rangiku Matsumoto, in the form of a color comic, requiring Chinese.',
      tags:["character", "comic", "curated", "illustration"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Help me generate a collection story of female characters in anime, including Nami, Robin, Sakura, Hinata, and Rangiku Matsumoto, in the form of a color comic, requiring Chinese.`
    },
    {
      id:'p24',
      title:'Example 24: Coloring Figure Garage Kit',
      desc:'Add texture and color to this garage kit, and change the surrounding environment to an environment that matches the character setting.',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Add texture and color to this garage kit, and change the surrounding environment to an environment that matches the character setting.`
    },
    {
      id:'p25',
      title:'Example 25: Golden Quote Card',
      desc:'A wide celebrity quote card, brown background, serif light gold "Stay Hungry, Stay Foolish", small text "——Steve Jobs", a large faint quotation mark in front of the text, character portrait on the lef',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`A wide celebrity quote card, brown background, serif light gold "Stay Hungry, Stay Foolish", small text "——Steve Jobs", a large faint quotation mark in front of the text, character portrait on the left, text on the right, text occupies 2/3 of the picture, character occupies 1/3, character has a gradient transition feeling.`
    },
    {
      id:'p26',
      title:'Example 26: Qingming Shanghe Tu Style Image',
      desc:'A magnificent, highly detailed traditional Chinese ink and color handscroll painting on ancient silk, perfectly mimicking the artistic style, brushwork, and scattered perspective of Zhang Zeduan\'s ma',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`A magnificent, highly detailed traditional Chinese ink and color handscroll painting on ancient silk, perfectly mimicking the artistic style, brushwork, and scattered perspective of Zhang Zeduan's masterpiece "Along the River During the Qingming Festival".
Center Scene: Overlooking the bustling modern Chicago Riverwalk. The focus is the massive steel bascule bridge (DuSable Bridge/Michigan Avenue Bridge), with traffic, countless cars, yellow taxis, and Chicago Transit Authority (CTA) buses shuttling across, all depicted with precise traditional brushstrokes.
Environmental Details: On the Chicago River below, modern architectural style cruise ships, water taxis, and kayaks shuttle back and forth. Skyscrapers of various styles line the riverbanks (resembling the Wrigley Building and Tribune Tower), painted using traditional "Jiehua" architectural painting techniques. Elevated railways and moving "L" trains are visible in the background.
Human Activity: The Riverwalk and sidewalks by the bridge are crowded with hundreds of small figures in modern casual wear. Some are jogging, some are taking photos with smartphones, some are queuing at street food stalls (hot dog stands), and some are walking dogs. The whole scene is rich in detail, slightly chaotic, and presented in soft retro earth tones.`
    },
    {
      id:'p27',
      title:'Example 27: Movie Storyboard Creation',
      desc:'Use a widescreen panel to create a movie storyboard for the first page of "1984".',
      tags:["curated", "storyboard"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Use a widescreen panel to create a movie storyboard for the first page of "1984".`
    },
    {
      id:'p28',
      title:'Example 28: Blackboard Chalk Drawing',
      desc:'Need to upload a reference image',
      tags:["curated", "illustration"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Draw this illustration with colored chalk on a blackboard, the blackboard is shot from an angle, the scene is from a Japanese classroom, the blackboard is placed against the wall, the teacher's desk is in front, and "Tiger is coming!" is written in chalk next to the illustration.`
    },
    {
      id:'p29',
      title:'Example 29: Miniature Self-Portrait',
      desc:'Need to upload a reference image',
      tags:["curated", "film", "miniature", "portrait"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a portrait depicting the person as an artist painting a miniature figure. The person is dressed in their most iconic outfit, looking confidently directly at the camera, holding a small paintbrush in one hand. A mini version of themselves is prominently placed on a clean workbench in front of them—make the figure slightly larger to be more visible than actual scale, thus standing out more. The figure is also wearing the same iconic outfit and striking an iconic pose. The painting supplies on the workbench are minimal to avoid clutter—only two or three small bottles of paint and a spare brush, keeping the focus on the person and the figure. Soft neutral white background, professional studio lighting, shallow depth of field. The composition highlights the person's facial expression looking at the camera and the figure they are painting. The style is clean and crisp, pursuing photorealistic effects, and details of both the person and the figure need to be highly restored.`
    },
    {
      id:'p30',
      title:'Example 30: Generate Biography from Wikipedia',
      desc:'Need to upload wikipedia link',
      tags:["curated"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create an infographic about this person's life based on this article [Wikipedia Page].`
    },
    {
      id:'p31',
      title:'Example 31: Stylized Map',
      desc:'Need to upload a google map image',
      tags:["cartography", "curated", "map"],
      category:'Nano Banana Pro Examples',
      source:'PicoTrex/banana-images',
      prompt:`Please show me a Las Vegas casino style aerial view.`
    },
    {
      id:'p32',
      title:'Case 1: Illustration to Figure',
      desc:'Need to upload a reference image as the object for generating the figure',
      tags:["curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`turn this photo into a character figure. Behind it, place a box with the character's image printed on it, and a computer showing the Blender modeling process on its screen. In front of the box, add a round plastic base with the character figure standing on it. set the scene indoors if possible`
    },
    {
      id:'p33',
      title:'Case 2: Generate Ground View from Map Arrow',
      desc:'Need to upload a Google Maps image containing a red arrow',
      tags:["cartography", "curated", "map"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`draw what the red arrow sees 
/ 
draw the real world view from the red circle in the direction of the arrow.`
    },
    {
      id:'p34',
      title:'Case 3: Real World AR Information',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`you are a location-based AR experience generator. highlight [point of interest] in this image and annotate relevant information about it.`
    },
    {
      id:'p35',
      title:'Case 4: Extract 3D Buildings/Make Isometric Models',
      desc:'Need to upload an image containing the corresponding object',
      tags:["3d", "curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Make Image Daytime and Isometric [Building Only]`
    },
    {
      id:'p36',
      title:'Case 5: Photos of Yourself in Different Eras',
      desc:'Need to upload a photo of a person',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Change the characer's style to [1970]'s classical [male] style

Add [long curly] hair, 
[long mustache], 
change the background to the iconic [californian summer landscape]

Don't change the character's face`
    },
    {
      id:'p37',
      title:'Case 6: Multi-Reference Image Generation',
      desc:'Need to upload multiple reference images',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A model is posing and leaning against a pink bmw. She is wearing the following items, the scene is against a light grey background. The green alien is a keychain and it's attached to the pink handbag. The model also has a pink parrot on her shoulder. There is a pug sitting next to her wearing a pink collar and gold headphones.`
    },
    {
      id:'p38',
      title:'Case 7: Automatic Photo Editing',
      desc:'Need to upload an image that needs correction',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`This photo is very boring and plain. Enhance it! Increase the contrast, boost the colors, and improve the lighting to make it richer,You can crop and delete details that affect the composition.`
    },
    {
      id:'p39',
      title:'Case 8: Hand Drawing Controls Multi-Character Poses',
      desc:'Need to upload character images and hand-drawn sketches',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Have these two characters fight using the pose from Figure 3. Add appropriate visual backgrounds and scene interactions,Generated image ratio is 16:9`
    },
    {
      id:'p40',
      title:'Case 9: Cross-View Image Generation',
      desc:'Need to upload a photo taken from the ground',
      tags:["curated", "experimental"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Convert the photo to a top-down view and mark the location of the photographer.`
    },
    {
      id:'p41',
      title:'Case 10: Custom Character Stickers',
      desc:'Need to upload a sticker reference image and a character image',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Help me turn the character into a white outline sticker similar to Figure 2. The character needs to be transformed into a web illustration style, and add a playful white outline short phrase describing Figure 1.`
    },
    {
      id:'p42',
      title:'Case 11: Anime to Real Coser',
      desc:'Need to upload an illustration image',
      tags:["anime", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate a photo of a girl cosplaying this illustration, with the background set at Comiket`
    },
    {
      id:'p43',
      title:'Case 12: Generate Character Design',
      desc:'Need to upload a character reference image',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate character design for me (Character Design)

Proportion design (different height comparisons, head-to-body ratio, etc.)

Three views (front, side, back)

Expression design (Expression Sheet) → like the image you sent

Pose design (Pose Sheet) → various common poses

Costume design (Costume Design)`
    },
    {
      id:'p44',
      title:'Case 13: Color Line Art with Color Palette',
      desc:'Need to upload a line art image and a color palette image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Accurately use the color palette from Figure 2 to color the character in Figure 1`
    },
    {
      id:'p45',
      title:'Case 14: Article Infographic (by @Huang Jian)',
      desc:'Need to upload a blog/article',
      tags:["curated", "education", "infographic"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate an infographic for the article content
Requirements:
1. Translate the content into English and extract key information from the article
2. Keep the content in the image concise, only retaining the main title
3. Use English text in the image
4. Add rich and cute cartoon characters and elements`
    },
    {
      id:'p46',
      title:'Case 15: Change Multiple Hairstyles',
      desc:'Need to upload a portrait image that needs hairstyle changes',
      tags:["curated", "film", "portrait"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate avatars of this person with different hairstyles in a 3x3 grid format`
    },
    {
      id:'p47',
      title:'Case 16: Model Annotation Explanation Diagram',
      desc:'> [!CAUTION] > There are a considerable number of errors in the annotation results ⚠️. Please note that the Nano-Banana annotations are not entirely accurate, and you should carefully verify the corre',
      tags:["curated", "diagram", "technical"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Draw [3D human organ model display example heart] for academic presentation, with annotations and explanations, suitable for showcasing its principles and [each organ's] functions, very realistic, highly detailed, with extremely fine design.`
    },
    {
      id:'p48',
      title:'Case 17: Custom Marble Sculpture',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A photorealistic image of an ultra-detailed sculpture of the subject in image made of shining marble. The sculpture should display smooth and reflective marble surface, emphasizing its luster and artistic craftsmanship. The design is elegant, highlighting the beauty and depth of marble. The lighting in the image should enhance the sculpture's contours and textures, creating a visually stunning and mesmerizing effect`
    },
    {
      id:'p49',
      title:'Case 18: Cook Based on Ingredients',
      desc:'Need to upload a photo with various ingredients',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`make me a delicious lunch with these ingredients, and put it on a plate , zoomed in view of the plate, remove the other plates and ingredients.`
    },
    {
      id:'p50',
      title:'Case 19: Math Problem Reasoning (by @Gorden Sun)',
      desc:'Need to upload a math problem',
      tags:["curated", "education"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Write the answer to the problem in the corresponding position based on the question`
    },
    {
      id:'p51',
      title:'Case 20: Old Photo Colorization',
      desc:'Need to upload an old photo that needs restoration',
      tags:["curated", "photo", "restoration", "vintage"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`restore and colorize this photo.`
    },
    {
      id:'p52',
      title:'Case 21: OOTD Outfit',
      desc:'Need to upload a person image and clothing image',
      tags:["curated", "fashion"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Choose the person in Image 1 and dress them in all the clothing and accessories from Image 2. Shoot a series of realistic OOTD-style photos outdoors, using natural lighting, a stylish street style, and clear full-body shots. Keep the person's identity and pose from Image 1, but show the complete outfit and accessories from Image 2 in a cohesive, stylish way.`
    },
    {
      id:'p53',
      title:'Case 22: Character Clothing Change',
      desc:'Need to upload person image and clothing image',
      tags:["character", "curated", "fashion", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Replace the person's clothing in the input image with the target clothing shown in the reference image. Keep the person's pose, facial expression, background, and overall realism unchanged. Make the new outfit look natural, well-fitted, and consistent with lighting and shadows. Do not alter the person's identity or the environment — only change the clothes.`
    },
    {
      id:'p54',
      title:'Case 23: Multi-View Result Generation',
      desc:'Need to upload reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate the Front, Rear, Left, Right, Top, Bottom views on white. Evenly spaced. Consistent subject. Isometric Perspective Equivalence.`
    },
    {
      id:'p55',
      title:'Case 24: Movie Storyboard',
      desc:'Need to upload reference image',
      tags:["curated", "storyboard"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create an addictively intriguing 12 part story with 12 images with these two characters in a classic black and white film noir detective story. Make it about missing treasure that they get clues for throughout and then finally discover. The story is thrilling throughout with emotional highs and lows and ending on a great twist and high note. Do not include any words or text on the images but tell the story purely through the imagery itself.`
    },
    {
      id:'p56',
      title:'Case 25: Character Pose Modification',
      desc:'Need to upload reference image',
      tags:["animal", "character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Have the person in the picture look straight ahead`
    },
    {
      id:'p57',
      title:'Case 26: Generate image from line drawing',
      desc:'Need to upload line drawings and reference images',
      tags:["curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Change the pose of the person in Figure 1 to that of Figure 2, and shoot in a professional studio`
    },
    {
      id:'p58',
      title:'Case 27: Add Watermark to Image',
      desc:'Need to upload a reference image',
      tags:["commercial", "curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Watermark the word ‘TRUMP’ over and over again across the whole image.`
    },
    {
      id:'p59',
      title:'Case 28: Knowledge Reasoning Image Generation',
      desc:'Make me an infographic of 5 tallest buildings in the world / Make a colorful infographic of the sweetest things on Earth',
      tags:["curated", "education", "infographic"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Make me an infographic of 5 tallest buildings in the world / Make a colorful infographic of the sweetest things on Earth`
    },
    {
      id:'p60',
      title:'Case 29: Red Pen Annotations',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Analyze this image. Use red pen to denote where you can improve.`
    },
    {
      id:'p61',
      title:'Case 30: Explosive Food',
      desc:'Need to upload a reference image',
      tags:["curated", "food"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Photograph this product in a dramatic modern scene accompanied by explosive outward dynamic arrangement of the key ingredients fresh and raw flying around the product signifying its freshness and nutritional value. promo ad shot, without text, product is emphasized, with the key brand colors as background.`
    },
    {
      id:'p62',
      title:'Case 31: Create Comic Book',
      desc:'Need to upload a reference image',
      tags:["comic", "curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Based on the uploaded image, make a comic book strip, add text, write a compelling story. I want a superhero comic book.`
    },
    {
      id:'p63',
      title:'Case 32: Action Figure',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`make an action figure of me that says [“AI Evangelist - Kris”] and features [coffee, turtle, laptop, phone and headphones]`
    },
    {
      id:'p64',
      title:'Case 33: Map to Isometric Buildings',
      desc:'Need to upload a map reference image',
      tags:["cartography", "curated", "map"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Take this location and make the landmark an isometric image (building only), in the stvle of the game Theme Park`
    },
    {
      id:'p65',
      title:'Case 34: Reference Image Controls Character Expression',
      desc:'Need to upload a character reference image and an expression reference image',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Character reference from Image 1 / Change to the expression from Image 2`
    },
    {
      id:'p66',
      title:'Case 35: Illustration Drawing Process Four-Panel',
      desc:'Need to upload a character reference image',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate a four-panel drawing process for the character: Step 1: Line art, Step 2: Flat colors, Step 3: Add shadows, Step 4: Refine and complete. No text.`
    },
    {
      id:'p67',
      title:'Case 36: Virtual Makeup Try-On',
      desc:'Need to upload a character reference image and a makeup reference image',
      tags:["beauty", "character", "curated", "illustration", "makeup"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Apply the makeup from Image 2 to the character in Image 1, while maintaining the pose from Image 1.`
    },
    {
      id:'p68',
      title:'Case 37: Makeup Analysis',
      desc:'Need to upload a character reference image',
      tags:["beauty", "character", "curated", "illustration", "makeup"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Analyze this image. Use a red pen to mark areas that can be improved
Analyze this image. Use a red pen to denote where you can improve`
    },
    {
      id:'p69',
      title:'Case 38: Google Maps View of Middle-earth',
      desc:'Dashcam Google Street View shot | [Hobbiton Street] | [hobbits carrying out daily tasks like gardening and smoking pipes] | [Sunny weather]',
      tags:["cartography", "curated", "map"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Dashcam Google Street View shot | [Hobbiton Street] | [hobbits carrying out daily tasks like gardening and smoking pipes] | [Sunny weather]`
    },
    {
      id:'p70',
      title:'Case 39: Typographic Illustration Generation',
      desc:'Create a minimalist black-and-white typographic illustration of the scene riding a bicycle using only the letters in the phrase [\'riding a bicycle\'] . Each letter should be creatively shaped or posi',
      tags:["curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a minimalist black-and-white typographic illustration of the scene riding a bicycle using only the letters in the phrase ['riding a bicycle'] . Each letter should be creatively shaped or positioned to form the rider, the bicycle, and a sense of motion. The design should be clean, ultra-minimalist, and entirely composed of the modified ['riding a bicycle'] letters without adding any extra shapes or lines. The letters should flow or curve to mimic the natural form of the scene, while still remaining legible.`
    },
    {
      id:'p71',
      title:'Case 40: Multiple Character Poses Generation',
      desc:'Need to upload a character reference image',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Please create a pose sheet for this illustration, making various poses!`
    },
    {
      id:'p72',
      title:'Case 41: Product Packaging Generation',
      desc:'Need to upload a product reference image and a packaging reference image',
      tags:["curated", "packaging", "product"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Apply the design from Image 1 to the can in Image 2, and place it in a minimalist design setting, professional photography`
    },
    {
      id:'p73',
      title:'Case 42: Overlay Filter/Material',
      desc:'Need to upload a reference image and a filter/material reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Overlay the [glass] effect from Image 2 onto the photo in Image 1`
    },
    {
      id:'p74',
      title:'Case 43: Control Character Face Shape',
      desc:'Need to upload a reference image and a face shape reference image',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Design the character from Image 1 as a chibi version according to the face shape from Image 2`
    },
    {
      id:'p75',
      title:'Case 44: Lighting Control',
      desc:'Need to upload a reference image and a lighting reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Change the character from Image 1 to the lighting from Image 2, with dark areas as shadows`
    },
    {
      id:'p76',
      title:'Case 45: LEGO Minifigure',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Transform the person in the photo into a LEGO minifigure packaging box style, presented in isometric perspective. Label the box with the title "ZHOGUE". Inside the box, display the LEGO minifigure based on the person in the photo, along with their essential items (such as makeup, bags, or other items) as LEGO accessories. Beside the box, also display the actual LEGO minifigure itself, unpackaged, rendered in a realistic and vivid style.`
    },
    {
      id:'p77',
      title:'Case 46: Gundam Model Figure',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Transform the person in the photo into a Gundam model kit packaging box style, presented in isometric perspective. Label the box with the title "ZHOGUE". Inside the box, display a Gundam-style mechanical version of the person from the photo, along with their essentials (such as makeup, bags, or other items) redesigned as futuristic mechanical accessories. The packaging should resemble real Gunpla boxes, including technical illustrations, instruction manual-style details, and sci-fi fonts. Beside the box, also display the actual Gundam-style mechanical figure itself, outside the packaging, rendered in a realistic and lifelike style, similar to official Bandai promotional renders.`
    },
    {
      id:'p78',
      title:'Case 47: Hardware Exploded View',
      desc:'Exploded view of a DSLR showing all its accessories and internal components such as lens, filter,  internal components, lens, sensor, screws, buttons, viewfinder, housing, and circuit board. Maintain ',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Exploded view of a DSLR showing all its accessories and internal components such as lens, filter,  internal components, lens, sensor, screws, buttons, viewfinder, housing, and circuit board. Maintain red accents of the DSLR`
    },
    {
      id:'p79',
      title:'Case 48: Food Calorie Annotation',
      desc:'Need to upload a food reference image',
      tags:["curated", "education", "food"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`annotate this meal with names of food and calorie density and approximate calories`
    },
    {
      id:'p80',
      title:'Case 49: Extract Subject and Place on Transparent Layer',
      desc:'Need to upload a reference image',
      tags:["3d", "curated", "product"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`extract the [samurai] and put transparent background`
    },
    {
      id:'p81',
      title:'Case 50: Image Outpainting Repair',
      desc:'Need to upload an image containing transparent checkerboard areas',
      tags:["3d", "curated", "product"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Repair the checkerboard (transparent) parts of the image and restore a complete, coherent photo.`
    },
    {
      id:'p82',
      title:'Case 51: Ancient Map → Historical Scene Photo',
      desc:'Need to upload a historical reference image',
      tags:["cartography", "curated", "map"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`full colour photograph. New Amsterdam in 1660. make sure it's full modern colors as if it's a photograph taken today.`
    },
    {
      id:'p83',
      title:'Case 52: Fashion Moodboard Collage',
      desc:'Need to upload a reference image',
      tags:["collage", "curated", "editorial", "fashion", "mood"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A fashion mood board collage. Surround a portrait with cutouts of the individual items the model is wearing. Add handwritten notes and sketches in a playful, marker-style font, and include the brand name and source of each item in English. The overall aesthetic should be creative and cute.`
    },
    {
      id:'p84',
      title:'Case 53: Delicate Cute Product Photo',
      desc:'A high-resolution advertising photograph of a realistic, miniature [PRODUCT] held delicately between a person\'s thumb and index finger.  clean and white background, studio lighting, soft shadows. The',
      tags:["animal", "curated", "product"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A high-resolution advertising photograph of a realistic, miniature [PRODUCT] held delicately between a person's thumb and index finger.  clean and white background, studio lighting, soft shadows. The hand is well-groomed, natural skin tone, and positioned to highlight the product’s shape and details. The product appears extremely small but hyper-detailed and brand-accurate, centered in the frame with a shallow depth of field. Emulates luxury product photography and minimalist commercial style.`
    },
    {
      id:'p85',
      title:'Case 54: Place Anime Statue in Real Life',
      desc:'Need to upload a reference image',
      tags:["anime", "curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A realistic photographic work. A gigantic statue of this person has been placed in a square in the center of Tokyo, with people looking up at it.`
    },
    {
      id:'p86',
      title:'Case 55: Create an Itasha Car',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a professional photograph of a sporty car with anime-style character artwork as itasha (painted car) design, shot at a famous tourist destination or scenic landmark. The car features large, prominently displayed anime character illustrations with simple, clean design composition. The character artwork should be painted in vibrant anime art style with bold colors and clear details. Position the vehicle at a recognizable tourist spot or scenic location with good natural lighting that showcases both the car's sporty appearance and the character artwork. Use professional automotive photography techniques with proper depth of field to highlight the itasha design while incorporating the scenic background for tourism appeal, suitable for promotional or enthusiast marketing materials.`
    },
    {
      id:'p87',
      title:'Case 57: Manga Style Conversion',
      desc:'Need to upload a reference image',
      tags:["comic", "curated", "manga"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Convert the input photo into a black-and-white manga-style line drawing.`
    },
    {
      id:'p88',
      title:'Case 58: Isometric Holographic Wireframe',
      desc:'Need to upload a line-art reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Based on the uploaded image, convert it into a holographic depiction using wireframe lines only.`
    },
    {
      id:'p89',
      title:'Case 59: Minecraft-Style Scene Generation',
      desc:'Need to upload a Google Maps reference image',
      tags:["cartography", "curated", "game", "map", "voxel"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Using this location, create an isometric HD-2D Minecraft-style image of the landmark (buildings only).`
    },
    {
      id:'p90',
      title:'Case 60: Apply Material Sphere to Logo',
      desc:'Need to upload a reference image and a material-sphere image',
      tags:["branding", "curated", "logo"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Apply the material from Image 2 to the logo in Image 1, present it as a 3D object, render in a C4D-like style, with a solid-color background.`
    },
    {
      id:'p91',
      title:'Case 61: Floor Plan 3D Render',
      desc:'Need to upload a floor-plan reference image',
      tags:["3d", "architecture", "curated", "interior"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Convert this residential floor plan into an isometric, photo-realistic 3D rendering of the house.`
    },
    {
      id:'p92',
      title:'Case 62: Reset Camera Parameters',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`RAW-ISO [100] - [F2.8-1/200 24mm] settings`
    },
    {
      id:'p93',
      title:'Case 63: Create an ID Photo',
      desc:'Need to upload a portrait reference image',
      tags:["curated", "film", "portrait", "professional"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Crop the head and create a 2-inch ID photo with:
  1. Blue background
  2. Professional business attire
  3. Frontal face
  4. Slight smile`
    },
    {
      id:'p94',
      title:'Case 64: Scene A6 Folding Card',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Draw an A6 folding card: when opened, it reveals a complete 3D spherical tiny house with a miniature paper garden and a bonsai tree inside.`
    },
    {
      id:'p95',
      title:'Case 65: Design a Chess Set',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Draw a chessboard and a set of 3D-printable chess pieces inspired by this image.`
    },
    {
      id:'p96',
      title:'Case 66: Split-Contrast Style Photo',
      desc:'A photo of a bedroom split down the middle: the left side is 2018 and the right side is 1964, in the same room.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A photo of a bedroom split down the middle: the left side is 2018 and the right side is 1964, in the same room.`
    },
    {
      id:'p97',
      title:'Case 67: Jewelry Collection Design',
      desc:'Need to upload a reference image',
      tags:["curated", "fashion"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Transform this image into a 5-piece jewelry collection.`
    },
    {
      id:'p98',
      title:'Case 68: Merchandise Design',
      desc:'Need to upload a reference image',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create merchandise using this character image.`
    },
    {
      id:'p99',
      title:'Example 69: Model Holographic Projection',
      desc:'Ultra-realistic product photo.',
      tags:["architecture", "city", "curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Ultra-realistic product photo.  
Subject: virtual holographic character [CHARACTER], floating above a circular hologram projector Ø120 mm placed on a modern desk.  

Projection source rules:  
- If input reference is a 3D object → show a desktop 3D scanner beside the projector.  
  Place the reference object on the scanner plate.  
  The hologram above the projector is generated from this scanned object.  
- If input reference is a 2D image → show a modern PC with monitor on the desk.  
  Display the reference image on the monitor screen.  
  The hologram above the projector is generated from this screen content.  

Hologram rendering rules:  
- Character always appears as a semi-transparent volumetric image, background faintly visible through.  
- No beams, no particles, no solid statue surfaces.  
- Balanced anatomy (1/7–1/8 head-to-body ratio), correct proportions.  
- Natural pose with clear silhouette.  
- Hair, outfit folds, and accessories visible but translucent.  
- Face crisp and expressive, readable at 1000 px crop.  
- No copyrighted characters, no branded designs, no IP logos.  

Environment: modern desk with projector base + conditional device (scanner or monitor).  
Camera: 85–100 mm lens, 3/4 hero angle, eye-level, f/11–f/16, ISO100, tripod.  
Lighting: desk softly illuminated; holographic figure defined only by volumetric light.  
Background: seamless black studio with subtle reflections.  

Output: 4:5, 2048×2560.  

Negative: text-free, watermark-free, logo-free, brand-free, copyrighted characters, franchise IP, trademarked designs, resin, PVC, physical statue, opaque surfaces, toy gloss, beams, scanlines, dots, distortion, extra digits.  
Sampling: deterministic, seed=12345, temperature=0.`
    },
    {
      id:'p100',
      title:'Example 70: Giant Figure Scaffolding',
      desc:'A reference photo of a person must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A hyper-realistic 3D render of the person in the image standing and taking a selfie. 
The giant figure is surrounded by massive scaffolding, with many tiny construction workers working on it. 
The scene is set in a city square, surrounded by modern buildings, moving vehicles (cars, buses), pedestrians, 
and a bright clear blue sky. The overall details are rich, presenting a photo-realistic texture with cinematic lighting effects.`
    },
    {
      id:'p101',
      title:'Example 71: Building Extraction from Remote Sensing Image',
      desc:'A remote sensing image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Remove everything in the image except the buildings.`
    },
    {
      id:'p102',
      title:'Example 72: Component Extraction',
      desc:'An image of a model must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Cut out each component and create a model sheet that retains the hologram.`
    },
    {
      id:'p103',
      title:'Example 73: Remove Burger Ingredients (by @bind_lux, case provided by @jeanlucas',
      desc:'An image of a burger must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Remove all the ingredients from the burger and keep only the top and bottom buns. Leave a gap between them, keeping the same spacing as if the fillings were still inside.`
    },
    {
      id:'p104',
      title:'Example 74: High-Resolution Image Restoration',
      desc:'A reference image must be uploaded.',
      tags:["curated", "photo", "restoration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Enhance the resolution of this old image and add the appropriate texture details, reinterpreting it with modern anime techniques.`
    },
    {
      id:'p105',
      title:'Example 75: Generate Miniature Scene from Image',
      desc:'A reference image must be uploaded.',
      tags:["curated", "miniature"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Convert the image to isometric view`
    },
    {
      id:'p106',
      title:'Example 76: Educational Comic',
      desc:'Help me generate multiple 16:9 doodle-style images to explain the concept of "futures" to middle school students. The images should have a consistent colorful, thick-pencil hand-drawn style, be rich i',
      tags:["animal", "comic", "curated", "education"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Help me generate multiple 16:9 doodle-style images to explain the concept of "futures" to middle school students. The images should have a consistent colorful, thick-pencil hand-drawn style, be rich in information, feature English text, use solid color backgrounds, have outlines around the cards, and include uniform titles, similar to a PowerPoint presentation.`
    },
    {
      id:'p107',
      title:'Example 77: Custom Character Emoji Pack Generation',
      desc:'A reference image must be uploaded.',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Using the character from Image 2, generate [x] emoji stickers based on various poses from Image 1.`
    },
    {
      id:'p108',
      title:'Example 78: Restore Partially Eaten Food',
      desc:'A reference image must be uploaded.',
      tags:["curated", "food"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Restore this half-eaten [XX] back to its original uneaten state.`
    },
    {
      id:'p109',
      title:'Example 79: Fighting Game Interface Creation',
      desc:'A reference image must be uploaded.',
      tags:["curated", "game"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a mid motion actionscene where both subject are in focuswith aThree-Quarter Angle in martial artsfighting stances. They are in the samecinematic scene. Remove the line downthe centre with a blurred crumbling ruins ina purple alien world in the background. Thescene is shot at sunrise. Modern Fightinggame health bars MORDON V'S DEATHSEED. power move. Hud style screeneffects.Add a thumbnail of each characterto the health bars. ense flares!`
    },
    {
      id:'p110',
      title:'Example 80: Model Cross-Section',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a cutaway visualization of this car, show exterior intact on one side, and interior engine + seats exposed on the other side. Keep proportions accurate and details realistic.`
    },
    {
      id:'p111',
      title:'Example 81: Pirate Wanted Poster',
      desc:'A reference image must be uploaded.',
      tags:["curated", "poster", "typography"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Using the original image, recreate a pirate's wanted poster drawn on parchment.
Brown monochrome, with the texture of aged parchment.
Retain the style and character design of the original image down to the smallest detail, and paste it large at the top of the wanted poster.
A close-up of the face. Have the character wear a pirate hat.
Write the bounty amount at the bottom of the poster. The bounty amount will be random, and a fictitious currency unit will be used.
Below the bounty amount, write the crime in small letters. Use a fictitious language. English or Chinese characters may not be used.`
    },
    {
      id:'p112',
      title:'Example 82: Merchandise Display Shelf',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Remove the background from this illustration and turn it into merchandise like figurines.
Image: Photorealistic
Location:
The shelves of a fictional convenience store that doesn't exist in Japan. The cute, pop atmosphere is complemented by neatly arranged merchandise featuring the illustration. The store's interior is dreamily bright and special, creating a special space that excites fans.

Characters:
These merchandise are displayed on the shelves.

Merchandise Lineup:
Two large, approximately 50cm-long figures in the center of the screen (for a striking display)
Acrylic stands (deformed versions of the original artwork)

Chibi figures (deformed versions of the original artwork)

Dakimakura pillows (large prints for a striking presence)

Jigsaw puzzles (visual art of the characters)

Stationery (notebooks, pens, clear files, etc., deformed versions of the original artwork)

Cardboards (deformed versions of the original artwork)

Plush toys (deformed versions of the original artwork)

Display:
The merchandise are neatly arranged on the shelves, maintaining the atmosphere of a convenience store while still filling the space with love for the characters. They're arranged in a way that teenage female fans can't help but want to pick them up.

Overall tone:
A dreamlike merchandise sales space. Cuteness and pop are at the forefront, and despite being a convenience store, it's presented as a "holy land for fan activities."
Resolution: 4K, 4000px: 3000px`
    },
    {
      id:'p113',
      title:'Example 83: Comic Convention Booth',
      desc:'A reference image must be uploaded.',
      tags:["comic", "curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Erase the background and replace the characters with the following:

Cosplayers and Character Goods

Character/Motif:
Character goods based on the illustration

Hairstyle, Eyes, and Appearance:
(Focus on merchandise, not the character itself.)

Main Character: A cosplayer is holding a figurine in the center of the screen.

Location:
Comic Market (a doujinshi sales event).
A spacious booth is filled with merchandise lined up on tables and shelves. The atmosphere is filled with excitement and anticipation.

Merchandise Lineup:
• A large, approximately 100cm figure is displayed in the center of the booth, creating an eye-catching display.
• The character is displayed on an 80-inch LCD panel.
• Acrylic Stands
• Chibi Figures (Deformed)
• Body Pillows (Large, Full-Length Character Print)
• Jigsaw Puzzles (Using Character Artwork)
• Stationery (Notebooks, Pens, Clear Files, etc.)
• Desk Pads
• Plush Toys (Deformed)
Exhibition/Display:
• Goods neatly arranged throughout the booth, creating a unified look.
• Utilizing desks and shelves reminiscent of doujinshi sales events, the layout encourages fans to pick up items.
• With the energy of the visitors as a backdrop, the venue is presented as a special "fan sanctuary."
Overall Tone:
A dreamlike sales space.
While emphasizing cuteness and pop, the space evokes the unique enthusiasm of doujin events and the feeling of a "sanctuary for fan activities."
Swarms of people.

Image Quality:
Photorealistic, 4K (4000px x 3000px)`
    },
    {
      id:'p114',
      title:'Example 84: Line Art to Doodle Drawing',
      desc:'A reference image must be uploaded.',
      tags:["curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Make the uploaded picture book look as if it was drawn by a five-year-old child.`
    },
    {
      id:'p115',
      title:'Example 85: Contemporary Art Exhibition Space',
      desc:'A reference image must be uploaded.',
      tags:["architecture", "city", "curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`An avant-garde contemporary art exhibition space themed around the reference image.
The entire exhibition hall (20.0 m x 20.0 m x 8.0 m) integrates architecture, lighting, flooring, walls, 
and ceiling into the artistic expression.

At the far end of the hall stands a massive wall 20 meters wide and 8 meters high. 
In the center of this wall, the theme from the reference image is presented in a monumental artistic form. 
The image is vivid and three-dimensional, rising toward the viewer, becoming the focal point of the entire space.

A system-generated exhibition title plaque is installed below the central wall. 
The title must be abstract, symbolic, and poetic, and must reflect a contemporary artwork. 
No price display is provided.

The floor is polished granite with a reflectance of 0.35–0.40. 
Patterns and light derived from the reference image cascade across the surface of the work, 
resonating with the entire space as if responding to the footsteps of visitors. 
Tactile paving bricks are in a similar color, seamlessly integrated, but only 5 mm high, providing a clear texture. 
The work extends in a straight line from the entrance to the wall, creating a pause point before the artwork. 
After viewing, visitors are naturally guided to an opening on the right side (3 m wide x 3 m high). 
In emergencies, floor-level emergency lighting ensures illumination of 1 lux.

The left and right walls and the ceiling each reinterpret an abstract element from the reference image, 
transforming the entire space into a single artwork. 
The flow of color, form, and light unifies the experience into an artistic whole.

Visitor capacity is limited to 8–25 people. 
All visitors face the large wall, moving in a straight line and pausing at the designated point. 
No one looks back toward the entrance. 
Only one staff member is stationed near the right-side entrance beside the wall. 
All faces are blurred to ensure anonymity.

The composition is stable, with the central vanishing point always aligned with the center of the wall. 
Verticality is within ±0.5°. 
Floor reflections are precise, human figures appear natural. 
Hands always show five fingers, eyes are symmetrical within a 3% margin. 
Fabrics remain flat with no deformation.

Forbidden content: Elements unrelated to the reference image, missing or broken tactile paving, 
visitors facing the entrance, logos or watermarks, overcrowding, toy-like gloss, 2D flat projections, 
neon glow, teal-orange tones, oversaturation, perspective collapse, mismatched reflections, 
anatomical anomalies, extra limbs, distorted faces, excessive outlines, banding, or vignetting.

DoD: The entire venue will be a contemporary artwork centered on the theme of the reference image, 
with the innermost structure forming a unified experience. 
The tactile paving synchronizes perfectly with the flow of light, creating a clear pause point. 
Visitors are immersed in the space itself, and even in reproduction, SSIM will remain stable at 0.95 or above.`
    },
    {
      id:'p116',
      title:'Example 86: Dark Gothic Tarot Card',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate a dark gothic tarot card featuring me from this image. Include [“AI Artist - Shira”] and [coffee, white fluffy chubby cat with pink bow, laptop, phone, headphones] as symbols, with moody shadows, intricate gothic borders, and mystical dark fantasy vibes.`
    },
    {
      id:'p117',
      title:'Example 87: Black and White Evolution Chart',
      desc:'Generate an evolutionary progression chart in a minimalist black-and-white style,',
      tags:["curated", "restoration", "vintage"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate an evolutionary progression chart in a minimalist black-and-white style, 
showing the evolution from the earliest apes to humans and finally into a banana.`
    },
    {
      id:'p118',
      title:'Example 88: Glass Bottle Souvenir',
      desc:'A reference image must be uploaded.',
      tags:["3d", "curated", "product"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A 1/7 scale commercialized collectible figure of the character from the photo, crafted in a highly realistic style. The figure is placed in a detailed beach environment with sand, seashells, and gentle ocean waves. The entire toy display is enclosed inside a clear souvenir glass bottle, giving it a premium miniature diorama look, with realistic lighting and shadows`
    },
    {
      id:'p119',
      title:'Example 89: Miniature Store',
      desc:'Tiny diorama shop for [BRAND]. Roof made of oversized [PRODUCT], big [BRAND] logo sign above the window, vendor handing a [PRODUCT] to a customer, ground covered with many [PRODUCT]. Hand-made polymer',
      tags:["curated", "miniature"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Tiny diorama shop for [BRAND]. Roof made of oversized [PRODUCT], big [BRAND] logo sign above the window, vendor handing a [PRODUCT] to a customer, ground covered with many [PRODUCT]. Hand-made polymer-clay look, studio macro photo, soft light, shallow depth of field, vertical 3:4`
    },
    {
      id:'p120',
      title:'Example 90: Become a Vtuber',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a fictional Vtuber and their streaming screen using the original image.
The Vtuber's hairstyle and clothing will be faithfully reproduced from the original image.
The Vtuber image will be 2.5D-like, so it is not necessary to perfectly reproduce the style of the original image. A moderate sense of three-dimensionality is also necessary.
The Vtuber's facial expression and pose may be changed from the original image. Have the Vtuber hold a game controller.
Place only the Vtuber's upper body in the bottom right of the screen. Place the streaming screen of the game being played in the center of the screen. Place the chat screen on the left side of the screen.
The screen ratio is set to a larger size for the game screen, and the upper half of the Vtuber's body is displayed smaller.
The background of the original image is completely ignored, as well as the original image pose.
Add a fictional streaming platform and browser UI to the top and bottom of the screen.
The aspect ratio of the generated image is independent of that of the original image.`
    },
    {
      id:'p121',
      title:'Example 91: Train Station Movie Poster',
      desc:'A reference image must be uploaded.',
      tags:["curated", "poster", "typography"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a movie poster using the original image. The genre of the movie will be determined based on the atmosphere of the original image.
Regardless of whether the original image is anime or live-action, the style and character design of the original image will be maintained as perfectly as possible. However, poses and expressions may be changed to match the poster design. Other people and objects may also be added at this time.
The final generated image will be photorealistic. This does not apply to the poster design, as it will be based on the original image.
The scenery of the underground passage of a Japanese station where the poster is posted will be recreated in a realistic image. People passing through the underground passage will be added.
The reflection of the poster is angled to make it look more realistic.`
    },
    {
      id:'p122',
      title:'Example 92: Movie Lounge',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Illustration Processing:
The background is removed and the characters are turned into figurines and merchandise.
Theme / Overview:
A photorealistic movie theater lounge. A special event-themed space, set in a popcorn stand, is decorated with the world of the characters.

Location:
A spacious popcorn stand in a large movie theater.
There is a cash register, with a popcorn machine inside.
There is a drink stand with a salesperson behind the counter.
Above the register are countless posters of showing movies.

Characters / Production:
A character cosplayer is placed in the center of the screen.
Merchandise such as figurines and acrylic stands are displayed on shelves.
Giant stuffed animals and signboards are displayed realistically.
A movie photo booth is set up and decorated with character designs.

Places where characters are reflected:
Movie posters currently being screened.
Pop-up advertisements for the collaboration menu.
Drink cups and packaging.
Popcorn buckets.
Large LED LCD panel.

Design / Advertising:
Character illustrations are reflected on each poster in the lounge.
Vivid visuals of the collaboration food and drinks are displayed.
Animations and character footage are projected onto LED panels.

Camera Angle:
Composed from the front.
Emphasis on the entire popcorn stand.
A cosplayer is placed in the center, with merchandise and advertisements reflected around them.
A slightly lower angle captures the LED panels and posters impressively.

Quality / Atmosphere:
Photorealistic and detailed depiction.
An urban, realistic glossy feel, creating a cinema-like atmosphere with an event-like feel.
Resolution is 4K, aspect ratio is 4:3.`
    },
    {
      id:'p123',
      title:'Example 93: Slice Object with Cartoon Explosion Effect',
      desc:'cut cleanly THE [OBJECT] in half across the middle, the top and bottom halves slightly separated and floating apart.',
      tags:["cartoon", "curated", "frozen"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`cut cleanly THE [OBJECT] in half across the middle, the top and bottom halves slightly separated and floating apart.  
Between the halves, instead of the natural inside, there is a stylized cartoon nuclear explosion effect: a central vertical column of glowing yellow-orange bubble smoke, with a wide horizontal shockwave ring of round bubbly clouds spreading to the sides, fiery glowing highlights above and below the shockwave, creating the impression of intense heat and energy
The outside of the [OBJECT] remains photorealistic with detailed texture and lighting, while the inner effect is highly graphic and playful, giving a striking contrast between realism and cartoon. Studio lighting, centered composition`
    },
    {
      id:'p124',
      title:'Example 94: Character-Themed Train',
      desc:'A reference image must be uploaded.',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Illustration Processing:
The background is erased and characters are turned into figurines and merchandise.
Theme / Overview:
A photorealistic Tokyo train interior. The entire car is decorated with character advertisements and merchandise, creating a special space tailored for a collaboration event.
Characters / Production:
Several character cosplayers are standing in the foreground of the screen.
Life-size panels and life-size figures are displayed in the center and back of the train.
100cm character figures are on display.
Many character stuffed toys are lined up in empty seats.
Advertising / Display:
Character illustrations are reflected in advertisements on the straps.
Character illustrations are displayed on poster advertisements inside the train.
Character illustrations and animations are displayed on additional LED displays installed inside the train.
Illustration Processing:
The background is erased and characters are turned into figurines and merchandise.
Near-life-size figures, 100cm figures, deformed figures, and stuffed toys are realistically depicted.
Camera Angle:
A frontal composition emphasizes the bustling atmosphere inside the train.
A large shot of a cosplayer in the foreground, with figures, panels, and stuffed animals in the background.
A low angle captures the strap advertisements and LED displays impressively.
Quality / Atmosphere:
Photorealistic and detailed depiction.
An urban, realistic glossy feel.
Resolution is 4K, aspect ratio is 4:3.`
    },
    {
      id:'p125',
      title:'Example 95: Custom Theme Park',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generates a photorealistic theme park image based on the original image.
The theme park and the people enjoying it are depicted in an extremely photorealistic style. Daytime. Sunny.
The color scheme and design are extracted from the original image and applied to the color scheme and design of various facilities.
Vehicles and buildings based on the original image, mascot costumes that are a distorted version of the original image, and signs with the original image printed on them are placed within the image.
The mascot costume design should use the original image as a motif, but be moderately distorted to create a photorealistic look.
The sizes of the people and mascot costumes must not be unrealistic.
Even if the original image is anime-style, the final image must be a photorealistic theme park. Be sure to follow these rules.`
    },
    {
      id:'p126',
      title:'Example 96: Create Constellation Image',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create an image depicting fictional constellations using the original image as a reference.
- A photorealistic starry sky. This is maintained even if the original image is anime-style.
- People, animals, and objects extracted from the original image are placed transparently against the starry sky background. In this case, the extracted target should be a single motif that is the main theme. Also, only one image should be placed.
- The character design, style, and taste of the original image are faithfully reproduced. The background of the original image can be ignored.
- An imaginary constellation is created based on the placed motif. This constellation is made up of approximately 5 to 10 stars.
- The pose of the original image is analyzed, and the stars belonging to the constellation are appropriately positioned in distinctive parts.
- The stars belonging to the constellation are highlighted, and the stars are connected with glowing lines.`
    },
    {
      id:'p127',
      title:'Example 97: Turn Image into Phone Wallpaper',
      desc:'A reference image must be uploaded.',
      tags:["conceptual", "curated", "portrait"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Transform the image into an iPhone lock screen wallpaper effect. The phone’s time (01:16), date (Sunday, September 16), and status bar details (battery, signal, etc.) appear overlaid on the image, with flashlight and camera icons at the bottom. The original picture is adapted to fit the elongated smartphone screen composition. The phone is placed against a background in the same color scheme.`
    },
    {
      id:'p128',
      title:'Example 98: Make a Movie Poster',
      desc:'A reference image must be uploaded.',
      tags:["curated", "poster", "typography"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Analyze the uploaded photo and detect the subject, mood, and atmosphere.  
Automatically classify the photo into a suitable movie genre (romance, action, mystery, horror, etc.).  

Based on the detected genre and mood, generate all the following elements in English:  
- A cinematic movie title (impactful, authentic to the genre).  
- A short tagline or catchphrase (1–2 lines, dramatic or emotional).  
- A credit block at the bottom (with fake names for director, producer, music, etc., styled like real movie posters).  
- A release note such as “COMING SOON” or “In Theaters 2025.”  

Overlay these elements on the image in a movie-poster style layout:  
- Place the title prominently in the center or lower third.  
- Place the tagline above or below the title.  
- Add a credit block at the bottom in small text.  
- Add the release note at the bottom center.  

Finally, add the starring section at the bottom, always formatted as:  
“Starring: ”  

Typography should be bold, dramatic, and genre-appropriate.  
The final result must look like a genuine movie poster ready for theaters, with all elements harmonized to the photo’s mood.`
    },
    {
      id:'p129',
      title:'Example 99: Turn X Account into Floppy Disk',
      desc:'Upload a reference image of the X account.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Make my X account into a floppy disk in the 90s`
    },
    {
      id:'p130',
      title:'Example 100: Make Reference Image Object Transparent',
      desc:'A reference image must be uploaded.',
      tags:["3d", "curated", "product"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Make this object transparent.`
    },
    {
      id:'p131',
      title:'Example 101: Fisheye Peephole Illustration',
      desc:'A reference image must be uploaded.',
      tags:["curated", "experimental", "illustration", "photography"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`ultra-detailed anime illustration, fisheye lens peephole perspective, circular distorted view as if looking through a door peephole, warped wide-angle effect with curved edges, darkened vignette around the circular
frame, two people leaning their faces close to the peephole trying to peek through, both with mischievous playful smiles, exaggerated perspective distortion making their features appear larger and curved, faces
approaching the peephole lens, hallway or room interior bent by the lens effect, slightly blurry edges mimicking actual peephole optics, playful atmosphere, 8k resolution`
    },
    {
      id:'p132',
      title:'Example 102: Superhero Interior Design',
      desc:'A hyper-realistic, professional interior design photograph of a modern living room inspired by a [Superhero]. The room has clean lines, a neutral color palette of greys, blacks, and whites, with accen',
      tags:["architecture", "curated", "interior"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`A hyper-realistic, professional interior design photograph of a modern living room inspired by a [Superhero]. The room has clean lines, a neutral color palette of greys, blacks, and whites, with accents of [Theme Color]. A large, stylized 3D wall sculpture of the [Superhero] dominates the main wall. Subtle thematic details are placed throughout the room, such as framed art prints of blueprints, a floor lamp designed to resemble a specific motif (e.g., a shield or logo), and a side table with a few well-placed props (e.g., a stylized helmet). The furniture is contemporary and minimalist, with a large, comfortable sofa and a low coffee table. Dramatic, focused lighting highlights the main wall sculpture, while warm ambient light from windows and lamps creates an inviting atmosphere. The overall style is sophisticated and elegant, a subtle homage rather than an overt fan-tribute.`
    },
    {
      id:'p133',
      title:'Example 103: Custom Claw Machine',
      desc:'A reference image must be uploaded.',
      tags:["curated"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Generate an image showing this animal as a simplified and deformed as an anime-like plush toy (made of short-pile, soft-touch polyester knit fabric), with multiple units inside a UFO catcher machine. On either side are additional UFO Catcher machines containing multiple plush toys of different animals, distinct from the main image. The setting is a Japanese game center, with an overall very bright impression. Only the top section of the UFO catcher is painted in vibrant colors. The lower section is painted white. The background is a wall, and the area behind the UFO catcher is quite blurred.　The floor is carpeted. The shooting angle is from the front. Most importantly, absolutely no text or logos should appear in the output.`
    },
    {
      id:'p134',
      title:'Example 104: Typography Logo Design',
      desc:'Create a typographic illustration shaped like a {OBJECT}, where the text itself forms the shape — bold and playful lettering style that fills the entire silhouette — letters adapt fluidly to the curve',
      tags:["branding", "curated", "logo", "typography"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Create a typographic illustration shaped like a {OBJECT}, where the text itself forms the shape — bold and playful lettering style that fills the entire silhouette — letters adapt fluidly to the curves and contours of the object — vibrant and contrasting color palette that fits the theme — background is solid and enhances the focus on the main shape — vector-style, clean, high resolution, poster format, 1:1 aspect ratio.`
    },
    {
      id:'p135',
      title:'Example 105: RPG Character Status UI',
      desc:'A reference image must be uploaded.',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Use the character in the original image to create a character status screen for an RPG game.
Keep the character design and style from the original image, but change the costume to one from a fantasy RPG. Also, change the pose to suit the situation.
Display the character from the original image and the status screen side by side.
The status screen will list various parameters, skills, icons, etc.
The background should be a fantasy background that matches the style of the original image.
The status screen should be rich and stylish, like a game from 2025.`
    },
    {
      id:'p136',
      title:'Example 106: Convert Text Diagram to Pictograms',
      desc:'A reference image containing text must be uploaded.',
      tags:["curated", "diagram", "technical"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Convert this explanatory diagram into pictograms.`
    },
    {
      id:'p137',
      title:'Example 107: Drawing on a Pen Display',
      desc:'A reference image must be uploaded.',
      tags:["curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Photorealistic pen tablet screen. Realistic first-person hand holding the pen tablet and pen.
The original image is reproduced on the pen tablet in an unfinished state. The line art has been extracted from the original image. Portions of the line art have been colored with the same coloring as the original image. Unfinished coloring. Must not be monochrome. About 70% of the coloring is done.
Close-up. The pen tip is touching the tablet screen.`
    },
    {
      id:'p138',
      title:'Example 108: Create LINE Stamp Image',
      desc:'Upload a facial expression reference and a character reference image.',
      tags:["character", "curated", "illustration"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Character sheet, facial expressions, joy, anger, sadness, happiness`
    },
    {
      id:'p139',
      title:'Example 109: Therapy for Childhood Self',
      desc:'A reference portrait must be uploaded.',
      tags:["curated", "film", "portrait"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`Photorealistic minimalist therapy room; light walls, grey sofa, wooden coffee table with a tissue box, notebook and a glass of water, simple frame and floor lamp, soft natural daylight. The same person at two ages sits side-by-side: adult on the left speaking with open hands; child on the right listening with head slightly down. Both wear matching [OUTFIT] (same color & style). Clean studio vibe, centered composition, shallow depth of field, 50mm look, 4K, vertical 3:4. No extra people, no text, no watermark.`
    },
    {
      id:'p140',
      title:'Example 110: Pixar-Style Portrait',
      desc:'A character reference image must be uploaded.',
      tags:["character", "curated", "film", "illustration", "portrait"],
      category:'Nano Banana Examples',
      source:'PicoTrex/banana-images',
      prompt:`3D avatar of the young man in the image attached, smiling happily, clean white background, conceptual digital art in Pixar-style, high quality, soft lighting, smooth textures, vibrant colors, realistic proportions with a cartoon touch & studio render look.`
    },
    {
      id:'p141',
      title:'1.1. Name Meaning Portrait',
      desc:'Turn Your Name’s Meaning Into an Iconic Portrait',
      tags:["conceptual", "curated", "film", "portrait"],
      category:'1. Portraits & Identity',
      source:'aimikoda/prompts',
      prompt:`[NAME] = Your name
[SUBJECT] = The person shown in the uploaded reference image

Make a symbolic portrait reinterpretation for artistic editorial use, using a medium-close framing at eye level with a calm, centered composition, set within an abstract environment derived from the etymological and cultural meaning of [NAME], with [SUBJECT] placed as the sole figure in the midground, preserving the facial structure, facial proportions, expression, and overall likeness of [SUBJECT] exactly as in the reference image, allowing no alteration, stylization, or reinterpretation of the face under any circumstance, avoiding any reuse, reference, or derivation of clothing, accessories, or styling from the reference image, and instead designing a new outfit that supports the mood and symbolism of [NAME] without echoing the original wardrobe, translating the meaning of [NAME] into visual elements such as light behavior, color palette, atmosphere, natural forces, or metaphoric forms surrounding [SUBJECT], reflecting the name’s meaning through mood and symbolism rather than literal text, letters, or icons, using lighting direction, intensity, and color temperature to reinforce the emotional essence of [NAME], integrating symbolic elements so they feel physically and spatially connected to [SUBJECT] rather than decorative, keeping the background restrained and uncluttered with no readable text, and ensuring strong visual impact, coherence, and stylistic integrity throughout the composition.`
    },
    {
      id:'p142',
      title:'1.2. Fragmented Identity Prints',
      desc:'This prompt enforces a strict physical illusion: multiple instant-photo prints, one subject. You can use it with your own photos. Change the variables as you want and generate.',
      tags:["conceptual", "curated", "film", "portrait", "surreal"],
      category:'1. Portraits & Identity',
      source:'aimikoda/prompts',
      prompt:`[SUBJECT] = the person shown in the uploaded reference image (identity anchor only)
[FRAME_COUNT] = 4
[SCENE_BG] = neutral textured studio wall

DO:
  Create [FRAME_COUNT] instant-photo prints in a tight scattered-but-coherent cluster.
  Reconstruct one continuous [SUBJECT] across all prints as fragments of one newly imagined single photograph.
  Use the uploaded reference image only as an identity anchor for [SUBJECT]’s face.
  Avoid copying the reference pose, clothing, framing, background, or lighting.
  Keep all fragments from the same frozen moment with identical camera viewpoint, scale, perspective, distance, and lens behavior.
  Set background to [SCENE_BG], empty and non-narrative, with clean studio separation.

  Define every print as real photographic paper.
  Render each print with a flat, opaque white border.
  Keep the photographic image strictly inside the inner image rectangle of each print.

  Assign one print as the dominant face frame and make it the primary visual anchor.
  Maintain seamless anatomical continuity at neighboring fragment edges so the cluster reads as one body.
  Maintain one consistent soft studio light direction, softness, color temperature, and shadow density across every print.

  Include exactly two hands total, both belonging to [SUBJECT].
  Place [SUBJECT]'s left hand originating fully inside its own print image area, then crossing the inner image edge and gripping the dominant face print.
  Place [SUBJECT]'s right hand originating fully inside a different print image area, then crossing the inner image edge and gripping a different print.
  Enforce wrist rule for both hands: keep wrist joint inside its origin print image area; allow only fingers, palm, and distal forearm to exit.
  Make both grasps unambiguous, physically plausible, and visibly compressing or overlapping print edges.
  Confine all other [SUBJECT] pixels strictly inside print image areas with zero leakage outside.

STYLE: high-resolution photographic realism, full color, natural skin tones, unified wardrobe palette, controlled surreal illusion with physical plausibility
CAMERA: single fixed viewpoint, consistent perspective across all prints, no angle changes, no lens changes
MOOD: clean studio, subtly uncanny

RULES:
  There are exactly [FRAME_COUNT] prints total.
  Print borders are opaque paper only.
  Borders contain no image data, no translucency, no cutouts, and no depth.
  No [SUBJECT] texture, silhouette, shadow, relief, embossing, or deformation may appear inside borders.
  All [SUBJECT] content must exist either inside image areas or as allowed hand crossings.

AVOID: [SUBJECT] pixels outside image areas except distal hand or forearm, wrist outside image areas, face outside image areas, hair outside image areas, torso or legs or clothing outside image areas, elbows or upper arms outside image areas, extra hands, extra arms, duplicated limbs, independent-photo framing, editorial detail shots, watermarks, signatures, text`
    },
    {
      id:'p143',
      title:'1.3. Zipped Lips Portrait',
      desc:'Make a photorealistic studio head portrait of the person from the provided reference photo, used strictly as identity anchor, captured at eye level with natural facial perspective, framed as a clean s',
      tags:["conceptual", "curated", "film", "portrait"],
      category:'1. Portraits & Identity',
      source:'aimikoda/prompts',
      prompt:`Make a photorealistic studio head portrait of the person from the provided reference photo, used strictly as identity anchor, captured at eye level with natural facial perspective, framed as a clean studio photograph with only the head and upper shoulders visible, set against a professional studio background with soft neutral tones, showing the subject centered and facing forward with a calm direct gaze, with a single hand gently closing a metal zipper over the lips, ensuring the lips and zipper merge naturally and convincingly without distortion, rendered with realistic skin texture and fine detail, lit with soft controlled studio lighting to create an elegant, cinematic, and emotionally restrained image.`
    },
    {
      id:'p144',
      title:'1.4. Primal Archetype Portrait',
      desc:'Upload your picture and reveal its darker, ancient, or sacred forms.',
      tags:["curated", "editorial", "film", "portrait"],
      category:'1. Portraits & Identity',
      source:'aimikoda/prompts',
      prompt:`[SUBJECT] = use the uploaded reference image as the sole subject and identity anchor
[SHOT_TYPE] = head_portrait | bust_portrait | half_body | full_body
[UNIFIED_MOOD] = primal_dark | primal_sacred | primal_feral | primal_earthbound | refined_dark | refined_sacred | refined_mystic | refined_celestial | ascetic_ritual | shamanic_ancient | monolithic_icon | forgotten_deity
[COLOR_THEME] = obsidian_ash | bone_ochre | rust_clay | moss_stone | ivory_gold | charcoal_crimson | indigo_smoke | jade_sand | alabaster_silver | umber_shadow

Make a high-resolution portrait intended for artistic and editorial use.
Set the camera framing and crop strictly according to [SHOT_TYPE].
Use the uploaded reference image as the sole identity source.
Preserve facial identity and likeness so the subject is clearly recognizable as the same person.
Allow transformation only through paint, texture, adornment, lighting, and mood.
Use a neutral, unobtrusive background with subtle texture.
Render the subject as a symbolic, ceremonial figure shaped by [UNIFIED_MOOD].
Apply ritualistic markings, glyphs, and surface textures consistent with [UNIFIED_MOOD].
Maintain realistic human anatomy and natural proportions.
Use lighting and contrast to reinforce [UNIFIED_MOOD].
Apply [COLOR_THEME] consistently across the entire image.
Compose the frame so the subject remains the dominant focal presence.
Ensure the final image feels iconic, timeless, and cinematically powerful.
Avoid facial distortion, identity drift, modern fashion elements, sci-fi aesthetics, text overlays, watermarks.`
    },
    {
      id:'p145',
      title:'1.5. Anime Eyes Through Phone',
      desc:'Upload your photo or type the name of the celeb you want to use. Set the mood and you’re ready to go. You can even change the phone.',
      tags:["anime", "conceptual", "curated", "editorial", "film", "mood", "portrait"],
      category:'1. Portraits & Identity',
      source:'aimikoda/prompts',
      prompt:`You are a cinematic portrait composer that generates a single-frame photorealistic plus anime-hybrid image driven by contrast between reality and emotion.

VARIABLES
SUBJECT: person from provided reference image
DEVICE: iPhone 15
MOOD: sad | happy | angry | calm | mysterious | hopeful | cute | kawaii | dreamy | melancholic | confident | anxious

INSTRUCTIONS

1. Generate one high-resolution cinematic portrait image.

2. Use SUBJECT exactly as seen in the reference image.
   - Do not alter real facial features, proportions, skin texture, realism, or the original facial expression.
   - The real face expression must remain identical to the reference and must not be influenced by MOOD.

3. Frame a single real human centered in the composition.
   - Show head and upper torso only.
   - Render the real person fully realistic with natural skin detail and physically accurate lighting.

4. Phone interaction and positioning:
   - Subject extends one arm toward the camera holding DEVICE with a single hand.
   - Hold the phone in landscape orientation.
   - Preserve the original DEVICE screen aspect ratio.
   - Align the phone parallel to the camera lens.
   - Position the phone directly in front of the face.
   - The phone physically covers only the eye region.
   - All other facial regions remain visible and fully realistic.

5. Phone screen logic and masking:
   - Treat the phone screen as a transparent window revealing an alternate rendering of the same full-scale head.
   - The phone screen must display ONLY the anime-rendered eyes.
   - Do NOT render nose, mouth, cheeks, forehead, jaw, or any other facial features on the phone screen.
   - Any facial area outside the eye region must be absent, cropped out, or visually empty on the screen.
   - The anime eyes must align perfectly in position and scale with the real eyes behind the phone.
   - Set anime eye expression strictly according to MOOD.
   - Do not complete or imply the rest of the anime face on the screen.

6. Lighting:
   - Use the phone screen as the primary light source.
   - Adjust screen light intensity and color temperature according to MOOD.
   - Cast soft screen light onto the hand and the visible facial edges only.
   - Do not alter the real face expression or proportions through lighting.

7. Background:
   - Transform the background into a realistic environment that emotionally matches MOOD.
   - Use color palette, lighting, atmosphere, and depth of field to support the selected mood.

8. Style rule:
   - Apply anime styling only inside the phone screen and nowhere else.

OUTPUT
Produce exactly one final image following these instructions.`
    },
    {
      id:'p146',
      title:'1.6. Mixed Media Portrait Trio',
      desc:'Change the variables and you are ready to go! (Subject, Accesories and Painting)',
      tags:["curated", "film", "mixed-media", "portrait"],
      category:'1. Portraits & Identity',
      source:'aimikoda/prompts',
      prompt:`VARIABLES
LEFT_SUBJECT = Dua Lipa
CENTER_SUBJECT = Anya Taylor-Joy
RIGHT_SUBJECT = Sydney Sweeney

LEFT_ACCESSORY = a purple hair bow positioned on the head
CENTER_ACCESSORY = bunny ears attached to a simple headband with a small decorative accent
RIGHT_ACCESSORY = a straw hat

PAINTING_REFERENCE = "The Starry Night by Vincent van Gogh"

Set a mixed-media image where illustrated elements are fully hand-painted and human subjects are rendered as ultra-realistic photographic figures.

Use PAINTING_REFERENCE directly as the exact visual source for all painted elements, faithfully preserving its original composition, color palette, brushwork, movement, and spatial rhythm.

Use a lightly textured off-white painted surface as the background behind the human subjects, with subtle paper grain visible and no additional figurative or decorative elements.

Ensure the area directly behind the women remains clean, bright, and predominantly white-toned, clearly separated from the painterly foreground layer.

Create a painterly foreground layer taken directly from PAINTING_REFERENCE that partially obscures the lower frame, functioning as a visual barrier rather than a literal object.

Place three adult women aligned horizontally, positioned behind this painted foreground layer.

Use real, photorealistic depictions of LEFT_SUBJECT as the left subject, CENTER_SUBJECT as the center subject, and RIGHT_SUBJECT as the right subject.

Render all three women with true-to-life skin texture, natural pores, realistic hair strands, photographic sharpness, and accurate light interaction.

Apply realistic studio lighting to the women with soft shadows and natural highlights that intentionally do not match the lighting logic of the painted elements.

Maintain a clear physical and stylistic separation where the painted elements exist as an illustrated layer and the women exist in photographic space, without interaction or texture blending.

Place the hands of each subject resting on an unseen real surface behind the painted foreground layer, with the painted forms partially obscuring the wrists.

Ensure the hands and arms appear fully photographic and unaffected by painterly texture or brushstrokes.

Apply LEFT_ACCESSORY to the left subject.
Apply CENTER_ACCESSORY to the center subject.
Apply RIGHT_ACCESSORY to the right subject.

Align all three heads upright with minimal tilt and gazes directed straight toward the viewer.

Show only the upper portions of the bodies above the painted foreground layer while the lower bodies remain fully hidden.

Keep all illustrated elements strictly painterly with visible brush texture and no photorealistic detail.

Ensure a strong visual contrast where the women appear clearly photographic and separate from the illustrated environment.

Avoid any artist signature, watermark, embedded text, or illustrative stylization on the human subjects.`
    },
    {
      id:'p147',
      title:'1.7. Orange Cat Eye Cover',
      desc:'Make a single-frame professional studio photo output; set high resolution.',
      tags:["animal", "curated", "editorial", "film", "portrait"],
      category:'1. Portraits & Identity',
      source:'aimikoda/prompts',
      prompt:`Make a single-frame professional studio photo output; set high resolution.

Use the person from the uploaded reference photo as the subject; preserve facial structure, body proportions, and realism.

Set a controlled studio environment dominated by a monochromatic orange tonal world.

Place the subject facing directly toward the camera, wearing a fully orange outfit that integrates naturally with the environment while keeping skin tones neutral and realistic.

Place exactly one realistic orange cat positioned directly above and centered over the subject’s head, fully inside the frame with comfortable headroom.

Show the cat’s two front paws symmetrically reaching forward to fully cover both of the subject’s eyes while the cat’s head and gaze are oriented directly toward the camera, as if posing knowingly for the portrait.

Use a clean studio portrait framing with centered composition, straight-on camera axis, and frozen moment timing.

Use soft professional studio lighting that bathes the environment, clothing, and cat in orange tones while keeping the human subject’s skin tones natural and unaltered.

Preserve photographic realism, believable scale between cat and human, clear eye coverage with paws, and intentional eye contact from the cat toward the camera.

Do not add a second cat, do not angle the cat’s head away from the camera, do not crop or cut off any part of the cat or paws, do not cover only one eye, do not alter the subject’s identity, do not stylize the human figure, do not apply orange color grading to skin, do not add text, logos, UI elements, surreal distortion, cartoon style, or fantasy aesthetics.`
    },
    {
      id:'p148',
      title:'2.1. Make Anything Bloom',
      desc:'Make Anything Bloom 🪻🌺 Transform any image by letting flowers, grass, and greenery bloom naturally from realistic surfaces, while preserving the original scene and composition.',
      tags:["curated", "nature", "photorealism"],
      category:'2. Style & Transformation',
      source:'aimikoda/prompts',
      prompt:`VARIABLES
[MAIN_SUBJECT] = uploaded reference image
[PLANT_DENSITY] = balanced
[COLOR_PALETTE] = natural greens with subtle pastel accents
[EDIT_MODE] = additive_only | hybrid | reconstruct
[BACKGROUND] = unchanged | background description
[SEASON_HINT] = spring | summer | autumn | winter | early spring | late summer

INSTRUCTIONS
Make a high-resolution photorealistic image intended for premium conceptual visualization.
Use [MAIN_SUBJECT] as the exact visual identity and base form.
If [EDIT_MODE] is additive_only, preserve the original camera angle, framing, subject position, scale, orientation, background, lighting, and shadows exactly as provided.
If [EDIT_MODE] is hybrid, preserve camera angle, framing, and subject position while allowing subtle background enhancement consistent with [BACKGROUND].
If [EDIT_MODE] is reconstruct, rebuild the scene while preserving subject identity and integrate the subject into [BACKGROUND].
Integrate natural vegetation into the subject as a miniature living ecosystem.
Control overall vegetation presence according to [PLANT_DENSITY].

Allow vegetation to emerge only from physically plausible gaps, seams, recesses, joints, or surface transitions.
Guide vegetation growth, color nuance, density balance, and subtle environmental cues according to [SEASON_HINT].
Ensure seasonal influence affects plants only, not the subject’s material or structure.

Ensure growth follows real-world physical logic and surface geometry.
Prevent vegetation from obscuring primary functional areas, faces, logos, or focal features.
Render plants with believable scale, natural variation, and physical grounding.

Apply [COLOR_PALETTE] as a base while allowing seasonal tonal shifts.
Maintain visual clarity and subject dominance.
Ensure the final image feels iconic, timeless, and cinematically powerful.
Avoid text, labels, watermarks, excessive fantasy elements.`
    },
    {
      id:'p149',
      title:'2.2. Frozen Moment in Ice',
      desc:'People, animals, iconic characters or products. All frozen inside a single moment, trapped in ice ❄️ Just change the variables and generate.',
      tags:["animal", "character", "curated", "frozen", "illustration", "product"],
      category:'2. Style & Transformation',
      source:'aimikoda/prompts',
      prompt:`[SUBJECT_DETAIL] = a Mountain Dew can with bold logo fully visible, partially opened, aggressive aluminum deformation
[ICE_FORM] = massive crystal-clear ice block
[STATE_OF_SUBJECT] = frozen mid-explosion with extreme energy
[BACKGROUND] = pure matte black studio void

INSTRUCTIONS
Make a hyper-realistic cinematic image intended for premium advertising visualization.
Frame the scene so the entire [ICE_FORM] is fully visible from top to bottom with clear separation from the background.
Place a single [ICE_FORM] centered in the frame with balanced negative space on all sides.
Render the ice as a dense translucent frozen mass with layered internal depth, sharp pressure fractures, and suspended ice shards.
Encapsulate [SUBJECT_DETAIL] completely inside the ice, fully enclosed and not touching the outer surface.
Freeze the can in [STATE_OF_SUBJECT], with frozen liquid splash arcs and carbonation bursts suspended in place.
Preserve explosive motion through bent aluminum edges and outward force geometry.
Apply strong optical refraction and magnification effects through the ice over the logo and liquid.
Use an intense cold color palette dominated by electric greens, deep blues, and icy whites.
Set the background to [BACKGROUND] with no visible texture or horizon.
Light the scene with high-contrast directional lighting to define the ice silhouette and illuminate the subject within.
Ensure the final image feels iconic, timeless, and cinematically powerful.
Avoid text overlays, watermarks, unbranded cans, cartoon style, low-detail rendering.`
    },
    {
      id:'p150',
      title:'2.3. Cartoon Accessory Add-On',
      desc:'Add cartoon-style objects and accessories to the uploaded image',
      tags:["cartoon", "curated"],
      category:'2. Style & Transformation',
      source:'aimikoda/prompts',
      prompt:`Add cartoon-style objects and accessories to the uploaded image`
    },
    {
      id:'p151',
      title:'3.1. Life-Size Collectible Box',
      desc:'Turn yourself into a life-size collectible. 💖',
      tags:["curated", "fashion", "packaging", "product", "toy"],
      category:'3. Fashion & Product Imaging',
      source:'aimikoda/prompts',
      prompt:`[SUBJECT] = the person shown in the uploaded reference image
[BOX_TYPE] = Barbie Box

Make a high-resolution lifestyle photograph in 9:16 aspect ratio.
Use a full-frame camera at eye level with a perfectly straight-on, front-facing perspective.
Set the scene in a studio environment designed to match the color palette and mood of [BOX_TYPE].
Place the life-size immersive [BOX_TYPE] centered in the studio, facing the camera directly with no rotation or angle.
Define the box structure, color palette, surface materials, branding style, and decorative elements according to the visual language of [BOX_TYPE].
Include the box’s own characteristic packaging texts and branding details, consistent with [BOX_TYPE].
Include visible text reading “LIMITED EDITION” integrated naturally into the box design.
Position [SUBJECT] centered inside the box as the sole focal figure.
Preserve realistic human body proportions, scale, and anatomy for [SUBJECT] with no stylization or exaggeration.
Show a playful, confident full-body pose that fits naturally within the spatial limits of the box.
Keep the torso open, posture expressive, and facial expression joyful and relaxed.
Style wardrobe, accessories, and footwear to harmonize with the aesthetic implied by [BOX_TYPE].
Use soft, even studio lighting consistent with the box tone and materials.
Maintain clean edges, clear separation between subject, box, and background.
Ensure the final image feels iconic, immersive, and immediately recognizable as a themed display box concept.`
    },
    {
      id:'p152',
      title:'3.2. Flat-Lay Outfit Builder',
      desc:'Generates anatomy-free flat-lay outfit visuals with precise control over style, layout, surface, and accessories. _HOW TO USE PARAMETERS_',
      tags:["curated", "fashion", "flat-lay", "product"],
      category:'3. Fashion & Product Imaging',
      source:'aimikoda/prompts',
      prompt:`[OUTFIT_STYLE] = Use the outfit from the reference image | casual utilitarian womenswear | casual mens streetwear
[COMPOSITION_SCHEME] = seated-inspired angular layout | standing-inspired vertical layout | walking-inspired offset layout | dynamic diagonal layout | balance-inspired asymmetric layout | editorial flat-lay grid break | sculptural negative-space layout | yoga-inspired angular balance layout | athletic-inspired directional layout
[SURFACE] = clean matte studio backdrop | soft neutral paper surface | cool tone matte backdrop
[ACCESSORY_MODE] = outfit_integrated | decorative | none

Make a high resolution flat lay fashion image for editorial and catalog use.
Use a strict top down camera angle with a natural 50mm equivalent perspective and perfectly parallel framing.
Set the scene on [SURFACE] with no visible texture seams or edge shadows.

Show only clothing items and approved accessories placed on the surface.
Do not depict or imply any human body, body parts, limbs, skin, joints, or anatomy.
Do not include legs, hips, feet, knees, or any biological structure.

Arrange garments as a flat, uninhabited composition following [COMPOSITION_SCHEME].
Interpret [COMPOSITION_SCHEME] purely as a geometric layout logic, never as a body configuration.
Use angles, spacing, and directional alignment only to suggest balance and posture.

Keep every garment fully flat with zero internal volume.
Force all bottom garments including pants or leggings to remain collapsed, empty, and tension-free.
Do not stretch, contour, wrap, or compress fabric.
Represent bends only through sharp planar folds and angular breaks.
Prohibit smooth curves, rounded forms, seated volume, or body-fit deformation.

Allow folds and wrinkles only as gravity-driven surface creases.
Ensure clothing reads strictly as laid fabric, not worn, inhabited, or shaped by a body.

Select garments and accessories based on [OUTFIT_STYLE].
If [ACCESSORY_MODE] is outfit_integrated, include only functionally worn items.
If [ACCESSORY_MODE] is decorative, allow accessories as independent flat objects.
If [ACCESSORY_MODE] is none, exclude all accessories entirely.

Use soft diffused daylight from above with gentle shadows directly beneath each item.
Keep spacing balanced with visible negative space around the composition.
Avoid mannequins, models, body silhouettes, stuffing, air filled shapes, extra items, text, logos, or branding.
Ensure clarity, accurate fabric texture, and a calm contemporary aesthetic.`
    },
    {
      id:'p153',
      title:'3.3. ClearShell Product Transformation',
      desc:'Make a photorealistic product image using the uploaded reference product.',
      tags:["3d", "curated", "fashion", "product"],
      category:'3. Fashion & Product Imaging',
      source:'aimikoda/prompts',
      prompt:`Make a photorealistic product image using the uploaded reference product.
Keep the original shape, scale, and details exactly the same.
Replace the outer casing with fully transparent clear plastic.
Render a glossy surface with slight reflections and subtle refraction.
Keep all branding and internal details clearly visible.
Avoid color tinting, distortion, or opaque materials.
Ensure clarity and professional finish.`
    },
    {
      id:'p154',
      title:'4.1. Impact Splash Ad',
      desc:'Example Variables: SUBJECT: - A human adult figure - A Nike performance sneaker - A rubber duck - A cluster of granola pieces',
      tags:["advertising", "branding", "commercial", "curated"],
      category:'4. Advertising & Branding Concepts',
      source:'aimikoda/prompts',
      prompt:`You are an intelligent commercial image composition model.

SUBJECT: A human adult figure
LIQUID TYPE: Water
IMPACT DISTANCE: Very Close
SPLASH INTENSITY: Mediumx
COLOR THEME: Cool blues and aqua highlights

TEXT: {TEXT}
TEXT_LANG: {TEXT_LANG}
Examples:
- TEXT empty, TEXT_LANG English
- TEXT "JUST DO IT", TEXT_LANG English

Create a single cohesive commercial-grade visual scene where:

- The subject is suspended mid-air as if falling, fully visible in its entirety, with no cropping or occlusion.
- The liquid exists below the subject at the moment of impact or just before impact, depending on the specified impact distance.
- The interaction between subject and liquid feels physically believable, visually expressive, and clearly readable.
- Composition, framing, perspective, and lighting are intelligently determined by the model to maximize clarity, balance, and visual impact.
- The color theme unifies the subject, liquid, lighting, and background into a coherent, brand-ready palette.

TEXT & TYPOGRAPHY RULES:
- If TEXT is empty, generate a very short headline and one very short subline in TEXT_LANG.
- Automatically select a clean, modern, advertisement-appropriate font optimized for readability.
- Adjust font size, weight, spacing, and placement intelligently using negative space.
- Typography must enhance the composition without dominating it.

STYLE & QUALITY RULES:
- Premium commercial advertising quality.
- Hyper-realistic materials and fluid or granular simulation.
- Studio-grade lighting with a high-speed photography aesthetic.
- Crisp focus on the subject and primary splash or impact details.
- The scene must feel intentional, polished, and campaign-ready.
- No fantasy elements.
- No illustration or painterly effects.
- No UI elements, watermarks, or logos unless naturally part of the subject.

The final image should feel like a hero visual from a global advertising campaign.`
    },
    {
      id:'p155',
      title:'4.2. Mood Poster Generator',
      desc:'This prompt is designed for anyone who wants to create a strong visual from a single emotion. It is mood-driven. Style-flexible.',
      tags:["advertising", "branding", "curated", "editorial", "mood", "poster", "typography"],
      category:'4. Advertising & Branding Concepts',
      source:'aimikoda/prompts',
      prompt:`You are a minimalist visual mood composer that generates a single-frame artistic image driven primarily by emotional tone.

VARIABLES
MOOD: <string describing the emotional atmosphere, e.g. calm, melancholic, hopeful, ironic, tense, dreamy>
STYLE: <rendering language + medium, e.g. anime illustration, hand-drawn sketch, cinematic photography, 3D render, abstract painting>
TEXT: <optional short sentence or phrase; if empty, generates a fitting line inspired by MOOD>
BACKGROUND: <optional background hint; if empty, generates a background that best expresses MOOD>

INSTRUCTIONS
1. Create a single square composition with a clean, uncluttered layout.
2. Treat MOOD as the core driver for all visual and textual decisions.
3. Interpret STYLE as a combined rendering language and medium, and apply it consistently across the entire image.
4. Ensure style, typography, and background do not visually or conceptually conflict with each other.
5. Design the background based on MOOD and STYLE.
   - If BACKGROUND is provided, interpret it loosely and artistically.
   - If BACKGROUND is empty, invent a background that emotionally reinforces MOOD.
6. Use a restrained color palette that clearly reflects MOOD, avoiding visual noise.
7. Place the text thoughtfully within the composition.
   - If TEXT is provided, use it exactly as given.
   - If TEXT is empty, write a short poetic line that matches MOOD.
8. Apply a very subtle text shadow to improve readability without becoming a focal point.
9. Ensure typography feels integrated with the image, subtle and balanced.
10. Maintain generous negative space and visual breathing room.
11. Avoid narrative complexity, characters, or multiple scenes.
12. The final result should feel like a quiet mood poster or artistic still.
13. Do not add any extra elements beyond what serves MOOD directly.
14. Ensure the image reads as intentional, calm, and aesthetically cohesive.`
    },
    {
      id:'p156',
      title:'4.3. Chat Bubble Cinematic',
      desc:'Turn quotes, jokes, ideas, or iconic moments into cinematic visuals. Use it for ads, memes, concepts, or just pure imagination.',
      tags:["advertising", "branding", "cinematic", "curated", "humor"],
      category:'4. Advertising & Branding Concepts',
      source:'aimikoda/prompts',
      prompt:`SYSTEM ROLE
You are a visual scene composer and commercial illustration designer that generates clean, high-resolution advertising-ready illustrations with photorealistic human characters and glossy chat-bubble UI elements.

VARIABLES
OUTPUT_TYPE: <commercial illustration | digital banner | landing page visual>
BACKGROUND_STYLE: <background color, texture, pattern description>
COLOR_THEME: <light | dark | brand-aligned>
PRIMARY_TEXT_COLOR: <color>
SECONDARY_TEXT_COLOR: <color>
ACCENT_COLORS:
- PARTICIPANT_A: <color>
- PARTICIPANT_B: <color>
- OPTIONAL_PARTICIPANT_C: <color>

BUBBLE_COUNT: <number>
BUBBLE_LAYOUT: <stacked vertically | stacked horizontally | custom flow>
BUBBLE_STYLE:
- SHAPE: <rounded | pill | custom>
- FINISH: <glossy | matte | glassy>
- SHADOW: <subtle | soft | none>
- OUTLINE: <none | thin | custom>

TYPOGRAPHY:
- FONT_FAMILY: <modern sans-serif | custom>
- WEIGHT: <regular | medium | bold>
- ALIGNMENT: <left | center | right>

TIMESTAMP_TEXT: <string or empty>
MESSAGE_ICON_STYLE: <description or none>

PARTICIPANTS:
- NAME: <string>
  DESCRIPTION: <photorealistic human description including age range, skin tone, hair, clothing>
  SIDE: <left | right>
- NAME: <string>
  DESCRIPTION: <photorealistic human description including age range, skin tone, hair, clothing>
  SIDE: <left | right>
- OPTIONAL:
  NAME: <string>
  DESCRIPTION: <photorealistic human description>
  SIDE: <left | right>

MESSAGES:
1. SENDER: <participant name>
   TEXT: <string>
   REACTION: <facial expression, gaze direction, body posture>
2. SENDER: <participant name>
   TEXT: <string>
   REACTION: <facial expression, gaze direction, body posture>
3. SENDER: <participant name>
   TEXT: <string>
   REACTION: <facial expression, gaze direction, body posture>
<add more messages as needed>

CHARACTER_STYLE: <photorealistic humans, natural skin texture, realistic proportions, realistic hair and fabric detail, no illustration, no anime>
LIGHTING_STYLE: <soft studio | cinematic | flat UI-style>
COLOR_MOOD: <friendly | premium | playful | serious | cinematic>
SIGNATURE: <optional text and placement>

INSTRUCTIONS
1. Create a high-resolution illustration suitable for advertising and digital use.
2. Do not include phone frames, device borders, or app mockup chrome unless explicitly specified.
3. Fill the entire background using BACKGROUND_STYLE with controlled contrast.
4. Place chat bubbles according to BUBBLE_LAYOUT with clear reading order.
5. Assign a distinct bubble color to each participant using ACCENT_COLORS.
6. Render chat bubbles using BUBBLE_STYLE consistently.
7. Insert message TEXT using TYPOGRAPHY with high readability.
8. Display sender NAME subtly near each bubble using SECONDARY_TEXT_COLOR.
9. Place TIMESTAMP_TEXT and MESSAGE_ICON_STYLE consistently where applicable.
10. Position each bubble on the SIDE assigned to its sender.
11. Render each participant adjacent only to their own messages.
12. Apply the specified REACTION accurately for each message.
13. Never mix message ownership, participant sides, or bubble colors.
14. Maintain strict character identity and visual consistency throughout.
15. Keep composition clean, balanced, and free of visual noise.
16. Use PRIMARY_TEXT_COLOR for dialogue and SECONDARY_TEXT_COLOR for metadata.
17. Place SIGNATURE subtly without distracting from the main content.
18. Ensure the final image feels realistic, premium, and commercially polished.`
    },
    {
      id:'p157',
      title:'4.4. Sand-Form Beauty Ad',
      desc:'Create a high-resolution vertical advertising-style studio photo featuring {PERSON_NAME}.',
      tags:["advertising", "beauty", "branding", "curated"],
      category:'4. Advertising & Branding Concepts',
      source:'aimikoda/prompts',
      prompt:`Create a high-resolution vertical advertising-style studio photo featuring {PERSON_NAME}.
Show a single adult female subject in a chest-up portrait that fills the frame with no cropping of the head, hair, neck, shoulders, or upper chest.
Pose the subject in a polished campaign stance: shoulders slightly angled, head subtly tilted, chin gently lifted, and the gaze locked straight into camera.
Include one visible hand near the collarbone or jawline in an elegant beauty-ad pose, with the hand also made of sand.
Keep a confident, premium, composed expression suitable for a luxury ad shoot.
Make ONLY the eyes organic and lifelike, with realistic irises, pupils, sclera, wet reflections, and natural catchlights.
Construct the entire rest of the visible subject from countless sand grains with crisp granular micro-detail and believable shadowing between grains.
Make everything except the eyes sand: forehead, temples, eyebrows, eyelashes, eyelids and under-eye area, nose, cheeks, lips, teeth, tongue and inside of the mouth, chin and jawline, ears, hair, neck, shoulders, collarbones, upper chest, the visible hand and fingers, plus any visible clothing, accessories, and jewelry.
Use a high-end studio lighting setup with softbox key, subtle fill, and clean rim lights to carve the form while preserving sharp sand texture and gentle sparkle.
Set a minimal seamless studio background with a smooth gradient and no environment details.
Add restrained premium post-processing: high dynamic range, crisp micro-contrast, and soft bloom only on the brightest sand glints.
Avoid text, logos, borders, extra objects, and any additional people.`
    },
    {
      id:'p158',
      title:'4.5. Ingredient Breakdown Reveal',
      desc:'Upload Any Product. See What’s Really Inside! Turn Any Food Photo Into a Truthful Ingredient Breakdown with Nano Banana Pro',
      tags:["advertising", "branding", "curated", "food", "product"],
      category:'4. Advertising & Branding Concepts',
      source:'aimikoda/prompts',
      prompt:`Using the provided reference image, create a bold, startup-style social media visual that highlights the overwhelming presence of harmful ingredients in the product.

The composition shows a side-by-side comparison of the same product:

On the left:
The product exactly as shown in the reference image, intact, clean, and familiar in appearance.

On the right:
The same product at the exact same size, proportions, and perspective, but sliced or cut open to expose its internal composition as clearly separated horizontal layers.

The internal layers should visually emphasize imbalance:
the largest and most dominant layers represent harmful or low-quality ingredients, while beneficial ingredients appear noticeably smaller and minimal.

Use thin, sharp arrows pointing to each layer.
Next to each arrow, include clear, modern text labels stating:

the ingredient name

the approximate percentage or proportion

Design the visual hierarchy so that high-sugar and high-fat components feel visually heavy and excessive, creating an immediate sense of concern and contrast.

Design style:
Minimal, high-contrast startup infographic aesthetic.
Clean sans-serif typography, bold spacing, strong contrast.
Crisp studio lighting, exaggerated layer separation for clarity and impact.
Flat or softly graded background inspired by modern tech and startup visuals.`
    },
    {
      id:'p159',
      title:'5.1. Parallel Storyboard Grid',
      desc:'Branching one image into three different storylines, with selectable time spans and director style (e.g. Nolan, Tarantino) guiding each sequence.',
      tags:["comic", "curated", "storyboard"],
      category:'5. Movie Making & Storytelling & Comics',
      source:'aimikoda/prompts',
      prompt:`Here’s the prompt. Feel free to use it and adjust it to your needs.

[DIRECTOR] = director name
[DURATION] = a brief continuous moment | a short uninterrupted action | a compact continuous span | a fleeting but coherent moment | a single sustained cinematic beat | a continuous dramatic beat | a tightly paced cinematic moment | a short real-time progression | a continuous real-time fragment | a seamless micro-sequence | a moment long enough for a clear change to occur | a short span where an action clearly evolves

Create a 3x3 cinematic storyboard grid from the uploaded reference image.
Arrange the grid as three vertical columns and three horizontal rows.
Treat each column as a separate, self-contained storyline.
Within each column, the three panels form a top-to-bottom narrative sequence.
Ensure all nine panels fit on a single continuous canvas with no borders, gaps, or spacing.
Ensure every panel is a true 16:9 frame with no cropping or distortion.

Use the uploaded reference image strictly as an environment, lighting, character, material, and atmosphere reference.
Do not recreate, replicate, or directly derive any panel composition from the reference image.
Do not treat the reference image as the starting frame for any panel or storyline.

Preserve the original visual medium, realism level, color science, texture fidelity, sharpness, grain, and noise characteristics of the reference image.
Keep lighting conditions, weather, materials, and atmosphere continuous across all panels.

Use cinematic camera language in the exact visual style of [DIRECTOR].

For each column, assign clear narrative roles:
- Top panel establishes an initial situation that is compositionally distinct from the reference image.
- Middle panel introduces a clear change through action, interaction, or reaction.
- Bottom panel presents an irreversible outcome that cannot visually or narratively resemble the top panel.

Ensure each panel within a column represents a later moment than the one above it, unfolding within [DURATION].
Ensure camera framing and distance progress forward within each column and never return to an earlier composition.
Ensure visible story progression comes from changes in action, behavior, orientation, or spatial relationship, not from zoom alone.
Ensure the final panel in each column does not visually echo or reset to the first panel.

Ensure the three columns depict three different storylines, decisions, or outcomes, not variations of the same sequence.
Prevent visual or narrative repetition across columns.

Lock the identity of all primary subjects and environments to remain consistent with the reference image.
Preserve all visually distinctive attributes that contribute to the identity of any subject, object, or environment when they appear in the reference image.

Maintain strict continuity in materials, surfaces, clothing, accessories, and physical details.
Avoid text, captions, labels, UI elements, frames, borders, graphic overlays, and including [DIRECTOR] as a character.
Ensure the final image reads clearly as three parallel cinematic micro-stories and feels iconic, coherent, and cinematically powerful`
    },
    {
      id:'p160',
      title:'5.2. Bullet Dodge Kitchen',
      desc:'5.2. Bullet Dodge Kitchen',
      tags:["comic", "curated"],
      category:'5. Movie Making & Storytelling & Comics',
      source:'aimikoda/prompts',
      prompt:`[THROWER] = an adult woman in casual everyday clothing
[DODGING_SUBJECT] = a young person wearing a loose sweatshirt and jeans
[LOCATION] = wooden cabinets and a centered back window
[THROWN_OBJECT] = a light blue rubber clog mid-air
[ASPECT_RATIO] = 9:16

Make a photorealistic lifestyle photograph in [ASPECT_RATIO] aspect ratio.
Use a wide-angle lens positioned slightly behind the dodging subject at waist height with deep depth of field.
Set the scene in a narrow home kitchen with [KITCHEN_DESIGN].

Place [THROWN_OBJECT] in the immediate foreground closest to the camera, frozen mid-air.
Place [DODGING_SUBJECT] behind the object, viewed strictly from behind, occupying the lower half of the frame.
Place [THROWER] in the midground behind [DODGING_SUBJECT], facing the camera.

Show [DODGING_SUBJECT] performing an extreme backward Neo-style bullet dodge using only natural human motion, with the spine deeply arched so the torso folds far enough back to fully expose the face upside down, the head hanging inverted with facial features and eyes clearly visible to the camera, and the neck fully extended with the chin lifted backward to maximize facial visibility.
Show [THROWER] stepping forward with one arm fully extended in a throwing motion.
Include [THROWN_OBJECT] positioned slightly past the head and upper torso plane of [DODGING_SUBJECT] to indicate it has narrowly missed and already passed.

Use soft natural daylight from the rear window with subtle indoor ambient fill.
Ensure the image feels candid, humorous, and convincingly real.
Avoid visual effects, motion trails, stylization, cinematic grading, or slow-motion cues.`
    },
    {
      id:'p161',
      title:'5.3. Parametric Comic Scenes',
      desc:'variable-based system for auto generating clean, consistent comic scenes. There are already many social media accounts built entirely around this kind of content.',
      tags:["comic", "curated", "marketing", "social"],
      category:'5. Movie Making & Storytelling & Comics',
      source:'aimikoda/prompts',
      prompt:`SYSTEM ROLE
You are a visual scene composer and caption writer that generates a clean, coherent comic-style illustration based on parametric inputs.

VARIABLES
TOPIC: <string describing the core idea or situation of the comic>
CHARACTERS: <optional string describing character(s); if empty, invent suitable character(s) based on TOPIC>
GRID_SIZE: <number of panels, e.g. 4, 6, 9>
GRID_LAYOUT: <layout format, e.g. 2x2, 3x2, 3x3>
COLOR_PALETTE: <brief description of dominant colors and mood, e.g. muted pastels, monochrome, warm tones>
STYLE: <illustration style, e.g. hand-drawn, painterly, storybook, flat graphic>
MOOD: <overall emotional tone, e.g. happy, calm, sad, nostalgic, ironic>
NARRATION_MODE: <visual | visual+text | text-led>
SIGNATURE: <optional signature text and placement, e.g. "Aimi Koda, bottom-right"; if empty, do not add a signature>

INSTRUCTIONS
1. Create a square comic-style illustration using GRID_LAYOUT with equal spacing and clean borders.
2. Interpret TOPIC as the narrative anchor and invent a short story that unfolds across the panels.
3. If CHARACTERS is provided, strictly follow it; otherwise invent character(s) that naturally fit TOPIC.
4. Keep character identity, proportions, and visual traits consistent across all panels.
5. Decide the camera progression yourself in a way that best serves the invented story.
6. Decide the background behavior yourself, keeping visual coherence across panels.
7. Decide the lighting approach yourself, choosing what best fits MOOD and STYLE.
8. Decide the overall detail level yourself and keep it consistent across all panels.
9. Apply COLOR_PALETTE consistently, allowing subtle variation when narratively useful.
10. Let MOOD influence composition, pacing, expressions, and visual rhythm across panels.
11. Follow NARRATION_MODE strictly:
    - If visual: include no text inside panels and rely entirely on imagery.
    - If visual+text: decide which panels include text and which remain silent.
    - If text-led: include text in most or all panels, with visuals supporting the narration.
12. When text is used, place it inside panels in a comic-appropriate way, such as captions, thought text, or minimal dialogue.
13. Write short, natural, story-driven text that advances the narrative implied by TOPIC and MOOD.
14. Do not force text into every panel unless NARRATION_MODE is text-led.
15. Ensure the sequence forms a clear beginning, middle, and end through visuals, text, or both.
16. If SIGNATURE is provided, add it exactly as specified, placed discreetly without distracting from the illustration.
17. Avoid unnecessary elements and visual noise.
18. Ensure the final output reads clearly as a single cohesive multi-panel comic illustration.`
    },
    {
      id:'p162',
      title:'6.1. Stacked Megacity Sculpture',
      desc:'Generate 3D miniature city dioramas in the form of a sculptural, stacked megacity, using Nano Banana Pro.',
      tags:["3d", "architecture", "city", "curated", "diorama", "miniature"],
      category:'6. Cities & Architecture',
      source:'aimikoda/prompts',
      prompt:`[CITY] = city name here

Make a stylized 3D miniature city diarama illustration.
Use an isometric camera angle with slight perspective and ensure full subject visibility.
Set the scene as a sculptural city stack inspired by [CITY].
Define spatial behavior as vertical accumulation with compact upward growth.
Show only the most iconic and culturally recognizable elements of [CITY].
Construct the city as a single fused megastructure rather than separate buildings.
Arrange architectural volumes, towers, and pathways into a balanced vertical silhouette.
Wrap the structure with a central ascending route that visually leads upward.
Place the entire city mass on a solid ground base.
Render the city name at the base as monumental stone-like letterforms.
Render each letter as a massive architectural block integrated into the structure.
Treat letters as load-bearing foundations with stairs, windows, doors, and passages.
Allow buildings, pathways, and landmarks to physically rise from the tops of the letters.
Integrate the ground base visually with the letter structures as one cohesive mass.
Render architecture with region-appropriate forms, proportions, and material logic.
Integrate natural elements seamlessly into the structure as part of the mass.
Use smooth shaded materials with a soft illustrated texture and no outlines.
Apply warm daylight with soft global illumination and gentle ambient shadows.
Keep the background minimal with a bright sky gradient and soft clouds.
Ensure visual impact, coherence, and stylistic integrity.`
    },
    {
      id:'p163',
      title:'6.2. Landmark Re-Designed',
      desc:'What If Landmarks Had a Different Designer?',
      tags:["architecture", "city", "curated"],
      category:'6. Cities & Architecture',
      source:'aimikoda/prompts',
      prompt:`[LANDMARK] = Eiffel Tower
[DESIGNER] = Leonardo da Vinci

A hyper-realistic photograph of [LANDMARK] designed by [DESIGNER].
Capture it at its real-world site and structurally plausible architecture consistent with [DESIGNER]’s design language.
Render it as an authentic modern on-location photo with realistic lighting, atmosphere, perspective, and surrounding context, indistinguishable from a real photograph.`
    },
    {
      id:'p164',
      title:'6.3. City Tree Monument',
      desc:'This prompt imagines world cities as living monuments carved into colossal ancient trees. Just change the variables and you’re ready to go.',
      tags:["architecture", "city", "curated"],
      category:'6. Cities & Architecture',
      source:'aimikoda/prompts',
      prompt:`VARIABLES
[CITY]: Name of the city
[TIME_OF_DAY]: sunrise | early morning | midday | afternoon | golden hour | sunset | blue hour | night
[COLORED]: true | false

Create a hyper-detailed artistic visualization of a colossal ancient tree whose massive trunk is entirely transformed through wood carving into the city of [CITY].

Show the tree as a single monumental sculpture, fully visible from roots to crown, centered in the frame.

Carve [CITY] directly into the living wood, allowing its well-known historical landmarks, skyline, domes, towers, bridges, and districts to emerge organically from the trunk and roots without explicit labeling.

Integrate architectural forms at multiple scales and depths, with rooftops, arches, stairways, and silhouettes following the natural flow of the wood grain.

Use the roots to form coastlines, hills, and ancient neighborhoods, while upper branches subtly echo the city’s iconic skyline shapes.

Extend one major branch from the upper-left side of the tree and organically shape this branch and its offshoots into the readable text “[CITY]”, as if the lettering grew naturally as part of the tree rather than being carved or arranged.

Ensure the branch-formed lettering is continuous with the tree structure, sharing the same bark texture, growth rings, knots, and imperfections, with slight moss and lichen growth reinforcing its living origin.

Cover parts of the tree with organic greenery, including mold-like moss growth, soft lichen patches, hanging moss, and small clusters of mushrooms growing naturally from cracks, roots, and shaded carved areas.

Ensure the greenery feels damp, aged, and biologically plausible, integrated into the carving without obscuring key architectural details.

If [COLORED] is true, apply subtle natural pigments and mineral-based coloration selectively to architectural details, roofs, domes, and city accents while preserving the dominance of natural wood tones.

If [COLORED] is false, render the entire sculpture in natural wood tones only, without added pigments or color accents.

Light the scene according to [TIME_OF_DAY], using appropriate atmospheric depth to emphasize scale, texture, and craftsmanship.

Apply a realistic wood-carving aesthetic with visible chisel marks, aged textures, natural cracks, and selectively polished surfaces consistent with authentic craftsmanship.

Keep the composition cinematic, timeless, and awe-inspiring, with no modern elements, no people, and no fantasy creatures.

Render in ultra-high resolution with sharp focus, realistic shadows, and museum-grade artistic quality.`
    },
    {
      id:'p165',
      title:'7.1. Flag Myth Diorama',
      desc:'This Is What Flag Meanings Look Like This prompt turns flag meanings into 3D Dioramas',
      tags:["3d", "curated", "diorama", "miniature"],
      category:'7. Worlds & Dioramas',
      source:'aimikoda/prompts',
      prompt:`[COUNTRY] = Country Name

Create a 3D miniature diorama scene that visualizes a poetic and culturally rooted interpretation of the flag of [COUNTRY].
Present the scene as a handcrafted symbolic world frozen in a single legendary moment.
Build the entire diorama on a base shaped precisely like the geographic outline of [COUNTRY], as if the land itself forms the foundation.
Do not rely on official or textbook meanings.
Assume the meaning emerges from cultural memory, myth, and traditional storytelling instincts of the nation.
Translate flag colors and symbols into a single connected physical event occurring across the land-shaped base, such as reflection, sacrifice, witnessing, or remembrance.
Let cultural perception shape the internal logic of the scene rather than literal symbolism.
Avoid turning symbols into decorative objects.
Integrate the actual flag of [COUNTRY] subtly into the scene, such as engraved, carved, or embossed along the edge or surface of the land-shaped base.
Include the country name as visible text, cleanly typeset and physically embedded into the base like a museum label or cartographic marking.
Avoid floating text or billboard-style typography.
Render the diorama with clear scale, depth, and sculptural detail, viewed slightly from above to clearly read the geographic silhouette.
Compose the scene as a visual legend that could be passed down through generations.
Ensure the final image feels iconic, timeless, and cinematically powerful.`
    },
    {
      id:'p166',
      title:'7.2. Time Capsule City Orb',
      desc:'Enter a city, pick a year, and explore cities across time. This prompt generates a time capsule with a city locked to a single moment in time.',
      tags:["architecture", "city", "curated", "diorama", "miniature"],
      category:'7. Worlds & Dioramas',
      source:'aimikoda/prompts',
      prompt:`[CITY_NAME] = city name
[YEAR] = year

Make a cinematic 3D miniature city diorama for temporal visualization in 1:1 aspect ratio.
Use a virtual cinematic camera with a slight top-down angle and realistic depth of field.
Set the scene as a suspended time capsule environment isolated from the present.
Enclose the entire miniature city inside a perfectly complete transparent spherical glass orb.
Ensure the sphere is fully closed with no cut, base, stand, pedestal, wood, or external support.
Keep the spherical form perfectly centered and visually dominant in the frame.
Show the city floating freely inside the sphere as a single cohesive landmass.
Show the city frozen exactly as it exists in [YEAR] with no elements from other time periods.
Render [CITY_NAME] with architecture, streets, landmarks, and urban density accurate to that year.
Adapt materials, construction techniques, technology level, and city layout to the specified time.
Show terrain, coastline, rivers, vegetation, and infrastructure as they would appear in that year.
Include subtle signs of life appropriate to the time such as people, vehicles, animals, or vessels when contextually plausible.
Use physically based rendering with realistic stone, wood, metal, glass, earth, and fabric textures suited to the era.
Apply soft global illumination with a cinematic light matching the temporal atmosphere.
Add a gentle rim light around the outer edge of the sphere to clearly define its silhouette.
Preserve subtle reflections and refractions on the spherical surface with minimal visual distortion.
Place all title text directly on the surface of the sphere as an overlay, not floating above or outside it.
Align the text to follow the curvature of the sphere while remaining legible.
Write the city’s name exactly as it was used in [YEAR] as the main title text on the sphere surface.
If [YEAR] refers to a past year, write the modern official city name in parentheses directly beneath the historical name on the sphere surface.
If [YEAR] refers to a future year, display only the primary city name with no secondary name.
Place the year text directly beneath the city name or names as part of the same curved title block on the sphere.
Ensure the final image feels iconic, timeless, and cinematically powerful.`
    },
    {
      id:'p167',
      title:'7.3. IMAX Aerial Creature Shot',
      desc:'This prompt turns any creature into an IMAX-level, ultra-photoreal aerial shot. Drop in a subject, pick a view, and let it look like it was actually filmed from the sky.',
      tags:["cinematic", "curated", "diorama", "fantasy", "film", "miniature", "surreal"],
      category:'7. Worlds & Dioramas',
      source:'aimikoda/prompts',
      prompt:`[SUBJECT] = white dragon
[TIME_OF_DAY] = night
[FLYING_OVER] = dense emerald forest canopy
[CAMERA_VIEW] = strict top-down aerial view, camera looking directly downward

Make an ultra-photorealistic aerial photograph intended to look indistinguishable from a real-world camera capture.
Capture the scene as if shot on a real IMAX large-format camera.
Use large-format IMAX lens characteristics with extreme clarity and minimal distortion.
Set the camera view according to [CAMERA_VIEW].
Frame the scene so the entire [SUBJECT] including full wingspan or full body is fully visible within the frame.
Ensure generous safety margins between all extremities and the frame edges.
Scale the subject down if necessary to guarantee complete visibility without cropping.
Use poster-perfect framing with balanced negative space on all sides.
Place a vast continuous landscape of [FLYING_OVER] filling the entire background.
Show a single majestic [SUBJECT] above the environment.
If the specified subject is not naturally capable of flight, place it riding or seated on an early open-frame glider with exposed wooden structure, fabric-covered wings, and an open cockpit, inspired by early 20th-century aviation, realistically integrated.
Define surface texture, anatomy, and physical behavior realistically for the specified subject.
Ensure the head, neck, and spine remain aligned in a natural forward-facing posture with realistic anatomical limits.
Keep the body, wings or glider structure, spine, and overall form arranged in a clean, readable silhouette from the selected camera view.
Set lighting to [TIME_OF_DAY] with natural real-world light behavior and physically accurate shadows.
Preserve realistic scale, atmospheric falloff, and optical behavior.
Ensure the final image feels iconic, timeless, and cinematically powerful.
Avoid illustration, digital art, stylization, text, logos, borders, watermarks, extra creatures.`
    },
    {
      id:'p168',
      title:'7.4. Totem Builder',
      desc:'Build your own totem.',
      tags:["curated", "diorama", "miniature"],
      category:'7. Worlds & Dioramas',
      source:'aimikoda/prompts',
      prompt:`[HEAD_1] = Spider-Man
[HEAD_2] = Captain America
[HEAD_3] = Black Widow
[HEAD_4] = Deadpool
[HEAD_5] = Use the provided reference image as a strict facial identity guide. Preserve the exact facial proportions, structure, and recognizable features from the reference image.

Make a high-resolution photorealistic image for artistic and cultural visualization.
Set the camera slightly farther back and higher than eye level with a gentle elevated perspective.
Use a subtle upward angle that captures the full height and wingspan of the subject.
Show a tall vertical wooden totem fully visible from base to top.
Place the totem outdoors in a lush green natural environment.
Carve the totem from a single continuous natural wooden trunk.
Form the totem exclusively from five stacked human heads.
Arrange the heads vertically from bottom to top as [HEAD_1], [HEAD_2], [HEAD_3], [HEAD_4], [HEAD_5].
Use the provided reference image as a strict facial identity guide for each head.
Preserve exact facial proportions, structure, and recognizable features from the reference.
Translate each face into a realistic hand-carved wooden form without exaggeration or stylization.
Apply a unified Indigenous-inspired carving style across all heads.
Render realistic human proportions with defined brows, deep-set eyes, prominent noses, carved lips, and clear cheekbones.
Set all expressions to neutral with open eyes, closed mouths, and relaxed facial tension.
Orient all faces forward with slight individual head tilts.
Attach large symmetrical carved wings to the upper section of the totem.
Carve the wings from the same wood with layered feather patterns.
Paint all heads and wings with vivid traditional colors including turquoise blue, red, black, white, yellow, and earthy brown.
Apply bold geometric patterns while preserving visible wood grain, chisel marks, minor cracks, and natural weathering.
Light the scene with clear daylight and even natural sunlight.
Ensure surrounding greenery is visible to reinforce scale and context.
Ensure the final image feels iconic, timeless, and cinematically powerful.
Avoid fantasy elements, abstraction, modern materials, watermarks, text overlays, unpainted heads.`
    },
    {
      id:'p169',
      title:'8.1. Match-3 City Diorama',
      desc:'You are a visual generation system that creates a 3D miniature city diorama that looks like a physical, three-dimensional match-3 puzzle game world map.',
      tags:["architecture", "cartography", "city", "curated", "diorama", "game", "map", "miniature"],
      category:'8. Games & Maps',
      source:'aimikoda/prompts',
      prompt:`You are a visual generation system that creates a 3D miniature city diorama that looks like a physical, three-dimensional match-3 puzzle game world map.

VARIABLES
CITY: [City Name]
LANGUAGE: [Language]
TITLE: [CITY] Saga

INSTRUCTIONS

Depict [CITY] as a fully 3D miniature city diorama viewed from a slightly elevated, isometric perspective.
The city should feel like a tangible tabletop model inspired by the visual language of modern match-3 games.

Construct a single winding level path that travels across the diorama from start to finish.
The path must resemble a classic match-3 level route: chunky, segmented, colorful, and clearly readable as a progression line.

Represent iconic landmarks of [CITY] as individual 3D game levels placed along the path.
Each landmark should be simplified into a toy-like 3D model and labeled with its real, correct place name written in [LANGUAGE].

Replace traditional match-3 gems with chunky 3D icons inspired by [CITY]'s famous foods and drinks.
Position these icons directly on the path, spaced rhythmically like match-3 collectibles.
They should feel glossy, candy-like, slightly oversized, and designed for touch interaction.

Ensure the entire scene follows a bright, casual, polished match-3 art style:
– rounded geometry
– saturated, cheerful colors
– soft lighting
– subtle plastic, clay, or candy-like materials

Avoid realism, photorealistic textures, weathering, dirt, or cinematic grit.

Do not include any UI elements, menus, buttons, score indicators, HUDs, icons, or interface overlays.

Display only a single title at the very top of the image reading exactly: “[TITLE]”.

Avoid watermarks, logos, borders, or decorative text beyond landmark labels and the title.

The final image should feel like a premium 3D match-3 game world map frozen in time, presented as a collectible miniature city.`
    },
    {
      id:'p170',
      title:'8.2. Candy Crush City Map',
      desc:'Turning real cities into colorful Candy Crush like match-3 game world maps 🍬🍭 Iconic landmarks become levels, local flavors guide the path.',
      tags:["architecture", "cartography", "city", "curated", "game", "map"],
      category:'8. Games & Maps',
      source:'aimikoda/prompts',
      prompt:`You are a visual generation system that creates a colorful match-3 puzzle game world map depicting a real city as a playful, candy-like game environment, optimized for clarity, charm, and geographic storytelling.

VARIABLES
CITY: New York
LANGUAGE: English
TITLE: New York Saga

INSTRUCTIONS

Depict [CITY] as a colorful match-3 puzzle game world map viewed from a slightly elevated, illustrative perspective.

Construct a single winding level path that travels across the city, clearly guiding progression from start to finish.

Represent iconic landmarks of [CITY] as individual game levels placed along the path, and label each level with the landmark’s real, correct place name written in [LANGUAGE].

Replace standard match-3 gems with stylized icons inspired by [CITY]'s famous foods and drinks.
Position these food and drink icons directly on the winding level path as collectible or decorative elements that visually follow the route.
Ensure the icons are playful, readable, culturally recognizable, and clearly integrated into the path flow rather than scattered randomly across the map.

Ensure all visual elements follow a cohesive, bright, casual puzzle-game art style with soft shapes, vibrant colors, and a friendly tone.
Avoid realism, photorealistic textures, or gritty detail.

Do not include any UI elements, menus, buttons, score indicators, icons, or interface overlays of any kind.

Display only a single title at the very top of the image reading exactly: “[TITLE]”.

Avoid watermarks, logos, borders, or decorative text beyond landmark labels and the title.`
    },
    {
      id:'p171',
      title:'9.1. Dish-As-World Scene',
      desc:'You are an intelligent image composition model.',
      tags:["curated", "food"],
      category:'9. Food & Culture',
      source:'aimikoda/prompts',
      prompt:`You are an intelligent image composition model.

Dish: {DISH_NAME}
Cuisine Country: {COUNTRY}
Visual Style: {STYLE}
(Examples for visual style:
- miniature diorama with cinematic studio lighting
- whimsical handcrafted miniature
- cinematic stylized realism
- hyperreal food photography
- soft 3D illustration
- watercolor storybook illustration
- paper-cut layered illustration
- claymation-inspired miniature
- painterly cinematic realism
- surreal-but-coherent food landscape)

Create a single cohesive visual scene where:
- The ingredients of the dish are implicitly inferred and visually represented through natural gathering, harvesting, or transformation into elements of the scene.
- The dish itself becomes the core “world” or stage of the composition, not a separate object.
- The environment, props, materials, colors, and atmosphere reflect the culture, geography, and everyday life of the specified country.
- Ingredients may form landscapes, vehicles, tools, or structures if it suits the chosen style, while remaining recognizable through context.
- The overall composition feels intentional, cinematic, and story-driven rather than a collage.

STYLE & QUALITY RULES
- Fully apply the requested Visual Style to lighting, materials, scale, and mood.
- Use depth of field, perspective, and lighting consistent with the chosen style.
- Miniature figures may be included only if they fit culturally and stylistically.
- The scene should feel handcrafted or carefully composed, not chaotic or surreal.
- No text, labels, UI elements, logos, or watermarks.
- The final image should visually explain how the dish and its cultural origin naturally come together.`
    },
    {
      id:'p172',
      title:'10.1. New Year Photo Booth Strip',
      desc:'Make a single-frame ultra-photorealistic photo at high resolution.',
      tags:["curated", "humor", "seasonal"],
      category:'10. Holidays & Humor',
      source:'aimikoda/prompts',
      prompt:`Make a single-frame ultra-photorealistic photo at high resolution.

Use the person from the uploaded reference photo exclusively inside the photo booth prints and preserve strict facial identity.

Set the capture in front of a shopping mall photo booth with the booth clearly visible in the background.
Set the moment as entering the year 2026 using only visual New Year cues without any visible text or numbers.
Avoid showing the person anywhere outside the printed photos.

Place exactly one physical 2x4 photo booth print strip centered in the frame and make the print filling most of the frame for close inspection.
Show the strip containing eight small frames of the same person wearing New Year-themed outfits and accessories, including variations with a festive 2026 crown, a party hat, a party accessory, a clean normal pose, hand gestures and playful goofy expressions.
Place a single hand holding the enlarged print strip clearly and naturally.

Set very close framing consistent with a phone-captured photo perspective and add slight handheld imperfection with shallow, natural depth behavior.

Use soft indoor lighting with gentle holiday warmth consistent with photo booth flash behavior and ambient mall lighting.

Preserve photographic realism with accurate paper texture, believable enlarged print scale, crisp ink detail, and mild smartphone-style compression.

Avoid all text, logos, UI elements, watermarks, overlays, phones, visible numbers, showing the person outside the prints, and any artificial effects.`
    },
    {
      id:'p173',
      title:'10.2. Wrapped Chair Prank Gift',
      desc:'To generate viral surprise gift images, use this prompt.',
      tags:["curated", "humor", "seasonal"],
      category:'10. Holidays & Humor',
      source:'aimikoda/prompts',
      prompt:`Use a standard household chair as the central subject, placed prominently in the room and wrapped as a Christmas gift while clearly preserving its recognizable chair silhouette.

Wrap the chair tightly with colorful Christmas-themed wrapping paper that follows the contours of the seat, backrest, and legs so the object is instantly identifiable from its shape, and secure it with a large decorative ribbon and oversized bow.

Set the scene inside a living room with a slightly unconventional, asymmetrical layout that feels lived-in rather than staged.

Place the wrapped chair on a textured area rug that partially overlaps wooden parquet flooring, grounding the object visually.

Arrange a decorated Christmas tree slightly off-center to the right near a corner or window, lit with warm lights and adorned with ornaments and golden flowers.

Place a television on a low console along an angled wall or recessed alcove in the left background, turned on and showing a woman presenting a TV program or news broadcast.

Include subtle architectural variation such as a visible doorway, hallway opening, or partial wall edge to break the room’s symmetry.

Scatter several real gift bags and wrapped packages in red and black casually around the rug, near the base of the chair and beneath the Christmas tree.

Set the camera at a slight diagonal angle at standing eye level, as if the photo was taken spontaneously upon entering the room.

Use warm indoor lighting combined with Christmas tree lights to create a cozy, cheerful holiday atmosphere.

Preserve a deliberately absurd, humorous, and prank-like tone by presenting an obviously recognizable chair as a serious Christmas gift.

Do not add any text, captions, logos, or UI elements.`
    },
    {
      id:'p174',
      title:'1.1. Hyper-Realistic Crowd Composition',
      desc:'*Handling complex compositions with multiple famous faces and specific lighting.*',
      tags:["composition", "crowd", "curated", "photorealism"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a hyper-realistic, ultra-sharp, full-color large-format image featuring a massive group of celebrities from different eras, all standing together in a single wide cinematic frame. The image must look like a perfectly photographed editorial cover with impeccable lighting, lifelike skin texture, micro-details of hair, pores, reflections, and fabric fibers.

GENERAL STYLE & MOOD: Photorealistic, 8k, shallow depth of field, soft natural fill light + strong golden rim light. High dynamic range, calibrated color grading. Skin tones perfectly accurate. Crisp fabric detail with individual threads visible. Balanced composition, slightly wide-angle lens (35mm), center-weighted. All celebrities interacting naturally, smiling, posing, or conversing. Minimal background noise, but with enough world-building to feel real.

THE ENVIRONMENT: A luxurious open-air rooftop terrace at sunset overlooking a modern city skyline. Elements include: Warm golden light wrapping around silhouettes. Polished marble.`
    },
    {
      id:'p175',
      title:'1.2. 2000s Mirror Selfie',
      desc:'*A structured JSON prompt to generate an authentic early-2000s aesthetic with flash photography and nostalgic elements.*',
      tags:["2000s", "curated", "photography", "photorealism", "retro", "selfie"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a 2000s Mirror Selfie of yourself using Gemini Nano Banana.

{
  "subject": {
    "description": "A young woman taking a mirror selfie with very long voluminous dark waves and soft wispy bangs",
    "age": "young adult",
    "expression": "confident and slightly playful",
    "hair": {
      "color": "dark",
      "style": "very long, voluminous waves with soft wispy bangs"
    },
    "clothing": {
      "top": {
        "type": "fitted cropped t-shirt",
        "color": "cream white",
        "details": "features a large cute anime-style cat face graphic with big blue eyes, whiskers, and a small pink mouth"
      }
    },
    "face": {
      "preserve_original": true,
      "makeup": "natural glam makeup with soft pink dewy blush and glossy red pouty lips"
    }
  },
  "accessories": {
    "earrings": {
      "type": "gold geometric hoop earrings"
    },
    "jewelry": {
      "waistchain": "silver waistchain"
    },
    "device": {
      "type": "smartphone",
      "details": "patterned case"
    }
  },
  "photography": {
    "camera_style": "early-2000s digital camera aesthetic",
    "lighting": "harsh super-flash with bright blown-out highlights but subject still visible",
    "angle": "mirror selfie",
    "shot_type": "tight selfie composition",
    "texture": "subtle grain, retro highlights, V6 realism, crisp details, soft shadows"
  },
  "background": {
    "setting": "nostalgic early-2000s bedroom",
    "wall_color": "pastel tones",
    "elements": [
      "chunky wooden dresser",
      "CD player",
      "posters of 2000s pop icons",
      "hanging beaded door curtain",
      "cluttered vanity with lip glosses"
    ],
    "atmosphere": "authentic 2000s nostalgic vibe",
    "lighting": "retro"
  }
}`
    },
    {
      id:'p176',
      title:'1.3. Victoria\'s Secret Style Photoshoot',
      desc:'*Great for creating high-glamour, backstage-style fashion photography with intricate details.*',
      tags:["animal", "curated", "editorial", "fashion", "glamour", "photography", "photorealism"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a glamorous photoshoot in the style of Victoria's Secret. A young woman attached in the uploaded reference image ( Keep the face of the person 100% accurate from the reference image ) stands almost sideways, slightly bent forward, during the final preparation for the show. Makeup artists apply lipstick to her (only her hands are visible in the frame). She is wearing a corset decorated with beaded embroidery and crystals with a short fluffy skirt, as well as large feather wings. The image has a "backstage" effect.

The background is a darkly lit room, probably under the podium. The main emphasis is on the girl's face and the details of her costume. Emphasize the expressiveness of the gaze and the luxurious look of the outfit. The photo is lit by a flash from the camera, which emphasizes the shine of the beads and crystals on the corset, as well as the girl's shiny skin. Victoria's Secret style: sensuality, luxury, glamour. Very detailed. Important: do not change the face.`
    },
    {
      id:'p177',
      title:'1.4. 1990s Camera Style Portrait',
      desc:'*Test the model\'s ability to replicate specific film textures, flash photography, and era-specific atmosphere.*',
      tags:["90s", "animal", "cinematic", "curated", "film", "photography", "photorealism", "portrait"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Without changing her original face, create a portrait of a beautiful young woman with porcelain-white skin, captured with a 1990s-style camera using a direct front flash. Her messy dark brown hair is tied up, posing with a calm yet playful smile. She wears a modern oversized cream sweater. The background is a dark white wall covered with aesthetic magazine posters and stickers, evoking a cozy bedroom or personal room atmosphere under dim lighting. The 35mm lens flash creates a nostalgic glow.`
    },
    {
      id:'p178',
      title:'1.5. One-Click Business Photo (Silicon Valley Style)',
      desc:'*Transforms casual photos into professional studio headshots using specific lens and lighting instructions.* <img width="200" src="https://github.com/user-attachments/assets/e41db56f-d928-400c-b21b-f8',
      tags:["curated", "photorealism", "portrait", "professional", "technology"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Keep the facial features of the person in the uploaded image exactly consistent . Dress them in a professional navy blue business suit with a white shirt, similar to the reference image. Background : Place the subject against a clean, solid dark gray studio photography backdrop . The background should have a subtle gradient , slightly lighter behind the subject and darker towards the edges (vignette effect). There should be no other objects. Photography Style : Shot on a Sony A7III with an 85mm f/1.4 lens , creating a flattering portrait compression. Lighting : Use a classic three-point lighting setup . The main key light should create soft, defining shadows on the face. A subtle rim light should separate the subject's shoulders and hair from the dark background. Crucial Details : Render natural skin texture with visible pores , not an airbrushed look. Add natural catchlights to the eyes . The fabric of the suit should show a subtle wool texture.Final image should be an ultra-realistic, 8k professional headshot.`
    },
    {
      id:'p179',
      title:'1.7. Professional Headshot Creator',
      desc:'*Create a professional profile photo from a selfie*',
      tags:["curated", "photorealism", "portrait", "professional", "selfie", "social"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`"A professional, high-resolution profile photo, maintaining the exact facial structure, identity, and key features of the person in the input image. The subject is framed from the chest up, with ample headroom. The person looks directly at the camera. They are styled for a professional photo studio shoot, wearing a premium smart casual blazer in a subtle charcoal gray. The background is a solid '#562226' neutral studio color. Shot from a high angle with bright and airy soft, diffused studio lighting, gently illuminating the face and creating a subtle catchlight in the eyes, conveying a sense of clarity. Captured on an 85mm f/1.8 lens with a shallow depth of field, exquisite focus on the eyes, and beautiful, soft bokeh. Observe crisp detail on the fabric texture of the blazer, individual strands of hair, and natural, realistic skin texture. The atmosphere exudes confidence, professionalism, and approachability. Clean and bright cinematic color grading with subtle warmth and balanced tones, ensuring a polished and contemporary feel."`
    },
    {
      id:'p180',
      title:'1.8. Hyperrealistic Anime Portrait in Spotlight',
      desc:'*A hyperrealistic anime-style portrait with dramatic lighting*',
      tags:["anime", "curated", "film", "photorealism", "portrait"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Generate a hyperrealistic realistic-anime portrait of a female character standing in a completely black background.
Lighting: use a **narrow beam spotlight** focused only on the center of the face. 
The edges of the light must be sharp and dramatic. 
All areas outside the spotlight should fall quickly into deep darkness 
(high falloff shadow), almost blending into the black background. 
Not soft lighting.
Hair: long dark hair with some strands falling over the face. The lower parts of the hair should fade into the shadows.
Pose: one hand raised gently to the lips in a shy, hesitant gesture. 
Eyes looking directly at the camera with a mysterious mood.
Clothing: black long-sleeve knit sweater; 
the sweater and body should mostly disappear into the darkness with minimal detail.
Overall tone: dark, moody, dramatic, mysterious. 
High-contrast only in the lit portion of the face. 
Everything outside the spotlight should be nearly invisible.`
    },
    {
      id:'p181',
      title:'1.9. Bathroom Mirror Selfie',
      desc:'*Create a candid mirror selfie with specific styling and composition*',
      tags:["curated", "photorealism", "retro", "selfie"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "subject": {
    "description": "Young woman taking bathroom mirror selfie, innocent doe eyes but the outfit tells another story",
    "mirror_rules": "facing mirror, hips slightly angled, close to mirror filling frame",
    "age": "early 20s",
    
    "expression": {
      "eyes": "big innocent doe eyes looking up through lashes, 'who me?' energy",
      "mouth": "soft pout, lips slightly parted, maybe tiny tongue touching corner",
      "brows": "soft, slightly raised, faux innocent",
      "overall": "angel face but devil body, the contrast is the whole point"
    },
    
    "hair": {
      "color": "platinum blonde",
      "style": "messy bun or claw clip, loose strands framing face, effortless"
    },
    
    "body": {
      "waist": "tiny",
      "ass": "round, full, fabric of shorts riding up and clinging between cheeks, every curve visible through thin athletic material",
      "thighs": "thick, soft, shorts barely containing"
    },
    
    "clothing": {
      "top": {
        "type": "ULTRA mini crop tee",
        "color": "yellow",
        "graphic": "single BANANA logo/graphic",
        "fit": "barely containing chest, fabric stretched tight, ends just below, shows full stomach"
      },
      "bottom": {
        "type": "tight tennis skort or athletic booty shorts",
        "color": "white",
        "material": "thin stretchy athletic fabric",
        "fit": "vacuum tight, riding up, clinging between cheeks, fabric creases visible, leaving nothing to imagination"
      }
    },
    
    "face": {
      "features": "pretty - big eyes, small nose, full lips",
      "makeup": "minimal, natural, lip gloss, no-makeup makeup"
    }
  },

  "accessories": {
    "headwear": {
      "type": "Goorin Bros cap",
      "details": "black with animal patch, worn backwards or tilted"
    },
    "headphones": {
      "type": "over-ear white headphones",
      "position": "around neck"
    },
    "device": {
      "type": "iPhone",
      "details": "visible in mirror, held at chest level"
    }
  },

  "photography": {
    "camera_style": "casual iPhone mirror selfie, NOT professional",
    "quality": "iPhone camera - good but not studio, realistic social media quality",
    "angle": "eye-level, straight on mirror",
    "shot_type": "3/4 body, close to mirror",
    "aspect_ratio": "9:16 vertical",
    "texture": "natural, slightly grainy iPhone look, not over-processed"
  },

  "background": {
    "setting": "regular apartment bathroom",
    "style": "normal NYC apartment bathroom, not luxury",
    "elements": [
      "white subway tile walls",
      "basic bathroom mirror with good lighting above",
      "simple white sink vanity",
      "toiletries visible - skincare bottles, toothbrush holder",
      "towel hanging on hook",
      "maybe shower curtain edge visible",
      "small plant on counter"
    ],
    "atmosphere": "real bathroom, lived-in, normal home",
    "lighting": "good vanity lighting above mirror - bright, even, flattering but not studio"
  },

  "vibe": {
    "energy": "innocent face + sinful body = the whole game",
    "mood": "just got ready for tennis but making content first, 'what?' expression while wearing basically nothing",
    "contrast": "doe eyes + ass eating the shorts = lethal",
    "caption_energy": "'tennis anyone? 🍌' or 'running late oops'"
  }
}`
    },
    {
      id:'p182',
      title:'1.10. Chalkboard Anime Art Documentation',
      desc:'*Photorealistic documentation of a chalkboard anime drawing*',
      tags:["anime", "curated", "illustration", "photorealism"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "intent": "Photorealistic documentation of a specific chalkboard art piece featuring a single anime character, capturing the ephemeral nature of the medium within a classroom context.",
  "frame": {
    "aspect_ratio": "4:3",
    "composition": "A centered medium shot focusing on the chalkboard mural. The composition includes the teacher's desk in the immediate foreground to provide scale, with the artwork of the single character dominating the background space.",
    "style_mode": "documentary_realism, texture-focused, ambient naturalism"
  },
  "subject": {
    "primary_subject": "A large-scale, intricate chalk drawing of Boa Hancock from 'One Piece' on a standard green classroom blackboard.",
    "visual_details": "The illustration depicts Boa Hancock in a commanding pose, positioned centrally on the board. She is drawn with her signature long, straight black hair with a hime cut, rendered using dense application of black chalk with white accents for sheen. Her expression is haughty and imperious, with detailed dark blue eyes. She is depicted forming a heart shape with her hands, referencing her 'Mero Mero Mellow' technique. She wears a revealing red blouse with purple geometric patterns and gold snake-shaped earrings, drawn with vibrant colored chalks.",
    "medium_texture": "The image preserves the dusty, matte quality of the chalk. Visible hatching and cross-hatching strokes create shading on her clothing and hair. Smudged areas on the green slate indicate where colors have been blended by hand.",
    "surrounding_elements": "To the right of the character, vertical Japanese text reading '海賊女帝' (Pirate Empress) is written in crisp white chalk."
  },
  "environment": {
    "location": "A standard Japanese school classroom.",
    "foreground_elements": "A wooden teacher's desk occupies the lower foreground. Scattered across the surface are a yellow box of colored chalks, loose sticks of red, white, and blue pastel chalk, and a dust-covered black felt eraser.",
    "background_elements": "The green chalkboard spans the width of the frame, bordered by a metallic chalk tray containing accumulated chalk dust. The wall above is a plain, off-white plaster, featuring a small mounted speaker box.",
    "atmosphere": "Quiet and academic, with a sense of stillness suggesting the room is currently unoccupied."
  },
  "lighting": {
    "type": "Diffuse ambient classroom lighting.",
    "quality": "Soft, nondirectional illumination provided by overhead fluorescent fixtures mixed with daylight from windows on the left. The light is even, preventing glare on the chalkboard surface while highlighting the texture of the chalk.",
    "color_temperature": "Neutral white, approximately 5000K, ensuring accurate color rendition of the red and purple chalks against the dark green board.",
    "direction": "Overhead and slightly frontal."
  },
  "camera": {
    "sensor_format": "35mm full-frame digital sensor.",
    "lens": "35mm prime lens.",
    "aperture": "f/5.6",
    "depth_of_field": "Moderate depth of field, keeping the chalkboard drawing in sharp focus while allowing the foreground desk elements to soften slightly.",
    "shutter_speed": "1/60s",
    "iso": "400",
    "camera_position": "Eye-level standing position, set back enough to frame the entire drawing and the desk."
  },
  "negative": {
    "content": "Multiple characters, Midoriya, Shigaraki, male characters, digital art overlay, vector graphics, paper texture, oil painting, messy composition, extreme low angle, fisheye lens.",
    "style": "No hyper-saturation, no soft focus filters, no heavy vignetting."
  }
}`
    },
    {
      id:'p183',
      title:'1.11. Portrait with Puppy in Snow',
      desc:'*Create a winter portrait with a puppy*',
      tags:["animal", "curated", "film", "photorealism", "portrait", "seasonal"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "image_description": {
    "subject": {
      "face": {
        "preserve_original": true,
        "reference_match": true,
        "description": "The girl's facial features, expression, and identity must remain exactly the same as the reference image."
      },
      "girl": {
        "age": "young",
        "hair": "long, wavy brown hair",
        "expression": "puckering her lips toward the camera",
        "clothing": "black hooded sweatshirt"
      },
      "puppy": {
        "type": "small white puppy",
        "eyes": "light blue",
        "expression": "calm, looking forward"
      }
    },
    "environment": {
      "setting": "outdoors in a winter scene",
      "elements": [
        "snow covering the ground",
        "bare trees in the background",
        "blurred silver car behind the girl"
      ],
      "sky": "clear light blue sky"
    },
    "mood": "cute, natural, winter outdoor moment",
    "camera_style": "soft depth of field, natural daylight, subtle winter tones"
  }
}`
    },
    {
      id:'p184',
      title:'1.12. Fisheye Movie Character Selfie',
      desc:'*A 360-degree selfie with movie characters*',
      tags:["character", "curated", "experimental", "illustration", "photography", "photorealism", "selfie"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`A film-like fisheye wide-angle 360-degree selfie without any camera or phone visible in the subject's hands. A real and exaggerated selfie of [person from uploaded image] with [CHARACTERS]. They are making faces at the camera.

(more detailed version)
A hyper-realistic fisheye wide-angle selfie, captured with a vintage 35mm fisheye lens creating heavy barrel distortion. without any camera or phone visible in the subject's hands.
Subject & Action: A close-up, distorted group photo featuring [Person From Uploaded Image] taking selfie with [CHARACTERS]. Everyone is making wild, exaggerated faces, squinting slightly from the flash.
Lighting & Texture: Harsh, direct on-camera flash lighting that creates hard shadows behind the subjects. Authentic film grain, slight motion blur on the edges, and chromatic aberration. It looks like a candid, amateur snapshot as if captured during a chaotic behind-the-scenes moment, not a studio photo.`
    },
    {
      id:'p185',
      title:'1.13. Character Consistency Selfie with Movie Character',
      desc:'*Take a selfie with a movie character while preserving your features*',
      tags:["character", "curated", "illustration", "photorealism", "selfie"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`"I'm taking a selfie with [movie character] on the set of [movie name].

Keep the person exactly as shown in the reference image with 100% identical facial features, bone structure, skin tone, facial expression, pose, and appearance. 1:1 aspect ratio, 4K detail."`
    },
    {
      id:'p186',
      title:'1.14. Museum Art Exhibition Selfie',
      desc:'*A commercial-grade photo with a classical oil painting*',
      tags:["advertising", "commercial", "cultural", "curated", "photorealism", "selfie"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`A commercial grade photograph of [uploaed reference image] posing inside a high-end museum exhibition space.
[the character Source: Based strictly on the uploaded reference image.
Behind them hangs a large, ornate framed classical oil painting.

The painting depicts the same person but rendered in a rich,
traditional oil painting style with thick, visible impasto brushstrokes, deep textures, and rich color palettes on canvas.
Gallery spotlights hit the textured paint surface.
Masterpiece, ultra-detailed, cinematic lighting, strong contrast, dramatic shadows, 8K UHD, highly detailed textures
, professional photography.`
    },
    {
      id:'p187',
      title:'1.15. Compact Camera Screen Display',
      desc:'*A photo displayed on a compact digital camera screen*',
      tags:["curated", "photorealism"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Use facial feature of attached photo. A close-up shot of a young woman displayed on the screen of a compact Canon digital camera. The camera body surrounds the image with its buttons, dials, and textured surface visible, including the FUNC/SET wheel, DISP button, and the "IMAGE STABILIZER" label along the side. The photo on the screen shows the woman indoors at night, illuminated by a bright built-in flash that creates sharp highlights on her face and hair. She has long dark hair falling across part of her face in loose strands, with a soft, slightly open-lip expression. The flash accentuates her features against a dim, cluttered kitchen background with appliances, shelves, and metallic surfaces softly blurred. The mood is candid, raw, nostalgic, and reminiscent of early 2000s digital camera snapshots. Colors are slightly muted with cool undertones, strong flash contrast, and natural grain from the display. No text, no logos inside the photo preview itself.

Scale ratio: 4:5 vertical

Camera: compact digital camera simulation
Lens: equivalent to 28–35mm
Aperture: f/2.8
ISO: 400
Shutter speed: 1/60 with flash
White balance: auto flash
Lighting: harsh direct flash on subject, ambient low light in the background
Color grading: nostalgic digital-camera tones, high contrast flash, subtle display grain, authentic screen glow.`
    },
    {
      id:'p188',
      title:'1.16. Magazine Cover Portrait',
      desc:'*Create a glossy magazine cover*',
      tags:["curated", "editorial", "film", "photorealism", "portrait", "typography"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`A photo of a glossy magazine cover, the cover has the large bold words "Nano Banana Pro". The text is in a serif font, black on white, and fills the view. No other text.

In front of the text there is a dynamic portrait of a person in green and banana yellow colored high-end fashion.

Put the issue number and today's date in the corner along with a barcode and a price. The magazine is on a white shelf against a wall.`
    },
    {
      id:'p189',
      title:'1.17. Luxury Product Photography',
      desc:'*Create a floating luxury product shot*',
      tags:["commercial", "curated", "luxury", "photography", "photorealism", "product"],
      category:'1. Photorealism & Aesthetics',
      source:'ZeroLu/awesome-nano',
      prompt:`Product:
[BRAND] [PRODUCT NAME] - [bottle shape], [label description], [liquid color]

Scene:
Luxury product shot floating on dark water with [flower type] in [colors] arranged around it.
[Lighting style - e.g., "golden hour glow" /
"bright fresh light"] creates reflections and ripples across the water.

Mood & Style:
[Adjectives - e.g., "ethereal and luxurious" /
"fresh and clean"], high-end commercial photography, [camera angle], shallow depth of field with soft bokeh background`
    },
    {
      id:'p190',
      title:'2.1. Star Wars "Where\'s Waldo"',
      desc:'*A complex prompt testing the model\'s ability to handle dense crowds and specific character recognition.*',
      tags:["character", "composition", "crowd", "curated", "illustration"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`A where is waldo image showing all Star Wars characters on Tatooine

First one to pull this off. First take. Even Waldo is there.`
    },
    {
      id:'p191',
      title:'2.2. Aging Through the Years',
      desc:'*Demonstrates temporal consistency and aging effects on a single subject.*',
      tags:["curated"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`"Generate the holiday photo of this person through the ages up to 80 years old"`
    },
    {
      id:'p192',
      title:'2.3. Recursive Visuals',
      desc:'*Demonstrates the model\'s ability to handle infinite loop logic (Droste effect).*',
      tags:["curated"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`recursive image of an orange cat sitting in an office chair holding up an iPad. On the iPad is the same cat in the same scene holding up the same iPad. Repeated on each iPad.`
    },
    {
      id:'p193',
      title:'2.4. Coordinate Visualization',
      desc:'*Generates a specific location and time based purely on latitude/longitude coordinates.*',
      tags:["animal", "curated"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`35.6586° N, 139.7454° E at 19:00`
    },
    {
      id:'p194',
      title:'2.5. Conceptual Visualization',
      desc:'*Interpretative rendering of how a specific group (engineers) visualizes a landmark.*',
      tags:["3d", "architecture", "city", "conceptual", "curated"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`How engineers see the San Francisco Bridge`
    },
    {
      id:'p195',
      title:'2.7. Multi-Subject Compositing',
      desc:'*Combines multiple input portraits into a single cohesive group photo with a specific expression.*',
      tags:["crowd", "curated", "film", "portrait"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`an office team photo, everyone making a silly face`
    },
    {
      id:'p196',
      title:'2.8. Whiteboard Marker Art',
      desc:'*Simulating specific drawing media (faded marker) on glass textures.*',
      tags:["3d", "curated", "illustration", "product"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a photo of vagabonds musashi praying drawn on a glass whiteboard in a slightly faded green marker`
    },
    {
      id:'p197',
      title:'2.9. Split View 3D Render - iPhone 17 Pro',
      desc:'*Create a 3D render with realistic left half and wireframe right half*',
      tags:["3d", "conceptual", "curated", "photorealism", "portrait"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a high-quality, realistic 3D render of exactly one instance of the object: [Orange iPhone 17 Pro].
The object must float freely in mid-air and be gently tilted and rotated in 3D space (not front-facing).
Use a soft, minimalist dark background in a clean 1080×1080 composition.
Left Half — Full Realism
The left half of the object should appear exactly as it looks in real life
— accurate materials, colors, textures, reflections, and proportions.
This half must be completely opaque with no transparency and no wireframe overlay.
No soft transition, no fading, no blending.
Right Half — Hard Cut Wireframe Interior
The right half must switch cleanly to a wireframe interior diagram.
The boundary between the two halves must be a perfectly vertical, perfectly sharp, crisp cut line, stretching straight from the top edge to the bottom edge of the object.
No diagonal edges, no curved slicing, no gradient.
The wireframe must use only two line colors:
Primary: white (≈80% of all lines)
Secondary: a color sampled from the dominant color of the realistic half (<20% of lines)
The wireframe lines must be thin, precise, aligned, and engineering-style.
Every wireframe component must perfectly match the geometry of the object.
Strict Single-Object Rule
Render only ONE object in the entire frame.  Render only one physical object.
Do NOT show a second object from any angle. Do NOT show a second object as a reflection, shadow, silhouette, outline, ghost image, or transparency. Do NOT show a second object for comparison or display purposes. Do NOT show both the front and the back separately.
Do NOT show an extra device behind, beside, underneath, or partially hidden.
Only one single object is allowed in the entire frame.
No duplicate objects, no mirrored back-and-front pairings, no reflections showing a second object.
The object must appear alone, floating.
Pose & Lighting:
Apply a natural, subtle tilt + rotation in 3D to make it look like a floating product visualization.
Use soft, neutral global illumination and no shadows under the object.
No extra props, no text, no labels unless explicitly requested.`
    },
    {
      id:'p198',
      title:'2.10. USA 3D Diorama with Landmarks',
      desc:'*Create an isometric 3D diorama of US landmarks*',
      tags:["3d", "architecture", "city", "curated", "diorama", "miniature"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a high-detail 3D isometric diorama of the entire United States, where each state is represented as its own miniature platform. Inside each state, place a stylized, small-scale 3D model of that state's most iconic landmark. Use the same visual style as a cute, polished 3D city diorama: soft pastel colors, clean materials, smooth rounded forms, gentle shadows, and subtle reflections. Each landmark should look like a miniature model, charming, simplified, but clearly recognizable. Arrange the states in accurate geographical layout, with consistent lighting and perspective. Include state labels and landmark labels in a clean, modern font, floating above or near each model.`
    },
    {
      id:'p199',
      title:'2.11. US Map Made of Famous Foods',
      desc:'*Create a map of US states made of famous foods*',
      tags:["cartography", "curated", "food", "map"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`create a map of the US where every state is made out of its most famous food (the states should actually look like they are made of the food, not a picture of the food). Check carefully to make sure each state is right.`
    },
    {
      id:'p200',
      title:'2.12. City\'s Tallest Buildings 3D Cartoon View',
      desc:'*Create a miniature 3D view of city\'s tallest buildings*',
      tags:["3d", "architecture", "cartoon", "city", "curated", "miniature"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Present a clear, side miniature 3D cartoon view of [YOUR CITY] tallest buildings. Use minimal textures with realistic materials and soft, lifelike lighting and shadows. Use a clean, minimalistic composition showing exactly the three tallest buildings in Sopot, arranged from LEFT to RIGHT in STRICT descending height order. The tallest must appear visibly tallest, the second must be clearly shorter than the first, and the third must be clearly shorter than the second.
All buildings must follow accurate relative proportions: if a building is taller in real life, it MUST be taller in the image by the same approximate ratio. No building may be visually stretched or compressed.
Each building should stand separately on a thin, simple ceramic base. Below each base, centered text should display:
Height in meters — semibold sans-serif, medium size
Year built — lighter-weight sans-serif, smaller size, directly beneath the height text
Provide consistent padding, spacing, leading, and kerning. Write "YOUR CITY NAME" centered above the buildings, using a medium-sized sans-serif font.
 No building top should overlap or touch the text above.Use accurate architectural proportions based on real-world references.Maintain consistent camera angle and identical scale for each building model.
No forced perspective. Use straight-on orthographic-style rendering. Do not exaggerate or stylize size differences beyond proportional accuracy.

Use a square 1080×1080 composition.Use a clean, neutral background. Ensure no extra objects are present.`
    },
    {
      id:'p201',
      title:'2.13. 3D Isometric Home Office Illustration',
      desc:'*Create a 3D isometric view of a home office*',
      tags:["3d", "curated", "frozen", "illustration"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Based on you know about me, generate a 3D isometric colored illustration of me working from home, filled with various interior details. The visual style should be rounded, polished, and playful. --ar 1:1

[Additional details: a bichon frise and 3 monitors]`
    },
    {
      id:'p202',
      title:'2.14. Emoji Combination - Banana with Sunglasses',
      desc:'*Combine emojis in a Google-style design*',
      tags:["3d", "curated", "illustration", "product"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`combine these emojis: 🍌 + 😎, on a white background as a google emoji design`
    },
    {
      id:'p203',
      title:'2.15. Torn Paper Art Effect',
      desc:'*Add torn paper effect to specific areas of an image*',
      tags:["curated"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`task: "edit-image: add widened torn-paper layered effect"

base_image:
  use_reference_image: true
  preserve_everything:
    - character identity
    - facial features and expression
    - hairstyle and anatomy
    - outfit design and colors
    - background, lighting, composition
    - overall art style

rules:
  - Only modify the torn-paper interior areas.
  - Do not change pose, anatomy, proportions, clothing details, shading, or scene elements.

effects:
  - effect: "torn-paper-reveal"
    placement: "across chest height"
    description:
      - Add a wide, natural horizontal tear across the chest area.
      - The torn interior uses the style defined in \`interior_style\`.

  - effect: "torn-paper-reveal"
    placement: "lower abdomen height"
    description:
      - Add a wide horizontal tear across the lower abdomen.
      - The torn interior uses the style defined in \`interior_style\`.

interior_style:
  mode: "line-art"

  style_settings:
    line-art:
      palette: "monochrome"
      line_quality: "clean, crisp"
      paper: "notebook paper with subtle ruled lines"

    sumi-e:
      palette: "black ink tones"
      brush_texture: "soft bleeding edges"
      paper: "plain textured paper"

    figure-render:
      material: "PVC-like"
      shading: "semi-realistic highlights"
      paper: "plain smooth surface"

    colored-pencil:
      stroke_texture: "visible pencil grain"
      palette: "soft layered hues"
      paper: "rough sketchbook paper"

    watercolor:
      palette: "soft transparent pigments"
      blending: "smooth bleeding"
      edges: "soft contours"
      paper: "watercolor paper texture"

    pencil-drawing:
      graphite_texture: "visible pencil grain"
      shading: "smooth gradients"
      line_quality: "mixed sharp and soft"
      tone: "gray-scale"
      paper: "notebook paper with faint ruled lines"`
    },
    {
      id:'p204',
      title:'2.16. Cinematic Keyframe Generator',
      desc:'*Generates cinematic keyframes and storyboards from a reference image*',
      tags:["cinematic", "curated", "storyboard"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`<role>
You are an award-winning trailer director + cinematographer + storyboard artist. Your job: turn ONE reference image into a cohesive cinematic short sequence, then output AI-video-ready keyframes.
</role>

<input>
User provides: one reference image (image).
</input>

<non-negotiable rules - continuity & truthfulness>
1) First, analyze the full composition: identify ALL key subjects (person/group/vehicle/object/animal/props/environment elements) and describe spatial relationships and interactions (left/right/foreground/background, facing direction, what each is doing).
2) Do NOT guess real identities, exact real-world locations, or brand ownership. Stick to visible facts. Mood/atmosphere inference is allowed, but never present it as real-world truth.
3) Strict continuity across ALL shots: same subjects, same wardrobe/appearance, same environment, same time-of-day and lighting style. Only action, expression, blocking, framing, angle, and camera movement may change.
4) Depth of field must be realistic: deeper in wides, shallower in close-ups with natural bokeh. Keep ONE consistent cinematic color grade across the entire sequence.
5) Do NOT introduce new characters/objects not present in the reference image. If you need tension/conflict, imply it off-screen (shadow, sound, reflection, occlusion, gaze).
</non-negotiable rules - continuity & truthfulness>

<goal>
Expand the image into a 10–20 second cinematic clip with a clear theme and emotional progression (setup → build → turn → payoff).
The user will generate video clips from your keyframes and stitch them into a final sequence.
</goal>

<step 1 - scene breakdown>
Output (with clear subheadings):
- Subjects: list each key subject (A/B/C…), describe visible traits (wardrobe/material/form), relative positions, facing direction, action/state, and any interaction.
- Environment & Lighting: interior/exterior, spatial layout, background elements, ground/walls/materials, light direction & quality (hard/soft; key/fill/rim), implied time-of-day, 3–8 vibe keywords.
- Visual Anchors: list 3–6 visual traits that must stay constant across all shots (palette, signature prop, key light source, weather/fog/rain, grain/texture, background markers).
</step 1 - scene breakdown>

<step 2 - theme & story>
From the image, propose:
- Theme: one sentence.
- Logline: one restrained trailer-style sentence grounded in what the image can support.
- Emotional Arc: 4 beats (setup/build/turn/payoff), one line each.
</step 2 - theme & story>

<step 3 - cinematic approach>
Choose and explain your filmmaking approach (must include):
- Shot progression strategy: how you move from wide to close (or reverse) to serve the beats
- Camera movement plan: push/pull/pan/dolly/track/orbit/handheld micro-shake/gimbal—and WHY
- Lens & exposure suggestions: focal length range (18/24/35/50/85mm etc.), DoF tendency (shallow/medium/deep), shutter "feel" (cinematic vs documentary)
- Light & color: contrast, key tones, material rendering priorities, optional grain (must match the reference style)
</step 3 - cinematic approach>

<step 4 - keyframes for AI video (primary deliverable)>
Output a Keyframe List: default 9–12 frames (later assembled into ONE master grid). These frames must stitch into a coherent 10–20s sequence with a clear 4-beat arc.
Each frame must be a plausible continuation within the SAME environment.
</step 4 - keyframes for AI video>

<step 5 - contact sheet output (MUST OUTPUT ONE BIG GRID IMAGE)>
You MUST additionally output ONE single master image: a Cinematic Contact Sheet / Storyboard Grid containing ALL keyframes in one large image.
- Default grid: 3x3. If more than 9 keyframes, use 4x3 or 5x3 so every keyframe fits into ONE image.
Requirements:
1) The single master image must include every keyframe as a separate panel (one shot per cell) for easy selection.
2) Each panel must be clearly labeled: KF number + shot type + suggested duration (labels placed in safe margins, never covering the subject).
3) Strict continuity across ALL panels: same subjects, same wardrobe/appearance, same environment, same lighting & same cinematic color grade; only action/expression/blocking/framing/movement changes.
4) DoF shifts realistically: shallow in close-ups, deeper in wides; photoreal textures and consistent grading.
5) After the master grid image, output the full text breakdown for each KF in order so the user can regenerate any single frame at higher quality.
</step 5 - contact sheet output>

<final output format>
Output in this order:
A) Scene Breakdown
B) Theme & Story
C) Cinematic Approach
D) Keyframes (KF# list)
E) ONE Master Contact Sheet Image (All KFs in one grid)
</final output format>`
    },
    {
      id:'p205',
      title:'2.17. Photo Book Style Magazine Cover with Coordinates',
      desc:'*A beautiful, photo book style magazine cover that fully utilizes the 9:16 aspect ratio with precise coordinates.*',
      tags:["curated", "editorial", "typography"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a beautiful, photo book style magazine cover that fully utilizes the 9:16 aspect ratio. Place the attached person at the precise coordinates of [latitude/longitude coordinate], seamlessly blending them into the scene as if they are sightseeing. Approach this task with the understanding that this is a critical page that will significantly influence visitor numbers. NEGATIVE: coordinate texts`
    },
    {
      id:'p206',
      title:'2.18. Floating Country Island Diorama',
      desc:'*A hyper-realistic digital poster of a floating miniature island shaped like a specific country.*',
      tags:["curated", "diorama", "miniature", "photorealism", "poster", "product", "typography"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Create an ultra-HD, hyper-realistic digital poster of a floating miniature island shaped like [COUNTRY], resting on white clouds in the sky. Blend iconic landmarks, natural landscapes (like forests, mountains, or beaches), and cultural elements unique to [COUNTRY]. Carve "[COUNTRY]" into the terrain using large white 3D letters. Add artistic details like birds (native to [COUNTRY]), cinematic lighting, vivid colors, aerial perspective, and sun reflections to enhance realism. Ultra-quality, 4K+ resolution. 1080x1080 format.`
    },
    {
      id:'p207',
      title:'2.19. Novel Scene 3D Poster',
      desc:'*A 3D poster design for novels or films with a miniature diorama effect.*',
      tags:["3d", "cinematic", "curated", "diorama", "film", "miniature", "poster", "typography"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Design a high-quality 3D poster for the movie/novel "Name to be added", first retrieving information about the movie/novel and famous scenes.

First, please use your knowledge base to retrieve information about this movie/novel and find a representative famous scene or core location. In the center of the image, construct this scene as a delicate axonometric 3D miniature model. The style should adopt DreamWorks Animation's delicate and soft rendering style. You need to reproduce the architectural details, character dynamics, and environmental atmosphere of that time, whether it's a storm or a quiet afternoon, naturally integrating into the model's lighting.

Regarding the background, do not use a simple pure white background. Please create a void environment with faint ink wash diffusion and flowing light mist around the model, with elegant colors, making the image look breathable and have depth, highlighting the preciousness of the central model.

Finally, for the bottom layout, please generate Chinese text. Center the novel title with a font that matches the original style. Below the title, automatically retrieve and typeset a classic description or quote about this scene from the original work, using an elegant serif font. The overall layout should be as精致balanced as a high-end museum exhibit label.`
    },
    {
      id:'p208',
      title:'2.20. Miniature Swimming Pool Diorama',
      desc:'*Surreal miniature-world collage poster featuring an oversized container as a swimming pool.*',
      tags:["collage", "curated", "diorama", "miniature", "poster", "surreal", "typography"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Surreal miniature-world collage poster featuring an oversized open blue Nivea-style tin repurposed as a whimsical swimming pool filled with glossy white "cream-water." 
Tiny sunbathers float in pastel swim rings, lounge on miniature deck chairs, and slide into the cream pool from a small blue slide.
The background is a soft, warm, lightly textured countertop surface subtle marble or matte stone, evenly lit, no heavy veins or visual noise. 
Keep the scene grounded with soft shadows beneath props and figures.
Surrounding the tin, keep the playful diorama elements: a small wooden deck with micro figures, pastel umbrellas, lounge chairs, and compact handcrafted accessories. Maintain the hovering pastel inflatables and plush cloud-like shapes, but ensure they feel like stylised decorative objects staged above the countertop 
Preserve the soft, high-saturation, toy-like aesthetic with plush textures, pastel gradients, and gentle lighting.`
    },
    {
      id:'p209',
      title:'2.21. Christmas Ornament 3D Character',
      desc:'*Transform yourself into a cute 3D character inside a Christmas ornament.*',
      tags:["3d", "character", "curated", "holiday", "illustration", "seasonal"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`A transparent Christmas bauble hanging by a red ribbon. Inside, a tiny diorama of the person from the reference reimagined as a cute 3d chibi character. He works at a mini futuristic AI desk with three glowing holo-screens showing neural networks and code. Add tiny plants, a mini coffee cup, soft desk lighting, floating UI icons, and snow-glitter at the base. Warm magical Christmas glow, cinematic reflections on glass, cozy high-end diorama aesthetic.

Cinematic lighting, shallow depth of field, soft reflections on the glass, ultra-polished materials, high detail, festive Christmas atmosphere. Whimsical, premium, and heartwarming.`
    },
    {
      id:'p210',
      title:'2.22. Ironing Out Wrinkles',
      desc:'*A surreal take on anti-aging with a miniature iron smoothing out wrinkles.*',
      tags:["curated", "miniature", "surreal"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "prompt": "An award-winning, hyper-realist macro photograph in the style of high-concept editorial art. The image features an extreme close-up of an elderly woman's eye and cheekbone. A miniature, toy-like white and blue clothes iron is positioned on her skin, actively pressing down and ironing out deep wrinkles and crow's feet, leaving a streak of unnaturally smooth skin in its wake. A thin white cord trails organically across the texture of her face. The image demands microscopic clarity, capturing mascara clumps, skin pores, and vellus hairs. The lighting is an unforgiving, high-contrast hard flash typical of avant-garde fashion photography.",
  "subject_details": {
    "main_subject": "Elderly woman's face (Macro topography of aging skin)",
    "object": "Miniature white and blue iron with realistic plastic textures and a trailing cord",
    "action": "The iron is creating a visible, flattened path through the wrinkles, visually simulating a cosmetic procedure",
    "features": [
      "Piercing brown eye",
      "Clumped mascara on aging lashes",
      "Deeply etched crow's feet contrast with 'ironed' smooth areas",
      "Micro-details: vellus hair, capillaries, makeup powder texture"
    ]
  },
  "artistic_style": {
    "genre": ["Contemporary Pop-Surrealism", "Satirical Editorial", "Visual Metaphor"],
    "aesthetic": ["Maurizio Cattelan style", "Vivid Color", "Commercial Kitsch", "Tactile Realism"],
    "lighting": "Studio Ring Flash, High-Key, Hard Shadows, Glossy finish",
    "composition": "Macro Photography, Rule of Thirds focus on the iron"
  },
  "technical_specs": {
    "camera": "Hasselblad H6D-100c",
    "lens": "Macro 120mm f/4",
    "film_stock": "Kodak Ektar 100",
    "resolution": "8k, Unsplash award winner"
  },
  "mood": "Provocative, satirical, disturbingly pristine, humorous yet critical"
}`
    },
    {
      id:'p211',
      title:'2.23. Perfectly Isometric Photography',
      desc:'*Create a captured photo that just happens to be perfectly isometric.*',
      tags:["curated", "photography", "photorealism"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`Make a photo that is perfectly isometric. It is not a miniature, it is a captured photo that just happened to be perfectly isometric. It is a photo of [subject].`
    },
    {
      id:'p212',
      title:'2.24. Extreme Wide Angle Phone Screen Replacement',
      desc:'*Edit photo with extreme wide angle and phone screen replacement.*',
      tags:["conceptual", "curated", "portrait"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "edit_type": "extreme_wide_angle_phone_edit",
  "source": {
    "_hint": "Base for editing the person, clothing, and atmosphere of the original image. No new characters allowed.",
    "mode": "EDIT",
    "preserve_elements": ["Person", "Face", "Hairstyle", "Clothing", "Environment style"],
    "change_rules": {
      "camera_angle": "Ultra-wide or fisheye lens (equivalent to 12-18mm)",
      "angle_options": [
        "Looking up from directly in front",
        "Looking down from directly in front", 
        "Extreme low angle",
        "High angle",
        "Tilted composition"
      ],
      "perspective_effect": "Nearby objects are exaggerated, distant objects become smaller",
      "body_parts_close_to_camera": "Bring 1-3 body parts extremely close to the camera",
      "body_part_options": [
        "Hands",
        "Feet/shoes",
        "Knees/thighs",
        "Face",
        "Shoulders/chest"
      ],
      "pose_variety": [
        "Extending one hand/leg toward the camera",
        "Squatting or lying on stomach halfway",
        "Sitting on the ground or an object",
        "Lying on the ground with legs pointed at camera",
        "Leaning body sharply toward the camera",
        "Twisting body for dynamic pose"
      ]
    },
    "phone_handling": {
      "allowed": true,
      "grip_options": [
        "One-handed", 
        "Two-handed",
        "Low angle",
        "High angle", 
        "Tilted",
        "Sideways",
        "Close to chest",
        "Close to waist",
        "Casual grip"
      ],
      "screen_replacement": {
        "target": "Only the smartphone screen portion displayed in the image",
        "source": "Second reference image",
        "fitting_rules": "Strictly match the screen shape, no stretching or compression",
        "interface_rules": "No icons, status bars, or app borders; only display content from original image"
      }
    },
    "environment_consistency": {
      "location": "Maintain the same location as the original image",
      "lighting": "Maintain direction and intensity",
      "extension_rules": "Maintain the same buildings, walls, road markings, colors, materials, and lighting style"
    },
    "global_restrictions": [
      "No new characters allowed",
      "No changes to age or gender expression of person", 
      "No clothing changes",
      "No changes to location type",
      "No text, logos, or watermarks added to image",
      "No illustration or anime style"
    ]
  }
}`
    },
    {
      id:'p213',
      title:'2.25. Shop Window Cartoon Reflection',
      desc:'*Create a photograph of a person next to a shop window showing their cartoon version.*',
      tags:["cartoon", "curated"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "PROMPT": "Create a bright, high-end street-fashion photograph of the woman from the reference image, keeping her face, hair, body & outfit exactly the same. She stands outside a luxury toy-shop window, gently touching the glass. Inside the window display, place a full-height cartoon-style doll designed to resemble her—same features, hair, and outfit—transformed into a cute, big-eyed, stylized animated character. Crisp lighting, premium street-fashion look, realistic reflections, face unchanged.",
  "settings": {
    "style": "high-end street fashion",
    "lighting": "crisp and bright",
    "environment": "outside luxury toy-shop window",
    "subject": "woman from reference image",
    "focus": ["face", "hair", "body", "outfit"],
    "additional_elements": [
      {
        "type": "doll",
        "style": "cartoon-style, big-eyed, stylized",
        "location": "inside window display",
        "resemblance": "exact features, hair, outfit of woman"
      }
    ],
    "reflections": "realistic",
    "photorealism": true
  }
}`
    },
    {
      id:'p214',
      title:'2.26. Urban 3D LED Display',
      desc:'*Create a scene with a large L-shaped 3D LED screen in an urban environment.*',
      tags:["3d", "curated"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`An enormous L-shaped glasses-free 3D LED screen situated prominently at a bustling urban intersection, designed in an iconic architectural style reminiscent of Shinjuku in Tokyo or Taikoo Li in Chengdu. The screen displays a captivating glasses-free 3D animation featuring [scene description]. The characters and objects possess striking depth and appear to break through the screen's boundaries, extending outward or floating vividly in mid-air. Under realistic daylight conditions, these elements cast lifelike shadows onto the screen's surface and surrounding buildings. Rich in intricate detail and vibrant colors, the animation seamlessly integrates with the urban setting and the bright sky overhead.

----
scene description: 
[An adorable giant kitten playfully paws at passing pedestrians, its fluffy paws and curious face extending realistically into the space around the screen.]`
    },
    {
      id:'p215',
      title:'2.27. Trans-Dimensional Liquid Pour',
      desc:'*A surreal scene where liquid from the physical world pours into a digital screen.*',
      tags:["curated", "surreal"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "meta": {
    "type": "Creative Brief",
    "genre": "Hyper-realistic Surrealism",
    "composition_style": "Composite Portrait",
    "aspect_ratio": "Portrait (implied by 'portrait' description)"
  },
  "scene_architecture": {
    "viewpoint": {
      "type": "Photographic",
      "angle": "High-angle / Looking down",
      "framing": "Tight on central subject"
    },
    "dimensional_hierarchy": {
      "rule": "Scale disparity for surreal effect",
      "dominant_element": "iPhone 17 Pro Max (Super-scaled)",
      "subordinate_elements": ["Blue Book (Miniature)", "Pen (Miniature)"]
    }
  },
  "realm_physical": {
    "description": "The real-world environment surrounding the device.",
    "environment": {
      "surface": "Wooden table",
      "texture_attributes": ["rich grain", "tactile", "worn"]
    },
    "lighting_global": {
      "source": "Natural light",
      "temperature": "Warm",
      "shadow_quality": "Soft, diffused, volumetric"
    },
    "active_agent": {
      "identity": "Human Hand (Real)",
      "action": "Pouring",
      "position": "Entering frame laterally"
    },
    "held_object": {
      "item": "Bottle",
      "state": "Chilled (visible condensation)",
      "branding": {
        "logo_text": "Decamin",
        "placement": "Visible on label"
      },
      "contents": {
        "substance": "Water",
        "color": "Light Green",
        "state": "Liquid flow"
      }
    },
    "static_props": [
      {
        "item": "Book",
        "color": "Blue",
        "scale_notes": "Significantly smaller than phone"
      },
      {
        "item": "Pen",
        "type": "Ballpoint/Ink",
        "scale_notes": "Significantly smaller than phone"
      }
    ]
  },
  "realm_digital": {
    "description": "The content displayed on the screen.",
    "container_device": {
      "model": "iPhone 17 Pro Max",
      "state": "Screen ON",
      "orientation": "Flat on physical surface"
    },
    "screen_content": {
      "subject_identity": "mqn (Reference ID)",
      "subject_scale": "Close-up (filling screen)",
      "expression": "Happy / Smiling",
      "attire": "Winter clothing (matching reference)",
      "setting": "Winter landscape / snowy backdrop",
      "held_object_digital": {
        "item": "Drinking Glass",
        "branding": {
          "logo_text": "Decamin",
          "visibility": "Clear"
        },
        "initial_state": "Empty (waiting for pour)"
      }
    }
  },
  "surreal_bridge_event": {
    "description": "The interaction connecting the physical and digital realms.",
    "action_type": "Trans-dimensional Fluid Dynamics",
    "source": "realm_physical.held_object.contents (Light Green Water)",
    "interaction_point": "realm_digital.container_device.screen_surface",
    "destination": "realm_digital.screen_content.held_object_digital (The Glass)",
    "physics_violation_rules": {
      "rule_1": "Liquid does not splash off the glass screen surface.",
      "rule_2": "Screen surface acts as a permeable membrane solely for this liquid.",
      "rule_3": "Physical liquid transitions seamlessly into digital representation upon contact."
    },
    "visual_details": ["Sharp liquid simulation", "No surface tension on screen glass", "Fluid physically filling digital cup"]
  },
  "rendering_specifications": {
    "visual_fidelity": "Hyper-realistic",
    "texture_focus": ["Sharp fluid details", "Glass pixels", "Wood grain", "Skin texture (hand and subject)"],
    "mood": "Cinematic, warm, magical",
    "resolution_target": "8K / Highly detailed"
  }
}`
    },
    {
      id:'p216',
      title:'2.28. Fisheye Matcha Girl',
      desc:'*Ultra wide fisheye photo of a girl sipping a matcha drink.*',
      tags:["curated", "experimental", "food", "photography"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "scene": {
    "environment": "sunny_boardwalk",
    "details": "wooden_planks, colorful_stalls, people_walking, distant_umbrellas",
    "lighting": "bright_midday_sun",
    "sky": "clear_blue"
  },
  "camera": {
    "lens": "ultra_wide_fisheye_12mm",
    "distance": "very_close_up",
    "distortion": "strong_exaggeration",
    "angle": "slightly_low_upward"
  },
  "subject": {
    "type": "young_person",
    "gender": "neutral",
    "expression": "curious_playful",
    "eyes": "large_due_to_lens_distortion",
    "pose": "leaning_forward_sipping_drink",
    "clothing": {
      "top": "bright_green_knit_sweater",
      "accessory": "chunky_blue_sunglasses"
    }
  },
  "drink": {
    "type": "iced_matcha_latte",
    "ice_cubes": "large_clear",
    "cup": "transparent_plastic",
    "straw": "green_white_spiral"
  },
  "effects": {
    "depth_of_field": "shallow_foreground_sharp_background_soft",
    "reflections": "glasses_show_boardwalk_and_people",
    "color_grade": "clean_natural"
  },
  "composition": {
    "focus": "face_extreme_closeup",
    "mood": "funny_intimate_casual",
    "background_elements": [
      "distant_people",
      "benches",
      "bright_shops"
    ]
  }
}`
    },
    {
      id:'p217',
      title:'2.29. Canon IXUS Aesthetic Portrait',
      desc:'*Create a portrait with Canon IXUS point-and-shoot camera aesthetic.*',
      tags:["curated", "film", "photorealism", "portrait"],
      category:'2. Creative Experiments',
      source:'ZeroLu/awesome-nano',
      prompt:`{
  "image_parameters": {
    "style": "Canon IXUS aesthetic",
    "type": "Point-and-shoot photography",
    "quality": "Hyper-realistic",
    "tone": "Sharp, direct",
    "lighting_and_atmosphere": "Realistic, flash-style/direct lighting"
  },
  "subject": {
    "constraints": {
      "facial_identity": "Match reference image exactly 100%",
      "face_edits": "None allowed"
    },
    "hair": {
      "style": "Long, natural, lightly messy layered look",
      "movement": "Blowing gently in the wind",
      "details": "Strands slightly covering part of face"
    },
    "makeup": {
      "cheeks_and_nose": "Soft pink blush with blurred effect",
      "lips": "Subtle pink-orange tinted outline"
    },
    "expression": [
      "Cute",
      "Naive",
      "Cheerful",
      "Slightly sexy/undone charm"
    ],
    "pose": {
      "body_position": "Half-sitting, half-standing",
      "action": "Flicking hair"
    },
    "clothing": {
      "top": "Black strapless top",
      "bottom": "Low-waisted jeans with a floating waistline",
      "neck": "Thin black fabric choker/wrap"
    },
    "accessories": [
      "Small pendant necklace",
      "Gold watch"
    ]
  },
  "environment": {
    "setting": "Modern pub",
    "foreground_props": [
      "Round table",
      "Bottle of liquor",
      "Glass of liquor"
    ]
  }
}`
    },
    {
      id:'p218',
      title:'3.1. Concept Visualization (Text to Infographic)',
      desc:'*Converts textual concepts into clear, educational vector illustrations.*',
      tags:["3d", "animal", "curated", "education", "illustration", "infographic", "product"],
      category:'3. Education & Knowledge',
      source:'ZeroLu/awesome-nano',
      prompt:`Create an educational infographic explaining [Photosynthesis] . Visual Elements : Illustrate the key components: The Sun, a green Plant, Water (H2O) entering roots, Carbon Dioxide (CO2) entering leaves, and Oxygen (O2) being released. Style : Clean, flat vector illustration suitable for a high school science textbook. Use arrows to show the flow of energy and matter. Labels : Label each element clearly in English .`
    },
    {
      id:'p219',
      title:'3.2. Kids\' Crayon Travel Journal Illustrator',
      desc:'*Generate a childlike travel journal illustration for a city*',
      tags:["animal", "architecture", "city", "curated", "education", "illustration", "infographic", "travel"],
      category:'3. Education & Knowledge',
      source:'ZeroLu/awesome-nano',
      prompt:`--- Prompt ---

Please create a vibrant, child-like crayon-style vertical (9:16) illustration titled "{City Name} Travel Journal."  
The artwork should look as if it were drawn by a curious child using colorful crayons, featuring a soft, warm light-toned background (such as pale yellow), combined with bright reds, blues, greens, and other cheerful colors to create a cozy, playful travel atmosphere.

I. Main Scene: Travel-Journal Style Route Map

In the center of the illustration, draw a "winding, zigzagging travel route" with arrows and dotted lines connecting multiple locations.  
The route should automatically generate recommended attractions based on {Number of Days}:

Example structure (auto-filled with {City Name}-related content):

- "Stop 1: {Attraction 1 + short fun description}"
- "Stop 2: {Attraction 2 + short fun description}"
- "Stop 3: {Attraction 3 + short fun description}"
- …
- "Final Stop: {Local signature food or souvenir + warm closing remark}"

Rules:
- If no number of days is provided, default to a 1-day highlight itinerary.

II. Surrounding Playful Elements (Auto-adapt to the City)

Add many cute doodles and child-like decorative elements around the route, such as:

1. Adorable travel characters
   - A child holding a local snack  
   - A little adventurer with a backpack

2. Q-style hand-drawn iconic landmarks
   - "{City Landmark 1}"
   - "{City Landmark 2}"
   - "{City Landmark 3}"

3. Funny signboards
   - "Don't get lost!"
   - "Crowds ahead!"
   - "Yummy food this way!"  
   (Auto-adjust contextually for the city)

4. Sticker-style short phrases
   - "{City Name} travel memories unlocked!"
   - "{City Name} food adventure!"
   - "Where to next?"

5. Cute icons of local foods
   - "{Local Food 1}"
   - "{Local Food 2}"
   - "{Local Food 3}"

6. Childlike exclamations
   - "I didn't know {City Name} was so fun!"
   - "I want to come again!"

III. Overall Art Style Requirements

- Crayon / children's hand-drawn travel diary style  
- Bright, warm, colorful palette  
- Cozy but full and lively composition  
- Emphasize the joy of exploring  
- All text should be in a cute handwritten font  
- Make the entire page feel like a young child's fun travel-journal entry`
    },
    {
      id:'p220',
      title:'3.3. Financial Sankey Diagram Visualization',
      desc:'*Create a professional financial Sankey diagram*',
      tags:["animal", "curated", "diagram", "education", "infographic", "technical"],
      category:'3. Education & Knowledge',
      source:'ZeroLu/awesome-nano',
      prompt:`[Subject]: A professional financial Sankey diagram visualizing the Income Statement of a major corporation, in the style of "App Economy Insights" and US corporate financial reports.[Visual Style]: High-fidelity vector infographic, clean minimalist aesthetic, flat design. The background is a clean, very light grey or off-white.[Color Strategy - CRITICAL]:
Analyze the [Insert Brand Name Here] logo. Extract its primary brand color (e.g., if Nvidia use neon green, if Meta use blue, if Tesla use red).
Use this primary color as the dominant theme for the main revenue flows and profit blocks.
Create a harmonious color palette based on this primary color: use saturated shades for the vertical nodes (bars) and semi-transparent, lighter opacity gradients for the flowing paths to ensure a cohesive and professional look. Avoid clashing colors.[Composition & Structure]:
Flow: A horizontal flow from Left (Revenue Sources) to Right (Net Profit).
Texture: The connecting paths (flows) must appear "silky smooth" with elegant Bezier curves, looking like liquid ribbons, not jagged lines.
Iconography: On the left side (Revenue sources), include specific, minimalist flat vector icons representing the business segments (e.g., a car icon for automotive, a cloud icon for services, a chip icon for hardware).
Branding: Place the official [Insert Brand Name Here] logo clearly at the top center or near the central revenue bar.[Details]: High resolution, 4k, sharp typography (sans-serif), professional data visualization layout. The chart clearly distinguishes between Revenue, Gross Profit, Operating Expenses, and Net Profit.`
    },
    {
      id:'p221',
      title:'4.1. Virtual Model Try-On',
      desc:'*Dresses a model in a specific garment while preserving fabric texture and lighting integration.* <img width="150" src="https://github.com/user-attachments/assets/4ae658d3-4fdd-44c5-a1ab-9d44d04dd792"',
      tags:["curated", "ecommerce", "product"],
      category:'4. E-commerce & Virtual Studio',
      source:'ZeroLu/awesome-nano',
      prompt:`Using Image 1 (the garment) and Image 2 (the model), create a hyper-realistic full-body fashion photo where the model is wearing the garment. Crucial Fit Details : The [T-shirt/Jacket] must drape naturally on the model's body, conforming to their posture and creating realistic folds and wrinkles . High-Fidelity Preservation : Preserve the original fabric texture, color, and any logos from Image 1 with extreme accuracy. Seamless Integration : Blend the garment into Image 2 by perfectly matching the ambient lighting, color temperature, and shadow direction . Photography Style : Clean e-commerce lookbook, shot on a Canon EOS R5 with a 50mm f/1.8 lens for a natural, professional look.`
    },
    {
      id:'p222',
      title:'4.2. Professional Product Photography',
      desc:'*Isolates products from messy backgrounds and places them in a high-end commercial studio setting.*',
      tags:["advertising", "commercial", "curated", "ecommerce", "photography", "photorealism", "product"],
      category:'4. E-commerce & Virtual Studio',
      source:'ZeroLu/awesome-nano',
      prompt:`Identify the main product in the uploaded photo (automatically removing any hands holding it or messy background details). Recreate it as a premium e-commerce product shot . Subject Isolation : Cleanly extract the product, completely removing any fingers, hands, or clutter . Background : Place the product on a pure white studio background (RGB 255, 255, 255) with a subtle, natural contact shadow at the base to ground it. Lighting : Use soft, commercial studio lighting to highlight the product's texture and material. Ensure even illumination with no harsh glare. Retouching : Automatically fix any lens distortion, improve sharpness, and color-correct to make the product look brand new and professional .`
    },
    {
      id:'p223',
      title:'4.3. 3D Chibi-Style Miniature Brand Store',
      desc:'*Create a miniature 3D store for a brand*',
      tags:["3d", "curated", "ecommerce", "miniature", "product"],
      category:'4. E-commerce & Virtual Studio',
      source:'ZeroLu/awesome-nano',
      prompt:`3D chibi-style miniature concept store of {Brand Name}, creatively designed with an exterior inspired by the brand's most iconic product or packaging (such as a giant {brand's core product, e.g., chicken bucket/hamburger/donut/roast duck}). The store features two floors with large glass windows clearly showcasing the cozy and finely decorated interior: {brand's primary color}-themed decor, warm lighting, and busy staff dressed in outfits matching the brand. Adorable tiny figures stroll or sit along the street, surrounded by benches, street lamps, and potted plants, creating a charming urban scene. Rendered in a miniature cityscape style using Cinema 4D, with a blind-box toy aesthetic, rich in details and realism, and bathed in soft lighting that evokes a relaxing afternoon atmosphere. --ar 2:3`
    },
    {
      id:'p224',
      title:'4.4. Room Furnishing Visualization',
      desc:'*Visualize how furniture would look in an empty room*',
      tags:["curated", "ecommerce", "product"],
      category:'4. E-commerce & Virtual Studio',
      source:'ZeroLu/awesome-nano',
      prompt:`Show me how this room would look with furniture in it`
    },
    {
      id:'p225',
      title:'5.1. Hand-drawn Flowchart to Corporate Charts',
      desc:'*Converts whiteboard sketches into clear, "McKinsey-style" vector presentations.*',
      tags:["3d", "curated", "presentation", "product", "professional"],
      category:'5. Workplace & Productivity',
      source:'ZeroLu/awesome-nano',
      prompt:`Convert this hand-drawn whiteboard sketch into a professional corporate flowchart suitable for a business presentation. Style Guide : Use a minimalist 'McKinsey-style' aesthetic : clean lines, ample whitespace, and a sophisticated blue-and-gray color palette. Structure : Automatically align all boxes and diamonds to a strict grid . Connect them with straight, orthogonal arrows (90-degree angles only, no curvy lines). Text : Transcribe the handwritten labels into a clear, bold Sans-Serif font (like Arial or Roboto). Output : High-resolution vector-style image on a pure white background.`
    },
    {
      id:'p226',
      title:'5.2. UI Hand-drawn Sketch to High-Fidelity Prototype',
      desc:'*Transforms wireframe scribbles into realistic mobile app mockups.*',
      tags:["curated", "photorealism", "product", "professional"],
      category:'5. Workplace & Productivity',
      source:'ZeroLu/awesome-nano',
      prompt:`Transform this rough wireframe sketch into a high-fidelity UI design mockups for a mobile app. Design System : Apply a modern, clean aesthetics similar to iOS 18 or Material Design 3 . Use rounded corners, soft drop shadows, and a vibrant primary color. Components : Intelligently interpret the sketch: turn scribbles into high-quality placeholder images , convert rough rectangles into proper buttons with gradients , and turn lines into realistic text blocks . Layout : Ensure perfect padding and consistent spacing between elements. Context : Place the design inside a realistic iPhone 16 frame mockups.`
    },
    {
      id:'p227',
      title:'5.3. Magazine Layout Generator',
      desc:'*Perfect for visualizing articles in print format with complex typography.*',
      tags:["curated", "editorial", "product", "professional", "typography"],
      category:'5. Workplace & Productivity',
      source:'ZeroLu/awesome-nano',
      prompt:`Put this whole text, verbatim, into a photo of a glossy magazine article on a desk, with photos, beautiful typography design, pull quotes and brave formatting. The text: [...the unformatted article]`
    },
    {
      id:'p228',
      title:'6.1. Composition Rescue (Smart Outpainting)',
      desc:'*Expands image ratios (e.g., to 16:9) by intelligently generating matching scenery.*',
      tags:["curated", "photo", "restoration"],
      category:'6. Photo Editing & Restoration',
      source:'ZeroLu/awesome-nano',
      prompt:`Zoom out and expand this image to a 16:9 aspect ratio (computer wallpaper size). Context Awareness : Seamlessly extend the scenery on both left and right sides. Match the original lighting, weather, and texture perfectly. Logical Completion : If there are cut-off objects (like a shoulder, a tree branch, or a building edge) on the borders, complete them naturally based on logical inference. Do not distort the original center image.`
    },
    {
      id:'p229',
      title:'6.2. Smart Crowd Removal',
      desc:'*Removes unwanted people from backgrounds and fills the space with logical textures.*',
      tags:["composition", "crowd", "curated", "photo", "restoration"],
      category:'6. Photo Editing & Restoration',
      source:'ZeroLu/awesome-nano',
      prompt:`Remove all the tourists/people in the background behind the main subject. Intelligent Fill : Replace them with realistic background elements that logically fit the scene (e.g., extend the cobblestone pavement, empty park benches, or grass textures). Consistency : Ensure no blurry artifacts or 'smudges' remain. The filled area must have the same grain, focus depth, and lighting as the rest of the photo.`
    },
    {
      id:'p230',
      title:'6.3. Face Detection CCTV Simulation',
      desc:'*Create a high angle CCTV surveillance shot with face detection*',
      tags:["curated", "photo", "restoration"],
      category:'6. Photo Editing & Restoration',
      source:'ZeroLu/awesome-nano',
      prompt:`Create a high angle CCTV surveillance shot using the uploaded image as the source. Detect every visible person in the image and automatically draw a white rectangular bounding box around each face. For the most prominent person, add a large zoom in inset: a sharp, enhanced close-up of their face displayed in a floating rectangular frame connected with a thin white line.Keep the main image slightly noisy and security camera like (soft grain, slight distortion, muted colors), while the zoom in face box should be clearer, brighter, and more detailed. No text, no timestamps, no overlays except the boxes and connecting line. Maintain the original scene layout, angle, and environment of the uploaded image.`
    },
    {
      id:'p231',
      title:'7.1. Hard Furnishing Preview (Floor Plan to Design)',
      desc:'*Generates a complete design presentation board including perspective views and 3D floor plans from a simple 2D map.* <img width="400" src="https://github.com/user-attachments/assets/5f5e4629-3ebe-45c',
      tags:["3d", "architecture", "cartography", "curated", "interior", "map", "presentation", "professional"],
      category:'7. Interior Design',
      source:'ZeroLu/awesome-nano',
      prompt:`Based on the uploaded 2D floor plan, generate a professional interior design presentation board in a single image. Layout : The final image should be a collage with one large main image at the top, and several smaller images below it. Content of Each Panel :
1. Main Image (Top) : A wide-angle perspective view of the main living area , showing the connection between the living room and dining area.
2. Small Image (Bottom Left) : A view of the Master Bedroom , focusing on the bed and window.
3. Small Image (Bottom Middle) : A view of the Home Office / Study room .
4. Small Image (Bottom Right) : A 3D top-down floor plan view showing the furniture layout. Overall Style : Apply a consistent Modern Minimalist style with warm oak wood flooring and off-white walls across ALL images. Quality : Photorealistic rendering, soft natural lighting.`
    },
    {
      id:'p232',
      title:'8.1. Viral Cover Image (Youtube/Douyin/TikTok)',
      desc:'*Creates engaging thumbnails with text overlays, exaggerated expressions, and bright graphics.* <img width="200" src="https://github.com/user-attachments/assets/f5c790f9-f0e2-4c4d-b274-bf4bcd1c4764" a',
      tags:["curated", "editorial", "marketing", "social"],
      category:'8. Social Media & Marketing',
      source:'ZeroLu/awesome-nano',
      prompt:`Design a viral video thumbnail using the person from Image 1. Face Consistency : Keep the person's facial features exactly the same as Image 1 , but change their expression to look excited and surprised . Action : Pose the person on the left side, pointing their finger towards the right side of the frame. Subject : On the right side, place a high-quality image of [a delicious avocado toast]. Graphics : Add a bold yellow arrow connecting the person's finger to the toast. Text : Overlay massive, pop-style text in the middle: '3分钟搞定!' (Done in 3 mins!). Use a thick white outline and drop shadow. Background : A blurred, bright kitchen background. High saturation and contrast.`
    },
    {
      id:'p233',
      title:'8.2. Commercial Promotional Poster',
      desc:'*Designs professional sales posters with integrated text and high-quality product photography.*',
      tags:["advertising", "commercial", "curated", "marketing", "photography", "photorealism", "poster", "product"],
      category:'8. Social Media & Marketing',
      source:'ZeroLu/awesome-nano',
      prompt:`Design a professional promotional poster for a [Coffee Shop]. Composition : A cinematic close-up of a steaming cup of cappuccino on a rustic wooden table, autumn leaves in the background (cozy atmosphere). Text Integration :
1. Main Title : 'Autumn Special' written in elegant, gold serif typography at the top.
2. Offer : 'Buy One Get One Free' clearly displayed in a modern badge or sticker style on the side.
3. Footer : 'Limited Time Only' in small, clean text at the bottom. Quality : Ensure all text is perfectly spelled, centered, and integrated into the image's depth of field.`
    },
    {
      id:'p234',
      title:'9.1. Physical Store/Travel Translation',
      desc:'*Translates menus or signs while preserving the original surface texture (wall, paper, grease).* <img width="400" src="https://github.com/user-attachments/assets/9920f5ad-c6bb-4375-9255-a80f8568b0a9"',
      tags:["curated", "education", "lifestyle", "travel"],
      category:'9. Daily Life & Translation',
      source:'ZeroLu/awesome-nano',
      prompt:`Translate the Chinese dish names on the wall menu into English for foreign tourists. Texture Preservation : Crucial! Maintain the original aged, greasy, and textured look of the wall/paper. The new English text should look like it was written/printed on the same surface, with slight fading or wear to match. Currency : Keep the '¥' symbol and price numbers exactly as they are ; do not convert currency. Layout : align the English translations next to or replacing the Chinese characters naturally.`
    },
    {
      id:'p235',
      title:'9.2. Digital Content Localization (Comics/Memes)',
      desc:'*Translates comics or memes by scrubbing text bubbles and replacing content with matching fonts.*',
      tags:["comic", "curated", "education", "humor", "lifestyle"],
      category:'9. Daily Life & Translation',
      source:'ZeroLu/awesome-nano',
      prompt:`Translate the text in the speech bubbles/captions from [Japanese/English] to [Chinese]. Seamless Cleaning : Erase the original text and perfectly fill the background (e.g., the white speech bubble or the colored image background). Style Matching : Render the translated Chinese text using a casual, handwritten-style font (or bold impact font for memes) that matches the aesthetic of the original image. Fit : Ensure the text fits naturally within the bubbles without overcrowding.`
    },
    {
      id:'p236',
      title:'10.1. 3D Blind Box Style Avatar',
      desc:'*Converts portraits into cute, C4D-style "Pop Mart" toy characters.* <img width="200" src="https://github.com/user-attachments/assets/c6c03353-f00a-4042-ba74-726b46c67541" alt="Original" />',
      tags:["3d", "character", "curated", "film", "illustration", "packaging", "portrait", "product"],
      category:'10. Social Networking & Avatars',
      source:'ZeroLu/awesome-nano',
      prompt:`Transform the person in the uploaded photo into a cute 3D Pop Mart style blind box character . Likeness : Keep key features recognizable: [hair color, glasses, hairstyle]. Style : C4D rendering, occlusion render, cute Q-version , soft studio lighting, pastel colors. Background : A simple, solid matte color background (e.g., soft blue). Detail : The character should have a smooth, plastic toy texture with a slight glossy finish. Facing forward, friendly expression.`
    },
    {
      id:'p237',
      title:'10.2. Pet Meme Creation',
      desc:'*Turns pet photos into minimalist, hand-drawn funny stickers.* <img width="400" src="https://github.com/user-attachments/assets/ed677fde-b407-4798-895d-e89c8534bd32" alt="Pet" />',
      tags:["curated", "humor", "minimalist", "portrait", "social"],
      category:'10. Social Networking & Avatars',
      source:'ZeroLu/awesome-nano',
      prompt:`Turn this photo of my [cat/dog] into a funny hand-drawn WeChat sticker . Style : Minimalist ugly-cute line drawing (doodle style). White background. Expression : Exaggerate the animal's expression to look extremely shocked/judgemental/lazy (based on photo). Accessories : Add cute little doodles like sweat drops, question marks, or sparkles around the head. Text : Add handwritten text at the bottom: 'So Dumb'. Ensure the text style is messy and funny.`
    },
    {
      id:'p238',
      title:'10.3. Y2K Scrapbook Poster with Multiple Poses',
      desc:'*Create a Y2K-style scrapbook poster with multiple poses*',
      tags:["curated", "portrait", "poster", "social", "typography"],
      category:'10. Social Networking & Avatars',
      source:'ZeroLu/awesome-nano',
      prompt:`facelock_identity": "true",
"accuracy": "100%",
scene"Colorful Y2K scrapbook poster aesthetic, vibrant stickers, multiple subjects wearing the same outfit and hairstyle with different poses and cutouts, colorful strokes and lines, frameless collage style. Includes: close-up shot with heart-shape fingers, full-body squatting pose supporting chin while holding a white polaroid camera, mid-shot touching cheek while blowing pink bubblegum, mid-shot smiling elegantly while holding a cat ,seated elegantly with one eye winking and peace sign, and mid-shot holding daisy flowers. Holographic textures, pastel gradients, glitter accents, playful doodles, magazine cut-out graphics, chaotic yet balanced layout, extremely artistic and visually engaging",
main_subject": {
"description": "A young Y2K-styled woman as the main focus in the center of the scrapbook collage.",
"style_pose": "Playful and confident Y2K pose — slight side hip pop, one hand holding a lens-flare keychain, face toward the camera with a cute-cool expression, slight pout, candid early-2000s photo vibe."
outfit": {
"top": "Cropped oversized sweater in pastel color with embroidered patches",
"bottom": "pastel skirt with a white belt",
"socks": "White ankle socks with colorful pastel stripes",
"shoes": "white sneakers",
"accessories": [
"Colorful plastic bracelets",
"Chunky colorful rings",
"Sparkling belly chain",
"hairstyle": 
"type": "Y2K half-up half-down",
"details": "Pastel flowers clips,thin front tendrils, wavy dark brown hair with bubblegum-pink tint on the lower strands, iconic early-2000s look."
additional_visuals": 
"Heart, star, and butterfly stickers",
"Retro sparkles",
"Polaroid frames",
"Neon outlines",
"Doodle borders",
"Magazine cutout texts: 'SO CUTE!', '199X!', 'GIRL VIBES'",
"Pastel lighting",
"Glossy dreamy retro glow",
"Ultra-aesthetic scrapbook layout"
photography_rendering": {
"color_grading": "Cinematic neon Y2K",
"lighting": "Soft flash lighting","skin_texture": "Smooth glossy finish",
"rendering": "High-detail hyperrealistic Y2K scrapbook tone",
"quality": "8K",
"composition": "Perfectly balanced and artistic"
negative_prompt": "no realism that breaks Y2K aesthetic, no modern 2020s clothing, no messy composition, no blurry face, no distorted hands, no extra limbs, no face warping, no low resolution, no grain, no muted colors, no watermark, no AI artifacts"`
    },
    {
      id:'p239',
      title:'10.4. Japanese High School Student Snap Photo',
      desc:'*Create a snapshot in the style of a Japanese high school student*',
      tags:["curated", "japanese", "portrait", "social"],
      category:'10. Social Networking & Avatars',
      source:'ZeroLu/awesome-nano',
      prompt:`A daily snapshot taken with a low-quality disposable camera. A clumsy photo taken by a Japanese high school student. (Aspect ratio 3:2 is recommended)`
    },
    {
      id:'p240',
      title:'10.5. AI Skin Analysis and Skincare Routine',
      desc:'*Analyze skin and provide routine recommendations*',
      tags:["curated", "portrait", "social"],
      category:'10. Social Networking & Avatars',
      source:'ZeroLu/awesome-nano',
      prompt:`You are a professional skin analyst and skincare expert.
The user uploads a close-up photo of their face and may add short notes (age, allergies, current routine, pregnancy, etc.). Use ONLY what you see in the image plus the user text.
 1. Carefully inspect the skin: shine, pores, redness, blemishes, spots, texture, flaking, fine lines, dark circles, etc.
 2. Decide the main skin type: oily, dry, normal, combination, or sensitive.
 3. Identify visible issues: acne/breakouts, blackheads/whiteheads, post-acne marks, hyperpigmentation, redness, enlarged pores, uneven texture, dehydration, fine lines, dark circles, puffiness, etc.

RESPONSE FORMAT (very important)

Your answer must be plain text in this exact structure:
 1. First, write 3–6 short lines describing the skin and problems, for example:

 • overall skin type and how you know
 • where the main issues appear (forehead, cheeks, nose, chin, jawline, under-eyes)
 • how severe they look (mild / moderate / severe).

 2. On a new line, write the word in caps:
SKIN ROUTINE
 3. Under SKIN ROUTINE, give at least 5 numbered steps (1., 2., 3., …).
Each step must include:

 • what to do (e.g. "Cleanser", "Treatment serum", "Moisturizer", "Sunscreen", "Night treatment"),
 • product TYPE and key INGREDIENTS to look for (no brand names),
 • when to use it (AM, PM, or both) and how often,
 • 1 short practical instruction (how to apply, how much, any caution).

Focus on over-the-counter products only (no prescription or medical diagnosis).
If acne or irritation looks very severe or infected, clearly but kindly suggest visiting a dermatologist.
Keep the tone supportive, simple and clear.`
    }
  ];

  const PROMPT_IMAGES = {
    p1:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case1/output.jpg',
    p3:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case3/output.jpg',
    p5:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case5/output.jpg',
    p6:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case6/output.jpg',
    p10:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case10/output.jpg',
    p11:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case11/output.jpg',
    p12:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case12/output.jpg',
    p13:'https://raw.githubusercontent.com/PicoTrex/Awesome-Nano-Banana-images/main/images/pro_case13/output.jpg',
    p141:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/name-meaning-portrait-01.jpg',
    p142:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/fragmented-identity-prints-01.jpg',
    p143:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/zipped-lips-portrait-01.jpg',
    p144:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/primal-archetype-portrait-01.jpg',
    p145:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/anime-eyes-through-phone-01.jpg',
    p148:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/make-anything-bloom-01.jpg',
    p149:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/frozen-moment-in-ice-01.jpg',
    p150:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/cartoon-accessory-add-on-01.jpg',
    p151:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/life-size-collectible-box-01.jpg',
    p152:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/flat-lay-outfit-builder-01.jpg',
    p153:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/clearshell-product-transformation-01.jpg',
    p154:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/impact-splash-ad-01.jpg',
    p155:'https://raw.githubusercontent.com/aimikoda/nano-banana-pro-prompts/main/images/mood-poster-generator-01.jpg',
    p174:'https://github.com/user-attachments/assets/3a056a8d-904e-4b3e-b0d2-b5122758b7f5',
    p175:'https://github.com/user-attachments/assets/b71755dc-ff33-4872-8161-3f5066e0ccb6',
    p176:'https://github.com/user-attachments/assets/963c0a46-cf86-4604-8782-524b94afc51d',
    p177:'https://github.com/user-attachments/assets/eca5066b-1bf6-4a97-8b81-63e9e7435050',
    p180:'https://pbs.twimg.com/media/G7Ah9SIbIAAGlyu?format=jpg&name=900x900',
    p185:'https://pbs.twimg.com/media/G7HwgjGaYAAgJ67?format=jpg&name=small',
    p188:'https://pbs.twimg.com/media/G7QmCFcXoAAwaet?format=jpg&name=large',
  };

  // State
  const state = {
    favorites: JSON.parse(localStorage.getItem('nb_favorites') || '[]'),
    activeFilters: { category: new Set(), tag: new Set(), source: new Set() },
    searchQuery: '',
    sortBy: 'newest',
    favoritesOnly: false
  };

  // DOM refs
  const $ = s => document.querySelector(s);
  const $$ = s => document.querySelectorAll(s);

  const grid = $('#promptGrid');
  const searchInput = $('#searchInput');
  const resultCount = $('#resultCount');
  const favToggle = $('#favToggle');
  const favCount = $('#favCount');
  const menuToggle = $('#menuToggle');
  const sidebar = $('#sidebar');
  const sortSelect = $('#sortSelect');
  const clearFiltersBtn = $('#clearFilters');
  const modalOverlay = $('#modalOverlay');
  const modalContent = $('#modalContent');
  const modalClose = $('#modalClose');
  const activeFiltersEl = $('#activeFilters');
  const header = $('.header');

  // Init filters
  function initFilters() {
    const categories = [...new Set(PROMPTS.map(p => p.category))].sort();
    const tags = [...new Set(PROMPTS.flatMap(p => p.tags))].sort();
    const sources = [...new Set(PROMPTS.map(p => p.source))].sort();

    renderFilterGroup('#categoryFilters', categories, 'category');
    renderFilterGroup('#tagFilters', tags, 'tag');
    renderFilterGroup('#sourceFilters', sources, 'source');
  }

  function renderFilterGroup(selector, items, type) {
    const el = document.querySelector(selector);
    el.innerHTML = items.map(item => {
      const count = type === 'category' ? PROMPTS.filter(p => p.category === item).length :
                    type === 'tag' ? PROMPTS.filter(p => p.tags.includes(item)).length :
                    PROMPTS.filter(p => p.source === item).length;
      const isActive = state.activeFilters[type].has(item);
      return `<button class="filter-chip${isActive ? ' active' : ''}" data-type="${type}" data-value="${item}">
        ${item} <span class="chip-count">${count}</span>
      </button>`;
    }).join('');
  }

  // Get all unique tags from filtered prompts
  function getUniqueTags(prompts) {
    return [...new Set(prompts.flatMap(p => p.tags))].sort();
  }

  // Main render
  function render() {
    let filtered = [...PROMPTS];

    // Search
    if (state.searchQuery) {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q)) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (state.activeFilters.category.size > 0) {
      filtered = filtered.filter(p => state.activeFilters.category.has(p.category));
    }

    // Tag filter
    if (state.activeFilters.tag.size > 0) {
      filtered = filtered.filter(p => p.tags.some(t => state.activeFilters.tag.has(t)));
    }

    // Source filter
    if (state.activeFilters.source.size > 0) {
      filtered = filtered.filter(p => state.activeFilters.source.has(p.source));
    }

    // Favorites only
    if (state.favoritesOnly) {
      filtered = filtered.filter(p => state.favorites.includes(p.id));
    }

    // Sort
    switch (state.sortBy) {
      case 'name': filtered.sort((a,b) => a.title.localeCompare(b.title)); break;
      case 'name-desc': filtered.sort((a,b) => b.title.localeCompare(a.title)); break;
      default: filtered.sort((a,b) => a.id.localeCompare(b.id)); break;
    }

    resultCount.textContent = filtered.length;
    favCount.textContent = state.favorites.length;

    if (filtered.length === 0) {
      grid.innerHTML = `<div class="empty-state">
        <div class="empty-state-icon">🔍</div>
        <h3>No prompts found</h3>
        <p>Try adjusting your search or filters</p>
      </div>`;
      return;
    }

    grid.innerHTML = filtered.map(p => {
      const isFav = state.favorites.includes(p.id);
      const img = PROMPT_IMAGES[p.id];
      return `<div class="card" data-id="${p.id}">
        <div class="card-header">
          <div class="card-title">${esc(p.title)}</div>
          <button class="card-fav${isFav ? ' active' : ''}" data-id="${p.id}" data-action="fav" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          </button>
        </div>
        ${img ? `<div class="card-img"><img src="${esc(img)}" alt="${esc(p.title)}" loading="lazy"></div>` : ''}
        <div class="card-desc">${esc(p.desc)}</div>
        <div class="card-preview">${esc(p.prompt.slice(0, 140))}${p.prompt.length > 140 ? '...' : ''}</div>
        <div class="card-footer">
          <div class="card-tags">
            ${p.tags.slice(0, 3).map(t => `<span class="card-tag">${esc(t)}</span>`).join('')}
          </div>
          <button class="card-copy" data-id="${p.id}" data-action="copy">Copy</button>
        </div>
      </div>`;
    }).join('');

    renderActiveFilters(filtered.length);
  }

  function renderActiveFilters(count) {
    const allActive = [
      ...[...state.activeFilters.category].map(v => ({type:'category',v})),
      ...[...state.activeFilters.tag].map(v => ({type:'tag',v})),
      ...[...state.activeFilters.source].map(v => ({type:'source',v}))
    ];
    if (allActive.length === 0 && !state.favoritesOnly) {
      activeFiltersEl.innerHTML = '';
      return;
    }
    let html = '';
    if (state.favoritesOnly) {
      html += `<span class="active-filter" data-action="clear-fav">★ Favorites <span style="margin-left:3px;">✕</span></span>`;
    }
    allActive.forEach(f => {
      html += `<span class="active-filter" data-type="${f.type}" data-value="${f.v}">${esc(f.v)} <span style="margin-left:3px;">✕</span></span>`;
    });
    if (allActive.length > 0 || state.favoritesOnly) {
      html += `<span class="active-filter" data-action="clear-all" style="border-style:dashed;">Clear all</span>`;
    }
    activeFiltersEl.innerHTML = html;
  }

  function esc(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  // Filter toggle
  function toggleFilter(type, value) {
    const set = state.activeFilters[type];
    if (set.has(value)) set.delete(value); else set.add(value);
    renderFilterGroup('#categoryFilters', [...new Set(PROMPTS.map(p => p.category))].sort(), 'category');
    renderFilterGroup('#tagFilters', [...new Set(PROMPTS.flatMap(p => p.tags))].sort(), 'tag');
    renderFilterGroup('#sourceFilters', [...new Set(PROMPTS.map(p => p.source))].sort(), 'source');
    render();
  }

  // Favorites
  function toggleFav(id) {
    const idx = state.favorites.indexOf(id);
    if (idx > -1) state.favorites.splice(idx, 1); else state.favorites.push(id);
    localStorage.setItem('nb_favorites', JSON.stringify(state.favorites));
    render();
  }

  function isFav(id) {
    return state.favorites.includes(id);
  }

  // Copy prompt
  function copyPrompt(id) {
    const p = PROMPTS.find(x => x.id === id);
    if (!p) return;

    function done(ok) {
      showToast(ok ? 'Copied to clipboard!' : 'Failed to copy');
      const btns = document.querySelectorAll(`[data-id="${id}"][data-action="copy"]`);
      btns.forEach(btn => {
        const orig = btn.textContent;
        btn.textContent = ok ? 'Copied!' : 'Failed';
        btn.classList.toggle('copied', ok);
        setTimeout(() => { btn.textContent = orig; btn.classList.remove('copied'); }, 2000);
      });
    }

    // Try async clipboard API first, fallback to legacy execCommand
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(p.prompt).then(() => done(true)).catch(fallback);
    } else {
      fallback();
    }

    function fallback() {
      try {
        const ta = document.createElement('textarea');
        ta.value = p.prompt;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        done(true);
      } catch(e) {
        done(false);
      }
    }
  }

  // Toast
  let toastTimer;
  function showToast(msg) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 2200);
  }

  // Modal
  function openModal(id) {
    const p = PROMPTS.find(x => x.id === id);
    if (!p) return;
    const isFav = state.favorites.includes(p.id);
    modalContent.innerHTML = `
      <div class="modal-header">
        <div class="modal-category">${esc(p.category)}</div>
        <div class="modal-title">${esc(p.title)}</div>
        <button class="card-fav${isFav ? ' active' : ''}" data-id="${p.id}" data-action="fav-modal" title="${isFav ? 'Remove from favorites' : 'Add to favorites'}" style="position:absolute;top:1.5rem;right:3.5rem;background:none;border:none;cursor:pointer;color:${isFav ? 'var(--star)' : 'var(--text-muted)'};padding:0.2rem;">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="${isFav ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        </button>
      </div>
      ${PROMPT_IMAGES[p.id] ? `<div class="modal-img"><img src="${esc(PROMPT_IMAGES[p.id])}" alt="${esc(p.title)}"></div>` : ''}
      <div class="modal-desc">${esc(p.desc)}</div>
      <div class="modal-section">
        <h4>Tags</h4>
        <div class="modal-tags">${p.tags.map(t => `<span class="modal-tag">${esc(t)}</span>`).join('')}</div>
      </div>
      <div class="modal-section">
        <h4>Full Prompt</h4>
        <div class="modal-prompt">${esc(p.prompt)}</div>
      </div>
      <button class="btn btn-primary modal-copy-btn" data-id="${p.id}" data-action="copy-modal">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
        Copy Prompt
      </button>
      <div class="modal-source">Source: ${esc(p.source)}</div>
    `;
    modalOverlay.classList.add('open');
    document.body.classList.add('no-scroll');
  }

  function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.classList.remove('no-scroll');
  }

  // Event listeners
  function setupEvents() {
    // Search
    searchInput.addEventListener('input', () => {
      state.searchQuery = searchInput.value;
      render();
    });

    // Keyboard shortcut for search
    document.addEventListener('keydown', e => {
      if (e.key === '/' && !['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
        e.preventDefault();
        searchInput.focus();
      }
      if (e.key === 'Escape') {
        closeModal();
      }
    });

    // Filter chips (delegated)
    document.addEventListener('click', e => {
      const chip = e.target.closest('.filter-chip');
      if (chip) {
        toggleFilter(chip.dataset.type, chip.dataset.value);
      }
    });

    // Grid clicks (delegated)
    grid.addEventListener('click', e => {
      const card = e.target.closest('.card');
      const favBtn = e.target.closest('.card-fav');
      const copyBtn = e.target.closest('.card-copy');

      if (favBtn) {
        e.stopPropagation();
        toggleFav(favBtn.dataset.id);
        return;
      }
      if (copyBtn) {
        e.stopPropagation();
        copyPrompt(copyBtn.dataset.id);
        return;
      }
      if (card) {
        openModal(card.dataset.id);
      }
    });

    // Modal clicks (delegated)
    modalContent.addEventListener('click', e => {
      const favBtn = e.target.closest('[data-action="fav-modal"]');
      const copyBtn = e.target.closest('[data-action="copy-modal"]');
      if (favBtn) {
        toggleFav(favBtn.dataset.id);
        // Re-render modal content with updated state
        openModal(favBtn.dataset.id);
        return;
      }
      if (copyBtn) {
        copyPrompt(copyBtn.dataset.id);
      }
    });

    // Modal overlay close
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
    modalClose.addEventListener('click', closeModal);

    // Favorites toggle
    favToggle.addEventListener('click', () => {
      state.favoritesOnly = !state.favoritesOnly;
      favToggle.style.background = state.favoritesOnly ? 'var(--star-bg)' : '';
      favToggle.style.borderColor = state.favoritesOnly ? 'var(--star)' : '';
      render();
    });

    // Active filters clicks
    activeFiltersEl.addEventListener('click', e => {
      const el = e.target.closest('.active-filter');
      if (!el) return;
      if (el.dataset.action === 'clear-all') {
        clearAllFilters();
        return;
      }
      if (el.dataset.action === 'clear-fav') {
        state.favoritesOnly = false;
        favToggle.style.background = '';
        favToggle.style.borderColor = '';
        render();
        return;
      }
      const type = el.dataset.type;
      const value = el.dataset.value;
      if (type && value) {
        state.activeFilters[type].delete(value);
        renderFilterGroup('#categoryFilters', [...new Set(PROMPTS.map(p => p.category))].sort(), 'category');
        renderFilterGroup('#tagFilters', [...new Set(PROMPTS.flatMap(p => p.tags))].sort(), 'tag');
        renderFilterGroup('#sourceFilters', [...new Set(PROMPTS.map(p => p.source))].sort(), 'source');
        render();
      }
    });

    // Sort
    sortSelect.addEventListener('change', () => {
      state.sortBy = sortSelect.value;
      render();
    });

    // Mobile sidebar
    const backdrop = $('#sidebarBackdrop');
    const sidebarClose = $('#sidebarClose');

    function openSidebar() {
      sidebar.classList.add('open');
      backdrop.classList.add('open');
      document.body.classList.add('no-scroll');
    }
    function closeSidebar() {
      sidebar.classList.remove('open');
      backdrop.classList.remove('open');
      document.body.classList.remove('no-scroll');
    }

    menuToggle.addEventListener('click', () => {
      if (sidebar.classList.contains('open')) closeSidebar(); else openSidebar();
    });
    sidebarClose.addEventListener('click', closeSidebar);
    backdrop.addEventListener('click', closeSidebar);

    // Clear filters
    clearFiltersBtn.addEventListener('click', clearAllFilters);

    // Close sidebar on main content click (mobile)
    document.querySelector('.main').addEventListener('click', () => {
      if (window.innerWidth <= 900) closeSidebar();
    });

    // Header scroll shadow
    let scrollTicking = false;
    window.addEventListener('scroll', () => {
      if (!scrollTicking) {
        requestAnimationFrame(() => {
          header.classList.toggle('header-scrolled', window.scrollY > 8);
          scrollTicking = false;
        });
        scrollTicking = true;
      }
    }, { passive: true });
  }

  function clearAllFilters() {
    Object.keys(state.activeFilters).forEach(k => state.activeFilters[k].clear());
    state.favoritesOnly = false;
    favToggle.style.background = '';
    favToggle.style.borderColor = '';
    renderFilterGroup('#categoryFilters', [...new Set(PROMPTS.map(p => p.category))].sort(), 'category');
    renderFilterGroup('#tagFilters', [...new Set(PROMPTS.flatMap(p => p.tags))].sort(), 'tag');
    renderFilterGroup('#sourceFilters', [...new Set(PROMPTS.map(p => p.source))].sort(), 'source');
    render();
  }

  // Mobile-friendly search placeholder
  if (window.innerWidth < 640) {
    searchInput.placeholder = 'Search prompts...';
  }

  // Init
  initFilters();
  render();
  setupEvents();
})();
