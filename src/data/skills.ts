import { SkillNode } from '@/types/skill';

export const skills: SkillNode[] = [
  // ───────────────────────── MOVEMENT ─────────────────────────
  {
    id: 'lifts-head',
    branch: 'movement',
    subBranch: 'body-control',
    title: 'Lifts head briefly',
    developmentalTerm: 'Head control',
    ageRange: 'Often emerging in the first three months',
    ageBand: '0-3m',
    whatItIs:
      'Your baby begins lifting and briefly holding their head up during tummy time, instead of letting it rest flat against the surface.',
    whyItMatters:
      'Head control is the foundation for almost every movement skill that follows. Sitting, reaching, and eventually walking all build on a strong neck and upper body.',
    worldItOpens:
      'Your baby can begin to look around and choose what to look at, rather than seeing only what happens to be directly in front of them.',
    activities: [
      'Offer short, supervised tummy time sessions on a firm, flat surface.',
      'Hold a colorful toy or your face slightly above eye level to encourage lifting.',
      'Try tummy time on your chest while lying back, so baby lifts to see your face.',
    ],
    watchFor: [
      'At first the lift may be brief and wobbly — a few seconds is a great start.',
      'Some babies prefer turning to the side before lifting straight up.',
    ],
    unlocks: ['Rolling over', 'Sitting with support', 'Reaching while on the tummy'],
    parentGuidance:
      'Keep tummy time short and frequent rather than long and infrequent. Always place baby on their back to sleep, even as tummy strength grows.',
    safetyNotes: 'Always supervise tummy time and never leave a baby unattended on a raised surface.',
    tags: ['gross motor', 'early'],
  },
  {
    id: 'rolls-over',
    branch: 'movement',
    subBranch: 'rolling-sitting-crawling',
    title: 'Rolls over',
    developmentalTerm: 'Rolling',
    ageRange: 'Often emerging around 4–6 months',
    ageBand: '4-6m',
    whatItIs:
      'Your baby learns to turn their body from back to tummy or tummy to back, using core and shoulder strength.',
    whyItMatters:
      'Rolling is one of the first ways a baby moves their whole body on purpose. It builds the core strength needed for sitting and crawling.',
    worldItOpens:
      'Your baby discovers they can change their own view of the room — movement becomes something they cause, not something that just happens to them.',
    activities: [
      'Place an interesting toy slightly out of reach to one side during floor time.',
      'Give plenty of open, padded floor space to practice freely.',
      'Narrate the motion gently: "You rolled all the way over!"',
    ],
    watchFor: [
      'Rolling often starts tummy-to-back before back-to-tummy.',
      'Some babies move toward sitting without much rolling in between — that is normal too.',
    ],
    unlocks: ['Sitting independently', 'Crawling or scooting'],
    parentGuidance: 'Once rolling begins, stop swaddling for sleep and recheck crib safety.',
    tags: ['gross motor'],
  },
  {
    id: 'sits-independently',
    branch: 'movement',
    subBranch: 'rolling-sitting-crawling',
    title: 'Sits independently',
    developmentalTerm: 'Independent sitting',
    ageRange: 'Often emerging around 7–9 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child can sit upright without using their hands or an adult for support, balancing their own weight.',
    whyItMatters:
      'Sitting frees the hands completely, which means your child can now use both hands to explore objects while staying steady.',
    worldItOpens:
      'With hands free and a stable view of the room, your child can study, hold, and combine objects in a whole new way.',
    activities: [
      'Sit your child on the floor surrounded by toys just within reach.',
      'Place toys slightly to each side to encourage gentle weight shifting.',
      'Practice supported sitting in your lap before solo sitting feels steady.',
    ],
    watchFor: ['Early independent sitting may include frequent tips onto soft surfaces — that is part of building balance.'],
    unlocks: ['Crawling or scooting', 'Pulling to stand'],
    parentGuidance: 'Surround early sitting practice with pillows or a soft rug rather than a hard floor.',
    relatedSkills: ['transfers-object-hand-to-hand'],
    tags: ['gross motor', 'balance'],
  },
  {
    id: 'crawls-or-scoots',
    branch: 'movement',
    subBranch: 'rolling-sitting-crawling',
    title: 'Crawls or scoots',
    developmentalTerm: 'Crawling',
    ageRange: 'Often emerging around 7–9 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child finds a way to move across the floor toward something they want — classic hands-and-knees crawling, scooting, or rolling in sequence all count.',
    whyItMatters:
      'This is the first form of independent, self-directed travel. It strengthens the whole body and teaches coordination between both sides.',
    worldItOpens:
      'Distance stops being a barrier. Your child discovers that the world beyond arm’s reach is still reachable — the beginning of self-directed exploration.',
    activities: [
      'Place a favorite toy a few feet away and cheer them on as they go for it.',
      'Create a safe, open path without sharp corners or hazards.',
      'Get down on the floor with them so they have a destination worth moving toward — you.',
    ],
    watchFor: [
      'There are many "normal" styles of crawling, including scooting on the bottom or commando-style crawling on the belly.',
      'Some children move straight from sitting to standing with little classic crawling — talk with your pediatrician if you have concerns.',
    ],
    unlocks: ['Pulling to stand', 'Cruising along furniture', 'Exploring rooms independently'],
    safetyNotes: 'This is a good time for a thorough babyproofing pass — outlets, cords, stairs, and small objects at floor level.',
    tags: ['gross motor', 'play'],
  },
  {
    id: 'pulls-to-stand',
    branch: 'movement',
    subBranch: 'standing-walking',
    title: 'Pulls to stand',
    developmentalTerm: 'Pull-to-stand',
    ageRange: 'Often emerging around 10–12 months',
    ageBand: '10-12m',
    whatItIs:
      'Your child uses furniture or your hands to pull their body upright from sitting or crawling into a standing position.',
    whyItMatters:
      'Pulling to stand builds the leg strength and balance needed for walking, and shows growing confidence in their own body.',
    worldItOpens:
      'The world looks completely different from standing height. Your child discovers a taller, more grown-up vantage point on the room.',
    activities: [
      'Make sure sturdy, low furniture is available at hand height for pulling up.',
      'Hold out your hands as a pulling-up target during play.',
      'Place an interesting toy on a low, stable surface to motivate standing.',
    ],
    watchFor: ['Getting back down safely often takes longer to master than pulling up — expect some bumps.'],
    unlocks: ['Cruising along furniture', 'Walking independently'],
    safetyNotes: 'Anchor furniture that could tip and keep choking-hazard-sized objects off low surfaces.',
    tags: ['gross motor'],
  },
  {
    id: 'walks-independently',
    branch: 'movement',
    subBranch: 'standing-walking',
    title: 'Walks independently',
    developmentalTerm: 'Independent walking',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child takes steps and crosses a room on their own two feet, without holding on to a person or furniture.',
    whyItMatters:
      'Walking is a major shift in independence. It frees the hands for carrying and exploring while moving, and changes how your child can choose where to go.',
    worldItOpens:
      'Your child discovers they can decide where to go and simply walk there — agency over their own movement through the world.',
    activities: [
      'Offer a clear, safe stretch of floor for cruising and stepping practice.',
      'Hold out your hands a few steps away as encouragement.',
      'Let them practice in bare feet or grippy socks on different safe surfaces.',
    ],
    watchFor: [
      'A wide, wobbly stance with arms up for balance is completely typical at first.',
      'Falls are part of learning — soft landings and patience help more than holding hands constantly.',
    ],
    unlocks: ['Running', 'Climbing', 'Carrying objects while moving'],
    tags: ['gross motor', 'independence'],
  },
  {
    id: 'runs',
    branch: 'movement',
    subBranch: 'running-climbing-jumping',
    title: 'Runs',
    developmentalTerm: 'Running',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child moves both feet quickly with a clear airborne moment between steps, rather than a fast walk.',
    whyItMatters:
      'Running requires balance, coordination, and confidence well beyond walking. It is a sign of a maturing nervous system and stronger legs.',
    worldItOpens:
      'Speed becomes part of your child’s world. Chasing, racing, and covering ground quickly all become possible.',
    activities: [
      'Play simple chasing games in a safe, open space like a yard or park.',
      'Give plenty of outdoor time on grass or soft surfaces to practice freely.',
      'Try "freeze" games that mix running with sudden stops.',
    ],
    watchFor: ['Early running often looks stiff-legged and may include frequent falls — control improves with practice.'],
    unlocks: ['Climbing stairs', 'Jumping with two feet', 'Active group games'],
    safetyNotes: 'Supervise near roads, stairs, and water — running speed can outpace stopping ability at this age.',
    tags: ['gross motor', 'play'],
  },
  {
    id: 'jumps-two-feet',
    branch: 'movement',
    subBranch: 'running-climbing-jumping',
    title: 'Jumps with two feet',
    developmentalTerm: 'Two-foot jumping',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child pushes off the ground with both feet at once and lands with both feet together, leaving the ground briefly.',
    whyItMatters:
      'Jumping takes timing, leg power, and balance working together. It is an early building block for more complex movement skills like hopping and climbing.',
    worldItOpens:
      'Your child discovers they can launch themselves off the ground — a small but thrilling taste of controlled flight.',
    activities: [
      'Place a low line of tape on the floor and jump over it together.',
      'Jump off a single low, stable step onto a soft mat.',
      'Play "jump like a bunny" or other imaginative jumping games.',
    ],
    watchFor: ['The first jumps may just be a deep knee bend without leaving the ground — that effort is the first step.'],
    unlocks: ['Hopping on one foot', 'Climbing playground equipment', 'Jumping rope later on'],
    safetyNotes: 'Practice jumping onto soft, padded surfaces rather than hard ground.',
    tags: ['gross motor', 'play'],
  },
  {
    id: 'balances-one-foot',
    branch: 'movement',
    subBranch: 'balance-coordination',
    title: 'Balances briefly on one foot',
    developmentalTerm: 'Single-leg balance',
    ageRange: 'Often emerging between 3–4 years',
    ageBand: '3-4y',
    whatItIs:
      'Your child can lift one foot off the ground and hold their balance for a few seconds without falling or grabbing support.',
    whyItMatters:
      'Single-leg balance reflects a maturing sense of body position and core stability — skills used constantly in walking, running, and sports.',
    worldItOpens:
      'Your child gains body confidence and starts experimenting with movement on purpose, like a dancer or athlete testing their own limits.',
    activities: [
      'Play balancing games like "stand like a flamingo" or freeze-and-balance.',
      'Practice near a wall or your hand for light support at first.',
      'Try walking along a low curb or a chalk line for a balance challenge.',
    ],
    watchFor: ['A few seconds of wobbly balance is a strong starting point — confident, sustained balance often takes more practice.'],
    unlocks: ['Hopping', 'Riding a balance bike or bicycle', 'Sports and dance movements'],
    tags: ['gross motor', 'balance'],
  },
  {
    id: 'throws-ball',
    branch: 'movement',
    subBranch: 'balance-coordination',
    title: 'Throws a ball with direction',
    developmentalTerm: 'Directional throwing',
    ageRange: 'Often emerging between 4–5 years',
    ageBand: '4-5y',
    whatItIs:
      'Your child can throw a ball toward a target or person on purpose, coordinating their arm, body, and aim.',
    whyItMatters:
      'Throwing with direction combines hand-eye coordination, timing, and whole-body movement — a skill that supports both sports and everyday play.',
    worldItOpens:
      'Your child discovers they can act on something far away from their own body, sending an object exactly where they intend.',
    activities: [
      'Practice tossing a soft ball back and forth at a short distance.',
      'Set up a laundry basket or bucket as a fun throwing target.',
      'Play simple catch games with a large, soft ball.',
    ],
    watchFor: ['Accuracy and an overhand motion typically continue improving well past age five.'],
    unlocks: ['Catching', 'Team and sports play', 'More complex hand-eye coordination games'],
    tags: ['gross motor', 'play'],
  },

  // ───────────────────────── HANDS & MAKING ─────────────────────────
  {
    id: 'reaches-for-objects',
    branch: 'hands',
    subBranch: 'reaching-grasping',
    title: 'Reaches for objects',
    developmentalTerm: 'Visually guided reaching',
    ageRange: 'Often emerging in the first three months',
    ageBand: '0-3m',
    whatItIs:
      'Your baby starts extending an arm toward something interesting they see, even before they can grasp it accurately.',
    whyItMatters:
      'Reaching is the first link between seeing and doing — it shows your baby’s brain is connecting vision with intentional movement.',
    worldItOpens:
      'Objects stop being just things to look at. Your baby discovers that the world can be touched, not only watched.',
    activities: [
      'Hang a few simple, high-contrast toys within easy reach.',
      'Hold a toy slightly to the side and let your baby work to reach it.',
      'Offer a few minutes of unrestricted floor time for reaching practice.',
    ],
    watchFor: ['Early reaches are often swipe-like and imprecise — accuracy improves with weeks of practice.'],
    unlocks: ['Holding an object briefly', 'Transferring objects hand to hand'],
    tags: ['fine motor', 'early'],
  },
  {
    id: 'transfers-object-hand-to-hand',
    branch: 'hands',
    subBranch: 'reaching-grasping',
    title: 'Transfers object hand to hand',
    developmentalTerm: 'Hand-to-hand transfer',
    ageRange: 'Often emerging around 4–6 months',
    ageBand: '4-6m',
    whatItIs:
      'Your baby can pass an object from one hand to the other while exploring it, instead of dropping it to switch sides.',
    whyItMatters:
      'This skill shows both hands beginning to work together, an important step toward more complex two-handed tasks later on.',
    worldItOpens:
      'Your baby discovers that an object can move with them, explored from every angle without needing to let go.',
    activities: [
      'Offer lightweight rattles or textured toys that are easy to grip.',
      'Hold a toy near the midline of the body so both hands can reach it.',
      'Narrate the action: "You moved it to your other hand!"',
    ],
    watchFor: ['This often happens during quiet, focused solo play rather than on command.'],
    unlocks: ['Using a pincer grasp', 'Banging objects together', 'Self-feeding with fingers'],
    tags: ['fine motor'],
  },
  {
    id: 'uses-pincer-grasp',
    branch: 'hands',
    subBranch: 'precision-small-objects',
    title: 'Picks up tiny things with finger and thumb',
    developmentalTerm: 'Pincer grasp',
    ageRange: 'Often emerging around 8–12 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child starts using the thumb and pointer finger together to pick up small objects, instead of scooping with the whole hand.',
    whyItMatters:
      'This is a major step in hand precision. It helps your child feed themselves, turn pages, hold small toys, and eventually use tools like crayons and zippers.',
    worldItOpens:
      'Tiny things are now accessible. Your child can explore details, choose specific objects, and act on the world with more control.',
    activities: [
      'Place soft cereal pieces, peas, or small pieces of banana on a tray to pick up one by one.',
      'Offer chunky puzzle pieces with small knobs to grasp.',
      'Hide small safe objects in playdough or rice for a "treasure hunt" pickup game.',
    ],
    watchFor: ['At first, children often rake objects toward themselves with the whole hand before refining to thumb-and-finger precision.'],
    unlocks: ['Self-feeding', 'Page turning', 'Stacking small objects', 'Early drawing control'],
    parentGuidance: 'Offer safe objects that are large enough not to be choking hazards, and stay close during practice.',
    safetyNotes: 'Avoid small, hard, round foods or objects that could pose a choking risk during unsupervised practice.',
    relatedSkills: ['feeds-self-with-fingers', 'turns-pages'],
    tags: ['fine motor', 'precision'],
  },
  {
    id: 'stacks-blocks',
    branch: 'hands',
    subBranch: 'building-manipulating',
    title: 'Stacks blocks',
    developmentalTerm: 'Block stacking',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child places one block on top of another to build a small tower, judging balance and placement.',
    whyItMatters:
      'Stacking combines fine motor control with an early understanding of balance, cause and effect, and spatial relationships.',
    worldItOpens:
      'Your child discovers they can build something new that did not exist before — an early taste of construction and creation.',
    activities: [
      'Offer a small set of soft or wooden blocks for open-ended play.',
      'Build a simple tower together and let them knock it down — the knocking down is part of the fun and the learning.',
      'Cheer for each block added, even if the tower falls quickly.',
    ],
    watchFor: ['Towers of two blocks often come before towers of four or more — height grows gradually with practice.'],
    unlocks: ['Building more complex structures', 'Sorting and matching shapes', 'Early problem solving'],
    tags: ['fine motor', 'play'],
  },
  {
    id: 'turns-pages',
    branch: 'hands',
    subBranch: 'tools-everyday-objects',
    title: 'Turns pages',
    developmentalTerm: 'Page turning',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child can grasp and turn the pages of a book, often several at once at first, while looking at the pictures.',
    whyItMatters:
      'Page turning combines fine motor precision with growing interest in books, stories, and shared reading time.',
    worldItOpens:
      'Your child discovers they can control the pace of a story — moving forward through a book on their own terms.',
    activities: [
      'Offer sturdy board books with thick pages that are easier to grip.',
      'Let your child "drive" page turns during reading time, even if it means skipping ahead.',
      'Point to and name pictures together as pages turn.',
    ],
    watchFor: ['Multiple pages turning at once is typical before single-page turning becomes reliable.'],
    unlocks: ['Following a simple story', 'Pointing to named pictures', 'Early pretend reading'],
    tags: ['fine motor', 'language adjacent'],
  },
  {
    id: 'scribbles',
    branch: 'hands',
    subBranch: 'drawing-writing',
    title: 'Scribbles',
    developmentalTerm: 'Scribbling',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child holds a crayon or marker and makes marks on paper, usually with a whole-hand grip and big arm movements.',
    whyItMatters:
      'Scribbling is the very first step toward drawing and writing. It builds hand strength, control, and the connection between movement and a visible result.',
    worldItOpens:
      'Your child discovers they can leave a mark on the world — proof that their own movement created something that wasn’t there before.',
    activities: [
      'Offer big sheets of paper and chunky, easy-to-grip crayons.',
      'Scribble alongside your child and talk about colors and motion.',
      'Try different surfaces like a chalkboard or window crayons for variety.',
    ],
    watchFor: ['Early scribbles are usually large, looping, and unplanned — this is a normal and important stage, not a problem to correct.'],
    unlocks: ['Copying lines and shapes', 'Drawing simple pictures', 'Pre-writing strokes'],
    tags: ['fine motor', 'creativity'],
  },
  {
    id: 'uses-spoon',
    branch: 'hands',
    subBranch: 'tools-everyday-objects',
    title: 'Uses a spoon with growing control',
    developmentalTerm: 'Spoon use',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child grips a spoon, scoops food, and guides it to their mouth with increasing accuracy and less spilling over time.',
    whyItMatters:
      'Using a tool like a spoon combines fine motor coordination, hand-eye timing, and growing independence at mealtimes.',
    worldItOpens:
      'Your child discovers that tools can extend what their hands can do — a foundational idea behind using any tool later in life.',
    activities: [
      'Offer a child-sized spoon with thick, sticky foods like yogurt or mashed potatoes to start.',
      'Let your child practice even when it is messy — supervised mess is part of learning.',
      'Model spoon use calmly during shared meals.',
    ],
    watchFor: ['Spilling and reverting to fingers is common and expected for quite a while.'],
    unlocks: ['Using a fork', 'Greater mealtime independence'],
    tags: ['fine motor', 'daily life adjacent'],
  },
  {
    id: 'copies-a-circle',
    branch: 'hands',
    subBranch: 'drawing-writing',
    title: 'Copies a circle',
    developmentalTerm: 'Pre-writing shape copying',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child watches you draw a circle and can copy a roughly round, closed shape on their own.',
    whyItMatters:
      'Copying basic shapes is an early pre-writing skill that builds the hand control and visual planning needed for letters later on.',
    worldItOpens:
      'Your child discovers they can reproduce something they see — translating an idea in their mind into a mark on paper.',
    activities: [
      'Draw a large circle and invite your child to trace or copy it next to yours.',
      'Practice circular motion in sand, shaving cream, or with finger paint.',
      'Turn circle drawing into a game: "Can you draw a circle like the sun?"',
    ],
    watchFor: ['Early circles may be open or uneven — a closed, round shape often develops with continued practice.'],
    unlocks: ['Copying a cross or square', 'Drawing a simple person', 'Early letter formation'],
    tags: ['fine motor', 'pre-writing'],
  },
  {
    id: 'uses-scissors-with-help',
    branch: 'hands',
    subBranch: 'tools-everyday-objects',
    title: 'Uses scissors with help',
    developmentalTerm: 'Early scissor use',
    ageRange: 'Often emerging between 3–4 years',
    ageBand: '3-4y',
    whatItIs:
      'Your child can open and close child-safe scissors to make snips in paper, usually with some adult guidance on positioning.',
    whyItMatters:
      'Scissor use takes two hands working in different, coordinated roles — one cutting, one steadying — which strengthens overall hand control.',
    worldItOpens:
      'Your child discovers they can change the shape of materials on purpose, an early form of crafting and design.',
    activities: [
      'Offer child-safe, blunt-tip scissors and thick strips of paper for easy snipping.',
      'Practice snipping playdough "snakes" before paper, which gives quicker, satisfying results.',
      'Sit beside your child to guide hand position as needed.',
    ],
    watchFor: ['Cutting along a line takes more practice than simple snipping — both are valuable steps.'],
    unlocks: ['Cutting along lines', 'Simple craft projects', 'Greater bilateral hand coordination'],
    safetyNotes: 'Use child-safe scissors with rounded tips and supervise closely.',
    tags: ['fine motor', 'creativity'],
  },
  {
    id: 'draws-a-simple-person',
    branch: 'hands',
    subBranch: 'drawing-writing',
    title: 'Draws a simple person',
    developmentalTerm: 'Representational drawing',
    ageRange: 'Often emerging between 4–5 years',
    ageBand: '4-5y',
    whatItIs:
      'Your child draws a recognizable figure, often starting with a circle for the head and lines for arms and legs.',
    whyItMatters:
      'Drawing a person shows growing fine motor control along with the cognitive leap of representing real things symbolically on paper.',
    worldItOpens:
      'Your child discovers they can represent people and ideas, not just shapes — an early form of storytelling and self-expression.',
    activities: [
      'Ask your child to draw their family and talk about who is who.',
      'Avoid correcting proportions — celebrate the representation itself.',
      'Offer a variety of drawing tools like markers, crayons, and chalk.',
    ],
    watchFor: ['Early figures are often just a head with lines for limbs — body parts and detail are typically added gradually.'],
    unlocks: ['More detailed drawings', 'Early writing of letters and name', 'Storytelling through pictures'],
    tags: ['fine motor', 'creativity'],
  },

  // ───────────────────────── LANGUAGE ─────────────────────────
  {
    id: 'coos',
    branch: 'language',
    subBranch: 'sounds-words',
    title: 'Coos',
    developmentalTerm: 'Cooing',
    ageRange: 'Often emerging in the first three months',
    ageBand: '0-3m',
    whatItIs:
      'Your baby makes soft, vowel-like sounds such as "ooh" and "aah," often in response to your voice or face.',
    whyItMatters:
      'Cooing is the very beginning of vocal communication — practicing the breath control and mouth movements that speech will later require.',
    worldItOpens:
      'Your baby discovers their own voice as a way to connect, getting a response from the people they care about most.',
    activities: [
      'Respond to coos with smiles, words, and gentle imitation to create a "conversation."',
      'Narrate your day in a warm, sing-song voice during everyday routines.',
      'Leave pauses after talking to invite your baby to "answer" with a coo.',
    ],
    watchFor: ['Cooing usually increases during calm, alert moments rather than during crying or sleepy states.'],
    unlocks: ['Babbling', 'Turning toward voice', 'Early back-and-forth vocal play'],
    tags: ['language', 'early'],
  },
  {
    id: 'babbles',
    branch: 'language',
    subBranch: 'sounds-words',
    title: 'Babbles',
    developmentalTerm: 'Babbling',
    ageRange: 'Often emerging around 4–6 months',
    ageBand: '4-6m',
    whatItIs:
      'Your baby strings together repeated consonant-vowel sounds like "ba-ba" or "da-da," experimenting with their voice.',
    whyItMatters:
      'Babbling is your baby practicing the building blocks of speech — rhythm, sound combinations, and mouth control — well before real words appear.',
    worldItOpens:
      'Your baby discovers that sounds can be shaped and repeated on purpose, an early form of playing with language itself.',
    activities: [
      'Babble back and forth as a playful game, taking turns like a conversation.',
      'Read books aloud with varied, expressive sounds.',
      'Sing simple songs with repetitive sounds and rhythms.',
    ],
    watchFor: ['The variety and frequency of babbling sounds typically grows over weeks and months.'],
    unlocks: ['Responding to name', 'First word approximations', 'Imitating sounds on request'],
    tags: ['language'],
  },
  {
    id: 'responds-to-name',
    branch: 'language',
    subBranch: 'listening-understanding',
    title: 'Responds to name',
    developmentalTerm: 'Name recognition',
    ageRange: 'Often emerging around 7–9 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child turns or looks toward you when you say their name, showing they recognize it as referring to them.',
    whyItMatters:
      'This shows your child is connecting sounds with meaning — an early and important sign of language comprehension developing.',
    worldItOpens:
      'Your child discovers that they have an identity others can call out to — the beginning of recognizing themselves as a person among people.',
    activities: [
      'Use your child’s name often and warmly during everyday routines.',
      'Play a calling game from across the room and celebrate when they turn.',
      'Pair their name with eye contact and a smile consistently.',
    ],
    watchFor: ['Response may be inconsistent at first, especially in noisy or distracting environments.'],
    unlocks: ['Following one-step directions', 'Joint attention with caregivers'],
    tags: ['language', 'listening'],
  },
  {
    id: 'points-to-request',
    branch: 'language',
    subBranch: 'gestures-expression',
    title: 'Points to request',
    developmentalTerm: 'Protoimperative pointing',
    ageRange: 'Often emerging around 10–12 months',
    ageBand: '10-12m',
    whatItIs:
      'Your child extends a finger or hand toward something they want, communicating a request before they have the words for it.',
    whyItMatters:
      'Pointing to request is an early form of intentional communication, showing your child understands gestures can get them what they need.',
    worldItOpens:
      'Your child discovers they can influence the world without words — a powerful early tool for getting needs met and being understood.',
    activities: [
      'Respond warmly to pointing by naming the object and helping if appropriate.',
      'Model pointing yourself while naming items during daily routines.',
      'Place a few desirable items slightly out of reach to invite pointing.',
    ],
    watchFor: ['Pointing may start as a whole-hand reach before refining into a single extended finger.'],
    unlocks: ['Pointing to show interest', 'First words', 'Two-word combinations'],
    tags: ['language', 'gesture'],
  },
  {
    id: 'points-to-show-interest',
    branch: 'language',
    subBranch: 'gestures-expression',
    title: 'Points to show interest',
    developmentalTerm: 'Protodeclarative pointing / joint attention',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child points at something simply to share interest with you, often looking back and forth between the object and your face.',
    whyItMatters:
      'This kind of pointing is not about getting something — it is about sharing attention, a major milestone in social and language development.',
    worldItOpens:
      'Your child discovers shared attention: "I can show you what I see," and that someone else can care about the same thing they do.',
    activities: [
      'Follow your child’s point and respond with enthusiasm and words: "Yes! A dog!"',
      'Point things out during walks and invite your child to look too.',
      'Make eye contact and react genuinely when your child shares something with you.',
    ],
    watchFor: ['Look for the back-and-forth glance between object and your face — that checking-in is the key sign of shared attention.'],
    unlocks: ['Vocabulary growth', 'Early conversation turn-taking', 'Joint pretend play'],
    tags: ['language', 'social'],
  },
  {
    id: 'says-first-word',
    branch: 'language',
    subBranch: 'sounds-words',
    title: 'Says first word',
    developmentalTerm: 'First expressive word',
    ageRange: 'Often emerging around 10–12 months',
    ageBand: '10-12m',
    whatItIs:
      'Your child uses a consistent sound to refer to the same thing each time, such as "mama," "dada," or "ba" for bottle.',
    whyItMatters:
      'A first word shows your child has linked a specific sound to a specific meaning — the true beginning of expressive language.',
    worldItOpens:
      'Your child discovers that a sound can stand in for a whole idea or person, opening the door to naming their world.',
    activities: [
      'Repeat and expand on attempted words: if they say "ba," respond "yes, ball!"',
      'Narrate objects and actions clearly and often throughout the day.',
      'Celebrate any consistent sound-to-meaning attempt, even if it is not a "real" word yet.',
    ],
    watchFor: ['First words are often simplified or only family-recognizable versions of real words — that still counts.'],
    unlocks: ['Vocabulary growth', 'Combining two words'],
    tags: ['language'],
  },
  {
    id: 'combines-two-words',
    branch: 'language',
    subBranch: 'sounds-words',
    title: 'Combines two words',
    developmentalTerm: 'Two-word combinations',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child puts two words together to express a more complete idea, like "more milk" or "mommy up."',
    whyItMatters:
      'Combining words is the first step toward grammar and sentence structure — showing your child can link ideas, not just label single things.',
    worldItOpens:
      'Your child discovers they can express relationships between ideas — wanting, owning, and describing in more complete ways.',
    activities: [
      'Model two- and three-word phrases clearly during daily routines.',
      'Expand on your child’s single words: if they say "ball," respond "big ball!"',
      'Read simple books with short, repetitive phrases together.',
    ],
    watchFor: ['Word order may be inconsistent at first — meaning matters more than grammar at this stage.'],
    unlocks: ['Short sentences', 'Following two-step directions'],
    tags: ['language'],
  },
  {
    id: 'follows-two-step-directions',
    branch: 'language',
    subBranch: 'listening-understanding',
    title: 'Follows two-step directions',
    developmentalTerm: 'Multi-step direction following',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child can follow an instruction with two parts, like "pick up the ball and bring it to me."',
    whyItMatters:
      'Following multi-step directions shows growing memory and listening skills working together — important for both language and daily routines.',
    worldItOpens:
      'Your child discovers they can hold a small sequence of ideas in mind and carry it out — an early form of planning.',
    activities: [
      'Give simple two-step directions during play: "Get the blocks and put them in the box."',
      'Play games like Simon Says with two-part actions.',
      'Keep directions short, clear, and given one at a time at first if needed.',
    ],
    watchFor: ['Following one familiar step reliably often comes before two unfamiliar steps in a row.'],
    unlocks: ['Following routines independently', 'Three-step directions'],
    tags: ['language', 'listening'],
  },
  {
    id: 'asks-simple-questions',
    branch: 'language',
    subBranch: 'conversation-story',
    title: 'Asks simple questions',
    developmentalTerm: 'Question formation',
    ageRange: 'Often emerging between 3–4 years',
    ageBand: '3-4y',
    whatItIs:
      'Your child asks questions like "where’s daddy?" or "what’s that?" using question words and rising intonation.',
    whyItMatters:
      'Asking questions shows growing grammar skills along with genuine curiosity about how the world works and what other people know.',
    worldItOpens:
      'Your child discovers that they can actively seek out information, not just receive it — turning curiosity into conversation.',
    activities: [
      'Answer questions patiently, even repeated ones — they are genuine information-seeking, not just chatter.',
      'Ask your child questions back to model a two-way conversation.',
      'Read books that prompt natural questions, like "what do you think happens next?"',
    ],
    watchFor: ['"Why" questions often increase rapidly during this stage and can feel constant — this is a sign of active thinking.'],
    unlocks: ['Conversational turn-taking', 'Telling a simple story'],
    tags: ['language', 'curiosity'],
  },
  {
    id: 'tells-a-simple-story',
    branch: 'language',
    subBranch: 'conversation-story',
    title: 'Tells a simple story',
    developmentalTerm: 'Narrative skills',
    ageRange: 'Often emerging between 4–5 years',
    ageBand: '4-5y',
    whatItIs:
      'Your child can describe a sequence of events with a beginning, middle, and end, like recounting their day or a pretend adventure.',
    whyItMatters:
      'Storytelling combines vocabulary, sequencing, and memory — and is closely linked to later reading comprehension and writing.',
    worldItOpens:
      'Your child discovers they can shape experience into narrative — making sense of events and sharing that meaning with others.',
    activities: [
      'Ask open-ended questions about their day: "what happened first, then what?"',
      'Make up silly stories together, taking turns adding the next part.',
      'Encourage retelling of favorite books in their own words.',
    ],
    watchFor: ['Early stories may jump around in time and skip details — sequencing improves gradually with practice.'],
    unlocks: ['More complex conversation', 'Early reading comprehension', 'Written storytelling later on'],
    tags: ['language', 'creativity'],
  },

  // ───────────────────────── THINKING ─────────────────────────
  {
    id: 'tracks-moving-objects',
    branch: 'thinking',
    subBranch: 'attention-curiosity',
    title: 'Tracks moving objects',
    developmentalTerm: 'Visual tracking',
    ageRange: 'Often emerging in the first three months',
    ageBand: '0-3m',
    whatItIs:
      'Your baby’s eyes follow a slowly moving object or face from side to side, instead of losing focus.',
    whyItMatters:
      'Visual tracking shows the brain and eyes coordinating, an early foundation for attention and visual learning.',
    worldItOpens:
      'Your baby discovers that things in motion can be followed and understood — the world becomes something to watch and study.',
    activities: [
      'Slowly move a high-contrast toy or your face side to side within view.',
      'Use simple mobiles with bold patterns above the crib during awake time.',
      'Make slow, exaggerated facial expressions close to your baby’s face.',
    ],
    watchFor: ['Tracking may be smoother in short bursts and choppier over longer distances at first.'],
    unlocks: ['Exploring objects with senses', 'Looking for hidden objects'],
    tags: ['cognitive', 'early'],
  },
  {
    id: 'explores-cause-and-effect',
    branch: 'thinking',
    subBranch: 'cause-effect',
    title: 'Repeats an action to see what happens',
    developmentalTerm: 'Cause-and-effect exploration',
    ageRange: 'Often emerging around 4–6 months',
    ageBand: '4-6m',
    whatItIs:
      'Your baby repeats an action, like shaking a rattle or kicking a mobile, specifically to make the same interesting result happen again.',
    whyItMatters:
      'This is one of the earliest forms of scientific thinking — testing whether an action reliably produces a result.',
    worldItOpens:
      'Your baby discovers they can make things happen on purpose — a first taste of control and influence over their surroundings.',
    activities: [
      'Offer toys that respond to action, like rattles, squeaky toys, or simple cause-and-effect buttons.',
      'Repeat a fun reaction (like a silly sound) every time your baby performs an action, to reinforce the connection.',
      'Give plenty of time for repetitive play without rushing to the next activity.',
    ],
    watchFor: ['Babies often repeat the same action dozens of times — this repetition is how the cause-and-effect link gets reinforced.'],
    unlocks: ['Understanding cause and effect more broadly', 'Solving simple puzzles'],
    tags: ['cognitive', 'play'],
  },
  {
    id: 'looks-for-hidden-object',
    branch: 'thinking',
    subBranch: 'memory-object-permanence',
    title: 'Looks for a hidden object',
    developmentalTerm: 'Object permanence',
    ageRange: 'Often emerging around 7–9 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child searches for a toy after watching it get covered or hidden, instead of acting as if it disappeared.',
    whyItMatters:
      'This shows your child understands that objects continue to exist even when out of sight — a major cognitive milestone called object permanence.',
    worldItOpens:
      'Your child discovers that the world is stable and continuous, even the parts they cannot currently see — including people who step out of the room.',
    activities: [
      'Play peekaboo with toys, hiding them under a cloth and encouraging your child to find them.',
      'Hide a toy partially at first, then fully, as searching skills grow.',
      'Narrate the hiding and finding: "Where did it go? There it is!"',
    ],
    watchFor: ['Children often find partially hidden objects well before they search confidently for fully hidden ones.'],
    unlocks: ['Understanding routines and separations', 'More complex hide-and-seek play'],
    tags: ['cognitive', 'memory'],
  },
  {
    id: 'matches-shapes',
    branch: 'thinking',
    subBranch: 'sorting-categories',
    title: 'Matches shapes',
    developmentalTerm: 'Shape matching',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child can fit a shape into a matching hole or pair similar shapes together, like a basic shape sorter.',
    whyItMatters:
      'Matching shapes builds visual discrimination and the early logical skill of recognizing how things are alike and different.',
    worldItOpens:
      'Your child discovers that the world has patterns and order that can be figured out — not everything is random.',
    activities: [
      'Offer a simple shape sorter toy with just a few distinct shapes.',
      'Play matching games with everyday objects, like pairing lids to containers.',
      'Praise the trial-and-error process, not just successful matches.',
    ],
    watchFor: ['Trial and error with some frustration is a normal part of this learning process.'],
    unlocks: ['Sorting by color or size', 'Solving simple puzzles'],
    tags: ['cognitive', 'fine motor adjacent'],
  },
  {
    id: 'sorts-by-color-or-size',
    branch: 'thinking',
    subBranch: 'sorting-categories',
    title: 'Sorts by color or size',
    developmentalTerm: 'Categorical sorting',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child groups objects together based on a shared feature, like putting all the red blocks in one pile.',
    whyItMatters:
      'Sorting is an early form of categorization — a thinking skill that underlies math, science, and organizing information later in life.',
    worldItOpens:
      'Your child discovers that things can belong to groups, and that noticing similarities helps make sense of a busy world.',
    activities: [
      'Sort laundry by color together, or toys by size, as a simple shared task.',
      'Offer a basket of mixed objects and invite sorting by one feature at a time.',
      'Use clear, simple language: "big" and "little," or name the colors as you sort.',
    ],
    watchFor: ['Sorting by one feature at a time (just color, or just size) is typically easier than combining features.'],
    unlocks: ['Counting small groups', 'Recognizing patterns'],
    tags: ['cognitive'],
  },
  {
    id: 'solves-simple-puzzle',
    branch: 'thinking',
    subBranch: 'problem-solving',
    title: 'Solves a simple puzzle',
    developmentalTerm: 'Early problem solving',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child completes a simple puzzle with a few large pieces, using trial and error or visual matching to find the right fit.',
    whyItMatters:
      'Puzzle solving builds spatial reasoning, persistence, and the ability to plan a few steps ahead toward a goal.',
    worldItOpens:
      'Your child discovers that a problem can be worked through step by step, and that effort leads to a satisfying solution.',
    activities: [
      'Offer chunky puzzles with 2–6 large pieces to start.',
      'Model thinking out loud: "Hmm, this piece looks round — maybe it goes here."',
      'Let your child struggle a little before offering help, to build persistence.',
    ],
    watchFor: ['Frustration during puzzle attempts is common and is a normal part of building problem-solving stamina.'],
    unlocks: ['More complex puzzles', 'Making predictions', 'Building structures with blocks'],
    tags: ['cognitive', 'play'],
  },
  {
    id: 'counts-small-groups',
    branch: 'thinking',
    subBranch: 'numbers-patterns',
    title: 'Counts small groups',
    developmentalTerm: 'Early number sense',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child recites number words while pointing to objects, and may begin to understand that the last number said reflects "how many."',
    whyItMatters:
      'Early counting builds the foundation for number sense, which underlies all later math learning.',
    worldItOpens:
      'Your child discovers that quantities can be named and compared — a new way of understanding "how much" in the world.',
    activities: [
      'Count everyday objects together, like steps, snacks, or toys.',
      'Sing counting songs and rhymes during play.',
      'Point to objects one at a time while counting slowly together.',
    ],
    watchFor: ['Reciting numbers in order often comes before truly understanding what each number means — both are valuable steps.'],
    unlocks: ['Recognizing patterns', 'Comparing quantities'],
    tags: ['cognitive', 'math'],
  },
  {
    id: 'asks-why',
    branch: 'thinking',
    subBranch: 'attention-curiosity',
    title: 'Asks "why"',
    developmentalTerm: 'Causal curiosity',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child begins asking "why" repeatedly about everyday events, genuinely curious about reasons and causes.',
    whyItMatters:
      'Asking "why" reflects a deepening understanding that events have causes — an important leap in logical thinking.',
    worldItOpens:
      'Your child discovers that the world is full of reasons waiting to be uncovered, not just things that simply happen.',
    activities: [
      'Answer "why" questions simply and honestly, even when there are many in a row.',
      'Turn the question back sometimes: "why do you think that happens?"',
      'Explore cause and effect together through everyday observations, like why ice melts.',
    ],
    watchFor: ['The constant questioning can feel overwhelming, but it is a strong sign of active, healthy thinking.'],
    unlocks: ['Recognizing patterns', 'Making predictions', 'Early scientific reasoning'],
    tags: ['cognitive', 'curiosity'],
  },
  {
    id: 'recognizes-patterns',
    branch: 'thinking',
    subBranch: 'numbers-patterns',
    title: 'Recognizes patterns',
    developmentalTerm: 'Pattern recognition',
    ageRange: 'Often emerging between 3–4 years',
    ageBand: '3-4y',
    whatItIs:
      'Your child notices and can sometimes continue a simple repeating pattern, like red-blue-red-blue.',
    whyItMatters:
      'Pattern recognition is a key early math and logic skill, helping children predict what comes next based on what they’ve already seen.',
    worldItOpens:
      'Your child discovers that the world has rhythms and repetitions that can be noticed and even predicted.',
    activities: [
      'Build simple repeating patterns with blocks or beads and ask "what comes next?"',
      'Point out patterns in nature, clothing, or daily routines.',
      'Clap or sing simple rhythmic patterns together.',
    ],
    watchFor: ['Copying an existing pattern often comes before independently continuing or creating one.'],
    unlocks: ['Making predictions', 'Early math concepts'],
    tags: ['cognitive', 'math'],
  },
  {
    id: 'makes-predictions',
    branch: 'thinking',
    subBranch: 'problem-solving',
    title: 'Makes predictions',
    developmentalTerm: 'Predictive reasoning',
    ageRange: 'Often emerging between 4–5 years',
    ageBand: '4-5y',
    whatItIs:
      'Your child can guess what will happen next in a story, game, or simple experiment, based on clues or past experience.',
    whyItMatters:
      'Making predictions shows your child connecting cause and effect across time — an important reasoning skill for science and problem-solving.',
    worldItOpens:
      'Your child discovers they can think ahead, imagining what is likely to happen before it actually does.',
    activities: [
      'Pause during stories and ask "what do you think happens next?"',
      'Try simple kitchen or water-play experiments and predict the outcome together.',
      'Talk through "if this, then that" scenarios during everyday play.',
    ],
    watchFor: ['Predictions may be inaccurate at first — the act of predicting matters more than being right.'],
    unlocks: ['Early scientific thinking', 'More complex problem solving'],
    tags: ['cognitive'],
  },

  // ───────────────────────── PEOPLE ─────────────────────────
  {
    id: 'social-smile',
    branch: 'people',
    subBranch: 'attachment-recognition',
    title: 'Social smile',
    developmentalTerm: 'Social smiling',
    ageRange: 'Often emerging in the first three months',
    ageBand: '0-3m',
    whatItIs:
      'Your baby smiles in response to seeing a familiar face or hearing a familiar voice, rather than only smiling randomly.',
    whyItMatters:
      'A social smile is one of the very first signs of intentional social connection — your baby smiling because of you, specifically.',
    worldItOpens:
      'Your baby discovers that people are a source of joy and connection, and that their own expressions can be shared with someone else.',
    activities: [
      'Spend close, face-to-face time talking and smiling with your baby.',
      'Respond to any early smiles with warmth and delight.',
      'Make gentle, exaggerated facial expressions during calm, alert moments.',
    ],
    watchFor: ['Social smiles are different from the reflexive smiles babies sometimes show during sleep.'],
    unlocks: ['Recognizing familiar people', 'Imitating expressions'],
    tags: ['social', 'early'],
  },
  {
    id: 'imitates-expressions',
    branch: 'people',
    subBranch: 'imitation',
    title: 'Imitates expressions',
    developmentalTerm: 'Facial imitation',
    ageRange: 'Often emerging around 4–6 months',
    ageBand: '4-6m',
    whatItIs:
      'Your baby copies simple facial expressions or sounds, like sticking out a tongue or making an "oh" face.',
    whyItMatters:
      'Imitation is one of the earliest ways children learn — by watching others and copying what they see and hear.',
    worldItOpens:
      'Your baby discovers that they can mirror another person, an early seed of empathy and connection.',
    activities: [
      'Make simple, exaggerated faces and pause to see if your baby copies.',
      'Play "copy me" games with sounds and faces during quiet, alert time.',
      'Respond with delight whenever an imitation attempt happens, even if imperfect.',
    ],
    watchFor: ['Imitation may be delayed by a moment or two as your baby processes what they saw.'],
    unlocks: ['Plays peekaboo', 'Waves goodbye', 'Imitating actions with objects'],
    tags: ['social', 'imitation'],
  },
  {
    id: 'recognizes-familiar-people',
    branch: 'people',
    subBranch: 'attachment-recognition',
    title: 'Recognizes familiar people',
    developmentalTerm: 'Familiar face recognition',
    ageRange: 'Often emerging around 4–6 months',
    ageBand: '4-6m',
    whatItIs:
      'Your baby shows clear excitement, calm, or recognition around familiar caregivers, and may show wariness around unfamiliar faces.',
    whyItMatters:
      'Recognizing familiar people is a sign of forming attachment — a secure emotional bond that supports healthy development.',
    worldItOpens:
      'Your baby discovers that some people are "their" people — a foundation of trust and security to explore the world from.',
    activities: [
      'Maintain consistent, warm routines with primary caregivers.',
      'Introduce new people gradually and calmly, staying close for reassurance.',
      'Use photos of family members during quiet play and naming time.',
    ],
    watchFor: ['Wariness or fussiness around unfamiliar people is a healthy and expected sign of attachment, not a problem.'],
    unlocks: ['Stranger awareness', 'Comfort-seeking from specific caregivers'],
    tags: ['social', 'attachment'],
  },
  {
    id: 'plays-peekaboo',
    branch: 'people',
    subBranch: 'shared-attention',
    title: 'Plays peekaboo',
    developmentalTerm: 'Reciprocal social play',
    ageRange: 'Often emerging around 7–9 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child anticipates and enjoys the hide-and-reveal rhythm of peekaboo, often laughing or trying to participate actively.',
    whyItMatters:
      'Peekaboo combines object permanence, anticipation, and shared social joy — a wonderfully rich early social-cognitive game.',
    worldItOpens:
      'Your child discovers the delight of shared rhythm and anticipation with another person — an early form of social rhythm.',
    activities: [
      'Play classic peekaboo with hands, a cloth, or hiding behind furniture.',
      'Vary the timing and silliness to keep anticipation fresh.',
      'Let your child take a turn hiding and revealing once they are able.',
    ],
    watchFor: ['Anticipatory laughter or kicking before the reveal is a great sign of growing engagement.'],
    unlocks: ['Imitating games', 'Turn-taking in play'],
    tags: ['social', 'play'],
  },
  {
    id: 'shows-object-to-adult',
    branch: 'people',
    subBranch: 'shared-attention',
    title: 'Shows an object to an adult',
    developmentalTerm: 'Showing / social referencing',
    ageRange: 'Often emerging around 10–12 months',
    ageBand: '10-12m',
    whatItIs:
      'Your child holds up or carries an object to show you, often watching your face for a reaction.',
    whyItMatters:
      'Showing is a clear act of wanting to share an experience with someone else — a foundational social and communicative skill.',
    worldItOpens:
      'Your child discovers that experiences are richer when shared, and that other people’s reactions matter to them.',
    activities: [
      'React with genuine enthusiasm whenever your child shows you something.',
      'Narrate what you see: "Wow, you found a leaf!"',
      'Show objects back to your child to model the behavior.',
    ],
    watchFor: ['Watch for your child glancing at your face after showing something — that checking-in is the key social piece.'],
    unlocks: ['Joint attention', 'Early conversation turn-taking'],
    tags: ['social'],
  },
  {
    id: 'plays-near-other-children',
    branch: 'people',
    subBranch: 'play-with-others',
    title: 'Plays near other children',
    developmentalTerm: 'Parallel play',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child plays contentedly near other children, sometimes watching or briefly copying them, without much direct interaction yet.',
    whyItMatters:
      'Parallel play is an important early stage of social development — comfort being around peers comes before complex cooperative play.',
    worldItOpens:
      'Your child discovers other children as interesting companions in their world, even before knowing how to play "with" them directly.',
    activities: [
      'Arrange simple playdates or playground time with similarly aged children.',
      'Offer duplicate toys so children can play the same activity side by side.',
      'Avoid forcing direct interaction — let curiosity build naturally.',
    ],
    watchFor: ['Brief watching or copying of another child’s actions is a meaningful sign of social interest.'],
    unlocks: ['Taking turns with help', 'Joining group play'],
    tags: ['social', 'play'],
  },
  {
    id: 'takes-turns-with-help',
    branch: 'people',
    subBranch: 'cooperation-empathy',
    title: 'Takes turns with help',
    developmentalTerm: 'Early turn-taking',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child can take turns with a toy or activity when an adult supports and guides the exchange.',
    whyItMatters:
      'Turn-taking is a building block of cooperation and friendship, requiring patience and an understanding of fairness.',
    worldItOpens:
      'Your child discovers social rhythm — the back-and-forth give and take that makes shared play possible.',
    activities: [
      'Play simple turn-taking games like rolling a ball back and forth.',
      'Narrate turns clearly: "your turn... now my turn."',
      'Use a visible cue, like a timer or token, to make turns concrete.',
    ],
    watchFor: ['Turn-taking without support is still developing — expect to actively coach this for a while.'],
    unlocks: ['Sharing with help', 'Following simple game rules'],
    tags: ['social', 'cooperation'],
  },
  {
    id: 'shares-with-help',
    branch: 'people',
    subBranch: 'cooperation-empathy',
    title: 'Shares with help',
    developmentalTerm: 'Early sharing',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child can offer or give up an object to another child when an adult helps guide the moment.',
    whyItMatters:
      'Sharing requires balancing your own wants with someone else’s — an early and genuinely difficult social-emotional skill.',
    worldItOpens:
      'Your child discovers that generosity can strengthen connection with others, even when it requires giving something up.',
    activities: [
      'Acknowledge how hard sharing can feel: "I know it’s hard to wait."',
      'Practice sharing in low-stakes moments, like snacks or simple toys.',
      'Praise sharing attempts specifically and warmly when they happen.',
    ],
    watchFor: ['Sharing without any support is still uncommon at this age and continues developing for years.'],
    unlocks: ['Comforting others', 'Cooperative group play'],
    tags: ['social', 'cooperation'],
  },
  {
    id: 'comforts-someone',
    branch: 'people',
    subBranch: 'cooperation-empathy',
    title: 'Comforts someone',
    developmentalTerm: 'Early empathy',
    ageRange: 'Often emerging between 3–4 years',
    ageBand: '3-4y',
    whatItIs:
      'Your child notices when someone is upset and offers comfort, like a hug, a kind word, or bringing a favorite toy.',
    whyItMatters:
      'Comforting others shows your child recognizing and responding to someone else’s feelings — a meaningful empathy milestone.',
    worldItOpens:
      'Your child discovers that they can affect someone else’s emotional state in a caring way — the beginning of compassionate action.',
    activities: [
      'Model comforting language and actions when others are upset.',
      'Name emotions out loud so your child can connect feelings to actions: "she looks sad, maybe a hug would help."',
      'Praise caring gestures specifically when you notice them.',
    ],
    watchFor: ['Comforting attempts may be imperfect or even a little awkward — the instinct to help matters most.'],
    unlocks: ['Joining group play', 'Repairing after conflict'],
    tags: ['social', 'empathy'],
  },
  {
    id: 'joins-group-play',
    branch: 'people',
    subBranch: 'play-with-others',
    title: 'Joins group play',
    developmentalTerm: 'Cooperative play',
    ageRange: 'Often emerging between 4–5 years',
    ageBand: '4-5y',
    whatItIs:
      'Your child actively joins other children in shared, cooperative play with common goals, like building together or playing pretend games.',
    whyItMatters:
      'Cooperative play requires negotiation, shared imagination, and flexibility — important social skills for friendships and school.',
    worldItOpens:
      'Your child discovers the richness of true collaboration — creating something together that no one could create alone.',
    activities: [
      'Arrange playdates with open-ended toys that encourage shared goals, like blocks or pretend kitchens.',
      'Coach through small conflicts rather than solving them immediately.',
      'Celebrate moments of successful cooperation specifically.',
    ],
    watchFor: ['Conflicts over roles or rules are common in group play and are valuable practice for negotiation.'],
    unlocks: ['Following simple game rules', 'Making and keeping friendships'],
    tags: ['social', 'play'],
  },

  // ───────────────────────── FEELINGS ─────────────────────────
  {
    id: 'calms-with-caregiver-support',
    branch: 'feelings',
    subBranch: 'expressing-needs',
    title: 'Calms with caregiver support',
    developmentalTerm: 'Co-regulation',
    ageRange: 'Often emerging in the first three months',
    ageBand: '0-3m',
    whatItIs:
      'Your baby settles and calms more easily when held, rocked, or soothed by a caregiver during distress.',
    whyItMatters:
      'This is the very first stage of emotional regulation — borrowing calm from a trusted adult before learning to self-soothe later on.',
    worldItOpens:
      'Your baby discovers that big feelings are survivable and that comfort is reliably available — the foundation of emotional security.',
    activities: [
      'Respond promptly and warmly to early signs of distress.',
      'Use consistent soothing techniques like rocking, gentle sound, or skin-to-skin contact.',
      'Stay calm yourself — your own regulated presence helps your baby regulate too.',
    ],
    watchFor: ['Every baby has different soothing preferences — what works can take some trial and error to discover.'],
    unlocks: ['Showing preferences', 'Reaching for comfort'],
    tags: ['emotional', 'early'],
  },
  {
    id: 'shows-preferences',
    branch: 'feelings',
    subBranch: 'expressing-needs',
    title: 'Shows preferences',
    developmentalTerm: 'Preference expression',
    ageRange: 'Often emerging around 4–6 months',
    ageBand: '4-6m',
    whatItIs:
      'Your baby clearly shows like or dislike for specific people, toys, foods, or activities through expression and body language.',
    whyItMatters:
      'Showing preferences is an early sign of a developing sense of self — your baby beginning to know what they want.',
    worldItOpens:
      'Your baby discovers their own likes and dislikes as a real part of who they are, distinct from anyone else.',
    activities: [
      'Offer simple choices when possible, like between two toys.',
      'Notice and name preferences out loud: "you really love this song!"',
      'Respect dislikes when reasonable, rather than always overriding them.',
    ],
    watchFor: ['Preferences can shift quickly day to day — that is a normal part of early development.'],
    unlocks: ['Reaching for comfort', 'Says or gestures help'],
    tags: ['emotional'],
  },
  {
    id: 'reaches-for-comfort',
    branch: 'feelings',
    subBranch: 'expressing-needs',
    title: 'Reaches for comfort',
    developmentalTerm: 'Attachment-seeking behavior',
    ageRange: 'Often emerging around 7–9 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child actively reaches, crawls toward, or gestures for a caregiver when upset, tired, or overwhelmed.',
    whyItMatters:
      'This shows a clear, active attachment behavior — your child knowing exactly who can help them feel better and seeking them out.',
    worldItOpens:
      'Your child discovers they can take action to get the comfort they need, rather than only waiting for it to arrive.',
    activities: [
      'Respond consistently when your child reaches for comfort, building trust over time.',
      'Stay physically near during unfamiliar or overwhelming situations.',
      'Name the feeling and the response: "you’re tired, let’s snuggle."',
    ],
    watchFor: ['This behavior often intensifies temporarily during separation, illness, or big life changes.'],
    unlocks: ['Says or gestures help', 'Handling small disappointment with support'],
    tags: ['emotional', 'attachment'],
  },
  {
    id: 'says-or-gestures-help',
    branch: 'feelings',
    subBranch: 'expressing-needs',
    title: 'Says or gestures "help"',
    developmentalTerm: 'Requesting assistance',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child uses a word, sign, or clear gesture to ask for help when they are stuck or struggling with something.',
    whyItMatters:
      'Asking for help shows growing self-awareness — recognizing a limit and knowing that another person can solve it.',
    worldItOpens:
      'Your child discovers that other people are a resource they can call on, not something separate from solving their own problems.',
    activities: [
      'Model the word or gesture for "help" during your own minor struggles.',
      'Pause before immediately solving a problem, giving space for your child to ask first.',
      'Respond warmly when help is requested, reinforcing that asking works.',
    ],
    watchFor: ['Frustration may show up before the request for help does — both are part of the same learning process.'],
    unlocks: ['Says no', 'Waits briefly'],
    tags: ['emotional', 'language adjacent'],
  },
  {
    id: 'says-no',
    branch: 'feelings',
    subBranch: 'expressing-needs',
    title: 'Says "no"',
    developmentalTerm: 'Assertion of will',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child uses "no," shaking their head, or pushing away to clearly express disagreement or refusal.',
    whyItMatters:
      'Saying "no" is an early and important sign of an emerging sense of self — your child recognizing they have their own will and opinions.',
    worldItOpens:
      'Your child discovers they are a separate person with their own preferences, distinct from what others want for them.',
    activities: [
      'Offer choices throughout the day to give a healthy outlet for independence.',
      'Acknowledge the "no" even when the answer still has to be yes: "I hear you don’t want to, and we still need to."',
      'Stay calm and consistent rather than treating "no" as defiance to punish.',
    ],
    watchFor: ['This stage can feel intense, but it reflects healthy identity development, not a behavior problem.'],
    unlocks: ['Names basic feelings', 'Handles small disappointment with support'],
    tags: ['emotional', 'independence'],
  },
  {
    id: 'names-basic-feelings',
    branch: 'feelings',
    subBranch: 'naming-emotions',
    title: 'Names basic feelings',
    developmentalTerm: 'Emotion labeling',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child uses simple words like "happy," "sad," or "mad" to describe their own or others’ emotional states.',
    whyItMatters:
      'Naming emotions is the first step toward managing them — it is much easier to handle a feeling that has a name.',
    worldItOpens:
      'Your child discovers their own inner world as something that can be noticed, named, and talked about with others.',
    activities: [
      'Name emotions out loud as they happen: "you seem frustrated that the tower fell."',
      'Read books that explore characters’ feelings and talk about them together.',
      'Use a simple feelings chart or pictures to build emotional vocabulary.',
    ],
    watchFor: ['Children often recognize basic emotions in others before reliably naming their own in the moment.'],
    unlocks: ['Handling disappointment', 'Noticing another person’s feelings'],
    tags: ['emotional'],
  },
  {
    id: 'waits-briefly',
    branch: 'feelings',
    subBranch: 'waiting-transitions',
    title: 'Waits briefly',
    developmentalTerm: 'Delay tolerance',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child can tolerate a short delay before getting something they want, especially with reassurance or a clear timeframe.',
    whyItMatters:
      'Waiting builds early self-regulation, an important skill for managing frustration and impulse throughout life.',
    worldItOpens:
      'Your child discovers that wanting something now and getting it now are not always the same thing — and that waiting is survivable.',
    activities: [
      'Practice very short waits with a clear reason: "one more minute, then snack."',
      'Use a visible timer or countdown to make the wait concrete.',
      'Praise calm waiting specifically when it happens, even briefly.',
    ],
    watchFor: ['A few seconds of successful waiting is meaningful progress — duration grows gradually.'],
    unlocks: ['Handling small disappointment with support', 'Following routines and transitions'],
    tags: ['emotional', 'self-regulation'],
  },
  {
    id: 'handles-small-disappointment-with-support',
    branch: 'feelings',
    subBranch: 'frustration-recovery',
    title: 'Handles small disappointment with support',
    developmentalTerm: 'Co-regulated coping',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child can recover from a small letdown, like a broken cookie or a turn ending, with comfort and guidance from an adult.',
    whyItMatters:
      'Practicing recovery from small disappointments, with support, builds the resilience needed to handle bigger setbacks later.',
    worldItOpens:
      'Your child discovers that disappointment does not last forever, and that comfort and recovery reliably follow upset feelings.',
    activities: [
      'Acknowledge the disappointment honestly: "that’s really disappointing, I understand."',
      'Offer comfort first, problem-solving second.',
      'Avoid rushing past the feeling — let it be felt before moving on.',
    ],
    watchFor: ['Big reactions to small letdowns are common and expected at this stage — they are not overreactions to correct.'],
    unlocks: ['Tries again after failure', 'Uses a calming strategy'],
    tags: ['emotional', 'resilience'],
  },
  {
    id: 'tries-again-after-failure',
    branch: 'feelings',
    subBranch: 'frustration-recovery',
    title: 'Tries again after failure',
    developmentalTerm: 'Frustration tolerance / persistence',
    ageRange: 'Often emerging between 3–4 years',
    ageBand: '3-4y',
    whatItIs:
      'Your child returns to a difficult task after an initial failure or setback, rather than giving up completely.',
    whyItMatters:
      'Persistence after failure is a key building block of resilience and a growth mindset toward challenges.',
    worldItOpens:
      'Your child discovers that effort over time can overcome a setback — failure is a step, not an ending.',
    activities: [
      'Praise effort and persistence specifically, not just success: "you kept trying even when it was hard."',
      'Model your own recovery from small mistakes out loud.',
      'Offer just enough help to keep frustration manageable, without solving it for them.',
    ],
    watchFor: ['Giving up quickly is common at first — gentle encouragement helps more than pressure.'],
    unlocks: ['Uses a calming strategy', 'Greater independence in problem solving'],
    tags: ['emotional', 'resilience'],
  },
  {
    id: 'uses-calming-strategy',
    branch: 'feelings',
    subBranch: 'frustration-recovery',
    title: 'Uses a calming strategy',
    developmentalTerm: 'Self-regulation strategy use',
    ageRange: 'Often emerging between 4–5 years',
    ageBand: '4-5y',
    whatItIs:
      'Your child uses a learned strategy, like deep breaths, counting, or asking for space, to calm down during strong emotions.',
    whyItMatters:
      'Independently using a calming strategy is a major step in self-regulation — managing big feelings without needing constant outside help.',
    worldItOpens:
      'Your child discovers that they have tools of their own for managing difficult feelings, building confidence in handling life’s ups and downs.',
    activities: [
      'Teach and practice a simple calming strategy during calm moments, not just during upset.',
      'Model your own use of the strategy out loud: "I’m going to take a deep breath."',
      'Offer gentle reminders of the strategy during early stages of upset, before it escalates.',
    ],
    watchFor: ['Strategies often work better when practiced in calm moments first, rather than introduced only during a meltdown.'],
    unlocks: ['Noticing another person’s feelings', 'Greater emotional independence'],
    tags: ['emotional', 'self-regulation'],
  },

  // ───────────────────────── DAILY LIFE ─────────────────────────
  {
    id: 'feeds-self-with-fingers',
    branch: 'dailyLife',
    subBranch: 'eating-drinking',
    title: 'Feeds self with fingers',
    developmentalTerm: 'Self-feeding (finger foods)',
    ageRange: 'Often emerging around 7–9 months',
    ageBand: '7-9m',
    whatItIs:
      'Your child picks up small, soft pieces of food and brings them to their own mouth without help.',
    whyItMatters:
      'Self-feeding combines fine motor precision with growing independence, and lets your child explore taste and texture on their own terms.',
    worldItOpens:
      'Your child discovers they can meet their own needs directly — feeding themselves rather than only being fed.',
    activities: [
      'Offer soft, easy-to-grab finger foods like banana, avocado, or steamed vegetables.',
      'Allow some mess as a normal part of learning self-feeding.',
      'Eat together so your child can watch and copy your own eating.',
    ],
    watchFor: ['Most food may end up on the floor before reliably making it to the mouth — that is part of the process.'],
    unlocks: ['Drinking from a cup with help', 'Using a spoon with spilling'],
    safetyNotes: 'Always supervise feeding closely and avoid choking-hazard foods.',
    tags: ['daily life', 'fine motor adjacent'],
  },
  {
    id: 'drinks-from-cup-with-help',
    branch: 'dailyLife',
    subBranch: 'eating-drinking',
    title: 'Drinks from a cup with help',
    developmentalTerm: 'Cup drinking',
    ageRange: 'Often emerging around 10–12 months',
    ageBand: '10-12m',
    whatItIs:
      'Your child drinks from an open or sippy cup with an adult holding or steadying it, tipping it back to take a sip.',
    whyItMatters:
      'Cup drinking builds oral motor coordination and is an important step away from bottle or breast feeding routines.',
    worldItOpens:
      'Your child discovers a new, more grown-up way to meet a basic need, one step closer to mealtime independence.',
    activities: [
      'Offer a small amount of water in an open cup during supervised practice.',
      'Steady the cup together at first, gradually offering less support.',
      'Keep practice sessions short and pressure-free.',
    ],
    watchFor: ['Spilling is extremely common at first and improves steadily with regular practice.'],
    unlocks: ['Drinking independently', 'Greater mealtime independence'],
    tags: ['daily life'],
  },
  {
    id: 'uses-spoon-with-spilling',
    branch: 'dailyLife',
    subBranch: 'eating-drinking',
    title: 'Uses a spoon, with spilling',
    developmentalTerm: 'Early self-feeding with utensils',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child attempts to scoop and eat food with a spoon during meals, even though a fair amount spills along the way.',
    whyItMatters:
      'This stage of messy, determined practice is exactly how spoon mastery develops — repetition builds the needed coordination.',
    worldItOpens:
      'Your child discovers the satisfaction of feeding themselves a whole meal, mess and all, rather than relying on someone else.',
    activities: [
      'Use a splat mat or easy-to-clean space to reduce mealtime stress about mess.',
      'Offer thicker foods that stay on the spoon more easily, like oatmeal or mashed potatoes.',
      'Resist the urge to take over — let the practice continue even when it is slow.',
    ],
    watchFor: ['Spilling and occasional finger use alongside the spoon are completely normal at this stage.'],
    unlocks: ['Confident, independent spoon use', 'Using a fork'],
    tags: ['daily life', 'fine motor adjacent'],
  },
  {
    id: 'helps-clean-up-toys',
    branch: 'dailyLife',
    subBranch: 'helping-chores',
    title: 'Helps clean up toys',
    developmentalTerm: 'Early helping behavior',
    ageRange: 'Often emerging between 13–18 months',
    ageBand: '13-18m',
    whatItIs:
      'Your child puts a toy or two away when invited to help, especially with songs, games, or simple modeling.',
    whyItMatters:
      'Helping with cleanup builds early responsibility and a sense of belonging and contribution within the family.',
    worldItOpens:
      'Your child discovers they can take part in caring for their shared spaces, not just using them.',
    activities: [
      'Turn cleanup into a short, fun routine with a cleanup song.',
      'Clean up together rather than asking your child to do it alone.',
      'Keep expectations small — putting away one or two items is a real success.',
    ],
    watchFor: ['Full, independent cleanup is not expected yet — partial participation is the goal at this age.'],
    unlocks: ['Doing simple chores', 'Following bedtime and daily routines'],
    tags: ['daily life', 'cooperation'],
  },
  {
    id: 'washes-hands-with-help',
    branch: 'dailyLife',
    subBranch: 'dressing-hygiene',
    title: 'Washes hands with help',
    developmentalTerm: 'Hygiene routine participation',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child participates in handwashing, rubbing hands together with soap and rinsing, with an adult guiding the steps.',
    whyItMatters:
      'Participating in hygiene routines builds both health habits and a sense of capability in caring for their own body.',
    worldItOpens:
      'Your child discovers a repeatable routine they can take part in every day, building a sense of order and self-care.',
    activities: [
      'Use a simple, consistent song to mark handwashing time.',
      'Offer a stable step stool to reach the sink safely and independently.',
      'Narrate each step clearly: "wet, soap, scrub, rinse, dry."',
    ],
    watchFor: ['Thoroughness takes time to develop — the routine itself matters more than perfect technique at first.'],
    unlocks: ['Brushing teeth with help', 'Greater hygiene independence'],
    safetyNotes: 'Check water temperature to avoid burns and supervise around sinks.',
    tags: ['daily life', 'hygiene'],
  },
  {
    id: 'brushes-teeth-with-help',
    branch: 'dailyLife',
    subBranch: 'dressing-hygiene',
    title: 'Brushes teeth with help',
    developmentalTerm: 'Hygiene routine participation',
    ageRange: 'Often emerging between 19–24 months',
    ageBand: '19-24m',
    whatItIs:
      'Your child holds and moves a toothbrush in their mouth, usually with an adult finishing the job to ensure thoroughness.',
    whyItMatters:
      'Early participation in tooth brushing builds lifelong hygiene habits and a sense of routine and self-care.',
    worldItOpens:
      'Your child discovers their body needs regular care, and that they can take an active part in providing it.',
    activities: [
      'Let your child brush first, then an adult finishes for thoroughness.',
      'Use a two-minute song or timer to make brushing predictable and fun.',
      'Model brushing your own teeth alongside your child.',
    ],
    watchFor: ['Resistance to brushing is common — consistency and gentle routine usually help more than pressure.'],
    unlocks: ['Greater hygiene independence', 'Following bedtime routine'],
    tags: ['daily life', 'hygiene'],
  },
  {
    id: 'takes-off-simple-clothing',
    branch: 'dailyLife',
    subBranch: 'dressing-hygiene',
    title: 'Takes off simple clothing',
    developmentalTerm: 'Undressing independence',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child can remove simple items like socks, an open jacket, or loose pants without help.',
    whyItMatters:
      'Undressing is usually mastered before dressing, and builds the body awareness and fine motor skills dressing will require.',
    worldItOpens:
      'Your child discovers a new layer of independence in caring for their own body and routines.',
    activities: [
      'Offer loose, easy-to-remove clothing during practice opportunities.',
      'Build in extra time during routines so there is no rush to take over.',
      'Celebrate small wins, like getting one sock off.',
    ],
    watchFor: ['Undressing typically becomes reliable well before dressing — that order is completely normal.'],
    unlocks: ['Putting on simple clothing with help', 'Greater self-care independence'],
    tags: ['daily life', 'independence'],
  },
  {
    id: 'uses-potty-or-toilet',
    branch: 'dailyLife',
    subBranch: 'independence',
    title: 'Uses potty or toilet',
    developmentalTerm: 'Toilet learning',
    ageRange: 'Often emerging between 2–3 years',
    ageBand: '2-3y',
    whatItIs:
      'Your child recognizes the need to use the toilet and can use it with varying degrees of independence and support.',
    whyItMatters:
      'Toilet learning involves body awareness, communication, and motivation working together — and the timeline varies enormously between children.',
    worldItOpens:
      'Your child discovers a new level of bodily independence and control, often a source of real pride.',
    activities: [
      'Follow your child’s readiness cues rather than a fixed timeline.',
      'Keep the tone calm and pressure-free, with simple, consistent routines.',
      'Celebrate attempts and successes without making accidents feel like failures.',
    ],
    watchFor: ['This skill has one of the widest normal age ranges of any in this guide — comparison to other children is rarely useful here.'],
    unlocks: ['Greater independence in daily routines', 'Confidence in self-care'],
    parentGuidance: 'If you have concerns about toilet learning progress, a pediatrician can offer guidance tailored to your child.',
    tags: ['daily life', 'independence'],
  },
  {
    id: 'follows-bedtime-routine',
    branch: 'dailyLife',
    subBranch: 'routines',
    title: 'Follows bedtime routine',
    developmentalTerm: 'Routine participation',
    ageRange: 'Often emerging between 3–4 years',
    ageBand: '3-4y',
    whatItIs:
      'Your child anticipates and participates in the steps of a consistent bedtime routine, like bath, books, and lights out.',
    whyItMatters:
      'Following routines builds a sense of predictability and security, and supports healthy sleep habits.',
    worldItOpens:
      'Your child discovers that their day has a rhythm they can rely on and even help create.',
    activities: [
      'Keep a simple, consistent sequence of steps each night.',
      'Use a visual chart with pictures of each bedtime step.',
      'Let your child make small choices within the routine, like which book to read.',
    ],
    watchFor: ['Pushback at bedtime is common even with a great routine — consistency over many nights matters more than any single night.'],
    unlocks: ['Greater independence with routines', 'Helping prepare for the next day'],
    tags: ['daily life', 'routines'],
  },
  {
    id: 'helps-prepare-simple-food',
    branch: 'dailyLife',
    subBranch: 'helping-chores',
    title: 'Helps prepare simple food',
    developmentalTerm: 'Participatory helping',
    ageRange: 'Often emerging between 4–5 years',
    ageBand: '4-5y',
    whatItIs:
      'Your child takes part in simple food preparation tasks, like stirring, pouring, spreading, or washing produce.',
    whyItMatters:
      'Helping with real tasks builds fine motor skills, sequencing, and a genuine sense of contribution to the family.',
    worldItOpens:
      'Your child discovers they can be a meaningful contributor to shared family life, not just a participant in it.',
    activities: [
      'Offer simple, safe tasks like stirring batter, washing vegetables, or spreading butter.',
      'Expect some mess and slower pace, and build in extra time.',
      'Talk through each step together, building sequencing and vocabulary.',
    ],
    watchFor: ['Interest and attention span for these tasks can vary a lot day to day — that is normal.'],
    unlocks: ['Doing simple chores independently', 'Greater kitchen and household participation'],
    safetyNotes: 'Keep knives, hot surfaces, and appliances managed by an adult; supervise closely throughout.',
    tags: ['daily life', 'independence'],
  },
];
