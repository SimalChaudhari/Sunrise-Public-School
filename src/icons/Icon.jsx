/**
 * Icons: common Icon wrapper + named icons.
 */
function Icon({ iconClass, className = '', ...props }) {
  return <span className={`${iconClass} ${className}`.trim()} aria-hidden {...props} />
}

export default Icon

// Core app icons
export function HomeIcon({ className = '' }) {
  return <Icon iconClass="icon-[famicons--home]" className={className} />
}

export function TeachersIcon({ className = '' }) {
  return <Icon iconClass="icon-[fluent-emoji-high-contrast--teacher]" className={className} />
}

export function SubjectsIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--book-open-page-variant-outline]" className={className} />
}

export function StandardsIcon({ className = '' }) {
  return <Icon iconClass="icon-[hugeicons--student]" className={className} />
}

export function ClassesIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--calendar-month-outline]" className={className} />
}

export function SchoolIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--school-outline]" className={className} />
}

export function CloseIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--close]" className={className} />
}

export function MenuIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--menu]" className={className} />
}

export function AccountSchoolIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--account-school-outline]" className={className} />
}

export function ChartLineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--chart-line]" className={className} />
}

export function ShieldCheckIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--shield-check-outline]" className={className} />
}

export function ArrowRightThinIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--arrow-right-thin]" className={className} />
}

export function PhoneOutlineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--phone-outline]" className={className} />
}

export function CheckCircleOutlineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--check-circle-outline]" className={className} />
}

export function CalendarStarIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--calendar-star]" className={className} />
}

export function MapMarkerRadiusIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--map-marker-radius-outline]" className={className} />
}

export function AccountGroupIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--account-group-outline]" className={className} />
}

export function ClipboardTextIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--clipboard-text-outline]" className={className} />
}

export function AccountTieIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--account-tie]" className={className} />
}

export function ChevronRightIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--chevron-right]" className={className} />
}

export function ChevronUpIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--chevron-up]" className={className} />
}

export function AlphabetIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--alphabetical-variant]" className={className} />
}

export function BookOpenIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--book-open-variant]" className={className} />
}

export function ContactIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--card-account-phone-outline]" className={className} />
}

export function LocationLineIcon({ className = '' }) {
  return <Icon iconClass="icon-[mingcute--location-3-line]" className={className} />
}

export function EmailIcon({ className = '' }) {
  return <Icon iconClass="icon-[fontisto--email]" className={className} />
}

export function ContactPhonebookIcon({ className = '' }) {
  return <Icon iconClass="icon-[streamline-plump--contact-phonebook]" className={className} />
}

export function StudentRegisterIcon({ className = '' }) {
  return <Icon iconClass="icon-[mdi--account-plus-outline]" className={className} />
}
