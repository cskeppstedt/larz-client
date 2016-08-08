var React = require('react'),
    playerNames  = require('../../config/config').players;

require('./cs_player.styl');

var example = { "achievements": { "AVENGE_FRIEND": 1, "BLOODLESS_VICTORY": 1, "DAMAGE_NO_KILL": 1, "EARN_MONEY_LOW": 1, "FAST_ROUND_WIN": 1, "FLAWLESS_VICTORY": 1, "GIVE_DAMAGE_LOW": 1, "IMMOVABLE_OBJECT": 1, "KILLING_SPREE_ENDER": 1, "KILLS_WITH_MULTIPLE_GUNS": 1, "KILL_ENEMIES_WHILE_BLIND": 1, "KILL_ENEMY_LAST_BULLET": 1, "KILL_ENEMY_LOW": 1, "KILL_ENEMY_RELOADING": 1, "KILL_LOW_DAMAGE": 1, "KILL_WHEN_AT_LOW_HEALTH": 1, "LAST_PLAYER_ALIVE": 1, "LOSSLESS_EXTERMINATION": 1, "STILL_ALIVE": 1, "UNSTOPPABLE_FORCE": 1, "WIN_BOMB_DEFUSE": 1, "WIN_BOMB_PLANT": 1, "WIN_MAP_DE_DUST2": 1, "WIN_PISTOLROUNDS_LOW": 1, "WIN_ROUNDS_LOW": 1, "WIN_ROUNDS_MED": 1 }, "id": "76561198311014871", "stats": { "GI_lesson_Csgo_cycle_weapons_kb": 16, "GI_lesson_bomb_sites_A": 1, "GI_lesson_bomb_sites_B": 1, "GI_lesson_csgo_instr_explain_bomb_carrier": 1, "GI_lesson_csgo_instr_explain_buyarmor": 16, "GI_lesson_csgo_instr_explain_buymenu": 16, "GI_lesson_csgo_instr_explain_follow_bomber": 1, "GI_lesson_csgo_instr_explain_inspect": 16, "GI_lesson_csgo_instr_explain_pickup_bomb": 1, "GI_lesson_csgo_instr_explain_plant_bomb": 16, "GI_lesson_csgo_instr_explain_prevent_bomb_pickup": 1, "GI_lesson_csgo_instr_explain_reload": 17, "GI_lesson_csgo_instr_explain_zoom": 16, "GI_lesson_defuse_planted_bomb": 1, "GI_lesson_find_planted_bomb": 1, "GI_lesson_tr_explain_plant_bomb": 16, "GI_lesson_version_number": 16, "last_match_contribution_score": 15, "last_match_ct_wins": 13, "last_match_damage": 559, "last_match_deaths": 25, "last_match_favweapon_hits": 16, "last_match_favweapon_id": 13, "last_match_favweapon_kills": 2, "last_match_favweapon_shots": 251, "last_match_kills": 4, "last_match_max_players": 10, "last_match_money_spent": 73300, "last_match_mvps": 1, "last_match_rounds": 29, "last_match_t_wins": 16, "last_match_wins": 16, "total_contribution_score": 976, "total_damage_done": 34103, "total_deaths": 836, "total_defused_bombs": 1, "total_gg_matches_played": 6, "total_gun_game_rounds_played": 6, "total_gun_game_rounds_won": 4, "total_hits_ak47": 224, "total_hits_aug": 29, "total_hits_bizon": 13, "total_hits_deagle": 23, "total_hits_famas": 51, "total_hits_fiveseven": 5, "total_hits_g3sg1": 1, "total_hits_galilar": 204, "total_hits_glock": 48, "total_hits_hkp2000": 43, "total_hits_m249": 7, "total_hits_m4a1": 226, "total_hits_mac10": 26, "total_hits_mag7": 10, "total_hits_mp7": 17, "total_hits_mp9": 11, "total_hits_negev": 18, "total_hits_nova": 32, "total_hits_p250": 9, "total_hits_p90": 35, "total_hits_sg556": 90, "total_hits_ssg08": 3, "total_hits_ump45": 51, "total_hits_xm1014": 14, "total_kills": 219, "total_kills_against_zoomed_sniper": 16, "total_kills_ak47": 50, "total_kills_aug": 8, "total_kills_bizon": 1, "total_kills_deagle": 4, "total_kills_enemy_blinded": 2, "total_kills_famas": 7, "total_kills_fiveseven": 1, "total_kills_g3sg1": 1, "total_kills_galilar": 44, "total_kills_glock": 8, "total_kills_headshot": 78, "total_kills_hkp2000": 10, "total_kills_m249": 1, "total_kills_m4a1": 37, "total_kills_mac10": 3, "total_kills_mp7": 2, "total_kills_mp9": 1, "total_kills_negev": 4, "total_kills_nova": 3, "total_kills_p250": 2, "total_kills_p90": 4, "total_kills_sg556": 13, "total_kills_ssg08": 2, "total_kills_ump45": 12, "total_kills_xm1014": 1, "total_matches_played": 40, "total_matches_won": 14, "total_money_earned": 1781700, "total_mvps": 12, "total_planted_bombs": 18, "total_rounds_map_cs_italy": 12, "total_rounds_map_de_cbble": 29, "total_rounds_map_de_dust2": 293, "total_rounds_map_de_nuke": 27, "total_rounds_map_de_train": 2, "total_rounds_played": 662, "total_shots_ak47": 2672, "total_shots_aug": 319, "total_shots_awp": 1, "total_shots_bizon": 46, "total_shots_deagle": 180, "total_shots_famas": 457, "total_shots_fired": 11493, "total_shots_fiveseven": 12, "total_shots_g3sg1": 2, "total_shots_galilar": 1821, "total_shots_glock": 374, "total_shots_hit": 1184, "total_shots_hkp2000": 220, "total_shots_m249": 62, "total_shots_m4a1": 1858, "total_shots_mac10": 214, "total_shots_mag7": 120, "total_shots_mp7": 145, "total_shots_mp9": 130, "total_shots_negev": 276, "total_shots_nova": 135, "total_shots_p250": 32, "total_shots_p90": 216, "total_shots_sawedoff": 48, "total_shots_scar20": 1, "total_shots_sg556": 1335, "total_shots_ssg08": 9, "total_shots_ump45": 658, "total_shots_xm1014": 150, "total_time_played": 55490, "total_weapons_donated": 48, "total_wins": 323, "total_wins_map_cs_italy": 10, "total_wins_map_de_cbble": 24, "total_wins_map_de_dust2": 109, "total_wins_map_de_nuke": 11, "total_wins_map_de_train": 2, "total_wins_pistolround": 19 } };

function kd (kills, deaths) {
    return kills + '/' + deaths + ' (' + (kills / deaths).toFixed(2) + ')'
}

function hours (seconds) {
    return (seconds / 3600).toFixed(1) + 'h';
}

function percentage (number, total) {
    return (100 * number / total).toFixed(1) + '%';
}

function matchOutcome (wins, rounds) {
    var loses = rounds - wins;
    if (wins === 15 && rounds === 30) {
        return 'Draw (15-15)';
    } else if (wins > 15) {
        return 'Won (' + wins + '-' + loses + ')'
    } else {
        return 'Lost (' + loses + '-' + wins + ')'
    }
}

module.exports = React.createClass({
    render: function() {
        var stats = this.props.stats;

        return (
            <li className='cs-player'>
                <h2 className='cs-player__title'>
                    {playerNames[this.props.id]}
                </h2>

                <div className='cs-player__content'>
                    <div className='content__column'>
                        <h3 className='cs-player__header'>Last match</h3>
                        <dl className='cs-player__stats-list'>
                            <dt className='stats-list__label'>Kills/deaths</dt>
                            <dd className='stats-list__value'>{kd(stats.last_match_kills, stats.last_match_deaths)}</dd>

                            <dt className='stats-list__label'>Match outcome</dt>
                            <dd className='stats-list__value'>{matchOutcome(stats.last_match_wins, stats.last_match_rounds)}</dd>
                        </dl>
                    </div>
                    <div className='content__column'>
                        <h3 className='cs-player__header'>Totals</h3>
                        <dl className='cs-player__stats-list'>
                            <dt className='stats-list__label'>Kills/deaths</dt>
                            <dd className='stats-list__value'>{kd(stats.total_kills, stats.total_deaths)}</dd>

                            <dt className='stats-list__label'>Time played</dt>
                            <dd className='stats-list__value'>{hours(stats.total_time_played)}</dd>

                            <dt className='stats-list__label'>Matches</dt>
                            <dd className='stats-list__value'>Won {stats.total_matches_won} of {stats.total_matches_played} ({percentage(stats.total_matches_won, stats.total_matches_played)})</dd>
                        </dl>
                    </div>
                </div>
            </li>
        );
    }
});
