import React, { useState } from 'react';
import { ChevronDown, ChevronRight, AlertTriangle, ClipboardList, TrendingUp, CheckCircle, Activity } from 'lucide-react';

type InjuryProtocol = {
  id: string;
  name: string;
  icon: string;
  prevalence: string;
  overview: string;
  phases: {
    name: string;
    duration: string;
    goals: string[];
    exercises: { name: string; sets: string; reps: string; notes?: string }[];
    criteria: string[];
  }[];
  specialTests: { name: string; sensitivity: string; specificity: string; positive: string }[];
  returnToSport: string[];
};

const protocols: InjuryProtocol[] = [
  {
    id: 'acl',
    name: 'ACL Reconstruction',
    icon: '🦵',
    prevalence: 'Most common sport ligament injury',
    overview: 'Evidence-based rehabilitation following ACL reconstruction. Criterion-based progression rather than time-based.',
    phases: [
      {
        name: 'Phase 1: Acute (0-2 weeks)',
        duration: '2 weeks',
        goals: ['Control swelling and pain', 'Restore full passive extension', 'Achieve knee flexion to 90°', 'Quad activation'],
        exercises: [
          { name: 'Quad Sets', sets: '3', reps: '20', notes: 'Focus on VMO activation' },
          { name: 'Straight Leg Raise', sets: '3', reps: '15' },
          { name: 'Heel Slides', sets: '3', reps: '20', notes: 'Progress flexion daily' },
          { name: 'Ankle Pumps', sets: '5', reps: '20', notes: 'Prevent DVT' },
        ],
        criteria: ['Full passive extension', 'Minimal effusion', 'Quad contraction present'],
      },
      {
        name: 'Phase 2: Subacute (2-6 weeks)',
        duration: '4 weeks',
        goals: ['Full ROM', 'Normal gait without device', 'Good quad control', 'Begin closed chain'],
        exercises: [
          { name: 'Mini Squat', sets: '3', reps: '15', notes: '0-60° range only' },
          { name: 'Terminal Knee Extension (TKE)', sets: '3', reps: '20' },
          { name: 'Step-Up', sets: '3', reps: '12', notes: 'Start with 4" step' },
          { name: 'Cycling', sets: '1', reps: '20-30 min', notes: 'Low resistance' },
        ],
        criteria: ['Full ROM', 'No gait deviation', 'Minimal pain on loading'],
      },
      {
        name: 'Phase 3: Strengthening (6-16 weeks)',
        duration: '10 weeks',
        goals: ['Symmetrical leg strength', 'Balance and proprioception', 'Sport-specific movements'],
        exercises: [
          { name: 'Bulgarian Split Squat', sets: '4', reps: '10' },
          { name: 'Single-Leg Leg Press', sets: '3', reps: '12' },
          { name: 'Nordic Hamstring Curl', sets: '3', reps: '6', notes: 'Begin at 25% effort' },
          { name: 'Lateral Hops', sets: '3', reps: '10', notes: 'Progress when stable' },
        ],
        criteria: ['LSI >70% for strength', 'Good single-leg balance', 'No effusion after loading'],
      },
      {
        name: 'Phase 4: Return to Sport (4-9 months)',
        duration: '3-5 months',
        goals: ['Limb Symmetry Index >90%', 'Sport-specific confidence', 'Psychological readiness'],
        exercises: [
          { name: 'Running Progression', sets: '1', reps: 'Program', notes: 'Walk-jog-run continuum' },
          { name: 'Reactive Agility Drills', sets: '4', reps: '6' },
          { name: 'Deceleration Training', sets: '3', reps: '8' },
          { name: 'Jump-Landing Mechanics', sets: '3', reps: '10' },
        ],
        criteria: ['LSI >90% quad/hamstring', 'Hop test >90%', 'Psychological readiness (ACL-RSI)'],
      },
    ],
    specialTests: [
      { name: 'Lachman Test', sensitivity: '87%', specificity: '93%', positive: 'Increased anterior tibial translation' },
      { name: 'Anterior Drawer Test', sensitivity: '62%', specificity: '88%', positive: 'Anterior tibial translation >5mm' },
      { name: 'Pivot Shift Test', sensitivity: '48%', specificity: '98%', positive: 'Clunk or pivot sensation' },
    ],
    returnToSport: [
      'LSI ≥90% for quadriceps and hamstring strength',
      'Hop tests (single, triple, crossover) ≥90%',
      'No effusion or pain with sport-specific loading',
      'Psychological readiness (ACL-RSI ≥65)',
      'Minimum 9 months post-surgery',
    ],
  },
  {
    id: 'ankle',
    name: 'Lateral Ankle Sprain',
    icon: '🦶',
    prevalence: 'Most common acute sport injury',
    overview: 'Rehabilitation for Grade I-III lateral ankle sprain targeting the anterior talofibular and calcaneofibular ligaments.',
    phases: [
      {
        name: 'Phase 1: Protection (0-3 days)',
        duration: '3 days',
        goals: ['Control pain and swelling', 'Protect healing tissue', 'Maintain fitness'],
        exercises: [
          { name: 'RICE Protocol', sets: '4-6x', reps: '20 min', notes: 'Every 2-3 hours' },
          { name: 'Ankle Alphabet', sets: '3', reps: '1 full alphabet', notes: 'Within pain-free range' },
          { name: 'Toe Curls', sets: '3', reps: '20' },
          { name: 'Upper Body Conditioning', sets: '1', reps: '20-30 min' },
        ],
        criteria: ['Swelling reducing', 'Weight-bearing tolerable'],
      },
      {
        name: 'Phase 2: Mobility (3-14 days)',
        duration: '10 days',
        goals: ['Restore full ROM', 'Normal weight-bearing gait', 'Begin strength work'],
        exercises: [
          { name: 'Gastrocnemius Stretch', sets: '3', reps: '30s hold', notes: 'Knee straight and bent' },
          { name: 'Calf Raises', sets: '3', reps: '15' },
          { name: 'Towel Scrunching', sets: '3', reps: '30s' },
          { name: 'Single-Leg Balance', sets: '3', reps: '30s', notes: 'Progress to eyes closed' },
        ],
        criteria: ['Full passive ROM', 'Normal gait', 'Able to perform single-leg balance'],
      },
      {
        name: 'Phase 3: Strengthening & Proprioception (2-6 weeks)',
        duration: '4 weeks',
        goals: ['Full strength', 'Dynamic balance', 'Agility capacity'],
        exercises: [
          { name: 'Single-Leg Calf Raise', sets: '3', reps: '20' },
          { name: 'Lateral Step-Up', sets: '3', reps: '12' },
          { name: 'Wobble Board Training', sets: '3', reps: '60s' },
          { name: 'Lateral Band Walks', sets: '3', reps: '20' },
        ],
        criteria: ['No pain on hopping', 'Single-leg balance eyes closed >15s'],
      },
    ],
    specialTests: [
      { name: 'Anterior Drawer Test (Ankle)', sensitivity: '73%', specificity: '97%', positive: 'Increased anterior talar translation' },
      { name: 'Talar Tilt Test', sensitivity: '50%', specificity: '88%', positive: 'Increased inversion compared to uninvolved side' },
      { name: 'Ottawa Ankle Rules', sensitivity: '98%', specificity: '42%', positive: 'Use to rule out fracture' },
    ],
    returnToSport: [
      'Full pain-free ROM compared to uninvolved side',
      'Single-leg calf raise equal to uninvolved side',
      'Successful hop test without pain',
      'No giving way or apprehension',
      'Successful sport-specific drills',
    ],
  },
  {
    id: 'hamstring',
    name: 'Hamstring Strain',
    icon: '🏃',
    prevalence: 'Most common muscle injury in sport',
    overview: 'Evidence-based rehabilitation for Grade I-II hamstring muscle strain. Focus on eccentric strengthening and sport-specific return.',
    phases: [
      {
        name: 'Phase 1: Acute (0-7 days)',
        duration: '7 days',
        goals: ['Control pain', 'Maintain flexibility within pain-free limits', 'Begin isometric work'],
        exercises: [
          { name: 'Prone Hamstring Isometric', sets: '3', reps: '10 × 10s', notes: 'Below pain threshold (3-4/10)' },
          { name: 'Supported Hip Extension', sets: '3', reps: '15' },
          { name: 'Standing Hip Hinge to ROM limit', sets: '3', reps: '10' },
          { name: 'Aqua Running', sets: '1', reps: '20 min', notes: 'If available' },
        ],
        criteria: ['Able to walk without limping', 'Isometric holds pain ≤3/10'],
      },
      {
        name: 'Phase 2: Eccentric Loading (1-3 weeks)',
        duration: '2 weeks',
        goals: ['Tissue remodeling', 'Eccentric strength', 'Running mechanics'],
        exercises: [
          { name: 'Slow Nordic Hamstring Curl', sets: '3', reps: '6', notes: '6s eccentric phase only' },
          { name: 'Single-Leg RDL', sets: '3', reps: '10', notes: 'Heavy but pain-free' },
          { name: 'Glute Bridge March', sets: '3', reps: '12' },
          { name: 'Straight-Line Jogging', sets: '1', reps: 'Progressive program' },
        ],
        criteria: ['Pain-free slow jogging', 'Nordic eccentric pain ≤3/10'],
      },
      {
        name: 'Phase 3: Running Mechanics (3-6 weeks)',
        duration: '3 weeks',
        goals: ['Full sprint capacity', 'Change of direction', 'Confidence at sport speed'],
        exercises: [
          { name: 'Full Nordic Hamstring Curl', sets: '4', reps: '6', notes: 'Full eccentric + concentric' },
          { name: 'A-Skip / B-Skip Drills', sets: '3', reps: '20m' },
          { name: 'Sprint Acceleration 50-80%', sets: '6', reps: '30m' },
          { name: 'Change of Direction Drills', sets: '4', reps: '5 per side' },
        ],
        criteria: ['Full sprint speed', 'No restriction on hamstring loading', 'Athletic confidence'],
      },
    ],
    specialTests: [
      { name: 'Palpation at Injury Site', sensitivity: '71%', specificity: '89%', positive: 'Point tenderness at muscle belly or proximal tendon' },
      { name: 'Active Knee Extension (Supine 90°)', sensitivity: '80%', specificity: '79%', positive: 'Pain and/or restriction compared to uninvolved' },
      { name: 'Stiffness at 45° Hip Flexion', sensitivity: '85%', specificity: '83%', positive: 'Asymmetrical stiffness detected' },
    ],
    returnToSport: [
      'Pain-free at full sprint speed',
      'Asymmetry <10% on hamstring strength testing',
      'Successful sport-specific training session',
      'No apprehension during change-of-direction',
      'At least 3 weeks of progressive loading post-injury',
    ],
  },
  {
    id: 'shoulder',
    name: 'Rotator Cuff Tendinopathy',
    icon: '💪',
    prevalence: 'Most common shoulder pathology',
    overview: 'Staged loading protocol for rotator cuff tendinopathy. Emphasizes load management and progressive strengthening.',
    phases: [
      {
        name: 'Phase 1: Load Management (0-4 weeks)',
        duration: '4 weeks',
        goals: ['Identify and reduce provocative loads', 'Begin isometric loading', 'Postural correction'],
        exercises: [
          { name: 'Rotator Cuff Isometric (IR/ER)', sets: '5', reps: '45s hold', notes: 'At 60° abduction' },
          { name: 'Scapular Retraction', sets: '3', reps: '15' },
          { name: 'Pec Minor Stretch', sets: '3', reps: '30s' },
          { name: 'Thoracic Extension Mobilisation', sets: '2', reps: '10' },
        ],
        criteria: ['Able to sleep without significant pain', 'Isometric loading tolerated'],
      },
      {
        name: 'Phase 2: Isotonic Strengthening (4-12 weeks)',
        duration: '8 weeks',
        goals: ['RC strength', 'Scapular stability', 'Overhead capacity'],
        exercises: [
          { name: 'Side-Lying External Rotation', sets: '3', reps: '15' },
          { name: 'Full Can / Empty Can', sets: '3', reps: '15' },
          { name: 'Serratus Anterior Push-Up Plus', sets: '3', reps: '15' },
          { name: 'Prone Y-T-W', sets: '3', reps: '12' },
        ],
        criteria: ['Pain ≤3/10 with isotonic loading', 'Scapular dyskinesis corrected'],
      },
      {
        name: 'Phase 3: Overhead & Sport Loading (12+ weeks)',
        duration: 'Progressive',
        goals: ['Full overhead strength', 'Sport-specific throwing/pushing', 'Return to activity'],
        exercises: [
          { name: 'Overhead Press Progression', sets: '3', reps: '10' },
          { name: 'Pull-Up Progression', sets: '3', reps: '8' },
          { name: 'Sport-Specific Drills', sets: '1', reps: 'Program' },
          { name: 'Plyometric Push-Up', sets: '3', reps: '8', notes: 'Late stage only' },
        ],
        criteria: ['Full overhead ROM without pain', 'Strength symmetry >85%'],
      },
    ],
    specialTests: [
      { name: 'Hawkins-Kennedy Test', sensitivity: '80%', specificity: '66%', positive: 'Reproduction of shoulder pain' },
      { name: 'Neer Sign', sensitivity: '72%', specificity: '60%', positive: 'Pain on passive forward flexion' },
      { name: 'Empty Can Test (Supraspinatus)', sensitivity: '74%', specificity: '84%', positive: 'Weakness and/or pain in elevation' },
    ],
    returnToSport: [
      'Pain ≤2/10 at rest and with sport-specific activity',
      'Full overhead ROM symmetrical',
      'RC strength >85% compared to uninvolved side',
      'Sport-specific workload completed without flare',
    ],
  },
  {
    id: 'lower_back',
    name: 'Non-Specific Lower Back Pain',
    icon: '🔙',
    prevalence: 'Leading cause of disability globally',
    overview: 'Evidence-based approach to non-specific LBP. Movement is medicine. Avoid prolonged rest and bed rest.',
    phases: [
      {
        name: 'Phase 1: Education & Movement (0-6 weeks)',
        duration: '6 weeks',
        goals: ['Pain neuroscience education', 'Fear avoidance reduction', 'Restore movement patterns'],
        exercises: [
          { name: 'Cat-Cow Mobilisation', sets: '3', reps: '10' },
          { name: 'Hip Hinge Pattern Practice', sets: '3', reps: '10', notes: 'Focus on movement quality' },
          { name: 'Bird-Dog', sets: '3', reps: '10 per side' },
          { name: 'Walking Programme', sets: '1', reps: '20-30 min daily' },
        ],
        criteria: ['Able to walk 30 min pain-free', 'Fear avoidance improving'],
      },
      {
        name: 'Phase 2: Strengthening (6-16 weeks)',
        duration: '10 weeks',
        goals: ['Global trunk strength', 'Hip strength', 'Load tolerance'],
        exercises: [
          { name: 'McGill Big 3 (Modified Curl-Up, Side Bridge, Bird-Dog)', sets: '3', reps: 'Per protocol', notes: 'McGill protocol' },
          { name: 'Glute Bridge', sets: '3', reps: '15' },
          { name: 'Bodyweight Squat', sets: '3', reps: '15' },
          { name: 'Suitcase Carry', sets: '3', reps: '20m per side' },
        ],
        criteria: ['Activities of daily living pain-free', 'Core endurance tests normal range'],
      },
    ],
    specialTests: [
      { name: 'Straight Leg Raise', sensitivity: '91%', specificity: '26%', positive: 'Radicular pain below knee at <70°' },
      { name: 'Slump Test', sensitivity: '84%', specificity: '83%', positive: 'Reproduction of radicular symptoms, relieved by neck extension' },
      { name: 'Active Straight Leg Raise', sensitivity: '87%', specificity: '94%', positive: 'Inability to hold leg up due to perceived instability' },
    ],
    returnToSport: [
      'Activities of daily living fully pain-free',
      'Sport-specific movement patterns demonstrated without pain',
      'No neurological deficits',
      'Strength and endurance testing within normal ranges',
    ],
  },
];

function PhaseAccordion({ phase }: { phase: InjuryProtocol['phases'][0] }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-100 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-4 hover:bg-slate-50 transition-colors text-left"
      >
        <div>
          <div className="text-sm font-semibold text-slate-900">{phase.name}</div>
          <div className="text-xs text-slate-500 mt-0.5">Duration: {phase.duration}</div>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="border-t border-slate-100 p-4 space-y-5 animate-fade-in bg-white">
          {/* Goals */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Goals</h4>
            <ul className="space-y-1">
              {phase.goals.map((g, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle className="w-3.5 h-3.5 text-teal-500 mt-0.5 flex-shrink-0" />
                  {g}
                </li>
              ))}
            </ul>
          </div>

          {/* Exercises */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">Exercises</h4>
            <div className="space-y-2">
              {phase.exercises.map((ex, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                  <div className="w-6 h-6 bg-teal-100 rounded-lg flex items-center justify-center text-teal-700 text-xs font-bold flex-shrink-0">{i + 1}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-slate-900">{ex.name}</div>
                    {ex.notes && <div className="text-xs text-slate-500 mt-0.5">{ex.notes}</div>}
                  </div>
                  <div className="text-xs text-slate-500 whitespace-nowrap">{ex.sets} × {ex.reps}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Criteria */}
          <div>
            <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">Progression Criteria</h4>
            <ul className="space-y-1">
              {phase.criteria.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-teal-700">
                  <ChevronRight className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Rehabilitation() {
  const [selected, setSelected] = useState<InjuryProtocol>(protocols[0]);
  const [tab, setTab] = useState<'protocol' | 'tests' | 'rts'>('protocol');

  return (
    <div className="min-h-screen bg-surface page-enter">
      {/* Header */}
      <div className="bg-white border-b border-slate-100">
        <div className="container-max px-4 sm:px-6 lg:px-8 py-14 pt-28">
          <div className="badge-rose mb-4">Rehabilitation</div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">
            Evidence-Based Rehabilitation
          </h1>
          <p className="text-slate-500 text-lg max-w-xl">
            Criterion-based rehabilitation protocols for common sport and orthopaedic injuries, grounded in current clinical evidence.
          </p>
          <div className="flex items-center gap-2 mt-5 bg-amber-50 border border-amber-100 rounded-xl px-4 py-3 w-fit">
            <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <p className="text-xs text-amber-700">For educational use only. Always consult a qualified clinician for assessment and treatment.</p>
          </div>
        </div>
      </div>

      <div className="container-max px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="space-y-2">
            {protocols.map((p) => (
              <button
                key={p.id}
                onClick={() => { setSelected(p); setTab('protocol'); }}
                className={`w-full text-left px-4 py-3.5 rounded-xl transition-all duration-200 ${
                  selected.id === p.id
                    ? 'bg-teal-500 text-white shadow-teal'
                    : 'bg-white border border-slate-100 text-slate-700 hover:border-teal-200 hover:text-teal-700'
                }`}
              >
                <div className="text-base mb-0.5">{p.icon}</div>
                <div className={`text-sm font-semibold ${selected.id === p.id ? 'text-white' : 'text-slate-900'}`}>
                  {p.name}
                </div>
                <div className={`text-xs mt-0.5 ${selected.id === p.id ? 'text-teal-100' : 'text-slate-500'}`}>
                  {p.prevalence}
                </div>
              </button>
            ))}
          </div>

          {/* Main content */}
          <div className="lg:col-span-3">
            <div className="card mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="text-4xl">{selected.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-slate-900">{selected.name}</h2>
                  <p className="text-slate-500 text-sm mt-1">{selected.overview}</p>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex gap-1 bg-slate-50 rounded-xl p-1 mt-4">
                {([
                  { key: 'protocol', label: 'Protocol', icon: ClipboardList },
                  { key: 'tests', label: 'Special Tests', icon: Activity },
                  { key: 'rts', label: 'Return to Sport', icon: TrendingUp },
                ] as const).map(({ key, label, icon: Icon }) => (
                  <button
                    key={key}
                    onClick={() => setTab(key)}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                      tab === key ? 'bg-white shadow-soft text-teal-700' : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content */}
            {tab === 'protocol' && (
              <div className="space-y-3 animate-fade-in">
                {selected.phases.map((phase, i) => (
                  <PhaseAccordion key={i} phase={phase} />
                ))}
              </div>
            )}

            {tab === 'tests' && (
              <div className="space-y-4 animate-fade-in">
                {selected.specialTests.map((test, i) => (
                  <div key={i} className="card">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="text-base font-semibold text-slate-900">{test.name}</h3>
                      <div className="flex gap-2">
                        <span className="badge-teal badge">Sens: {test.sensitivity}</span>
                        <span className="badge bg-blue-50 text-blue-700">Spec: {test.specificity}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-600">
                      <span className="font-medium text-slate-700">Positive finding: </span>
                      {test.positive}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {tab === 'rts' && (
              <div className="card animate-fade-in">
                <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900 mb-5">
                  <TrendingUp className="w-5 h-5 text-teal-500" />
                  Return to Sport Criteria
                </h3>
                <ul className="space-y-3">
                  {selected.returnToSport.map((c, i) => (
                    <li key={i} className="flex items-start gap-3 p-3 bg-teal-50 rounded-xl">
                      <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{i + 1}</span>
                      </div>
                      <span className="text-sm text-teal-900">{c}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="text-xs text-amber-700 flex items-start gap-2">
                    <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                    All return-to-sport decisions should be made in conjunction with a qualified clinician. Criteria are minimum standards, not guarantees of safety.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
