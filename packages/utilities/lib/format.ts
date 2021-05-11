function TimeFormatter(time: number) {
  return [
    Math.floor(time / 3600),
    Math.floor((time % 3600) / 60),
    Math.floor((time % 3600) % 60),
  ];
}

TimeFormatter.reduce = (acc: string, value: number) => {
  if (acc.length === 0) {
    return value.toString();
  } else {
    return `${acc}:${value.toString().padStart(2, "0")}`;
  }
};

export function Time(seconds: number): string {
  if (isNaN(seconds)) {
    return "0:00";
  }

  const time = TimeFormatter(seconds);
  const result = time
    .slice(time.findIndex((value) => value !== 0))
    .reduce(TimeFormatter.reduce, "");
  if (result.length < 3) {
    return `0:${result.padStart(2, "0")}`;
  } else {
    return result;
  }
}

function ReleaseDateFormatter(date: Date) {
  const now = Date.now() - new Date().getTimezoneOffset() * 60 * 1000;
  const then = +date;
  const elapsed = new Date(now - then);
  const epoch = new Date(0);
  const entries = Object.entries({
    year: elapsed.getUTCFullYear() - epoch.getUTCFullYear(),
    month: elapsed.getUTCMonth() - epoch.getUTCMonth(),
    week: Math.floor((elapsed.getUTCDate() - epoch.getUTCDate()) / 7),
    day: elapsed.getUTCDate() - epoch.getUTCDate(),
    hour: elapsed.getUTCHours() - epoch.getUTCHours(),
    minute: elapsed.getUTCMinutes() - epoch.getUTCMinutes(),
    second: elapsed.getUTCSeconds() - epoch.getUTCSeconds(),
  });
  return entries[entries.findIndex((entry) => entry[1] !== 0)];
}

ReleaseDateFormatter.value = (entry: [string, number]) => Math.abs(entry[1]);

ReleaseDateFormatter.unit = (entry: [string, number]) =>
  Math.abs(entry[1]) === 1 ? entry[0] : `${entry[0]}s`;

ReleaseDateFormatter.suffix = (entry: [string, number]) =>
  entry[1] < 0 ? "from now" : "ago";

export function ReleaseDate(date: Date | string | number): string {
  const formatter = ReleaseDateFormatter(new Date(date));
  if (typeof formatter === "undefined")
    throw new Error("Release Date could not be formatted.");
  return [
    ReleaseDateFormatter.value(formatter),
    ReleaseDateFormatter.unit(formatter),
    ReleaseDateFormatter.suffix(formatter),
  ].join(" ");
}

function ValueFormatter(value: number) {
  const entries = Object.entries({
    Q: value / 1e15,
    T: value / 1e12,
    B: value / 1e9,
    M: value / 1e6,
    K: value / 1e3,
    "": Math.floor(value),
  }).map((entry) => [entry[0], ValueFormatter.round(entry[1])]);
  return entries[entries.findIndex((entry) => (entry[0] ? !!entry[1] : true))];
}

ValueFormatter.round = (value: number) => {
  if (value >= 100) {
    return +value.toPrecision(3);
  } else if (value >= 1) {
    return +value.toPrecision(2);
  } else {
    return 0;
  }
};

export function Value(num: number, unit?: string): string {
  const value = ValueFormatter(num);
  const suffix = !value[0] && value[1] === 1 ? unit : `${unit}s`;
  const result = value?.reverse().join("");
  return unit ? `${result} ${suffix}` : result;
}

export function FullValue(num: number, unit?: string): string {
  const value = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const suffix = num === 1 ? unit : `${unit}s`;
  return unit ? `${value} ${suffix}` : value;
}

export function FullReleaseDate(
  date: Date | string | number,
  locale?: string
): string {
  return new Date(date).toLocaleDateString(locale ?? "en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function ChannelHandle(handle: string): string {
  return `#${handle}`;
}

export function UserHandle(handle: string): string {
  return `@${handle}`;
}

export function Negative(size: undefined): undefined;
export function Negative(size: string | number): string | number;
export function Negative(size: (string | number)[]): (string | number)[];
export function Negative(size: any): any {
  if (typeof size === "undefined") {
    return undefined;
  } else if (typeof size === "string") {
    return size[0] === "-" ? size.slice(1) : size === "0" ? size : `-${size}`;
  } else if (typeof size === "object") {
    return size.map((item: string) =>
      item[0] === "-" ? item.slice(1) : item === "0" ? item : `-${item}`
    );
  } else {
    return -size;
  }
}
