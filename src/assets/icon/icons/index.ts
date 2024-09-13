import { Arrowsdownup } from "./Arrowsdownup";
import { Barbell } from "./Barbell";
import { Bookopentext } from "./Bookopentext";
import { Caretdown } from "./Caretdown";
import { Caretright } from "./Caretright";
import { Chartdonut } from "./Chartdonut";
import { Checkcircle } from "./Checkcircle";
import { Dotsthreeoutline } from "./Dotsthreeoutline";
import { Eye } from "./Eye";
import { Eyeslash } from "./Eyeslash";
import { Filter } from "./Filter";
import { House } from "./House";
import { Jarfill } from "./Jarfill";
import { Listbullets } from "./Listbullets";
import { Magnifyingglass } from "./Magnifyingglass";
import { Minimize } from "./Minimize";
import { Musicnote } from "./Musicnote";
import { Network } from "./Network";
import { Receipt } from "./Receipt";
import { Shieldplus } from "./Shieldplus";
import { Sort } from "./Sort";
import { Video } from "./Video";
import { Warehouse } from "./Warehouse";
import { Warningcircle } from "./Warningcircle";
import { Wrench } from "./Wrench";

export const Icons = {
  Arrowsdownup,
  Barbell,
  Bookopentext,
  Caretdown,
  Caretright,
  Chartdonut,
  Checkcircle,
  Dotsthreeoutline,
  Eye,
  Eyeslash,
  Filter,
  House,
  Jarfill,
  Listbullets,
  Magnifyingglass,
  Minimize,
  Musicnote,
  Network,
  Receipt,
  Shieldplus,
  Sort,
  Video,
  Warehouse,
  Warningcircle,
  Wrench,
} as const;

export type IconNames = keyof typeof Icons;
