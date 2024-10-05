import { Species } from "#enums/species";
import { EggTier } from "#enums/egg-type";

/**
 * Map of all starters and their respective {@link EggTier}, which determines which type of egg the starter hatches from.
 */
export const speciesEggTiers = {
  [Species.BULBASAUR]: EggTier.COMMON,
  [Species.CHARMANDER]: EggTier.COMMON,
  [Species.SQUIRTLE]: EggTier.COMMON,
  [Species.CATERPIE]: EggTier.COMMON,
  [Species.WEEDLE]: EggTier.COMMON,
  [Species.PIDGEY]: EggTier.COMMON,
  [Species.RATTATA]: EggTier.COMMON,
  [Species.SPEAROW]: EggTier.COMMON,
  [Species.EKANS]: EggTier.COMMON,
  [Species.PIKACHU]: EggTier.COMMON,
  [Species.SANDSHREW]: EggTier.COMMON,
  [Species.NIDORAN_F]: EggTier.COMMON,
  [Species.NIDORAN_M]: EggTier.COMMON,
  [Species.CLEFAIRY]: EggTier.COMMON,
  [Species.VULPIX]: EggTier.COMMON,
  [Species.JIGGLYPUFF]: EggTier.COMMON,
  [Species.ZUBAT]: EggTier.COMMON,
  [Species.ODDISH]: EggTier.COMMON,
  [Species.PARAS]: EggTier.COMMON,
  [Species.VENONAT]: EggTier.COMMON,
  [Species.DIGLETT]: EggTier.COMMON,
  [Species.MEOWTH]: EggTier.COMMON,
  [Species.PSYDUCK]: EggTier.COMMON,
  [Species.MANKEY]: EggTier.RARE,
  [Species.GROWLITHE]: EggTier.RARE,
  [Species.POLIWAG]: EggTier.COMMON,
  [Species.ABRA]: EggTier.RARE,
  [Species.MACHOP]: EggTier.COMMON,
  [Species.BELLSPROUT]: EggTier.COMMON,
  [Species.TENTACOOL]: EggTier.COMMON,
  [Species.GEODUDE]: EggTier.COMMON,
  [Species.PONYTA]: EggTier.COMMON,
  [Species.SLOWPOKE]: EggTier.COMMON,
  [Species.MAGNEMITE]: EggTier.RARE,
  [Species.FARFETCHD]: EggTier.COMMON,
  [Species.DODUO]: EggTier.COMMON,
  [Species.SEEL]: EggTier.COMMON,
  [Species.GRIMER]: EggTier.COMMON,
  [Species.SHELLDER]: EggTier.RARE,
  [Species.GASTLY]: EggTier.RARE,
  [Species.ONIX]: EggTier.COMMON,
  [Species.DROWZEE]: EggTier.COMMON,
  [Species.KRABBY]: EggTier.COMMON,
  [Species.VOLTORB]: EggTier.COMMON,
  [Species.EXEGGCUTE]: EggTier.COMMON,
  [Species.CUBONE]: EggTier.COMMON,
  [Species.HITMONLEE]: EggTier.RARE,
  [Species.HITMONCHAN]: EggTier.RARE,
  [Species.LICKITUNG]: EggTier.COMMON,
  [Species.KOFFING]: EggTier.COMMON,
  [Species.RHYHORN]: EggTier.COMMON,
  [Species.CHANSEY]: EggTier.COMMON,
  [Species.TANGELA]: EggTier.COMMON,
  [Species.KANGASKHAN]: EggTier.RARE,
  [Species.HORSEA]: EggTier.COMMON,
  [Species.GOLDEEN]: EggTier.COMMON,
  [Species.STARYU]: EggTier.COMMON,
  [Species.MR_MIME]: EggTier.COMMON,
  [Species.SCYTHER]: EggTier.RARE,
  [Species.JYNX]: EggTier.RARE,
  [Species.ELECTABUZZ]: EggTier.RARE,
  [Species.MAGMAR]: EggTier.RARE,
  [Species.PINSIR]: EggTier.RARE,
  [Species.TAUROS]: EggTier.RARE,
  [Species.MAGIKARP]: EggTier.RARE,
  [Species.LAPRAS]: EggTier.RARE,
  [Species.DITTO]: EggTier.COMMON,
  [Species.EEVEE]: EggTier.COMMON,
  [Species.PORYGON]: EggTier.RARE,
  [Species.OMANYTE]: EggTier.COMMON,
  [Species.KABUTO]: EggTier.COMMON,
  [Species.AERODACTYL]: EggTier.RARE,
  [Species.SNORLAX]: EggTier.RARE,
  [Species.ARTICUNO]: EggTier.EPIC,
  [Species.ZAPDOS]: EggTier.EPIC,
  [Species.MOLTRES]: EggTier.EPIC,
  [Species.DRATINI]: EggTier.RARE,
  [Species.MEWTWO]: EggTier.LEGENDARY,
  [Species.MEW]: EggTier.EPIC,

  [Species.CHIKORITA]: EggTier.COMMON,
  [Species.CYNDAQUIL]: EggTier.COMMON,
  [Species.TOTODILE]: EggTier.COMMON,
  [Species.SENTRET]: EggTier.COMMON,
  [Species.HOOTHOOT]: EggTier.COMMON,
  [Species.LEDYBA]: EggTier.COMMON,
  [Species.SPINARAK]: EggTier.COMMON,
  [Species.CHINCHOU]: EggTier.COMMON,
  [Species.PICHU]: EggTier.COMMON,
  [Species.CLEFFA]: EggTier.COMMON,
  [Species.IGGLYBUFF]: EggTier.COMMON,
  [Species.TOGEPI]: EggTier.COMMON,
  [Species.NATU]: EggTier.COMMON,
  [Species.MAREEP]: EggTier.COMMON,
  [Species.MARILL]: EggTier.RARE,
  [Species.SUDOWOODO]: EggTier.COMMON,
  [Species.HOPPIP]: EggTier.COMMON,
  [Species.AIPOM]: EggTier.COMMON,
  [Species.SUNKERN]: EggTier.COMMON,
  [Species.YANMA]: EggTier.COMMON,
  [Species.WOOPER]: EggTier.COMMON,
  [Species.MURKROW]: EggTier.COMMON,
  [Species.MISDREAVUS]: EggTier.COMMON,
  [Species.UNOWN]: EggTier.COMMON,
  [Species.WOBBUFFET]: EggTier.COMMON,
  [Species.GIRAFARIG]: EggTier.COMMON,
  [Species.PINECO]: EggTier.COMMON,
  [Species.DUNSPARCE]: EggTier.COMMON,
  [Species.GLIGAR]: EggTier.COMMON,
  [Species.SNUBBULL]: EggTier.COMMON,
  [Species.QWILFISH]: EggTier.COMMON,
  [Species.SHUCKLE]: EggTier.COMMON,
  [Species.HERACROSS]: EggTier.RARE,
  [Species.SNEASEL]: EggTier.RARE,
  [Species.TEDDIURSA]: EggTier.RARE,
  [Species.SLUGMA]: EggTier.COMMON,
  [Species.SWINUB]: EggTier.COMMON,
  [Species.CORSOLA]: EggTier.COMMON,
  [Species.REMORAID]: EggTier.COMMON,
  [Species.DELIBIRD]: EggTier.COMMON,
  [Species.MANTINE]: EggTier.COMMON,
  [Species.SKARMORY]: EggTier.RARE,
  [Species.HOUNDOUR]: EggTier.COMMON,
  [Species.PHANPY]: EggTier.COMMON,
  [Species.STANTLER]: EggTier.COMMON,
  [Species.SMEARGLE]: EggTier.COMMON,
  [Species.TYROGUE]: EggTier.COMMON,
  [Species.SMOOCHUM]: EggTier.COMMON,
  [Species.ELEKID]: EggTier.COMMON,
  [Species.MAGBY]: EggTier.COMMON,
  [Species.MILTANK]: EggTier.RARE,
  [Species.RAIKOU]: EggTier.EPIC,
  [Species.ENTEI]: EggTier.EPIC,
  [Species.SUICUNE]: EggTier.EPIC,
  [Species.LARVITAR]: EggTier.RARE,
  [Species.LUGIA]: EggTier.LEGENDARY,
  [Species.HO_OH]: EggTier.LEGENDARY,
  [Species.CELEBI]: EggTier.EPIC,

  [Species.TREECKO]: EggTier.COMMON,
  [Species.TORCHIC]: EggTier.RARE,
  [Species.MUDKIP]: EggTier.COMMON,
  [Species.POOCHYENA]: EggTier.COMMON,
  [Species.ZIGZAGOON]: EggTier.COMMON,
  [Species.WURMPLE]: EggTier.COMMON,
  [Species.LOTAD]: EggTier.COMMON,
  [Species.SEEDOT]: EggTier.COMMON,
  [Species.TAILLOW]: EggTier.COMMON,
  [Species.WINGULL]: EggTier.COMMON,
  [Species.RALTS]: EggTier.COMMON,
  [Species.SURSKIT]: EggTier.COMMON,
  [Species.SHROOMISH]: EggTier.COMMON,
  [Species.SLAKOTH]: EggTier.RARE,
  [Species.NINCADA]: EggTier.RARE,
  [Species.WHISMUR]: EggTier.COMMON,
  [Species.MAKUHITA]: EggTier.COMMON,
  [Species.AZURILL]: EggTier.RARE,
  [Species.NOSEPASS]: EggTier.COMMON,
  [Species.SKITTY]: EggTier.COMMON,
  [Species.SABLEYE]: EggTier.COMMON,
  [Species.MAWILE]: EggTier.COMMON,
  [Species.ARON]: EggTier.COMMON,
  [Species.MEDITITE]: EggTier.COMMON,
  [Species.ELECTRIKE]: EggTier.COMMON,
  [Species.PLUSLE]: EggTier.COMMON,
  [Species.MINUN]: EggTier.COMMON,
  [Species.VOLBEAT]: EggTier.COMMON,
  [Species.ILLUMISE]: EggTier.COMMON,
  [Species.ROSELIA]: EggTier.COMMON,
  [Species.GULPIN]: EggTier.COMMON,
  [Species.CARVANHA]: EggTier.COMMON,
  [Species.WAILMER]: EggTier.COMMON,
  [Species.NUMEL]: EggTier.COMMON,
  [Species.TORKOAL]: EggTier.COMMON,
  [Species.SPOINK]: EggTier.COMMON,
  [Species.SPINDA]: EggTier.COMMON,
  [Species.TRAPINCH]: EggTier.COMMON,
  [Species.CACNEA]: EggTier.COMMON,
  [Species.SWABLU]: EggTier.COMMON,
  [Species.ZANGOOSE]: EggTier.RARE,
  [Species.SEVIPER]: EggTier.COMMON,
  [Species.LUNATONE]: EggTier.COMMON,
  [Species.SOLROCK]: EggTier.COMMON,
  [Species.BARBOACH]: EggTier.COMMON,
  [Species.CORPHISH]: EggTier.COMMON,
  [Species.BALTOY]: EggTier.COMMON,
  [Species.LILEEP]: EggTier.COMMON,
  [Species.ANORITH]: EggTier.COMMON,
  [Species.FEEBAS]: EggTier.RARE,
  [Species.CASTFORM]: EggTier.COMMON,
  [Species.KECLEON]: EggTier.COMMON,
  [Species.SHUPPET]: EggTier.COMMON,
  [Species.DUSKULL]: EggTier.COMMON,
  [Species.TROPIUS]: EggTier.COMMON,
  [Species.CHIMECHO]: EggTier.COMMON,
  [Species.ABSOL]: EggTier.RARE,
  [Species.WYNAUT]: EggTier.COMMON,
  [Species.SNORUNT]: EggTier.COMMON,
  [Species.SPHEAL]: EggTier.COMMON,
  [Species.CLAMPERL]: EggTier.COMMON,
  [Species.RELICANTH]: EggTier.COMMON,
  [Species.LUVDISC]: EggTier.COMMON,
  [Species.BAGON]: EggTier.RARE,
  [Species.BELDUM]: EggTier.RARE,
  [Species.REGIROCK]: EggTier.EPIC,
  [Species.REGICE]: EggTier.EPIC,
  [Species.REGISTEEL]: EggTier.EPIC,
  [Species.LATIAS]: EggTier.EPIC,
  [Species.LATIOS]: EggTier.EPIC,
  [Species.KYOGRE]: EggTier.LEGENDARY,
  [Species.GROUDON]: EggTier.LEGENDARY,
  [Species.RAYQUAZA]: EggTier.LEGENDARY,
  [Species.JIRACHI]: EggTier.EPIC,
  [Species.DEOXYS]: EggTier.EPIC,

  [Species.TURTWIG]: EggTier.COMMON,
  [Species.CHIMCHAR]: EggTier.COMMON,
  [Species.PIPLUP]: EggTier.COMMON,
  [Species.STARLY]: EggTier.COMMON,
  [Species.BIDOOF]: EggTier.COMMON,
  [Species.KRICKETOT]: EggTier.COMMON,
  [Species.SHINX]: EggTier.COMMON,
  [Species.BUDEW]: EggTier.COMMON,
  [Species.CRANIDOS]: EggTier.COMMON,
  [Species.SHIELDON]: EggTier.COMMON,
  [Species.BURMY]: EggTier.COMMON,
  [Species.COMBEE]: EggTier.COMMON,
  [Species.PACHIRISU]: EggTier.COMMON,
  [Species.BUIZEL]: EggTier.COMMON,
  [Species.CHERUBI]: EggTier.COMMON,
  [Species.SHELLOS]: EggTier.COMMON,
  [Species.DRIFLOON]: EggTier.COMMON,
  [Species.BUNEARY]: EggTier.COMMON,
  [Species.GLAMEOW]: EggTier.COMMON,
  [Species.CHINGLING]: EggTier.COMMON,
  [Species.STUNKY]: EggTier.COMMON,
  [Species.BRONZOR]: EggTier.COMMON,
  [Species.BONSLY]: EggTier.COMMON,
  [Species.MIME_JR]: EggTier.COMMON,
  [Species.HAPPINY]: EggTier.COMMON,
  [Species.CHATOT]: EggTier.COMMON,
  [Species.SPIRITOMB]: EggTier.RARE,
  [Species.GIBLE]: EggTier.RARE,
  [Species.MUNCHLAX]: EggTier.RARE,
  [Species.RIOLU]: EggTier.COMMON,
  [Species.HIPPOPOTAS]: EggTier.COMMON,
  [Species.SKORUPI]: EggTier.COMMON,
  [Species.CROAGUNK]: EggTier.COMMON,
  [Species.CARNIVINE]: EggTier.COMMON,
  [Species.FINNEON]: EggTier.COMMON,
  [Species.MANTYKE]: EggTier.COMMON,
  [Species.SNOVER]: EggTier.COMMON,
  [Species.ROTOM]: EggTier.RARE,
  [Species.UXIE]: EggTier.EPIC,
  [Species.MESPRIT]: EggTier.EPIC,
  [Species.AZELF]: EggTier.EPIC,
  [Species.DIALGA]: EggTier.LEGENDARY,
  [Species.PALKIA]: EggTier.LEGENDARY,
  [Species.HEATRAN]: EggTier.EPIC,
  [Species.REGIGIGAS]: EggTier.EPIC,
  [Species.GIRATINA]: EggTier.LEGENDARY,
  [Species.CRESSELIA]: EggTier.EPIC,
  [Species.PHIONE]: EggTier.RARE,
  [Species.MANAPHY]: EggTier.EPIC,
  [Species.DARKRAI]: EggTier.EPIC,
  [Species.SHAYMIN]: EggTier.EPIC,
  [Species.ARCEUS]: EggTier.LEGENDARY,

  [Species.VICTINI]: EggTier.EPIC,
  [Species.SNIVY]: EggTier.COMMON,
  [Species.TEPIG]: EggTier.COMMON,
  [Species.OSHAWOTT]: EggTier.COMMON,
  [Species.PATRAT]: EggTier.COMMON,
  [Species.LILLIPUP]: EggTier.COMMON,
  [Species.PURRLOIN]: EggTier.COMMON,
  [Species.PANSAGE]: EggTier.COMMON,
  [Species.PANSEAR]: EggTier.COMMON,
  [Species.PANPOUR]: EggTier.COMMON,
  [Species.MUNNA]: EggTier.COMMON,
  [Species.PIDOVE]: EggTier.COMMON,
  [Species.BLITZLE]: EggTier.COMMON,
  [Species.ROGGENROLA]: EggTier.COMMON,
  [Species.WOOBAT]: EggTier.COMMON,
  [Species.DRILBUR]: EggTier.RARE,
  [Species.AUDINO]: EggTier.COMMON,
  [Species.TIMBURR]: EggTier.RARE,
  [Species.TYMPOLE]: EggTier.COMMON,
  [Species.THROH]: EggTier.RARE,
  [Species.SAWK]: EggTier.RARE,
  [Species.SEWADDLE]: EggTier.COMMON,
  [Species.VENIPEDE]: EggTier.COMMON,
  [Species.COTTONEE]: EggTier.COMMON,
  [Species.PETILIL]: EggTier.COMMON,
  [Species.BASCULIN]: EggTier.RARE,
  [Species.SANDILE]: EggTier.RARE,
  [Species.DARUMAKA]: EggTier.RARE,
  [Species.MARACTUS]: EggTier.COMMON,
  [Species.DWEBBLE]: EggTier.COMMON,
  [Species.SCRAGGY]: EggTier.COMMON,
  [Species.SIGILYPH]: EggTier.RARE,
  [Species.YAMASK]: EggTier.COMMON,
  [Species.TIRTOUGA]: EggTier.COMMON,
  [Species.ARCHEN]: EggTier.COMMON,
  [Species.TRUBBISH]: EggTier.COMMON,
  [Species.ZORUA]: EggTier.COMMON,
  [Species.MINCCINO]: EggTier.COMMON,
  [Species.GOTHITA]: EggTier.COMMON,
  [Species.SOLOSIS]: EggTier.COMMON,
  [Species.DUCKLETT]: EggTier.COMMON,
  [Species.VANILLITE]: EggTier.COMMON,
  [Species.DEERLING]: EggTier.COMMON,
  [Species.EMOLGA]: EggTier.COMMON,
  [Species.KARRABLAST]: EggTier.COMMON,
  [Species.FOONGUS]: EggTier.COMMON,
  [Species.FRILLISH]: EggTier.COMMON,
  [Species.ALOMOMOLA]: EggTier.RARE,
  [Species.JOLTIK]: EggTier.COMMON,
  [Species.FERROSEED]: EggTier.COMMON,
  [Species.KLINK]: EggTier.COMMON,
  [Species.TYNAMO]: EggTier.COMMON,
  [Species.ELGYEM]: EggTier.COMMON,
  [Species.LITWICK]: EggTier.COMMON,
  [Species.AXEW]: EggTier.RARE,
  [Species.CUBCHOO]: EggTier.COMMON,
  [Species.CRYOGONAL]: EggTier.RARE,
  [Species.SHELMET]: EggTier.COMMON,
  [Species.STUNFISK]: EggTier.COMMON,
  [Species.MIENFOO]: EggTier.COMMON,
  [Species.DRUDDIGON]: EggTier.RARE,
  [Species.GOLETT]: EggTier.COMMON,
  [Species.PAWNIARD]: EggTier.RARE,
  [Species.BOUFFALANT]: EggTier.RARE,
  [Species.RUFFLET]: EggTier.COMMON,
  [Species.VULLABY]: EggTier.COMMON,
  [Species.HEATMOR]: EggTier.COMMON,
  [Species.DURANT]: EggTier.RARE,
  [Species.DEINO]: EggTier.RARE,
  [Species.LARVESTA]: EggTier.RARE,
  [Species.COBALION]: EggTier.EPIC,
  [Species.TERRAKION]: EggTier.EPIC,
  [Species.VIRIZION]: EggTier.EPIC,
  [Species.TORNADUS]: EggTier.EPIC,
  [Species.THUNDURUS]: EggTier.EPIC,
  [Species.RESHIRAM]: EggTier.LEGENDARY,
  [Species.ZEKROM]: EggTier.LEGENDARY,
  [Species.LANDORUS]: EggTier.EPIC,
  [Species.KYUREM]: EggTier.LEGENDARY,
  [Species.KELDEO]: EggTier.EPIC,
  [Species.MELOETTA]: EggTier.EPIC,
  [Species.GENESECT]: EggTier.EPIC,

  [Species.CHESPIN]: EggTier.COMMON,
  [Species.FENNEKIN]: EggTier.COMMON,
  [Species.FROAKIE]: EggTier.RARE,
  [Species.BUNNELBY]: EggTier.COMMON,
  [Species.FLETCHLING]: EggTier.COMMON,
  [Species.SCATTERBUG]: EggTier.COMMON,
  [Species.LITLEO]: EggTier.COMMON,
  [Species.FLABEBE]: EggTier.COMMON,
  [Species.SKIDDO]: EggTier.COMMON,
  [Species.PANCHAM]: EggTier.COMMON,
  [Species.FURFROU]: EggTier.COMMON,
  [Species.ESPURR]: EggTier.COMMON,
  [Species.HONEDGE]: EggTier.RARE,
  [Species.SPRITZEE]: EggTier.COMMON,
  [Species.SWIRLIX]: EggTier.COMMON,
  [Species.INKAY]: EggTier.COMMON,
  [Species.BINACLE]: EggTier.COMMON,
  [Species.SKRELP]: EggTier.COMMON,
  [Species.CLAUNCHER]: EggTier.COMMON,
  [Species.HELIOPTILE]: EggTier.COMMON,
  [Species.TYRUNT]: EggTier.COMMON,
  [Species.AMAURA]: EggTier.COMMON,
  [Species.HAWLUCHA]: EggTier.RARE,
  [Species.DEDENNE]: EggTier.COMMON,
  [Species.CARBINK]: EggTier.COMMON,
  [Species.GOOMY]: EggTier.RARE,
  [Species.KLEFKI]: EggTier.COMMON,
  [Species.PHANTUMP]: EggTier.COMMON,
  [Species.PUMPKABOO]: EggTier.COMMON,
  [Species.BERGMITE]: EggTier.COMMON,
  [Species.NOIBAT]: EggTier.COMMON,
  [Species.XERNEAS]: EggTier.LEGENDARY,
  [Species.YVELTAL]: EggTier.LEGENDARY,
  [Species.ZYGARDE]: EggTier.LEGENDARY,
  [Species.DIANCIE]: EggTier.EPIC,
  [Species.HOOPA]: EggTier.EPIC,
  [Species.VOLCANION]: EggTier.EPIC,
  [Species.ETERNAL_FLOETTE]: EggTier.RARE,

  [Species.ROWLET]: EggTier.COMMON,
  [Species.LITTEN]: EggTier.COMMON,
  [Species.POPPLIO]: EggTier.RARE,
  [Species.PIKIPEK]: EggTier.COMMON,
  [Species.YUNGOOS]: EggTier.COMMON,
  [Species.GRUBBIN]: EggTier.COMMON,
  [Species.CRABRAWLER]: EggTier.COMMON,
  [Species.ORICORIO]: EggTier.COMMON,
  [Species.CUTIEFLY]: EggTier.COMMON,
  [Species.ROCKRUFF]: EggTier.COMMON,
  [Species.WISHIWASHI]: EggTier.COMMON,
  [Species.MAREANIE]: EggTier.COMMON,
  [Species.MUDBRAY]: EggTier.COMMON,
  [Species.DEWPIDER]: EggTier.COMMON,
  [Species.FOMANTIS]: EggTier.COMMON,
  [Species.MORELULL]: EggTier.COMMON,
  [Species.SALANDIT]: EggTier.COMMON,
  [Species.STUFFUL]: EggTier.COMMON,
  [Species.BOUNSWEET]: EggTier.COMMON,
  [Species.COMFEY]: EggTier.RARE,
  [Species.ORANGURU]: EggTier.RARE,
  [Species.PASSIMIAN]: EggTier.RARE,
  [Species.WIMPOD]: EggTier.COMMON,
  [Species.SANDYGAST]: EggTier.COMMON,
  [Species.PYUKUMUKU]: EggTier.COMMON,
  [Species.TYPE_NULL]: EggTier.RARE,
  [Species.MINIOR]: EggTier.RARE,
  [Species.KOMALA]: EggTier.COMMON,
  [Species.TURTONATOR]: EggTier.RARE,
  [Species.TOGEDEMARU]: EggTier.COMMON,
  [Species.MIMIKYU]: EggTier.RARE,
  [Species.BRUXISH]: EggTier.RARE,
  [Species.DRAMPA]: EggTier.RARE,
  [Species.DHELMISE]: EggTier.RARE,
  [Species.JANGMO_O]: EggTier.RARE,
  [Species.TAPU_KOKO]: EggTier.EPIC,
  [Species.TAPU_LELE]: EggTier.EPIC,
  [Species.TAPU_BULU]: EggTier.EPIC,
  [Species.TAPU_FINI]: EggTier.EPIC,
  [Species.COSMOG]: EggTier.EPIC,
  [Species.NIHILEGO]: EggTier.EPIC,
  [Species.BUZZWOLE]: EggTier.EPIC,
  [Species.PHEROMOSA]: EggTier.EPIC,
  [Species.XURKITREE]: EggTier.EPIC,
  [Species.CELESTEELA]: EggTier.EPIC,
  [Species.KARTANA]: EggTier.EPIC,
  [Species.GUZZLORD]: EggTier.EPIC,
  [Species.NECROZMA]: EggTier.LEGENDARY,
  [Species.MAGEARNA]: EggTier.EPIC,
  [Species.MARSHADOW]: EggTier.EPIC,
  [Species.POIPOLE]: EggTier.EPIC,
  [Species.STAKATAKA]: EggTier.EPIC,
  [Species.BLACEPHALON]: EggTier.EPIC,
  [Species.ZERAORA]: EggTier.EPIC,
  [Species.MELTAN]: EggTier.EPIC,
  [Species.ALOLA_RATTATA]: EggTier.COMMON,
  [Species.ALOLA_SANDSHREW]: EggTier.COMMON,
  [Species.ALOLA_VULPIX]: EggTier.COMMON,
  [Species.ALOLA_DIGLETT]: EggTier.COMMON,
  [Species.ALOLA_MEOWTH]: EggTier.COMMON,
  [Species.ALOLA_GEODUDE]: EggTier.COMMON,
  [Species.ALOLA_GRIMER]: EggTier.COMMON,

  [Species.GROOKEY]: EggTier.COMMON,
  [Species.SCORBUNNY]: EggTier.RARE,
  [Species.SOBBLE]: EggTier.COMMON,
  [Species.SKWOVET]: EggTier.COMMON,
  [Species.ROOKIDEE]: EggTier.COMMON,
  [Species.BLIPBUG]: EggTier.COMMON,
  [Species.NICKIT]: EggTier.COMMON,
  [Species.GOSSIFLEUR]: EggTier.COMMON,
  [Species.WOOLOO]: EggTier.COMMON,
  [Species.CHEWTLE]: EggTier.COMMON,
  [Species.YAMPER]: EggTier.COMMON,
  [Species.ROLYCOLY]: EggTier.COMMON,
  [Species.APPLIN]: EggTier.COMMON,
  [Species.SILICOBRA]: EggTier.COMMON,
  [Species.CRAMORANT]: EggTier.COMMON,
  [Species.ARROKUDA]: EggTier.COMMON,
  [Species.TOXEL]: EggTier.COMMON,
  [Species.SIZZLIPEDE]: EggTier.COMMON,
  [Species.CLOBBOPUS]: EggTier.COMMON,
  [Species.SINISTEA]: EggTier.COMMON,
  [Species.HATENNA]: EggTier.COMMON,
  [Species.IMPIDIMP]: EggTier.COMMON,
  [Species.MILCERY]: EggTier.COMMON,
  [Species.FALINKS]: EggTier.RARE,
  [Species.PINCURCHIN]: EggTier.COMMON,
  [Species.SNOM]: EggTier.COMMON,
  [Species.STONJOURNER]: EggTier.COMMON,
  [Species.EISCUE]: EggTier.COMMON,
  [Species.INDEEDEE]: EggTier.RARE,
  [Species.MORPEKO]: EggTier.COMMON,
  [Species.CUFANT]: EggTier.COMMON,
  [Species.DRACOZOLT]: EggTier.RARE,
  [Species.ARCTOZOLT]: EggTier.RARE,
  [Species.DRACOVISH]: EggTier.RARE,
  [Species.ARCTOVISH]: EggTier.RARE,
  [Species.DURALUDON]: EggTier.RARE,
  [Species.DREEPY]: EggTier.RARE,
  [Species.ZACIAN]: EggTier.LEGENDARY,
  [Species.ZAMAZENTA]: EggTier.LEGENDARY,
  [Species.ETERNATUS]: EggTier.COMMON,
  [Species.KUBFU]: EggTier.EPIC,
  [Species.ZARUDE]: EggTier.EPIC,
  [Species.REGIELEKI]: EggTier.EPIC,
  [Species.REGIDRAGO]: EggTier.EPIC,
  [Species.GLASTRIER]: EggTier.EPIC,
  [Species.SPECTRIER]: EggTier.EPIC,
  [Species.CALYREX]: EggTier.LEGENDARY,
  [Species.GALAR_MEOWTH]: EggTier.COMMON,
  [Species.GALAR_PONYTA]: EggTier.COMMON,
  [Species.GALAR_SLOWPOKE]: EggTier.COMMON,
  [Species.GALAR_FARFETCHD]: EggTier.COMMON,
  [Species.GALAR_CORSOLA]: EggTier.COMMON,
  [Species.GALAR_ZIGZAGOON]: EggTier.COMMON,
  [Species.GALAR_DARUMAKA]: EggTier.RARE,
  [Species.GALAR_YAMASK]: EggTier.COMMON,
  [Species.GALAR_STUNFISK]: EggTier.COMMON,
  [Species.GALAR_MR_MIME]: EggTier.COMMON,
  [Species.GALAR_ARTICUNO]: EggTier.EPIC,
  [Species.GALAR_ZAPDOS]: EggTier.EPIC,
  [Species.GALAR_MOLTRES]: EggTier.EPIC,
  [Species.HISUI_GROWLITHE]: EggTier.RARE,
  [Species.HISUI_VOLTORB]: EggTier.COMMON,
  [Species.HISUI_QWILFISH]: EggTier.RARE,
  [Species.HISUI_SNEASEL]: EggTier.RARE,
  [Species.HISUI_ZORUA]: EggTier.COMMON,
  [Species.ENAMORUS]: EggTier.EPIC,

  [Species.SPRIGATITO]: EggTier.RARE,
  [Species.FUECOCO]: EggTier.RARE,
  [Species.QUAXLY]: EggTier.RARE,
  [Species.LECHONK]: EggTier.COMMON,
  [Species.TAROUNTULA]: EggTier.COMMON,
  [Species.NYMBLE]: EggTier.COMMON,
  [Species.PAWMI]: EggTier.COMMON,
  [Species.TANDEMAUS]: EggTier.RARE,
  [Species.FIDOUGH]: EggTier.COMMON,
  [Species.SMOLIV]: EggTier.COMMON,
  [Species.SQUAWKABILLY]: EggTier.COMMON,
  [Species.NACLI]: EggTier.RARE,
  [Species.CHARCADET]: EggTier.RARE,
  [Species.TADBULB]: EggTier.COMMON,
  [Species.WATTREL]: EggTier.COMMON,
  [Species.MASCHIFF]: EggTier.COMMON,
  [Species.SHROODLE]: EggTier.COMMON,
  [Species.BRAMBLIN]: EggTier.COMMON,
  [Species.TOEDSCOOL]: EggTier.COMMON,
  [Species.KLAWF]: EggTier.COMMON,
  [Species.CAPSAKID]: EggTier.COMMON,
  [Species.RELLOR]: EggTier.COMMON,
  [Species.FLITTLE]: EggTier.COMMON,
  [Species.TINKATINK]: EggTier.RARE,
  [Species.WIGLETT]: EggTier.COMMON,
  [Species.BOMBIRDIER]: EggTier.COMMON,
  [Species.FINIZEN]: EggTier.COMMON,
  [Species.VAROOM]: EggTier.RARE,
  [Species.CYCLIZAR]: EggTier.RARE,
  [Species.ORTHWORM]: EggTier.RARE,
  [Species.GLIMMET]: EggTier.RARE,
  [Species.GREAVARD]: EggTier.COMMON,
  [Species.FLAMIGO]: EggTier.RARE,
  [Species.CETODDLE]: EggTier.COMMON,
  [Species.VELUZA]: EggTier.RARE,
  [Species.DONDOZO]: EggTier.RARE,
  [Species.TATSUGIRI]: EggTier.RARE,
  [Species.GREAT_TUSK]: EggTier.EPIC,
  [Species.SCREAM_TAIL]: EggTier.EPIC,
  [Species.BRUTE_BONNET]: EggTier.EPIC,
  [Species.FLUTTER_MANE]: EggTier.EPIC,
  [Species.SLITHER_WING]: EggTier.EPIC,
  [Species.SANDY_SHOCKS]: EggTier.EPIC,
  [Species.IRON_TREADS]: EggTier.EPIC,
  [Species.IRON_BUNDLE]: EggTier.EPIC,
  [Species.IRON_HANDS]: EggTier.EPIC,
  [Species.IRON_JUGULIS]: EggTier.EPIC,
  [Species.IRON_MOTH]: EggTier.EPIC,
  [Species.IRON_THORNS]: EggTier.EPIC,
  [Species.FRIGIBAX]: EggTier.RARE,
  [Species.GIMMIGHOUL]: EggTier.RARE,
  [Species.WO_CHIEN]: EggTier.EPIC,
  [Species.CHIEN_PAO]: EggTier.EPIC,
  [Species.TING_LU]: EggTier.EPIC,
  [Species.CHI_YU]: EggTier.EPIC,
  [Species.ROARING_MOON]: EggTier.EPIC,
  [Species.IRON_VALIANT]: EggTier.EPIC,
  [Species.KORAIDON]: EggTier.LEGENDARY,
  [Species.MIRAIDON]: EggTier.LEGENDARY,
  [Species.WALKING_WAKE]: EggTier.EPIC,
  [Species.IRON_LEAVES]: EggTier.EPIC,
  [Species.POLTCHAGEIST]: EggTier.RARE,
  [Species.OKIDOGI]: EggTier.EPIC,
  [Species.MUNKIDORI]: EggTier.EPIC,
  [Species.FEZANDIPITI]: EggTier.EPIC,
  [Species.OGERPON]: EggTier.EPIC,
  [Species.GOUGING_FIRE]: EggTier.EPIC,
  [Species.RAGING_BOLT]: EggTier.EPIC,
  [Species.IRON_BOULDER]: EggTier.EPIC,
  [Species.IRON_CROWN]: EggTier.EPIC,
  [Species.TERAPAGOS]: EggTier.LEGENDARY,
  [Species.PECHARUNT]: EggTier.EPIC,
  [Species.PALDEA_TAUROS]: EggTier.RARE,
  [Species.PALDEA_WOOPER]: EggTier.COMMON,
  [Species.BLOODMOON_URSALUNA]: EggTier.EPIC,
};
