// This generates unique content for each genre/occasion combination
// to avoid duplicate content issues

export function getGenreOccasionContent(genre: string, occasion: string): string {
  const contentMap: Record<string, Record<string, string>> = {
    pop: {
      birthday: `Pop music brings the party energy that every birthday deserves. 
        With catchy hooks and upbeat melodies, a pop birthday song gets everyone 
        singing along and creates an unforgettable celebration moment.`,
      wedding: `Pop songs capture the joy and excitement of wedding celebrations. 
        Modern pop melodies work perfectly for first dances, reception entrances, 
        and creating those magical moments couples remember forever.`,
      anniversary: `Pop anniversary songs celebrate your love story with contemporary 
        flair. The genre's romantic energy and memorable melodies perfectly capture 
        the journey you've shared together.`,
      retirement: `Pop retirement songs celebrate career achievements with upbeat 
        optimism. Modern pop hits capture the excitement of new beginnings and 
        the joy of well-deserved freedom.`,
      graduation: `Pop graduation songs capture the hope and excitement of new 
        beginnings. The genre's youthful energy mirrors the optimism of graduates 
        stepping into their future.`,
      'mothers-day': `Pop Mother's Day songs express love and appreciation with 
        contemporary style. Modern pop melodies convey heartfelt emotions that 
        resonate with today's families.`,
      'fathers-day': `Pop Father's Day songs celebrate paternal bonds with upbeat 
        energy. The genre's positive vibes perfectly honor the guidance and support 
        fathers provide.`,
      valentines: `Pop Valentine's songs express romance with modern passion. 
        Contemporary pop hits capture the excitement and intimacy of romantic love 
        in today's world.`,
      christmas: `Pop Christmas songs bring holiday cheer with festive energy. 
        Modern pop arrangements add fresh excitement to traditional Christmas 
        celebrations and family gatherings.`,
      memorial: `Pop memorial songs honor loved ones with gentle remembrance. 
        Contemporary pop melodies provide comfort while celebrating the beautiful 
        memories that remain.`,
      'new-baby': `Pop new baby songs celebrate new life with joyful energy. 
        Upbeat pop melodies capture the excitement and wonder of welcoming a 
        new addition to the family.`,
      'get-well': `Pop get well songs send healing wishes with positive energy. 
        Upbeat pop melodies bring cheer and encouragement during recovery times.`
    },
    rock: {
      birthday: `Rock brings the energy and attitude that makes milestone birthdays 
        legendary. Guitar riffs and powerful vocals turn any birthday into an 
        epic celebration they'll never forget.`,
      wedding: `Rock wedding songs add personality and edge to your celebration. 
        Whether it's a power ballad for the first dance or an anthem for the 
        reception, rock brings authentic emotion and energy.`,
      anniversary: `Rock anniversary songs celebrate enduring love with powerful 
        emotion. Electric guitars and passionate vocals capture the strength and 
        intensity of your lasting commitment.`,
      retirement: `Rock retirement songs celebrate career milestones with epic 
        energy. The genre's powerful sound perfectly honors decades of hard work 
        and the freedom that comes next.`,
      graduation: `Rock graduation songs capture the rebellious spirit and ambition 
        of new graduates. The genre's energy mirrors the confidence and determination 
        to make your mark on the world.`,
      'mothers-day': `Rock Mother's Day songs celebrate maternal strength with 
        powerful emotion. Electric guitars and heartfelt lyrics honor the fierce 
        love and support mothers provide.`,
      'fathers-day': `Rock Father's Day songs celebrate paternal guidance with 
        raw energy. The genre's powerful sound perfectly honors the wisdom and 
        protection fathers offer their children.`,
      valentines: `Rock Valentine's songs express passionate love with electric 
        intensity. From power ballads to rock anthems, the genre captures the 
        fire and devotion of romantic love.`,
      christmas: `Rock Christmas songs bring holiday energy with electric edge. 
        Guitar-driven versions of classics and original rock holiday tunes add 
        powerful energy to festive celebrations.`,
      memorial: `Rock memorial songs honor loved ones with raw emotion and 
        powerful remembrance. Electric guitars and passionate vocals celebrate 
        the impact and legacy of those we've lost.`,
      'new-baby': `Rock new baby songs celebrate new life with powerful energy. 
        Electric guitars and driving rhythms capture the excitement and strength 
        of welcoming a new family member.`,
      'get-well': `Rock get well songs send healing power with energetic encouragement. 
        The genre's driving beat and uplifting lyrics provide strength during 
        recovery and healing.`
    },
    country: {
      birthday: `Country music tells stories, and what better story than celebrating 
        someone's special day? Heartfelt lyrics and acoustic warmth make country 
        birthday songs genuinely touching.`,
      wedding: `Country wedding songs are perfect for couples who value authenticity 
        and storytelling. The genre's emotional depth creates first dance moments 
        that bring tears and smiles in equal measure.`,
      anniversary: `Country anniversary songs celebrate your love story with 
        authentic storytelling. Heartfelt lyrics and acoustic melodies capture 
        the journey of marriage with genuine emotion.`,
      retirement: `Country retirement songs honor career dedication with 
        down-to-earth authenticity. The genre's storytelling tradition perfectly 
        celebrates the hard work and wisdom gained over decades.`,
      graduation: `Country graduation songs celebrate achievement with heartfelt 
        pride. The genre's emphasis on values and hard work resonates with the 
        accomplishments and dreams of new graduates.`,
      'mothers-day': `Country Mother's Day songs express maternal love with 
        heartfelt authenticity. The genre's storytelling tradition perfectly 
        captures the wisdom, sacrifice, and unconditional love of mothers.`,
      'fathers-day': `Country Father's Day songs celebrate paternal guidance with 
        sincere emotion. The genre's focus on family values and hard work honors 
        the dedication and strength fathers provide.`,
      valentines: `Country Valentine's songs express romantic love with genuine 
        heart. The genre's emotional depth and storytelling create intimate 
        expressions of love that feel deeply personal.`,
      christmas: `Country Christmas songs bring holiday warmth with authentic 
        charm. Acoustic arrangements and heartfelt lyrics capture the traditional 
        values and family connections of the season.`,
      memorial: `Country memorial songs honor loved ones with sincere remembrance. 
        The genre's storytelling tradition beautifully celebrates the life, 
        lessons, and legacy of those we've lost.`,
      'new-baby': `Country new baby songs celebrate new life with heartfelt joy. 
        Acoustic warmth and genuine lyrics capture the wonder, hope, and love 
        that come with welcoming a new family member.`,
      'get-well': `Country get well songs send healing wishes with sincere comfort. 
        The genre's authentic warmth and caring lyrics provide genuine support 
        during times of illness and recovery.`
    },
    'hip-hop': {
      birthday: `Hip-hop brings the party energy and creative flow that makes 
        birthday celebrations unforgettable. Rhythmic beats and clever wordplay 
        create personalized songs that get everyone moving.`,
      wedding: `Hip-hop wedding songs celebrate love with modern rhythm and style. 
        The genre's creative expression and contemporary sound perfectly capture 
        the unique story of modern couples.`,
      anniversary: `Hip-hop anniversary songs celebrate your journey with rhythmic 
        storytelling. The genre's creative flow and modern beats capture the 
        evolution of your love story over time.`,
      retirement: `Hip-hop retirement songs celebrate career success with confident 
        flow. The genre's emphasis on achievement and progression perfectly honors 
        the milestones and victories of a professional journey.`,
      graduation: `Hip-hop graduation songs capture ambition and achievement with 
        rhythmic energy. The genre's focus on growth and success resonates with 
        the determination and dreams of new graduates.`,
      'mothers-day': `Hip-hop Mother's Day songs celebrate maternal love with 
        rhythmic appreciation. Creative wordplay and modern beats express the 
        profound impact and guidance mothers provide.`,
      'fathers-day': `Hip-hop Father's Day songs honor paternal wisdom with 
        confident flow. The genre's storytelling tradition and rhythmic expression 
        celebrate the strength and guidance fathers offer.`,
      valentines: `Hip-hop Valentine's songs express romantic love with modern 
        rhythm. The genre's creative wordplay and contemporary beats capture 
        the passion and intimacy of modern romance.`,
      christmas: `Hip-hop Christmas songs bring holiday cheer with rhythmic 
        energy. Modern beats and creative expression add fresh style to traditional 
        holiday celebrations and family gatherings.`,
      memorial: `Hip-hop memorial songs honor loved ones with rhythmic storytelling. 
        The genre's tradition of poetic expression beautifully celebrates the 
        life, wisdom, and influence of those we've lost.`,
      'new-baby': `Hip-hop new baby songs celebrate new life with rhythmic joy. 
        Modern beats and creative flow capture the excitement, hope, and love 
        of welcoming a new addition to the family.`,
      'get-well': `Hip-hop get well songs send healing power with rhythmic 
        encouragement. The genre's positive energy and uplifting beats provide 
        strength and motivation during recovery.`
    },
    'r-and-b': {
      birthday: `R&B brings smooth soul and emotional depth to birthday celebrations. 
        The genre's romantic energy and sophisticated melodies create intimate 
        moments that make birthdays truly special.`,
      wedding: `R&B wedding songs celebrate love with soulful elegance and 
        sophistication. Smooth vocals and emotional depth create first dance 
        moments filled with romance and meaning.`,
      anniversary: `R&B anniversary songs celebrate enduring love with soulful 
        passion. The genre's emotional sophistication and smooth melodies perfectly 
        capture the depth and beauty of lasting commitment.`,
      retirement: `R&B retirement songs celebrate career achievement with smooth 
        sophistication. The genre's elegant sound and emotional depth honor the 
        journey and accomplishments with refined style.`,
      graduation: `R&B graduation songs celebrate achievement with soulful 
        inspiration. The genre's emotional depth and sophisticated melodies 
        capture the pride and promise of new beginnings.`,
      'mothers-day': `R&B Mother's Day songs express maternal love with soulful 
        elegance. Smooth vocals and emotional depth beautifully capture the 
        nurturing wisdom and unconditional love of mothers.`,
      'fathers-day': `R&B Father's Day songs celebrate paternal strength with 
        sophisticated emotion. The genre's smooth sound and heartfelt lyrics honor 
        the guidance, protection, and wisdom fathers provide.`,
      valentines: `R&B Valentine's songs express romantic love with soulful 
        passion. The genre's emotional sophistication and intimate melodies create 
        perfect expressions of love and devotion.`,
      christmas: `R&B Christmas songs bring holiday warmth with soulful elegance. 
        Smooth arrangements and emotional sophistication add refined beauty to 
        traditional holiday celebrations.`,
      memorial: `R&B memorial songs honor loved ones with soulful remembrance. 
        The genre's emotional depth and smooth melodies provide comfort while 
        celebrating the beautiful impact and legacy of those we've lost.`,
      'new-baby': `R&B new baby songs celebrate new life with soulful joy. 
        Smooth melodies and emotional warmth capture the tenderness, wonder, 
        and love of welcoming a new family member.`,
      'get-well': `R&B get well songs send healing comfort with soulful support. 
        The genre's emotional warmth and smooth melodies provide gentle encouragement 
        during times of illness and recovery.`
    },
    folk: {
      birthday: `Folk music brings acoustic warmth and intimate storytelling to 
        birthday celebrations. The genre's authentic charm and gentle melodies 
        create personal moments that feel genuinely heartfelt.`,
      wedding: `Folk wedding songs celebrate love with authentic simplicity and 
        heartfelt storytelling. Acoustic arrangements and sincere lyrics create 
        intimate moments that feel deeply personal and meaningful.`,
      anniversary: `Folk anniversary songs celebrate your journey with authentic 
        storytelling. The genre's gentle warmth and sincere lyrics capture the 
        everyday beauty and deep meaning of your life together.`,
      retirement: `Folk retirement songs honor career dedication with authentic 
        wisdom. The genre's storytelling tradition and acoustic warmth celebrate 
        the journey, lessons, and impact of a professional life well-lived.`,
      graduation: `Folk graduation songs celebrate achievement with heartfelt 
        sincerity. The genre's emphasis on journey and growth resonates with the 
        meaningful accomplishments and dreams of new graduates.`,
      'mothers-day': `Folk Mother's Day songs express maternal love with authentic 
        warmth. The genre's storytelling tradition and acoustic beauty perfectly 
        capture the gentle wisdom and unconditional love of mothers.`,
      'fathers-day': `Folk Father's Day songs celebrate paternal guidance with 
        sincere emotion. The genre's authentic storytelling and acoustic warmth 
        honor the quiet strength and wisdom fathers provide.`,
      valentines: `Folk Valentine's songs express romantic love with genuine 
        sincerity. The genre's intimate storytelling and acoustic melodies create 
        deeply personal expressions of love and devotion.`,
      christmas: `Folk Christmas songs bring holiday warmth with authentic charm. 
        Acoustic arrangements and heartfelt lyrics capture the traditional values 
        and intimate connections of the season.`,
      memorial: `Folk memorial songs honor loved ones with gentle remembrance. 
        The genre's authentic storytelling and acoustic warmth beautifully 
        celebrate the life, wisdom, and gentle influence of those we've lost.`,
      'new-baby': `Folk new baby songs celebrate new life with gentle joy. 
        Acoustic warmth and authentic lyrics capture the tenderness, wonder, 
        and pure love of welcoming a new family member.`,
      'get-well': `Folk get well songs send healing comfort with gentle support. 
        The genre's authentic warmth and caring lyrics provide sincere encouragement 
        during times of illness and recovery.`
    },
    jazz: {
      birthday: `Jazz brings sophisticated elegance and improvisational joy to 
        birthday celebrations. The genre's refined sound and creative energy 
        create memorable moments that feel both classic and fresh.`,
      wedding: `Jazz wedding songs celebrate love with sophisticated romance. 
        The genre's elegant arrangements and emotional depth create first dance 
        moments filled with timeless beauty and meaning.`,
      anniversary: `Jazz anniversary songs celebrate enduring love with sophisticated 
        elegance. The genre's refined sound and emotional complexity perfectly 
        capture the depth, beauty, and evolution of lasting commitment.`,
      retirement: `Jazz retirement songs celebrate career achievement with 
        sophisticated style. The genre's elegant sound and improvisational spirit 
        honor the journey and accomplishments with refined artistry.`,
      graduation: `Jazz graduation songs celebrate achievement with sophisticated 
        inspiration. The genre's emotional complexity and refined melodies capture 
        the pride, promise, and excitement of new beginnings.`,
      'mothers-day': `Jazz Mother's Day songs express maternal love with 
        sophisticated elegance. The genre's refined arrangements and emotional 
        depth beautifully capture the wisdom, grace, and unconditional love of mothers.`,
      'fathers-day': `Jazz Father's Day songs celebrate paternal strength with 
        sophisticated emotion. The genre's elegant sound and refined artistry 
        honor the guidance, protection, and wisdom fathers provide.`,
      valentines: `Jazz Valentine's songs express romantic love with sophisticated 
        passion. The genre's emotional complexity and elegant arrangements create 
        refined expressions of love and devotion.`,
      christmas: `Jazz Christmas songs bring holiday warmth with sophisticated 
        charm. Elegant arrangements and refined artistry add timeless beauty to 
        traditional holiday celebrations.`,
      memorial: `Jazz memorial songs honor loved ones with sophisticated 
        remembrance. The genre's emotional depth and refined elegance provide 
        comfort while celebrating the beautiful legacy and impact of those we've lost.`,
      'new-baby': `Jazz new baby songs celebrate new life with sophisticated joy. 
        Elegant melodies and refined arrangements capture the wonder, beauty, 
        and love of welcoming a new family member.`,
      'get-well': `Jazz get well songs send healing comfort with sophisticated 
        support. The genre's refined elegance and emotional warmth provide gentle 
        encouragement during times of illness and recovery.`
    },
    electronic: {
      birthday: `Electronic music brings modern energy and futuristic beats to 
        birthday celebrations. The genre's innovative sound and rhythmic excitement 
        create vibrant moments that feel contemporary and exciting.`,
      wedding: `Electronic wedding songs celebrate love with modern innovation. 
        The genre's contemporary sound and creative energy perfectly capture the 
        unique vision and style of modern couples.`,
      anniversary: `Electronic anniversary songs celebrate your journey with 
        modern sophistication. The genre's innovative sound and rhythmic complexity 
        capture the evolution and growth of your love story in contemporary style.`,
      retirement: `Electronic retirement songs celebrate career achievement with 
        futuristic energy. The genre's innovative sound and modern beats honor the 
        journey and accomplishments with contemporary excitement.`,
      graduation: `Electronic graduation songs celebrate achievement with modern 
        inspiration. The genre's innovative sound and creative energy capture the 
        excitement, possibility, and forward-looking optimism of new graduates.`,
      'mothers-day': `Electronic Mother's Day songs express maternal love with 
        modern sophistication. The genre's innovative sound and contemporary 
        arrangements beautifully capture the wisdom, support, and unconditional 
        love of mothers in today's world.`,
      'fathers-day': `Electronic Father's Day songs celebrate paternal guidance 
        with modern energy. The genre's contemporary beats and innovative sound 
        honor the strength, protection, and wisdom fathers provide.`,
      valentines: `Electronic Valentine's songs express romantic love with modern 
        passion. The genre's innovative sound and creative energy capture the 
        excitement, intimacy, and contemporary expression of romantic love.`,
      christmas: `Electronic Christmas songs bring holiday cheer with modern 
        innovation. Contemporary arrangements and futuristic beats add fresh 
        excitement to traditional holiday celebrations.`,
      memorial: `Electronic memorial songs honor loved ones with modern 
        remembrance. The genre's innovative sound and emotional depth provide 
        comfort while celebrating the contemporary legacy and impact of those we've lost.`,
      'new-baby': `Electronic new baby songs celebrate new life with modern joy. 
        Contemporary beats and innovative sound capture the excitement, wonder, 
        and love of welcoming a new family member in today's world.`,
      'get-well': `Electronic get well songs send healing power with modern 
        encouragement. The genre's positive energy and contemporary beats provide 
        strength and motivation during recovery.`
    }
  };
  
  return contentMap[genre]?.[occasion] || getDefaultContent(genre, occasion);
}

function getDefaultContent(genre: string, occasion: string): string {
  return `A ${genre} song is a wonderful choice for ${occasion} celebrations. 
    Our AI captures the essence of ${genre} music while personalizing every 
    lyric to honor this special moment.`;
}
