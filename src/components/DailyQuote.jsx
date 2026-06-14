// =============================================
// DAILY QUOTE — Bible-based motivational card
// Changes every day at midnight
// =============================================

const QUOTES = [
  { text: "I can do all things through Christ who strengthens me.", ref: "Philippians 4:13" },
  { text: "For I know the plans I have for you, plans to prosper you and not to harm you, plans to give you hope and a future.", ref: "Jeremiah 29:11" },
  { text: "Trust in the Lord with all your heart and lean not on your own understanding.", ref: "Proverbs 3:5" },
  { text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", ref: "Joshua 1:9" },
  { text: "Commit to the Lord whatever you do, and he will establish your plans.", ref: "Proverbs 16:3" },
  { text: "The Lord is my light and my salvation — whom shall I fear?", ref: "Psalm 27:1" },
  { text: "Do not conform to the pattern of this world, but be transformed by the renewing of your mind.", ref: "Romans 12:2" },
  { text: "With God all things are possible.", ref: "Matthew 19:26" },
  { text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", ref: "Matthew 7:7" },
  { text: "The Lord will fight for you; you need only to be still.", ref: "Exodus 14:14" },
  { text: "God is our refuge and strength, an ever-present help in trouble.", ref: "Psalm 46:1" },
  { text: "Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.", ref: "Galatians 6:9" },
  { text: "I lift up my eyes to the mountains — where does my help come from? My help comes from the Lord.", ref: "Psalm 121:1-2" },
  { text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.", ref: "2 Timothy 1:7" },
  { text: "Whatever you do, work at it with all your heart, as working for the Lord, not for human masters.", ref: "Colossians 3:23" },
  { text: "The beginning of wisdom is this: Get wisdom, and whatever you get, get insight.", ref: "Proverbs 4:7" },
  { text: "Blessed is the one who finds wisdom, and the one who gets understanding.", ref: "Proverbs 3:13" },
  { text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", ref: "Philippians 4:6" },
  { text: "And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.", ref: "Philippians 4:7" },
  { text: "Be still, and know that I am God.", ref: "Psalm 46:10" },
  { text: "No weapon formed against you shall prosper.", ref: "Isaiah 54:17" },
  { text: "Have I not commanded you? Be strong and courageous!", ref: "Joshua 1:9" },
  { text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", ref: "Psalm 34:18" },
  { text: "Cast all your anxiety on him because he cares for you.", ref: "1 Peter 5:7" },
  { text: "The plans of the diligent lead to profit as surely as haste leads to poverty.", ref: "Proverbs 21:5" },
  { text: "Diligent hands will rule, but laziness ends in forced labor.", ref: "Proverbs 12:24" },
  { text: "Apply your heart to instruction and your ears to words of knowledge.", ref: "Proverbs 23:12" },
  { text: "Wisdom is more precious than rubies, and nothing you desire can compare with her.", ref: "Proverbs 8:11" },
  { text: "The heart of the discerning acquires knowledge, for the ears of the wise seek it out.", ref: "Proverbs 18:15" },
  { text: "By wisdom a house is built, and through understanding it is established.", ref: "Proverbs 24:3" },
  { text: "Plans fail for lack of counsel, but with many advisers they succeed.", ref: "Proverbs 15:22" },
  { text: "A wise son brings joy to his father, but a foolish son brings grief to his mother.", ref: "Proverbs 10:1" },
  { text: "The fear of the Lord is the beginning of wisdom.", ref: "Proverbs 9:10" },
  { text: "In all your ways submit to him, and he will make your paths straight.", ref: "Proverbs 3:6" },
  { text: "Even youths grow tired and weary, but those who hope in the Lord will renew their strength.", ref: "Isaiah 40:30-31" },
  { text: "They will soar on wings like eagles; they will run and not grow weary.", ref: "Isaiah 40:31" },
  { text: "I have learned, in whatever state I am, to be content.", ref: "Philippians 4:11" },
  { text: "Now faith is confidence in what we hope for and assurance about what we do not see.", ref: "Hebrews 11:1" },
  { text: "And without faith it is impossible to please God.", ref: "Hebrews 11:6" },
  { text: "Let your light shine before others, that they may see your good deeds.", ref: "Matthew 5:16" },
  { text: "But seek first his kingdom and his righteousness, and all these things will be given to you.", ref: "Matthew 6:33" },
  { text: "The Lord your God is with you, the Mighty Warrior who saves.", ref: "Zephaniah 3:17" },
  { text: "This is the day the Lord has made; let us rejoice and be glad in it.", ref: "Psalm 118:24" },
  { text: "Your word is a lamp for my feet, a light on my path.", ref: "Psalm 119:105" },
  { text: "Delight yourself in the Lord, and he will give you the desires of your heart.", ref: "Psalm 37:4" },
  { text: "The Lord bless you and keep you; the Lord make his face shine on you.", ref: "Numbers 6:24-25" },
  { text: "For everyone who asks receives; the one who seeks finds.", ref: "Matthew 7:8" },
  { text: "I praise you because I am fearfully and wonderfully made.", ref: "Psalm 139:14" },
  { text: "Greater is he that is in you, than he that is in the world.", ref: "1 John 4:4" },
  { text: "Not by might nor by power, but by my Spirit, says the Lord Almighty.", ref: "Zechariah 4:6" },
  { text: "Study to show yourself approved to God, a worker who does not need to be ashamed.", ref: "2 Timothy 2:15" },
  { text: "The Lord gives wisdom; from his mouth come knowledge and understanding.", ref: "Proverbs 2:6" },
  { text: "Train up a child in the way he should go; even when he is old he will not depart from it.", ref: "Proverbs 22:6" },
  { text: "A gentle answer turns away wrath, but a harsh word stirs up anger.", ref: "Proverbs 15:1" },
  { text: "Where there is no vision, the people perish.", ref: "Proverbs 29:18" },
  { text: "Taste and see that the Lord is good; blessed is the one who takes refuge in him.", ref: "Psalm 34:8" },
  { text: "The Lord is my shepherd, I lack nothing.", ref: "Psalm 23:1" },
  { text: "Even though I walk through the darkest valley, I will fear no evil, for you are with me.", ref: "Psalm 23:4" },
  { text: "My God will meet all your needs according to the riches of his glory in Christ Jesus.", ref: "Philippians 4:19" },
  { text: "I sought the Lord, and he answered me; he delivered me from all my fears.", ref: "Psalm 34:4" },
  { text: "You are the light of the world. A town built on a hill cannot be hidden.", ref: "Matthew 5:14" },
  { text: "No eye has seen, no ear has heard, no mind has conceived what God has prepared for those who love him.", ref: "1 Corinthians 2:9" },
  { text: "I can do everything through him who gives me strength.", ref: "Philippians 4:13" },
  { text: "And we know that in all things God works for the good of those who love him.", ref: "Romans 8:28" },
  { text: "If God is for us, who can be against us?", ref: "Romans 8:31" },
]

// Pick a quote based on the day of year — changes every day at midnight
const getDailyQuote = () => {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now - start
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24))
  return QUOTES[dayOfYear % QUOTES.length]
}

const DailyQuote = () => {
  const quote = getDailyQuote()

  return (
    <div style={{
      background: "linear-gradient(135deg, rgba(102,126,234,0.08), rgba(118,75,162,0.08))",
      border: "1px solid rgba(102,126,234,0.2)",
      borderRadius: "var(--radius-lg)",
      padding: "16px 18px",
      marginBottom: 16,
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Decorative quote mark */}
      <div style={{
        position: "absolute", top: -4, left: 12,
        fontSize: 60, color: "var(--primary)", opacity: 0.08,
        fontFamily: "Georgia, serif", lineHeight: 1, userSelect: "none"
      }}>❝</div>

      <div style={{
        fontSize: 13, color: "var(--text)", lineHeight: 1.7,
        fontStyle: "italic", marginBottom: 10,
        paddingLeft: 4, position: "relative"
      }}>
        "{quote.text}"
      </div>

      <div style={{
        display: "flex", alignItems: "center", gap: 8
      }}>
        <div style={{
          width: 24, height: 2, borderRadius: 1,
          background: "var(--primary)", opacity: 0.5
        }} />
        <div style={{
          fontSize: 11, fontWeight: 800, color: "var(--primary)",
          opacity: 0.8, letterSpacing: "0.03em"
        }}>
          {quote.ref}
        </div>
      </div>
    </div>
  )
}

export default DailyQuote
