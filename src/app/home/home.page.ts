import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  showProjects = false;
  showFacts = false;
  showContact = false;

  constructor() {}

  toggleSection(section: string) {
    // Reset all sections to false
    this.showProjects = false;
    this.showFacts = false;
    this.showContact = false;

    // Toggle the selected section
    if (section === 'projects') {
      this.showProjects = true;
    } else if (section === 'facts') {
      this.showFacts = true;
    } else if (section === 'contactus') {
      this.showContact = true;
    }
  }

  projects = [
    {
      title: 'Dragon Game',
      description: 'This is a Python-based game created using the pygame library. In the game, you control a dragon that moves around a grid to collect food, and your score increases with each food item collected. The game ends if the dragon hits the wall or its own body.',
      link: 'https://github.com/TwistedMiraculous/Hack-Club-High-Seas',
      image: 'https://cloud-bmmgox0kg-hack-club-bot.vercel.app/0python_3.11_1_6_2025_8_33_52_pm.png'
    },
    {
      title: 'Agar.io Replicaish',
      description: 'This is a simple clone of the popular Agar.io game built using Python and the Pygame library. In this game, players control a circular cell that grows in size by consuming smaller cells scattered across the map. The goal is to grow larger by eating cells while avoiding being eaten by larger cells.',
      link: 'https://github.com/TwistedMiraculous/Agario-Replicaish',
      image: 'https://cloud-4lod47rtl-hack-club-bot.vercel.app/0python_3.11_1_11_2025_2_23_24_pm.png'
    }
  ];
}
