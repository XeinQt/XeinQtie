import React from 'react';

// Generates an authentic, structured representation of GitHub commit activity
const generateContributionGrid = () => {
  const weeks = 52;
  const days = 7;
  const grid: number[][] = [];

  for (let w = 0; w < weeks; w++) {
    const weekDays: number[] = [];
    for (let d = 0; d < days; d++) {
      // In the screenshot, active contributions are heavily concentrated from week 2 to week 34 (Jan to Aug)
      if (w >= 1 && w <= 34) {
        // High density activity
        const rand = (w * 7 + d * 13 + (w % 3) * 5) % 100;
        if (rand < 25) {
          weekDays.push(0); // empty
        } else if (rand < 55) {
          weekDays.push(1); // light green
        } else if (rand < 80) {
          weekDays.push(2); // medium green
        } else if (rand < 92) {
          weekDays.push(3); // dark green
        } else {
          weekDays.push(4); // deepest green
        }
      } else {
        // Sep - Dec (future / upcoming months in the visual display)
        weekDays.push(0);
      }
    }
    grid.push(weekDays);
  }
  return grid;
};

const contributionGrid = generateContributionGrid();

const getColorClass = (level: number) => {
  switch (level) {
    case 1:
      return 'bg-[#9be9a8] dark:bg-[#0e4429]';
    case 2:
      return 'bg-[#40c463] dark:bg-[#006d32]';
    case 3:
      return 'bg-[#30a14e] dark:bg-[#26a641]';
    case 4:
      return 'bg-[#216e39] dark:bg-[#39d353]';
    case 0:
    default:
      return 'bg-zinc-100 dark:bg-zinc-800/70';
  }
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const GithubActivitySection: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto py-6 space-y-6">
      <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 dark:text-zinc-100 tracking-tight font-sans">
        GitHub Activity
      </h2>

      {/* Dashed Border Card Container */}
      <div className="rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 p-6 sm:p-7 bg-white/40 dark:bg-zinc-900/30 space-y-5 shadow-xs">
        
        {/* Scrollable Container on Mobile */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[650px] space-y-2.5">
            
            {/* Months Header */}
            <div className="flex justify-between text-[11px] font-mono text-zinc-400 dark:text-zinc-500 px-1">
              {months.map((m, idx) => (
                <span key={idx}>{m}</span>
              ))}
            </div>

            {/* Contribution Grid Dots */}
            <div className="flex gap-1.5 justify-between">
              {contributionGrid.map((week, wIdx) => (
                <div key={wIdx} className="flex flex-col gap-1.5">
                  {week.map((level, dIdx) => (
                    <div
                      key={dIdx}
                      title={`Activity level: ${level}`}
                      className={`w-2.5 h-2.5 rounded-full transition-transform hover:scale-125 ${getColorClass(level)}`}
                    />
                  ))}
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Contributions Count Subtitle */}
        <div className="text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
          937 contributions in the last year
        </div>

      </div>
    </div>
  );
};

export default GithubActivitySection;
